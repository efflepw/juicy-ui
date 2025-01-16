export const MAX_RAINBOW_COLOR_VALUE = 1530;

export const linearRainbowToColor = (value: number): string => {
  if (value < 0 || value > 1530) return "#ff0000";

  const section = Math.floor(value / 255);
  const offset = value % 255;

  let rgb = { r: 0, g: 0, b: 0 };

  switch (section) {
    case 0:
      rgb.r = 255;
      rgb.g = offset;
      break;
    case 1:
      rgb.r = 255 - offset;
      rgb.g = 255;
      break;
    case 2:
      rgb.g = 255;
      rgb.b = offset;
      break;
    case 3:
      rgb.g = 255 - offset;
      rgb.b = 255;
      break;
    case 4:
      rgb.b = 255;
      rgb.r = offset;
      break;
    case 5:
      rgb.r = 255;
      rgb.b = 255 - offset;
      break;
    default:
      rgb.r = 255;
      break;
  }

  return `#${rgb.r.toString(16).padStart(2, "0")}${rgb.g
    .toString(16)
    .padStart(2, "0")}${rgb.b.toString(16).padStart(2, "0")}`;
};

export const gradientToColor = (
  baseColor: string,
  x: number,
  y: number
): string => {
  console.log({ baseColor, x, y });
  return baseColor;
};
