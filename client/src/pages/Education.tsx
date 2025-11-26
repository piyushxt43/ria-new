import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Bookmark, Share2, Play } from "lucide-react";

const categories = ["All", "Science", "Stories", "Tips", "Motivation"] as const;

const content = [
  {
    id: 1,
    title: "How dopamine addiction rewires your brain",
    duration: "45 sec",
    category: "Science",
    thumbnail: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Meet John: 1 year sober from cocaine",
    duration: "60 sec",
    category: "Stories",
    thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "5 breathing exercises for panic moments",
    duration: "30 sec",
    category: "Tips",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "What phone addiction does to sleep",
    duration: "35 sec",
    category: "Science",
    thumbnail: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Education() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filteredContent = useMemo(
    () => (activeCategory === "All" ? content : content.filter((item) => item.category === activeCategory)),
    [activeCategory],
  );

  return (
    <div className="space-y-8 p-4 md:p-8">
      <header className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg backdrop-blur">
        <p className="text-sm uppercase tracking-[0.4em] text-teal-500">Education & reels</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Short, science-backed content for every craving</h1>
        <p className="mt-2 text-slate-600">Ria learns what you like and surfaces calming reels the moment you need them.</p>
      </header>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2 text-sm font-semibold ${
              category === activeCategory ? "bg-gradient-to-r from-teal-300 to-blue-400 text-slate-900 shadow-md" : "bg-white/70 text-slate-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredContent.map((item) => (
          <motion.div
            key={item.id}
            className="rounded-3xl border border-slate-100 bg-white/90 p-4 shadow-xl backdrop-blur"
            whileHover={{ y: -4, boxShadow: "0 35px 60px -15px rgba(15,23,42,0.2)" }}
          >
            <div className="relative h-64 overflow-hidden rounded-2xl">
              <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <button className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900">
                <Play size={16} /> Play reel
              </button>
              <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white">{item.duration}</span>
            </div>
            <div className="mt-4 flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-teal-500">{item.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500">Ria recommends this after evening dips.</p>
              </div>
              <div className="flex gap-2 text-slate-500">
                <button className="rounded-full border border-slate-200 p-2">
                  <Bookmark size={16} />
                </button>
                <button className="rounded-full border border-slate-200 p-2">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-3xl border border-teal-100 bg-teal-50/70 p-6 shadow-inner">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-teal-500">Personalization</p>
            <p className="text-lg text-teal-700">Ria noticed you love science reels. Loading more neuro hacks.</p>
          </div>
          <button className="rounded-full border border-white/60 bg-white px-5 py-2 text-sm font-semibold text-teal-600">
            View queue
          </button>
        </div>
      </div>
    </div>
  );
}

