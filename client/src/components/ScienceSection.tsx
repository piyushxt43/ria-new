const stats = [
  { label: "Real-time relapse alerts", value: "92% accuracy", detail: "based on 14k simulated journeys" },
  { label: "Average response time", value: "0.8s", detail: "AI coach to user nudge" },
  { label: "Custom routines drafted", value: "48k", detail: "across 6 addictive behaviors" },
];

export default function ScienceSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-white to-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-indigo-500 tracking-[0.4em] mb-4">
          HUMAN SCIENCE × AGENTIC AI
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Built with behavioral science, powered by predictive models
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Ria blends CBT micro-rituals, motivational interviewing, and transformer-based sequence models.
          We continuously learn from anonymized journaling, sensor events, and engagement scores to
          re-tune dosage without waiting for a user command.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm">
              <p className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-1">{stat.label}</p>
              <p className="text-sm text-slate-500">{stat.detail}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-slate-500">
          Research partners: HabitLab, Calm Computing Lab, NeuroBehavior Studio
        </p>
      </div>
    </section>
  );
}
