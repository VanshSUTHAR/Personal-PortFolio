"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress,
  SiTailwindcss, SiTypescript, SiSupabase, SiGit, SiVercel,
  SiPostman, SiJavascript, SiHtml5, SiGithub,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const SKILLS = [
  { icon: SiReact, label: "React.js", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "currentColor" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiExpress, label: "Express.js", color: "currentColor" },
  { icon: SiSupabase, label: "Supabase", color: "#3ECF8E" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { icon: SiHtml5, label: "CSS3", color: "#1572B6" },
  { icon: SiGit, label: "Git", color: "#F05032" },
  { icon: SiVercel, label: "Vercel", color: "currentColor" },
  { icon: SiPostman, label: "Postman", color: "#FF6C37" },
  { icon: SiGithub, label: "GitHub", color: "currentColor" },
];

const CERTIFICATES = [
  { name: "Exploratory Data Analysis for Machine Learning", org: "IBM", href: "/certificates/Exploratory Data Analysis for Machine Learning.pdf" },
  { name: "HTML, CSS & JavaScript for Web Developers", org: "Johns Hopkins", href: "/certificates/HTML, CSS, and Javascript for Web Developers.pdf" },
  { name: "Inheritance and Data Structures in Java", org: "U of Pennsylvania", href: "/certificates/Inheritance and Data Structures in Java.pdf" },
  { name: "Introduction to Java", org: "Learn Quest", href: "/certificates/Introduction to Java.pdf" },
  { name: "Building Generative AI-Powered Apps with Python", org: "IBM", href: "/certificates/Building Generative AI-Powered Applications with Python.pdf" },
  { name: "AWS Cloud Technical Essentials", org: "AWS", href: "/certificates/AWS Cloud Technical Essentials.pdf" },
  { name: "Machine Learning with Python", org: "IBM", href: "/certificates/Machine Learning with Python.pdf" },
  { name: "Machine Learning with Python.pdf", org: "Microsoft", href: "/certificates/Back-End Development with .NET.pdf" },
];

const FACTS = [
  { label: "Location", value: "Ahemdabad, Gujarat, India" },
  { label: "Education", value: "B.Tech. CS&T · LJ University · 2026" },
  { label: "Currently", value: "MERN Intern · Concatstring Solutions" },
  { label: "Email", value: "sutharvansh022@gmail.com", href: "mailto:sutharvansh022@gmail.com" },
  { label: "Phone", value: "+91 7043459404", href: "tel:+917043459404" },
  { label: "GitHub", value: "VanshSUTHAR", href: "https://github.com/VanshSUTHAR" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--accent)" }}>About</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-display mt-3 leading-tight" style={{ color: "var(--fg)" }}>
            The Developer Behind the Work
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">

          {/* Bio + Facts */}
          <motion.div {...fadeUp(0.15)} className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-2xl" style={{ color: "var(--fg)" }}>Vansh A. Suthar</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                Final-year Bachelor of Computer Science &amp; Technology student at LJ Institute of Engineering and Technology, LJ University (2022–2026), currently interning as a MERN Developer at Concatstring Solutions Private Limited.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                A dedicated and detail-oriented developer who enjoys solving problems and building meaningful solutions. Quick learner, team player — writes clean, organised code and continuously improves.
              </p>
            </div>

            {/* Quick facts */}
            <div className="space-y-0">
              {FACTS.map(({ label, value, href }) => (
                <div key={label} className="flex gap-4 py-3 border-b text-sm" style={{ borderColor: "var(--border)" }}>
                  <span className="w-24 flex-shrink-0" style={{ color: "var(--fg-subtle)" }}>{label}</span>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-center gap-1 link-underline break-all" style={{ color: "var(--accent)" }}>
                      {value} {href.startsWith("http") && <FiExternalLink size={11} />}
                    </a>
                  ) : (
                    <span style={{ color: "var(--fg)" }}>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills + Certs */}
          <div className="space-y-12">
            <motion.div {...fadeUp(0.25)}>
              <h3 className="text-[11px] font-medium tracking-widest uppercase mb-5" style={{ color: "var(--fg-subtle)" }}>Tech Stack</h3>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {SKILLS.map(({ icon: Icon, label, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.04 }}
                    className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl transition-transform hover:-translate-y-1 cursor-default"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                    title={label}
                  >
                    <Icon size={20} style={{ color }} aria-hidden="true" />
                    <span className="text-[9px] sm:text-[10px] font-medium text-center leading-tight" style={{ color: "var(--fg-muted)" }}>{label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.35)}>
              <h3 className="text-[11px] font-medium tracking-widest uppercase mb-5" style={{ color: "var(--fg-subtle)" }}>Online Certificates</h3>
              <div className="space-y-0">
                {CERTIFICATES.map(({ name, org, href }) => (

                  <div key={name} className="flex justify-between items-start gap-3 py-3 border-b text-sm" style={{ borderColor: "var(--border)" }}>
                    <span className="w-40 flex-shrink-0" style={{ color: "var(--fg-subtle)" }}>{name}</span>
                    {href ? (

                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-center gap-1 link-underline break-all" style={{ color: "var(--accent)" }}>
                        {org} {href.startsWith("http") && <FiExternalLink size={11} />}
                      </a>
                    ) : (
                      <span style={{ color: "var(--fg)" }}>{org}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
