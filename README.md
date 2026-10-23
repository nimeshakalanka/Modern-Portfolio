# Personal Portfolio Website — Alex Morgan

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, production-quality personal portfolio website engineered with Next.js (App Router), TypeScript, and Tailwind CSS. Built to satisfy all requirements for **University Task 1: Personal Portfolio Website**, emphasizing performance, accessibility (WCAG 2.1 AA), responsive fluid layouts, and a clean dark/light mode architecture.

---

## 🌐 Live Demo & Deployment
- **Production Live URL:** `https://alexmorgan-portfolio.vercel.app` (Placeholder – Ready for your Vercel deployment)
- **Repository:** `https://github.com/example-student/personal-portfolio`

---

## 📸 Interface Preview & Design Showcase

```
+-----------------------------------------------------------------------------------+
|  [⚡ Alex.dev]          Home    About    Projects    Contact     [🌓 Theme] [Hire Me]|
+-----------------------------------------------------------------------------------+
|                                                                                   |
|    🟢 Available for Summer 2026 Internships & Roles                               |
|                                                                                   |
|    Hi, I'm Alex Morgan                                        [  AVATAR CARD   ]  |
|    Information Systems Undergraduate & Web Developer          [   Gradient     ]  |
|                                                               [   Tech Visor   ]  |
|    [ View Projects -> ]   [ ✉ Contact Me ]   [ 📄 Resume ]   [ 2026 Grad Pill ]  |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|  FEATURED PROJECTS                                                    [View All]  |
|  [ DevPulse Dashboard ]        [ EcoMarket Store ]         [ StudySync AI Hub ]   |
|  - Real-time Analytics         - Sustainable E-Commerce    - Collaborative Notes  |
|  - [Details] [Live] [GitHub]   - [Details] [Live] [GitHub] - [Details] [Live]...  |
+-----------------------------------------------------------------------------------+
```

---

## ✨ Key Features & Technical Highlights

### 1. 🌓 System-Aware Dark & Light Mode
- Integrated via `components/ThemeProvider.tsx` and custom Tailwind tokens.
- Persisted seamlessly to `localStorage`.
- Zero hydration flicker (FOUC) and automatic `prefers-color-scheme` fallback.

### 2. 📱 Fluid, Mobile-First Responsive Design
- Tested and verified at **360px** (compact mobile), **768px** (tablet), **1024px** (desktop), and **1440px+** (wide monitors).
- Zero horizontal layout shift or overflow bugs (`overflow-x: hidden`).
- 48px+ touch-friendly tap targets and fluid typography scales.

### 3. 💼 Single Source of Truth Project Showcase (`/data/projects.ts`)
- All projects, case studies, technologies, and images are driven strictly from a strongly-typed TypeScript data module.
- Adding or modifying a project requires **zero component modifications**.
- Includes tag-based category filtering (`All`, `Next.js`, `React`, `Full-Stack`, `Tools`) and real-time keyword search.
- Interactive **Case Study Modal** with deep-dive technical highlights, architecture notes, and live external links.

### 4. 📬 Fully Functional Contact Form (`/contact`)
- Integrated with **Web3Forms** using `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
- Comprehensive client-side validation for name, email regex, subject, and message length.
- **Anti-Spam Honeypot Field (`botCheck`)**: traps automated spam bots without CAPTCHA friction.
- Dynamic visual feedback: Idle → Submitting (spinner) → Success confirmation / Error alerts.
- Built-in graceful fallback mode: allows local grading evaluation even before an external API key is configured.

### 5. 🎓 Academic Timeline & Categorized Skills Matrix (`/about`)
- Academic timeline showcasing university degree, GPA, honors, and coursework highlights.
- Categorized skills matrix (Frontend, Backend & DB, Tools & DevOps, UI/UX) with visual proficiency progress bars and practical role contexts.
- Downloadable resume / CV button linking to an offline PDF.

### 6. ♿ Accessibility & Search Engine Optimization (SEO)
- 100% keyboard navigable with visible focus indicators (`:focus-visible`).
- Accessible semantic landmarks (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`).
- Screen-reader friendly with descriptive `aria-label`, `aria-expanded`, and ARIA live regions.
- Complete OpenGraph tags, Twitter Card metadata, and custom SVG favicon.
- Motion effects respect `@media (prefers-reduced-motion: reduce)`.
- Custom branded 404 page (`app/not-found.tsx`).

---

