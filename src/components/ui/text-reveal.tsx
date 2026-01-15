"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    duration?: number;
    staggerChildren?: number;
    once?: boolean;
}

const letterVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
        rotateX: -90,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
    },
};

export function TextReveal({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    staggerChildren = 0.03,
    once = true,
}: TextRevealProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const words = children.split(" ");

    return (
        <motion.span
            ref={ref}
            className={`inline-block ${className}`}
            initial="hidden"
            animate={controls}
            transition={{
                delayChildren: delay,
                staggerChildren: staggerChildren,
            }}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            className="inline-block"
                            variants={letterVariants}
                            transition={{
                                duration,
                                ease: [0.215, 0.61, 0.355, 1],
                            }}
                            style={{ transformOrigin: "bottom" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                    {wordIndex < words.length - 1 && (
                        <span className="inline-block">&nbsp;</span>
                    )}
                </span>
            ))}
        </motion.span>
    );
}

interface WordRevealProps {
    children: string;
    className?: string;
    delay?: number;
    staggerChildren?: number;
    once?: boolean;
}

const wordVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
    },
};

export function WordReveal({
    children,
    className = "",
    delay = 0,
    staggerChildren = 0.1,
    once = true,
}: WordRevealProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once, margin: "-50px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const words = children.split(" ");

    return (
        <motion.span
            ref={ref}
            className={`inline-block ${className}`}
            initial="hidden"
            animate={controls}
            transition={{
                delayChildren: delay,
                staggerChildren,
            }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="inline-block mr-[0.25em]"
                    variants={wordVariants}
                    transition={{
                        duration: 0.5,
                        ease: [0.215, 0.61, 0.355, 1],
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}

interface LineRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    once?: boolean;
}

export function LineReveal({
    children,
    className = "",
    delay = 0,
    once = true,
}: LineRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-50px" });

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{
                    duration: 0.8,
                    delay,
                    ease: [0.215, 0.61, 0.355, 1],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
