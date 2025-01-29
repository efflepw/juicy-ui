import PageEnd from "../../components/Aura/PageEnd";
import TextGradient from "../../components/Text/TextGradient";
import { BASE_COLORS } from "../../const/colors";
import { Palette } from "../../utils/palette";

const AuraPreview = () => {
  const palette1 = new Palette(BASE_COLORS["50_SHADES"], 45);
  const palette2 = new Palette(BASE_COLORS.TAILWIND, 45);

  return (
    <div className="h-[1000px]">
      <TextGradient
        text={"Scroll to the bottom of the page"}
        gradient={palette1.getLinearGradient()}
      />
      <PageEnd palette={palette2} />
    </div>
  );
};

export default AuraPreview;
