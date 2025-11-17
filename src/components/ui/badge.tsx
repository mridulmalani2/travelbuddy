import * as React from "react";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline";
}

export const Badge = ({
  className = "",
  variant = "default",
  ...props
}: BadgeProps) => {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold";
  const variants: Record<string, string> = {
    default: "border-transparent bg-emerald-500 text-slate-950",
    outline: "border-slate-700 text-slate-100",
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
};
