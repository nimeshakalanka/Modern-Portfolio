# Design Specification: Personal Portfolio Website (DESIGN.md)

**Project:** University Assignment – Task 1: Personal Portfolio Website  
**Candidate / Owner:** [Your Name] (Alex Morgan – Configurable via `/data/profile.ts`)  
**Role / Tagline:** Information Systems Undergraduate | Full-Stack & UI/UX Web Developer  
**Design Philosophy:** Modern, minimal, highly functional, and accessible with generous whitespace, crisp typography, and subtle micro-interactions.

---

## 1. Design System & Tokens

### 1.1 Color Palette
The color scheme is engineered around a clean dark/light mode architecture with an ultra-refined, professional Indigo accent (`#6366F1`), balanced with neutral slates and subtle cybernetic gradients for visual depth without clutter.

#### Light Mode (Default Clean / Daytime)
- **Background Primary:** `#F8FAFC` (Slate 50 – soft, glare-free backdrop)
- **Background Secondary / Card Surface:** `#FFFFFF` (Pure White with 1px border `#E2E8F0`)
- **Background Tertiary / Hover:** `#F1F5F9` (Slate 100)
- **Text Primary (Headings):** `#0F172A` (Slate 900 – deep contrast, AAA compliance)
- **Text Secondary (Body/Muted):** `#475569` (Slate 600 – readable, gentle tone)
- **Border Default:** `#E2E8F0` (Slate 200)
- **Border Subtle:** `#CBD5E1` (Slate 300)

#### Dark Mode (Deep Obsidian / Nighttime)
- **Background Primary:** `#090D16` (Deep Midnight Obsidian)
- **Background Secondary / Card Surface:** `#111827` / `#131B2E` (Tailored dark slate with 1px border `#1E293B`)
- **Background Tertiary / Hover:** `#1E293B` (Slate 800)
- **Text Primary (Headings):** `#F8FAFC` (Slate 50 – crisp legibility)
- **Text Secondary (Body/Muted):** `#94A3B8` (Slate 400 – balanced contrast)
- **Border Default:** `#1E293B` (Slate 800)
- **Border Highlight:** `#334155` (Slate 700)

#### Accent & Semantic Colors (Unified across modes)
- **Primary Accent:** `#6366F1` (Electric Indigo – high energy, professional)
- **Accent Hover / Active:** `#4F46E5` (Indigo 600)
- **Accent Glow / Tint:** `rgba(99, 102, 241, 0.15)` (Subtle backlights, badges, pill tags)
- **Secondary Gradient:** `linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)` (Hero text highlight, primary CTAs)
- **Success:** `#10B981` (Emerald 500) / Success message alerts
- **Error:** `#EF4444` (Rose 500) / Validation states
- **Warning:** `#F59E0B` (Amber 500)

---

## 2. Typography

We pair two complementary, world-class modern Google fonts:
1. **Heading Font:** **`Plus Jakarta Sans`** (weights: 600 SemiBold, 700 Bold, 800 ExtraBold)  
   - Modern geometric sans with distinctive humanist curvature. Conveys authority, technical precision, and modern engineering excellence.
2. **Body Font:** **`Inter`** (weights: 400 Regular, 500 Medium, 600 SemiBold)  
   - The gold standard for UI legibility across high-density digital interfaces.
3. **Monospace / Code Font (Tech tags & metadata):** **`JetBrains Mono`** / System monospace.

### Type Scale (Fluid rem-based sizing)
- `Display / Hero Title`: `3.0rem – 4.5rem` (48px – 72px), line-height: `1.1`, tracking: `-0.025em`
- `H1 (Page Headers)`: `2.25rem – 3.0rem` (36px – 48px), line-height: `1.2`, tracking: `-0.02em`
- `H2 (Section Titles)`: `1.75rem – 2.25rem` (28px – 36px), line-height: `1.25`
- `H3 (Card Titles)`: `1.25rem – 1.5rem` (20px – 24px), line-height: `1.35`
- `Body Large`: `1.125rem` (18px), line-height: `1.6`
- `Body Base`: `1.0rem` (16px), line-height: `1.6`
- `Small / Metadata / Tag`: `0.875rem` (14px), line-height: `1.4`
- `Micro / Badge`: `0.75rem` (12px), uppercase tracking: `0.05em`

