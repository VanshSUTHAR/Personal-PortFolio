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
    github: "https://github.com/VanshSUTHAR/Online-Book-Store",
    featured: true,
    year: "2025",
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
    github: "https://github.com/VanshSUTHAR/Lunatics-Interactive-Web-Experience",
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
    tags: ["React", "Supabase", "Tailwind CSS", "Netlify"],
    url: "https://companydasboard.netlify.app/",
    github: "https://github.com/VanshSUTHAR/Company_assetment_dashboard/",
    featured: true,
    year: "2026",
  },
  {
    id: "Expense-Manager",
    title: "Expense Manager",
    description:
      "A personal expense manager built with React and Node.js where you can track income and expenses, manage bank accounts with live balances, pay credit card bills, track loan EMIs with due date reminders, and export your data as PDF or Excel.",
    longDescription:
      "Personal Expense Manager is a comprehensive full-stack financial management application developed using React.js for the frontend and Node.js with Express.js for the backend. The application helps users efficiently manage their personal finances by tracking income, expenses, bank accounts, credit cards, and loans in one centralized platform.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
    url: "https://expense-mangager-qmeh.vercel.app",
    github: "https://github.com/VanshSUTHAR/Expense-Mangager",
    featured: true,
    year: "2026",
  },
  {
    id: "Ai-ResumeMaker",
    title: "AI-ResumeMaker",
    description:
      "A web app that generates and manages professional resumes using AI-powered content generation, with user authentication and persistent resume storage",
    longDescription:
      "AI Resume Builder and Management System is a modern full-stack web application developed using React.js, Node.js, Express.js, and MongoDB that helps users create, manage, and optimize professional resumes with the assistance of Artificial Intelligence. The platform simplifies the resume creation process by generating high-quality resume content based on user input while providing secure storage and management of multiple resumes.",
    tags: ["React", "Node.js", "MongoDB", "Vercel"],
    url: "https://airesumemakerfrontend.vercel.app/",
    github: "https://github.com/VanshSUTHAR/Ai-ResumeMaker",
    featured: true,
    year: "2026",
  },



];
