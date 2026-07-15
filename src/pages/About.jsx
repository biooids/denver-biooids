//src/pages/About.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Heart,
  Globe,
  BookOpen,
  Target as MissionIcon,
  AlertTriangle,
  Lightbulb,
  Wallet,
  CheckCircle,
  Shield,
  ArrowRight,
} from "lucide-react";
import useIsMobile from "../hooks/useIsMobile";
const values = [
  {
    icon: BookOpen,
    title: "Education First",
    description: "Every girl deserves the right to learn, grow, and lead.",
  },
  {
    icon: Heart,
    title: "Holistic Support",
    description:
      "Tackling financial barriers, gender bias, and the lack of role models.",
  },
  {
    icon: Target,
    title: "Community Driven",
    description:
      "Monthly workshops with parents and local leaders to shift cultural mindsets.",
  },
  {
    icon: Shield,
    title: "Safe Spaces",
    description:
      "Establishing dedicated safe spaces and providing female teacher guidance.",
  },
  {
    icon: Wallet,
    title: "Financial Transparency",
    description:
      "Strict accountability over our 1,000,000 RWF budget through monthly reports.",
  },
  {
    icon: Globe,
    title: "Sustainable Impact",
    description:
      "Building endowment funds and partnering with local businesses for continuity.",
  },
];

const timeline = [
  {
    year: "Months 1-3",
    title: "Foundation",
    description:
      "Establish local partnerships, set up mentorship structures, and select the first cohort of 200 at-risk girls.",
  },
  {
    year: "Months 4-6",
    title: "Launch",
    description:
      "Distribute scholarships and hygiene kits. Initiate weekly safe-space meetings between girls and mentors.",
  },
  {
    year: "Months 7-9",
    title: "Engagement",
    description:
      "Roll out parent workshops and community leader forums to address early marriage and education value.",
  },
  {
    year: "Months 10-12",
    title: "Evaluation",
    description:
      "Conduct academic impact assessments, gather feedback, and prepare scaling model for Year 2.",
  },
  {
    year: "June 2026",
    title: "Infrastructure",
    description:
      "Building a dormitory by June 2026 to eliminate the dangers of long commutes, ensuring girls stay safe.",
  },
  {
    year: "Future",
    title: "Vocational Excellence",
    description:
      "Launching training in IT and sustainable agriculture to boost employability and provide practical skills.",
  },
];

