# Home Hero Handyman LLC — Website

Production-ready marketing site for a Los Angeles handyman business.
Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS**.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000. The site works out of the box — the estimate form
runs in demo mode (simulated success, submissions logged to the server
console) until you configure email.

## 1. Edit your business data (do this first)

Everything editable lives in **`src/config/`**:

| File | What's in it |
|---|---|
| `src/config/business.ts` | Company name, **phone, text number, email, business hours**, service areas, Instagram/Yelp/Google links, CTA labels, site URL |
| `src/config/services.ts` | Service categories and item lists |
| `src/config/faq.ts` | FAQ questions and answers |
| `src/config/gallery.ts` | Gallery projects and before/after pairs |

Phone, text, email, hours and social links ship **empty**. Any empty field is
automatically hidden on the site (no `[PLACEHOLDER]` text ever shows), and the
Call/Text buttons appear as soon as you fill the numbers in:

```ts
phone: "(323) 555-0100",   // shown to visitors
phoneHref: "+13235550100", // used in tel: links
textNumber: "(323) 555-0100",
textHref: "+13235550100",
email: "hello@yourdomain.com",
hours: "Mon–Sat, 8am–6pm",
```

To change service areas, edit the `serviceAreas` array in the same file — the
Service Areas page, footer and SEO schema update automatically.

## 2. Replace the images

All images live in `public/images/` and currently contain labeled
placeholders. See **`public/images/README.md`** for exactly what to shoot,
recommended sizes, before/after tips, and privacy/permission guidance.

To add gallery projects: drop photos into `public/images/` and add entries to
`src/config/gallery.ts` (title, category, alt text). Filters update
automatically.

## 3. Connect the estimate form (Resend)

The form posts to `src/app/api/estimate/route.ts`, which includes server-side
validation, a honeypot + timing spam check, per-IP rate limiting and file
size/type limits.

1. Create a free account at [resend.com](https://resend.com) and get an API key.
2. Verify your sending domain in Resend (or use `onboarding@resend.dev` for testing).
3. Copy `.env.example` to `.env.local` and fill in:

```bash
RESEND_API_KEY=re_xxxxxxxx
ESTIMATE_TO_EMAIL=you@yourdomain.com
ESTIMATE_FROM_EMAIL=estimates@yourdomain.com
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com
```

4. Restart the dev server. Submissions (with photo attachments) now arrive by email.

Without `RESEND_API_KEY`, the route stays in demo mode: it validates input,
logs the submission server-side and returns a success message — nothing breaks.

## 4. Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Next.js; keep the defaults.
4. Under **Settings → Environment Variables**, add the four variables from `.env.example`.
5. Click **Deploy**.

Every push to your main branch redeploys automatically.

## 5. Connect a custom domain

1. In the Vercel project: **Settings → Domains → Add** → enter `yourdomain.com`.
2. At your domain registrar, add the DNS records Vercel shows you
   (an `A` record to `76.76.21.21` for the apex, `CNAME cname.vercel-dns.com` for `www`).
3. Wait for DNS to propagate (minutes to a few hours). Vercel issues HTTPS automatically.
4. Set `NEXT_PUBLIC_SITE_URL` to the final domain and redeploy — this fixes
   canonical URLs, the sitemap and Open Graph links.

## Project structure

```
src/
├── app/                    # App Router pages
│   ├── page.tsx            # Home
│   ├── services/           # Services
│   ├── property-maintenance/
│   ├── about/  gallery/  service-areas/
│   ├── estimate/  contact/  privacy-policy/
│   ├── api/estimate/route.ts   # Form handler (Resend or demo mode)
│   ├── sitemap.ts  robots.ts   # Auto-generated sitemap.xml / robots.txt
│   ├── not-found.tsx  loading.tsx  error.tsx
│   └── layout.tsx  globals.css  icon.svg
├── components/             # Header, Hero, ServicesGrid, FAQ, forms, etc.
├── config/                 # ← your editable business data
└── lib/schema.ts           # JSON-LD (LocalBusiness, FAQ, Breadcrumbs)
```

## Built-in SEO

- Unique title + meta description per page, canonical URLs
- Open Graph + Twitter card metadata
- `sitemap.xml` and `robots.txt` generated at build time
- `HomeAndConstructionBusiness` (LocalBusiness) schema site-wide
- FAQ schema (only for the FAQs actually shown) and Breadcrumb schema on inner pages
- Semantic HTML, single H1 per page, alt text on all images

## Honest-content policy

The copy deliberately avoids unverified claims: no "licensed contractor"
wording, no invented years of experience, project counts, ratings or reviews.
`TestimonialsPlaceholder` renders nothing until you add real, permission-based
reviews. Keep it that way — it protects the business legally and builds trust.

## Notes

- Privacy Policy (`/privacy-policy`) is a **template** — review it (ideally
  with an attorney) and set the "last updated" date before launch.
- Add per-neighborhood SEO landing pages later by creating
  `src/app/service-areas/[slug]/page.tsx` — the area list in
  `business.ts` is ready to drive it.
