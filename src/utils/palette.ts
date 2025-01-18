export class Palette {
  private colors: string[];
  private gradientAngle: number;

  constructor(colors: string[], angle: number = 0) {
    this.colors = colors;
    this.gradientAngle = angle;
  }

  getLinearGradient = () => {
    const colors = this.colors.join(", ");

    return `linear-gradient(${this.gradientAngle}deg, ${colors})`;
  };

  rotateLinearGradient = (angle: number) => {
    const colors = this.colors.join(", ");

    return `linear-gradient(${angle}deg, ${colors})`;
  };

  getColors = () => {
    return this.colors;
  };
}
