export interface TimelineItem {
  id: number;
  year: string;
  phase: string;
  title: string;
  description: string;
  color: "brand" | "blue" | "purple" | "green";
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2023",
    phase: "Foundation",
    title: "Completed SSC — Mosjid Mission Academy",
    description: "Built a strong academic foundation in logic and mathematics. Discovered a deep passion for problem-solving.",
    color: "brand",
  },
  {
    id: 2,
    year: "2024",
    phase: "Skill Acquisition",
    title: "CST Diploma Begins — 1st & 2nd Semester",
    description: "Started learning core programming. Mastered data structures, algorithms, and understood how data flows within computer systems.",
    color: "blue",
  },
  {
    id: 3,
    year: "2025",
    phase: "The Full-Stack Shift",
    title: "3rd & 4th Semester — Web Architecture",
    description: "Took a strategic turn towards Full-Stack. Mastered HTML/CSS/JS, then dove deep into React, Node.js, and Database Management.",
    color: "purple",
  },
  {
    id: 4,
    year: "Present",
    phase: "5th Semester",
    title: "SaaS & Advanced Systems",
    description: "Focusing heavily on Next.js, TypeScript, Prisma, and AI integrations. Building production-ready SaaS projects.",
    color: "green",
  },
];