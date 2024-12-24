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
