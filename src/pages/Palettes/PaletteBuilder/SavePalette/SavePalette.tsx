import { useState } from "react";
import { Palette } from "../../../../utils/palette";
import Alert from "../../../../components/Notifications/Alert";
import { ValidatedInput } from "../../../../components/Validation";

import { useLocalStorage } from "../../../../hooks";
import { PaletteJSON } from "../../../../types/palette";

type Props = {
  palette: Palette;
  storePalettes: (p: PaletteJSON[]) => void;
};

const SavePalette = ({ palette, storePalettes }: Props) => {
  const [name, setName] = useState<string>("");
  const [validationError, setValidationError] = useState<string>("");

  const [alertMessage, setAlertMessage] = useState("");

  const { getItem, setItem } = useLocalStorage<PaletteJSON[]>("palettes", []);

  const commonCss =
    "bg-transparent border-2 border-white rounded-lg px-4 py-2 outline-none";

  const onSave = () => {
    if (!name) {
      setValidationError("Palette name shouldn't be empty");
    } else {
      palette.setName(name);

      const palettes = getItem();
      palettes.unshift(palette.getJSON());

      setItem(palettes);
      storePalettes(palettes);

      setAlertMessage("Saved!");
    }
  };

  const onUpdateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validationError) setValidationError("");

    setName(e.currentTarget.value);
  };

  const onCopy = () => {
    navigator.clipboard.writeText(palette.getLinearGradient());
    setAlertMessage("Copied");
  };

  return (
    <div className="py-12 text-lg font-medium flex gap-6">
      <div className="flex flex-1 gap-6">
        <ValidatedInput
          value={name}
          onChange={onUpdateName}
          placeholder="Palette name"
          className={`${commonCss} w-[320px]`}
          validationError={validationError}
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
      {alertMessage && (
        <Alert
          border="shadow"
          message={alertMessage}
          duration={4000}
          onClose={() => setAlertMessage("")}
        />
      )}
    </div>
  );
};

export default SavePalette;
