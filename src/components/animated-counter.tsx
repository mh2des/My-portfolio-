"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    className?: string;
}

export function AnimatedCounter({
    value,
    suffix = "",
    prefix = "",
    duration = 2,
    className = "",
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    const spring = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    const display = useTransform(spring, (current) =>
        Math.round(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView && !hasAnimated) {
            spring.set(value);
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated, spring, value]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            <motion.span>{display}</motion.span>
            {suffix}
        </span>
    );
}

interface StatCounterProps {
    value: string;
    label: string;
    delay?: number;
}

export function StatCounter({ value, label, delay = 0 }: StatCounterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Parse value to extract number and suffix
    const match = value.match(/^(\d+(?:,\d+)*(?:\.\d+)?)(.*)/);
    const numericValue = match ? parseFloat(match[1].replace(/,/g, "")) : 0;
    const suffix = match ? match[2] : "";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration: 0.5 }}
            className="text-center"
        >
            <div className="text-3xl sm:text-4xl font-display font-bold text-gradient mb-1">
                <AnimatedCounter value={numericValue} suffix={suffix} duration={2.5} />
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                {label}
            </div>
        </motion.div>
    );
}
