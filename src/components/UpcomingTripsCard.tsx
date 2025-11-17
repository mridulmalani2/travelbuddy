import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/config/animations";
import { upcomingTrips } from "@/data/travelData";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/shared/StatusPill";

export function UpcomingTripsCard() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="overflow-hidden rounded-3xl border-slate-800 bg-slate-950/70">
        <CardHeader className="flex flex-row items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/60 px-4 py-3">
          <div>
            <CardTitle className="text-sm font-semibold text-slate-50">
              Your upcoming trips
            </CardTitle>
            <CardDescription className="text-[11px] text-slate-400">
              Everything stays flexible until you decide to book.
            </CardDescription>
          </div>
          <Button className="h-8 rounded-2xl bg-slate-800 px-3 text-[11px] font-medium text-slate-50 hover:bg-slate-700">
            New trip
          </Button>
        </CardHeader>
        <CardContent className="space-y-2.5 px-4 py-3">
          {upcomingTrips.map((trip) => (
            <div
              key={trip.title}
              className="flex items-start justify-between gap-3 rounded-2xl bg-slate-900/70 px-3 py-2 ring-1 ring-slate-800"
            >
              <div>
                <p className="text-xs font-medium text-slate-50">{trip.title}</p>
                <p className="text-[11px] text-slate-400">{trip.date}</p>
              </div>
              <StatusPill label={trip.status} />
            </div>
          ))}
          <p className="pt-1 text-[11px] text-slate-500">
            Share any trip with a link – friends can add ideas, you stay in control.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
