"use client";

import { useRef, useEffect, useState } from "react";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
    useSpring,
    useInView,
} from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { StatCounter } from "@/components/animated-counter";
import { TextReveal } from "@/components/ui/text-reveal";
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
    "AWS",
    "Node.js",
    "GraphQL",
    "Pandas",
];

export function Hero3D() {
    const shouldReduceMotion = useReducedMotion();
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(heroRef, { once: true });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    // Smooth spring for parallax elements
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const mouseX = useSpring(0, springConfig);
    const mouseY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX - innerWidth / 2) / innerWidth;
            const y = (clientY - innerHeight / 2) / innerHeight;
            mouseX.set(x * 50);
            mouseY.set(y * 50);
            setMousePosition({ x: clientX, y: clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated Background Gradient */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(13, 148, 136, 0.15) 0%, transparent 50%)`,
                }}
            />

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Enhanced gradient orbs with mouse interaction */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
                    style={{
                        x: mouseX,
                        y: mouseY,
                    }}
                    animate={
                        shouldReduceMotion
                            ? {}
                            : {
                                scale: [1, 1.1, 1],
                            }
                    }
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-400/15 rounded-full blur-[100px]"
                    style={{
                        x: useTransform(mouseX, (v) => -v * 0.5),
                        y: useTransform(mouseY, (v) => -v * 0.5),
                    }}
                    animate={
                        shouldReduceMotion
                            ? {}
                            : {
                                scale: [1, 1.15, 1],
                            }
                    }
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px]"
                    animate={
                        shouldReduceMotion
                            ? {}
                            : {
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.15, 0.1],
                            }
                    }
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />

                {/* Animated line decorations */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                    <motion.line
                        x1="10%"
                        y1="20%"
                        x2="30%"
                        y2="40%"
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.line
                        x1="70%"
                        y1="15%"
                        x2="90%"
                        y2="35%"
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 2, delay: 1.5 }}
                    />
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#22D3EE" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* 3D Floating Shapes with enhanced parallax */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
                {/* Glowing rotating cube */}
                <motion.div
                    style={{
                        x: useTransform(mouseX, (v) => v * 2),
                        y: useTransform(mouseY, (v) => v * 2),
                    }}
                    animate={
                        shouldReduceMotion
                            ? {}
                            : {
                                rotate: 360,
                                y: [0, -30, 0],
                            }
                    }
                    transition={{
                        rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute top-[15%] right-[12%] w-36 h-36"
                >
                    <div className="w-full h-full rounded-3xl rotate-45 bg-gradient-to-br from-primary/20 to-cyan-400/10 border border-primary/40 shadow-lg shadow-primary/20 backdrop-blur-sm" />
                    <div className="absolute inset-2 rounded-2xl rotate-6 border border-white/10" />
                </motion.div>

                {/* Glowing sphere */}
                <motion.div
                    style={{
                        x: useTransform(mouseX, (v) => -v * 1.5),
                        y: useTransform(mouseY, (v) => -v * 1.5),
                    }}
                    animate={
                        shouldReduceMotion
                            ? {}
                            : {
                                rotate: -360,
                                y: [0, 25, 0],
                            }
                    }
                    transition={{
                        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                        y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute bottom-[20%] left-[8%] w-28 h-28"
                >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/25 to-primary/15 border border-purple-400/30 shadow-xl shadow-purple-500/20 backdrop-blur-sm" />
                    <div className="absolute inset-3 rounded-full bg-gradient-to-tl from-white/5 to-transparent" />
                </motion.div>

                {/* Glowing triangle */}
                <motion.div
                    style={{
                        x: useTransform(mouseX, (v) => v * 1),
                        y: useTransform(mouseY, (v) => v * 1),
                    }}
                    animate={
                        shouldReduceMotion
                            ? {}
                            : {
                                rotate: 180,
                                scale: [1, 1.15, 1],
                            }
                    }
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute top-[45%] left-[18%] w-20 h-20"
                >
                    <div
                        className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-primary/10 border border-cyan-400/30 shadow-lg shadow-cyan-400/20 backdrop-blur-sm"
                        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                    />
                </motion.div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                            background: i % 2 === 0 ? "#0D9488" : "#22D3EE",
                            boxShadow:
                                i % 2 === 0
                                    ? "0 0 20px #0D9488, 0 0 40px #0D948880"
                                    : "0 0 20px #22D3EE, 0 0 40px #22D3EE80",
                        }}
                        animate={
                            shouldReduceMotion
                                ? {}
                                : {
                                    y: [0, -20 - i * 5, 0],
                                    opacity: [0.4, 0.8, 0.4],
                                    scale: [1, 1.2, 1],
                                }
                        }
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </motion.div>

            {/* Main Content */}
            <motion.div style={{ scale }} className="container-wide relative z-10 pt-24">
                <motion.div
                    ref={heroRef}
                    initial={shouldReduceMotion ? {} : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Status Badge */}
                    <motion.div
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
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

                    {/* Main Title with Text Reveal */}
                    <motion.h1
                        initial={shouldReduceMotion ? {} : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
                    >
                        <span className="block overflow-hidden">
                            <motion.span
                                className="block"
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : {}}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.8,
                                    ease: [0.215, 0.61, 0.355, 1],
                                }}
                            >
                                Data Scientist
                            </motion.span>
                        </span>
                        <span className="block mt-2 overflow-hidden">
                            <motion.span
                                className="block"
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : {}}
                                transition={{
                                    delay: 0.7,
                                    duration: 0.8,
                                    ease: [0.215, 0.61, 0.355, 1],
                                }}
                            >
                                <span className="text-gradient">&</span>{" "}
                                <span className="text-muted-foreground">Software Engineer</span>
                            </motion.span>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
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
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Link
                            href="/work"
                            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-medium rounded-full overflow-hidden transition-all duration-300"
                            data-magnetic="true"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Sparkles size={18} />
                                View My Work
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6 }}
                            />
                        </Link>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-8 py-4 glass-card font-medium rounded-full hover:bg-surface-elevated transition-all duration-300 relative overflow-hidden"
                            data-magnetic="true"
                        >
                            <span className="relative z-10">Get in Touch</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6 }}
                            />
                        </Link>
                    </motion.div>

                    {/* Tech Stack Marquee */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="mt-16"
                    >
                        <InfiniteMarquee speed={40} className="py-4">
                            {techStack.map((tech, index) => (
                                <MarqueeItem key={index} className="px-6">
                                    <span className="text-sm font-mono text-muted-foreground/60 hover:text-primary transition-colors">
                                        {tech}
                                    </span>
                                </MarqueeItem>
                            ))}
                        </InfiniteMarquee>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={shouldReduceMotion ? {} : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border/50"
                    >
                        <StatCounter value="189000+" label="Dictionary Entries" delay={1.6} />
                        <StatCounter value="1000+" label="App Downloads" delay={1.7} />
                        <StatCounter value="8+" label="Production Apps" delay={1.8} />
                        <StatCounter value="97%" label="Performance Gain" delay={1.9} />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-muted-foreground"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <motion.div
                        className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
                    >
                        <motion.div
                            className="w-1 h-2 bg-primary rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
