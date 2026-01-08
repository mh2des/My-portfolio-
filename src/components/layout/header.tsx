"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
                scrolled
                    ? "py-3 liquid-glass shadow-2xl"
                    : "py-5 bg-transparent"
            )}
        >
            <nav className="container-wide flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-3"
                >
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <span className="font-display font-bold text-primary text-sm">MS</span>
                    </div>
                    <span className="hidden sm:block font-display font-medium text-lg tracking-tight group-hover:text-primary transition-colors duration-300">
                        Mansoor Shokal
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group",
                                    pathname === item.href
                                        ? "text-cyan-400"
                                        : "text-muted-foreground hover:text-white"
                                )}
                            >
                                <span className="relative z-10">{item.label}</span>

                                {/* Hover glow underline */}
                                <span className={cn(
                                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-300",
                                    pathname === item.href
                                        ? "w-full opacity-100"
                                        : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                                )} />

                                {/* Active background pill */}
                                {pathname === item.href && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-primary/15 to-cyan-500/10 rounded-full -z-10 border border-cyan-500/20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                    />
                                )}

                                {/* Hover background */}
                                <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="/cv/Mansoor_Software_CV.pdf"
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border/50 rounded-full hover:border-primary/30 transition-all duration-300"
                    >
                        <Download size={14} />
                        CV
                    </a>
                    <Link
                        href="/contact"
                        className="px-5 py-2.5 text-sm font-medium bg-primary text-background rounded-full hover:bg-primary-hover transition-all duration-300 hover-glow"
                    >
                        Let&apos;s Talk
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-background border border-border rounded-2xl shadow-2xl overflow-hidden z-50"
                        >
                            <nav className="p-4">
                                <ul className="space-y-1">
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={item.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={cn(
                                                    "block py-3 px-4 text-lg font-medium rounded-xl transition-all duration-300",
                                                    pathname === item.href
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="mt-4 pt-4 border-t border-border space-y-2">
                                    <a
                                        href="/cv/Mansoor_Software_CV.pdf"
                                        download
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full py-3 text-center font-medium border border-border rounded-xl hover:border-primary/30 transition-colors"
                                    >
                                        <Download size={16} />
                                        Download CV
                                    </a>
                                    <Link
                                        href="/contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block w-full py-3 text-center font-medium bg-primary text-background rounded-xl hover:bg-primary-hover transition-colors"
                                    >
                                        Let&apos;s Talk
                                    </Link>
                                </div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
