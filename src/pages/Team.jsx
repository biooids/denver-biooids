//src/pages/Team.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
const teamMembers = [
  {
    name: "Ajah Mawut Pech",
    role: "Project Director & Strategist",
    email: "a.aleer@alustudent.com",
    bio: "The visionary who maps out our impact strategy. Turns field research on extreme poverty into actionable roadmaps to ensure the Empower Her Education initiative succeeds.",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783776742/ajah_xrtqnn.jpg",
    skills: ["Project Strategy", "Leadership", "Planning"],
    quote: "Will trade project milestones for good coffee.",
    stickerPos: "-right-4 rotate-[6deg]",
  },
  {
    name: "Mussab Abdelgadir",
    role: "Lead Researcher & Analyst",
    email: "m.abdelgadi@alustudent.com",
    bio: "The analytical brain of the group. Spends his time analyzing dropout statistics, conducting field interviews in Gatsata, and ensuring our solutions are backed by hard data.",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783776743/musab_cxumrh.jpg",
    skills: ["Data Analysis", "Field Research", "Evaluation"],
    quote: "The numbers tell a story... we just have to listen.",
    stickerPos: "-right-4 -rotate-[4deg]",
  },
  {
    name: "Jonathan Nyibizi",
    role: "Community Outreach Lead",
    email: "j.nyibizi@alustudent.com",
    bio: "The bridge between our think tank and the community. Builds robust relationships with local schools, parents, and NGOs to ensure our solutions are culturally grounded.",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783776745/jona_zsj4lu.jpg",
    skills: ["Community Engagement", "Advocacy", "Partnerships"],
    quote: "I fix the communication gaps before they break.",
    stickerPos: "-right-3 rotate-[8deg]",
  },
  {
    name: "Kellan Wayoga",
    role: "Communications & Design Lead",
    email: "k.wayoga@alustudent.com",
    bio: "The storyteller. Makes sure every pitch, presentation, and campaign we create isn't just informative, but genuinely moving. Owns the narrative of the entire lab.",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783791453/kel_lbtnwv.jpg",
    skills: ["Storytelling", "Visual Design", "Pitching"],
    quote: "Make the message bigger? Absolutely.",
    stickerPos: "-left-5 -rotate-[6deg]",
  },
  {
    name: "Hwapyong Maniragaba",
    role: "Lead Developer & IT",
    email: "h.manirab@alustudent.com",
    bio: "The sole developer of the team. Obsessed with building our digital footprint, coding our platform, and making sure the Denver Think Tank's online presence is flawless.",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783776746/ed_aaqz1y.jpg",
    skills: ["Web Development", "Systems", "Deployment"],
    quote:
      "Just a dev dreaming of automating the entire think tank. Don't touch prod.",
    stickerPos: "-right-4 rotate-[5deg]",
  },
];

