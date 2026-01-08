import { cn } from "@/lib/utils";

interface InitialsAvatarProps {
    name: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-16 h-16 text-xl",
    lg: "w-24 h-24 text-3xl",
};

export function InitialsAvatar({
    name,
    size = "md",
    className,
}: InitialsAvatarProps) {
    const initials = name
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <div
            className={cn(
                "flex items-center justify-center rounded-full bg-primary/10 font-semibold text-primary",
                sizeClasses[size],
                className
            )}
            aria-label={name}
        >
            {initials}
        </div>
    );
}
