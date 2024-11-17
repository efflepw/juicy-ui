import "./EmojiButton.css";
import React, { useState } from "react";

const BURST_COUNT = 12;

interface EmojiData {
  id: string;
  icon: string;
  centerX: number;
  centerY: number;
  angle: number;
  distance: number;
  rotation: number;
  scale: number;
}

interface BurstAnimationStyles extends React.CSSProperties {
  "--end-x": string;
  "--end-y": string;
  "--rotation": string;
  "--scale": number;
}

interface DropAnimationStyles extends React.CSSProperties {
  "--emoji-icon": string;
  "--mid-x": string;
  "--mid-y": string;
  "--end-x": string;
  "--end-y": string;
  "--rotation": string;
  "--scale": number;
}

type SupportedAnimationTypes = "burst" | "drop";

type Props = {
  emoji: string;
  animationType: SupportedAnimationTypes;
};

const getBurstAnimationStyles = (e: EmojiData): BurstAnimationStyles => ({
  left: `${e.centerX}px`,
  top: `${e.centerY}px`,
  "--end-x": `${Math.cos(e.angle) * e.distance}px`,
  "--end-y": `${Math.sin(e.angle) * e.distance}px`,
  "--rotation": `${e.rotation}deg`,
  "--scale": e.scale,
});

const getDropAnimationStyles = (e: EmojiData): DropAnimationStyles => {
  return {
    left: `${e.centerX}px`,
    top: `${e.centerY}px`,
    "--emoji-icon": e.icon,
    "--mid-x": `-60px`,
    "--end-x": `-120px`,
    "--mid-y": `-60px`,
    "--end-y": `120px`,
    "--rotation": `${e.rotation}deg`,
    "--scale": e.scale,
  };
};

const getAnimationFunction = (animationType: SupportedAnimationTypes) =>
  animationType == "burst" ? getBurstAnimationStyles : getDropAnimationStyles;

const EmojiButton: React.FC<Props> = ({ emoji, animationType }) => {
  const [emojis, setEmojis] = useState<EmojiData[]>([]);

  const createEmojis = () => {
    // @todo update center position accordingly to size
    const centerX = 8;
    const centerY = 8;

    const dateTime = Date.now();

    const newEmojis: EmojiData[] = Array.from({ length: BURST_COUNT }).map(
      (_, index) => {
        const angle = (index / BURST_COUNT) * Math.PI * 2;
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
          {/* {emoji} */}
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
