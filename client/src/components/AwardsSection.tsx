const signals = [
  {
    title: "Agentic AI Finalist",
    platform: "Global Recovery Hackathon 2025",
    description: "Recognized for autonomous, adaptive relapse prevention flows."
  },
  {
    title: "Clinical Pilot Ready",
    platform: "Partnered with 3 digital health labs",
    description: "Data sandbox exposes anonymized cravings, SOS interactions, and outcomes."
  },
  {
    title: "Trust & Safety Built-in",
    platform: "SOC2 control set · HIPAA-ready architecture",
    description: "Event audit trails, human-in-the-loop escalation, and privacy scoring."
  }
];

export default function AwardsSection() {
  return (
    <section className="py-16 md:py-20 bg-white" id="product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-indigo-500 text-center tracking-[0.3em] mb-4">
          SIGNALS OF TRUST
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          Ria is built to win regulated environments from day one
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {signals.map((signal) => (
            <div
              key={signal.title}
              className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm"
            >
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-3">
                {signal.platform}
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{signal.title}</h3>
              <p className="text-sm text-slate-600">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
