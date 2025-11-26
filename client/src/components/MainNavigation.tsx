const navItems = [
  { label: "Product", href: "#product" },
  { label: "AI Coach", href: "#coach" },
  { label: "Community", href: "#community" },
  { label: "SOS Support", href: "#sos" },
];

export default function MainNavigation() {
  return (
    <nav className="bg-white/95 backdrop-blur border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="/" data-testid="link-logo" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-rose-500 text-white font-semibold flex items-center justify-center shadow-md">
            R
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-slate-900">Ria Recovery</span>
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-500">Agentic AI</span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-6 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-600 hover:text-slate-900 transition-colors text-sm md:text-base font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://forms.gle/ria-demo"
            className="inline-flex items-center gap-2 rounded-full border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
            data-testid="link-signin"
          >
            Request demo
          </a>
        </div>
        <a
          href="https://forms.gle/ria-demo"
          className="md:hidden inline-flex items-center rounded-full border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600"
        >
          Demo
        </a>
      </div>
    </nav>
  );
}
