import TextPreview from "../../../components.preview/TextPreview";
import { Palette } from "../../../utils/palette";
import { useState } from "react";
import Alert from "../../../components/Notifications/Alert";
import { BASE_PALETTES } from "../../../const/palette";

type Props = {
  palettes: Palette[];
  onDelete?: (i: number) => void;
};

const PalettesPreview = ({ palettes, onDelete }: Props) => {
  const [alertMessage, setAlertMessage] = useState("");
  
  const onCopy = (gradient: string) => {
    navigator.clipboard.writeText(gradient);
    setAlertMessage("Copied");
  };
  
  return (
    <div className="px-6">
      {palettes.map((palette, i) => (
        <div key={palette.getName()} className="pb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl py-8">{palette.getName()}</h2>
            <div className="flex gap-4">
              <div
                className={`w-10 h-10 border-2 border-white rounded-lg flex justify-center items-center cursor-pointer transition duration-200 hover:scale-110`}
                onClick={() => onCopy(palette.getLinearGradient())}
                title="Copy CSS"
              >
                <img src="copy.svg" className="filter invert" />
              </div>
              {onDelete && (
                <div
                  className={`w-10 h-10 border-2 border-white rounded-lg flex justify-center items-center cursor-pointer transition duration-200 hover:scale-110`}
                  onClick={() => onDelete(i)}
                  title="Delete"
                >
                  <img src="trash.svg" className="filter invert" />
                </div>
              )}
            </div>
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
      {alertMessage && (
        <Alert
          palette={BASE_PALETTES[0]}
          border="shadow"
          message={alertMessage}
          duration={4000}
          onClose={() => setAlertMessage("")}
        />
      )}
    </div>
  );
};

export default PalettesPreview;
