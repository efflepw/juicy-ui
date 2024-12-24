import { RefObject } from "react";
import { MousePosition } from "../../../hooks/useMousePosition";
import {
  BLUR_CONFIG,
  PARTICLE_CONFIG,
  SCENE_CONFIG,
  PARTICLES_MOVE_MODES,
  SNOW_CONFIG,
  SPACE_CONFIG,
  WAVES_CONFIG,
  INTERACTION_MODES,
  PARTICLE_COLOR_CONFIG,
  PARTICLE_ICON,
} from "./const";
import {
  CanvasSize,
  Entity,
  InteractableEntity,
  Mouse,
  ParticleEntity,
  ParticlesCommonProperties,
} from "./types";
import { addAlphaToHex } from "../../../utils/colors";

const getRandomColor = (): string => {
  const randomIndex = Math.floor(Math.random() * SCENE_CONFIG.PALETTE.length);

  return SCENE_CONFIG.PALETTE[randomIndex];
};

const getSpaceParticlePosition = (
  canvasSize: CanvasSize
): Pick<ParticleEntity, "x" | "y" | "angle"> => {
  const cx = canvasSize.width / 2;
  const cy = canvasSize.height / 2;

  const rectLeft = cx - SPACE_CONFIG.RECT_WIDTH / 2;
  const rectRight = cx + SPACE_CONFIG.RECT_WIDTH / 2;
  const rectTop = cy - SPACE_CONFIG.RECT_HEIGHT / 2;
  const rectBottom = cy + SPACE_CONFIG.RECT_HEIGHT / 2;

  let x, y;

  if (Math.random() < 0.5) {
    x =
      Math.random() < 0.5
        ? Math.random() * rectLeft
        : Math.random() * (canvasSize.width - rectRight) + rectRight;
    y = Math.random() * canvasSize.height;
  } else {
    y =
      Math.random() < 0.5
        ? Math.random() * rectTop
        : Math.random() * (canvasSize.height - rectBottom) + rectBottom;
    x = Math.random() * canvasSize.width;
  }

  const angle = Math.atan2(y - cy, x - cx);

  return {
    x,
    y,
    angle,
  };
};

const getSpaceParticlePositionOnRect = (
  canvasSize: CanvasSize
): Pick<ParticleEntity, "x" | "y" | "angle"> => {
  const cx = canvasSize.width / 2;
  const cy = canvasSize.height / 2;

  let x = Math.random() > 0.5 ? SPACE_CONFIG.RECT_WIDTH : 0;
  let y = Math.random() > 0.5 ? SPACE_CONFIG.RECT_HEIGHT : 0;

  const minL = Math.min(SPACE_CONFIG.RECT_WIDTH, SPACE_CONFIG.RECT_HEIGHT);
  const maxL = Math.max(SPACE_CONFIG.RECT_WIDTH, SPACE_CONFIG.RECT_HEIGHT);

  const sideRatio = minL / maxL;
  const rngThreshold = sideRatio == 1 ? 0.5 : sideRatio;

  if (Math.random() < rngThreshold) {
    x = SPACE_CONFIG.RECT_WIDTH * Math.random();
  } else {
    y = SPACE_CONFIG.RECT_HEIGHT * Math.random();
  }

  x = x + cx - SPACE_CONFIG.RECT_WIDTH / 2;
  y = y + cy - SPACE_CONFIG.RECT_HEIGHT / 2;

  const horizontal = SPACE_CONFIG.RECT_WIDTH >= SPACE_CONFIG.RECT_HEIGHT;

  const angle = horizontal
    ? Math.atan2(y - cy, sideRatio * (x - cx))
    : Math.atan2(sideRatio * (y - cy), x - cx);

  return {
    x,
    y,
    angle,
  };
};

const getSize = (): number =>
  PARTICLE_CONFIG.RANDOM_PARTICLE_SIZE
    ? Math.round(Math.random() * PARTICLE_CONFIG.MAX_PARTICLE_SIZE)
    : PARTICLE_CONFIG.MAX_PARTICLE_SIZE;

