'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface OpacitySliderProps {
  onChange: (opacity: number) => void;
}

export function OpacitySlider({ onChange }: OpacitySliderProps) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
      <div className="text-xs font-medium text-[hsl(var(--text-secondary))]">
        Glass Opacity
      </div>
      <div 
        className="h-48 w-1 bg-white/10 rounded-full relative cursor-pointer"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const y = e.clientY - rect.top;
          const percentage = 1 - (y / rect.height);
          onChange(percentage);
        }}
      >
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg cursor-grab active:cursor-grabbing"
          drag="y"
          dragConstraints={{ top: 0, bottom: 192 }} // 48px * 4
          dragElastic={0}
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onDrag={(e, info) => {
            const percentage = 1 - (info.point.y / 192);
            onChange(Math.max(0, Math.min(1, percentage)));
          }}
        />
      </div>
      <div className="text-[10px] text-[hsl(var(--text-secondary))]">
        {isDragging ? 'Release to set' : 'Drag to adjust'}
      </div>
    </div>
  );
} 