"use client";

import { motion, useReducedMotion } from "framer-motion";

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

    const orbOpacity = {
        default: { primary: 0.08, secondary: 0.05 },
        subtle: { primary: 0.05, secondary: 0.03 },
        intense: { primary: 0.12, secondary: 0.08 },
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Soft gradient orbs */}
            <div
                className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] animate-float"
                style={{
                    background: `radial-gradient(circle, rgba(79, 209, 197, ${orbOpacity[variant].primary}) 0%, transparent 70%)`
                }}
            />
            <div
                className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-[100px] animate-float"
                style={{
                    background: `radial-gradient(circle, rgba(99, 179, 237, ${orbOpacity[variant].secondary}) 0%, transparent 70%)`,
                    animationDelay: "-3s"
                }}
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
                style={{
                    background: `radial-gradient(circle, rgba(159, 122, 234, ${orbOpacity[variant].secondary * 0.5}) 0%, transparent 60%)`
                }}
            />

            {/* Grid Pattern */}
            {showGrid && (
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)`,
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
                        <div className="w-full h-full border border-gray-300/40 rounded-2xl rotate-45 bg-white/20" />
                    </motion.div>

                    <motion.div
                        animate={{ rotate: -360, y: [0, 15, 0] }}
                        transition={{
                            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                            y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute bottom-[30%] left-[5%] w-16 h-16 md:w-24 md:h-24"
                    >
                        <div className="w-full h-full border border-gray-300/30 rounded-full bg-white/15" />
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
                            className="w-full h-full border border-gray-300/30 bg-white/10"
                            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                        />
                    </motion.div>
                </>
            )}
        </div>
    );
}
