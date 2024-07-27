export const THEMES = {
  PALETTE_1: ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],
  PALETTE_2: ["#f4f1de", "#e07a5f", "#3d405b", "#81b29a", "#f2cc8f"],
  PALETTE_3: ["#fff"],
  PALETTE_4: ["#FEFFD2", "#FFEEA9", "#FFBF78", "#FF7D29"],
  PALETTE_5: ["#a67c00", "#bf9b30", "#ffbf00", "#ffcf40", "#ffdc73"],
  PALETTE_6: ["#c4c4fd", "#ffec9c", "#6a71a5", "#35336b", "#091e36"],
};

export const MOUSE_MODES = {
  REPULSION: "repulsion",
  ATTRACTION: "attraction",
  OFF: "off",
};

export const CONFIG = {
  PARTICLES_AMOUNT: 300,
  SPEED: 0.2,
  SPEED_DELTA: 0.1,
  ANGLE_DELTA: 0.05,
  FLOAT_SPEED_DELTA: 0.3,
  DISTANCE_ACCELERATOR: 0.01,
  DISTANCE_SLOW: 0.005,
  SPEED_CAP: 1.8,
  CANVAS_WIDTH: 1728,
  CANVAS_HEIGHT: 897,
  ARC_SIZE: 3,
  INTERACTION_DISTANCE: 100,
  PALETTE: THEMES.PALETTE_1,
  MOUSE_MODE: MOUSE_MODES.OFF,
  ENABLE_WAVES: true,
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
