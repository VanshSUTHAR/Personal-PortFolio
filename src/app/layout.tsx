import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { GrainOverlay } from "@/components/GrainOverlay";

const displayFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vanshsuthar.dev"),
  title: {
    default: "Vansh Suthar — MERN Stack Developer",
    template: "%s — Vansh Suthar",
  },
  description:
    "MERN Stack Developer building full-stack web applications with React, Node.js, and MongoDB. Currently interning at Concatstring Solutions.",
  keywords: ["Vansh Suthar", "MERN Stack", "React Developer", "Full Stack", "Next.js", "JavaScript"],
  authors: [{ name: "Vansh Suthar", url: "https://github.com/VanshSUTHAR" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vanshsuthar.dev",
    title: "Vansh Suthar — MERN Stack Developer",
    description: "Building full-stack web applications with React, Node.js, and MongoDB.",
    siteName: "Vansh Suthar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Suthar — MERN Stack Developer",
    description: "Building full-stack web applications with React, Node.js, and MongoDB.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} font-body`}>
        <ThemeProvider>
          <GrainOverlay />
          <Navbar />
          <main id="main-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
