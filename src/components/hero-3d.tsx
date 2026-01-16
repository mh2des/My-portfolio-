"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
    useInView,
} from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { StatCounter } from "@/components/animated-counter";
import {
    InfiniteMarquee,
    MarqueeItem,
} from "@/components/ui/infinite-marquee";

const techStack = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "React",
    "Next.js",
    "TypeScript",
    "Flutter",
    "Dart",
    "FastAPI",
    "PostgreSQL",
    "Firebase",
    "Docker",
];

export function Hero3D() {
    const shouldReduceMotion = useReducedMotion();
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(heroRef, { once: true });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Static Background Gradient - no animation */}
            <div
                className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"
                style={{
                    background: "radial-gradient(circle at 50% 30%, rgba(13, 148, 136, 0.15) 0%, transparent 50%)",
                }}
            />

            {/* Simplified Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Single gradient orb - CSS animation instead of JS */}
                <div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] animate-pulse-slow"
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[80px] animate-pulse-slow"
                    style={{ animationDelay: "2s" }}
                />

                {/* Grid pattern - static */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {/* Simplified floating shapes - CSS animations only */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
                {/* Single rotating shape */}
                {!shouldReduceMotion && (
                    <div
                        className="absolute top-[15%] right-[12%] w-28 h-28 animate-float"
                    >
                        <div className="w-full h-full rounded-3xl rotate-45 bg-gradient-to-br from-primary/15 to-cyan-400/5 border border-primary/30 backdrop-blur-sm" />
                    </div>
                )}
            </motion.div>

            {/* Main Content */}
            <div className="container-wide relative z-10 pt-24">
                <motion.div
                    ref={heroRef}
                    initial={shouldReduceMotion ? {} : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Status Badge */}
                    <motion.div
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-subtle mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span className="text-sm text-muted-foreground">
                            Available for new projects
                        </span>
                        <span className="text-border">•</span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin size={12} />
                            Malaysia
                        </span>
                    </motion.div>

                    {/* Main Title - simplified animation */}
                    <motion.h1
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
                    >
                        <span className="block">Data Scientist</span>
                        <span className="block mt-2">
                            <span className="text-gradient">&</span>{" "}
                            <span className="text-muted-foreground">Software Engineer</span>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Specializing in{" "}
                        <span className="text-foreground font-medium">Data Science</span>,{" "}
                        <span className="text-foreground font-medium">AI</span>, and{" "}
                        <span className="text-foreground font-medium">
                            Flutter & Mobile Apps
                        </span>
                        . Building production-grade applications with 1000+ downloads and
                        5-star ratings.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Link
                            href="/work"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-medium rounded-full hover:bg-primary-hover transition-colors duration-200"
                        >
                            <Sparkles size={18} />
                            View My Work
                        </Link>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-8 py-4 glass-card font-medium rounded-full hover:bg-surface-elevated transition-colors duration-200"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>

                    {/* Tech Stack Marquee - only render if in view */}
                    {isInView && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="mt-16"
                        >
                            <InfiniteMarquee speed={50} className="py-4">
                                {techStack.map((tech, index) => (
                                    <MarqueeItem key={index} className="px-6">
                                        <span className="text-sm font-mono text-muted-foreground/60">
                                            {tech}
                                        </span>
                                    </MarqueeItem>
                                ))}
                            </InfiniteMarquee>
                        </motion.div>
                    )}

                    {/* Stats */}
                    <motion.div
                        initial={shouldReduceMotion ? {} : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border/50"
                    >
                        <StatCounter value="189000+" label="Dictionary Entries" delay={0.9} />
                        <StatCounter value="1000+" label="App Downloads" delay={1.0} />
                        <StatCounter value="8+" label="Production Apps" delay={1.1} />
                        <StatCounter value="97%" label="Performance Gain" delay={1.2} />
                    </motion.div>
                </motion.div>
            </div>

            {/* Simplified Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
