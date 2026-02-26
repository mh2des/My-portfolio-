"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function SpotlightCursor() {
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
    const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

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
        >
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full opacity-20"
                style={{
                    x: springX,
                    y: springY,
                    background: `radial-gradient(circle, rgba(79, 209, 197, 0.08) 0%, rgba(99, 179, 237, 0.03) 40%, transparent 70%)`,
                    willChange: "transform",
                }}
            />
        </motion.div>
    );
}