const pillars = [
  {
    icon: MissionIcon,
    label: "Mission",
    title: "Our Mission",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783850417/Picture_zdvpey.png",
    paragraphs: [
      "Empower Her Education is dedicated to eliminating the barriers that force girls in Gatsata to drop out.",
      "We believe that when you educate a girl, you educate a nation. But when a girl is forced to drop out due to poverty or biology, an entire community loses its future leader, innovator, and changemaker.",
    ],
    points: [
      "Financial grants to cover school fees and supplies",
      "Pairing at-risk girls with professional female mentors",
      "Monthly workshops with parents and local leaders",
    ],
  },
  {
    icon: AlertTriangle,
    label: "Problem",
    title: "The Problem",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783855593/images_s1a7zt.jpg",
    paragraphs: [
      "In Gatsata, Rwanda, hundreds of teenage girls drop out of high school each year. Currently, 42% of girls in Gatsata-area high schools do not complete secondary education, compared to just 21% of boys.",
      "A staggering 62% of enrolled girls drop out before reaching Grade 11. The root causes are deeply systemic: 60% of dropout cases are linked to extreme poverty, while 65% of dropout cases link directly to absent menstrual hygiene facilities.",
    ],
    points: [
      "42% female dropout rate vs 21% for boys",
      "60% of cases linked to extreme poverty",
      "65% of cases caused by absent menstrual facilities",
    ],
  },
  {
    icon: Lightbulb,
    label: "Solution",
    title: "Our Solution",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783850678/Picture_jlbrwb.png",
    paragraphs: [
      "We deployed a holistic program tackling financial barriers, gender bias, and the lack of role models. Through grassroots mobilization, we established a local task force comprising village elders, experienced teachers, and influential local leaders.",
      "The 'Girls' Room Initiative' establishes dedicated safe spaces for hygiene and peer support. Using community funds, we provide free sanitary pads and spare uniforms to ensure attendance, while trained female teachers serve as focal points for emotional guidance.",
    ],
    points: [
      "Dedicated safe spaces for hygiene and peer support",
      "Free sanitary pads and spare uniforms",
      "Grassroots mobilization with local elders and leaders",
    ],
  },
  {
    icon: Wallet,
    label: "Budget",
    title: "How Money Is Used",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783851449/dsfsd_aubiqa.png",
    paragraphs: [
      "We operate with strict financial transparency. Our total initiative budget is 1,000,000 RWF, supported by NGO partner funding, team contributions, and community donations.",
      "Every Rwandan Franc is meticulously tracked. Major expenditures are directly mapped to student outcomes, ensuring our lean budget directly impacts the girls who need it most.",
    ],
    points: [
      "250,000 RWF allocated to essential School Supplies",
      "150,000 RWF allocated to Sanitary Pads & Hygiene Kits",
      "120,000 RWF allocated to Mentorship Workshops",
      "80,000 RWF allocated to Community Awareness Campaigns",
    ],
  },
  {
    icon: CheckCircle,
    label: "Conclusion",
    title: "The Conclusion",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783851152/Picture_jm07ya.png",
    paragraphs: [
      "By directly funding hygiene, fees, and cultural shifts, we anticipate driving the dropout rate from 42% down to 15% within the first three years of program maturity. We have already achieved a 40% reduction in female dropout rates within the first three years of the initiative.",
      "Our 2026 goal is to realize the vision where every girl in the district completes twelve years of basic education, fostering a new generation of empowered Rwandan female leaders. When you empower a girl, you ignite a future for the entire nation.",
    ],
    points: [
      "Driving the dropout rate from 42% down to 15%",
      "Goal: 12 years of basic education for every girl",
      "Fostering a new generation of empowered female leaders",
    ],
  },
  {
    icon: CheckCircle,
    label: "e-learning",
    title: "E-learning platform w've created to support",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1784142341/Screenshot_from_2026-07-15_21-01-32_eawnhl.png",
    paragraphs: [
      "This is an e-learning platform we've created to support the girls in their studies and help them with their homework. The platform is designed to be user-friendly and accessible to all students, regardless of their level of education or experience with technology.",
    ],
    points: [
      "Online learning platform for students to access educational resources and materials.",
      "Interactive features such as quizzes, assignments, and discussion forums.",
      "The platform is designed to be user-friendly and accessible to all students.",
    ],
  },
];

