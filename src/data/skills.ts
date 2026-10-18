export interface Skill {
  name: string;
  percent: number;
  color: string;
}

export const skillsData: Skill[] = [
  { name: "Frontend (React/Next.js)", percent: 90, color: "bg-blue-600" },
  { name: "Backend (Node.js/Express)", percent: 85, color: "bg-green-600" },
  { name: "Database (MongoDB/PostgreSQL)", percent: 80, color: "bg-amber-600" },
  { name: "AI Integration", percent: 75, color: "bg-purple-600" },
];

export const techStack = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Tailwind CSS", "Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL",
  "Prisma", "Docker", "AWS", "Git", "GitHub", "OpenAI API", "Socket.io", "Stripe"
];