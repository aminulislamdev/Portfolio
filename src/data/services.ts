export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Custom SaaS Development",
    description: "End-to-end SaaS product development. From multi-tenant database architecture to interactive client dashboards.",
    price: "Starting at $1,500",
    icon: "saas",
  },
  {
    id: 2,
    title: "API & Backend Architecture",
    description: "Robust Node.js/Express or NestJS APIs. Implementing JWT authentication, role-based access, and third-party integrations.",
    price: "Starting at $500",
    icon: "api",
  },
  {
    id: 3,
    title: "Full-Stack Web Apps",
    description: "Complete web applications using Next.js & MongoDB/PostgreSQL. Featuring Server-Side Rendering and robust database management.",
    price: "Starting at $800",
    icon: "fullstack",
  },
  {
    id: 4,
    title: "AI Integration & Automation",
    description: "Integrating OpenAI/LangChain into your apps. Building custom chatbots, AI content generators, and automated workflows.",
    price: "Starting at $600",
    icon: "ai",
  },
  {
    id: 5,
    title: "Database Design & Optimization",
    description: "Designing scalable SQL/NoSQL schemas, optimizing complex queries for speed, and managing secure data migrations.",
    price: "Starting at $300",
    icon: "database",
  },
  {
    id: 6,
    title: "Cloud Deployment & DevOps",
    description: "Deploying applications seamlessly on Vercel, AWS, or Netlify. Setting up Docker environments and CI/CD pipelines.",
    price: "Starting at $200",
    icon: "cloud",
  },
];