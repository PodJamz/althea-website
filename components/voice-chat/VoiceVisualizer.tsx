'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VoiceVisualizerProps {
  bars?: {
    count: number;
    minHeight: number;
    maxHeight: number;
    width: number;
    gap: number;
    color: string;
  };
  state: 'idle' | 'listening' | 'processing' | 'speaking';
  className?: string;
}

const defaultBars = {
  count: 5,
  minHeight: 15,
  maxHeight: 40,
  width: 8,
  gap: 4,
  color: "#00C6BC"
};

export const VoiceVisualizer: React.FC<VoiceVisualizerProps> = ({
  bars = defaultBars,
  state,
  className
}) => {
  const getBarAnimation = (index: number) => {
    switch (state) {
      case 'listening':
        return {
          scaleY: [1, 1.5, 1],
          transition: {
            duration: 1,
            repeat: Infinity,
            delay: index * 0.1
          }
        };
      case 'processing':
        return {
          scaleY: [1, 2, 1],
          transition: {
            duration: 0.5,
            repeat: Infinity,
            delay: index * 0.05
          }
        };
      case 'speaking':
        return {
          scaleY: [1, 1.8, 1],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            delay: index * 0.15
          }
        };
      default:
        return {
          scaleY: 1
        };
    }
  };

  return (
    <div className={cn("flex items-center justify-center gap-1", className)}>
      {Array.from({ length: bars.count }).map((_, i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{
            width: bars.width,
            height: bars.minHeight,
            backgroundColor: bars.color,
            transformOrigin: "bottom"
          }}
          animate={getBarAnimation(i)}
        />
      ))}
    </div>
  );
}; 