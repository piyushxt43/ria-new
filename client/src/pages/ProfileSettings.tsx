import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Clock, Sliders, Bell } from "lucide-react";

type Section = "stats" | "ai" | "goals" | "contacts" | "privacy" | "about";

const sections: { id: Section; title: string; content: React.ReactNode }[] = [
  {
    id: "stats",
    title: "My Recovery Stats",
    content: (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-inner">
          <p className="text-xs uppercase tracking-[0.4em] text-teal-500">Total days</p>
          <p className="text-3xl font-semibold text-slate-900">47</p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-inner">
          <p className="text-xs uppercase tracking-[0.4em] text-teal-500">Longest streak</p>
          <p className="text-3xl font-semibold text-slate-900">21 days</p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-inner">
          <p className="text-xs uppercase tracking-[0.4em] text-teal-500">Total XP</p>
          <p className="text-3xl font-semibold text-slate-900">1,240</p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-inner">
          <p className="text-xs uppercase tracking-[0.4em] text-teal-500">Badges</p>
          <p className="text-3xl font-semibold text-slate-900">8 / 20</p>
        </div>
      </div>
    ),
  },
  {
    id: "ai",
    title: "AI Settings",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-inner">
          <Clock className="h-5 w-5 text-slate-500" />
          <div>
            <p className="text-sm font-semibold text-slate-700">Daily check-in time</p>
            <p className="text-xs text-slate-500">Currently 9:00 PM</p>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-inner">
          <p className="text-sm font-semibold text-slate-700">AI aggressiveness</p>
          <div className="mt-3 flex items-center gap-3">
            <Sliders className="h-5 w-5 text-slate-500" />
            <input type="range" min={1} max={3} defaultValue={2} className="flex-1" />
            <p className="text-xs text-slate-500">Moderate</p>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-inner">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-slate-500" />
            <p className="text-sm font-semibold text-slate-700">Notifications</p>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {["Daily reminders", "Craving alerts", "Milestone celebrations", "Community updates"].map((toggle) => (
              <label key={toggle} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/80 px-4 py-2">
                <span className="text-sm text-slate-600">{toggle}</span>
                <input type="checkbox" defaultChecked className="h-5 w-5 accent-teal-500" />
              </label>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "goals",
    title: "Recovery Goals",
    content: (
      <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-inner">
        <p className="text-sm font-semibold text-slate-700">Current goal</p>
        <p className="text-lg font-semibold text-slate-900">Quit completely</p>
        <p className="text-xs text-slate-500">Last modified by AI: 2 days ago</p>
        <button className="mt-4 rounded-full border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-600">Change goal</button>
      </div>
    ),
  },
  {
    id: "contacts",
    title: "Emergency Contacts",
    content: (
      <div className="space-y-3">
        {["Maya (Sister)", "Kai (Therapist)"].map((contact) => (
          <div key={contact} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-inner">
            <p className="text-sm font-semibold text-slate-700">{contact}</p>
            <button className="text-xs font-semibold text-teal-600">Edit</button>
          </div>
        ))}
        <button className="rounded-full border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-600">Add contact</button>
      </div>
    ),
  },
  {
    id: "privacy",
    title: "Privacy & Data",
    content: (
      <div className="space-y-3 text-sm text-slate-600">
        <p>Ria encrypts all event streams and maintains audit trails. Export or delete anytime.</p>
        <div className="flex gap-3">
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">Export data</button>
          <button className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-500">Delete account</button>
        </div>
      </div>
    ),
  },
  {
    id: "about",
    title: "About",
    content: (
      <div className="text-sm text-slate-600">
        <p>Version 1.0. Built with ❤️ for recovery. Terms · Privacy · Contact.</p>
      </div>
    ),
  },
];

export default function ProfileSettings() {
  const [open, setOpen] = useState<Record<Section, boolean>>({
    stats: true,
    ai: true,
    goals: false,
    contacts: false,
    privacy: false,
    about: false,
  });

  return (
    <div className="space-y-8 p-4 md:p-8">
      <header className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-teal-500">Profile & settings</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">Phoenix247</h1>
            <p className="text-sm text-slate-500">Member since Mar 2025</p>
          </div>
          <button className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600">Edit avatar</button>
        </div>
      </header>

      <div className="space-y-4">
        {sections.map((section) => {
          const isOpen = open[section.id];
          return (
            <motion.div key={section.id} className="rounded-3xl border border-slate-100 bg-white/80 shadow-lg backdrop-blur">
              <button
                onClick={() => setOpen((prev) => ({ ...prev, [section.id]: !isOpen }))}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <p className="text-lg font-semibold text-slate-800">{section.title}</p>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
              {isOpen && <div className="px-6 pb-6">{section.content}</div>}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

