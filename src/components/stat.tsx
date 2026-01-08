"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatProps {
    value: string;
    label: string;
    className?: string;
}

export function Stat({ value, label, className }: StatProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={cn("text-center", className)}
        >
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                {value}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{label}</div>
        </motion.div>
    );
}

interface StatBarProps {
    stats: Array<{ value: string; label: string }>;
    className?: string;
}

export function StatBar({ stats, className }: StatBarProps) {
    return (
        <div
            className={cn(
                "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8 px-6 bg-secondary/50 rounded-lg border border-border",
                className
            )}
        >
            {stats.map((stat, index) => (
                <Stat key={index} value={stat.value} label={stat.label} />
            ))}
        </div>
    );
}
