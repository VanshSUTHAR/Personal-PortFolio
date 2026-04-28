"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "sepia" | "slate";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "light";
    setThemeState(saved);
    applyTheme(saved);
    setMounted(true);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("theme", t);
    applyTheme(t);
  };

  if (!mounted) return <>{children}</>;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("dark", "sepia-theme", "slate-theme");
  if (theme === "dark") root.classList.add("dark");
  if (theme === "sepia") root.classList.add("sepia-theme");
  if (theme === "slate") root.classList.add("dark", "slate-theme");
}

export function useTheme() {
  return useContext(ThemeContext);
}
