import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "accent" | "emerald";
  className?: string;
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "secondary",
  className = "",
  size = "md",
}) => {
  const sizeClasses = size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs font-medium";

  const variantClasses = {
    primary: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20",
    secondary: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
    outline: "bg-transparent text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700",
    accent: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20",
    emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full transition-colors ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};
