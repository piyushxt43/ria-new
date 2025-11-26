import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Mic, Sparkles, Loader2 } from "lucide-react";

type Message = {
  id: number;
  sender: "ria" | "user" | "system";
  content: string;
  timestamp: string;
  suggestions?: string[];
};

const initialMessages: Message[] = [
  { id: 1, sender: "ria", content: "Good morning! 🌅 Ready for Day 12?", timestamp: "08:02" },
  {
    id: 2,
    sender: "user",
    content: "I'm feeling anxious today",
    timestamp: "08:03",
  },
  {
    id: 3,
    sender: "ria",
    content:
      "I understand. Anxiety is common in recovery. I'm adjusting today's plan to add an extra breathing ritual and a grounding walk at 6 PM. Want to try the breathing exercise now?",
    timestamp: "08:04",
    suggestions: ["Launch breathing exercise", "Not now"],
  },
];

const quickReplies = [
  { label: "I have a craving right now", icon: "🆘" },
  { label: "Feeling low today", icon: "😔" },
  { label: "I completed my tasks", icon: "✅" },
  { label: "I relapsed", icon: "💔" },
  { label: "Update my plan", icon: "📝" },
];

export default function Coach() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, isTyping]);

  const sendMessage = (content: string) => {
    if (!content.trim()) return;
    const newMessage: Message = {
      id: Date.now(),
      sender: "user",
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "system",
          content: "Ria detected you're at risk tonight (9-11 PM). I'll check in with you at 8:45 PM.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
        {
          id: Date.now() + 2,
          sender: "ria",
          content:
            "Thanks for letting me know. I've queued a calming reel and scheduled an SOS-ready grounding sequence. Want me to ping your accountability partner too?",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          suggestions: ["Yes, message them", "Not needed"],
        },
      ]);
      setIsTyping(false);
    }, 1600);
  };

  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-4 text-white">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-300 to-blue-400 text-slate-900 font-semibold flex items-center justify-center">
              R
            </div>
            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-teal-200">Agentic AI</p>
            <h1 className="text-xl font-semibold">Ria · Your AI Coach</h1>
            <p className="text-xs text-white/60">Active · Monitoring cravings + plan difficulty</p>
          </div>
        </div>
        <Sparkles className="text-white/60" />
      </header>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-6">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, x: message.sender === "user" ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col ${message.sender === "user" ? "items-end" : "items-start"}`}
          >
            <div
              className={`max-w-xl rounded-3xl px-5 py-4 text-sm leading-relaxed shadow-lg ${
                message.sender === "user"
                  ? "bg-white text-slate-900 rounded-br-sm"
                  : message.sender === "system"
                    ? "bg-white/10 text-white border border-white/10"
                    : "bg-gradient-to-br from-teal-300 to-blue-400 text-slate-900 rounded-bl-sm"
              }`}
            >
              {message.content}
            </div>
            <span className="mt-1 text-xs text-white/50">{message.timestamp}</span>
            {message.suggestions && (
              <div className="mt-3 flex flex-wrap gap-2">
                {message.suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white/70 w-fit">
            <div className="flex gap-1">
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  className="h-2 w-2 rounded-full bg-white/70"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ repeat: Infinity, duration: 0.8, delay: dot * 0.1 }}
                />
              ))}
            </div>
            Ria is thinking
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="border-t border-white/10 bg-slate-900/60 px-4 py-5">
        <div className="mb-3 flex flex-wrap gap-3">
          {quickReplies.map((reply) => (
            <button
              key={reply.label}
              onClick={() => sendMessage(reply.label)}
              className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10"
            >
              {reply.icon} {reply.label}
            </button>
          ))}
        </div>
        <div className="flex items-center rounded-3xl border border-white/10 bg-white/5 p-2">
          <button className="rounded-2xl px-3 py-2 text-white/60 hover:text-white">
            <Mic size={18} />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type anything. Ria adapts in real time..."
            className="flex-1 bg-transparent px-3 text-sm text-white placeholder-white/40 focus:outline-none"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim()}
            className="rounded-2xl bg-gradient-to-r from-teal-300 to-blue-400 px-4 py-2 text-sm font-semibold text-slate-900 disabled:opacity-40"
          >
            <Send size={18} />
          </button>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
          Ria: “I predicted a high-risk moment tonight (9-11 PM). I’ll send you a reminder at 8:45 PM.”
        </div>
      </div>
    </div>
  );
}

