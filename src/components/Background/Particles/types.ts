export type Entity = {
  x: number;
  y: number;
  angle: number;
  speed: number;
};

export type InteractableEntity = Pick<Entity, "x" | "y" | "angle">;

export type ParticleEntity = Entity & {
  maxFloatingSpeed: number;
  color: string;
};

export type Mouse = {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
  angle: number;
};
