import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const options = [
  "Quit nicotine cravings",
  "Stay sober and steady",
  "Ease phone & dopamine spikes",
  "Navigate stress triggers",
  "All of the above"
];

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    console.log('Selected:', option);
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0">
        <img
          src="/mainbg1.png"
          alt="Ria agentic recovery background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-white/70" />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-900">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-sm font-semibold text-indigo-700 ring-1 ring-indigo-100 mb-6">
          Agentic AI Recovery · Hackathon Showcase
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
          Meet Ria — your proactive AI companion that keeps you ahead of relapse
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
          Ria learns your mood dips, risky hours, and device triggers to adapt recovery plans automatically.
          It checks in before cravings swell, deploys SOS resources, and brings accountability partners
          into the loop without waiting to be asked.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 text-left">
          {[
            { title: "Agentic AI Coach", desc: "Predicts cravings and adapts intensity daily." },
            { title: "360° Recovery Plan", desc: "Routines, habit swaps, and crisis workflows." },
            { title: "Always-on Support", desc: "Escalates to SOS or community allies instantly." },
          ].map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-black/5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-500 mb-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
            What should Ria help you prevent first?
          </h2>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-white/80 border border-indigo-100 rounded-md px-4 py-3 text-left flex items-center justify-between hover-elevate backdrop-blur"
              data-testid="button-dropdown-toggle"
            >
              <span className="text-foreground">{selected || "Choose your answer"}</span>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
              <div className="absolute z-10 w-full mt-2 bg-white border border-input rounded-md shadow-lg backdrop-blur">
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelect(option)}
                    className="w-full px-4 py-3 text-left hover-elevate text-foreground first:rounded-t-md last:rounded-b-md"
                    data-testid={`option-${option.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-indigo-600 to-rose-500 hover:from-indigo-700 hover:to-rose-600 text-white px-8 py-6 text-lg rounded-md shadow-lg shadow-rose-200"
          data-testid="button-start-journey"
        >
          Launch the demo
        </Button>
        <p className="mt-4 text-sm text-slate-500">
          Built with modern React + Vite. Optimized for Agentic AI Hackathon 2025.
        </p>
      </div>
    </section>
  );
}
