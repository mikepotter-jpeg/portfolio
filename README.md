# Michael Potter - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
  page.tsx              # Home page
  about/page.tsx        # About me page
  work/[slug]/page.tsx  # Dynamic case study pages
  layout.tsx            # Root layout with header/footer
  globals.css           # Global styles

components/
  ui/                   # Reusable UI primitives (Button, Card)
  layout/               # Header, Footer, Navigation
  sections/             # Hero, ProjectGrid, Contact, AboutTeaser

lib/
  content.ts            # Centralized content data
  utils.ts              # Utility functions (cn helper)

public/
  images/               # Project images and assets
```

## Updating Content

All portfolio content is centralized in `lib/content.ts`:

- **siteConfig**: Name, title, email, LinkedIn, site URL
- **projects**: Project case studies with descriptions, challenges, solutions
- **about**: Bio, skills, and intro text
- **contact**: Contact section copy

Simply edit this file to update content across the entire site.

## Adding a New Project

1. Add the project object to the `projects` array in `lib/content.ts`
2. Add project images to `public/images/`
3. The case study page is automatically generated at `/work/[slug]`

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **@tailwindcss/typography** - Beautiful prose styling

## Deployment

This site is configured for Vercel deployment:

1. Push to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Deploy (Vercel auto-detects Next.js)

### Custom Domain

1. Go to your Vercel project settings
2. Add your domain under "Domains"
3. Configure DNS as instructed

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
