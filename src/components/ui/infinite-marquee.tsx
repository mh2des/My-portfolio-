"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface InfiniteMarqueeProps {
    children: ReactNode;
    speed?: number;
    direction?: "left" | "right";
    pauseOnHover?: boolean;
    className?: string;
}

export function InfiniteMarquee({
    children,
    speed = 30,
    direction = "left",
    pauseOnHover = true,
    className = "",
}: InfiniteMarqueeProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div
            ref={ref}
            className={`relative flex overflow-hidden ${className}`}
            style={{
                maskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
        >
            <motion.div
                className={`flex shrink-0 gap-8 ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
                animate={isInView ? { x: direction === "left" ? "-50%" : "0%" } : {}}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
                style={{ x: direction === "left" ? "0%" : "-50%" }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}

interface MarqueeItemProps {
    children: ReactNode;
    className?: string;
}

export function MarqueeItem({ children, className = "" }: MarqueeItemProps) {
    return (
        <div
            className={`flex items-center justify-center shrink-0 ${className}`}
        >
            {children}
        </div>
    );
}
