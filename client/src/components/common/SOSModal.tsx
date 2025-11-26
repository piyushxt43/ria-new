import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Heart, AlertTriangle } from "lucide-react";
import { useState } from "react";

type SOSModalProps = {
  open: boolean;
  onClose: () => void;
};

const steps = [
  "Name 5 things you can see",
  "Name 4 things you can touch",
  "Name 3 things you can hear",
  "Name 2 things you can smell",
  "Name 1 thing you can taste",
];

export default function SOSModal({ open, onClose }: SOSModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputs, setInputs] = useState<string[]>(Array(5).fill(""));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/20 bg-gradient-to-br from-indigo-900 via-slate-900 to-rose-900 p-6 text-white shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-rose-200">SOS / Crisis Support</p>
                <h2 className="mt-2 text-2xl font-semibold">I'm here with you. Let's get through this.</h2>
              </div>
              <button onClick={onClose} className="text-white/60 hover:text-white">
                Close
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { label: "I'm having a craving", action: "Start grounding exercise" },
                { label: "I'm panicking", action: "Open breathing tool" },
                { label: "I relapsed", action: "Receive non-judgment support" },
                { label: "Call helpline", action: "View emergency numbers" },
                { label: "Message accountability partner", action: "Send SOS message" },
              ].map((item) => (
                <button key={item.label} className="rounded-3xl border border-white/20 bg-white/5 px-6 py-5 text-left hover:bg-white/10">
                  <p className="text-lg font-semibold">{item.label}</p>
                  <p className="text-sm text-white/70">{item.action}</p>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/20 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.4em] text-rose-200">Grounding (5-4-3-2-1)</p>
              <p className="mt-2 text-sm text-white/80">{steps[currentStep]}</p>
              <textarea
                rows={3}
                value={inputs[currentStep]}
                onChange={(e) => {
                  setInputs((prev) => {
                    const copy = [...prev];
                    copy[currentStep] = e.target.value;
                    return copy;
                  });
                }}
                className="mt-4 w-full rounded-2xl border border-white/30 bg-white/10 p-3 text-white focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {steps.map((_, index) => (
                    <span key={index} className={`h-2 w-10 rounded-full ${index <= currentStep ? "bg-rose-300" : "bg-white/20"}`} />
                  ))}
                </div>
                <button
                  onClick={() => setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev))}
                  className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/20 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.4em] text-rose-200">Breathing tool</p>
                <motion.div
                  className="mx-auto mt-4 h-40 w-40 rounded-full bg-gradient-to-br from-rose-200/60 to-blue-200/60"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                />
                <p className="mt-4 text-center text-sm text-white/70">Inhale 4 · Hold 4 · Exhale 4 · Hold 4</p>
              </div>
              <div className="rounded-3xl border border-white/20 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.4em] text-rose-200">Rapid support</p>
                <div className="mt-4 space-y-3 text-sm text-white/80">
                  <p className="flex items-center gap-2">
                    <PhoneCall size={16} /> National helpline: <strong>+1-800-662-HELP</strong>
                  </p>
                  <p className="flex items-center gap-2">
                    <Heart size={16} /> Message accountability partner — “I need support right now.”
                  </p>
                  <p className="flex items-center gap-2">
                    <AlertTriangle size={16} /> Ria can escalate to SOS workflows if you confirm.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

