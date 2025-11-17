import React from "react";

type StatusPillProps = {
  label: string;
};

const colorMap: Record<string, string> = {
  Draft: "bg-slate-100 text-slate-700",
  "Shared with friends": "bg-emerald-100 text-emerald-700",
};

export function StatusPill({ label }: StatusPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
        colorMap[label] || "bg-slate-100 text-slate-700"
      }`}
    >
      {label}
    </span>
  );
}
