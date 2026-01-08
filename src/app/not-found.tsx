"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { PageBackground } from "@/components/page-background";

export default function NotFound() {
    return (
        <>
            <PageBackground variant="subtle" />

            <section className="min-h-screen flex items-center justify-center relative z-10">
                <div className="container-narrow text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* 404 Number */}
                        <motion.div
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="relative inline-block mb-8"
                        >
                            <span className="text-[150px] md:text-[200px] font-display font-bold text-gradient leading-none">
                                404
                            </span>
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                className="absolute -top-4 -right-4"
                            >
                                <Search size={48} className="text-primary/50" />
                            </motion.div>
                        </motion.div>

                        {/* Message */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-3xl md:text-4xl font-display font-bold mb-4"
                        >
                            Page Not Found
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-lg text-muted-foreground mb-10 max-w-md mx-auto"
                        >
                            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex flex-wrap items-center justify-center gap-4"
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-medium rounded-full hover:bg-primary-hover transition-all duration-300 hover-glow"
                            >
                                <Home size={18} />
                                Go Home
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="inline-flex items-center gap-2 px-6 py-3 liquid-glass font-medium rounded-full hover:border-primary/30 transition-colors"
                            >
                                <ArrowLeft size={18} />
                                Go Back
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Fun Easter Egg */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="mt-16 text-sm text-muted-foreground/50 font-mono"
                    >
                        Error Code: ADVENTURE_NOT_FOUND
                    </motion.p>
                </div>
            </section>
        </>
    );
}