const getSpeedToSize = (size: number): number => {
  return (
    0.2 * PARTICLE_CONFIG.SPEED +
    0.8 * PARTICLE_CONFIG.SPEED * (size / PARTICLE_CONFIG.MAX_PARTICLE_SIZE)
  );
};

const getBlurSize = () => {
  if (!BLUR_CONFIG.RANDOM_BLUR) return BLUR_CONFIG.BLUR_RADIUS;

  return (
    Math.round(Math.random() * (BLUR_CONFIG.MAX_BLUR - BLUR_CONFIG.MIN_BLUR)) +
    BLUR_CONFIG.MIN_BLUR
  );
};

const generateParticlesCommonProperties = (): ParticlesCommonProperties => {
  const size = getSize();

  return {
    color: getRandomColor(),
    blur: getBlurSize(),
    alpha: PARTICLE_COLOR_CONFIG.ENABLED
      ? PARTICLE_COLOR_CONFIG.INIT_ALPHA_0_255
      : 255,
    alphaToggled: false,
    speed: SCENE_CONFIG.SIZE_TO_SPEED
      ? getSpeedToSize(size)
      : PARTICLE_CONFIG.SPEED,
    size,
    maxSpeed:
      PARTICLE_CONFIG.SPEED + Math.random() * PARTICLE_CONFIG.FLOAT_SPEED_DELTA,
  };
};

export const createParticles = (canvasSize: CanvasSize): ParticleEntity[] => {
  if (SCENE_CONFIG.PARTICLES_FLOATING_MODE == PARTICLES_MOVE_MODES.SPACE) {
    return Array.from({ length: SCENE_CONFIG.PARTICLES_AMOUNT }, () => {
      const { x, y, angle } = getSpaceParticlePosition(canvasSize);

      return {
        ...generateParticlesCommonProperties(),
        x,
        y,
        angle,
      };
    });
  }

  if (SCENE_CONFIG.PARTICLES_FLOATING_MODE == PARTICLES_MOVE_MODES.SNOW) {
    return Array.from({ length: SCENE_CONFIG.PARTICLES_AMOUNT }, () => ({
      ...generateParticlesCommonProperties(),
      x: Math.random() * canvasSize.width,
      y: Math.random() * canvasSize.height,
      angle: SNOW_CONFIG.INIT_ANGLE,
    }));
  }

  return Array.from({ length: SCENE_CONFIG.PARTICLES_AMOUNT }, () => ({
    ...generateParticlesCommonProperties(),
    x: Math.random() * canvasSize.width,
    y: Math.random() * canvasSize.height,
    angle: Math.random() * Math.PI * 2,
  }));
};

export const createWaves = (canvasSize: CanvasSize): Entity[] =>
  Array.from({ length: WAVES_CONFIG.COUNT }, () => ({
    x: Math.random() * canvasSize.width,
    y: Math.random() * canvasSize.height,
    angle: Math.random() * Math.PI * 2,
    speed:
      WAVES_CONFIG.BASE_SPEED + Math.random() * PARTICLE_CONFIG.SPEED_DELTA,
  }));

const waveRepulsion = (
  particle: ParticleEntity,
  wave: InteractableEntity,
  size: number
): boolean => {
  const distanceToWave = calculateDistance(particle, wave);

  if (distanceToWave < size) {
    const angle = Math.atan2(particle.y - wave.y, particle.x - wave.x);

    particle.angle = angle;
    particle.speed = particle.speed + SCENE_CONFIG.DISTANCE_ACCELERATOR;

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
      particle.speed + SCENE_CONFIG.DISTANCE_ACCELERATOR,
      PARTICLE_CONFIG.SPEED_CAP
    );

    return true;
  }

  return false;
};

const interactWithMouse = (particle: ParticleEntity, mouse: Mouse) => {
  switch (SCENE_CONFIG.MOUSE_MODE) {
    case INTERACTION_MODES.REPULSION:
      return waveRepulsion(
        particle,
        mouse,
        SCENE_CONFIG.MOUSE_INTERACTION_DISTANCE
      );
    case INTERACTION_MODES.ATTRACTION:
      return waveAttraction(
        particle,
        mouse,
        SCENE_CONFIG.MOUSE_INTERACTION_DISTANCE
      );
    default:
      return false;
  }
};

