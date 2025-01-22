export class Palette {
  private colors: string[];
  private gradientAngle: number;
  private name: string;

  constructor(colors: string[], angle: number = 0, name: string = "") {
    this.colors = colors;
    this.gradientAngle = angle;
    this.name = name;
  }

  getLinearGradient = () => {
    const colors = this.colors.join(", ");

    return `linear-gradient(${this.gradientAngle}deg, ${colors})`;
  };

  getColors = () => {
    return this.colors;
  };

  getName = () => {
    return this.name;
  };
}
