# FrontDesk Agents Full‑Stack Website & Landing‑Page Factory

This repository contains an **autonomous pipeline** that can take a public business URL (or a CSV/JSON payload) and automatically generate:

1. A **marketing landing page** (static HTML + Tailwind CSS) fully branded with the business colors and imagery.
2. A **Next.js web app** (App Router) with:
   - Service‑specific landing pages (one per core service).
   - A conversion‑focused contact/quote form.
   - SEO‑ready meta tags and JSON‑LD schema.
3. A **Founder/Admin dashboard** (React + Vite) that shows KPIs, health monitoring and allows JSON ingestion of new tenants.
4. **Deployment scripts** that push the static landing page to Vercel/Netlify and the Next.js app to Vercel, handling secret cleanup automatically.
5. A **cron job** (optional) that can re‑run the pipeline nightly to keep the site in sync with updated Google Business data.

The whole process is triggered by `generate_site.sh`. It performs:
- Business discovery & data extraction using Hermes tools (`web_search`, `vision_analyze`).
- Design‑system generation (color palette, typography) and image generation via `image_generate`.
- File scaffolding (`write_file`, `patch`).
- Project creation (`npx create-next-app`).
- Branding injection (replace placeholders in the generated Next.js project).
- Deployment (`vercel` CLI) and optional cron registration.

## Prerequisites
- Node.js >= 20, npm, npx.
- Vercel CLI (`npm i -g vercel`) logged in to your account.
- Hermes tools installed (they are part of the Hermes Agent environment).
- Optional: an image‑generation model that supports 8K output (Stable Diffusion XL).

## Usage
```bash
cd ~/frontdesk_factory
./generate_site.sh <BUSINESS_URL>
```
The script will output the generated site URLs and a summary report.

---
*All scripts are designed for autonomous execution; they include safety checks and will **not** overwrite existing projects unless you pass the `--force` flag.*
