import React from "react";
import { Search, Users } from "lucide-react";
import { featuredCities, experiences } from "@/data/travelData";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RatingBadge } from "@/components/shared/RatingBadge";
import { ClockIcon } from "@/components/shared/ClockIcon";


export function FeaturedTabs() {
  return (
    <Tabs defaultValue="cities" className="mt-1">
      <div className="mb-3 flex items-center justify-between gap-2">
        <TabsList className="h-9 rounded-full bg-slate-900/80 p-1 text-[11px] ring-1 ring-slate-800">
          <TabsTrigger value="cities" className="rounded-full px-3 py-1">
            Featured cities
          </TabsTrigger>
          <TabsTrigger value="experiences" className="rounded-full px-3 py-1">
            Sample experiences
          </TabsTrigger>
        </TabsList>
        <div className="hidden items-center gap-1 text-[11px] text-slate-400 sm:flex">
          <Search className="h-3 w-3" />
          <span>Search by mood, not checklists</span>
        </div>
      </div>

      <TabsContent value="cities" className="mt-0">
        <div className="grid gap-3 md:grid-cols-3">
          {featuredCities.map((city) => (
            <Card
              key={city.name}
              className="group relative overflow-hidden rounded-2xl border-slate-800 bg-slate-950/60 p-3 transition-transform hover:-translate-y-1 hover:border-emerald-500/60 hover:bg-slate-950"
            >
              <CardHeader className="space-y-1 p-0 pb-2">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <div>
                    <CardTitle className="text-sm font-semibold text-slate-50">
                      {city.name}
                    </CardTitle>
                    <CardDescription className="text-[11px] text-slate-400">
                      {city.country}
                    </CardDescription>
                  </div>
                  <RatingBadge rating={city.rating} />
                </div>
                <Badge
                  variant="outline"
                  className="border-emerald-500/40 bg-emerald-500/5 px-2 py-0.5 text-[11px] font-medium text-emerald-200"
                >
                  {city.tag}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-2 p-0">
                <p className="text-[11px] leading-relaxed text-slate-300">
                  {city.description}
                </p>
                <p className="text-[11px] text-slate-500">
                  {city.travelers.toLocaleString()} trips planned with TravelBuddy
                </p>
              </CardContent>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 translate-y-6 bg-gradient-to-t from-emerald-500/20 via-transparent to-transparent opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="experiences" className="mt-0">
        <div className="grid gap-3 md:grid-cols-3">
          {experiences.map((exp) => (
            <Card
              key={exp.title}
              className="relative overflow-hidden rounded-2xl border-slate-800 bg-slate-950/60 p-3"
            >
              <CardHeader className="space-y-1 p-0 pb-2">
                <CardTitle className="text-sm font-semibold text-slate-50">
                  {exp.title}
                </CardTitle>
                <CardDescription className="text-[11px] text-slate-400">
                  {exp.city}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1.5 p-0">
                <p className="text-[11px] text-slate-300">{exp.theme}</p>
                <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-400">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-0.5">
                    <ClockIcon /> {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-0.5">
                    <Users className="h-3 w-3" /> {exp.groupSize}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
