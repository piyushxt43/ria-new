import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {
  Bell,
  CheckCircle2,
  Flame,
  Trophy,
  BookOpen,
  Users,
  Shield,
  CircleEllipsis,
  Smile,
  Meh,
  Frown,
  CloudRain,
  Angry,
  MessageSquare,
} from "lucide-react";

const cravingData = [
  { day: "Thu", value: 5 },
  { day: "Fri", value: 6 },
  { day: "Sat", value: 8 },
  { day: "Sun", value: 7 },
  { day: "Mon", value: 4 },
  { day: "Tue", value: 3 },
  { day: "Today", value: 4 },
];

const tasks = [
  { id: 1, label: "Drink 3 liters of water 💧", time: "5 min", type: "body" },
  { id: 2, label: "15-minute walk 🚶", time: "15 min", type: "body" },
  { id: 3, label: "No nicotine after 8 PM 🚫", time: "All evening", type: "primary" },
  { id: 4, label: "Evening journal reflection 📝", time: "10 min", type: "emotional" },
  { id: 5, label: "Send gratitude text 📱", time: "2 min", type: "connection" },
];

const moodOptions = [
  { icon: Smile, label: "Great", value: "great" },
  { icon: Meh, label: "Good", value: "good" },
  { icon: Frown, label: "Okay", value: "okay" },
  { icon: CloudRain, label: "Low", value: "low" },
  { icon: Angry, label: "Frustrated", value: "frustrated" },
];

const quickActions = [
  { icon: BookOpen, label: "Education", path: "/education" },
  { icon: Users, label: "Community", path: "/community" },
  { icon: Shield, label: "SOS", path: "/sos" },
  { icon: Trophy, label: "Progress", path: "/profile" },
];

