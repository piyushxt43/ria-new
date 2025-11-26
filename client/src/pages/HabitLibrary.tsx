import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Zap, Music, Coffee, Wind } from "lucide-react";

const triggers = [
  { label: "Stressed", icon: "😰" },
  { label: "Bored", icon: "🥱" },
  { label: "Lonely", icon: "😔" },
  { label: "Social situation", icon: "🎉" },
  { label: "Late night", icon: "🌙" },
];

const activities = [
  { id: 1, title: "5-minute wall sit challenge", time: "2 min", description: "Quick physical redirect when urge spikes.", icon: <Zap className="h-5 w-5" /> },
  { id: 2, title: "Guided breath · box method", time: "5 min", description: "Calm nervous system before cravings swell.", icon: <Wind className="h-5 w-5" /> },
  { id: 3, title: "Call accountability partner", time: "10 min", description: "Use your network before relapse windows.", icon: <Music className="h-5 w-5" /> },
  { id: 4, title: "Drink warm tea ritual", time: "5 min", description: "Replace nicotine hand-to-mouth routine.", icon: <Coffee className="h-5 w-5" /> },
];

export default function HabitLibrary() {
  const [query, setQuery] = useState("");
  const [selectedTrigger, setSelectedTrigger] = useState<string | null>(null);
  const filteredActivities = useMemo(
    () => activities.filter((activity) => activity.title.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <div className="space-y-8 p-4 md:p-8">
      <header className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg backdrop-blur">
        <p className="text-sm uppercase tracking-[0.4em] text-teal-500">Habit replacement library</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Swap urges for supportive actions in seconds</h1>
        <p className="mt-2 text-slate-600">Ria loads replacements based on your trigger type and time of day.</p>
      </header>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 items-center rounded-3xl border border-slate-200 bg-white/80 p-3 shadow-sm">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Feeling an urge? Search for alternatives..."
            className="flex-1 bg-transparent px-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {triggers.map((trigger) => (
            <button
              key={trigger.label}
              onClick={() => setSelectedTrigger(trigger.label)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                selectedTrigger === trigger.label ? "bg-gradient-to-r from-teal-300 to-blue-400 text-slate-900" : "bg-white/70 text-slate-500"
              }`}
            >
              {trigger.icon} {trigger.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredActivities.map((activity) => (
          <motion.div
            key={activity.id}
            className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-lg backdrop-blur"
            whileHover={{ y: -4, boxShadow: "0 30px 60px -15px rgba(15,23,42,0.2)" }}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-teal-300 to-blue-400 p-3 text-white">{activity.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{activity.title}</h3>
                <p className="text-sm text-slate-500">{activity.time}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">{activity.description}</p>
            <button className="mt-4 w-full rounded-2xl border border-teal-200 py-2 text-sm font-semibold text-teal-600">
              Try now
            </button>
          </motion.div>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner">
        <h3 className="text-lg font-semibold text-slate-900">Guided breathing exercise</h3>
        <p className="text-sm text-slate-500">Sync breath with the expanding circle for 60 seconds.</p>
        <div className="mt-6 flex flex-col items-center gap-4">
          <motion.div
            className="h-40 w-40 rounded-full bg-gradient-to-br from-teal-200 to-blue-200"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <p className="text-sm text-slate-500">Breathe in... hold... breathe out...</p>
        </div>
      </div>
    </div>
  );
}

