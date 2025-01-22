import { PointerTrail } from "../../components/Pointer";
import { BASE_COLORS } from "../../const/colors";
import { Palette } from "../../utils/palette";

const TrailPreview = () => {
  const palette = new Palette(BASE_COLORS.RAINBOW, 45);

  return (
    <div>
      <PointerTrail palette={palette} />
    </div>
  );
};

export default TrailPreview;
