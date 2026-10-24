export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  features: string[];
  link?: string;
  github?: string;
  category: string;
  status: "Completed" | "In Progress" | "Planned";
  image?: string;
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Bazardor",
    description:
      "A Bengali-first market price tracking platform that helps users explore product prices, compare market trends, and monitor daily price changes.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Authentication",
    ],
    features: [
      "Live price ticker with Bengali numerals and price-change indicators",
      "Automatically calculated top six price risers and fallers",
      "Protected product details with minimum, maximum, and average prices",
      "Price trends for today, yesterday, week, and month",
      "Browse categories and sort products by price",
      "Email/password, Google, and GitHub authentication",
      "Profile updates and redirect-back after login",
      "Responsive UI, skeleton loaders, and custom 404 page",
    ],
    link: "https://bazardor-nu.vercel.app/",
    category: "Full Stack",
    status: "Completed",
    image: "/projects/bazardor.svg",
  },
  {
    id: 2,
    title: "FitLog",
    description:
      "A responsive workout library for exploring exercises, saving workouts, and managing daily workout plans with persistent client-side storage.",
    tags: ["React", "TypeScript", "Tailwind CSS", "LocalStorage"],
    features: [
      "Workout library with 12 exercises, images, tags, and stats",
      "Detailed workout pages with instructions and specifications",
      "Daily workout plan supporting up to five exercises",
      "Save workouts and track exercises, minutes, and calories",
      "Sort and filter by duration, calories, and rating",
      "Persistent plan and saved workouts using localStorage",
      "Dynamic navbar badges and toast notifications",
      "Responsive layout, loading skeletons, and custom 404 page",
    ],
    link: "https://fitlog-ph-s.vercel.app/",
    github: "https://github.com/aminulislamdev/Fitlog",
    category: "Frontend",
    status: "Completed",
    image: "/projects/fitlog.svg",
  },
  {
    id: 3,
    title: "Book Vibe",
    description:
      "A responsive book discovery application where readers can explore books, view details, organize reading lists, and track reading progress.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "Browse available books and view detailed information",
      "Add books to the Read List and Wishlist",
      "Move books from Wishlist to Read List",
      "Prevent duplicate entries across reading lists",
      "Visualize pages-to-read progress with a chart",
      "Toast notifications for user actions",
      "Reusable React components and responsive design",
      "Fast navigation with Next.js App Router",
    ],
    link: "https://book-vibe-ph-s.vercel.app/",
    category: "Frontend",
    status: "Completed",
    image: "/projects/book-vibe.svg",
  },
  {
    id: 4,
    title: "DevStack",
    description:
      "A technology discovery application where users explore technologies and build a personalized technology stack through an interactive interface.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
    ],
    features: [
      "Sticky navbar with desktop and mobile navigation",
      "Hero section with technology exploration actions",
      "Technology cards with icons, descriptions, categories, and ratings",
      "Add technologies to a personalized stack",
      "Prevent duplicate selections with visual feedback",
      "Live selected-item count and individual removal",
      "Remove all selected technologies in one action",
      "Responsive interface and social navigation links",
    ],
    link: "https://devstack-ph-s.vercel.app/",
    github: "https://github.com/aminulislamdev/DevStack",
    category: "Frontend",
    status: "Completed",
    image: "/projects/devstack.svg",
  },
];