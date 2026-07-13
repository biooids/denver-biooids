//src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[rgba(255,255,255,0.05)] pt-16 pb-8 px-6 relative-z mt-auto">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        {/* Branding */}
        <div className="flex items-center justify-center mb-6">
          <img
            src="https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783955606/ChatGPT_Image_Jul_13_2026_05_12_56_PM_qssp2j.png"
            alt="Denver Think Tank Logo"
            className="h-14 md:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(245,166,35,0.2)]"
          />
        </div>

        {/* Mission Statement */}
        <p className="text-[#adb5bd] max-w-lg mb-8 text-base leading-relaxed">
          Research, Advocacy, and Action. Dedicated to eliminating barriers to
          education and empowering the next generation of female leaders in
          Gatsata, Rwanda.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <Link
            to="/"
            className="text-sm font-semibold text-[#6c757d] tracking-widest uppercase hover:text-[#f5a623] transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold text-[#6c757d] tracking-widest uppercase hover:text-[#f5a623] transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/team"
            className="text-sm font-semibold text-[#6c757d] tracking-widest uppercase hover:text-[#f5a623] transition-colors duration-300"
          >
            Team
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold text-[#6c757d] tracking-widest uppercase hover:text-[#f5a623] transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent mb-8" />

        {/* Copyright & Location */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl px-4 text-xs font-medium text-[#495057] tracking-wider">
          <p className="mb-4 md:mb-0">Kigali City, Rwanda</p>
          <p>
            &copy; {new Date().getFullYear()} Denver Think Tank. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
