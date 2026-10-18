import {
  LayoutDashboard,
  Server,
  Layers,
  Bot,
  Database,
  Cloud
} from "lucide-react";
import { Service } from "@/data/services";

// আইকন ম্যাপিং
const iconMap: Record<string, React.ReactNode> = {
  saas: <LayoutDashboard size={28} />,
  api: <Server size={28} />,
  fullstack: <Layers size={28} />,
  ai: <Bot size={28} />,
  database: <Database size={28} />,
  cloud: <Cloud size={28} />,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col">

      {/* আইকন */}
      <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {iconMap[service.icon] || <LayoutDashboard size={28} />}
      </div>

      {/* টেক্সট */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
        {service.title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-6">
        {service.description}
      </p>

      {/* প্রাইস */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          {service.price}
        </span>
      </div>
    </div>
  );
}