# SIKKA — Landing Page

> The cinematic, privacy-first landing page for **Sikka** — a 100% offline personal finance tracker.

---

## ✨ Overview

Sikka's landing page is built as a scroll-driven narrative experience with a dark "Cinematic Noir" aesthetic. It tells the story of why offline-first finance tracking matters, what makes Sikka different, and invites users to join the private beta.

### Pages

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `HomePage` | Main landing — hero, manifesto, vault, features, analytics, CTA |
| `/roadmap` | `RoadmapPage` | Product roadmap timeline + "Suggest a Feature" form |

### Sections (Home Page — Narrative Flow)

1. **Hero** — Animated headline, beta badge, waitlist CTA, key stats
2. **Privacy Manifesto** — Surveillance vs. Sikka solution, tension-resolution storytelling
3. **The Vault** — Zero cloud lock-in, local encryption messaging
4. **Feature Grid** — Offline backups, unlimited accounts, subscriptions management
5. **Sentimental Analytics** — Emotion tags, regret tracking, category breakdowns
6. **CTA + Footer** — Waitlist email capture form

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite 7](https://vite.dev) |
| Routing | [React Router v7](https://reactrouter.com) |
| Animations | [Framer Motion 11](https://www.framer.com/motion/) |
| 3D Graphics | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei) |
| Icons | [Lucide React](https://lucide.dev) |
| Styling | Vanilla CSS (custom properties, glassmorphism, noir grid) |

---

## 📁 Project Structure

```
src/
├── App.tsx                     # Router setup (/, /roadmap)
├── main.tsx                    # Entry point
├── index.css                   # Global styles & design system
├── App.css                     # App-level styles
├── assets/                     # Static assets
├── constants/
│   └── content.ts              # All copy/content in one place
├── components/
│   ├── layout/
│   │   └── Navbar.tsx          # Navigation bar
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section with stats
│   │   ├── PrivacyManifesto.tsx  # Surveillance vs privacy
│   │   ├── TheVault.tsx        # Local encryption pitch
│   │   ├── FeatureGrid.tsx     # Feature cards
│   │   ├── AnalyticsSection.tsx  # Sentimental analytics
│   │   ├── CTA.tsx             # Call-to-action + Footer
│   │   └── ProblemSection.tsx  # Problem statement
│   ├── shared/
│   │   ├── WaitlistForm.tsx    # Email capture → Google Sheets
│   │   ├── GlassCard.tsx       # Glassmorphism card
│   │   ├── Button.tsx          # Reusable button
│   │   └── Magnetic.tsx        # Magnetic hover effect
│   └── mockups/                # App mockup visuals
├── pages/
│   ├── HomePage.tsx            # Main landing page
│   └── RoadmapPage.tsx         # Roadmap + feature suggestion
├── utils/
│   └── formSubmission.ts       # Google Sheets integration utility
├── hooks/                      # Custom React hooks
├── services/                   # External service layers
└── types/                      # TypeScript type definitions
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd sikka_landing_page

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🔗 Google Sheets Integration

The landing page collects data via two forms that submit to a **Google Apps Script** Web App, which writes to a Google Sheet:

| Form | Location | Google Sheet Tab | Data Collected |
|------|----------|-----------------|----------------|
| **Beta Waitlist** | CTA section (Home) | Sheet 1: `Beta Waitlist` | Email address |
| **Suggest a Feature** | Roadmap page | Sheet 2: `Feature Suggestions` | Feature description |

### Setup

1. **Create a Google Sheet** with two tabs named exactly:
   - `Beta Waitlist`
   - `Feature Suggestions`

2. **Create a Google Apps Script** (Extensions → Apps Script) with this template:

   ```javascript
   function doPost(e) {
     var data = JSON.parse(e.postData.contents);
     var ss = SpreadsheetApp.getActiveSpreadsheet();
     var sheet = ss.getSheetByName(data.sheetName);

     if (data.type === 'waitlist') {
       sheet.appendRow([data.timestamp, data.email]);
     } else if (data.type === 'suggestion') {
       sheet.appendRow([data.timestamp, data.content]);
     }

     return ContentService.createTextOutput(
       JSON.stringify({ status: 'success' })
     ).setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. **Deploy** the script:
   - Click **Deploy → New deployment**
   - Select **Web app**
   - Set **Execute as:** `Me`
   - Set **Who has access:** `Anyone`
   - Copy the deployment URL

4. **Configure `.env`**:

   ```env
   VITE_GOOGLE_SHEET_ID=your_sheet_id_here
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
   ```

5. **Restart** the dev server for env vars to take effect.

> **Note:** Without the `VITE_GOOGLE_SCRIPT_URL` configured, form submissions are mocked with a 1-second delay and succeed silently (dev-friendly).

---

## 🎨 Design System

The site uses a **Cinematic Noir** aesthetic built on CSS custom properties:

- **Dark palette** — Deep blacks with subtle grid overlays
- **Accent color** — Mint green (`--accent-mint`)
- **Film grain** — CSS noise overlay for texture
- **Typography** — Clean, modern sans-serif hierarchy
- **Glassmorphism** — Frosted glass card effects
- **Micro-animations** — Framer Motion scroll-triggered reveals, staggered fades, spring physics

---

## 📄 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GOOGLE_SHEET_ID` | Google Sheet ID (from the spreadsheet URL) | For form submissions |
| `VITE_GOOGLE_SCRIPT_URL` | Deployed Google Apps Script Web App URL | For form submissions |

All env vars must be prefixed with `VITE_` to be exposed to the client-side code (Vite convention).

---

## 📜 License

© 2026 Sikka App. All rights reserved.
