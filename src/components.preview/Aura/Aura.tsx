import PageEnd from "../../components/Aura/PageEnd";
import GradientText from "../../components/Text/GradientText";
import { BASE_GRADIENTS } from "../../const/gradients";

const AuraPreview = () => {
  return (
    <div className="h-[1000px]">
      <GradientText
        text={"Scroll to the bottom of the page"}
        gradient={BASE_GRADIENTS["50-SHADES"]}
      />
      <PageEnd />
    </div>
  );
};

export default AuraPreview;
