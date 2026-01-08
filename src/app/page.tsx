"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code, Brain, Smartphone, Database, Star, Lightbulb, Rocket, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Hero3D } from "@/components/hero-3d";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/lib/projects";

const skills = [
  { icon: Brain, label: "AI & Machine Learning", desc: "TensorFlow, PyTorch, LLMs, NLP, Computer Vision" },
  { icon: Database, label: "Data Science & Analysis", desc: "Python, Pandas, SQL, Visualization, Big Data" },
  { icon: Code, label: "Full-Stack Engineering", desc: "Next.js, FastAPI, Node.js, React, TypeScript" },
  { icon: Smartphone, label: "Mobile Development", desc: "Flutter, Dart, Firebase, Cross-platform Apps" },
];

const testimonials = [
  {
    quote: "Best Arabic dictionary app! Very comprehensive and easy to use.",
    author: "Google Play User",
    rating: 5,
    app: "Irab App",
  },
  {
    quote: "Finally an app that explains Arabic grammar properly. 5 stars!",
    author: "App Store Review",
    rating: 5,
    app: "Irab App",
  },
  {
    quote: "Qamoos.org is my go-to resource for Arabic language learning.",
    author: "Language Learner",
    rating: 5,
    app: "Qamoos.org",
  },
];

const processSteps = [
  {
    icon: Lightbulb,
    title: "Discovery",
    desc: "Understanding requirements, user needs, and technical constraints.",
  },
  {
    icon: Code,
    title: "Development",
    desc: "Building with clean code, testing, and iterative improvements.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    desc: "Cloud deployment, monitoring, and continuous optimization.",
  },
];

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero Section */}
      <Hero3D />

      {/* Skills Section */}
      <section className="py-24 relative">
        <div className="container-wide">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
              What I Do
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Data Science & Engineering
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="liquid-glass rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 relative">
        <div className="container-wide">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
                Selected Work
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Featured Projects</h2>
            </div>
            <Link
              href="/work"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              View all
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <div className="mt-8 sm:hidden text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 liquid-glass rounded-full text-sm font-medium"
            >
              View all projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-wide">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
              What People Say
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Trusted by users worldwide
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="liquid-glass rounded-2xl p-8 relative group hover:bg-white/[0.03] transition-colors"
              >
                <div className="absolute top-8 right-8 text-primary/20">
                  <Star size={24} fill="currentColor" />
                </div>
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-primary">{testimonial.app}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative bg-surface-elevated/30">
        <div className="container-wide">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 max-w-2xl"
          >
            <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
              My Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              From Concept to Scale
            </h2>
            <p className="text-muted-foreground text-lg">
              I follow a rigorous engineering process to ensure every product is built for performance, scalability, and user satisfaction.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative pl-8 border-l-2 border-primary/20 group hover:border-primary transition-colors"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <step.icon size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="container-wide relative z-10 text-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Have a project in mind?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Let's collaborate to build something extraordinary. I'm currently available for freelance projects and consulting.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-background font-bold rounded-full hover:bg-primary-hover transition-all duration-300 hover:scale-105 hover-glow"
              >
                Start a Conversation
              </Link>
              <a
                href="mailto:contact@mansoor.dev"
                className="px-8 py-4 glass-card font-medium rounded-full hover:bg-surface-elevated transition-all duration-300"
              >
                contact@mansoor.dev
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
