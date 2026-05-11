"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import Image from "next/image";
import image1 from "../image/Vansh.jpg";
import { TypewriterEffect } from "@/components/TypewriterEffect";
const TECH = ["React.js", "Next.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "TypeScript", "Supabase", "Vercel", "REST APIs", "Git", "Postman"];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between " style={{ background: "var(--bg)" }}>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center px-4 sm:px-6 max-w-6xl mx-auto w-full pt-32 pb-20">

        {/* Top Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="inline-block w-6 sm:w-8 h-px bg-amber-500" />
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-600 dark:text-amber-500">
            MERN Stack Developer
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* Left Column */}
          {/* Left Column */}
          <div className="flex-1 space-y-12 z-10 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="font-bold leading-[0.9] tracking-tighter" style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}>
                <span className="block">Building</span>
                <span className="text-amber-500 italic min-h-[1em] inline-block">
                  <TypewriterEffect words={["Experiences.", "for the Web.", "Products."]} />
                </span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed font-light mx-auto lg:mx-0"
            >
              I&apos;m <strong className="text-slate-900 dark:text-white font-semibold">Vansh Suthar</strong> — a final-year CS student
              & MERN intern at Concatstring Solutions. I craft full-stack web applications with care.
            </motion.p>

            {/* FIXED SECTION: Wrapped buttons and links together to control spacing */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center lg:justify-start gap-5"
              >
                <Link
                  href="/projects"
                  className="group relative px-8 py-4 bg-slate-900 text-white dark:bg-white dark:text-black rounded-full font-bold overflow-hidden transition-all hover:pr-12 shadow-xl hover:shadow-amber-500/20"
                >
                  <span className="relative z-10">View Projects</span>
                  <FiArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-slate-200 dark:border-white/10 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>

              {/* Removed pt-12 and adjusted opacity/spacing */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4"
              >
                <a
                  href="https://github.com/VanshSUTHAR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-amber-500 transition-colors"
                >
                  <FiGithub size={16} /> VanshSUTHAR
                </a>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <a
                  href="mailto:sutharvansh022@gmail.com"
                  className="text-sm text-slate-500 hover:text-amber-500 transition-colors"
                >
                  sutharvansh022@gmail.com
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group hidden md:block"
          >
            <div className="absolute -inset-8 bg-gradient-to-tr from-amber-500/20 to-blue-500/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 p-3 bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/20 rounded-[3rem] shadow-2xl"
            >
              <div className="overflow-hidden rounded-[2.5rem] relative bg-slate-200 dark:bg-slate-800">
                <Image
                  src={image1}
                  width={400}
                  height={550}
                  className="object-cover transition-all duration-[1200ms] group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0 h-[550px] w-[380px]"
                  alt="Vansh Suthar"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] px-6 py-5 rounded-2xl border border-white/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <span className="text-[10px] text-amber-600 uppercase tracking-[0.4em] font-black mb-1">Developer</span>
                  <span className="text-sm font-bold tracking-widest uppercase">VANSH SUTHAR</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>


      </section>

      {/* Marquee Section */}
      <div className="overflow-hidden py-8 border-y border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 backdrop-blur-sm relative z-10">
        <div className="flex w-fit animate-marquee whitespace-nowrap gap-16 pr-16">
          {[...TECH, ...TECH, ...TECH].map((t, i) => (
            <span key={i} className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-amber-500 transition-colors cursor-default">
              {t}
            </span>
          ))}
        </div>
      </div>


    </div>
  );
}