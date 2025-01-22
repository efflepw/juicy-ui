import { useState } from "react";
import { Palette } from "../../../../utils/palette";

type Props = {
  palette: Palette;
};

const SavePalette = ({ palette }: Props) => {
  const [name, setName] = useState<string>("");

  const commonCss =
    "bg-transparent border-2 border-white rounded-lg px-4 py-2 outline-none";

  const onSave = () => {
    alert("Not Yet! But you can copy it");
  };

  const onCopy = () => {
    navigator.clipboard.writeText(palette.getLinearGradient());
    alert("Copied");
  };

  return (
    <div className="py-12 text-lg font-medium flex gap-6">
      <div className="flex flex-1 gap-6">
        <input
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Palette name"
          className={`${commonCss} w-[320px]`}
        />
        <button onClick={onSave} className={`${commonCss} w-40`}>
          Save
        </button>
      </div>
      <div>
        <button onClick={onCopy} className={`${commonCss} w-40`}>
          Copy CSS
        </button>
      </div>
    </div>
  );
};

export default SavePalette;
