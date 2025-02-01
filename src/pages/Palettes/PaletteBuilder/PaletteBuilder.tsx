import { useState } from "react";
import { Palette } from "../../../utils/palette";
import { GradientCanvas } from "./GradientCanvas";
import { RangeSlider } from "./RangeSlider";
import { AngleSelector } from "./AngleSelector";
import { linearRainbowToColor, MAX_RAINBOW_COLOR_VALUE } from "./utils";
import { addAlphaToHex } from "../../../utils/colors";
import TextPreview from "../../../components.preview/TextPreview";
import SavePalette from "./SavePalette";
import ColorsRange from "./ColorsRange";
import { BASE_COLORS } from "../../../const/colors";

import { PaletteJSON } from "../../../types/palette";

const rainbowPalette = new Palette(BASE_COLORS.BASE_RAINBOW);
const whitePalette = new Palette(["#fff", "#ffffff00"], 180);

type Props = {
  storePalettes: (p: PaletteJSON[]) => void;
};

const PaletteBuilder = ({ storePalettes }: Props) => {
  const [selected, setSelected] = useState<number | null>(null);

  const [colorAlpha, setColorAlpha] = useState<number>(255);
  const [colorGradient, setColorGradient] = useState<string>("#fff");
  const [baseColor, setBaseColor] = useState<string>("#ff0000");

  const [colors, setColors] = useState<string[]>(["#fff", "#cb95fd", "#000"]);
  const [angle, setAngle] = useState<number>(90);

  const palette = new Palette(colors, angle);

  const onAddColor = () => {
    const color = addAlphaToHex(colorGradient, colorAlpha);

    setColors((colors) => [...colors, color]);
    setSelected(null);
  };

  const selectColor = (i: number) => {
    setSelected((selected) => (i == selected ? null : i));
  };

  const deleteColor = (i: number) => {
    if (colors.length > 2) {
      setColors((colors) => colors.filter((_, index) => index !== i));
      setSelected(null);
    }
  };

  const onUpdateBaseColor = (v: number) => {
    setBaseColor(linearRainbowToColor(v));
  };

  return (
    <div>
      <div className="py-8 flex gap-8 justify-between">
        <ColorsRange
          colors={colors}
          selected={selected}
          selectColor={selectColor}
          deleteColor={deleteColor}
          onAddColor={onAddColor}
        />
        <div className="flex gap-4">
          <div
            className="w-32 h-32 rounded-lg"
            style={{
              backgroundColor: addAlphaToHex(colorGradient, colorAlpha),
            }}
          ></div>
          <GradientCanvas baseColor={baseColor} setColor={setColorGradient} />
          <RangeSlider
            palette={rainbowPalette}
            thumbColor={"#fff"}
            minV={0}
            maxV={MAX_RAINBOW_COLOR_VALUE}
            onValueChange={onUpdateBaseColor}
          />
          <RangeSlider
            palette={whitePalette}
            thumbColor={"#000"}
            minV={0}
            maxV={255}
            onValueChange={setColorAlpha}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div
          className="h-32 rounded-lg flex-1"
          style={{
            background: `${palette.getLinearGradient()}`,
          }}
        ></div>
        <AngleSelector angle={angle} setAngle={setAngle} />
      </div>
      <div className="pt-8">
        <TextPreview gradient={`${palette.getLinearGradient()}`} />
      </div>
      <SavePalette palette={palette} storePalettes={storePalettes} />
    </div>
  );
};

export default PaletteBuilder;
