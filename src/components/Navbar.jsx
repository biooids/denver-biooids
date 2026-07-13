//src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/team", label: "Team" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[rgba(8,8,8,0.9)] py-3 border-[rgba(255,255,255,0.05)] backdrop-blur-xl"
          : "bg-transparent py-4 border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
          <img 
            src="https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783955606/ChatGPT_Image_Jul_13_2026_05_12_56_PM_qssp2j.png" 
            alt="Denver Think Tank Logo" 
            className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(245,166,35,0.2)]"
          />
        </Link>

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

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white hover:text-[#f5a623] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[rgba(20,20,20,0.95)] backdrop-blur-xl rounded-2xl p-4 border border-[rgba(255,255,255,0.05)] shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                location.pathname === link.path
                  ? "bg-[#f5a623] text-[#0a0a0a] font-bold"
                  : "text-[#ced4da] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}