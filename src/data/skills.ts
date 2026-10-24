export type SkillCategory = "Frontend" | "Backend" | "Database" | "Languages" | "Tools";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  percent: number;
  level: "Advanced" | "Proficient" | "Intermediate" | "Familiar";
  color: string;
  icon: string;
  description?: string;
}

export const skillsData: Skill[] = [
  // Languages
  {
    id: "js",
    name: "JavaScript (ES6+)",
    category: "Languages",
    percent: 88,
    level: "Advanced",
    color: "bg-amber-500",
    icon: "javascript",
    description: "Modern ES6+, async/await, DOM, closures, promises",
  },
  {
    id: "ts",
    name: "TypeScript",
    category: "Languages",
    percent: 82,
    level: "Proficient",
    color: "bg-blue-600",
    icon: "typescript",
    description: "Type safety, generics, interfaces, strict typing",
  },
  {
    id: "html",
    name: "HTML5",
    category: "Languages",
    percent: 92,
    level: "Advanced",
    color: "bg-orange-500",
    icon: "html",
    description: "Semantic markup, SEO optimization, accessibility (a11y)",
  },
  {
    id: "css",
    name: "CSS3",
    category: "Languages",
    percent: 88,
    level: "Advanced",
    color: "bg-blue-500",
    icon: "css",
    description: "Responsive layouts, Flexbox, Grid, animations, BEM",
  },

  // Frontend
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    percent: 88,
    level: "Advanced",
    color: "bg-cyan-500",
    icon: "react",
    description: "Hooks, custom hooks, context, state management, SPA",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    percent: 85,
    level: "Advanced",
    color: "bg-slate-900 dark:bg-white",
    icon: "nextjs",
    description: "App Router, SSR, SSG, Server Actions, SEO, caching",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    percent: 90,
    level: "Advanced",
    color: "bg-sky-500",
    icon: "tailwind",
    description: "Utility-first design, dark mode, responsive systems",
  },
  {
    id: "daisyui",
    name: "DaisyUI",
    category: "Frontend",
    percent: 85,
    level: "Proficient",
    color: "bg-emerald-500",
    icon: "daisyui",
    description: "Component composition, themes, accessible UI kits",
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    percent: 68,
    level: "Intermediate",
    color: "bg-green-600",
    icon: "nodejs",
    description: "Event-driven runtime, NPM packages, file systems",
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    percent: 68,
    level: "Intermediate",
    color: "bg-slate-700",
    icon: "express",
    description: "Middleware architecture, route handlers, error handling",
  },
  {
    id: "restapi",
    name: "REST API",
    category: "Backend",
    percent: 75,
    level: "Proficient",
    color: "bg-blue-600",
    icon: "restapi",
    description: "CRUD operations, HTTP verbs, status codes, JSON responses",
  },
  {
    id: "jwt",
    name: "JWT Authentication",
    category: "Backend",
    percent: 72,
    level: "Proficient",
    color: "bg-purple-600",
    icon: "jwt",
    description: "Secure tokens, authorization middleware, protected routes",
  },
  {
    id: "socketio",
    name: "Socket.io",
    category: "Backend",
    percent: 62,
    level: "Intermediate",
    color: "bg-slate-800",
    icon: "socketio",
    description: "WebSockets, real-time bidirectional communication",
  },

  // Database
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    percent: 72,
    level: "Proficient",
    color: "bg-emerald-600",
    icon: "mongodb",
    description: "NoSQL document schemas, Mongoose models, aggregations",
  },

  // Tools
  {
    id: "git",
    name: "Git",
    category: "Tools",
    percent: 82,
    level: "Proficient",
    color: "bg-orange-600",
    icon: "git",
    description: "Branching, merge workflows, rebase, version control",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    percent: 85,
    level: "Proficient",
    color: "bg-slate-800",
    icon: "github",
    description: "Pull requests, code review, issues, GitHub Actions",
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "Tools",
    percent: 85,
    level: "Proficient",
    color: "bg-slate-900",
    icon: "vercel",
    description: "Serverless deployments, environment variables, edge hosting",
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "Tools",
    percent: 90,
    level: "Advanced",
    color: "bg-blue-500",
    icon: "vscode",
    description: "Extensions, debugging, shortcut mastery, linting setups",
  },
  {
    id: "openai",
    name: "OpenAI API",
    category: "Tools",
    percent: 68,
    level: "Intermediate",
    color: "bg-teal-600",
    icon: "openai",
    description: "LLM completions, system prompting, API integrations",
  },
];

export const skillCategories: { key: "All" | SkillCategory; label: string }[] = [
  { key: "All", label: "All Skills" },
  { key: "Frontend", label: "Frontend" },
  { key: "Backend", label: "Backend" },
  { key: "Database", label: "Database" },
  { key: "Languages", label: "Languages" },
  { key: "Tools", label: "Tools" },
];

export const techStack: string[] = skillsData.map((s) => s.name);
export const categories: string[] = [
  "Frontend Dev", "Backend (Learning)", "Database", "UI/UX", "AI Tools"
];