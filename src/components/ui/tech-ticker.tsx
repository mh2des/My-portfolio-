"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
    // Row 1
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },

    // Row 2
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
];

export function TechTicker() {
    return (
        <section className="py-10 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050508] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050508] to-transparent z-10" />

            <div className="flex gap-8 mb-8">
                <Marquee direction="left" speed={20}>
                    {technologies.slice(0, 8).map((tech) => (
                        <TechBadge key={tech.name} {...tech} />
                    ))}
                </Marquee>
            </div>

            <div className="flex gap-8">
                <Marquee direction="right" speed={20}>
                    {technologies.slice(8).map((tech) => (
                        <TechBadge key={tech.name} {...tech} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}

function Marquee({ children, direction = "left", speed = 20 }: { children: React.ReactNode, direction?: "left" | "right", speed?: number }) {
    return (
        <div className="flex overflow-hidden group select-none gap-8 w-full mask-linear">
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex gap-8 min-w-max"
            >
                {children}
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    );
}

function TechBadge({ name, icon }: { name: string, icon: string }) {
    return (
        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all cursor-default group">
            <div className="relative w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
                <Image src={icon} alt={name} fill className="object-contain" />
            </div>
            <span className="font-medium text-muted-foreground group-hover:text-primary transition-colors">{name}</span>
        </div>
    );
}
