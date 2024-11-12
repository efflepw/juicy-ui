import "./EmojiButton.css";
import React, { useState } from "react";

const BURST_COUNT = 10;

interface EmojiData {
  id: string;
  icon: string;
  centerX: number;
  centerY: number;
  endX: number;
  endY: number;
  rotation: number;
  scale: number;
}

interface BurstAnimationStyles extends React.CSSProperties {
  "--end-x": string;
  "--end-y": string;
  "--rotation": string;
  "--scale": number;
}

type Props = {
  emoji: string;
  animationType?: "burst" | "drop";
};

const EmojiButton: React.FC<Props> = ({ emoji, animationType }) => {
  const [emojis, setEmojis] = useState<EmojiData[]>([]);

  console.log(animationType);

  const createEmojis = () => {
    const centerX = 8;
    const centerY = 8;

    const dateTime = Date.now();

    const newEmojis: EmojiData[] = Array.from({ length: BURST_COUNT }).map(
      (_, index) => {
        const angle = (index / BURST_COUNT) * Math.PI * 2;
        const distance = 50 + Math.random() * 100;

        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;

        return {
          id: `${dateTime}-${index}`,
          icon: emoji,
          centerX,
          centerY,
          endX,
          endY,
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

  const getBurstAnimationStyles = (e: EmojiData): BurstAnimationStyles => ({
    left: `${e.centerX}px`,
    top: `${e.centerY}px`,
    "--end-x": `${e.endX}px`,
    "--end-y": `${e.endY}px`,
    "--rotation": `${e.rotation}deg`,
    "--scale": e.scale,
  });

  return (
    <div className="relative">
      {emojis.map((e) => (
        <div
          key={e.id}
          className="absolute text-2xl burst-animation pointer-events-none"
          style={getBurstAnimationStyles(e)}
        >
          {e.icon}
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