export default function About() {
  const isMobile = useIsMobile();

  // Fluid Blob tracking logic
  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable blob tracking on mobile

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
              We Are <span className="gradient-text">Denver Think Tank</span>
            </h1>
            <p className="text-lg text-[#adb5bd] leading-relaxed">
              We are dedicated to eliminating the barriers that force girls in
              Gatsata to drop out. Through our flagship project, Empower Her
              Education, we tackle financial barriers, gender bias, and the lack
              of role models to ignite a future for the entire nation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Problem, Solution, Budget, Conclusion */}
      <section className="px-6 py-16 overflow-hidden relative-z">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={
              isMobile ? false : { opacity: 0, y: 30, filter: "blur(5px)" }
            }
            whileInView={
              isMobile ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="mb-20"
          >
            <h2 className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-white mb-4">
              Empowering Girls in Gatsata
            </h2>
            <p className="text-[#adb5bd] max-w-xl">
              A clear look at the crisis we face, what we are building to solve
              it, and how every Rwandan Franc moves us closer to the impact we
              want.
            </p>
          </motion.div>

          <div className="space-y-32">
            {pillars.map((pillar, index) => {
              const isEven = index % 2 === 0;
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.label}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-10 lg:gap-16 items-start`}
                >
                  {/* Image Side */}
                  <motion.div
                    initial={
                      isMobile
                        ? false
                        : {
                            opacity: 0,
                            x: isEven ? -60 : 60,
                            scale: 0.95,
                            rotateY: isEven ? -10 : 10,
                          }
                    }
                    whileInView={
                      isMobile ? {} : { opacity: 1, x: 0, scale: 1, rotateY: 0 }
                    }
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 60,
                      damping: 15,
                    }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="relative group mt-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f5a623]/10 to-[#f9a8d4]/10 rounded-2xl blur-2xl transform scale-105 transition-all duration-500 group-hover:scale-110 group-hover:from-[#f5a623]/15" />
                      <div className="relative rounded-[20px] overflow-hidden border border-[rgba(255,255,255,0.05)] shadow-2xl">
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[rgba(245,166,35,0.15)] backdrop-blur-md text-[#f5a623] border border-[rgba(245,166,35,0.3)] shadow-[0_0_15px_rgba(245,166,35,0.2)]">
                            <Icon size={24} />
                          </div>
                          <span className="text-white font-[Space_Grotesk] font-bold text-sm tracking-widest uppercase">
                            {pillar.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Side */}
                  <motion.div
                    initial={
                      isMobile
                        ? false
                        : {
                            opacity: 0,
                            x: isEven ? 60 : -60,
                            filter: "blur(8px)",
                          }
                    }
                    whileInView={
                      isMobile ? {} : { opacity: 1, x: 0, filter: "blur(0px)" }
                    }
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1,
                      type: "spring",
                      stiffness: 60,
                      damping: 15,
                    }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f5a623]/20 to-[#f9a8d4]/20 text-[#f5a623] border border-[rgba(245,166,35,0.2)]">
                        <Icon size={20} />
                      </div>
                      <span className="text-sm font-bold text-[#f5a623] tracking-widest">
                        {String(index + 1).padStart(2, "0")} / 05
                      </span>
                    </div>

                    <h3 className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-white mb-6">
                      {pillar.title}
                    </h3>

                    {pillar.paragraphs.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-[#adb5bd] leading-relaxed mb-4 text-lg"
                      >
                        {para}
                      </p>
                    ))}

                    <ul className="space-y-4 mt-8">
                      {pillar.points.map((point, ptIdx) => (
                        <li
                          key={ptIdx}
                          className="flex items-start gap-4 glass-card px-5 py-3 border-[rgba(255,255,255,0.02)]"
                        >
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-[#f9a8d4] shadow-[0_0_10px_rgba(249,168,212,0.6)] flex-shrink-0" />
                          <span className="text-white font-medium text-sm leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24 relative-z">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={
              isMobile ? false : { opacity: 0, y: 30, filter: "blur(5px)" }
            }
            whileInView={
              isMobile ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="text-center mb-16"
          >
            <h2 className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Pillars
            </h2>
            <p className="text-[#adb5bd] max-w-xl mx-auto text-lg">
              The foundational principles driving the Empower Her Education
              initiative forward.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={
                    isMobile ? false : { opacity: 0, y: 30, scale: 0.95 }
                  }
                  whileInView={isMobile ? {} : { opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 60,
                  }}
                  className="glass-card p-8 hover:border-[rgba(245,166,35,0.3)] transition-all duration-300 group"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[rgba(245,166,35,0.1)] text-[#f5a623] mb-6 group-hover:scale-110 group-hover:bg-[rgba(245,166,35,0.15)] transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-[Space_Grotesk] text-2xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#adb5bd] text-base leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-24 relative-z">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={
              isMobile ? false : { opacity: 0, y: 30, filter: "blur(5px)" }
            }
            whileInView={
              isMobile ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="text-center mb-20"
          >
            <h2 className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-white mb-4">
              12-Month Implementation Roadmap
            </h2>
            <p className="text-[#adb5bd] max-w-xl mx-auto text-lg">
              Our step-by-step plan to combat early departure and economic
              barriers in Gatsata.
            </p>
          </motion.div>

          <div className="relative">
            {/* Center Line Gradient */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#f5a623] via-[#f9a8d4] to-transparent md:-translate-x-1/2" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={
                  isMobile ? false : { opacity: 0, y: 40, filter: "blur(5px)" }
                }
                whileInView={
                  isMobile ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
                }
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                {/* Timeline Dot */}
                <div className="absolute left-[11px] md:left-1/2 w-5 h-5 bg-[#f5a623] rounded-full border-4 border-[#080808] md:-translate-x-1/2 mt-1.5 shadow-[0_0_15px_rgba(245,166,35,0.5)]" />

                <div className="pl-12 md:pl-0 md:w-1/2">
                  <div className="glass-card p-8 group hover:border-[rgba(245,166,35,0.2)] transition-colors duration-300">
                    <span className="inline-block bg-[rgba(245,166,35,0.15)] border border-[rgba(245,166,35,0.25)] px-4 py-1.5 rounded-full text-xs font-bold text-[#f5a623] tracking-widest mb-4">
                      {item.year}
                    </span>
                    <h3 className="font-[Space_Grotesk] text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#adb5bd] text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
