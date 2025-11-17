import React from "react";
import { Compass, Users } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedTabs } from "@/components/FeaturedTabs";
import { UpcomingTripsCard } from "@/components/UpcomingTripsCard";
import { TravelStyleCard } from "@/components/TravelStyleCard";
import { TestimonialsCard } from "@/components/TestimonialsCard";

export default function TravelBuddyApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Top gradient glow */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-64 bg-gradient-to-b from-emerald-500/20 via-cyan-500/10 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        {/* Nav */}
        <header className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/40">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                TravelBuddy
              </p>
              <p className="text-[11px] text-slate-400">
                Soft planning for real-world trips
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 text-xs text-slate-300 sm:flex">
            <Users className="h-4 w-4" />
            <span>Built for friends, couples & solo wanderers</span>
          </div>
        </header>

        {/* Layout: main grid */}
        <main className="grid flex-1 gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Left column */}
          <section className="flex flex-col gap-4">
            <HeroSection />
            <FeaturedTabs />
          </section>

          {/* Right column */}
          <section className="flex flex-col gap-4">
            <UpcomingTripsCard />

            <div className="grid flex-1 gap-4 sm:grid-cols-2">
              <TravelStyleCard />
              <TestimonialsCard />
            </div>
          </section>
        </main>

        {/* Footer note */}
        <footer className="mt-6 flex items-center justify-between gap-3 border-t border-slate-900 pt-3 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/80 text-[10px] text-emerald-300">
              β
            </span>
            <span>Early concept UI for the TravelBuddy web app.</span>
          </div>
          <span className="hidden text-[10px] text-slate-500 sm:inline">
            Frontend only · ready to connect to your trip-planning backend or API
          </span>
        </footer>
      </div>
    </div>
  );
}
