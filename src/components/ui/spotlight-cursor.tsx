"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function SpotlightCursor() {
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 200);
            mouseY.set(e.clientY - 200);

            // Check if hovering over clickable elements
            const target = e.target as HTMLElement;
            const isClickable = target.closest("a, button, [role='button'], input, textarea");
            setIsHovering(!!isClickable);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed inset-0 z-30 pointer-events-none"
            style={{ mixBlendMode: "screen" }}
        >
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full opacity-30"
                style={{
                    x: mouseX,
                    y: mouseY,
                    background: `radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, rgba(13, 148, 136, 0.05) 40%, transparent 70%)`
                }}
            />

            {/* Secondary smaller intense glow just for the cursor center */}
            <motion.div
                className="absolute w-4 h-4 rounded-full bg-cyan-400 blur-sm z-50 opacity-0 lg:opacity-50"
                style={{
                    x: useSpring(mouseX, { stiffness: 1000, damping: 50 }), // Slightly delayed/different spring
                    y: useSpring(mouseY, { stiffness: 1000, damping: 50 }),
                    translateX: 198, // Center offset
                    translateY: 198,
                    scale: isHovering ? 2.5 : 1,
                    mixBlendMode: "screen"
                }}
            />
        </motion.div>
    );
}
