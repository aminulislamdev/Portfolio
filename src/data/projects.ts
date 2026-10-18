export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  category: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "HireNet — Job Board & Admin Portal",
    description: "Dual-dashboard job board for seekers & employers with role-based access, job moderation, and applicant tracking.",
    tags: ["Next.js", "Node.js", "MongoDB", "JWT"],
    link: "https://hirenet.vercel.app",
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "TaskFlow — Project Management SaaS",
    description: "Role-based project management with Admin/User access, JWT auth, and real-time CRUD.",
    tags: ["Next.js", "Node.js", "MongoDB", "JWT Auth"],
    link: "https://taskflow.vercel.app",
    category: "SaaS",
  },
  {
    id: 3,
    title: "GenAI — Content Generation Platform",
    description: "AI-powered SaaS with OpenAI API integration and credit-based subscription system.",
    tags: ["React", "Express.js", "PostgreSQL", "OpenAI API"],
    link: "https://genai-platform.vercel.app",
    category: "AI",
  },
  {
    id: 4,
    title: "StockPulse — E-Commerce Inventory",
    description: "Inventory dashboard for thousands of products with real-time analytics and dynamic filtering.",
    tags: ["Tailwind CSS", "NestJS", "Prisma", "MongoDB"],
    link: "https://stockpulse.vercel.app",
    category: "Dashboard",
  },
  {
    id: 5,
    title: "ChatSphere — Real-Time Chat",
    description: "WebSocket chat with private/group messaging, online status, and file sharing.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    link: "https://chatsphere.vercel.app",
    category: "Real-Time",
  },
  {
    id: 6,
    title: "DevBlog — Markdown Blog Platform",
    description: "Developer blog with custom Markdown editor, syntax highlighting, and admin panel.",
    tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    link: "https://devblog.vercel.app",
    category: "CMS",
  },
];