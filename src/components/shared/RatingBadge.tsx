import React from "react";
import { Star } from "lucide-react";

type RatingBadgeProps = {
  rating: number;
};

export function RatingBadge({ rating }: RatingBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2 py-0.5 text-xs font-medium text-slate-800 backdrop-blur">
      <Star className="h-3 w-3 fill-current" />
      <span>{rating.toFixed(1)}</span>
    </div>
  );
}
