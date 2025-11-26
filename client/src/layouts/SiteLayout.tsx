import { Outlet } from "react-router-dom";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(78,205,196,0.15),_transparent_55%),_linear-gradient(180deg,#f7f9fb_0%,_#edf5ff_100%)]">
      <Outlet />
    </div>
  );
}