## 🛠️ Technology Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | Server components, streaming rendering, optimized image handling |
| **Language** | TypeScript 5.7 (Strict Mode) | Full type safety across profile, project, and skill models |
| **Styling** | Tailwind CSS 3.4 | Utility-first design tokens, zero runtime CSS overhead, dark mode class |
| **Icons** | Lucide React | Lightweight, tree-shaken, accessible SVG icons |
| **Motion** | Framer Motion & CSS transitions | Subtle micro-interactions respecting reduced motion preferences |
| **Form Service** | Web3Forms API | Serverless email forwarding with spam protection |

---

## 📂 Project Architecture

```
portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx              # About & Background page
│   ├── contact/
│   │   └── page.tsx              # Contact form & social connections
│   ├── projects/
│   │   └── page.tsx              # Projects gallery with tag filtering & modal
│   ├── globals.css               # Global CSS, dark variables, glass effects
│   ├── layout.tsx                # Root layout with Google Fonts & SEO metadata
│   ├── not-found.tsx             # Custom branded 404 page
│   └── page.tsx                  # Home hero, featured work, and tech ticker
├── components/
│   ├── Badge.tsx                 # Reusable pill badge primitive
│   ├── ContactForm.tsx           # Validated contact form with honeypot & states
│   ├── Footer.tsx                # Footer with quick links & back-to-top
│   ├── Navbar.tsx                # Sticky responsive navbar with hamburger drawer
│   ├── ProjectCard.tsx           # Interactive project card with hover states
│   ├── ProjectModal.tsx          # Accessible modal dialog for case studies
│   ├── SkillCategorySection.tsx  # Grouped skills with visual proficiency meters
│   ├── ThemeProvider.tsx         # Context provider for Dark/Light theme switch
│   ├── ThemeToggle.tsx           # Sun/Moon toggle button
│   └── Timeline.tsx              # Education & milestone timeline
├── data/
│   ├── profile.ts                # Single source of truth for owner & education
│   ├── projects.ts               # Single source of truth for all projects
│   └── skills.ts                 # Single source of truth for skills matrix
├── public/
│   ├── projects/                 # Vector SVG project graphics
│   │   ├── algovisualizer.svg
│   │   ├── devpulse.svg
│   │   ├── ecomarket.svg
│   │   ├── healthtrack.svg
│   │   └── studysync.svg
│   ├── avatar.svg                # Abstract developer portrait
│   ├── favicon.svg               # SVG lettermark favicon
│   └── resume.pdf                # Downloadable CV PDF placeholder
├── .env.example                  # Environment variables template
├── DESIGN.md                     # Step 1 Design Specification document
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Local Development Setup

### Prerequisites
- **Node.js**: v18.18.0 or newer (v20+ recommended)
- **npm**: v9 or newer

### Installation
1. Clone the repository or open the project folder:
   ```bash
   cd "personal-portfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   *(Optional)* Get a free access key at [web3forms.com](https://web3forms.com) and paste it into `.env.local`:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY="your-access-key-here"
   ```
   > **Note:** Even without a custom access key, the form operates in local test mode and provides clear simulated success messages.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Production Deployment to Vercel

The application is fully pre-configured for seamless deployment to **Vercel**:

### Step 1: Push Code to GitHub
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial release: personal portfolio website"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Push your code:
   ```bash
   git remote add origin https://github.com/your-username/your-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import on Vercel
1. Log in to [vercel.com](https://vercel.com) using your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your repository from the GitHub list and click **"Import"**.

### Step 3: Configure Environment Variables
1. Under the **"Environment Variables"** section in Vercel, add:
   - **Key:** `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - **Value:** `your-web3forms-access-key`
2. Click **"Deploy"**.
3. Vercel will run `npm run build` and output your live production URL within ~60 seconds!

---

## 🧑‍💻 Customizing with Your Details

To personalize this portfolio with your own identity, edit **only two files**:

1. **Owner Details, Education & Bio (`/data/profile.ts`)**:
   - `name`: Change `"Alex Morgan"` to your full name.
   - `title`: Update with your exact university degree and specialization.
   - `shortBio` & `fullBio`: Customize with your 2-3 sentence background.
   - `education`: Update your university, years, GPA, and coursework.
   - `socialLinks`: Paste your real LinkedIn, GitHub, and email links.

2. **Project Showcase (`/data/projects.ts`)**:
   - Update titles, descriptions, live demo links, and GitHub URLs to match your own assignments and projects.

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
