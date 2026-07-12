//src/pages/Home.jsx
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaTrophy,
  FaUsers,
  FaLightbulb,
  FaLayerGroup,
  FaGlobe,
  FaHandshake,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import VideoHero from "../components/VideoHero";

// Fully Accurate Challenge Data
const challenges = [
  {
    id: 1,
    title: "Get To Know Me",
    description:
      "Who are you? What drives you? In this challenge, we kickstarted our E-Lab journey with a quick 'Get To Know Me'. Coming together from Rwanda, Kenya, South Sudan, and Sudan, we brought diverse perspectives to the table. Each member created an elevator pitch answering core questions, and we compiled them to define our group statement and vision for the semester.",
    images: [
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783800160/IMG_5667_bhkw65.jpg",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783789640/Screenshot_from_2026-07-11_17-33-26_qyfkjj.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783789640/Screenshot_from_2026-07-11_17-33-34_su2csb.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783789640/Screenshot_from_2026-07-11_17-33-13_jy2mid.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783789638/Screenshot_from_2026-07-11_17-33-00_pnxfxf.png",
    ],
    stats: { team: 5, duration: "3 Days", status: "Completed" },
    icon: FaUsers,
    youtube: "https://youtu.be/DxcZPHuam9o",
  },
  {
    id: 2,
    title: "Discover Africa",
    description:
      "There is power in telling our own stories! We exercised our skills in storytelling, creative, and critical thinking by exploring the rich heritage of the Berber people (Imazighen) of North Africa. We dove into their sustainable farming practices, amazing facts, and debunked common misconceptions, presenting our findings through a creative broadcast format.",
    images: [
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783803138/Screenshot_from_2026-07-11_17-53-16_l7qhdp.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783803140/Screenshot_from_2026-07-11_17-54-00_l6oncl.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783803137/Screenshot_from_2026-07-11_17-53-34_sh5pva.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783803139/Screenshot_from_2026-07-11_17-54-34_jhehar.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783803138/Screenshot_from_2026-07-11_17-53-54_q3rrrp.png",
    ],
    stats: { team: 5, duration: "5 Days", status: "Completed" },
    icon: FaGlobe,
    youtube: "https://youtu.be/qyiSifM5Z6c",
  },
  {
    id: 3,
    title: "Help-Lab",
    description:
      "Community engagement is striving towards improving the quality of life. For the HELP-LAB challenge, we pooled our resources to help a local mother of two who was struggling financially. We provided groceries like sugar, paid for her health insurance, and learned profound lessons about empathy, active listening, and the real impact of community support.",
    images: [
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783803317/Image_20260617_213348_581_ina0vp.jpg",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783802865/Screenshot_from_2026-07-11_22-19-18_qnv2k8.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783800986/WhatsApp_Image_2026-07-04_at_10.57.21_PM_yaccy1.jpg",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783803522/Screenshot_from_2026-07-11_22-58-23_eleubr.png",
    ],
    stats: { team: 5, duration: "6 Days", status: "Completed" },
    icon: FaHandshake,
    youtube: "https://youtu.be/pjcbLSsDV6E",
  },
  {
    id: 4,
    title: "Human-Centered Research",
    description:
      "Applying systems thinking and human-centered design, we interviewed Jean Marie Vianney, the headmistress of Groupe Scolaire Agataramo. We researched the root causes of the dropout crisis among teenage girls in Gatsata, learning firsthand how extreme poverty, early marriage, and lack of hygiene management create systemic barriers to education.",
    images: [
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783803751/WhatsApp_Image_2026-06-23_at_3.48.00_PM_xoo9wh.jpg",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783803750/Screenshot_from_2026-07-11_18-01-31_b27y5x.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783803753/Screenshot_from_2026-07-11_18-01-42_dxh0cx.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783803751/WhatsApp_Image_2026-06-22_at_7.47.24_PM_1_dnelzm.jpg",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783804063/Screenshot_from_2026-07-11_23-07-21_niwvpm.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783804060/Screenshot_from_2026-07-11_23-07-10_swovsx.png",
    ],
    stats: { team: 5, duration: "7 Days", status: "Completed" },
    icon: FaLightbulb,
    youtube: "https://youtu.be/3Ct4VpjdcIY",
  },
  {
    id: 5,
    title: "Project Proposal",
    description:
      "Armed with our research, we developed a comprehensive proposal for a hypothetical $10,000 grant. 'Empower Her Education' aims to eliminate dropout rates in Gatsata by providing reusable sanitary pads, covering school fees, and combating cultural biases against girls' education. We created a 3-minute pitch video to prove the model works.",
    images: [
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783804885/Screenshot_from_2026-07-11_21-21-05_ucgebd.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783804883/Screenshot_from_2026-07-11_21-20-35_hgitzd.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783804883/Screenshot_from_2026-07-11_21-20-46_wehg8x.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783804883/Screenshot_from_2026-07-11_21-20-11_repphf.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783804883/Screenshot_from_2026-07-11_21-20-53_e6pbcx.png",
    ],
    stats: { team: 5, duration: "7 Days", status: "Completed" },
    icon: FaTrophy,
    youtube: "https://youtu.be/9b79BrrRcFw",
  },
  {
    id: 6,
    title: "Digital Print",
    description:
      "Congratulations on making it this far! In the 21st century, digital literacy is imperative. For our final challenge, we designed and built this very website to showcase our entire E-Lab journey, document our projects, and leave a lasting digital footprint representing the Denver Think Tank.",
    images: [
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783807067/Screenshot_from_2026-07-11_23-25-02_drnbsz.png",
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783807066/Screenshot_from_2026-07-11_23-25-12_sc2kz4.png",
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    stats: { team: 5, duration: "4 Days", status: "Completed" },
    icon: FaLayerGroup,
  },
];

const stats = [
  { number: 6, label: "Challenges Completed", suffix: "" },
  { number: 5, label: "Team Members", suffix: "" },
];

function AnimatedCounter({ target, suffix }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0;
            const increment = target / 40;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 50);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span
      ref={ref}
      className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-white"
    >
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  // Fluid Blob tracking logic
  useEffect(() => {
    const blob = document.getElementById("cursor-blob");
    if (!blob) return;

    const handlePointerMove = (e) => {
      const { clientX, clientY } = e;
      blob.animate(
        { left: `${clientX}px`, top: `${clientY}px` },
        { duration: 4000, fill: "forwards" },
      );
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <div id="cursor-blob"></div>

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-24 relative-z flex items-center">
        {/* Vertical Editorial Accents */}
        <div className="hidden xl:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[#495057] font-[Space_Grotesk] tracking-[0.5em] text-xs font-bold uppercase z-10">
          KIGALI, RWANDA
        </div>
        <div className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-[#f5a623]" />
          <div className="writing-vertical-rl text-[#f5a623] font-[Space_Grotesk] tracking-[0.3em] text-xs font-bold uppercase">
            ALU E-LAB
          </div>
          <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-[#f5a623]" />
        </div>

        <div className="relative z-10 max-w-[1300px] mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 50,
              }}
              className="font-[Space_Grotesk] text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[1.05] mb-6"
            >
              <span className="block">Where Ideas</span>
              <span className="block gradient-text">Become Reality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[clamp(1.05rem,2vw,1.2rem)] text-[#adb5bd] max-w-[500px] mb-10 leading-relaxed"
            >
              Born at <strong>ALU Rwanda</strong>. We are a student-led think
              tank tackling real-world African challenges through research,
              creativity, and collaborative problem-solving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 justify-start flex-wrap mb-12"
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-br from-[#f5a623] to-[#d48806] text-[#0a0a0a] font-bold shadow-[0_4px_24px_rgba(245,166,35,0.25)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(245,166,35,0.4)] transition-all duration-300"
              >
                Explore Our Journey <FaArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] text-white font-semibold hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(245,166,35,0.3)] transition-all duration-300"
              >
                About Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card px-6 py-4 text-center min-w-[150px]"
                >
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  <span className="block text-sm text-[#f9a8d4] font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Hero Image with Authentic Humor Stickers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              type: "spring",
              stiffness: 40,
            }}
            className="relative hidden lg:block"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5a623]/10 to-[#f9a8d4]/10 rounded-3xl blur-3xl transition-all duration-500 group-hover:blur-2xl" />

              <div className="relative rounded-3xl w-full h-[550px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.05)] overflow-visible">
                <img
                  src="https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783789641/WhatsApp_Image_2026-07-04_at_10.56.03_PM_poak3u.jpg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />

                {/* STICKER 1: Top Right */}
                <div className="absolute -top-6 -right-6 z-20 w-44 bg-[#fdf2b3] p-4 shadow-[2px_10px_20px_rgba(0,0,0,0.4)] rotate-[12deg] text-[#1a1a1a] transition-transform hover:scale-110">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/50 backdrop-blur-sm rotate-[-4deg] shadow-sm"></div>
                  <p className="font-[Caveat,cursive,sans-serif] italic text-lg text-center leading-tight font-medium">
                    "Wait, who has the final presentation?"
                  </p>
                </div>

                {/* STICKER 2: Bottom Left */}
                <div className="absolute -bottom-8 -left-8 z-20 w-48 bg-[#fdf2b3] p-4 shadow-[2px_10px_20px_rgba(0,0,0,0.4)] -rotate-[8deg] text-[#1a1a1a] transition-transform hover:scale-110">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/50 backdrop-blur-sm rotate-[3deg] shadow-sm"></div>
                  <p className="font-[Caveat,cursive,sans-serif] italic text-lg text-center leading-tight font-medium">
                    "Powered by chapati & big dreams 🌍"
                  </p>
                </div>

                {/* STICKER 3: Center Left */}
                <div className="absolute top-1/2 -left-12 -translate-y-1/2 z-20 w-40 bg-[#fdf2b3] p-3 shadow-[2px_10px_20px_rgba(0,0,0,0.4)] rotate-[-15deg] text-[#1a1a1a] transition-transform hover:scale-110">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-5 bg-white/50 backdrop-blur-sm rotate-[5deg] shadow-sm"></div>
                  <p className="font-[Caveat,cursive,sans-serif] italic text-[17px] text-center leading-tight font-medium">
                    "Impact &gt; Sleep"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INFINITE SCROLLING BANNER 1 */}
      <div className="w-full bg-[#f5a623] py-4 overflow-hidden relative-z border-y border-[#d48806]">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-[#080808] font-[Space_Grotesk] font-bold text-2xl uppercase tracking-widest flex items-center gap-12"
            >
              <span>DENVER</span>{" "}
              <span className="w-2 h-2 rounded-full bg-[#080808]"></span>
              <span>ALU</span>{" "}
              <span className="w-2 h-2 rounded-full bg-[#080808]"></span>
              <span>HELP LAB</span>{" "}
              <span className="w-2 h-2 rounded-full bg-[#080808]"></span>
              <span>E-LAB</span>{" "}
              <span className="w-2 h-2 rounded-full bg-[#080808]"></span>
              <span>ALU</span>{" "}
              <span className="w-2 h-2 rounded-full bg-[#080808]"></span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative-z">
        <VideoHero />
      </div>

      {/* INFINITE SCROLLING BANNER 2 */}
      <div className="w-full bg-gradient-to-r from-[#1a1a24] via-[#2a2a36] to-[#1a1a24] py-4 overflow-hidden relative-z border-y border-[rgba(255,255,255,0.05)] mt-12 md:mt-24">
        <div
          className="animate-marquee flex gap-12 whitespace-nowrap"
          style={{ animationDirection: "reverse", animationDuration: "20s" }}
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-[#f5a623] font-[Space_Grotesk] font-bold text-lg uppercase tracking-widest flex items-center gap-12"
            >
              <span>CHALLENGES</span>{" "}
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9a8d4]"></span>
              <span>INNOVATION</span>{" "}
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9a8d4]"></span>
              <span>IMPACT</span>{" "}
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9a8d4]"></span>
              <span>RESEARCH</span>{" "}
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9a8d4]"></span>
            </span>
          ))}
        </div>
      </div>

      {/* Challenges Section */}
      <section className="py-16 md:py-24 px-6 relative-z overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="font-[Space_Grotesk] text-3xl md:text-5xl font-bold text-white mb-6">
              Our Challenges
            </h2>
            <p className="text-[#adb5bd] max-w-xl mx-auto text-lg">
              Every challenge pushes us to innovate. Here are the six milestones
              we have conquered so far.
            </p>
          </motion.div>

          <div className="space-y-20 md:space-y-32">
            {challenges.map((challenge, index) => {
              const isEven = index % 2 === 0;
              const Icon = challenge.icon;

              return (
                <motion.div
                  key={challenge.id}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-10 lg:gap-20 items-center`}
                >
                  {/* Carousel Side - Added z-20 so it never gets blocked by text divs! */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? -60 : 60,
                      scale: 0.95,
                      rotate: isEven ? -2 : 2,
                    }}
                    whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 60,
                      damping: 15,
                    }}
                    className="w-full lg:w-1/2 relative z-20"
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f5a623]/5 to-[#f9a8d4]/10 rounded-2xl blur-2xl transform scale-105 transition-all duration-500 group-hover:scale-110 group-hover:from-[#f5a623]/10" />
                      <Carousel
                        images={challenge.images}
                        autoPlay={true}
                        interval={5000}
                      />
                    </div>
                  </motion.div>

                  {/* Text Side - Added z-10 so it stays underneath the Carousel wrapper */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? 60 : -60,
                      filter: "blur(8px)",
                    }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1,
                      type: "spring",
                      stiffness: 60,
                      damping: 15,
                    }}
                    className="w-full lg:w-1/2 relative z-10"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f5a623]/10 to-[#d48806]/10 text-[#f5a623] border border-[rgba(245,166,35,0.2)] shadow-[0_0_15px_rgba(245,166,35,0.1)]">
                        <Icon size={24} />
                      </div>
                      <span className="text-sm font-bold text-[#f5a623] tracking-wider uppercase">
                        Challenge 0{challenge.id}
                      </span>
                    </div>

                    <h3 className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-white mb-6">
                      {challenge.title}
                    </h3>

                    <p className="text-[#adb5bd] leading-relaxed text-lg mb-8">
                      {challenge.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                      <div className="glass-card px-5 py-2.5 text-sm">
                        <span className="text-[#6c757d]">Team: </span>
                        <span className="text-white font-medium">
                          {challenge.stats.team} Members
                        </span>
                      </div>
                      <div className="glass-card px-5 py-2.5 text-sm">
                        <span className="text-[#6c757d]">Duration: </span>
                        <span className="text-white font-medium">
                          {challenge.stats.duration}
                        </span>
                      </div>
                      <div className="glass-card px-5 py-2.5 text-sm">
                        <span className="text-[#6c757d]">Status: </span>
                        <span className="text-[#f5a623] font-medium">
                          {challenge.stats.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        to="/about"
                        className="inline-flex items-center gap-2 text-[#f5a623] font-semibold hover:gap-3 transition-all duration-300 group"
                      >
                        Deep Dive <FaArrowRight size={18} className="mt-0.5" />
                      </Link>

                      {/* YouTube Links */}
                      {challenge.youtube && (
                        <>
                          <span className="text-[#495057] hidden sm:inline">
                            |
                          </span>
                          <a
                            href={challenge.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#f9a8d4] font-semibold hover:text-white transition-colors duration-300"
                          >
                            <FaYoutube size={20} />
                            Watch Video
                          </a>
                        </>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 px-6 relative-z">
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
            <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#f5a623] opacity-10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-[#f9a8d4] opacity-10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h2 className="font-[Space_Grotesk] text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Join the Lab?
              </h2>
              <p className="text-[#adb5bd] max-w-xl mx-auto text-lg mb-10">
                We are always looking for passionate innovators who want to make
                a difference. Reach out and let us build something amazing
                together.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-gradient-to-br from-[#f5a623] to-[#d48806] text-[#0a0a0a] font-bold shadow-[0_4px_24px_rgba(245,166,35,0.25)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(245,166,35,0.4)] transition-all duration-300"
              >
                About Us <FaArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
