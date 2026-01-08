"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Send, Download } from "lucide-react";
import { PageBackground } from "@/components/page-background";

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: "Mansourshakla@gmail.com",
        href: "mailto:Mansourshakla@gmail.com",
        gradient: "from-red-500/20 to-orange-500/20",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "mansoor-shokla",
        href: "https://linkedin.com/in/mansoor-shokla-1a9781353",
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "mh2des",
        href: "https://github.com/mh2des",
        gradient: "from-purple-500/20 to-pink-500/20",
    },
];

export default function ContactPage() {
    return (
        <>
            <PageBackground variant="default" />

            <section className="min-h-screen pt-32 pb-20 flex items-center relative z-10">
                <div className="container-narrow">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
                            Contact
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                            Let&apos;s Work{" "}
                            <span className="text-gradient">Together</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-lg mx-auto">
                            I&apos;m open to freelance projects, full-time opportunities, and
                            interesting collaborations. Feel free to reach out.
                        </p>
                    </motion.div>

                    {/* Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="grid gap-4 mb-16"
                    >
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={method.label}
                                href={method.href}
                                target={method.href.startsWith("mailto") ? undefined : "_blank"}
                                rel={method.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                className="group liquid-glass rounded-2xl p-6 flex items-center justify-between hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-5">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <method.icon size={24} className="text-foreground" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                                        <p className="font-display text-lg font-medium">{method.value}</p>
                                    </div>
                                </div>
                                <ArrowUpRight
                                    size={24}
                                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                                />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex items-center justify-center gap-3 text-muted-foreground mb-12"
                    >
                        <MapPin size={16} className="text-primary" />
                        <span>Alor Setar, Kedah, Malaysia</span>
                        <span className="text-border">·</span>
                        <span>UTC+8</span>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="mailto:Mansourshakla@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background font-medium rounded-full hover:bg-primary-hover transition-all duration-300"
                        >
                            <Send size={18} />
                            Send an Email
                        </Link>
                        <a
                            href="/cv/Mansoor_Software_CV.pdf"
                            download
                            className="inline-flex items-center gap-3 px-8 py-4 liquid-glass font-medium rounded-full hover:border-primary/30 transition-colors"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
