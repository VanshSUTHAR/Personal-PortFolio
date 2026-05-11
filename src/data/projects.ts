export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  url: string;
  github?: string;
  featured: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    id: "online-bookstore",
    title: "Online Book Store",
    description:
      "A user-friendly platform for browsing and exploring a wide collection of books with smooth navigation and search.",
    longDescription:
      "Built a full-featured bookstore web application with advanced search, interactive UI, and seamless browsing experience. Deployed on Vercel for fast, reliable availability.",
    tags: ["React", "Node.js", "MongoDB", "REST API", "Vercel"],
    url: "https://online-books-frontend.vercel.app/",
    github: "https://github.com/VanshSUTHAR/online-books",
    featured: true,
    year: "2026",
  },
  {
    id: "lunatics",
    title: "Lunatics — Interactive Web Experience",
    description:
      "An interactive, visually engaging web app with dynamic UI elements, animations, and optimised cross-device performance.",
    longDescription:
      "Developed an immersive web experience focused on delivering smooth, modern interactions. Implemented dynamic animations, responsive layouts, and performance optimisations for seamless usage across all devices.",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Next.js", "Vercel"],
    url: "https://lunatics-ten.vercel.app/",
    github: "https://github.com/VanshSUTHAR/Website",
    featured: true,
    year: "2026",
  },
  {
  id: "company-assets-dashboard",
  title: "Company Assets Dashboard",
  description:
    "A modern asset management system for tracking, assigning, and managing company devices and accessories efficiently.",
  longDescription:
    "Developed a full-stack company asset management platform with support for employee management, multiple asset assignments, inventory tracking, and accessories handling. Implemented dynamic asset assignment logic, serial number management, responsive UI components, and real-time data handling using React and Supabase for seamless asset monitoring across the organization.",
  tags: ["React", "Supabase", "Tailwind CSS", "Next.js", "Netlify"],
  url: "https://companyassetsdashboard.netlify.app",
  github: "https://github.com/VanshSUTHAR/Personal-PortFolio",
  featured: true,
  year: "2026",
},
];
