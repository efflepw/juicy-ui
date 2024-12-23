export const THEMES = {
  PALETTE_1: ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],
  PALETTE_2: ["#f4f1de", "#e07a5f", "#3d405b", "#81b29a", "#f2cc8f"],
  PALETTE_3: ["#fff"],
  PALETTE_4: ["#FEFFD2", "#FFEEA9", "#FFBF78", "#FF7D29"],
  PALETTE_5: ["#a67c00", "#bf9b30", "#ffbf00", "#ffcf40", "#ffdc73"],
  PALETTE_6: ["#c4c4fd", "#ffec9c", "#6a71a5", "#35336b", "#091e36"],
  RAINBOW: ["#bb90facc", "#fd9090cc", "#fff962cc", "#9bf993cc", "#80daf5cc"],
};

export const MOUSE_MODES = {
  REPULSION: "repulsion",
  ATTRACTION: "attraction",
  OFF: "off",
};

export const PARTICLES_MOVE_MODES = {
  RANDOM: "random",
  SPACE: "space",
  SNOW: "snow",
};

export const CONFIG = {
  PARTICLES_AMOUNT: 100,
  SPEED: 1.2,
  SPEED_DELTA: 0,
  ANGLE_DELTA: 0.01,
  FLOAT_SPEED_DELTA: 0.1,
  DISTANCE_ACCELERATOR: 0.01,
  DISTANCE_SLOW: 0.005,
  SPEED_CAP: 2,
  MAX_ARC_SIZE: 4,
  RANDOM_ARC_SIZE: true,
  SIZE_TO_SPEED: true,
  INTERACTION_DISTANCE: 100,
  PALETTE: THEMES.PALETTE_3,
  MOUSE_MODE: MOUSE_MODES.OFF,
  ENABLE_WAVES: false,
  PARTICLES_FLOATING_MODE: PARTICLES_MOVE_MODES.SNOW,
  DEBUG: false,
};

export const SPACE_CONFIG = {
  RECT_WIDTH: 440,
  RECT_HEIGHT: 220,
};

export const SNOW_CONFIG = {
  INIT_ANGLE: Math.PI / 2,
  MAX_ANGLE_DELTA: Math.PI / 4,
};

export const WAVES_CONFIG = {
  COUNT: 10,
  BASE_SPEED: 0.5,
  SIZE: 50,
  SPEED_DELTA: 0.4,
  ANGLE_DELTA: 0.1,
};

export const MOUSE_INITIAL_STATE = {
  x: -1 * CONFIG.INTERACTION_DISTANCE,
  y: -1 * CONFIG.INTERACTION_DISTANCE,
  prevX: -1 * CONFIG.INTERACTION_DISTANCE,
  prevY: -1 * CONFIG.INTERACTION_DISTANCE,
  angle: 0,
};