const interactWithWaves = (particle: ParticleEntity, waves: Entity[]) => {
  let interacted = false;

  if (WAVES_CONFIG.WAVE_INTERACTION_MODE == INTERACTION_MODES.ATTRACTION) {
    waves.forEach((wave) => {
      interacted =
        interacted || waveAttraction(particle, wave, WAVES_CONFIG.SIZE);
    });
  } else if (
    WAVES_CONFIG.WAVE_INTERACTION_MODE == INTERACTION_MODES.REPULSION
  ) {
    waves.forEach((wave) => {
      interacted =
        interacted || waveRepulsion(particle, wave, WAVES_CONFIG.SIZE);
    });
  }

  return interacted;
};

const updateParticleAlpha = (particle: ParticleEntity, wrapped: boolean) => {
  if (wrapped && PARTICLE_COLOR_CONFIG.RESET_AFTER_WRAPPING) {
    particle.alphaToggled = false;
    particle.alpha = PARTICLE_COLOR_CONFIG.INIT_ALPHA_0_255;
  }

  if (particle.alphaToggled) {
    if (particle.alpha > PARTICLE_COLOR_CONFIG.MIN_ALPHA_0_255) {
      particle.alpha -= PARTICLE_COLOR_CONFIG.ALPHA_DELTA_DEC;
      particle.alpha = Math.max(
        particle.alpha,
        PARTICLE_COLOR_CONFIG.MIN_ALPHA_0_255
      );
    }
  } else {
    particle.alpha += PARTICLE_COLOR_CONFIG.ALPHA_DELTA_INC;

    if (
      !particle.alphaToggled &&
      particle.alpha > PARTICLE_COLOR_CONFIG.MAX_ALPHA_0_255
    ) {
      particle.alpha = Math.min(
        particle.alpha,
        PARTICLE_COLOR_CONFIG.MAX_ALPHA_0_255
      );
      particle.alphaToggled = true;
    }
  }
};

const updateParticles = (
  particles: ParticleEntity[],
  waves: Entity[],
  mouse: Mouse,
  canvasSize: CanvasSize
) => {
  particles.forEach((particle) => {
    let interacted = false;

    if (SCENE_CONFIG.MOUSE_MODE !== INTERACTION_MODES.OFF) {
      interacted = interactWithMouse(particle, mouse);
    }

    if (SCENE_CONFIG.ENABLE_WAVES) {
      interacted = interacted || interactWithWaves(particle, waves);
    }

    if (BLUR_CONFIG.BLUR_SHIFT) {
      particle.blur += (Math.random() - 0.5) * 0.2;
      particle.blur = Math.min(particle.blur, BLUR_CONFIG.MAX_BLUR);
      particle.blur = Math.max(particle.blur, BLUR_CONFIG.MIN_BLUR);
    }

    particle.x += Math.cos(particle.angle) * particle.speed;
    particle.y += Math.sin(particle.angle) * particle.speed;

    if (SCENE_CONFIG.PARTICLES_FLOATING_MODE == PARTICLES_MOVE_MODES.RANDOM) {
      particle.angle += PARTICLE_CONFIG.ANGLE_DELTA * (Math.random() - 0.5);
    }

    if (SCENE_CONFIG.PARTICLES_FLOATING_MODE == PARTICLES_MOVE_MODES.SNOW) {
      particle.angle += PARTICLE_CONFIG.ANGLE_DELTA * (Math.random() - 0.5);

      particle.angle = Math.min(
        particle.angle,
        SNOW_CONFIG.INIT_ANGLE + SNOW_CONFIG.MAX_ANGLE_DELTA / 2
      );
      particle.angle = Math.max(
        particle.angle,
        SNOW_CONFIG.INIT_ANGLE - SNOW_CONFIG.MAX_ANGLE_DELTA / 2
      );
    }

    if (!interacted && particle.speed > particle.maxSpeed) {
      particle.speed -= SCENE_CONFIG.DISTANCE_SLOW;
    }

    particle.speed = Math.max(particle.speed, 0);

    const wrapped = wrapAroundCanvas(particle, canvasSize);

    if (PARTICLE_COLOR_CONFIG.ENABLED) {
      updateParticleAlpha(particle, wrapped);
    }
  });
};

