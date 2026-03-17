# Shine On Autocare — Website Prototype

A fully built website prototype for **Shine On Autocare**, a veteran-owned mobile auto detailing business based in Pleasanton, TX. This repository serves as the design and content reference for rebuilding the production site on Wix (Standard + Velo).

Built with React Router v7, React 19, TypeScript, and TailwindCSS v4.

---

## Purpose

This codebase is a **static prototype and content reference** — not a production deployment. It was built to:

- Establish the full site design, page structure, and content
- Define SEO metadata (titles, descriptions, keywords, JSON-LD) for every page
- Serve as a blueprint for the Wix rebuild at [shineonautocare.com](https://www.shineonautocare.com)

The `csv-data/` directory contains pre-formatted CSV files for importing content directly into Wix CMS collections.

---

## Tech Stack

| Tool | Version |
|------|---------|
| React Router | v7 (SSR enabled) |
| React | 19 |
| TypeScript | 5 |
| TailwindCSS | v4 |
| Vite | 7 |
| Deployment | Vercel (`@vercel/react-router`) or Docker |

---

## Getting Started

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

```bash
npm run build   # production build
```

---

## Project Structure

```
app/
├── components/       # Shared UI components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── mobile-cta-bar.tsx
│   ├── service-page.tsx  # Reusable template for all service pages
│   ├── quote-form.tsx
│   ├── breadcrumb.tsx
│   ├── star-rating.tsx
│   ├── wave-divider.tsx
│   ├── json-ld.tsx
│   └── icons.tsx
├── data/
│   ├── constants.ts      # Phone, email, address, social links, site URL
│   ├── locations.ts      # 9 location page objects
│   ├── blog-posts.ts     # 23 blog post content objects
│   └── schema.ts         # JSON-LD structured data builders
├── routes/
│   ├── home.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   ├── reviews.tsx
│   ├── faq.tsx
│   ├── veteran-owned.tsx
│   ├── services._index.tsx
│   ├── services/         # 10 individual service pages
│   ├── blog._index.tsx
│   ├── blog.$slug.tsx
│   └── areas.$slug.tsx
├── app.css               # TailwindCSS v4 theme + global styles
└── root.tsx

csv-data/
├── services.csv          # 10 services, 28 columns — for Wix Services CMS collection
├── locations.csv         # 9 locations, 19 columns — for Wix Locations CMS collection
└── blog-posts.csv        # 23 posts, 8 columns — blog metadata reference
```

---

## Pages

### Static Pages
| Route | File |
|-------|------|
| `/` | `routes/home.tsx` |
| `/about` | `routes/about.tsx` |
| `/contact` | `routes/contact.tsx` |
| `/reviews` | `routes/reviews.tsx` |
| `/faq` | `routes/faq.tsx` |
| `/veteran-owned` | `routes/veteran-owned.tsx` |
| `/services` | `routes/services._index.tsx` |

### Service Pages (10)
| Route | Service |
|-------|---------|
| `/services/ceramic-coating` | Ceramic Coating |
| `/services/interior-detailing` | Interior Detailing |
| `/services/exterior-detailing` | Exterior Detailing |
| `/services/paint-correction` | Paint Correction |
| `/services/full-detail` | Full Detail Premium |
| `/services/odor-removal` | Odor Removal |
| `/services/truck-suv-detailing` | Truck & SUV Detailing |
| `/services/rv-detailing` | RV Detailing |
| `/services/motorcycle-detailing` | Motorcycle Detailing |
| `/services/rv-motorcycle` | RV & Motorcycle (combined) |

### Dynamic Pages
| Route | Source |
|-------|--------|
| `/blog/:slug` | `app/data/blog-posts.ts` (23 posts) |
| `/areas/:slug` | `app/data/locations.ts` (9 locations) |

---

## CSV Data Files

Pre-formatted for direct import into Wix CMS collections.

### `services.csv`
28 columns covering all service page content: title, subtitle, description, metaTitle, metaDescription, keywords, startingPrice, pricingDisplay, feature1–6 (title + description), processStep1–5, heroImage, gallery images, relatedServices, formServiceValue.

### `locations.csv`
19 columns: slug, city, state, county, metaTitle, metaDescription, keywords, h1, heroDescription, aboutParagraph1–4, distanceFromBase, popularServices (pipe-separated), nearbyAreas (`Label:slug` format, pipe-separated), testimonialText, testimonialAuthor, testimonialVehicle.

### `blog-posts.csv`
8 columns: slug, title, excerpt, date (YYYY-MM-DD), readTime, author, keywords, image URL. Content for each post lives in `app/data/blog-posts.ts`.

---

## Design System

| Token | Value |
|-------|-------|
| Primary blue | `#1B98F5` |
| Accent rose | `#D51D53` |
| Navy dark | `#0F1225` |
| Navy mid | `#1A1F3A` |
| Heading font | Oswald |
| Body font | Inter |
| Max content width | 1280px (`max-w-7xl`) |

---

## Business Info

| Field | Value |
|-------|-------|
| Business | Shine On Autocare |
| Location | 1240 W Oaklawn Rd, Pleasanton, TX 78064 |
| Phone | (830) 569-9054 |
| Email | shineonautocare@gmail.com |
| Service radius | 50 miles (Pleasanton, San Antonio, South Texas) |

All constants are centralized in `app/data/constants.ts`.
