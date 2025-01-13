import { useState } from "react";
import { Palette } from "../../../utils/palette";

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

  const [colors, setColors] = useState<string[]>(["#fff", "#cb95fd", "#000"]);
  const [angle] = useState<number>(90);

  const palette = new Palette(colors, angle);

  const addColor = () => {
    setColors((colors) => [...colors, "#fff"]);
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

  return (
    <div>
      <div className="py-8 flex gap-8 justify-between">
        <div className="flex gap-2 flex-wrap">
          {colors.map((color, i) => (
            <div className="flex flex-col gap-2 h-40">
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
                <span className="rotate-[45deg] text-white text-4xl cursor-pointer">
                  +
                </span>
              </div>
            </div>
          ))}
          <div
            className="flex justify-center items-center w-10 h-40 border-2 rounded-lg cursor-pointer text-4xl text-white border-white"
            onClick={addColor}
          >
            <span>+</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div
            className="w-40 h-40 rounded-lg"
            style={{ backgroundColor: selected ? colors[selected] : "#fff" }}
          ></div>
          <canvas className="w-60 h-40 rounded-lg bg-white"></canvas>
          <div
            className="w-10 h-40 rounded-lg bg-white"
            style={{ background: rainbowPalette.getLinearGradient() }}
          ></div>
          <div
            className="w-10 h-40 rounded-lg"
            style={{
              background: `${whitePalette.getLinearGradient()}`,
            }}
          ></div>
        </div>
      </div>
      <div className="flex gap-4">
        <div
          className="h-40 rounded-lg flex-1"
          style={{
            background: `${palette.getLinearGradient()}`,
          }}
        ></div>
        <div className="w-40 h-40 bg-white rounded-lg flex justify-center items-center">
          <div className="flex justify-center items-center w-36 h-36 border-2 border-black rounded-full border-dashed">
            <span className="text-black text-4xl select-none">{angle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaletteBuilder;
