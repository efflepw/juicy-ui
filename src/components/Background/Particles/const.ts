export const THEMES = {
  PALETTE_1: ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],
  PALETTE_2: ["#f4f1de", "#e07a5f", "#3d405b", "#81b29a", "#f2cc8f"],
  PALETTE_3: ["#fff"],
  PALETTE_4: ["#FEFFD2", "#FFEEA9", "#FFBF78", "#FF7D29"],
  PALETTE_5: ["#a67c00", "#bf9b30", "#ffbf00", "#ffcf40", "#ffdc73"],
  PALETTE_6: ["#c4c4fd", "#ffec9c", "#6a71a5", "#35336b", "#091e36"],
  PALETTE_7: ["#c4c4fd", "#fff", "#6a71a5", "#b3b1fc", "#c7dbf2"],
  RAINBOW: ["#bb90facc", "#fd9090cc", "#fff962cc", "#9bf993cc", "#80daf5cc"],
};

export const PARTICLE_ICON = {
  SNOWFLAKE: "snowflake",
  ARC: "arc",
};

export const INTERACTION_MODES = {
  REPULSION: "repulsion",
  ATTRACTION: "attraction",
  OFF: "off",
};

export const PARTICLES_MOVE_MODES = {
  RANDOM: "random",
  SPACE: "space",
  SNOW: "snow",
};

export const PARTICLE_COLOR_CONFIG = {
  ENABLED: false,
  RESET_AFTER_WRAPPING: false,
  INIT_ALPHA_0_255: 16,
  MIN_ALPHA_0_255: 16,
  MAX_ALPHA_0_255: 255,
  ALPHA_DELTA_INC: 0.5,
  ALPHA_DELTA_DEC: 0,
};

export const PARTICLE_CONFIG = {
  SPEED: 2,
  SPEED_DELTA: 0.5,
  ANGLE_DELTA: 0.02,
  FLOAT_SPEED_DELTA: 0.2,
  SPEED_CAP: 3,
  RANDOM_PARTICLE_SIZE: true,
  MAX_PARTICLE_SIZE: 3,
};

export const SCENE_CONFIG = {
  PARTICLES_AMOUNT: 100,
  DISTANCE_ACCELERATOR: 0,
  DISTANCE_SLOW: 0.001,
  SIZE_TO_SPEED: true,
  MOUSE_INTERACTION_DISTANCE: 75,
  PALETTE: THEMES.PALETTE_7,
  MOUSE_MODE: INTERACTION_MODES.REPULSION,
  ENABLE_WAVES: true,
  PARTICLES_FLOATING_MODE: PARTICLES_MOVE_MODES.SNOW,
  DEBUG: false,
  ICONS: PARTICLE_ICON.SNOWFLAKE,
};

export const BLUR_CONFIG = {
  RANDOM_BLUR: false,
  BLUR_RADIUS: 10,
  MIN_BLUR: 10,
  MAX_BLUR: 20,
  BLUR_SHIFT: false,
};

export const SPACE_CONFIG = {
  RECT_WIDTH: 80,
  RECT_HEIGHT: 40,
};

export const SNOW_CONFIG = {
  INIT_ANGLE: Math.PI / 2,
  MAX_ANGLE_DELTA: Math.PI / 4,
};

export const WAVES_CONFIG = {
  WAVE_INTERACTION_MODE: INTERACTION_MODES.OFF,
  COUNT: 10,
  BASE_SPEED: 0.5,
  SIZE: 100,
  SPEED_DELTA: 0.3,
  ANGLE_DELTA: 0.2,
};

export const MOUSE_INITIAL_STATE = {
  x: -1 * SCENE_CONFIG.MOUSE_INTERACTION_DISTANCE,
  y: -1 * SCENE_CONFIG.MOUSE_INTERACTION_DISTANCE,
  prevX: -1 * SCENE_CONFIG.MOUSE_INTERACTION_DISTANCE,
  prevY: -1 * SCENE_CONFIG.MOUSE_INTERACTION_DISTANCE,
  angle: 0,
};
