"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiPhone, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const EMAILJS_SERVICE_ID  = "service_doe2hxc";
const EMAILJS_TEMPLATE_ID = "template_hdilw9m";
const EMAILJS_PUBLIC_KEY  = "7D-9FUV5MubrOVt9z";

const SOCIAL = [
  { icon: FiGithub, label: "GitHub", value: "github.com/VanshSUTHAR",  href: "https://github.com/VanshSUTHAR" },
  { icon: FiMail,   label: "Email",  value: "sutharvansh022@gmail.com", href: "mailto:sutharvansh022@gmail.com" },
  { icon: FiPhone,  label: "Phone",  value: "+91 7043459404",           href: "tel:+917043459404" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [form, setForm]         = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus]     = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const handleSend = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus("sending");

    try {
      const emailjs = (await import("@emailjs/browser")).default;

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject || `Portfolio message from ${form.name}`,
          message:    form.message,
          reply_to:   form.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMsg("Something went wrong — please try again or email me directly.");
      setStatus("error");
    }
  };

  const isValid   = form.name.trim() !== "" && form.email.trim() !== "" && form.message.trim() !== "";
  const isSending = status === "sending";

  const inputStyle: React.CSSProperties = {
    background: "var(--bg-card)",
    border:     "1px solid var(--border)",
    color:      "var(--fg)",
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 " +
    "placeholder:opacity-40 focus:ring-2 focus:ring-[color:var(--accent)] " +
    "disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="min-h-screen pt-20 pb-20 sm:pt-24 sm:pb-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-10 sm:mb-14">
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Contact
          </span>
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-display mt-3 leading-tight"
            style={{ color: "var(--fg)" }}
          >
            Let&apos;s Work Together
          </h1>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20">

          {/* Left: Info */}
          <motion.div {...fadeUp(0.15)} className="space-y-8">
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Fill in the form and hit{" "}
              <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Send Message</strong> — your
              message lands straight in my inbox, no mail app needed.
            </p>

            {/* Social links */}
            <div className="space-y-4 sm:space-y-5">
              {SOCIAL.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group"
                  aria-label={`${label}: ${value}`}
                >
                  <span
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: "var(--accent-light)", color: "var(--accent)" }}
                  >
                    <Icon size={16} />
                  </span>
                  <div>
                    <p
                      className="text-[10px] sm:text-[11px] font-medium uppercase tracking-widest mb-0.5"
                      style={{ color: "var(--fg-subtle)" }}
                    >
                      {label}
                    </p>
                    <p className="text-xs sm:text-sm font-medium break-all" style={{ color: "var(--fg)" }}>
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium"
              style={{
                background: "var(--accent-light)",
                color:      "var(--accent)",
                border:     "1px solid var(--accent)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              Open to new opportunities
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div {...fadeUp(0.25)} className="space-y-4">

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[10px] sm:text-[11px] font-medium uppercase tracking-widest mb-2"
                  style={{ color: "var(--fg-subtle)" }}
                >
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={isSending}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] sm:text-[11px] font-medium uppercase tracking-widest mb-2"
                  style={{ color: "var(--fg-subtle)" }}
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange}
                  disabled={isSending}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-[10px] sm:text-[11px] font-medium uppercase tracking-widest mb-2"
                style={{ color: "var(--fg-subtle)" }}
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                disabled={isSending}
                className={inputClass}
                style={inputStyle}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-[10px] sm:text-[11px] font-medium uppercase tracking-widest mb-2"
                style={{ color: "var(--fg-subtle)" }}
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project or idea…"
                value={form.message}
                onChange={handleChange}
                disabled={isSending}
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
            </div>

            {/* Send button */}
            <motion.button
              type="button"
              onClick={handleSend}
              disabled={!isValid || isSending || status === "success"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: "var(--accent)", color: "#fff" }}
              whileHover={isValid && !isSending ? { scale: 1.01 } : {}}
              whileTap={isValid && !isSending ? { scale: 0.99 } : {}}
              aria-label="Send message"
            >
              {isSending ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="10" strokeOpacity={0.25} />
                    <path d="M12 2a10 10 0 0 1 10 10" />
                  </svg>
                  Sending…
                </>
              ) : status === "success" ? (
                <>
                  <FiCheckCircle size={15} />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message <FiSend size={15} />
                </>
              )}
            </motion.button>

            {/* Success banner */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 px-4 py-3 rounded-xl text-sm"
                style={{
                  background: "var(--accent-light)",
                  color:      "var(--accent)",
                  border:     "1px solid var(--accent)",
                }}
                role="alert"
              >
                <FiCheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                <span>Thanks! Your message has been sent — I&apos;ll get back to you soon.</span>
              </motion.div>
            )}

            {/* Error banner */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 px-4 py-3 rounded-xl text-sm"
                style={{ background: "#fee2e2", color: "#b91c1c", border: "1px solid #fca5a5" }}
                role="alert"
              >
                <FiAlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            {/* Idle hint */}
            {status === "idle" && (
              <p className="text-xs text-center" style={{ color: "var(--fg-subtle)" }}>
                Sent directly to my inbox — no mail app required.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}