#!/usr/bin/env bash

# generate_site.sh – autonomous pipeline to create a full‑stack website + landing page for a local business.
# Usage: ./generate_site.sh <BUSINESS_URL>

set -euo pipefail

BUSINESS_URL="${1:-}" if [[ -z "$BUSINESS_URL" ]]; then echo "Error: business URL required"; exit 1; fi

# ------------------------------------------------------------
# 1. Extract core business data via Hermes web_search & vision_analyze
# ------------------------------------------------------------
# The Hermes CLI can run tool commands directly. Example:
#   hermes web_search "${BUSINESS_URL}" --top 5
#   hermes vision_analyze --image_url <screenshot_url> --question "Extract NAP and branding colors"
# For now we store the results in temporary JSON files.

# (Placeholder) Simulate extraction – replace with real calls.
BIZ_NAME="Acme Roofing"
BIZ_ADDRESS="123 Main St, Springfield, IL 62704"
BIZ_PHONE="(555) 123‑4567"
BIZ_LOGO_URL="https://example.com/logo.png"
BIZ_COLOR_PRIMARY="#1A73E8"
BIZ_COLOR_SECONDARY="#34A853"
BIZ_COLOR_ACCENT="#EA4335"
BIZ_COLOR_NEUTRAL="#202124"

# ------------------------------------------------------------
# 2. Generate design assets (8K imagery) via image_generate
# ------------------------------------------------------------
# Example prompt for the hero image:
IMAGE_PROMPT="A high‑resolution 8K photograph of a professional roofing crew on a sunny suburban house, with the company logo subtly overlayed, cinematic lighting."
# Store generated image path (requires an image generation model installed).
# hermes image_generate "${IMAGE_PROMPT}" --aspect_ratio landscape > hero_image_path.txt
# For now we use a placeholder path.
HERO_IMAGE="assets/hero.jpg"

# ------------------------------------------------------------
# 3. Scaffold a Next.js project (App Router) using create‑next‑app
# ------------------------------------------------------------
PROJECT_NAME="${BIZ_NAME// /_}_site"
PROJECT_DIR="${HOME}/${PROJECT_NAME}"

if [[ -d "$PROJECT_DIR" && "${FORCE:-false}" != "true" ]]; then
  echo "Project directory $PROJECT_DIR already exists. Pass --force to overwrite."
  exit 1
fi

# Remove existing if forced
if [[ -d "$PROJECT_DIR" && "${FORCE:-false}" == "true" ]]; then
  rm -rf "$PROJECT_DIR"
fi

# Create the app (skip git for speed)
npx create-next-app@latest "$PROJECT_DIR" --app --typescript --eslint --src-dir --no-git

# ------------------------------------------------------------
# 4. Inject branding & copy into the generated app
# ------------------------------------------------------------
# Replace placeholder strings in the Next.js pages.
cd "$PROJECT_DIR"

# Update globals (colors, logo) – we use a simple replace in tailwind.config.js
sed -i '' "s/\#0ea5e9/${BIZ_COLOR_PRIMARY}/" tailwind.config.js || true
sed -i '' "s/\#facc15/${BIZ_COLOR_SECONDARY}/" tailwind.config.js || true

# Replace the Home page with marketing copy.
cat > app/page.tsx <<'EOF'
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-neutral-50">
      <section className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">${BIZ_NAME}</h1>
        <p className="text-lg mb-6">Your trusted local roofing experts – quality, safety, and on‑time service.</p>
        <a href="/contact" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition">Get a Free Quote</a>
      </section>
      <section className="mt-12 w-full">
        <Image src="/${HERO_IMAGE}" alt="Hero" width={1920} height={1080} className="object-cover" />
      </section>
    </main>
  );
}
EOF

# Add a simple contact page (pages/contact.tsx)
cat > app/contact/page.tsx <<'EOF'
export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="text-3xl font-semibold mb-4">Contact ${BIZ_NAME}</h2>
      <p>Phone: ${BIZ_PHONE}</p>
      <p>Address: ${BIZ_ADDRESS}</p>
    </main>
  );
}
EOF

# ------------------------------------------------------------
# 5. Deploy the landing page (static) and the app to Vercel
# ------------------------------------------------------------
# Ensure Vercel CLI is authenticated (VERCEL_TOKEN env var).
if [[ -z "${VERCEL_TOKEN:-}" ]]; then
  echo "VERCEL_TOKEN not set – you must export it before running the script."
  exit 1
fi

# Deploy – Vercel will detect the Next.js project automatically.
vercel --prod --confirm

# ------------------------------------------------------------
# 6. Generate summary report
# ------------------------------------------------------------
REPORT="${HOME}/${PROJECT_NAME}_deployment_report.txt"
cat > "$REPORT" <<EOF
Deployment Summary for ${BIZ_NAME}
---------------------------------
Project Directory: ${PROJECT_DIR}
Landing Page URL: (see Vercel output)
Contact Phone: ${BIZ_PHONE}
Brand Colors: ${BIZ_COLOR_PRIMARY}, ${BIZ_COLOR_SECONDARY}, ${BIZ_COLOR_ACCENT}, ${BIZ_COLOR_NEUTRAL}
Hero Image: ${HERO_IMAGE}

Next steps:
- Review the generated pages for accuracy.
- Add any additional service pages under app/pages/.
- Connect analytics (Google Analytics, Convex) if needed.
EOF

echo "Report written to $REPORT"
