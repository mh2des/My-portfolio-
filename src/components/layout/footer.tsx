"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/mh2des", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mansoor-shokla-1a9781353", label: "LinkedIn" },
    { icon: Mail, href: "mailto:Mansourshakla@gmail.com", label: "Email" },
];

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Footer() {
    return (
        <footer className="relative z-10 mt-20">
            {/* Top gradient line */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="liquid-glass rounded-t-3xl py-16">
                <div className="container-wide">
                    <div className="grid gap-12 md:grid-cols-4">
                        {/* Brand & Location */}
                        <div className="md:col-span-2 space-y-4">
                            <Link
                                href="/"
                                className="font-display text-xl font-semibold tracking-tight hover:text-primary transition-colors"
                            >
                                Mansoor Shokal
                            </Link>
                            <p className="text-muted-foreground max-w-sm">
                                Software Engineer specializing in Data Science, AI,
                                and production-grade mobile & web applications.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin size={14} className="text-primary" />
                                <span>Based in Malaysia</span>
                            </div>

                            {/* Download CV Button */}
                            <a
                                href="/cv/Mansoor_Software_CV.pdf"
                                download
                                className="inline-flex items-center gap-2 px-4 py-2 mt-2 text-sm font-medium border border-border rounded-full hover:border-primary/30 hover:text-primary transition-all"
                            >
                                <Download size={14} />
                                Download CV
                            </a>
                        </div>

                        {/* Navigation */}
                        <div>
                            <p className="font-semibold mb-4">Navigation</p>
                            <ul className="space-y-2">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <p className="font-semibold mb-4">Connect</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>

                            {/* Availability Badge */}
                            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs text-green-400">Available for work</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Mansoor Shokal. All rights reserved.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Built with Next.js & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
