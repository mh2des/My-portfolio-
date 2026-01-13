"use client";

import { motion, useReducedMotion } from "framer-motion";
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

export function ProjectCard({ project, index = 0, className }: ProjectCardProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn("group h-full", className)}
        >
            <Link href={`/work/${project.slug}`} className="block h-full">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl liquid-glass project-card transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10">
                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                        {project.categories.map(cat => (
                            <Badge key={cat} variant="secondary" className="backdrop-blur-md bg-background/50 border-white/10 text-xs font-medium">
                                {cat}
                            </Badge>
                        ))}
                    </div>
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-purple-500/10">
                            <span className="text-5xl font-display font-bold text-gradient">
                                {project.title.charAt(0)}
                            </span>
                        </div>
                    )}

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Hover indicator */}
                    <div className="absolute top-4 right-4 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-background shadow-lg shadow-primary/30">
                            <ArrowUpRight size={18} />
                        </div>
                    </div>

                    {/* Metrics badge */}
                    {project.metrics && (
                        <div className="absolute bottom-4 left-4">
                            <span className="px-3 py-1.5 text-xs font-bold bg-black/60 backdrop-blur-md border border-white/10 text-white rounded-full shadow-lg">
                                {project.metrics}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="space-y-2">
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
                </div>
            </Link>
        </motion.div>
    );
}
