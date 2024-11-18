export interface EmojiData {
  id: string;
  icon: string;
  centerX: number;
  centerY: number;
  angle: number;
  distance: number;
  rotation: number;
  scale: number;
}

export interface BurstAnimationStyles extends React.CSSProperties {
  "--end-x": string;
  "--end-y": string;
  "--rotation": string;
  "--scale": number;
}

export interface DropAnimationStyles extends React.CSSProperties {
  "--emoji-icon": string;
  "--mid-x": string;
  "--mid-y": string;
  "--end-x": string;
  "--end-y": string;
  "--timing-function": string;
  "--rotation": string;
  "--scale": number;
}

export type SupportedAnimationTypes = "burst" | "drop";

export type EmojiButtonProps = {
  emoji: string;
  animationType: SupportedAnimationTypes;
};
