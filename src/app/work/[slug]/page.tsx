"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Calendar,
    User,
    Zap,
    Target,
    Lightbulb,
    TrendingUp,
    ArrowRight,
    Images,
} from "lucide-react";
import { PageBackground } from "@/components/page-background";
import { projects } from "@/lib/projects";
import { getProjectDetails } from "@/lib/project-details";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: PageProps) {
    const { slug } = use(params);
    const project = getProjectDetails(slug);

    if (!project) {
        notFound();
    }

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <>
            <PageBackground variant="subtle" />

            <article className="relative z-10">
                {/* Hero Header */}
                <section className="pt-32 pb-16">
                    <div className="container-wide">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link
                                href="/work"
                                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                Back to Work
                            </Link>
                        </motion.div>

                        <div className="grid gap-12 lg:grid-cols-[1fr,400px] lg:gap-16">
                            {/* Left: Project Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.categories.map(cat => (
                                            <span key={cat} className="px-4 py-1.5 text-sm font-medium bg-gray-100 text-foreground rounded-full border border-gray-200">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                    {project.metrics && (
                                        <span className="px-4 py-1.5 text-sm font-bold bg-foreground text-white rounded-full">
                                            {project.metrics}
                                        </span>
                                    )}
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                                    <span className="text-gradient">{project.title}</span>
                                </h1>

                                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Meta Info */}
                                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                            <User size={14} className="text-foreground" />
                                        </div>
                                        <span>{project.role}</span>
                                    </div>
                                    {project.timeline && (
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                                <Calendar size={14} className="text-foreground" />
                                            </div>
                                            <span>{project.timeline}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {project.stack.map((tech, idx) => (
                                        <motion.span
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="px-4 py-2 text-sm font-mono bg-white/60 border border-gray-200 rounded-full text-muted-foreground hover:border-gray-300 hover:text-foreground transition-colors"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white font-medium rounded-full hover:bg-foreground/90 transition-all duration-300 shadow-sm"
                                        >
                                            <ExternalLink size={16} />
                                            View Live
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 liquid-glass font-medium rounded-full hover:border-gray-300 transition-colors"
                                        >
                                            <Github size={16} />
                                            Source Code
                                        </a>
                                    )}
                                </div>
                            </motion.div>

                            {/* Right: Project Image */}
                            {project.image && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="relative"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl liquid-glass">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                                    </div>
                                    {/* Decorative glow */}
                                    <div className="absolute -inset-4 bg-teal-200/10 rounded-3xl blur-3xl -z-10" />
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                {project.gallery && project.gallery.length > 0 && (
                    <section className="py-16">
                        <div className="container-wide">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-10"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                                        <Images size={20} className="text-foreground" />
                                    </div>
                                    <h2 className="text-2xl font-display font-bold">Project Screenshots</h2>
                                </div>
                            </motion.div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {project.gallery.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group relative aspect-video overflow-hidden rounded-2xl liquid-glass cursor-pointer"
                                    >
                                        <Image
                                            src={img}
                                            alt={`${project.title} screenshot ${idx + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Case Study Content */}
                <section className="py-20">
                    <div className="container-narrow">
                        <motion.div
                            variants={stagger}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="space-y-16"
                        >
                            {/* Overview */}
                            <motion.div variants={fadeInUp} className="liquid-glass rounded-3xl p-8 md:p-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                                        <Target size={24} className="text-foreground" />
                                    </div>
                                    <h2 className="text-2xl font-display font-bold">Overview</h2>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                    {project.overview}
                                </p>
                            </motion.div>

                            {/* Problem */}
                            <motion.div variants={fadeInUp} className="liquid-glass rounded-3xl p-8 md:p-10 border-l-4 border-l-orange-400">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center">
                                        <Zap size={24} className="text-orange-500" />
                                    </div>
                                    <h2 className="text-2xl font-display font-bold">Problem & Constraints</h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                    {project.problem}
                                </p>
                            </motion.div>

                            {/* Solution */}
                            <motion.div variants={fadeInUp} className="liquid-glass rounded-3xl p-8 md:p-10 border-l-4 border-l-foreground/30">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                                        <Lightbulb size={24} className="text-foreground" />
                                    </div>
                                    <h2 className="text-2xl font-display font-bold">Solution</h2>
                                </div>
                                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                    {project.solution}
                                </div>
                            </motion.div>

                            {/* Impact */}
                            <motion.div variants={fadeInUp} className="liquid-glass rounded-3xl p-8 md:p-10 border-l-4 border-l-green-400">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
                                        <TrendingUp size={24} className="text-green-500" />
                                    </div>
                                    <h2 className="text-2xl font-display font-bold">Impact & Results</h2>
                                </div>
                                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                    {project.impact}
                                </div>
                            </motion.div>

                            {/* Improvements */}
                            <motion.div variants={fadeInUp} className="liquid-glass rounded-3xl p-8 md:p-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center">
                                        <ArrowRight size={24} className="text-purple-500" />
                                    </div>
                                    <h2 className="text-2xl font-display font-bold">What I&apos;d Improve Next</h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                    {project.improvements}
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-4 pt-16 justify-center"
                        >
                            <Link
                                href="/work"
                                className="inline-flex items-center gap-2 px-6 py-3 liquid-glass font-medium rounded-full hover:border-gray-300 transition-colors"
                            >
                                <ArrowLeft size={16} />
                                Back to all projects
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white font-medium rounded-full hover:bg-foreground/90 transition-all duration-300 shadow-sm"
                            >
                                Get in touch
                                <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </article>
        </>
    );
}
