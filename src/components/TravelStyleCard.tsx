import React from "react";
import { Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export function TravelStyleCard() {
  return (
    <Card className="flex flex-col rounded-3xl border-slate-800 bg-slate-950/70">
      <CardHeader className="px-4 pb-2 pt-3">
        <CardTitle className="text-sm font-semibold text-slate-50">
          How do you like to travel?
        </CardTitle>
        <CardDescription className="text-[11px] text-slate-400">
          TravelBuddy adapts plans to your rhythm.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-2 px-4 pb-3">
        <div className="space-y-1.5 text-[11px]">
          <label className="flex items-center justify-between gap-2 rounded-2xl bg-slate-900/80 px-3 py-2 ring-1 ring-slate-800">
            <span className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                1
              </span>
              I like slow days with a few good anchors
            </span>
          </label>
          <label className="flex items-center justify-between gap-2 rounded-2xl bg-slate-900/80 px-3 py-2 ring-1 ring-slate-800">
            <span className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                2
              </span>
              I want options, not fixed checklists
            </span>
          </label>
          <label className="flex items-center justify-between gap-2 rounded-2xl bg-slate-900/80 px-3 py-2 ring-1 ring-slate-800">
            <span className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                3
              </span>
              I need space for remote work or study
            </span>
          </label>
        </div>
        <div className="mt-auto flex items-center justify-between pt-2 text-[11px] text-slate-400">
          <span>Autosaves as you tweak your style.</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1 text-[10px] text-emerald-300">
            <Sparkles className="h-3 w-3" />
            Smart suggestions
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
