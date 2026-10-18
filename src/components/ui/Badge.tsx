import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "blue" | "green" | "purple" | "amber";
}

export default function Badge({ children, variant = "blue" }: BadgeProps) {
  const variants = {
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    amber: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  };

  return (
    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${variants[variant]}`}>
      {children}
    </span>
  );
}