---

## 3. Spacing Scale & Layout Grid

- **Base Unit:** 4px grid (`0.25rem`)
- **Spacing tokens:**
  - `space-xs`: `0.5rem` (8px) – badge padding, inner icon gaps
  - `space-sm`: `0.75rem` (12px) – button padding Y, card compact gaps
  - `space-md`: `1.0rem` (16px) – input padding, general stack spacing
  - `space-lg`: `1.5rem` (24px) – card interior padding, grid gap
  - `space-xl`: `2.0rem` (32px) – section subheadings, modal margins
  - `space-2xl`: `3.5rem – 5.0rem` (56px – 80px) – section vertical padding
  - `space-3xl`: `6.0rem – 8.0rem` (96px – 128px) – hero vertical breathing room
- **Container Max-Widths:**
  - Standard Container: `max-w-6xl` (`1152px`) with responsive horizontal gutter (`px-4 sm:px-6 lg:px-8`)
  - Narrow Reading Container (Bio/Contact): `max-w-3xl` (`768px`)
- **Breakpoints (Mobile-First):**
  - Mobile: `360px` (Compact devices)
  - Mobile Landscape / Phablet: `480px`
  - Tablet: `768px` (`md:`)
  - Desktop: `1024px` (`lg:`)
  - Wide Desktop: `1440px+` (`xl:` / `2xl:`)

---

## 4. Component Architecture

All components adhere to strict Single Responsibility, accessibility, and zero-redundancy principles:

1. **`Navbar`**:
   - Sticky top glassmorphism (`backdrop-blur-md bg-white/80 dark:bg-slate-900/80`).
   - Logo / Monogram link with subtle hover scale.
   - Desktop navigation links with active route indicator (underlined / glow pill).
   - Theme Toggle (Sun/Moon icon with animated switch & persistence via `localStorage`).
   - Mobile hamburger button with ARIA attributes (`aria-expanded`, `aria-label`) and smooth slide-down mobile menu drawer.
2. **`Footer`**:
   - Quick navigation links, social icons (GitHub, LinkedIn, Email), copyright notice, university attribution, and an accessible "Back to Top" smooth-scroll button.
3. **`ThemeToggle`**:
   - Seamless switch between Dark and Light mode without Flash of Unstyled Content (FOUC).
4. **`HeroSection`**:
   - Eyebrow badge: "Available for Internships & Projects".
   - Dynamic animated gradient headline.
   - Role tagline and punchy 2-3 sentence introduction.
   - Dual CTAs: Primary ("View Projects" with arrow icon) + Secondary ("Contact Me" / "Download CV").
   - Floating tech stack ticker / pill highlights.
5. **`ProjectCard`**:
   - Next.js responsive image preview with SVG abstract fallback.
   - Categorized tag pills (`React`, `Next.js`, `TypeScript`, etc.).
   - Action buttons: "Live Demo" (external link) & "GitHub" (code repository) + "Details" modal trigger.
   - Elevation and micro-scale hover effects (`transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`).
6. **`ProjectDetailModal`**:
   - Accessible modal dialog for deep-dive case study (Problem, Solution, Key Features, Architecture).
   - Focus trap and Esc key dismissal with backdrop blur.
7. **`SkillCategoryCard`**:
   - Categorized groupings: Frontend, Backend & Database, Tools & DevOps, Design & UI/UX.
   - Visual proficiency indicators (skill tag badges with subtle gradient borders or proficiency meters).
8. **`TimelineItem`**:
   - Vertical milestone line for Education and Experience with dates, university/degree name, GPA/honors, and course highlights.
9. **`ContactForm`**:
   - Input fields: Name, Email, Subject, Message.
   - Hidden honeypot field (`_gotcha`) for automated bot spam prevention.
   - Real-time client-side validation (regex email check, required lengths).
   - Dynamic submit states: Idle -> Loading (spinner) -> Success (animated checkmark) / Error alert.
   - Connected to Web3Forms / Formspree API with `.env` configuration.
10. **`Badge` & `Button`**:
    - Reusable design primitive with variants (`primary`, `secondary`, `outline`, `ghost`).

---

## 5. Page Wireframes & Layout Notes

