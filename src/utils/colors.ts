import { RGBColor } from "../types/colors";

const getBase6DigitColor = (color: string): string => {
  switch (color.length) {
    case 4:
      return `#${
        color[1] + color[1] + color[2] + color[2] + color[3] + color[3]
      }`;
    case 9:
      return `#${color.slice(1, 7)}`;
    default:
      return color;
  }
};

export const addAlphaToHex = (color: string, alpha: number) => {
  return getBase6DigitColor(color) + Math.round(alpha).toString(16);
};

export const parseRgbValues = (hex: string): RGBColor => {
  if (hex.length != 7) return { r: 0, g: 0, b: 0 };

  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  };
};

export const rgbToHex = (rgb: RGBColor) => {
  const toHex = (value: number) => value.toString(16).padStart(2, "0");

  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
};
