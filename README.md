# Shaily Gujarathi — Portfolio

A production-ready personal portfolio website built with React + Vite + Tailwind CSS + Framer Motion.

## Tech Stack
- **React 18** + **Vite 5** — fast dev & build
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion 11** — smooth animations
- **React Router 6** — client-side routing
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build & Deploy

```bash
npm run build     # outputs to /dist
npm run preview   # preview production build locally
```

### Deploy to Vercel
1. Push to GitHub
2. Import repo on vercel.com
3. Framework preset: **Vite** (auto-detected)
4. Deploy — done ✅

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Fixed nav with scroll detection & dark mode
│   ├── Hero.jsx         # Typing animation, floating orbs, stats
│   ├── About.jsx        # Split layout, language chips, edu card
│   ├── Skills.jsx       # Animated progress bars, concept tags
│   ├── Projects.jsx     # Grid cards with modal popup
│   ├── Experience.jsx   # Timeline layout
│   ├── Contact.jsx      # Form with floating labels + social links
│   └── Footer.jsx       # Quick links, back-to-top
├── App.jsx              # Root with dark mode state
├── main.jsx             # Entry point + console easter egg
└── index.css            # Global styles, CSS variables

public/
└── favicon.svg
```

## Customization

1. **Update personal info** in each component
2. **Add your resume PDF** at `public/resume.pdf`
3. **Change colors** in `tailwind.config.js`
4. **Add LinkedIn URL** in `Hero.jsx` and `Footer.jsx`

## Features
- Dark / Light mode toggle
- Typing animation in hero
- Scroll-triggered animations
- Project detail modals
- Floating label contact form
- Mobile-responsive with hamburger menu
- SEO meta tags
- Console easter egg for recruiters
- Vercel deployment config

