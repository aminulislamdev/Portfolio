export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: string;
}

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "Introduction to HTML",
    issuer: "CodeSignal",
    date: "May 27, 2026",
    image: "/certificates/html.png",
    category: "Web Development",
  },
  {
    id: 2,
    title: "JavaScript",
    issuer: "freeCodeCamp",
    date: "May 18, 2026",
    image: "/certificates/js.png",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "May 25, 2026",
    image: "/certificates/responsive.png",
    category: "Web Development",
  },
  {
    id: 4,
    title: "Advanced Techniques in Prompt Engineering",
    issuer: "CodeSignal",
    date: "July 03, 2026",
    image: "/certificates/prompt-advanced.png",
    category: "Prompt Engineering",
  },
  {
    id: 5,
    title: "Basics of CSS",
    issuer: "CodeSignal",
    date: "July 17, 2026",
    image: "/certificates/css.png",
    category: "Web Development",
  },
  {
    id: 6,
    title: "Engineering Output Size with LLMs",
    issuer: "CodeSignal",
    date: "June 22, 2026",
    image: "/certificates/llm-output.png",
    category: "Prompt Engineering",
  },
  {
    id: 7,
    title: "Intro to JavaScript for React Developers",
    issuer: "CodeSignal",
    date: "September 20, 2026",
    image: "/certificates/js-react.png",
    category: "Web Development",
  },
  {
    id: 8,
    title: "Introduction to JavaScript for Front-End Engineers",
    issuer: "CodeSignal",
    date: "October 11, 2026",
    image: "/certificates/js-frontend.png",
    category: "Web Development",
  },
  {
    id: 9,
    title: "Journey Into Format Control in Prompt Engineering",
    issuer: "CodeSignal",
    date: "June 25, 2026",
    image: "/certificates/prompt-format.png",
    category: "Prompt Engineering",
  },
  {
    id: 10,
    title: "Prompt Engineering for Precise Text Modification",
    issuer: "CodeSignal",
    date: "June 28, 2026",
    image: "/certificates/prompt-text.png",
    category: "Prompt Engineering",
  },
  {
    id: 11,
    title: "Understanding LLMs and Basic Prompting Techniques",
    issuer: "CodeSignal",
    date: "June 09, 2026",
    image: "/certificates/llm-basic.png",
    category: "Prompt Engineering",
  },
  {
    id: 12,
    title: "Prompt Engineering for Everyone (Learning Path)",
    issuer: "CodeSignal",
    date: "July 03, 2026",
    image: "/certificates/prompt-path.png",
    category: "Prompt Engineering",
  },
];