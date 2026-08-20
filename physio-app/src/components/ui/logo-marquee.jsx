import React, { memo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion } from "framer-motion";
import useMeasure from "react-use-measure";

export const InfiniteSlider = memo(function InfiniteSlider({
  children,
  gap = 24,
  duration = 30,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const size = direction === "horizontal" ? width : height;
    if (!size) return;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    let controls;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prev) => prev + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: currentDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => translation.set(from),
      });
    }

    return () => controls?.stop();
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden w-full", className)}>
      <motion.div
        ref={ref}
        className="flex w-max items-center"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
});

const LogoImage = memo(function LogoImage({ logo }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-100 shadow-sm backdrop-blur-sm hover:shadow-md transition-all">
      {logo.src && (
        <img
          alt={logo.alt}
          src={logo.src}
          width={logo.width ?? "auto"}
          height={logo.height ?? "auto"}
          loading="lazy"
          className="pointer-events-none h-5 select-none object-contain"
        />
      )}
      {logo.icon && (
        <span className="text-primary-600 flex items-center justify-center">
          {logo.icon}
        </span>
      )}
      <span className="text-xs sm:text-sm font-semibold text-gray-800 whitespace-nowrap">
        {logo.alt}
      </span>
    </div>
  );
});

export const LogoMarquee = memo(function LogoMarquee({
  logos,
  className,
  speed = 35,
  gap = 20,
}) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden py-3",
        className,
      )}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <InfiniteSlider gap={gap} reverse duration={speed} durationOnHover={70}>
        {[...logos, ...logos].map((logo, i) => (
          <LogoImage key={`${logo.alt}-${i}`} logo={logo} />
        ))}
      </InfiniteSlider>
    </div>
  );
});

LogoMarquee.displayName = "LogoMarquee";
export default LogoMarquee;
