"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingPathsBackground({
  position = 1,
  children,
  className,
}: {
  position?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(2, 132, 199, ${0.08 + i * 0.015})`,
    width: 0.75 + i * 0.035,
  }));

  return (
    <div className={cn("w-full relative overflow-hidden", className)}>
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
        <svg
          className="w-full h-full text-sky-600/40 dark:text-sky-400/40"
          viewBox="0 0 696 316"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {paths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="currentColor"
              strokeWidth={path.width}
              strokeOpacity={0.08 + path.id * 0.018}
              initial={{ pathLength: 0.3, opacity: 0.4 }}
              animate={{
                pathLength: 1,
                opacity: [0.2, 0.55, 0.2],
                pathOffset: [0, 1, 0],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

export default FloatingPathsBackground;
