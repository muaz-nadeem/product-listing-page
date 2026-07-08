# Haven Furniture — Product Listing Page

A clean, responsive furniture store listing page built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- **Responsive grid** — 1 column on mobile, up to 4 on desktop.
- **Category filtering** — All, Living Room, Dining Room, Bedroom, Office (pill buttons).
- **Sorting** — Price (low to high / high to low) and rating (highest first).
- **Zero layout shift (CLS)**:
  - Every product image sits in a fixed `aspect-[4/3]` container, so space is reserved before the image loads.
  - The results count line has a fixed `min-height`, so toggling filters never nudges the grid.
  - Prices and ratings use `tabular-nums` so re-sorted numbers keep consistent widths.
- **Image optimization** — `next/image` with `fill`, responsive `sizes` per breakpoint, `priority` for the first (above-the-fold) row, and automatic WebP/AVIF via the Next.js image optimizer (Unsplash allowed through `remotePatterns`).

## Structure

```
app/page.tsx                  # Server component: page shell + header
components/product-browser.tsx # Client component: filter/sort state + toolbar + grid
components/product-card.tsx    # Presentational card with optimized image
lib/products.ts                # Dataset, types, category & sort option constants
```

State lives in a single client component (`ProductBrowser`) using two `useState` values (category, sort) and a `useMemo` to derive the visible list — no external state library needed.

> Note: two image URLs from the original dataset (items 4 and 7) return 404 on Unsplash and were swapped for working equivalents.
