import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Heart, AlertTriangle } from "lucide-react";

const steps = [
  "Name 5 things you can see",
  "Name 4 things you can touch",
  "Name 3 things you can hear",
  "Name 2 things you can smell",
  "Name 1 thing you can taste",
] as const;

export default function SOSSupport() {
  const [currentStep, setCurrentStep] = useState(0);
  const [entries, setEntries] = useState<string[]>(new Array(steps.length).fill(""));

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-rose-900 px-4 py-10 text-white">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-rose-200">SOS / Crisis Support</p>
          <h1 className="mt-3 text-4xl font-semibold">I'm here with you. Let's get through this.</h1>
          <p className="mt-2 text-white/70">Choose what you need right now. No judgment, only support.</p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            { label: "I'm having a craving", action: "Start grounding exercise" },
            { label: "I'm panicking", action: "Open breathing tool" },
            { label: "I relapsed", action: "Get non-judgment support" },
            { label: "Call helpline", action: "View emergency numbers" },
            { label: "Message accountability partner", action: "Send SOS message" },
          ].map((item) => (
            <button
              key={item.label}
              className="rounded-3xl border border-white/20 bg-white/10 px-6 py-5 text-left transition-all hover:bg-white/20"
            >
              <p className="text-lg font-semibold">{item.label}</p>
              <p className="text-sm text-white/70">{item.action}</p>
            </button>
          ))}
        </div>

        <section className="rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.4em] text-rose-200">Grounding exercise</p>
          <h2 className="mt-2 text-2xl font-semibold">5-4-3-2-1 technique</h2>
          <p className="text-white/70">Move through each prompt. Take your time.</p>
          <div className="mt-6 space-y-4">
            <p className="text-sm text-white/70">{steps[currentStep]}</p>
            <textarea
              value={entries[currentStep]}
              onChange={(e) => {
                setEntries((prev) => {
                  const copy = [...prev];
                  copy[currentStep] = e.target.value;
                  return copy;
                });
              }}
              className="w-full rounded-2xl border border-white/30 bg-white/10 p-4 text-white focus:outline-none focus:ring-2 focus:ring-rose-200"
              rows={3}
            />
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {steps.map((_, index) => (
                  <span key={index} className={`h-2 w-12 rounded-full ${index <= currentStep ? "bg-rose-300" : "bg-white/20"}`} />
                ))}
              </div>
              <button
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
                className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.4em] text-rose-200">Breathing tool</p>
            <div className="mt-6 flex flex-col items-center gap-4">
              <motion.div
                className="h-48 w-48 rounded-full bg-gradient-to-br from-rose-200/60 to-blue-200/60"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              />
              <p className="text-sm text-white/80">Inhale 4 · Hold 4 · Exhale 4 · Hold 4</p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.4em] text-rose-200">Rapid support</p>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <p className="flex items-center gap-2">
                <PhoneCall size={16} /> National helpline: <strong>+1-800-662-HELP</strong>
              </p>
              <p className="flex items-center gap-2">
                <Heart size={16} /> Message accountability partner — “I need support right now.”
              </p>
              <p className="flex items-center gap-2">
                <AlertTriangle size={16} /> Ria can escalate to SOS workflows if you tap the floating button.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

