import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { PaletteJSON } from "../types/palette";
import { Palette } from "../utils/palette";
import { BASE_PALETTES } from "../const/palette";

const usePalettes = (): Palette[] => {
  const [savedPalettes, setSavedPalettes] = useState<Palette[]>(BASE_PALETTES);

  const storePalettes = (jsonPalettes: PaletteJSON[]) => {
    const palettes = jsonPalettes.map(
      (jsp) => new Palette(jsp.colors, jsp.angle, jsp.name)
    );

    setSavedPalettes([...palettes, ...BASE_PALETTES]);
  };

  useEffect(() => {
    const { getItem } = useLocalStorage<PaletteJSON[]>("palettes", []);

    storePalettes(getItem());
  }, []);

  return savedPalettes;
};

export default usePalettes;
