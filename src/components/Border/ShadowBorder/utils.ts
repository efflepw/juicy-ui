import { Palette } from "../../../utils/palette";

const BLUR_PATTERN = [10, 14];
const SPREAD_PATTERN = [6, 4];

export const getPulseKeyFrames = (palette: Palette): string => {
  const colors = palette.getColors();
  const step = 100 / colors.length;

  const keyframeRules = colors.map((color, i) => {
    const percentage = `${step * i}%`;
    const blur = BLUR_PATTERN[i % 2];
    const spread = SPREAD_PATTERN[i % 2];

    return `
      ${percentage} {
        box-shadow: 0 0 ${blur}px ${spread}px ${color};
      }
    `;
  });

  const li = (colors.length - 1) % 2;

  const lastKeyframe = `
    100% {
      box-shadow: 0 0 ${BLUR_PATTERN[li]}px ${SPREAD_PATTERN[li]}px ${colors[0]};
    }
  `;

  return `
    ${keyframeRules.join("\n")}
    ${lastKeyframe}
  `;
};
