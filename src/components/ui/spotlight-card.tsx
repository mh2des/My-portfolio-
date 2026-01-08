"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const SpotlightCard = ({
    children,
    className = "",
    spotlightColor = "rgba(14, 165, 233, 0.25)", // Cyan default
}: {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group relative border border-white/10 overflow-hidden rounded-3xl",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Gradient overlay (Internal Glow) */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
                }}
            />

            {/* Border Highlight (The "Shine" on border) */}
            {/* We simulate this by having an absolute div with gradient that is masked to the border area if possible, 
                or just a strong radial gradient behind the content if content creates the inner shape. 
                But for glass cards, we can overlay a border stroke. */}

            <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.3),
              transparent 80%
            )
          `,
                    maskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black) border-box`,
                    maskComposite: `exclude`,
                    WebkitMaskComposite: `xor`,
                    padding: "1px", // The border width
                }}
            />

            {/* Content */}
            <div className="relative h-full">
                {children}
            </div>
        </div>
    );
};
