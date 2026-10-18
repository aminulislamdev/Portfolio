interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
      {label && (
        <span className="block text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold font-playfair text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}