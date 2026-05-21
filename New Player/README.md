# Nexus Landing Page

A modern, animated landing website built with **React 18**, **Tailwind CSS**, **Vite**, and **Node.js/Express**.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18 |
| Styling | Tailwind CSS + inline styles |
| Bundler | Vite |
| Server | Node.js + Express |
| Fonts | Syne (headings) + Inter (body) |

## Sections

- **Header** — Sticky nav with blur backdrop on scroll, gradient logo, CTA button
- **Hero** — Full-screen with animated gradient blobs, grid overlay, headline, stats row
- **About** — Two-column layout with animated mock dashboard card and company milestones
- **Features** — 6-card grid with hover effects (glow, lift, colored borders)
- **Preview** — Interactive tab switcher showing mock product UI
- **CTA** — Email capture with gradient glow card
- **Footer** — 5-column layout with social icons

## Getting Started

### Development

```bash
npm install
npm run dev
```

Visit → http://localhost:5173

### Production Build

```bash
npm run build      # outputs to dist/
npm start          # serves with Express on port 3000
```

Visit → http://localhost:3000

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Express server port |

## Project Structure

```
nexus-landing/
├── src/
│   ├── App.jsx         # All page sections (Header, Hero, About, Features, Preview, CTA, Footer)
│   ├── main.jsx        # React root entry
│   └── index.css       # Global styles + Google Fonts import
├── index.html          # HTML root template
├── server.js           # Express production server
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS + Autoprefixer
└── package.json        # Dependencies & scripts
```