### Page 1: Home (`/`)
```
+--------------------------------------------------------------+
| [Logo]        Home   About   Projects   Contact   [Theme] [=]|
+--------------------------------------------------------------+
|                                                              |
|   [Badge: Available for hire]                                |
|   Hi, I'm Alex Morgan                                        |
|   Information Systems Undergraduate | Web Developer          |
|   [Short bio preview paragraph: 2 sentences]                |
|   [Button: View Projects]   [Button: Contact Me]             |
|                                                              |
+--------------------------------------------------------------+
| FEATURED PROJECTS                               [View All ->]|
| [Card 1: NextGen E-Com]  [Card 2: TaskFlow AI]  [Card 3: OS] |
+--------------------------------------------------------------+
| SKILLS HIGHLIGHTS                                            |
| [React] [Next.js] [TypeScript] [Tailwind] [Python] [SQL] ... |
+--------------------------------------------------------------+
| QUICK CTA BANNER                                             |
| "Let's build something extraordinary together." [Get in Touch]|
+--------------------------------------------------------------+
| Footer: Links | Socials | Copyright © 2026 Alex Morgan       |
+--------------------------------------------------------------+
```

### Page 2: About (`/about`)
```
+--------------------------------------------------------------+
| [Header: About Me & Background]                              |
+--------------------------------------------------------------+
| [Photo / Modern Abstract Avatar] | [Full Biography]          |
|                                  | [Specialization & Goals]  |
|                                  | [Button: Download CV PDF] |
+--------------------------------------------------------------+
| EDUCATION & ACADEMIC TIMELINE                                |
| (o) 2022 - 2026: B.Sc. in Information Systems                |
|     State University | Dean's List | Relevant Coursework    |
| (o) 2020 - 2022: High School Diploma (Science & Computing)   |
+--------------------------------------------------------------+
| SKILLS BY CATEGORY                                           |
| [Frontend]          [Backend & Data]     [Tools & Design]    |
| - React, Next.js    - Node.js, Python    - Git, GitHub       |
| - Tailwind CSS      - PostgreSQL, SQLite - Figma, UI/UX      |
+--------------------------------------------------------------+
```

### Page 3: Projects (`/projects`)
```
+--------------------------------------------------------------+
| [Header: Featured Work & Case Studies]                       |
| "Filter by technology to explore specific stacks"            |
+--------------------------------------------------------------+
| Filter Pills: [ All ] [ Next.js ] [ React ] [ Full-Stack ]   |
+--------------------------------------------------------------+
| [Grid 2 or 3 columns responsive]                             |
| [Card 1]                 [Card 2]                [Card 3]   |
| Image + Hover Overlay    Image + Hover Overlay   Image...   |
| Title + Tech Tags        Title + Tech Tags       ...        |
| [Live] [GitHub] [Modal]  [Live] [GitHub] [Modal]            |
|                                                              |
| [Card 4]                 [Card 5]                           |
+--------------------------------------------------------------+
```

### Page 4: Contact (`/contact`)
```
+--------------------------------------------------------------+
| [Header: Let's Connect]                                      |
+--------------------------------------------------------------+
| [Left Column: Contact Info]    | [Right Column: Form]        |
| - Email: alex@example.com      | Name: [___________________] |
| - LinkedIn: linkedin.com/...   | Email: [__________________] |
| - GitHub: github.com/...       | Message:                    |
| - Location: San Francisco, CA  | [                         ] |
| - Quick response guaranteed    | [                         ] |
|                                | [ Send Message Button ]     |
+--------------------------------------------------------------+
```

### Page 5: 404 Not Found (`/not-found`)
- Clean, humorous, branded error page with a direct button back to Home.

---

## 6. Motion & Micro-Interactions
- Animations use lightweight Framer Motion / CSS transitions.
- All animations respect `@media (prefers-reduced-motion: reduce)`:
  - When reduced motion is preferred, transitions are instant opacity-only fades.
  - Default animations: subtle card elevation (`translateY(-4px)`), smooth mobile menu drop, staggered list entrances.

---

## 7. Accessibility & Performance Goals
- **Lighthouse Targets:** 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO.
- **Color Contrast:** WCAG AA/AAA compliant across all text tokens.
- **Screen Reader Readiness:** Descriptive `aria-label`s on icon-only buttons, form label association (`htmlFor`), valid semantic headings (`h1` -> `h2` -> `h3`).
