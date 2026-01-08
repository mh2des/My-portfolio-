"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { PageBackground } from "@/components/page-background";
import { projects, categories } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function WorkPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.categories.includes(activeCategory));

    return (
        <>
            <PageBackground variant="subtle" />

            <section className="pt-32 pb-20 relative z-10">
                <div className="container-wide">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mb-16"
                    >
                        <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
                            Portfolio
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                            Selected <span className="text-gradient">Projects</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            A collection of production applications, APIs, and research projects
                            spanning web platforms, mobile apps, and AI systems.
                        </p>
                    </motion.div>

                    {/* Category Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex flex-wrap gap-3 mb-12"
                    >
                        {categories.map((category, idx) => (
                            <motion.button
                                key={category}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 + idx * 0.05 }}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                                    activeCategory === category
                                        ? "bg-primary text-background shadow-lg shadow-primary/30"
                                        : "liquid-glass text-muted-foreground hover:text-foreground hover:border-primary/30"
                                )}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {filteredProjects.map((project, index) => (
                                <ProjectCard key={project.slug} project={project} index={index} />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredProjects.length === 0 && (
                        <div className="liquid-glass rounded-2xl p-12 text-center">
                            <p className="text-muted-foreground">
                                No projects in this category yet.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
