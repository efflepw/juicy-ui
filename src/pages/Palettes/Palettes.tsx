import { useEffect, useState } from "react";

import { BASE_PALETTES } from "../../const/palette";
import { Palette } from "../../utils/palette";

import { useLocalStorage } from "../../hooks";
import { PaletteJSON } from "../../types/palette";

import PaletteBuilder from "./PaletteBuilder";
import PalettesPreview from "./PalettesPreview";

const Palettes = () => {
  const [savedPalettes, setSavedPalettes] = useState<Palette[]>([]);

  const storePalettes = (jsonPalettes: PaletteJSON[]) => {
    const palettes = jsonPalettes.map(
      (jsp) => new Palette(jsp.colors, jsp.angle, jsp.name)
    );

    setSavedPalettes(palettes);
  };

  useEffect(() => {
    const { getItem } = useLocalStorage<PaletteJSON[]>("palettes", []);

    storePalettes(getItem());
  }, []);

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
            <PalettesPreview palettes={savedPalettes} />
          </>
        )}
        <h2 className="text-3xl pt-10 pb-4">Base palettes</h2>
        <PalettesPreview palettes={BASE_PALETTES} />
      </div>
    </div>
  );
};

export default Palettes;
