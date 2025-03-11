import { useEffect, useState } from "react";

import { BASE_PALETTES } from "../../const/palette";
import { Palette } from "../../utils/palette";

import { useLocalStorage } from "../../hooks";
import { PaletteJSON } from "../../types/palette";

import PaletteBuilder from "./PaletteBuilder";
import PalettesPreview from "./PalettesPreview";
import Alert from "../../components/Notifications/Alert";

const Palettes = () => {
  const [savedPalettes, setSavedPalettes] = useState<Palette[]>([]);
  const [alert, setAlert] = useState<string>("");

  const { getItem, setItem } = useLocalStorage<PaletteJSON[]>("palettes", []);

  const storePalettes = (jsonPalettes: PaletteJSON[]) => {
    const palettes = jsonPalettes.map(
      (jsp) => new Palette(jsp.colors, jsp.angle, jsp.name)
    );

    setSavedPalettes(palettes);
  };

  useEffect(() => {
    storePalettes(getItem());
  }, []);

  const onDelete = (index: number) => {
    const newPalettes = savedPalettes.filter((_, i) => i !== index);

    setSavedPalettes(newPalettes);
    setItem(newPalettes.map((palette) => palette.getJSON()));
    setAlert("Deleted!");
  };

  return (
    <div className="p-6">
      <div>
        <h2 className="text-3xl pb-4">Build your palette</h2>
        <div className="px-6">
          <PaletteBuilder storePalettes={storePalettes} />
        </div>
        {!!savedPalettes.length && (
          <>
            <h2 className="text-3xl pt-10 pb-4">Saved palettes</h2>
            <PalettesPreview palettes={savedPalettes} onDelete={onDelete} />
          </>
        )}
        <h2 className="text-3xl pt-10 pb-4">Base palettes</h2>
        <PalettesPreview palettes={BASE_PALETTES} />
      </div>
      {alert && (
        <Alert
          message={alert}
          onClose={() => setAlert("")}
          palette={BASE_PALETTES[7]}
        />
      )}
    </div>
  );
};

export default Palettes;
