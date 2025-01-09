import { PointerTrail } from "../../components/Pointer";
import { BASE_PALETTES } from "../../const/palette";

const TrailPreview = () => {
  return (
    <div>
      <PointerTrail palette={BASE_PALETTES.RAINBOW} />
    </div>
  );
};

export default TrailPreview;
