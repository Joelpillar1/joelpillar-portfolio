"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate, animate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);
    let opacity = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        if (!currentTarget) return;
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const dotPattern = (color: string) => ({
        backgroundImage: `radial-gradient(circle, ${color} 1.5px, transparent 1.5px)`,
        backgroundSize: '24px 24px',
    });

    return (
        <div
            className={cn(
                "relative w-full",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => animate(opacity, 1, { duration: 0.3 })}
            onMouseLeave={() => animate(opacity, 0, { duration: 0.3 })}
        >
            <div
                className="absolute inset-0 pointer-events-none opacity-50"
                style={dotPattern('rgba(212, 212, 212, 0.4)')}
            />
            <motion.div
                className="pointer-events-none absolute inset-0 transition duration-300"
                style={{
                    ...dotPattern('rgb(99 102 241)'), // indigo-500
                    opacity,
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                    maskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                }}
            />

            <div className={cn("relative z-20", className)}>{children}</div>
        </div>
    );
};

export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            whileHover={{ scale: 1.02 }}
            transition={{
                duration: 2,
                ease: "linear",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={cn(
                `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 cursor-default transition-all duration-300`,
                className
            )}
        >
            {children}
        </motion.span>
    );
};
