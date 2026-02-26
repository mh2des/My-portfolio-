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
            {/* Top line */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

            <div className="bg-white/50 backdrop-blur-xl border-t border-gray-200/40 py-16">
                <div className="container-wide">
                    <div className="grid gap-12 md:grid-cols-4">
                        {/* Brand & Location */}
                        <div className="md:col-span-2 space-y-4">
                            <Link
                                href="/"
                                className="font-display text-xl font-semibold tracking-tight hover:text-muted-foreground transition-colors"
                            >
                                Mansoor Shokal
                            </Link>
                            <p className="text-muted-foreground max-w-sm">
                                Software Engineer specializing in Data Science, AI,
                                and production-grade mobile & web applications.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin size={14} className="text-foreground" />
                                <span>Based in Malaysia</span>
                            </div>

                            {/* Download CV Button */}
                            <a
                                href="/cv/Mansoor_Software_CV.pdf"
                                download
                                className="inline-flex items-center gap-2 px-4 py-2 mt-2 text-sm font-medium border border-gray-200 rounded-full hover:border-gray-300 hover:text-foreground transition-all"
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
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gray-300 hover:bg-gray-50 transition-all"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-12 pt-8 border-t border-gray-200/60 flex flex-col sm:flex-row justify-between items-center gap-4">
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
