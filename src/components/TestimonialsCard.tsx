import React from "react";
import { testimonials } from "@/data/travelData";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export function TestimonialsCard() {
  return (
    <Card className="flex flex-col rounded-3xl border-slate-800 bg-slate-950/70">
      <CardHeader className="px-4 pb-2 pt-3">
        <CardTitle className="text-sm font-semibold text-slate-50">
          People using TravelBuddy
        </CardTitle>
        <CardDescription className="text-[11px] text-slate-400">
          Early travelers, real feedback.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3 px-4 pb-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl bg-slate-900/80 px-3 py-2 ring-1 ring-slate-800"
          >
            <p className="text-[11px] leading-relaxed text-slate-200">“{t.text}”</p>
            <p className="mt-1 text-[11px] font-medium text-emerald-300">{t.name}</p>
          </div>
        ))}
        <p className="mt-auto text-[11px] text-slate-500">
          Coming soon: shared boards, budget view, and a smart packing list.
        </p>
      </CardContent>
    </Card>
  );
}
