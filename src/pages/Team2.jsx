//src/pages/Team.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link as LinkIcon, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Lab Director & Founder",
    bio: "Computer Science senior with a passion for AI and building products that matter. Founded the lab in 2023 after realizing the best way to learn is to build under real pressure. Now leads strategy, partnerships, and the culture that keeps the lab shipping.",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
    skills: ["AI/ML", "Product Strategy", "Team Leadership"],
  },
  {
    name: "Sarah Johnson",
    role: "VP of Engineering",
    bio: "Full-stack wizard who believes clean code is a love language. Leads technical architecture for every challenge and mentors new members through their first production deploy. Obsessed with developer experience and systems that do not fall over at 3am.",
    image:
      "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=800",
    skills: ["Full-Stack", "System Design", "Mentorship"],
  },
  {
    name: "Marcus Lee",
    role: "Design Lead",
    bio: "Design systems enthusiast who makes sure everything we build looks as good as it works. Started in print design, fell for digital product, and now owns the visual language across every challenge the lab ships.",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
    skills: ["UX Research", "Design Systems", "Prototyping"],
  },
  {
    name: "Emily Davis",
    role: "Research Lead",
    bio: "Data science specialist who turns messy datasets into actionable insights and beautiful visualizations. Leads the research arm of every challenge, making sure we are solving the right problem before we write a line of code.",
    image:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800",
    skills: ["Data Science", "Analytics", "Visualization"],
  },
  {
    name: "James Wilson",
    role: "Mobile Lead",
    bio: "Flutter and React Native expert who believes the best apps feel invisible to the user. Owns the mobile side of every challenge and has shipped three apps that students actually keep on their home screens.",
    image:
      "https://images.pexels.com/photos/2379002/pexels-photo-2379002.jpeg?auto=compress&cs=tinysrgb&w=800",
    skills: ["React Native", "Flutter", "Mobile UX"],
  },
];

function MemberCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 60,
      }}
      className="team-card group"
    >
      {/* Banner image */}
      <div className="relative h-28 overflow-hidden rounded-t-[24px]">
        <img
          src={member.image}
          alt=""
          className="w-full h-full object-cover scale-110 blur-[2px] brightness-[0.4] group-hover:scale-125 group-hover:blur-[3px] transition-all duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5a623]/20 via-transparent to-[rgba(25,25,25,0.9)]" />
      </div>

      {/* Avatar */}
      <div className="relative px-6 -mt-14">
        <div className="avatar-ring w-24 h-24 rounded-full p-[3px] shadow-lg">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full rounded-full object-cover border-2 border-[rgba(25,25,25,1)]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-7 pt-4">
        <h3 className="font-[Space_Grotesk] text-xl font-bold text-white mb-0.5">
          {member.name}
        </h3>
        <p className="text-[#f5a623] text-sm font-bold tracking-wide mb-4">
          {member.role}
        </p>

        <p className="text-[#adb5bd] text-[13px] leading-relaxed mb-5">
          {member.bio}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="skill-pill px-2.5 py-1 rounded-full text-[11px] font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-4 border-t border-[rgba(255,255,255,0.05)]">
          <a
            href="#"
            className="social-btn w-9 h-9 flex items-center justify-center rounded-lg bg-[rgba(255,255,255,0.04)] text-[#868e96] hover:bg-[#f5a623] hover:text-[#0a0a0a]"
          >
            <LinkIcon size={16} />
          </a>
          <a
            href="#"
            className="social-btn w-9 h-9 flex items-center justify-center rounded-lg bg-[rgba(255,255,255,0.04)] text-[#868e96] hover:bg-[#f5a623] hover:text-[#0a0a0a]"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  // Fluid Blob tracking logic matches Home and About exactly
  useEffect(() => {
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
    <div className="relative pt-24">
      {/* FLUID BLOB */}
      <div id="cursor-blob"></div>

      {/* Hero */}
      <section className="px-6 pb-16 relative-z">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="text-center max-w-[800px] mx-auto pt-10"
          >
            <h1 className="font-[Space_Grotesk] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet the <span className="gradient-text">Makers</span>
            </h1>
            <p className="text-lg text-[#adb5bd] leading-relaxed">
              A diverse crew of designers, developers, researchers, and
              dreamers. Together, we turn impossible challenges into shipped
              products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid - 3 cards per row */}
      <section className="px-6 py-8 relative-z">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="mb-10 text-center md:text-left"
          >
            <h2 className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-white mb-2">
              The Team
            </h2>
            <p className="text-[#adb5bd] text-lg">
              The makers who turn every challenge into a shipped prototype.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="px-6 py-24 relative-z">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 70,
              damping: 20,
            }}
            className="glass-card p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-[#f5a623] opacity-10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[200px] h-[200px] bg-[#f9a8d4] opacity-10 blur-[60px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <Mail size={40} className="mx-auto text-[#f5a623] mb-6" />
              <h2 className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-white mb-6">
                Want to Join Us?
              </h2>
              <p className="text-[#adb5bd] max-w-xl mx-auto text-lg mb-10">
                We are always looking for passionate people who want to build,
                learn, and grow. No experience required — just curiosity and
                commitment.
              </p>
              <a
                href="mailto:hello@intrepreneurlab.com"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-gradient-to-br from-[#f5a623] to-[#d48806] text-[#0a0a0a] font-bold shadow-[0_4px_24px_rgba(245,166,35,0.25)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(245,166,35,0.4)] transition-all duration-300"
              >
                <Mail size={20} />
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
