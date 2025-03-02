import { useState } from "react";
import PageEnd from "../../components/Aura/PageEnd";
import TextGradient from "../../components/Text/TextGradient";
import { BASE_COLORS } from "../../const/colors";
import { Palette } from "../../utils/palette";
import PaletteSelect from "../PaletteSelect";
import { BASE_PALETTES } from "../../const/palette";

const AuraPreview = () => {
  const textPalette = new Palette(BASE_COLORS["TAILWIND"], 45);
  const defaultPalette = BASE_PALETTES[0];
  const [selectedPalette, setSelectedPalette] =
    useState<Palette>(defaultPalette);

  return (
    <div className="h-[1000px] w-full">
      <div className="py-6 flex items-center justify-center gap-24">
        <TextGradient
          className="text-2xl"
          text={"Select Aura effect palette"}
          gradient={textPalette.getLinearGradient()}
        />
        <PaletteSelect
          defaultPalette={defaultPalette}
          palettes={BASE_PALETTES}
          onChange={(p: Palette) => setSelectedPalette(p)}
        />
      </div>
      <div className="w-full flex justify-center pt-10">
        <TextGradient
          text={"Scroll to the bottom of the page"}
          gradient={textPalette.getLinearGradient()}
        />
      </div>
      <PageEnd palette={selectedPalette} />
    </div>
  );
};

export default AuraPreview;
