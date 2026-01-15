import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SpotlightCursor } from "@/components/ui/spotlight-cursor";
import { LenisProvider } from "@/components/providers/lenis-provider";

const fontDisplay = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const fontBody = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Mansoor | Full Stack & AI Engineer",
    template: "%s | Mansoor",
  },
  description:
    "Full Stack Developer & AI Engineer specializing in Flutter, React, and Python. Building production-ready applications with modern tech stacks.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Flutter Developer",
    "React Developer",
    "Python Developer",
    "Portfolio",
  ],
  authors: [{ name: "Mansoor" }],
  creator: "Mansoor",
  metadataBase: new URL("https://mansoor.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mansoor.dev",
    title: "Mansoor | Full Stack & AI Engineer",
    description:
      "Full Stack Developer & AI Engineer specializing in Flutter, React, and Python.",
    siteName: "Mansoor Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mansoor | Full Stack & AI Engineer",
    description:
      "Building production-ready applications with modern tech stacks.",
    creator: "@mansoor",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${fontDisplay.variable} ${fontBody.variable} antialiased selection:bg-cyan-500/30 selection:text-cyan-200 bg-background text-foreground overflow-x-hidden`}
      >
        <LenisProvider>
          <SpotlightCursor />
          <Header />
          <main className="min-h-screen relative">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

