import { RGBColor } from "../../../types/colors";
import { parseRgbValues, rgbToHex } from "../../../utils/colors";

export const MAX_RAINBOW_COLOR_VALUE = 1530;

const MAX_X = 176;
const MAX_Y = 102;

export const GC_WIDTH = 196;
export const GC_HEIGHT = 128;

const getColorOffsets = (value: number) => {
  const section = Math.floor(value / 255);
  const offset = value % 255;

  switch (section) {
    case 0:
      return { r: 255, g: offset, b: 0 };
    case 1:
      return { r: 255 - offset, g: 255, b: 0 };
    case 2:
      return { r: 0, g: 255, b: offset };
    case 3:
      return { r: 0, g: 255 - offset, b: 255 };
    case 4:
      return { r: offset, g: 0, b: 255 };
    case 5:
      return { r: 255, g: 0, b: 255 - offset };
    default:
      return { r: 255, g: 0, b: 0 };
  }
};

export const linearRainbowToColor = (value: number): string => {
  if (value < 0 || value > 1530) return "#ff0000";

  let rgb = getColorOffsets(value);

  return `#${rgb.r.toString(16).padStart(2, "0")}${rgb.g
    .toString(16)
    .padStart(2, "0")}${rgb.b.toString(16).padStart(2, "0")}`;
};

export const gradientToColor = (
  baseColor: string,
  x: number,
  y: number
): string => {
  const rgb = parseRgbValues(baseColor);

  const xFactor = x / MAX_X;
  const yFactor = y / MAX_Y;

  const r = (1 - yFactor) * ((1 - xFactor) * 255 + xFactor * rgb.r);
  const g = (1 - yFactor) * ((1 - xFactor) * 255 + xFactor * rgb.g);
  const b = (1 - yFactor) * ((1 - xFactor) * 255 + xFactor * rgb.b);

  const selectedRgb = {
    r: Math.round(r),
    g: Math.round(g),
    b: Math.round(b),
  };

  return rgbToHex(selectedRgb);
};

export const reverseColor = (
  color: string
): { x: number; y: number; baseColor: RGBColor } => {
  const { r, g, b } = parseRgbValues(color);

  const yFactor = 1 - Math.min(r, g, b) / 255;
  const y = Math.round(yFactor * MAX_Y);

  const xFactor = (r - yFactor * 255) / (255 * (1 - yFactor));
  const x = Math.round(xFactor * MAX_X);

  const baseR = Math.round((r - (1 - xFactor) * 255) / xFactor);
  const baseG = Math.round((g - (1 - xFactor) * 255) / xFactor);
  const baseB = Math.round((b - (1 - xFactor) * 255) / xFactor);

  const baseColor: RGBColor = { r: baseR, g: baseG, b: baseB };

  return { x, y, baseColor };
};

export const drawGradient = (canvas: HTMLCanvasElement, baseColor: string) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = GC_WIDTH;
  canvas.height = GC_HEIGHT;

  ctx.clearRect(0, 0, GC_WIDTH, GC_HEIGHT);

  const colorGradient = ctx.createLinearGradient(0, 0, GC_WIDTH, 0);

  colorGradient.addColorStop(0, "white");
  colorGradient.addColorStop(1, baseColor);

  ctx.fillStyle = colorGradient;
  ctx.fillRect(0, 0, GC_WIDTH, GC_HEIGHT);

  const blackGradient = ctx.createLinearGradient(0, 0, 0, GC_HEIGHT);

  blackGradient.addColorStop(0, "transparent");
  blackGradient.addColorStop(1, "black");

  ctx.fillStyle = blackGradient;
  ctx.fillRect(0, 0, GC_WIDTH, GC_HEIGHT);
};
