# 🍔 Food Offers Tracker

A personal web app that scans Gmail for restaurant deals and displays them in a list and calendar view.

**Live app:** https://ryanyatwork-ctrl.github.io/restaurant-offers/

## Features
- Auto-scans Gmail for restaurant offers, coupons, and birthday deals
- List view and calendar view
- Mark offers as used or dismiss them
- Auto-connects on load (no login click required)
- Installable as a PWA (desktop + mobile home screen)

## Setup
Requires a Google Cloud project with Gmail API enabled and the following credentials stored in browser localStorage on first run:
- `gmail_client_id` — OAuth 2.0 Client ID
- `gmail_api_key` — API Key

Google Cloud project: `restaurant-offers-tracker` (ryanyatwork@gmail.com)

## Files
- `index.html` — the entire app
- `manifest.json` — PWA manifest for installability  
- `sw.js` — service worker for offline caching
- `icon.png` — app icon

## Notes
- OAuth app is in Google "testing" mode — click Continue past the unverified warning
- Credentials are stored in browser localStorage only, never transmitted anywhere
- Token auto-refreshes silently on each load
