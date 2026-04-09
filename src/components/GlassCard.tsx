import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = false,
}: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl ${
        hover
          ? "transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
