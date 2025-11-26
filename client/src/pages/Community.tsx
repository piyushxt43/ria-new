import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Users2, Heart, Send, Shield, Sparkles } from "lucide-react";

const tabs = ["Accountability Partner", "Support Group", "Daily Wall"] as const;

const samplePosts = [
  {
    id: 1,
    user: "RiseAgain",
    streak: "Day 15",
    content: "Day 15 without alcohol! Ria pinged me right before I usually pour a drink. I went for a walk instead.",
  },
  {
    id: 2,
    user: "FocusFlow",
    streak: "Day 7",
    content: "Made it through my first Friday night without vaping. Breathing exercise + accountability partner saved me.",
  },
  {
    id: 3,
    user: "CalmCoder",
    streak: "Day 42",
    content: "Ria noticed my mood dip and scheduled a check-in. Felt so seen. Keep going fam!",
  },
];

export default function Community() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Accountability Partner");

  return (
    <div className="space-y-8 p-4 md:p-8">
      <header className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg backdrop-blur">
        <p className="text-sm uppercase tracking-[0.4em] text-teal-500">Community signal graph</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">You’re never alone in recovery</h1>
        <p className="mt-2 text-slate-600">
          Ria matches you with accountability partners, peer groups, and a positive daily wall the moment motivation dips.
        </p>
      </header>

      <div className="flex flex-wrap gap-3 rounded-full border border-slate-100 bg-white/70 p-2 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
              tab === activeTab ? "bg-gradient-to-r from-teal-300 to-blue-400 text-slate-900 shadow-md" : "text-slate-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Accountability Partner" && (
        <motion.section
          className="grid gap-6 lg:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-xl backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-teal-500">Your match</p>
                <h2 className="text-2xl font-semibold text-slate-900">Phoenix247</h2>
                <p className="text-sm text-slate-500">32 days clean · Online now</p>
              </div>
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-300 to-blue-400 text-white font-semibold flex items-center justify-center">
                P
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p>Matched based on addiction type, timezone, and streak cadence.</p>
              <p className="flex items-center gap-2 text-emerald-600">
                <Shield size={16} /> Ria monitors all partner chats for safety and positivity.
              </p>
            </div>
            <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-teal-300 to-blue-400 py-3 font-semibold text-slate-900">
              Message partner
            </button>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner">
            <p className="text-sm font-semibold text-slate-700">Chat preview</p>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">You · 9:12 PM</p>
                <p className="mt-1">Craving hits at 9 tonight. Holding on.</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-teal-50 to-white p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-teal-400">Phoenix247 · 9:13 PM</p>
                <p className="mt-1">I'm logging in too. Let's do the SOS breath together. You got this.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Ria · 9:14 PM</p>
                <p className="mt-1">Great teamwork. I’ll nudge you again in 20 minutes.</p>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {activeTab === "Support Group" && (
        <motion.section
          className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-xl backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-teal-500">Featured group</p>
              <h2 className="text-2xl font-semibold text-slate-900">Students quitting vaping</h2>
              <p className="text-sm text-slate-500">47 active members · Moderated by Ria</p>
            </div>
            <button className="rounded-full border border-teal-200 px-5 py-2 text-sm font-semibold text-teal-600">
              Join group chat
            </button>
          </div>
          <div className="mt-6 space-y-3 rounded-2xl border border-slate-100 bg-white p-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Shield size={14} />
              Group rules: Be kind · No advice without consent · Use SOS for crisis
            </div>
            <div className="h-64 space-y-3 overflow-y-auto">
              {[
                { user: "Skyline", text: "Ria just alerted me for a craving spike. Doing the grounding exercise now." },
                { user: "PixelDust", text: "Day 5 off nicotine. Anyone else get headaches? Tips welcome." },
                { user: "Ria", text: "If you feel dizzy, hydrate + take 3 slow breaths. Sending a calm reel now." },
              ].map((message) => (
                <div key={message.user} className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{message.user}</p>
                  <p className="mt-1">{message.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {activeTab === "Daily Wall" && (
        <motion.section
          className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-xl backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-teal-500">Real wins</p>
              <h2 className="text-2xl font-semibold text-slate-900">Daily wall</h2>
            </div>
            <button className="flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600">
              <MessageCircle size={16} />
              Share your win
            </button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {samplePosts.map((post) => (
              <div key={post.id} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-700">{post.user}</p>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-600">{post.streak}</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{post.content}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <button className="flex items-center gap-1 text-rose-500">
                    <Heart size={14} /> 18
                  </button>
                  <button className="flex items-center gap-1 text-slate-500">
                    <Send size={14} /> Support
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      <div className="rounded-3xl border border-rose-100 bg-rose-50/70 p-6 shadow-inner">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-rose-500">Safety net</p>
            <h3 className="text-lg font-semibold text-rose-600">
              Ria quietly monitors all spaces and escalates to SOS if anyone signals distress.
            </h3>
          </div>
          <button className="rounded-full border border-rose-200 px-5 py-2 text-sm font-semibold text-rose-500">
            Review policies
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-teal-100 bg-teal-50/80 p-6 shadow-inner">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-teal-500">Community health</p>
            <div className="mt-2 flex gap-6 text-sm text-teal-700">
              <span className="flex items-center gap-2">
                <Users2 size={16} /> 312 peers online
              </span>
              <span className="flex items-center gap-2">
                <Heart size={16} /> 142 encouragements shared today
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={16} /> 98 AI-suggested matches
              </span>
            </div>
          </div>
          <button className="rounded-full border border-white/60 bg-white px-5 py-2 text-sm font-semibold text-teal-600">
            Explore all circles
          </button>
        </div>
      </div>
    </div>
  );
}

