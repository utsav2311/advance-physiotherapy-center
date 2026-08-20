import { cn } from "@/lib/utils";

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  speed = "normal",
  ...props
}) {
  const speedVariants = {
    slow: "[--duration:120s]",
    normal: "[--duration:40s]",
    fast: "[--duration:15s]",
  };

  return (
    <div
      {...props}
      className={cn(
        "marquee-container group flex overflow-hidden p-1 [--gap:16px] [gap:var(--gap)]",
        speedVariants[speed],
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("marquee-track flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
