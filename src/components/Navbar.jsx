import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// We import icons for the mobile bottom nav
import { Home, Info, Users, Mail } from "lucide-react";

// Added icons to the navLinks array
const navLinks = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About Us", icon: Info },
  { path: "/team", label: "Team", icon: Users },
  { path: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP HEADER: 
        Shows only the logo on mobile. Shows full nav on desktop. 
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[rgba(8,8,8,0.9)] py-3 border-[rgba(255,255,255,0.05)] backdrop-blur-xl"
            : "bg-transparent py-4 border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783955606/ChatGPT_Image_Jul_13_2026_05_12_56_PM_qssp2j.png"
              alt="Denver Think Tank Logo"
              className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(245,166,35,0.2)]"
            />
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-1 bg-[rgba(20,20,20,0.5)] backdrop-blur-xl rounded-full px-1.5 py-1.5 border border-[rgba(255,255,255,0.05)]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-[#f5a623] text-[#0a0a0a] font-bold shadow-[0_4px_16px_rgba(245,166,35,0.4)]"
                    : "text-[#ced4da] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* BOTTOM MOBILE NAV: 
        Hidden on desktop (md:hidden). Fixed to bottom on mobile. 
      */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[rgba(15,15,18,0.95)] backdrop-blur-2xl border-t border-[rgba(255,255,255,0.08)] px-6 pt-3 pb-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col items-center gap-1.5 transition-all duration-300 w-16 ${
                  isActive
                    ? "text-[#f5a623] -translate-y-1"
                    : "text-[#6c757d] hover:text-[#ced4da]"
                }`}
              >
                <div className="relative">
                  <Icon
                    size={22}
                    className={`transition-all duration-300 ${isActive ? "drop-shadow-[0_0_10px_rgba(245,166,35,0.6)]" : ""}`}
                  />
                  {/* Glowing dot indicator for active tab */}
                  {isActive && (
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#f5a623] shadow-[0_0_8px_rgba(245,166,35,0.8)]" />
                  )}
                </div>
                <span
                  className={`text-[10px] font-semibold tracking-wide transition-all duration-300 ${isActive ? "opacity-100" : "opacity-80"}`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
