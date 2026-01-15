"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    MapPin,
    GraduationCap,
    Download,
    Terminal,
    Github,
    Linkedin,
    Cpu,
} from "lucide-react";
import { PageBackground } from "@/components/page-background";
import { TechTicker } from "@/components/ui/tech-ticker";

const stats = [
    { label: "Years Experience", value: "+2" },
    { label: "Projects Shipped", value: "15+" },
    { label: "App Downloads", value: "+1000" },
    { label: "Hackathon Participations", value: "2" },
];

export default function AboutPage() {
    return (
        <>
            <PageBackground variant="subtle" />

            <section className="pt-32 pb-20 relative z-10">
                <div className="container-wide">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
                            About Me
                        </span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold">
                            Architecting <span className="text-gradient">Intelligence</span>
                        </h1>
                    </motion.div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                        {/* 1. Bio Card - Large */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-2 lg:col-span-2 row-span-2 liquid-glass rounded-3xl p-8 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Terminal size={24} className="text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">Hello, I'm Mansoor.</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    I'm a Data Scientist & AI Engineer who bridges the gap between complex algorithms and intuitive user experiences.
                                    <br /><br />
                                    Currently focused on building scalable machine learning models, data-driven insights, and AI-powered applications with Python, Flutter, and React.
                                </p>
                            </div>
                            <div className="flex gap-4 mt-8">
                                <a href="/cv/Mansoor_Software_CV.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-300 font-medium text-sm">
                                    <Download size={16} />
                                    Download CV
                                </a>
                                <div className="flex gap-2">
                                    <a href="https://github.com/mh2des" target="_blank" className="p-2.5 rounded-full bg-surface-elevated hover:bg-white/10 transition-colors text-muted-foreground hover:text-white">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://linkedin.com/in/mansoor-shokla-1a9781353" target="_blank" className="p-2.5 rounded-full bg-surface-elevated hover:bg-white/10 transition-colors text-muted-foreground hover:text-white">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* 2. Profile Photo - Tall */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="md:col-span-1 lg:col-span-1 row-span-2 relative rounded-3xl overflow-hidden liquid-glass group"
                        >
                            <Image
                                src="/images/profile-photo.png"
                                alt="Mansoor"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex items-center gap-2 text-white/90 text-sm font-medium bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full w-fit">
                                    <MapPin size={14} className="text-primary" />
                                    <span>Available for Work</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. Tech Stack - Wide */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="md:col-span-3 lg:col-span-1 row-span-1 liquid-glass rounded-3xl p-6 flex flex-col justify-center"
                        >
                            <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">Expertise</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Data Science", "Mobile App Development", "NLP", "Machine Learning", "TensorFlow", "Flutter", "Python", "React", "Next.js"].map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-surface-elevated border border-white/5 text-sm font-medium text-cyan-100/80">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* 4. Education Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="md:col-span-2 lg:col-span-1 liquid-glass rounded-3xl p-6 flex flex-col justify-between hover:border-primary/30 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                                <GraduationCap size={20} className="text-purple-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Computer Science</h3>
                                <p className="text-sm text-muted-foreground">Albukhary International University</p>
                                <p className="text-xs text-primary mt-1">CGPA 3.65 • Dean's List</p>
                            </div>
                        </motion.div>

                        {/* 5. Stats Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="md:col-span-1 lg:col-span-3 liquid-glass rounded-3xl p-8 flex items-center justify-around flex-wrap gap-8"
                        >
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                                    <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Technical Arsenal - New Slider */}
                    <div className="mt-24">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-2xl font-display font-bold mb-12 flex items-center gap-3"
                        >
                            <Cpu className="text-primary" />
                            <span className="text-gradient">Technical Arsenal</span>
                        </motion.h2>

                        <TechTicker />
                    </div>
                </div>
            </section>
        </>
    );
}
