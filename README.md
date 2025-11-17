# TravelBuddy

TravelBuddy is a modern, responsive travel discovery landing page built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It showcases upcoming trips, travel styles, testimonials, and featured experiences in a clean, component-driven UI.

---

## 🧰 Tech Stack

- **React** + **TypeScript**
- **Vite** (build & dev server)
- **Tailwind CSS** (utility-first styling)
- **PostCSS** (Tailwind + autoprefixer)
- Componentized UI with reusable building blocks (buttons, cards, tabs, badges, pills, etc.)

---

## 📁 Project Structure (high level)

```text
TravelBuddy/
├── node_modules/              # Dependencies (not committed to Git)
├── src/
│   ├── components/
│   │   ├── shared/
│   │   │   ├── ClockIcon.tsx
│   │   │   ├── RatingBadge.tsx
│   │   │   └── StatusPill.tsx
│   │   ├── ui/
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── tabs.tsx
│   │   ├── FeaturedTabs.tsx
│   │   ├── HeroSection.tsx
│   │   ├── TestimonialsCard.tsx
│   │   ├── TravelStyleCard.tsx
│   │   └── UpcomingTripsCard.tsx   # Name approximate based on file listing
│   ├── config/
│   │   └── animations.ts          # Animation variants / settings
│   ├── data/
│   │   └── travelData.ts          # Static data for trips / cards
│   ├── App.tsx                    # Root React component
│   ├── main.tsx                   # Vite + React entry point
│   └── index.css                  # Global styles + Tailwind imports
├── .gitignore
├── index.html                     # HTML shell used by Vite
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.ts
