import PageEnd from "../../components/Aura/PageEnd";
import TextGradient from "../../components/Text/TextGradient";
import { BASE_PALETTES } from "../../const/palette";

const AuraPreview = () => {
  return (
    <div className="h-[1000px]">
      <TextGradient
        text={"Scroll to the bottom of the page"}
        gradient={BASE_PALETTES["50-SHADES"].getLinearGradient()}
      />
      <PageEnd palette={BASE_PALETTES["TAILWIND"]} />
    </div>
  );
};

export default AuraPreview;
