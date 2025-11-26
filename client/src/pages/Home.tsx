import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import BottomCTASection from "@/components/BottomCTASection";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Brain,
  CheckCircle2,
  Sparkles,
  Shield,
  Zap,
  Flame,
  Users,
  Quote,
  Star,
} from "lucide-react";

const problemCards = [
  { title: "70% relapse in week one", icon: "📉", description: "Without adaptive guardrails, the first seven days feel impossible." },
  { title: "Most apps only track", icon: "📱", description: "They log cravings but rarely intervene when you need it most." },
  { title: "Cravings hit when you're alone", icon: "😔", description: "Ria reaches out proactively before the urge peaks." },
];

const heroWords = ["Your", "AI", "Companion", "for", "Breaking", "Free"];

const timelineSteps = [
  { icon: "🗣️", title: "Tell Ria about your habit" },
  { icon: "🧠", title: "AI creates your scientific plan" },
  { icon: "📊", title: "Complete rituals, Ria watches patterns" },
  { icon: "🛡️", title: "Ria adapts & prevents relapses" },
];

const recoveryTypes = [
  { label: "Smoking & Vaping", icon: "🚬" },
  { label: "Alcohol", icon: "🍺" },
  { label: "Substances", icon: "💊" },
  { label: "Phone/Dopamine", icon: "📱" },
  { label: "Gaming", icon: "🎮" },
  { label: "Sugar & Processed Food", icon: "🍰" },
];

const testimonials = [
  { name: "Alex T.", quote: "Ria caught my relapse pattern before I noticed. It nudged me at 9 PM—the exact moment I used to drink.", streak: "47 days sober" },
  { name: "Mia S.", quote: "The AI escalated to SOS when my mood dipped twice. It looped my partner in gently. I felt supported, not judged.", streak: "22 days nicotine free" },
  { name: "Jordan K.", quote: "I never felt alone. Ria's proactive check-ins + habit swaps kept me ahead of cravings.", streak: "64 days gaming free" },
];

