import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work",
    description:
        "A collection of production applications, APIs, and research projects by Mansoor Shokal.",
};

export default function WorkLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
