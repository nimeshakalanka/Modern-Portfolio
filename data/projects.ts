export type ProjectCategory = "All" | "Next.js" | "React" | "Full-Stack" | "Tools";

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: ProjectCategory;
  featured: boolean;
  image: string;
  liveUrl: string;
  githubUrl: string;
  highlights: string[];
  role: string;
  year: string;
}

export const projectsData: Project[] = [
  {
    id: "devpulse-dashboard",
    title: "DevPulse Analytics",
    slug: "devpulse-analytics",
    tagline: "Developer Productivity & Engineering Metrics Dashboard",
    description: "A centralized dashboard monitoring pull request velocity, code reviews, and commit frequency with intuitive data visualizations.",
    longDescription: "DevPulse aggregates engineering velocity metrics across distributed teams. Designed with Next.js 15 App Router, TypeScript, and Tailwind CSS, it offers team leads real-time health metrics, automated sprint retrospective summaries, and customizable data filters for fast decision-making.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Lucide React"],
    category: "Next.js",
    featured: true,
    image: "/projects/devpulse.svg",
    liveUrl: "https://example.com/demo/devpulse",
    githubUrl: "https://github.com/example-student/devpulse-analytics",
    highlights: [
      "Sub-100ms dashboard re-rendering utilizing Next.js React Server Components.",
      "Custom responsive charts supporting dark and light themes without re-mount flickers.",
      "Zero layout shift design with accessible ARIA tab and data table navigation.",
    ],
    role: "Full-Stack Engineer & UI Designer",
    year: "2025",
  },
  {
    id: "ecomarket-platform",
    title: "EcoMarket Sustainable Store",
    slug: "ecomarket-platform",
    tagline: "Full-Stack Green Commerce Platform with Real-time Checkout",
    description: "A modern, eco-conscious e-commerce web application featuring dynamic product filtering, cart persistence, and seamless checkout.",
    longDescription: "EcoMarket is an ethical retail showcase built from the ground up to solve slow mobile checkout flows. Featuring client-side state caching with React Context, atomic search filtering across 1,000+ catalog items, and fluid page transitions, the platform achieves a 99 Lighthouse performance score.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    category: "Full-Stack",
    featured: true,
    image: "/projects/ecomarket.svg",
    liveUrl: "https://example.com/demo/ecomarket",
    githubUrl: "https://github.com/example-student/ecomarket-store",
    highlights: [
      "Dynamic multi-parameter filtering (category, price range, carbon footprint rating).",
      "Persistent cart state with local synchronization and stock status validation.",
      "Fully responsive touch gestures optimized for mobile screen viewports.",
    ],
    role: "Lead Frontend Developer",
    year: "2025",
  },
  {
    id: "studysync-ai",
    title: "StudySync AI Workspace",
    slug: "studysync-ai",
    tagline: "Collaborative Study Hub with AI Note Summarization",
    description: "An interactive university study platform enabling real-time collaborative notes, flashcard generation, and markdown editing.",
    longDescription: "StudySync was created to alleviate information overload for university students. It combines a clean Markdown editor with instant AI-powered flashcard extraction and Pomodoro timing sessions. Built with modern TypeScript and responsive UI paradigms for seamless tablet and desktop multitasking.",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "Tailwind CSS"],
    category: "React",
    featured: true,
    image: "/projects/studysync.svg",
    liveUrl: "https://example.com/demo/studysync",
    githubUrl: "https://github.com/example-student/studysync-ai",
    highlights: [
      "WYSIWYG Markdown authoring with live split-screen preview and export to PDF.",
      "Modular micro-service backend written in Python with FastAPI.",
      "Dark mode first design system with keyboard shortcuts for rapid navigation.",
    ],
    role: "Full-Stack Architect",
    year: "2024",
  },
  {
    id: "healthtrack-portal",
    title: "HealthTrack Telehealth",
    slug: "healthtrack-telehealth",
    tagline: "Patient Portal & Medical Appointment Scheduling",
    description: "A secure, accessible medical portal for scheduling doctor visits, managing clinical records, and sending secure messages.",
    longDescription: "HealthTrack is a patient-centric portal engineered to meet strict accessibility (WCAG 2.1 AA) and responsive UX guidelines. Designed with high-contrast color choices, clear typography hierarchy, and step-by-step appointment booking wizards.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SQL", "Figma"],
    category: "Full-Stack",
    featured: false,
    image: "/projects/healthtrack.svg",
    liveUrl: "https://example.com/demo/healthtrack",
    githubUrl: "https://github.com/example-student/healthtrack-portal",
    highlights: [
      "100% WCAG 2.1 AA compliance with screen-reader tested booking flows.",
      "Multi-step modal booking form with real-time slot conflict detection.",
      "Responsive layout transitioning gracefully from 360px mobile to 4K displays.",
    ],
    role: "UI/UX Designer & Frontend Developer",
    year: "2024",
  },
  {
    id: "algovisualizer-engine",
    title: "AlgoVisualizer Pro",
    slug: "algovisualizer-pro",
    tagline: "Interactive Graph & Pathfinding Algorithm Visualizer",
    description: "An educational web tool rendering real-time execution of Dijkstra, A*, DFS, and BFS algorithms on custom interactive grid mazes.",
    longDescription: "AlgoVisualizer helps computer science and information systems students visualize abstract graph algorithms. Users can draw custom obstacles, adjust playback velocity, step forward/backward frame-by-frame, and inspect time complexity data in real time.",
    technologies: ["TypeScript", "HTML5 Canvas", "CSS3", "React"],
    category: "Tools",
    featured: false,
    image: "/projects/algovisualizer.svg",
    liveUrl: "https://example.com/demo/algovisualizer",
    githubUrl: "https://github.com/example-student/algovisualizer-pro",
    highlights: [
      "Hardware-accelerated 60 FPS canvas animations for pathfinding algorithms.",
      "Interactive maze generation with recursive division and random weight assignments.",
      "Zero external animation runtime overhead, running purely on TypeScript and requestAnimationFrame.",
    ],
    role: "Solo Developer",
    year: "2023",
  },
];

export const projectCategories: ProjectCategory[] = ["All", "Next.js", "React", "Full-Stack", "Tools"];
