"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ALL_TAGS = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");
  const filtered = activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <div className="min-h-screen pt-24 pb-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--accent)" }}>Work</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-display mt-3 leading-tight" style={{ color: "var(--fg)" }}>
            Selected Projects
          </h1>
        </motion.div>

        {/* Filter bar — scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex gap-2 mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap"
          role="group"
          aria-label="Filter projects by technology"
          style={{ scrollbarWidth: "none" }}
        >
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
              className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all hover:opacity-80"
              style={{
                background: activeTag === tag ? "var(--accent)" : "var(--bg-card)",
                color: activeTag === tag ? "#fff" : "var(--fg-muted)",
                border: `1px solid ${activeTag === tag ? "var(--accent)" : "var(--border)"}`,
              }}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div layout className="grid sm:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl overflow-hidden flex flex-col"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
              >
                {/* Year badge */}
                <span className="absolute top-5 right-5 text-xs font-medium px-2 py-1 rounded-full" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
                  {project.year}
                </span>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-display text-xl sm:text-2xl leading-tight mb-3 pr-12" style={{ color: "var(--fg)" }}>{project.title}</h2>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--fg-muted)" }}>{project.longDescription}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>{tag}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium transition-all hover:gap-2.5" style={{ color: "var(--accent)" }} aria-label={`View ${project.title} live`}>
                      Live Demo <FiExternalLink size={13} />
                    </a>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-60" style={{ color: "var(--fg-muted)" }} aria-label={`${project.title} on GitHub`}>
                        <FiGithub size={14} /> GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover accent bar */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: "var(--accent)" }} aria-hidden="true" />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center py-16" style={{ color: "var(--fg-muted)" }}>No projects with that tag yet.</p>
        )}
      </div>
    </div>
  );
}
