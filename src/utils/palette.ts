import { PaletteJSON } from "../types/palette";

export class Palette {
  private colors: string[];
  private angle: number;
  private name: string;

  constructor(colors: string[], angle: number = 0, name: string = "") {
    this.colors = colors;
    this.angle = angle;
    this.name = name;
  }

  getLinearGradient = (): string => {
    const colors = this.colors.join(", ");

    return `linear-gradient(${this.angle}deg, ${colors})`;
  };

  getColors = (): string[] => {
    return this.colors;
  };

  getName = (): string => {
    return this.name;
  };

  setName = (name: string) => {
    this.name = name;
  };

  setAngle = (angle: number) => {
    this.angle = angle;
  };

  getJSON = (): PaletteJSON => ({
    name: this.getName(),
    colors: this.colors,
    angle: this.angle,
  });
}
