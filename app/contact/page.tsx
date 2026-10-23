"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { ContactForm } from "@/components/ContactForm";
import {
  Mail,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* 1. Page Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
          Contact & Inquiries
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Whether you have an internship opportunity, project collaboration, or want to discuss modern web architecture, I look forward to connecting with you.
        </p>
      </div>

      {/* 2. Main Two-Column Contact Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Info & Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Quick Card */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
              Direct Email
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Direct inbox monitored daily. Feel free to copy or click to send an email.
            </p>
            <div className="pt-2 flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80">
              <a
                href={`mailto:${profileData.email}`}
                className="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 truncate hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {profileData.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium animate-in fade-in">
                ✓ Email copied to clipboard!
              </p>
            )}
          </div>

          {/* Location & Response Guarantee */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase">
                <MapPin className="w-4 h-4" />
                <span>Location</span>
              </div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {profileData.location}
              </p>
              <p className="text-[11px] text-slate-500">Pacific Time (UTC-7)</p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase">
                <Clock className="w-4 h-4" />
                <span>Response Time</span>
              </div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                &lt; 24 Hours
              </p>
              <p className="text-[11px] text-slate-500">Fast turnaround on student inquiries</p>
            </div>
          </div>

          {/* Professional Networks */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-3">
            <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
              Professional Profiles
            </h3>
            <div className="space-y-2.5">
              <a
                href={profileData.socialLinks.find((s) => s.icon === "linkedin")?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 bg-slate-50/50 dark:bg-slate-950/40 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all text-xs sm:text-sm"
              >
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">Connect on LinkedIn</span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {profileData.socialLinks.find((s) => s.icon === "linkedin")?.username}
                </span>
              </a>

              <a
                href={profileData.socialLinks.find((s) => s.icon === "github")?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 bg-slate-50/50 dark:bg-slate-950/40 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all text-xs sm:text-sm"
              >
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                  <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                  <span className="font-medium">Explore GitHub Profile</span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {profileData.socialLinks.find((s) => s.icon === "github")?.username}
                </span>
              </a>
            </div>
          </div>

          {/* Privacy & Anti-Spam Guarantee */}
          <div className="flex items-start gap-2.5 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 text-xs text-slate-600 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
            <span>
              Your information is confidential and will never be shared. Form submissions include anti-spam honeypot defense.
            </span>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
