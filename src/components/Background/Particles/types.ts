export type Entity = {
  x: number;
  y: number;
  angle: number;
  speed: number;
};

export type InteractableEntity = Pick<Entity, "x" | "y" | "angle">;

export type ParticleEntity = Entity & {
  maxSpeed: number;
  color: string;
  size: number;
  blur: number;
  alpha: number;
  alphaToggled: boolean;
};

export type ParticlesCommonProperties = Pick<
  ParticleEntity,
  "alpha" | "alphaToggled" | "blur" | "color" | "maxSpeed" | "speed" | "size"
>;

export type Mouse = {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
  angle: number;
};

export type CanvasSize = {
  width: number;
  height: number;
};