export default function Dashboard() {
  const [completedTasks, setCompletedTasks] = useState<number[]>([1, 2]);
  const [selectedMood, setSelectedMood] = useState("good");

  const completedRatio = useMemo(() => completedTasks.length / tasks.length, [completedTasks.length]);

  const toggleTask = (taskId: number) => {
    setCompletedTasks((prev) => (prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]));
  };

  return (
    <div className="space-y-8 p-4 md:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-teal-500">Welcome back</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Ria is keeping you ahead of cravings today</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative rounded-full bg-white/70 p-3 shadow-sm">
            <Bell className="h-5 w-5 text-slate-600" />
            <span className="absolute -right-0.5 -top-0.5 inline-flex h-3.5 w-3.5 rounded-full bg-rose-500 text-[10px] text-white items-center justify-center">
              2
            </span>
          </button>
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-5 py-2 shadow-sm">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-300 to-blue-400 text-white font-semibold flex items-center justify-center">R</div>
            <div>
              <p className="text-sm font-semibold">Phoenix247</p>
              <p className="text-xs text-slate-500">Day 12 in recovery</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          className="rounded-3xl border border-white/60 bg-gradient-to-br from-teal-300 to-blue-400 p-6 text-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between">
            <p className="uppercase tracking-[0.4em] text-white/80 text-xs">Current streak</p>
            <Flame className="h-6 w-6" />
          </div>
          <div className="mt-6 text-5xl font-semibold">Day 12</div>
          <p className="mt-2 text-white/90">Longest streak: 21 days</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["1 day", "3 days", "1 week", "10 days", "2 weeks", "30 days"].map((chip, index) => {
              const unlocked = index < 5;
              return (
                <span
                  key={chip}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    unlocked ? "bg-white/90 text-slate-800" : "bg-white/30 text-white/70"
                  }`}
                >
                  {chip} {unlocked ? "✅" : "🔒"}
                </span>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-slate-100 bg-white/70 p-6 shadow-lg backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            <p className="font-semibold text-slate-700">How are you feeling today?</p>
            <CircleEllipsis className="h-5 w-5 text-slate-400" />
          </div>
          <div className="mt-5 grid grid-cols-5 gap-2">
            {moodOptions.map((option) => {
              const active = option.value === selectedMood;
              const Icon = option.icon;
              return (
                <button
                  key={option.value}
                  onClick={() => setSelectedMood(option.value)}
                  className={`flex flex-col items-center gap-1 rounded-2xl border px-2 py-3 text-sm transition-all ${
                    active ? "border-teal-300 bg-teal-50 text-teal-700" : "border-slate-200 text-slate-500 hover:border-slate-300"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {option.label}
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-slate-500">Ria will adjust your plan intensity based on your mood.</p>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-teal-500">Ria's current focus</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">I'm actively watching</h3>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-300 to-blue-400 text-white font-semibold flex items-center justify-center">
              R
            </div>
          </div>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              🔍 Watching for mood drops
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              📊 Tracking task completion rates
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              ⏰ Predicting high-risk times (9-11 PM)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              🎯 Adapting plan difficulty
            </li>
          </ul>
          <p className="mt-4 text-xs text-slate-400">Last updated 14 min ago · Next auto check-in at 8:45 PM</p>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg backdrop-blur lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Your plan for today</p>
              <h3 className="text-xl font-semibold text-slate-900">Let's keep the streak alive</h3>
            </div>
            <p className="text-sm font-semibold text-slate-500">
              {completedTasks.length}/{tasks.length} tasks
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {tasks.map((task) => {
              const done = completedTasks.includes(task.id);
              return (
                <motion.button
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all ${
                    done ? "border-teal-200 bg-teal-50" : "border-slate-100 bg-white"
                  }`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: task.id * 0.05 }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                        done ? "border-teal-400 bg-teal-100 text-teal-600" : "border-slate-200"
                      }`}
                    >
                      {done ? <CheckCircle2 className="h-4 w-4" /> : task.id}
                    </span>
                    <div>
                      <p className={`font-medium ${done ? "text-teal-800 line-through" : "text-slate-800"}`}>{task.label}</p>
                      <p className="text-sm text-slate-400">{task.time}</p>
                    </div>
                  </div>
                  {done && <span className="text-xs font-semibold text-teal-600">Completed</span>}
                </motion.button>
              );
            })}
          </div>

          <div className="mt-6 h-2 rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-gradient-to-r from-teal-300 to-blue-400" style={{ width: `${completedRatio * 100}%` }} />
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg backdrop-blur flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-teal-50 to-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-white text-teal-500 font-semibold flex items-center justify-center shadow">
                R
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-teal-500">AI Coach</p>
                <p className="font-semibold text-slate-900">I'm watching your progress</p>
                <p className="text-sm text-slate-500">Need me? I'm one tap away.</p>
              </div>
            </div>
            <button className="mt-4 w-full rounded-2xl bg-gradient-to-r from-teal-300 to-blue-400 py-3 font-semibold text-slate-900 shadow-md">
              Talk to Ria
            </button>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-700">Latest AI insight</p>
            <p className="mt-2 text-sm text-slate-500">
              “Your cravings spike on weekends. I added extra accountability tasks for Saturday nights.”
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-700">Craving intensity</p>
              <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-600">Predictive</span>
            </div>
            <div className="mt-4 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cravingData}>
                  <defs>
                    <linearGradient id="cravingGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#4ECDC4" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#4ECDC4" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                  <YAxis hide domain={[0, 10]} />
                  <Tooltip contentStyle={{ borderRadius: 16, borderColor: "transparent", boxShadow: "0 10px 30px rgba(15,23,42,0.08)" }} />
                  <Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4, fill: "#0ea5e9" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-xs text-slate-400">AI noted: high-risk window 9-11 PM. Extra support scheduled.</p>
          </div>
        </motion.div>
      </div>

      <div className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg backdrop-blur">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-slate-900">Quick actions</p>
          <p className="text-sm text-slate-500">Stay resourced in one tap</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <motion.a
                key={action.label}
                href={action.path}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-6 text-center shadow-sm"
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(15,23,42,0.08)" }}
              >
                <div className="rounded-2xl bg-gradient-to-br from-teal-300 to-blue-400 p-3 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold text-slate-700">{action.label}</p>
              </motion.a>
            );
          })}
        </div>
      </div>

      <motion.div
        className="rounded-3xl border border-teal-100 bg-teal-50/90 p-6 shadow-inner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-teal-600">System update</p>
            <h3 className="text-lg font-semibold text-slate-800">Ria scheduled an evening check-in at 8:45 PM.</h3>
            <p className="text-sm text-teal-700">
              Based on last week's activity, I'm adding a 5-minute grounding exercise before bedtime.
            </p>
          </div>
          <button className="rounded-full border border-teal-200 px-5 py-2 text-sm font-semibold text-teal-700">
            View adjustments
          </button>
        </div>
      </motion.div>
    </div>
  );
}

