export interface SkillItem {
  name: string;
  level: "Advanced" | "Proficient" | "Familiar";
  proficiency: number; // 0 - 100 for visual indicators
  description: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  categoryKey: "frontend" | "backend" | "tools" | "design";
  description: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    categoryKey: "frontend",
    description: "Architecting responsive, accessible, and performant user interfaces with modern client frameworks.",
    skills: [
      { name: "Next.js (App Router)", level: "Advanced", proficiency: 92, description: "Server components, streaming SSR, dynamic routing, image optimization", featured: true },
      { name: "React 19 / 18", level: "Advanced", proficiency: 94, description: "Hooks, Context API, state management, component lifecycle", featured: true },
      { name: "TypeScript", level: "Advanced", proficiency: 90, description: "Strict typing, generics, interfaces, type-safe APIs", featured: true },
      { name: "Tailwind CSS", level: "Advanced", proficiency: 95, description: "Utility-first architecture, custom design tokens, responsive breakpoints", featured: true },
      { name: "JavaScript (ES6+)", level: "Advanced", proficiency: 95, description: "Async/await, closures, DOM manipulation, functional paradigms", featured: true },
      { name: "HTML5 & Semantic Web", level: "Advanced", proficiency: 98, description: "WCAG accessibility standards, semantic landmarks, microdata", featured: false },
      { name: "CSS3 & Modern Layouts", level: "Advanced", proficiency: 94, description: "CSS Grid, Flexbox, keyframe animations, CSS variables", featured: false },
    ],
  },
  {
    title: "Backend & Databases",
    categoryKey: "backend",
    description: "Building robust API endpoints, server-side data workflows, and relational database schemas.",
    skills: [
      { name: "Python", level: "Proficient", proficiency: 86, description: "FastAPI, script automation, data analysis, object-oriented design", featured: true },
      { name: "SQL & Relational DBs", level: "Proficient", proficiency: 88, description: "PostgreSQL, SQLite, normalization, complex joins, indexing", featured: true },
      { name: "Node.js & Express", level: "Proficient", proficiency: 84, description: "RESTful API creation, middleware patterns, authentication", featured: true },
      { name: "Next.js Route Handlers", level: "Advanced", proficiency: 90, description: "Serverless functions, API rate-limiting, secure headers", featured: false },
      { name: "RESTful API Design", level: "Advanced", proficiency: 92, description: "Resource modeling, HTTP status codes, JSON schema contracts", featured: false },
    ],
  },
  {
    title: "Developer Tools & DevOps",
    categoryKey: "tools",
    description: "Version control workflows, package management, CI/CD pipelines, and cloud deployment.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", proficiency: 93, description: "Branching strategies, pull request reviews, merge conflict resolution", featured: true },
      { name: "Vercel & Cloud Deploy", level: "Advanced", proficiency: 92, description: "Environment configurations, preview builds, edge functions", featured: true },
      { name: "Docker Basics", level: "Familiar", proficiency: 72, description: "Containerization, Dockerfile authoring, multi-container compose", featured: false },
      { name: "Vite & Modern Bundlers", level: "Proficient", proficiency: 88, description: "Hot module replacement, production code splitting", featured: false },
      { name: "Postman & API Testing", level: "Proficient", proficiency: 87, description: "Automated test suites, environment variables, mocking", featured: false },
      { name: "Linux / Bash CLI", level: "Proficient", proficiency: 82, description: "Shell scripting, file permissions, remote SSH workflows", featured: false },
    ],
  },
  {
    title: "UI/UX & Product Design",
    categoryKey: "design",
    description: "Translating human needs into high-fidelity prototypes, user journeys, and coherent design systems.",
    skills: [
      { name: "Figma", level: "Advanced", proficiency: 90, description: "Auto-layout, design tokens, interactive prototyping, component variants", featured: true },
      { name: "Design Systems", level: "Proficient", proficiency: 88, description: "Atomic design, token consistency, accessible color scales", featured: true },
      { name: "Responsive Wireframing", level: "Advanced", proficiency: 94, description: "Mobile-first layouts, responsive grid systems, user flows", featured: false },
      { name: "Web Accessibility (a11y)", level: "Advanced", proficiency: 91, description: "ARIA roles, keyboard navigation, focus management, WCAG 2.1", featured: true },
    ],
  },
];

// Flat list for quick pill tickers and hero badges
export const featuredSkillsList: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "SQL",
  "Git",
  "Figma",
  "PostgreSQL",
  "Web Accessibility",
];
