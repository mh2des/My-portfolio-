"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
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
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={cardRef}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={cn("group h-full", className)}
        >
            <Link href={`/work/${project.slug}`} className="block h-full">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl liquid-glass project-card transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-primary/10">
                    {/* Category badges */}
                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                        {project.categories.slice(0, 2).map((cat) => (
                            <Badge
                                key={cat}
                                variant="secondary"
                                className="backdrop-blur-md bg-background/50 border-white/10 text-xs font-medium"
                            >
                                {cat}
                            </Badge>
                        ))}
                    </div>

                    {/* Project image */}
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-purple-500/10">
                            <span className="text-5xl font-display font-bold text-gradient">
                                {project.title.charAt(0)}
                            </span>
                        </div>
                    )}

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Hover indicator */}
                    <div className="absolute top-4 right-4 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-background shadow-lg">
                            <ArrowUpRight size={18} />
                        </div>
                    </div>

                    {/* Metrics badge */}
                    {project.metrics && (
                        <div className="absolute bottom-4 left-4">
                            <span className="px-3 py-1.5 text-xs font-bold bg-black/60 backdrop-blur-md border border-white/10 text-white rounded-full">
                                {project.metrics}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="mt-4 space-y-2">
                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-200">
                        {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}
