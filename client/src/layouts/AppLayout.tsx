import { NavLink, Outlet } from "react-router-dom";
import { Home, Workflow, MessageCircle, Users, BookOpenCheck, LifeBuoy, Library, User2 } from "lucide-react";

const navItems = [
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/plan", label: "Plan", icon: Workflow },
  { to: "/coach", label: "Coach", icon: MessageCircle },
  { to: "/community", label: "Community", icon: Users },
  { to: "/education", label: "Education", icon: BookOpenCheck },
  { to: "/library", label: "Library", icon: Library },
  { to: "/sos", label: "SOS", icon: LifeBuoy },
  { to: "/profile", label: "Profile", icon: User2 },
];

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="flex">
        <aside className="hidden w-64 flex-col border-r border-slate-100 bg-white/80 px-4 py-6 shadow-lg backdrop-blur lg:flex">
          <div className="flex items-center gap-3 px-2">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 text-white font-semibold flex items-center justify-center">
              R
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Ria Recovery</p>
              <p className="text-xs uppercase tracking-[0.4em] text-teal-500">Agentic AI</p>
            </div>
          </div>
          <nav className="mt-8 flex flex-col gap-2 text-sm font-semibold text-slate-500">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-2xl px-4 py-3 transition-all ${
                      isActive ? "bg-gradient-to-r from-teal-100 to-blue-100 text-slate-900" : "hover:bg-slate-100"
                    }`
                  }
                >
                  <Icon size={18} />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      <nav className="fixed bottom-4 left-1/2 z-40 flex w-[90%] max-w-xl -translate-x-1/2 items-center justify-around rounded-3xl border border-slate-100 bg-white/95 px-4 py-3 shadow-2xl shadow-slate-200/80 lg:hidden">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `flex flex-col items-center text-xs ${isActive ? "text-teal-600" : "text-slate-400"}`}
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}

