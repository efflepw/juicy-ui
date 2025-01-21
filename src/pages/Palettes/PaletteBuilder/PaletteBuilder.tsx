import { useState } from "react";
import { Palette } from "../../../utils/palette";
import { GradientCanvas } from "./GradientCanvas";
import { RangeSlider } from "./RangeSlider";
import { AngleSelector } from "./AngleSelector";
import { linearRainbowToColor, MAX_RAINBOW_COLOR_VALUE } from "./utils";
import { addAlphaToHex } from "../../../utils/colors";
import TextPreview from "../../../components.preview/TextPreview";

const rainbowPalette = new Palette([
  "#ff0000",
  "#ffff00",
  "#00ff00",
  "#00ffff",
  "#0000ff",
  "#ff00ff",
  "#ff0000",
]);

const whitePalette = new Palette(["#fff", "#ffffff00"], 180);

const PaletteBuilder = () => {
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

  // const updateColor = (newColor: string) => {
  //   setColors((colors) => colors.map((c, i) => (i == selected ? newColor : c)));
  //   setSelected(null);
  // };

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
        <div className="flex gap-4 flex-wrap">
          {colors.map((color, i) => (
            <div key={i} className="flex flex-col gap-2 h-32">
              <div
                className={`w-10 rounded-lg border-2 cursor-pointer flex-1 ${
                  selected == i ? "border-black" : "border-[#fff8]"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => selectColor(i)}
              ></div>
              <div
                className={`w-10 h-10 border-2 border-white rounded-lg flex justify-center items-center`}
                onClick={() => deleteColor(i)}
              >
                <span className="rotate-[45deg] text-white text-4xl cursor-pointer select-none">
                  +
                </span>
              </div>
            </div>
          ))}
          <div
            className="flex justify-center items-center w-10 h-32 border-2 rounded-lg cursor-pointer text-4xl text-white border-white select-none"
            onClick={onAddColor}
          >
            <span>+</span>
          </div>
        </div>
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
            background: `${palette.rotateLinearGradient(angle)}`,
          }}
        ></div>
        <AngleSelector angle={angle} setAngle={setAngle} />
      </div>
      <div className="pt-8">
        <TextPreview gradient={`${palette.rotateLinearGradient(angle)}`} />
      </div>
    </div>
  );
};

export default PaletteBuilder;
