import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profileData } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexmorgan-portfolio.vercel.app"),
  title: {
    default: `${profileData.name} — ${profileData.title}`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.shortBio,
  keywords: [
    "Portfolio",
    "Information Systems",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Full-Stack Developer",
    "Software Engineering Undergraduate",
    "Alex Morgan",
  ],
  authors: [{ name: profileData.name, url: "https://github.com/example-student" }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan-portfolio.vercel.app",
    title: `${profileData.name} — ${profileData.title}`,
    description: profileData.shortBio,
    siteName: `${profileData.name} Portfolio`,
    images: [
      {
        url: "/avatar.svg",
        width: 1200,
        height: 630,
        alt: `${profileData.name} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} — ${profileData.title}`,
    description: profileData.shortBio,
    images: ["/avatar.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased bg-slate-50 dark:bg-[#090D16] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg font-medium text-sm"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
