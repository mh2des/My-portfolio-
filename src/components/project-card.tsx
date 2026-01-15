"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Project {
    slug: string;
    title: string;
    description: string;
    categories: string[];
    stack: string[];
    metrics?: string;
    image?: string;
    gallery?: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

interface ProjectCardProps {
    project: Project;
    index?: number;
    className?: string;
}

export function ProjectCard({
    project,
    index = 0,
    className,
}: ProjectCardProps) {
    const shouldReduceMotion = useReducedMotion();
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position for 3D tilt effect
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

    // Gradient position for animated border
    const gradientX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
    const gradientY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || shouldReduceMotion) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
            }}
            className={cn("group h-full", className)}
        >
            <motion.div
                style={{
                    rotateX: shouldReduceMotion ? 0 : rotateX,
                    rotateY: shouldReduceMotion ? 0 : rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="h-full"
            >
                <Link href={`/work/${project.slug}`} className="block h-full">
                    {/* Card Container with animated border */}
                    <div className="relative">
                        {/* Animated gradient border */}
                        <motion.div
                            className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                background: isHovered
                                    ? `radial-gradient(circle at ${gradientX.get()}% ${gradientY.get()}%, rgba(34, 211, 238, 0.6), rgba(13, 148, 136, 0.3), transparent 50%)`
                                    : "none",
                            }}
                        />

                        {/* Image Container */}
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl liquid-glass project-card transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20">
                            {/* Category badges */}
                            <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                                {project.categories.map((cat) => (
                                    <Badge
                                        key={cat}
                                        variant="secondary"
                                        className="backdrop-blur-md bg-background/50 border-white/10 text-xs font-medium"
                                    >
                                        {cat}
                                    </Badge>
                                ))}
                            </div>

                            {/* Project image with parallax */}
                            {project.image ? (
                                <motion.div
                                    className="absolute inset-0"
                                    style={{
                                        x: shouldReduceMotion ? 0 : useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
                                        y: shouldReduceMotion ? 0 : useTransform(mouseY, [-0.5, 0.5], [-10, 10]),
                                    }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </motion.div>
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-purple-500/10">
                                    <motion.span
                                        className="text-5xl font-display font-bold text-gradient"
                                        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {project.title.charAt(0)}
                                    </motion.span>
                                </div>
                            )}

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                            {/* Shine effect on hover */}
                            <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: `linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 60%)`,
                                    transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
                                    transition: "transform 0.6s ease-out",
                                }}
                            />

                            {/* Hover indicator */}
                            <motion.div
                                className="absolute top-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                initial={{ y: -10, opacity: 0 }}
                                animate={isHovered ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-background shadow-lg shadow-primary/30">
                                    <ArrowUpRight size={18} />
                                </div>
                            </motion.div>

                            {/* Metrics badge */}
                            {project.metrics && (
                                <motion.div
                                    className="absolute bottom-4 left-4"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <span className="px-3 py-1.5 text-xs font-bold bg-black/60 backdrop-blur-md border border-white/10 text-white rounded-full shadow-lg">
                                        {project.metrics}
                                    </span>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mt-4 space-y-2">
                        <div className="flex items-start justify-between gap-4">
                            <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-200">
                                {project.title}
                            </h3>
                            {project.metrics && (
                                <span className="shrink-0 text-sm font-medium text-primary">
                                    {project.metrics}
                                </span>
                            )}
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-2">
                            {project.description}
                        </p>

                        {/* Tech stack pills on hover */}
                        <motion.div
                            className="flex flex-wrap gap-1 pt-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={isHovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {project.stack.slice(0, 4).map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-2 py-0.5 rounded-full bg-surface-elevated text-muted-foreground"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.stack.length > 4 && (
                                <span className="text-xs px-2 py-0.5 rounded-full bg-surface-elevated text-muted-foreground">
                                    +{project.stack.length - 4}
                                </span>
                            )}
                        </motion.div>
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    );
}
