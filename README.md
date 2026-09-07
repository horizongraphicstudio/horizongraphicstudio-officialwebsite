<div align="center">

# ?? HORIZON GRAPHIC STUDIO
### *Where Visionary Aesthetics Meet Engineering Precision*
**A Smart Vista IT Solutions Company**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<p align="center">
  <b>Horizon Graphic Studio</b> is an ultra-premium, full-service creative agency based in Varanasi, India. We engineer brand identities, high-fidelity 3D CGI visuals, luxury packaging, and digital experiences for market leaders, disruptive startups, and heritage enterprises across India and the globe.
</p>

[Explore Website](#-interactive-modules) • [Tech Stack](#-technical-stack) • [Quick Start](#-quick-start) • [Deployment](#-vercel-deployment) • [Contact](#-connect-with-us)

---

</div>

## ?? Design Philosophy & Brand Identity

Horizon Graphic Studio blends hyper-modern Scandinavian minimalism with luxury dark aesthetics and traditional Indian royalty:
- **Midnight Slate Navy (#070d18 / #0a1124)**: Infinite, deep canvas conveying timeless authority.
- **Rich Metallic Imperial Gold (#e5c158 / #ffd166)**: High-prestige metallic accents symbolizing excellence and wealth.
- **Electric Azure Cyan (#00b4d8 / #90e0ef)**: Future-ready digital glow highlighting active interactions.
- **Chromatic Glassmorphism**: Multi-layered blurred panels (ackdrop-blur-xl), subtle borders (gba(255,255,255,0.08)), and luminous radial gradient glows.

---

## ? Interactive Modules & Features

### 1. ?? Real-Time 3D WebGL Hero Canvas
- Powered by **Three.js** and **React Three Fiber**.
- Features an interactive floating geometric gemstone sphere with dynamic lighting, mouse tracking, and smooth dampening.
- Logo-calibrated dual ambient lights (Imperial Gold & Electric Azure).

### 2. ?? Architectural Bento Grid
- Modern multi-compartment Bento layout highlighting agency capabilities:
  - Brand Systems & Visual Identity
  - 3D Motion Graphics & Photorealistic CGI
  - Luxury Foil & Tactile Packaging
  - High-Conversion UI/UX Design
  - Enterprise Scalability

### 3. ?? Filterable Portfolio & Modal Case Studies
- Filter by: All, Brand Identity, Luxury Packaging, 3D & Motion, and Digital / UI/UX.
- Comprehensive case studies with client challenge, strategic solution, and verified business outcomes (e.g., *+340% organic reach*, *?1.8 Cr funding raised*).
- Fullscreen glassmorphic detail drawer with high-resolution visual previews.

### 4. ?? Pinterest-Style Creative Masonry Pinboard
- Staggered dynamic column layout showcasing design explorations, mockups, typography experiments, and print art.
- Interactive lightbox preview modal with tags, color palettes, and engagement metrics.

### 5. ?? Dynamic Scope & Budget Calculator (INR ?)
- Interactive quote builder customized for Indian market businesses:
  - Project scope selection (Brand Identity, UI/UX, 3D CGI, Packaging, Social Media).
  - Add-ons (Design System, Motion Logo, Fast-Track Delivery).
  - Real-time quote aggregation in Indian Rupees (? INR) with immediate consultation handoff.

### 6. ?? Indian Market Pricing Engine
- Transparent, market-calibrated tiers in INR:
  - **Starter Identity** (?4,999 / flat sprint)
  - **Growth Studio Suite** (?14,999 / flat sprint) — *Most Popular*
  - **Enterprise 360° Partner** (?29,999 / flat sprint)
- **Monthly Retainer Toggle**: Instant switch between single sprint pricing and ongoing monthly retainer packages (?3,999/mo, ?11,999/mo, ?24,999/mo).

### 7. ?? Client Marquee & Verified Testimonials
- Infinite seamless marquee of corporate partners.
- Detailed testimonials with ROI metrics, ratings, and verified client company profiles.

### 8. ?? High-Conversion Project Ingestion Form
- Interactive budget tier pills (?5,000 – ?15,000, ?15,000 – ?35,000, ?35,000 – ?75,000, ?75,000+ Enterprise).
- Form validation with immediate feedback and WhatsApp/Email routing.

---

## ??? Technical Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) | Lightning-fast HMR and optimized production bundling |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type safety and complete interface modeling |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Bespoke design system tokens and glassmorphism utilities |
| **3D Graphics** | [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | Hardware-accelerated WebGL scene rendering |
| **Icons & UI** | [Lucide React](https://lucide.dev/) + [Radix UI](https://www.radix-ui.com/) | Accessible, head-less interactive primitives |
| **Routing** | [React Router DOM 6](https://reactrouter.com/) | Client-side Single Page Application (SPA) routing |
| **State & Cache** | [@tanstack/react-query](https://tanstack.com/query) | Async state caching and data synchronization |
| **Production Hosting** | [Vercel](https://vercel.com/) | Edge network CDN, automatic SSL, and zero-downtime CI/CD |

---

## ?? Repository Structure

`	ree
horizon-graphic-studio/
+-- public/
¦   +-- favicon.ico
¦   +-- robots.txt
¦   +-- placeholder.svg
+-- src/
¦   +-- assets/
¦   ¦   +-- logo.png              # Official Horizon Graphic Studio emblem
¦   +-- components/
¦   ¦   +-- ui/                   # Radix & glassmorphic primitive components
¦   ¦   +-- BentoGridSection.tsx  # Architectural Bento grid
¦   ¦   +-- ClientMarquee.tsx     # Infinite loop client partner ticker
¦   ¦   +-- ContactSection.tsx    # Lead intake form with INR budget pills
¦   ¦   +-- Footer.tsx            # Multi-column footer & copyright
¦   ¦   +-- HeroScene.tsx         # Interactive Three.js 3D gemstone canvas
¦   ¦   +-- HeroSection.tsx       # Kinetic hero typography & CTAs
¦   ¦   +-- Navbar.tsx            # Sticky frosted glass navigation
¦   ¦   +-- PinterestMasonrySection.tsx # Staggered creative pinboard
¦   ¦   +-- PortfolioSection.tsx  # Filterable case study showcase
¦   ¦   +-- PricingSection.tsx    # INR flat-rate & retainer plans
¦   ¦   +-- ProjectEstimator.tsx  # Dynamic interactive budget calculator
¦   ¦   +-- ServicesSection.tsx   # Core design services matrix
¦   ¦   +-- TestimonialsSection.tsx # Social proof & verified reviews
¦   +-- hooks/                    # Custom React hooks (mobile, toast, theme)
¦   +-- pages/
¦   ¦   +-- Index.tsx             # Main agency landing page
¦   ¦   +-- NotFound.tsx          # 404 luxury fallback page
¦   +-- App.tsx                   # Master routing & provider tree
¦   +-- index.css                 # Theme tokens, custom scrollbar & glass layers
¦   +-- main.tsx                  # Application bootstrap entry point
+-- vercel.json                   # SPA route rewrites for Vercel edge
+-- tailwind.config.ts            # Custom colors, glows, and typography
+-- vite.config.ts                # Vite bundler configuration
+-- package.json                  # Dependencies and execution scripts
`

---

## ?? Quick Start

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** (or **pnpm** / **bun**)

### Installation

1. **Clone the Repository:**
   `ash
   git clone https://github.com/horizongraphicstudio/horizongraphicstudio-officialwebsite.git
   cd horizongraphicstudio-officialwebsite
   `

2. **Install Dependencies:**
   `ash
   npm install
   `

3. **Launch Development Server:**
   `ash
   npm run dev
   `
   The site will be running locally at http://localhost:8080/ (or your local IP for multi-device testing).

4. **Build for Production:**
   `ash
   npm run build
   `
   Creates an optimized, tree-shaken static bundle in the dist/ directory.

5. **Preview Production Build:**
   `ash
   npm run preview
   `

---

## ?? Vercel Deployment

This project is pre-configured for instant one-click deployment on **Vercel**:

1. Push this repository to **GitHub** or **GitLab**.
2. Go to [Vercel](https://vercel.com) and click **Add New... > Project**.
3. Import horizongraphicstudio-officialwebsite.
4. Vercel automatically detects **Vite**:
   - **Build Command:** 
pm run build
   - **Output Directory:** dist
5. Click **Deploy**.

> **Note on SPA Routing:**  
> The repository includes a ercel.json file configuring rewrites (/(.*) -> /index.html), ensuring page refreshes and direct links never produce 404 errors.

---

## ?? Color Palette & Hex Codes

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Midnight Obsidian** | #070d18 | Primary Application Background |
| **Deep Slate** | #0f182c | Surface Panel & Card Fill |
| **Imperial Gold** | #e5c158 | Luxury Accent & Highlights |
| **Sunburst Yellow** | #ffd166 | Glowing Text & Badges |
| **Azure Cyan** | #00b4d8 | Secondary Accents & Interactive Glows |
| **Pure Glass** | gba(255,255,255,0.06) | Frosted Glassmorphism Layer |

---

## ?? Connect With Us

**Horizon Graphic Studio**  
*A Smart Vista IT Solutions Company*

- ?? **Headquarters:** Varanasi, Uttar Pradesh, India
- ?? **Inquiries:** [contact@smartvistait.com](mailto:contact@smartvistait.com)
- ?? **Parent Company:** [Smart Vista IT Solutions](https://smartvistait.com)
- ?? **Services:** Brand Identity, Luxury Packaging, 3D CGI Motion, UI/UX Design

---

<div align="center">
  <p>© 2026 Horizon Graphic Studio. A Smart Vista IT Solutions Company. All Rights Reserved.</p>
</div>
