export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  features: string[];
  challenges?: string[];
  futurePlans?: string[];
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
    challenges: [
      "Handling Bengali numeral formatting consistently across all price displays and components",
      "Designing an efficient MongoDB schema to support both real-time price tickers and historical trend queries at once",
      "Implementing a secure redirect-back flow after multi-provider (Google + GitHub + email) authentication",
      "Optimizing performance so the live price ticker stayed fast without hammering the database on every render",
    ],
    futurePlans: [
      "Add real-time WebSocket price streaming instead of polling for true live updates",
      "Build a price-alert notification system via email and SMS so users never miss a price drop",
      "Introduce a seller dashboard so merchants can update their own product prices directly",
      "Expand coverage with more product categories and regional market data across Bangladesh",
      "Build a React Native mobile app for on-the-go price checking in local markets",
    ],
    link: "https://bazardor-nu.vercel.app/",
    github: "https://github.com/aminulislamdev/BazarDor",
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
    challenges: [
      "Keeping localStorage data in sync across multiple component re-renders without a global store or extra libraries",
      "Designing a data model that cleanly handled both the saved-workouts list and the active daily plan at the same time",
      "Building a sort-and-filter system that responded instantly on every keystroke with no debouncing complexity",
      "Making sure the navbar badge count stayed accurate when items were added or removed deep in the component tree",
    ],
    futurePlans: [
      "Migrate to a backend with user accounts so workout history persists across all devices",
      "Add a weekly and monthly progress dashboard with charts and personal records",
      "Integrate a calorie and macro calculator linked to each workout session",
      "Expand the exercise library from 12 to 50+ exercises with video demonstrations",
      "Publish as a PWA with offline support for gym environments with poor connectivity",
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
    challenges: [
      "Preventing duplicate entries across two separate lists (Wishlist and Read List) without creating confusing UX",
      "Building the pages-to-read progress chart using only data derived from the reading list state — no extra libraries",
      "Keeping shared list state consistent so moving a book from Wishlist to Read List felt instant and never out of sync",
      "Balancing Next.js App Router server conventions with the client-side interactivity needed for list management",
    ],
    futurePlans: [
      "Add user authentication and cloud sync so reading lists persist across every device",
      "Integrate the Google Books API to allow searching millions of real book titles",
      "Build a reading-streak and goal-tracking feature with weekly reading targets",
      "Add community features: user reviews, star ratings, and shareable reading lists",
      "Implement a recommendation engine that suggests books based on a user's completed reading list",
    ],
    link: "https://book-vibe-ph-s.vercel.app/",
    github: "https://github.com/aminulislamdev/Book-Vibe",
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
    challenges: [
      "Managing the selected-stack state globally so the navbar badge count and the stack panel always stayed in sync — without prop drilling",
      "Designing the duplicate-prevention flow to give immediate visual feedback directly on the card, rather than a generic alert",
      "Keeping the DaisyUI component styles consistent with a custom color scheme without constant overrides",
      "Ensuring smooth add/remove animations felt polished on every screen size from mobile to desktop",
    ],
    futurePlans: [
      "Let users name, save, and share their technology stacks via a unique shareable URL",
      "Add a compatibility scoring system that rates how well the selected technologies work together",
      "Integrate real job-market data to show current industry demand for each stack combination",
      "Build a side-by-side comparison view so users can evaluate two different stacks at once",
      "Add a backend so stacks persist across sessions and can be exported as a markdown README snippet",
    ],
    link: "https://devstack-ph-s.vercel.app/",
    github: "https://github.com/aminulislamdev/DevStack",
    category: "Frontend",
    status: "Completed",
    image: "/projects/devstack.svg",
  },
];