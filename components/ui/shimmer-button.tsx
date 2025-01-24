import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'], // SemiBold
});

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "rgba(255, 255, 255, 0.2)",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 0.2)",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          poppins.className,
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-8 py-3.5 text-white [border-radius:var(--radius)]",
          "bg-gradient-to-r from-purple-900/40 via-purple-800/40 to-purple-900/40",
          "border border-white/10",
          "transform-gpu transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98]",
          "text-base tracking-wide font-semibold",
          className,
        )}
        ref={ref}
        {...props}
      >
        {/* Aurora effect */}
        <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
          <div className="absolute inset-0 [background:linear-gradient(100deg,var(--violet-500)_10%,var(--purple-300)_25%,var(--violet-200)_50%,var(--purple-400)_75%)] opacity-20 blur-xl animate-aurora"></div>
        </div>

        {/* Shimmer effect */}
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]",
          )}
        >
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>
        {children}

        {/* Highlight */}
        <div
          className={cn(
            "absolute inset-0",
            "rounded-[inherit] shadow-[inset_0_-1px_1px_rgba(255,255,255,0.1)]",
            "transform-gpu transition-all duration-300 ease-in-out",
            "group-hover:shadow-[inset_0_-2px_2px_rgba(255,255,255,0.2)]",
            "group-active:shadow-[inset_0_-1px_1px_rgba(255,255,255,0.1)]",
          )}
        />

        {/* Backdrop blur */}
        <div
          className={cn(
            "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]",
            "backdrop-blur-sm"
          )}
        />
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton }; 