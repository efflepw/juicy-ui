import TextPreview from "../../../components.preview/TextPreview";
import { Palette } from "../../../utils/palette";

type Props = {
  palettes: Palette[];
};

const PalettesPreview = ({ palettes }: Props) => {
  return (
    <div className="px-6">
      {palettes.map((palette) => (
        <div key={palette.getName()} className="pb-6">
          <h2 className="text-4xl py-8">{palette.getName()}</h2>
          <div
            className="w-full h-32 rounded-lg"
            style={{
              background: `${palette.getLinearGradient()}`,
            }}
          ></div>
          <div className="relative h-24">
            <div className="absolute top-[-64px] right-0 left-0">
              <TextPreview gradient={palette.getLinearGradient()} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PalettesPreview;
