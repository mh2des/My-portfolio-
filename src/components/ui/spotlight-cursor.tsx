"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function SpotlightCursor() {
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
    const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

    // Separate springs for the inner dot (tighter follow)
    const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
    const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

    useEffect(() => {
        // Only show on desktop
        const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 200);
            mouseY.set(e.clientY - 200);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed inset-0 z-30 pointer-events-none"
            style={{ mixBlendMode: "screen" }}
        >
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full opacity-30"
                style={{
                    x: springX,
                    y: springY,
                    background: `radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, rgba(13, 148, 136, 0.05) 40%, transparent 70%)`,
                    willChange: "transform",
                }}
            />

            {/* Secondary smaller intense glow */}
            <motion.div
                className="absolute w-4 h-4 rounded-full bg-cyan-400 blur-sm z-50 hidden lg:block opacity-50"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: 198,
                    translateY: 198,
                    willChange: "transform",
                }}
            />
        </motion.div>
    );
}

