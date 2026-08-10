"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiAlertCircle } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-md mx-auto px-4 text-center">
        <motion.div {...fadeUp(0)} className="space-y-6">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-2"
            style={{ background: "var(--accent-light)", color: "var(--accent)" }}
          >
            <FiAlertCircle size={32} />
          </div>

          <span
            className="block text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            404 Error
          </span>

          <h1
            className="font-display text-4xl sm:text-5xl tracking-display leading-tight"
            style={{ color: "var(--fg)" }}
          >
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--accent)", color: "#ffffff" }}
            >
              <FiArrowLeft size={16} /> Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
