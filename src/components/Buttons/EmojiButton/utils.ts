import {
  BurstAnimationStyles,
  DropAnimationStyles,
  EmojiData,
  SupportedAnimationTypes,
} from "./types";

export const getBurstAnimationStyles = (
  e: EmojiData
): BurstAnimationStyles => ({
  left: `${e.centerX}px`,
  top: `${e.centerY}px`,
  "--end-x": `${Math.cos(e.angle) * e.distance}px`,
  "--end-y": `${Math.sin(e.angle) * e.distance}px`,
  "--rotation": `${e.rotation}deg`,
  "--scale": e.scale,
});

export const getDropAnimationStyles = (e: EmojiData): DropAnimationStyles => {
  const radius = (e.distance - 50) / 2 + 50;
  const launchAngle = e.angle / 2 + Math.PI;

  const midX = Math.cos(launchAngle) * radius;
  const endX = midX * 2;

  const midY = Math.sin(launchAngle) * radius;
  const endY = e.distance - 20;

  return {
    left: `${e.centerX}px`,
    top: `${e.centerY}px`,
    "--emoji-icon": `"${e.icon}"`,
    "--mid-x": `${midX}px`,
    "--end-x": `${endX}px`,
    "--mid-y": `${midY}px`,
    "--end-y": `${endY}px`,
    "--timing-function": ``,
    "--rotation": `${e.rotation}deg`,
    "--scale": e.scale,
  };
};

export const getAnimationFunction = (animationType: SupportedAnimationTypes) =>
  animationType == "burst" ? getBurstAnimationStyles : getDropAnimationStyles;
