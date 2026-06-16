#!/usr/bin/env bash

# update_site.sh – reads config.json and re‑runs the site generation
# This can be scheduled as a nightly cron job to keep the site in sync.

set -euo pipefail

CONFIG_FILE="$(dirname "$0")/config.json"
if [[ ! -f "$CONFIG_FILE" ]]; then
  echo "Config file not found at $CONFIG_FILE"
  exit 1
fi

BUSINESS_URL=$(jq -r '.business_url' "$CONFIG_FILE")
if [[ -z "$BUSINESS_URL" || "$BUSINESS_URL" == "null" ]]; then
  echo "business_url missing in config"
  exit 1
fi

# Call the main generator script with the stored URL.
$(dirname "$0")/generate_site.sh "$BUSINESS_URL"