function MemberCard({ member, index }) {
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(member.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={
        isMobile
          ? false
          : { opacity: 0, y: 40, scale: 0.95, filter: "blur(5px)" }
      }
      whileInView={
        isMobile ? {} : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 60,
      }}
      className="team-card group flex flex-col h-full bg-[rgba(20,20,25,0.6)] backdrop-blur-md rounded-2xl border border-[rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[rgba(245,166,35,0.3)] hover:-translate-y-1 relative"
    >
      {/* Picture Section */}
      <div className="relative pt-4 px-4">
        {/* Inner container handles the image crop */}
        <div className="relative h-56 w-full rounded-xl overflow-hidden shadow-2xl">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.8)] via-transparent to-transparent opacity-60" />
        </div>

        {/* Sticky Note Effect - Now absolutely positioned OVER the card boundaries */}
        <div
          className={`absolute bottom-[-15px] ${member.stickerPos} z-20 w-36 bg-[#fdf2b3] text-[#1a1a1a] p-3 shadow-[2px_6px_15px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-110`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 92%, 95% 100%, 0 100%)",
            borderTop: "3px solid rgba(255,255,255,0.5)",
          }}
        >
          <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-8 h-3 bg-[rgba(255,255,255,0.4)] shadow-sm rotate-2"></div>
          <p className="font-[Caveat,cursive,sans-serif] italic text-[13px] font-medium leading-snug text-center opacity-90">
            "{member.quote}"
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 pt-10 flex-grow flex flex-col">
        <h3 className="font-[Space_Grotesk] text-2xl font-bold text-white mb-1">
          {member.name}
        </h3>
        <p className="text-[#f5a623] text-sm font-bold tracking-wide mb-6">
          {member.role}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-full text-[11px] font-semibold text-[#ced4da] tracking-wide"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Copy Email Button with cursor-pointer */}
        <div className="pt-4 border-t border-[rgba(255,255,255,0.05)] mt-auto">
          <button
            onClick={handleCopyEmail}
            className="w-full cursor-pointer flex items-center justify-between px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(245,166,35,0.1)] text-[#adb5bd] hover:text-[#f5a623] border border-transparent hover:border-[rgba(245,166,35,0.3)] transition-all duration-300 active:scale-[0.98]"
          >
            <span className="text-sm font-medium truncate pr-4">
              {member.email}
            </span>
            {copied ? (
              <Check size={18} className="text-green-400 flex-shrink-0" />
            ) : (
              <Copy size={18} className="flex-shrink-0" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const isMobile = useIsMobile();

  // Fluid Blob tracking logic - Disabled on mobile
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const blob = document.getElementById("cursor-blob");
    if (!blob) return;

    const handlePointerMove = (e) => {
      const { clientX, clientY } = e;
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 4000, fill: "forwards" },
      );
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="relative pt-24 pb-16 overflow-x-clip">
      {/* FLUID BLOB */}
      {!isMobile && <div id="cursor-blob"></div>}

      {/* Hero */}
      <section className="px-6 pb-16 relative-z">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={
              isMobile ? false : { opacity: 0, y: 40, filter: "blur(10px)" }
            }
            animate={isMobile ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="text-center max-w-[800px] mx-auto pt-10"
          >
            <h1 className="font-[Space_Grotesk] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet the <span className="gradient-text">Denver Think Tank</span>
            </h1>
            <p className="text-lg text-[#adb5bd] leading-relaxed">
              A diverse crew of researchers, strategists, advocates, and one
              dedicated developer. Together, we tackle systemic educational
              challenges in Gatsata and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Team Grid */}
      <section className="px-6 py-8 relative-z">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6">
            {teamMembers.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section - The Craftsmanship Layout */}
      <section className="px-6 py-32 relative-z">
        <div className="max-w-[1100px] mx-auto space-y-40">
          {teamMembers.map((member, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={member.name}
                initial={isMobile ? false : { opacity: 0, y: 50 }}
                whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 lg:gap-24 items-center`}
              >
                {/* Image Side (Polaroid & Tape aesthetic) */}
                <div className="w-full md:w-1/2 relative px-4 lg:px-8">
                  <div
                    className={`relative bg-[#f8f9fa] p-3 pb-12 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform transition-transform duration-700 hover:scale-[1.02] ${isEven ? "rotate-2" : "-rotate-2"}`}
                  >
                    {/* Masking Tape */}
                    <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-32 h-8 bg-[#fdf2b3]/80 backdrop-blur-md shadow-sm rotate-[-3deg] border border-[rgba(0,0,0,0.05)] z-10" />

                    {/* Main Image */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[4/5] object-cover rounded-sm contrast-105"
                      loading="lazy"
                    />

                    {/* Polaroid Text */}
                    <div className="absolute bottom-4 left-6 text-[#868e96] font-mono text-[10px] tracking-[0.2em] uppercase">
                      NO. 00{i + 1} — {member.name.split(" ")[0]}
                    </div>

                    {/* Big Sticky Note */}
                    <div
                      className={`absolute ${isEven ? "-bottom-10 -right-6 rotate-6" : "-bottom-10 -left-6 -rotate-6"} w-48 sm:w-56 bg-[#fdf2b3] p-4 sm:p-5 shadow-2xl z-20 transition-transform duration-300 hover:scale-110`}
                    >
                      <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-10 h-3 bg-[rgba(255,255,255,0.5)] shadow-sm -rotate-2"></div>
                      <p className="font-[Caveat,cursive,sans-serif] italic text-xl sm:text-2xl text-[#1a1a1a] leading-tight font-medium opacity-90">
                        "{member.quote}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text Side (Huge Editorial Bio) */}
                <div className="w-full md:w-1/2">
                  <h2 className="font-[Space_Grotesk] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.2]">
                    {member.bio}
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-[2px] bg-[#f5a623]" />
                    <div>
                      <p className="text-white font-bold text-lg tracking-wide">
                        {member.name}
                      </p>
                      <p className="text-[#f5a623] text-sm font-medium tracking-widest uppercase mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Join CTA */}
      <section className="px-6 py-24 relative-z">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 50, scale: 0.95 }}
            whileInView={isMobile ? {} : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 70,
              damping: 20,
            }}
            className="glass-card p-12 md:p-20 text-center relative overflow-hidden border border-[rgba(245,166,35,0.15)]"
          >
            <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-[#f5a623] opacity-10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[200px] h-[200px] bg-[#f9a8d4] opacity-10 blur-[60px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <Mail size={40} className="mx-auto text-[#f5a623] mb-6" />
              <h2 className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-white mb-6">
                Want to Join Us?
              </h2>
              <p className="text-[#adb5bd] max-w-xl mx-auto text-lg mb-10">
                We are always looking for passionate people who want to
                research, advocate, and drive impact. No prior experience
                required — just curiosity and commitment.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-gradient-to-br from-[#f5a623] to-[#d48806] text-[#0a0a0a] font-bold shadow-[0_4px_24px_rgba(245,166,35,0.25)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(245,166,35,0.4)] transition-all duration-300 cursor-pointer"
              >
                <Mail size={20} />
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
