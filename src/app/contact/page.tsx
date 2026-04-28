"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiPhone, FiSend } from "react-icons/fi";

const SOCIAL = [
  { icon: FiGithub, label: "GitHub", value: "github.com/VanshSUTHAR", href: "https://github.com/VanshSUTHAR" },
  { icon: FiMail, label: "Email", value: "sutharvansh022@gmail.com", href: "mailto:sutharvansh022@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+91 7043459404", href: "tel:+917043459404" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) return;
    const to = "sutharvansh022@gmail.com";
    const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const inputStyle = { background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--fg)" };
  const inputClass = "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 placeholder:opacity-40 focus:ring-2 focus:ring-[color:var(--accent)]";

  return (
    <div className="min-h-screen pt-24 pb-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <motion.div {...fadeUp(0)} className="mb-14">
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--accent)" }}>Contact</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-display mt-3 leading-tight" style={{ color: "var(--fg)" }}>
            Let&apos;s Work Together
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20">

          <motion.div {...fadeUp(0.15)} className="space-y-8">
            <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Fill in the form and hit <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Send Message</strong> — your mail app will open with everything pre-filled, ready to send straight to my inbox.
            </p>

            <div className="space-y-5">
              {SOCIAL.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-center gap-4 group" aria-label={`${label}: ${value}`}>
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
                    <Icon size={17} />
                  </span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-widest mb-0.5" style={{ color: "var(--fg-subtle)" }}>{label}</p>
                    <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-medium" style={{ background: "var(--accent-light)", color: "var(--accent)", border: "1px solid var(--accent)" }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open to new opportunities
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.25)} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[11px] font-medium uppercase tracking-widest mb-2" style={{ color: "var(--fg-subtle)" }}>Name *</label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" value={form.name} onChange={handleChange} className={inputClass} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] font-medium uppercase tracking-widest mb-2" style={{ color: "var(--fg-subtle)" }}>Email *</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" value={form.email} onChange={handleChange} className={inputClass} style={inputStyle} />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-[11px] font-medium uppercase tracking-widest mb-2" style={{ color: "var(--fg-subtle)" }}>Subject</label>
              <input id="subject" name="subject" type="text" placeholder="What's this about?" value={form.subject} onChange={handleChange} className={inputClass} style={inputStyle} />
            </div>

            <div>
              <label htmlFor="message" className="block text-[11px] font-medium uppercase tracking-widest mb-2" style={{ color: "var(--fg-subtle)" }}>Message *</label>
              <textarea id="message" name="message" required rows={6} placeholder="Tell me about your project or idea…" value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} style={inputStyle} />
            </div>

            <motion.button
              type="button"
              onClick={handleSend}
              disabled={!form.name || !form.email || !form.message}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: "var(--accent)", color: "#fff" }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              aria-label="Send message via email client"
            >
              Send Message <FiSend size={15} />
            </motion.button>

            <p className="text-xs text-center" style={{ color: "var(--fg-subtle)" }}>
              Opens your mail app with everything pre-filled.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