const stats = [
  { label: "Active Users", value: "1,247" },
  { label: "Success Rate", value: "89%" },
  { label: "Cravings Prevented", value: "25,000+" },
  { label: "Rating", value: "4.9 ⭐" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      <main className="space-y-24">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#4ECDC4] via-[#6C9BD1] to-[#4ECDC4] py-24">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_45%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.35),transparent_45%)]" />
          </div>
          <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm">
              Agentic AI Recovery · Hackathon Edition
            </div>
            <motion.h1
              className="mt-6 text-5xl font-semibold leading-tight md:text-6xl"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {heroWords.map((word) => (
                <motion.span
                  key={word}
                  className="inline-block px-1"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <p className="mt-4 max-w-3xl text-lg text-white/80">
              Ria uses Agentic AI to predict cravings, adapt your recovery plan in real-time, and keep you on track—even when you don't ask.
              It decides when to check in, when to escalate, and how hard to push based on your patterns.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-full bg-white px-8 py-3 text-slate-900 shadow-xl shadow-emerald-200/50">
                Start Your Recovery with Ria
              </button>
              <button className="rounded-full border border-white/60 px-8 py-3 text-white hover:bg-white/10">
                See How AI Helps You Quit
              </button>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm">
              🔥 342 people started recovery today
            </div>
            <motion.div
              className="mt-10 h-80 w-full max-w-3xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <div className="h-full rounded-[2rem] bg-white/90 shadow-2xl shadow-slate-900/20">
                <div className="rounded-t-[2rem] bg-slate-900/90 px-6 py-4 text-left text-white">
                  <p className="text-sm font-semibold tracking-[0.3em] text-teal-200">Ria Live Preview</p>
                  <p className="text-xs text-white/70">Agentic AI autopilot engaged</p>
                </div>
                <div className="grid gap-4 p-6 text-left text-slate-900">
                  <div className="rounded-2xl bg-slate-100/80 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-teal-600">AI Prediction</p>
                    <p className="mt-2 text-sm">
                      Ria detected a high-risk window tonight (9-11 PM). I've scheduled a grounding ritual at 8:45 PM.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-inner">
                    <p className="text-xs uppercase tracking-[0.3em] text-rose-400">Escalation Ready</p>
                    <p className="mt-2 text-sm">SOS toolkit + accountability partner on standby. Ria will decide if escalation is needed.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="mt-12 flex flex-col items-center text-white/80">
              <ArrowDown className="animate-bounce" />
              <p className="text-sm uppercase tracking-[0.3em]">Scroll for the plan</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4">
          <p className="text-center text-sm uppercase tracking-[0.4em] text-teal-500">Why most attempts fail</p>
          <h2 className="mt-3 text-center text-3xl font-semibold text-slate-900">Quitting is hard. Staying quit is harder.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {problemCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="rounded-3xl border border-slate-100 bg-white/80 p-6 text-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl">{card.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-100 bg-white/70 p-8 shadow-xl">
            <p className="text-sm uppercase tracking-[0.4em] text-teal-500">Agentic AI engine</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Meet Ria—AI that actually understands recovery</h2>
            <div className="mt-6 space-y-4 text-sm text-slate-700">
              {[
                "Predicts your high-risk moments before you feel the craving.",
                "Adapts your plan daily (ease up when you struggle, intensify when you're strong).",
                "Intervenes proactively with nudges, reels, and SOS workflows.",
                "Never judges—trained on recovery science + motivational interviewing.",
              ].map((text, index) => (
                <motion.p key={text} className="flex items-start gap-2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * index }}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-teal-500" />
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Live autopilot feed</p>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="rounded-2xl bg-slate-100/70 p-4">
                <Sparkles className="text-teal-500" />
                <p className="mt-2">"I predicted a craving spike tonight. Moving your check-in to 8:45 PM."</p>
              </div>
              <div className="rounded-2xl bg-slate-100/70 p-4">
                <Shield className="text-blue-500" />
                <p className="mt-2">"Detected two low moods. Scheduling SOS-ready grounding + texting your partner."</p>
              </div>
              <div className="rounded-2xl bg-slate-100/70 p-4">
                <Zap className="text-rose-500" />
                <p className="mt-2">"Tasks felt easy yesterday. Increasing difficulty slightly tomorrow."</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-center text-sm uppercase tracking-[0.4em] text-teal-500">How it works</p>
            <h2 className="mt-3 text-center text-3xl font-semibold text-slate-900">Adaptive plan timeline</h2>
            <div className="mt-10 flex flex-wrap justify-between gap-6">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-300 to-blue-400 text-2xl">
                    {step.icon}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-700">{step.title}</p>
                  {index < timelineSteps.length - 1 && <div className="mt-4 h-1 w-24 bg-gradient-to-r from-teal-200 to-blue-200" />}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4">
          <p className="text-sm uppercase tracking-[0.4em] text-teal-500">One AI, every addiction</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Ria handles every routine and craving</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recoveryTypes.map((card) => (
              <motion.div
                key={card.label}
                className="rounded-3xl border border-slate-100 bg-white/80 p-6 text-center shadow-lg"
                whileHover={{ scale: 1.03, boxShadow: "0 30px 60px -20px rgba(15,23,42,0.2)" }}
              >
                <div className="text-3xl">{card.icon}</div>
                <p className="mt-3 font-semibold text-slate-900">{card.label}</p>
                <p className="text-sm text-teal-500">AI-powered plan ready</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-white to-slate-50 py-16" id="product">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-center text-sm uppercase tracking-[0.4em] text-teal-500">Real people, real recovery</p>
            <h2 className="mt-3 text-center text-3xl font-semibold text-slate-900">Testimonials</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Quote className="h-6 w-6 text-teal-500" />
                  <p className="mt-4 text-sm text-slate-600">{testimonial.quote}</p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-teal-500">{testimonial.streak}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4" id="coach">
          <p className="text-center text-sm uppercase tracking-[0.4em] text-teal-500">Momentum</p>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-3xl border border-slate-100 bg-white/90 p-6 text-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <CommunitySection />
        <BottomCTASection />

        <section className="bg-gradient-to-r from-teal-300 to-blue-400 py-16" id="sos">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center text-slate-900">
            <p className="text-sm uppercase tracking-[0.4em]">Ready to break free?</p>
            <h2 className="text-3xl font-semibold">Ria watches your patterns so you can focus on living.</h2>
            <p className="text-sm text-slate-700">No credit card, no commitment, just support.</p>
            <button className="rounded-full bg-white px-8 py-3 font-semibold text-slate-900 shadow-xl">Start Recovery Now · Free</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
