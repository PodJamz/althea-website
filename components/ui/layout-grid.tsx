"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 relative px-4">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className)}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden rounded-lg aspect-[3/2] cursor-pointer",
              selected?.id === card.id
                ? "fixed inset-8 md:inset-12 z-50 flex justify-center items-center"
                : "h-full w-full hover:scale-[1.02] transition-transform"
            )}
            layoutId={`card-${card.id}`}
            transition={{ duration: 0.3 }}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <motion.img
              layoutId={`image-${card.id}-image`}
              src={card.thumbnail}
              alt="thumbnail"
              className="object-cover object-center absolute inset-0 h-full w-full transition duration-200"
            />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 bg-black opacity-0 z-40",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.2 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-lg relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        className="absolute inset-0 h-full w-full bg-black opacity-40 z-10"
        transition={{ duration: 0.2 }}
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative px-6 pb-6 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
}; 