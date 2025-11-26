import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, CheckCircle2 } from "lucide-react";

type AddictionOption = {
  id: string;
  label: string;
  description: string;
  icon: string;
};

const addictionOptions: AddictionOption[] = [
  { id: "nicotine", label: "Smoking & Vaping", description: "Cigarettes, vapes, or nicotine pouches", icon: "🚬" },
  { id: "alcohol", label: "Alcohol", description: "Beer, wine, spirits, binge episodes", icon: "🍷" },
  { id: "drugs", label: "Substances", description: "Cocaine, opioids, prescription misuse", icon: "💊" },
  { id: "phone", label: "Phone & Dopamine", description: "Endless scrolling, doom loops, reels", icon: "📱" },
  { id: "gaming", label: "Gaming", description: "Late-night marathons, rage queues", icon: "🎮" },
  { id: "food", label: "Processed Food", description: "Sugar spikes, emotional eating", icon: "🍰" },
];

const stepIds = ["habit", "pattern", "triggers", "info", "goals", "loading"] as const;

export default function OnboardingFlow() {
  const navigate = useNavigate();
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedHabit, setSelectedHabit] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [loadingProgress, setLoadingProgress] = useState(0);

  const currentStep = stepIds[stepIndex];
  const progressPercent = ((stepIndex + 1) / stepIds.length) * 100;

  useEffect(() => {
    if (currentStep === "loading") {
      setLoadingProgress(0);
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => navigate("/dashboard"), 500);
            return prev;
          }
          return prev + 5;
        });
      }, 120);
      return () => clearInterval(interval);
    }
  }, [currentStep, navigate]);

  const nextDisabled = useMemo(() => {
    if (currentStep === "habit") {
      return !selectedHabit;
    }
    return false;
  }, [currentStep, selectedHabit]);

  const goNext = () => {
    if (stepIndex < stepIds.length - 1) {
      setStepIndex((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (stepIndex > 0) {
      setStepIndex((prev) => prev - 1);
    }
  };

  const renderHabitStep = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {addictionOptions.map((option) => {
        const isActive = selectedHabit === option.id;
        return (
          <button
            key={option.id}
            onClick={() => setSelectedHabit(option.id)}
            className={`rounded-2xl border px-5 py-6 text-left transition-all duration-300 ${
              isActive
                ? "border-teal-400 bg-white shadow-lg shadow-teal-200"
                : "border-white/30 bg-white/10 hover:border-white/50"
            }`}
          >
            <div className="text-3xl">{option.icon}</div>
            <p className="mt-4 text-lg font-semibold text-white">{option.label}</p>
            <p className="text-sm text-white/80">{option.description}</p>
          </button>
        );
      })}
    </div>
  );

  const renderPatternStep = () => (
    <div className="space-y-6">
      <div>
        <p className="text-white mb-3 font-semibold">How often do you use?</p>
        <div className="grid gap-3 md:grid-cols-3">
          {["Daily", "Weekends", "Occasionally"].map((label) => (
            <button
              key={label}
              onClick={() => setFormValues((prev) => ({ ...prev, frequency: label }))}
              className={`rounded-2xl border px-4 py-3 text-white/90 transition-all ${
                formValues.frequency === label ? "bg-white/20 border-white" : "border-white/20 bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-white mb-3 font-semibold">How long has this been a pattern?</p>
        <select
          className="w-full rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
          value={formValues.duration || ""}
          onChange={(e) => setFormValues((prev) => ({ ...prev, duration: e.target.value }))}
        >
          <option value="" disabled className="text-slate-800">
            Select duration
          </option>
          {["< 6 months", "6-12 months", "1-3 years", "3+ years"].map((option) => (
            <option key={option} value={option} className="text-slate-900">
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="text-white mb-3 font-semibold">Tried to quit before?</p>
        <div className="grid gap-3 md:grid-cols-3">
          {["First time", "Once", "Multiple attempts"].map((label) => (
            <button
              key={label}
              onClick={() => setFormValues((prev) => ({ ...prev, attempts: label }))}
              className={`rounded-2xl border px-4 py-3 text-white/90 transition-all ${
                formValues.attempts === label ? "bg-white/20 border-white" : "border-white/20 bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTriggerStep = () => (
    <div className="space-y-6">
      <div>
        <p className="text-white mb-3 font-semibold">When do cravings hit hardest?</p>
        <div className="flex flex-wrap gap-3">
          {["Stress", "Loneliness", "After work", "Social", "Boredom", "Late night", "Morning"].map((tag) => {
            const active = (formValues.triggers as string[])?.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => {
                  setFormValues((prev) => {
                    const current = new Set(prev.triggers || []);
                    if (current.has(tag)) current.delete(tag);
                    else current.add(tag);
                    return { ...prev, triggers: Array.from(current) };
                  });
                }}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  active ? "bg-white text-slate-900" : "bg-white/10 text-white"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <p className="text-white mb-3 font-semibold">Peak craving time</p>
        <input
          type="time"
          className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
          value={formValues.peakTime || ""}
          onChange={(e) => setFormValues((prev) => ({ ...prev, peakTime: e.target.value }))}
        />
      </div>
    </div>
  );

  const renderInfoStep = () => (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-3">
        <label className="text-white text-sm font-semibold">Age</label>
        <input
          type="number"
          min={13}
          max={90}
          className="w-full rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
          value={formValues.age || ""}
          onChange={(e) => setFormValues((prev) => ({ ...prev, age: e.target.value }))}
        />
      </div>
      <div className="space-y-3">
        <label className="text-white text-sm font-semibold">Gender (optional)</label>
        <select
          className="w-full rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
          value={formValues.gender || ""}
          onChange={(e) => setFormValues((prev) => ({ ...prev, gender: e.target.value }))}
        >
          <option value="" className="text-slate-800">
            Prefer not to say
          </option>
          {["Female", "Male", "Non-binary", "Other"].map((label) => (
            <option key={label} value={label} className="text-slate-900">
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-3">
        <label className="text-white text-sm font-semibold">Bedtime</label>
        <input
          type="time"
          className="w-full rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
          value={formValues.bedtime || ""}
          onChange={(e) => setFormValues((prev) => ({ ...prev, bedtime: e.target.value }))}
        />
      </div>
      <div className="space-y-3">
        <label className="text-white text-sm font-semibold">Wake time</label>
        <input
          type="time"
          className="w-full rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
          value={formValues.wakeTime || ""}
          onChange={(e) => setFormValues((prev) => ({ ...prev, wakeTime: e.target.value }))}
        />
      </div>
      <div className="space-y-3 md:col-span-2">
        <label className="text-white text-sm font-semibold">Activity level</label>
        <div className="grid gap-3 md:grid-cols-3">
          {["Sedentary", "Lightly active", "Very active"].map((label) => (
            <button
              key={label}
              onClick={() => setFormValues((prev) => ({ ...prev, activity: label }))}
              className={`rounded-2xl border px-4 py-3 text-white/90 transition-all ${
                formValues.activity === label ? "bg-white/20 border-white" : "border-white/20 bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGoalStep = () => (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { id: "quit", title: "Quit Completely", subtitle: "Stop forever with AI guardrails" },
          { id: "reduce", title: "Reduce Gradually", subtitle: "Step down to zero with pacing" },
          { id: "detox", title: "30-Day Detox", subtitle: "Reset habits for 30 days" },
        ].map((goal) => {
          const active = formValues.goal === goal.id;
          return (
            <button
              key={goal.id}
              onClick={() => setFormValues((prev) => ({ ...prev, goal: goal.id }))}
              className={`rounded-2xl border px-5 py-6 text-left transition-all ${
                active ? "bg-white text-slate-900 shadow-xl shadow-emerald-100" : "bg-white/10 text-white border-white/30"
              }`}
            >
              <p className="text-lg font-semibold">{goal.title}</p>
              <p className="text-sm opacity-80">{goal.subtitle}</p>
            </button>
          );
        })}
      </div>
      <div className="space-y-3">
        <label className="text-white text-sm font-semibold">Daily check-in time</label>
        <div className="flex items-center gap-4">
          <Clock className="text-white/70" />
          <input
            type="time"
            className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={formValues.checkInTime || ""}
            onChange={(e) => setFormValues((prev) => ({ ...prev, checkInTime: e.target.value }))}
          />
        </div>
      </div>
    </div>
  );

  const renderLoadingStep = () => (
    <div className="flex flex-col items-center justify-center gap-6 py-12">
      <motion.div
        className="h-32 w-32 rounded-full bg-gradient-to-br from-teal-300 to-blue-400 shadow-2xl shadow-teal-200 flex items-center justify-center text-white text-4xl"
        animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 40px rgba(78,205,196,0.6)", "0 0 10px rgba(78,205,196,0.3)", "0 0 40px rgba(78,205,196,0.6)"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        R
      </motion.div>
      <div className="text-center space-y-2">
        <p className="text-white text-lg font-semibold">Crafting your adaptive recovery plan...</p>
        <p className="text-white/70 text-sm">Ria is analyzing mood patterns, triggers, and best-fit rituals.</p>
      </div>
      <div className="w-full rounded-full bg-white/10 overflow-hidden h-3">
        <motion.div
          className="h-full bg-gradient-to-r from-teal-300 to-blue-400"
          animate={{ width: `${loadingProgress}%` }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
        />
      </div>
      <div className="text-white/70 text-sm flex flex-col items-center gap-1">
        {["Analyzing your patterns...", "Creating scientific recovery plan...", "Scheduling adaptive tasks...", "Finalizing AI guardrails..."].map(
          (text, index) => (
            <motion.p
              key={text}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: loadingProgress > index * 25 ? 1 : 0.2 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 size={16} />
              {text}
            </motion.p>
          ),
        )}
      </div>
    </div>
  );

  const stepContent = {
    habit: renderHabitStep,
    pattern: renderPatternStep,
    triggers: renderTriggerStep,
    info: renderInfoStep,
    goals: renderGoalStep,
    loading: renderLoadingStep,
  }[currentStep]();

  const stepHeading = {
    habit: "What do you want to work on?",
    pattern: "Tell me about your habit",
    triggers: "When do cravings hit hardest?",
    info: "Help Ria personalize your recovery",
    goals: "What's your goal?",
    loading: "Generating your adaptive plan",
  }[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-10 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Step {stepIndex + 1} of {stepIds.length}</p>
          <div className="mt-3 h-2 w-full rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-teal-300 to-blue-400"
              animate={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          <div className="space-y-8">
            <div>
              <p className="text-3xl font-bold">{stepHeading}</p>
              {currentStep !== "loading" && (
                <p className="text-white/70 mt-2">
                  Ria keeps everything private and uses this context to adapt your plan every day.
                </p>
              )}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {stepContent}
              </motion.div>
            </AnimatePresence>

            {currentStep !== "loading" && (
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={goBack}
                  disabled={stepIndex === 0}
                  className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white/80 disabled:opacity-40"
                >
                  Back
                </button>
                <button
                  onClick={goNext}
                  disabled={nextDisabled}
                  className="rounded-full bg-gradient-to-r from-teal-300 to-blue-400 px-8 py-3 font-semibold text-slate-900 shadow-lg shadow-teal-200 disabled:opacity-40"
                >
                  {currentStep === "goals" ? "Generate Plan" : "Continue"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

