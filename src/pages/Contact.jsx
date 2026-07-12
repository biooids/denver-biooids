//src/pages/Contact.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, MessageSquare, Mail, ExternalLink } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const teamContacts = [
  {
    name: "Ajah Mawut Pech",
    email: "a.aleer@alustudent.com",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783776742/ajah_xrtqnn.jpg",
  },
  {
    name: "Mussab Abdelgadir",
    email: "m.abdelgadi@alustudent.com",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783776743/musab_cxumrh.jpg",
  },
  {
    name: "Jonathan Nyibizi",
    email: "j.nyibizi@alustudent.com",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783776745/jona_zsj4lu.jpg",
  },
  {
    name: "Kellan Wayoga",
    email: "k.wayoga@alustudent.com",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783777494/ke_lhvxqw.png",
  },
  {
    name: "Hwapyong Maniragaba",
    email: "h.manirab@alustudent.com",
    image:
      "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783776746/ed_aaqz1y.jpg",
  },
];

const faqs = [
  {
    question: "How can I join Intrepreneur Lab?",
    answer:
      "We accept new members at the start of each semester. Reach out to any of our team members directly via email and we will send you the application details.",
  },
  {
    question: "Do I need coding experience?",
    answer:
      "Not at all! We need designers, writers, marketers, and project managers too. If you are curious and committed, there is a place for you.",
  },
  {
    question: "Can I propose a challenge?",
    answer:
      "Absolutely. We love challenge ideas from the community. The best ones come from real problems people face every day.",
  },
  {
    question: "Is this open to all majors?",
    answer:
      "Yes! Our current team includes a variety of majors. Diversity in thought and discipline makes our products stronger.",
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  // Fluid Blob tracking logic matches the rest of the site
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
              Let Us <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-lg text-[#adb5bd] leading-relaxed">
              Have a challenge idea? Want to join the lab? Or just want to say
              hi? Skip the generic forms and reach out to our team directly. We
              are always open to interesting conversations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-6 py-12 relative-z">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Location & Socials */}
            <motion.div
              initial={{ opacity: 0, x: -40, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              className="lg:col-span-1 space-y-8"
            >
              <h2 className="font-[Space_Grotesk] text-3xl font-bold text-white mb-8">
                Get In Touch
              </h2>

              <div className="glass-card p-6 flex items-start gap-4 hover:border-[rgba(245,166,35,0.3)] transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[rgba(245,166,35,0.1)] text-[#f5a623] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-[#6c757d] uppercase tracking-wider mb-1">
                    Location
                  </span>
                  <span className="text-white font-medium text-lg">
                    ALU University Rwanda
                  </span>
                </div>
              </div>

              <a
                href="https://www.instagram.com/denver_alu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-start gap-4 hover:border-[rgba(249,168,212,0.4)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f5a623]/10 to-[#f9a8d4]/10 text-[#f9a8d4] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaInstagram size={24} />
                </div>
                <div className="flex-grow">
                  <span className="block text-sm font-semibold text-[#6c757d] uppercase tracking-wider mb-1">
                    Instagram
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium text-lg">
                      @denver_alu
                    </span>
                    <ExternalLink
                      size={18}
                      className="text-[#6c757d] group-hover:text-[#f9a8d4] transition-colors"
                    />
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Right Column: Team Emails */}
            <motion.div
              initial={{ opacity: 0, x: 40, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              className="lg:col-span-2"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {teamContacts.map((member, i) => (
                  <a
                    key={i}
                    href={`mailto:${member.email}`}
                    className="glass-card p-5 flex items-center gap-4 hover:border-[rgba(245,166,35,0.4)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[rgba(255,255,255,0.05)] group-hover:border-[#f5a623] transition-colors duration-300"
                      loading="lazy"
                    />
                    <div className="overflow-hidden">
                      <h3 className="font-[Space_Grotesk] font-bold text-white text-lg truncate">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-[#adb5bd] group-hover:text-[#f5a623] transition-colors duration-300">
                        <Mail size={14} className="flex-shrink-0" />
                        <span className="text-sm truncate">{member.email}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24 relative-z">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
            className="text-left mb-12"
          >
            <h2 className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked
            </h2>
            <p className="text-[#adb5bd] text-lg">
              Quick answers to common questions.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
                className="glass-card overflow-hidden hover:border-[rgba(255,255,255,0.1)] transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-[Space_Grotesk] text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <MessageSquare
                    size={22}
                    className={`text-[#f5a623] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-[#adb5bd] text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
