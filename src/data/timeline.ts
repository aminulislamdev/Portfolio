export interface TimelineItem {
  id: number;
  year: string;
  phase: string;
  title: string;
  description: string;
  color: "brand" | "blue" | "purple" | "green";
}


export const educationData: TimelineItem[] = [
  {
    id: 1,
    year: "2023",
    phase: "SSC Completed",
    title: "Secondary School Certificate (SSC)",
    description: "Completed SSC from Masjid Mission Academy with a strong foundation in logic and mathematics.",
    color: "brand",
  },
  {
    id: 2,
    year: "2024 - Present",
    phase: "Diploma",
    title: "Diploma in Computer Science & Technology (CST)",
    description: "Currently pursuing a Diploma in CST at Rajshahi Polytechnic Institute. (5th Semester running)",
    color: "blue",
  }
];


export const journeyData: TimelineItem[] = [
  {
    id: 1,
    year: "Oct 2025",
    phase: "The Beginning",
    title: "Started Learning Web Development",
    description: "Began my journey with HTML and CSS. As I built small layouts, I gradually started falling in love with coding and problem-solving.",
    color: "brand",
  },
  {
    id: 2,
    year: "April 2026 - Present",
    phase: "The Full-Stack Shift",
    title: "Completed Frontend & Started Backend",
    description: "Finished my frontend phase covering JavaScript, React, and Next.js. Currently diving deep into Node.js, Express, and Database Management to become a Full Stack Developer.",
    color: "green",
  }
];