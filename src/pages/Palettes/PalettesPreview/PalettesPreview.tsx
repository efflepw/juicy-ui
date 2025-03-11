import TextPreview from "../../../components.preview/TextPreview";
import { Palette } from "../../../utils/palette";

type Props = {
  palettes: Palette[];
  onDelete?: (i: number) => void;
};

const PalettesPreview = ({ palettes, onDelete }: Props) => {
  return (
    <div className="px-6">
      {palettes.map((palette, i) => (
        <div key={palette.getName()} className="pb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl py-8">{palette.getName()}</h2>
            {onDelete && (
              <div
                className={`w-10 h-10 border-2 border-white rounded-lg flex justify-center items-center`}
                onClick={() => onDelete(i)}
              >
                <span className="rotate-[45deg] text-4xl cursor-pointer select-none">
                  +
                </span>
              </div>
            )}
          </div>
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
