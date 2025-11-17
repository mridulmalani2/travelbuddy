import React from "react";
import { motion } from "framer-motion";
import {
  CalendarRange,
  HeartHandshake,
  MapPin,
  Plane,
  Sparkles,
  Users,
} from "lucide-react";
import { fadeInUp } from "@/config/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/80 p-6 shadow-[0_0_50px_rgba(16,185,129,0.15)]"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <Sparkles className="h-3 w-3" />
            Trip canvas · beta
          </div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Plan trips like a local,
            <span className="block text-emerald-300">without spreadsheets.</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm text-slate-300">
            TravelBuddy turns your half-formed ideas into soft, flexible
            itineraries – mapping cafés, walks, and experiences that match how
            you actually travel.
          </p>
        </div>
        <div className="hidden shrink-0 rounded-2xl bg-slate-900/80 px-3 py-2 text-right shadow-inner shadow-emerald-500/30 sm:block">
          <p className="text-[11px] font-medium text-slate-300">
            Avg. planning time
          </p>
          <p className="text-lg font-semibold text-emerald-300">12 min</p>
          <p className="mt-1 text-[11px] text-slate-400">
            from first idea to shareable plan
          </p>
        </div>
      </div>

      {/* Search / trip brief */}
      <div className="mb-4 grid gap-3 sm:grid-cols-[2.1fr_1.4fr]">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-slate-200">
            Where are you thinking of going?
          </label>
          <div className="flex items-center gap-2 rounded-2xl bg-slate-950/60 px-3 py-2 ring-1 ring-slate-800">
            <MapPin className="h-4 w-4 text-emerald-300" />
            <Input
              placeholder="e.g., Paris for a slow winter weekend"
              className="h-8 border-none bg-transparent p-0 text-[13px] text-slate-50 placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-200">
              Rough dates
            </label>
            <div className="flex items-center gap-2 rounded-2xl bg-slate-950/60 px-3 py-2 ring-1 ring-slate-800">
              <CalendarRange className="h-4 w-4 text-emerald-300" />
              <Input
                placeholder="Any long weekend"
                className="h-8 border-none bg-transparent p-0 text-[13px] text-slate-50 placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-200">
              Who&apos;s coming?
            </label>
            <div className="flex items-center gap-2 rounded-2xl bg-slate-950/60 px-3 py-2 ring-1 ring-slate-800">
              <Users className="h-4 w-4 text-emerald-300" />
              <Input
                placeholder="Solo, partner, or a few friends"
                className="h-8 border-none bg-transparent p-0 text-[13px] text-slate-50 placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-300">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-1 ring-1 ring-slate-800">
            <HeartHandshake className="h-3 w-3 text-emerald-300" />
            Plans shaped by your travel style
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-1 ring-1 ring-slate-800">
            <Plane className="h-3 w-3 text-emerald-300" />
            Works for trains, road trips, and flights
          </span>
        </div>
        <div className="flex gap-2">
          <Button className="h-9 rounded-2xl bg-emerald-400 px-4 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300">
            Start a soft itinerary
          </Button>
          <Button
            variant="outline"
            className="h-9 rounded-2xl border-slate-700 bg-slate-900/60 px-4 text-xs font-medium text-slate-100 hover:bg-slate-900"
          >
            Import an existing plan
          </Button>
        </div>
      </div>

      {/* Subtle bottom border gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/70 to-cyan-400/0" />
    </motion.div>
  );
}
