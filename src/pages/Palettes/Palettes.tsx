import TextPreview from "../../components.preview/TextPreview";
import { BASE_PALETTES } from "../../const/palette";
import { toTitleCase } from "../../utils/format";
import PaletteBuilder from "./PaletteBuilder";

const Palettes = () => {
  return (
    <div className="">
      <div>
        <h2 className="text-3xl pt-10 pb-4">Build your palette</h2>
        <div className="px-6">
          <PaletteBuilder />
        </div>
        {/* <h2 className="text-3xl pt-10 pb-4">Saved palettes</h2> */}
        <h2 className="text-3xl pt-10 pb-4">Base palettes</h2>
        <div className="px-6">
          {Object.entries(BASE_PALETTES).map(([name, palette]) => (
            <div key={name} className="pb-6">
              <h2 className="text-4xl py-8">{toTitleCase(name)}</h2>
              <div
                className="w-full h-40 rounded-lg"
                style={{
                  background: `${palette.getLinearGradient()}`,
                }}
              ></div>
              <div className="relative h-24">
                <div className="absolute top-[-80px] right-0 left-0">
                  <TextPreview gradient={palette.getLinearGradient()} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Palettes;
