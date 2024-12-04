import { RefObject } from "react";
import { MousePosition } from "../../../hooks/useMousePosition";
import { CONFIG, MOUSE_MODES, WAVES_CONFIG } from "./const";
import {
  CanvasSize,
  Entity,
  InteractableEntity,
  Mouse,
  ParticleEntity,
} from "./types";

const getRandomColor = (): string => {
  const randomIndex = Math.floor(Math.random() * CONFIG.PALETTE.length);

  return CONFIG.PALETTE[randomIndex];
};

export const createParticles = (canvasSize: CanvasSize): ParticleEntity[] =>
  Array.from({ length: CONFIG.PARTICLES_AMOUNT }, () => ({
    x: Math.random() * canvasSize.width,
    y: Math.random() * canvasSize.height,
    angle: Math.random() * Math.PI * 2,
    speed: CONFIG.SPEED + Math.random() * 0.1,
    maxFloatingSpeed:
      CONFIG.SPEED + (Math.random() - 0.5) * CONFIG.FLOAT_SPEED_DELTA,
    color: getRandomColor(),
  }));

export const createWaves = (canvasSize: CanvasSize): Entity[] =>
  Array.from({ length: WAVES_CONFIG.COUNT }, () => ({
    x: Math.random() * canvasSize.width,
    y: Math.random() * canvasSize.height,
    angle: Math.random() * Math.PI * 2,
    speed: WAVES_CONFIG.BASE_SPEED + Math.random() * WAVES_CONFIG.SPEED_DELTA,
  }));

const waveRepulsion = (
  particle: ParticleEntity,
  wave: InteractableEntity
): boolean => {
  const distanceToWave = calculateDistance(particle, wave);

  if (distanceToWave < CONFIG.INTERACTION_DISTANCE) {
    const angle = Math.atan2(particle.y - wave.y, particle.x - wave.x);

    particle.angle = angle;
    particle.speed = particle.speed + CONFIG.DISTANCE_ACCELERATOR;

    return true;
  }

  return false;
};

const waveAttraction = (
  particle: ParticleEntity,
  wave: InteractableEntity,
  size: number
) => {
  const distanceToWave = calculateDistance(particle, wave);

  if (distanceToWave < size) {
    const angleDelta = Math.sign(wave.angle - particle.angle) * 0.05;

    particle.angle += angleDelta;
    particle.speed = Math.min(
      particle.speed + CONFIG.DISTANCE_ACCELERATOR,
      CONFIG.SPEED_CAP
    );

    return true;
  }

  return false;
};

const interactWithMouse = (particle: ParticleEntity, mouse: Mouse) => {
  switch (CONFIG.MOUSE_MODE) {
    case MOUSE_MODES.REPULSION:
      return waveRepulsion(particle, mouse);
    case MOUSE_MODES.ATTRACTION:
      return waveAttraction(particle, mouse, CONFIG.INTERACTION_DISTANCE);
    default:
      return false;
  }
};

const interactWithWaves = (particle: ParticleEntity, waves: Entity[]) => {
  let interacted = false;

  waves.forEach((wave) => {
    interacted =
      interacted || waveAttraction(particle, wave, WAVES_CONFIG.SIZE);
  });

  return interacted;
};

const updateParticlesPosition = (
  particles: ParticleEntity[],
  waves: Entity[],
  mouse: Mouse,
  canvasSize: CanvasSize
) => {
  particles.forEach((particle) => {
    let interacted = false;

    if (CONFIG.MOUSE_MODE !== MOUSE_MODES.OFF) {
      interacted = interactWithMouse(particle, mouse);
    }

    if (CONFIG.ENABLE_WAVES) {
      interacted = interacted || interactWithWaves(particle, waves);
    }

    particle.x += Math.cos(particle.angle) * particle.speed;
    particle.y += Math.sin(particle.angle) * particle.speed;

    particle.angle += CONFIG.ANGLE_DELTA * (Math.random() - 0.5);

    if (!interacted && particle.speed > particle.maxFloatingSpeed) {
      particle.speed -= CONFIG.DISTANCE_SLOW;
    }

    wrapAroundCanvas(particle, canvasSize);
  });
};

const updateWavesPosition = (waves: Entity[], canvasSize: CanvasSize): void => {
  waves.forEach((wave) => {
    wave.x += Math.cos(wave.angle) * wave.speed;
    wave.y += Math.sin(wave.angle) * wave.speed;

    wave.angle += WAVES_CONFIG.ANGLE_DELTA * (Math.random() - 0.5);

    wrapAroundCanvas(wave, canvasSize);
  });
};

const wrapAroundCanvas = (particle: Entity, canvasSize: CanvasSize): void => {
  if (particle.x < 0) particle.x = canvasSize.width;
  if (particle.x > canvasSize.width) particle.x = 0;
  if (particle.y < 0) particle.y = canvasSize.height;
  if (particle.y > canvasSize.height) particle.y = 0;
};

const calculateDistance = (p1: InteractableEntity, p2: InteractableEntity) =>
  Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

const renderParticlesArc = (
  ctx: CanvasRenderingContext2D,
  particles: ParticleEntity[]
) => {
  particles.forEach((particle) => {
    ctx.beginPath();
    ctx.fillStyle = particle.color;
    ctx.arc(particle.x, particle.y, CONFIG.ARC_SIZE, 0, Math.PI * 2);
    ctx.shadowBlur = 10;
    ctx.shadowColor = particle.color;
    ctx.fill();
  });
};

export const updateMousePosition = (
  canvas: HTMLCanvasElement,
  mouse: Mouse,
  mouseRef: RefObject<MousePosition>
): Mouse => {
  if (!mouseRef || !mouseRef.current) return mouse;

  const rect = canvas.getBoundingClientRect();

  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  const mousePosition: MousePosition = mouseRef.current;

  let angle = mouse.angle;

  if (mouse.x !== mouse.prevX && mouse.y !== mouse.prevY) {
    angle = Math.atan2(mouse.y - mouse.prevY, mouse.x - mouse.prevX);
  }

  return {
    angle,
    prevX: mouse.x,
    prevY: mouse.y,
    x: (mousePosition.x - rect.left) * scaleX,
    y: (mousePosition.y - rect.top) * scaleY,
  };
};

export const animateParticles = (
  canvas: HTMLCanvasElement,
  particles: ParticleEntity[],
  waves: Entity[],
  mouseRef: RefObject<MousePosition>,
  mouse: Mouse,
  canvasSize: CanvasSize
) => {
  const context = canvas.getContext("2d")!;
  const updatedMouse = updateMousePosition(canvas, mouse, mouseRef);

  context.clearRect(0, 0, canvasSize.width, canvasSize.height);

  updateWavesPosition(waves, canvasSize);
  updateParticlesPosition(particles, waves, mouse, canvasSize);

  renderParticlesArc(context, particles);

  requestAnimationFrame(() =>
    animateParticles(
      canvas,
      particles,
      waves,
      mouseRef,
      updatedMouse,
      canvasSize
    )
  );
};