const updateWaves = (waves: Entity[], canvasSize: CanvasSize): void => {
  waves.forEach((wave) => {
    wave.x += Math.cos(wave.angle) * wave.speed;
    wave.y += Math.sin(wave.angle) * wave.speed;

    wave.angle += WAVES_CONFIG.ANGLE_DELTA * (Math.random() - 0.5);

    wrapAroundCanvas(wave, canvasSize);
  });
};

const wrapAroundCanvas = (
  particle: Entity,
  canvasSize: CanvasSize
): boolean => {
  if (SCENE_CONFIG.PARTICLES_FLOATING_MODE == PARTICLES_MOVE_MODES.SPACE) {
    if (
      particle.x < 0 ||
      particle.x > canvasSize.width ||
      particle.y < 0 ||
      particle.y > canvasSize.height
    ) {
      const { x, y, angle } = getSpaceParticlePositionOnRect(canvasSize);

      particle.x = x;
      particle.y = y;
      particle.angle = angle;

      return true;
    }
  } else {
    if (particle.x < 0) particle.x = canvasSize.width;
    if (particle.x > canvasSize.width) particle.x = 0;
    if (particle.y < 0) particle.y = canvasSize.height;
    if (particle.y > canvasSize.height) particle.y = 0;
  }

  return false;
};

const calculateDistance = (p1: InteractableEntity, p2: InteractableEntity) =>
  Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

const snowflake = [
  { start: [0, -3.5], end: [0, 3.5] },
  { start: [-3, -2], end: [3, 2] },
  { start: [-3, 2], end: [3, -2] },
];

const renderSnowflake = (
  ctx: CanvasRenderingContext2D,
  particles: ParticleEntity[]
) => {
  particles.forEach((p) => {
    const color = addAlphaToHex(p.color, p.alpha);

    ctx.beginPath();

    const k = 1 + p.size / 2;

    snowflake.forEach((sl) => {
      ctx.moveTo(p.x + sl.start[0] * k, p.y + sl.start[1] * k);
      ctx.lineTo(p.x + sl.end[0] * k, p.y + sl.end[1] * k);
    });
    ctx.shadowBlur = Math.round(p.blur);
    ctx.shadowColor = color;

    ctx.lineWidth = k - 0.5;
    ctx.strokeStyle = color;
    ctx.stroke();
  });
};

const renderParticlesArc = (
  ctx: CanvasRenderingContext2D,
  particles: ParticleEntity[]
) => {
  particles.forEach((particle) => {
    const color = addAlphaToHex(particle.color, particle.alpha);

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.shadowBlur = Math.round(particle.blur);
    ctx.shadowColor = color;

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

const debugCanvas = (
  context: CanvasRenderingContext2D,
  canvasSize: CanvasSize
) => {
  context.beginPath();
  context.stroke();
  context.rect(
    canvasSize.width / 2 - SPACE_CONFIG.RECT_WIDTH / 2,
    canvasSize.height / 2 - SPACE_CONFIG.RECT_HEIGHT / 2,
    SPACE_CONFIG.RECT_WIDTH,
    SPACE_CONFIG.RECT_HEIGHT
  );
  context.shadowBlur = 6;
  context.shadowColor = "white";
  context.fillStyle = "black";
  context.fill();
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

  updateWaves(waves, canvasSize);
  updateParticles(particles, waves, mouse, canvasSize);

  if (SCENE_CONFIG.ICONS == PARTICLE_ICON.SNOWFLAKE) {
    renderSnowflake(context, particles);
  } else if (SCENE_CONFIG.ICONS == PARTICLE_ICON.ARC) {
    renderParticlesArc;
  }

  if (SCENE_CONFIG.DEBUG) {
    debugCanvas(context, canvasSize);
  }

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
