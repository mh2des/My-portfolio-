"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface PageBackgroundProps {
    variant?: "default" | "subtle" | "intense";
    showGrid?: boolean;
    showShapes?: boolean;
}

export function PageBackground({
    variant = "default",
    showGrid = true,
    showShapes = true
}: PageBackgroundProps) {
    const shouldReduceMotion = useReducedMotion();
    const [mounted, setMounted] = useState(false);
    const [stars, setStars] = useState<Array<{ top: number; left: number; duration: number; delay: number }>>([]);

    useEffect(() => {
        setMounted(true);
        const newStars = Array.from({ length: 100 }, () => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: 1.5 + Math.random() * 3,
            delay: Math.random() * 5
        }));
        setStars(newStars);
    }, []);

    const orbOpacity = {
        default: { primary: 0.15, secondary: 0.1 },
        subtle: { primary: 0.08, secondary: 0.05 },
        intense: { primary: 0.25, secondary: 0.15 },
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Gradient Orbs */}
            <div
                className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] animate-float"
                style={{
                    background: `radial-gradient(circle, rgba(13, 148, 136, ${orbOpacity[variant].primary}) 0%, transparent 70%)`
                }}
            />
            <div
                className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-[100px] animate-float"
                style={{
                    background: `radial-gradient(circle, rgba(13, 148, 136, ${orbOpacity[variant].secondary}) 0%, transparent 70%)`,
                    animationDelay: "-3s"
                }}
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
                style={{
                    background: `radial-gradient(circle, rgba(13, 148, 136, ${orbOpacity[variant].secondary * 0.5}) 0%, transparent 60%)`
                }}
            />

            {/* Starfield Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-70 animate-flicker" style={{ animationDelay: '0s' }} />
                <div className="absolute top-1/4 left-1/3 w-[2px] h-[2px] bg-white rounded-full opacity-60 animate-flicker" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-3/4 w-[3px] h-[3px] bg-cyan-200 rounded-full opacity-50 animate-flicker" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-1/3 right-1/4 w-[2px] h-[2px] bg-white rounded-full opacity-40 animate-flicker" style={{ animationDelay: '3s' }} />
                <div className="absolute bottom-10 right-10 w-1 h-1 bg-purple-200 rounded-full opacity-60 animate-flicker" style={{ animationDelay: '4s' }} />

                {/* Random smaller stars */}
                {stars.map((star, i) => (
                    <div
                        key={i}
                        className="absolute w-[1px] h-[1px] bg-white rounded-full opacity-80"
                        style={{
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            animation: `flicker ${star.duration}s infinite ${star.delay}s`
                        }}
                    />
                ))}
            </div>

            {/* Grid Pattern */}
            {showGrid && (
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
            )}

            {/* Floating Shapes */}
            {showShapes && !shouldReduceMotion && (
                <>
                    <motion.div
                        animate={{ rotate: 360, y: [0, -15, 0] }}
                        transition={{
                            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute top-[20%] right-[10%] w-24 h-24 md:w-32 md:h-32"
                    >
                        <div className="w-full h-full border border-primary/20 rounded-2xl rotate-45 backdrop-blur-sm bg-primary/5" />
                    </motion.div>

                    <motion.div
                        animate={{ rotate: -360, y: [0, 15, 0] }}
                        transition={{
                            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                            y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute bottom-[30%] left-[5%] w-16 h-16 md:w-24 md:h-24"
                    >
                        <div className="w-full h-full border border-primary/15 rounded-full backdrop-blur-sm bg-primary/5" />
                    </motion.div>

                    <motion.div
                        animate={{ rotate: 180, scale: [1, 1.1, 1] }}
                        transition={{
                            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute top-[60%] right-[20%] w-12 h-12 md:w-16 md:h-16"
                    >
                        <div
                            className="w-full h-full border border-primary/20 backdrop-blur-sm bg-primary/5"
                            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                        />
                    </motion.div>

                    <motion.div
                        animate={{ rotate: -180, y: [0, -10, 0] }}
                        transition={{
                            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
                            y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute top-[40%] left-[15%] w-10 h-10 md:w-14 md:h-14"
                    >
                        <div className="w-full h-full border border-primary/10 rounded-lg rotate-12 backdrop-blur-sm bg-primary/3" />
                    </motion.div>
                </>
            )}

            {/* Noise overlay */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
