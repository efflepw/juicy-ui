import Ambient from "../../components/Image/Ambient";
import TextGradient from "../../components/Text/TextGradient";
import { BASE_PALETTES } from "../../const/palette";

const AmbientPreview = () => {
  return (
    <div className="flex flex-col w-full h-full gap-2">
      <div>
        <TextGradient
          className="text-lg text-center"
          text="Hover over dino!"
          gradient={BASE_PALETTES[1].getLinearGradient()}
        />
      </div>
      <Ambient imageSrc="dino.svg" showOnHover />
    </div>
  );
};

export default AmbientPreview;
