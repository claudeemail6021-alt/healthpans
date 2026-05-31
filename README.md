# HealthPans.com

Independent reviews of the best non-toxic, PFAS-free cookware. Built with Next.js 15, TypeScript, Tailwind CSS, and MDX.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom terracotta/sage palette)
- **Blog:** MDX via `next-mdx-remote`
- **Icons:** Lucide React
- **Deployment:** Vercel (free tier)

## Local Development

```bash
npm install
cp .env.example .env.local
# Fill in your affiliate tags in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
healthpans/
├── content/blog/          # MDX blog posts
├── public/images/         # Product images (add manually — see README.txt)
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── page.tsx       # Homepage
│   │   ├── top-10/        # Rankings page
│   │   ├── reviews/[slug] # Individual product reviews
│   │   ├── blog/          # Blog listing + [slug] pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── affiliate-disclosure/
│   │   ├── privacy-policy/
│   │   ├── terms/
│   │   ├── sitemap.ts     # Dynamic sitemap
│   │   └── robots.ts
│   ├── components/        # Shared React components
│   ├── data/products.ts   # All product data
│   └── lib/
│       ├── mdx.ts         # MDX utilities
│       └── utils.ts       # Helper functions
```

## Adding Products

Edit `src/data/products.ts`. Add a new object to the `products` array following the `Product` interface. Then add a corresponding blog image to `public/images/`.

## Adding Blog Posts

Create a new `.mdx` file in `content/blog/` with the following frontmatter:

```mdx
---
title: "Your Post Title"
description: "Brief description for SEO"
date: "2026-01-01"
author: "HealthPans Editorial Team"
category: "Category Name"
tags: ["tag1", "tag2"]
readTime: "5 min read"
---

Your content here...
```

## Deployment to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create healthpans --private --push
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and log in
2. Click **Add New → Project**
3. Import your GitHub repo (`healthpans`)
4. Vercel auto-detects Next.js — no build config needed
5. Add Environment Variables (see below)
6. Click **Deploy**

### Step 3: Environment Variables

In Vercel dashboard → Project → Settings → Environment Variables, add:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_AMAZON_TAG` | `your-amazon-tag-20` |
| `NEXT_PUBLIC_GA4_ID` | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_ADSENSE_ID` | `ca-pub-XXXXXXXXXX` |

### Step 4: Custom Domain (GoDaddy)

1. In Vercel: Project → Settings → Domains → Add `healthpans.com`
2. Vercel shows you DNS records to add
3. In GoDaddy DNS Manager, add:
   - **A record:** `@` → Vercel's IP (shown in dashboard)
   - **CNAME record:** `www` → `cname.vercel-dns.com`
4. SSL certificate is provisioned automatically (5–10 min)

## Monetization

- **Amazon Associates:** Sign up at [affiliate-program.amazon.com](https://affiliate-program.amazon.com). Use your tag in `NEXT_PUBLIC_AMAZON_TAG`.
- **AWIN:** Sign up at [awin.com](https://www.awin.com). Add brand-specific links manually in `products.ts`.
- **Google AdSense:** Apply at [adsense.google.com](https://adsense.google.com). Add your publisher ID to `NEXT_PUBLIC_ADSENSE_ID`.

## License

© 2026 HealthPans.com — All rights reserved.
