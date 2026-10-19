export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  category: string;
  status: "Completed" | "In Progress" | "Planned";
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "DevStack",
    description: "A responsive web application built with React, TypeScript, Tailwind CSS, and DaisyUI. Focuses on clean UI structure and component composition.",
    tags: ["React", "TypeScript", "Tailwind CSS", "DaisyUI"],
    link: "https://devstack-ph-s.vercel.app/",
    github: "https://github.com/aminulislamdev/DevStack",
    category: "Frontend",
    status: "Completed",
  },
  {
    id: 2,
    title: "FitLog",
    description: "A workout library application for browsing workouts and managing saved workouts and workout plans using client-side state and local storage.",
    tags: ["React", "LocalStorage", "CSS"],
    github: "https://github.com/aminulislamdev/Fitlog",
    category: "Frontend",
    status: "Completed",
  },
  {
    id: 3,
    title: "OTP Generator",
    description: "A simple OTP generation application featuring a six-digit OTP and a timed refresh mechanism.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/aminulislamdev/OTP-Generator",
    category: "Utility",
    status: "Completed",
  },
  {
    id: 4,
    title: "Dream 11",
    description: "A cricket fantasy team-building project where users can select players and build their virtual team.",
    tags: ["React", "Tailwind CSS"],
    link: "https://ipl-dream-11-ph-s.netlify.app/",
    category: "Frontend",
    status: "Completed",
  },
  {
    id: 5,
    title: "Rail Live",
    description: "A railway tracking application concept focused on helping users explore train routes and train-location information in Bangladesh. (Prototype)",
    tags: ["React", "Maps API Concept"],
    github: "",
    category: "Concept",
    status: "In Progress",
  },
];

export const roadmapProjects: Project[] = [
  {
    id: 6,
    title: "HireNet — Job Board & Admin Portal",
    description: "A dual-dashboard job platform for job seekers and employers, featuring job listings, applications, and role-based access control.",
    tags: ["Next.js", "Node.js", "MongoDB", "JWT"],
    category: "Full Stack",
    status: "Planned",
  },
  {
    id: 7,
    title: "TaskFlow — Project Management SaaS",
    description: "A project management platform with team workspaces, task assignments, project tracking, and real-time updates.",
    tags: ["Next.js", "Node.js", "MongoDB", "JWT Auth"],
    category: "SaaS",
    status: "Planned",
  },
  {
    id: 8,
    title: "GenAI — Content Generation Platform",
    description: "An AI-powered content generation platform that helps users generate and manage content using an AI API.",
    tags: ["React", "Express.js", "PostgreSQL", "OpenAI API"],
    category: "AI",
    status: "Planned",
  },
  {
    id: 9,
    title: "StockPulse — E-Commerce Inventory",
    description: "An inventory management dashboard with product tracking, stock alerts, filtering, analytics, and inventory management tools.",
    tags: ["Tailwind CSS", "Next.js", "Prisma", "MongoDB"],
    category: "Dashboard",
    status: "Planned",
  },
  {
    id: 10,
    title: "ChatSphere — Real-Time Chat",
    description: "A real-time messaging application with private and group chats, online presence, message history, and file sharing.",
    tags: ["React", "Socket.IO", "Node.js", "MongoDB"],
    category: "Real-Time",
    status: "Planned",
  },
  {
    id: 11,
    title: "DevBlog — Markdown Blog Platform",
    description: "A developer blogging platform with a Markdown editor, syntax highlighting, blog management, and an admin dashboard.",
    tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    category: "CMS",
    status: "Planned",
  },
];