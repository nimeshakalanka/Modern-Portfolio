export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  honors?: string;
  highlights: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  username: string;
  icon: "github" | "linkedin" | "mail" | "twitter";
}

export interface Profile {
  name: string;
  preferredName?: string;
  title: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  email: string;
  phone?: string;
  availability: string;
  education: Education[];
  socialLinks: SocialLink[];
  resumeUrl: string;
}

export const profileData: Profile = {
  // Replace with your real name or keep as the default for grading demo
  name: "Alex Morgan",
  preferredName: "Alex",
  title: "Information Systems Undergraduate & Web Developer",
  tagline: "Building scalable, accessible, and human-centered web experiences with modern engineering practices.",
  shortBio: "Information Systems undergraduate and full-stack web developer passionate about architecting intuitive digital products with clean code. Focused on Next.js, TypeScript, and modern UI engineering, I transform complex requirements into seamless, high-performance web applications.",
  fullBio: [
    "Hello! I'm an Information Systems undergraduate with a dedicated focus on modern web engineering, human-computer interaction, and software architecture. My journey combines deep technical problem-solving with a keen eye for visual design and usability.",
    "Throughout my academic studies and personal projects, I have engineered full-stack applications leveraging Next.js, React, TypeScript, Python, and SQL. I believe great software should not only execute reliably under the hood but also provide an effortlessly delightful user experience.",
    "When I'm not writing code or refining component libraries in Figma, I actively contribute to student tech chapters, mentor peers in web development fundamentals, and explore modern cloud native tooling and micro-animations."
  ],
  location: "San Francisco, CA / Remote",
  email: "alex.morgan.dev@example.com",
  phone: "+1 (555) 019-2834",
  availability: "Open to Summer 2026 Internships & Junior Web Development Roles",
  resumeUrl: "/resume.pdf",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/example-student",
      username: "@alexmorgan-dev",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/example-student",
      username: "in/alexmorgan-dev",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:alex.morgan.dev@example.com",
      username: "alex.morgan.dev@example.com",
      icon: "mail",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science",
      field: "Information Systems & Computer Science",
      institution: "State University of Technology",
      location: "San Francisco, CA",
      period: "2022 — 2026 (Expected)",
      gpa: "3.85 / 4.00",
      honors: "Dean's Honor List (All Semesters)",
      highlights: [
        "Relevant Coursework: Web Application Architecture, Relational Database Design, Data Structures & Algorithms, Human-Computer Interaction, Systems Analysis & Design.",
        "Undergraduate Research Assistant: Assisted in benchmarking web performance metrics for responsive client-side rendering.",
        "Lead Webmaster: Society for Information Systems Student Chapter.",
      ],
    },
    {
      degree: "High School Diploma",
      field: "Advanced STEM & Computer Science Electives",
      institution: "Northfield High School",
      location: "San Jose, CA",
      period: "2018 — 2022",
      gpa: "3.92 / 4.00",
      highlights: [
        "President, Computing & Robotics Club.",
        "AP Computer Science A (Score 5/5), AP Calculus BC.",
      ],
    },
  ],
};
