"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";

interface LenisProviderProps {
    children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            // Don't initialize Lenis for users who prefer reduced motion
            return;
        }

        const lenis = new Lenis({
            duration: 1.0, // Reduced from 1.2 for snappier feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 1.5, // Reduced from 2
        });

        lenisRef.current = lenis;

        // Use GSAP's optimized ticker for Lenis
        // GSAP's ticker automatically pauses when tab is hidden, saving CPU/Battery
        const raf = (time: number) => {
            lenis.raf(time * 1000); // GSAP provides time in seconds, Lenis takes ms
        };

        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        // Expose lenis to window for potential GSAP integration
        (window as any).lenis = lenis;

        return () => {
            gsap.ticker.remove(raf);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return <>{children}</>;
}
