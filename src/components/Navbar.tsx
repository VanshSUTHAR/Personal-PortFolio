"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const THEMES = [
  { key: "light", label: "Light", swatch: "#f7f5f0", dot: "#c4621f" },
  { key: "dark", label: "Dark", swatch: "#1a1814", dot: "#e07b3a" },
  { key: "sepia", label: "Sepia", swatch: "#fdf8f0", dot: "#8b5e3c" },
  { key: "slate", label: "Slate", swatch: "#0d1117", dot: "#58a6ff" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 90%, transparent)" : "transparent",
      }}
    >
      <nav
        className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl tracking-tight transition-opacity hover:opacity-70"
          style={{ color: "var(--fg)" }}
          aria-label="Vansh Suthar — Home"
        >
          VS<span style={{ color: "var(--accent)" }}> - Vansh Suthar</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors link-underline"
              style={{
                color: pathname === href ? "var(--accent)" : "var(--fg-muted)",
              }}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Theme picker + mobile menu */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <div className="relative">
            <button
              onClick={() => setThemeOpen(!themeOpen)}
              aria-label="Change theme"
              aria-expanded={themeOpen}
              className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors hover:opacity-80"
              style={{
                borderColor: "var(--border)",
                background: THEMES.find((t) => t.key === theme)?.swatch,
              }}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  background: THEMES.find((t) => t.key === theme)?.dot,
                }}
              />
            </button>

            <AnimatePresence>
              {themeOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setThemeOpen(false)}
                    aria-hidden="true"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-11 z-50 rounded-xl p-3 shadow-lg"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--shadow-lg)",
                      minWidth: "160px",
                    }}
                    role="menu"
                    aria-label="Theme options"
                  >
                    <p
                      className="text-xs font-medium uppercase tracking-widest mb-2 px-1"
                      style={{ color: "var(--fg-subtle)" }}
                    >
                      Theme
                    </p>
                    {THEMES.map((t) => (
                      <button
                        key={t.key}
                        onClick={() => {
                          setTheme(t.key);
                          setThemeOpen(false);
                        }}
                        role="menuitem"
                        aria-pressed={theme === t.key}
                        className="w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm transition-colors hover:opacity-80"
                        style={{
                          background:
                            theme === t.key ? "var(--accent-light)" : "transparent",
                          color: theme === t.key ? "var(--accent)" : "var(--fg-muted)",
                        }}
                      >
                        <span
                          className="w-5 h-5 rounded-full border flex-shrink-0"
                          style={{
                            background: t.swatch,
                            borderColor: "var(--border)",
                            boxShadow: `inset 0 0 0 4px ${t.dot}33`,
                          }}
                        />
                        {t.label}
                        {theme === t.key && (
                          <span className="ml-auto text-xs" style={{ color: "var(--accent)" }}>
                            ✓
                          </span>
                        )}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px origin-center"
              style={{ background: "var(--fg)" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px"
              style={{ background: "var(--fg)" }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px origin-center"
              style={{ background: "var(--fg)" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{
              borderTop: "1px solid var(--border)",
              background: "var(--bg)",
            }}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={href}
                    className="block py-3 text-base font-medium border-b transition-colors"
                    style={{
                      color: pathname === href ? "var(--accent)" : "var(--fg)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
