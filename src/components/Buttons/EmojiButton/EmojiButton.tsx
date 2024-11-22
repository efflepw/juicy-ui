import "./EmojiButton.css";

import React, { useState } from "react";

import { BURST_COUNT } from "./const";
import { EmojiData, EmojiButtonProps } from "./types";
import { getAnimationFunction } from "./utils";

const EmojiButton: React.FC<EmojiButtonProps> = ({ emoji, animationType }) => {
  const [emojis, setEmojis] = useState<EmojiData[]>([]);

  // @todo add emoji animation waves
  const createEmojis = () => {
    // @todo update center position accordingly to size
    const centerX = 8;
    const centerY = 8;

    const dateTime = Date.now();

    const newEmojis: EmojiData[] = Array.from({ length: BURST_COUNT }).map(
      (_, index) => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 100;

        return {
          id: `${dateTime}-${index}`,
          icon: emoji,
          centerX,
          centerY,
          angle,
          distance,
          rotation: Math.random() * 720 - 360,
          scale: 0.4 + Math.random() * 1.2,
        };
      }
    );

    setEmojis((prev) => [...prev, ...newEmojis]);

    setTimeout(() => {
      setEmojis((prev) => prev.filter((e) => !e.id.startsWith(`${dateTime}-`)));
    }, 1000);
  };

  return (
    <div className="relative">
      {emojis.map((e) => (
        <div
          key={e.id}
          className={`absolute text-2xl ${animationType}-animation pointer-events-none`}
          style={getAnimationFunction(animationType)(e)}
        >
          {animationType == "burst" ? emoji : ""}
        </div>
      ))}

      <button
        onClick={createEmojis}
        className="text-4xl hover:scale-110 active:scale-95 transition-transform"
        type="button"
      >
        {emoji}
      </button>
    </div>
  );
};

export default EmojiButton;
