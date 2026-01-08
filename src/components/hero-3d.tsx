"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { StatCounter } from "@/components/animated-counter";

export function Hero3D() {
    const shouldReduceMotion = useReducedMotion();
    const containerRef = useRef<HTMLDivElement>(null);
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
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />

                {/* Ambient glow orbs */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] orb orb-primary animate-pulse-glow" />
                <div className="absolute top-1/3 right-0 w-[500px] h-[500px] orb orb-cyan opacity-60" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] orb orb-purple opacity-40" style={{ animationDelay: '2s' }} />
            </div>

            {/* 3D Floating Shapes with glow */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 pointer-events-none"
            >
                {/* Glowing rotating cube */}
                <motion.div
                    animate={shouldReduceMotion ? {} : {
                        rotate: 360,
                        y: [0, -30, 0],
                    }}
                    transition={{
                        rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-[15%] right-[12%] w-36 h-36"
                >
                    <div className="w-full h-full rounded-3xl rotate-45 bg-gradient-to-br from-primary/20 to-cyan-400/10 border border-primary/40 shadow-lg shadow-primary/20 backdrop-blur-sm" />
                    <div className="absolute inset-2 rounded-2xl rotate-6 border border-white/10" />
                </motion.div>

                {/* Glowing sphere */}
                <motion.div
                    animate={shouldReduceMotion ? {} : {
                        rotate: -360,
                        y: [0, 25, 0],
                    }}
                    transition={{
                        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                        y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute bottom-[20%] left-[8%] w-28 h-28"
                >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/25 to-primary/15 border border-purple-400/30 shadow-xl shadow-purple-500/20 backdrop-blur-sm" />
                    <div className="absolute inset-3 rounded-full bg-gradient-to-tl from-white/5 to-transparent" />
                </motion.div>

                {/* Glowing triangle */}
                <motion.div
                    animate={shouldReduceMotion ? {} : {
                        rotate: 180,
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-[45%] left-[18%] w-20 h-20"
                >
                    <div
                        className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-primary/10 border border-cyan-400/30 shadow-lg shadow-cyan-400/20 backdrop-blur-sm"
                        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                    />
                </motion.div>

                {/* Small floating dots */}
                <motion.div
                    animate={shouldReduceMotion ? {} : { y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[60%] right-[25%] w-4 h-4 rounded-full bg-primary/50 shadow-lg shadow-primary/40"
                />
                <motion.div
                    animate={shouldReduceMotion ? {} : { y: [0, 12, 0], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[30%] left-[35%] w-3 h-3 rounded-full bg-cyan-400/50 shadow-lg shadow-cyan-400/40"
                />
                <motion.div
                    animate={shouldReduceMotion ? {} : { y: [0, -10, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[35%] right-[40%] w-2 h-2 rounded-full bg-purple-400/60 shadow-lg shadow-purple-400/40"
                />
            </motion.div>

            {/* Main Content */}
            <div className="container-wide relative z-10 pt-24">
                <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Status Badge */}
                    <motion.div
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-subtle mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span className="text-sm text-muted-foreground">Available for new projects</span>
                        <span className="text-border">•</span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin size={12} />
                            Malaysia
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
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
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Specializing in{" "}
                        <span className="text-foreground font-medium">Data Science</span>,{" "}
                        <span className="text-foreground font-medium">AI</span>, and{" "}
                        <span className="text-foreground font-medium">Flutter & Mobile Apps</span>.
                        Building production-grade applications with 1000+ downloads and 5-star ratings.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Link
                            href="/work"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-medium rounded-full hover:bg-primary-hover transition-all duration-300 hover-glow"
                        >
                            <Sparkles size={18} />
                            View My Work
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 glass-card font-medium rounded-full hover:bg-surface-elevated transition-all duration-300"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={shouldReduceMotion ? {} : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border/50"
                    >
                        <StatCounter value="189000+" label="Dictionary Entries" delay={1.4} />
                        <StatCounter value="1000+" label="App Downloads" delay={1.5} />
                        <StatCounter value="8+" label="Production Apps" delay={1.6} />
                        <StatCounter value="97%" label="Performance Gain" delay={1.7} />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-muted-foreground"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ArrowDown size={16} className="text-primary" />
                </motion.div>
            </motion.div>
        </section>
    );
}
