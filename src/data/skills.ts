export interface Skill {
  name: string;
  percent: number;
  color: string;
}

export const skillsData: Skill[] = [
  { name: "Frontend (React/Next.js)", percent: 85, color: "bg-blue-600" },
  { name: "Backend (Node.js/Express)", percent: 60, color: "bg-green-600" },
  { name: "Database (MongoDB)", percent: 65, color: "bg-amber-600" },
  { name: "AI Integration", percent: 50, color: "bg-purple-600" },
];


export const techStack = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Tailwind CSS", "Node.js", "Express", "MongoDB",
  "Git", "GitHub", "REST API", "OpenAI API", "Socket.io"
];

export const categories = [
  "Frontend Dev", "Backend (Learning)", "Database", "UI/UX", "AI Tools"
];