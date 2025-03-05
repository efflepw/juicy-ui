import { BASE_PALETTES } from "../../../const/palette";
import { ShadowBorder } from "../../Border";

const ShadowBorderHover = () => {
  const imageBgSrc = `https://utfs.io/f/mufUz19XUjVCB1FCpkZ0Jd7LXnzyKf8oQ1tYWZAa6hImSTVU`;

  return (
    <ShadowBorder palette={BASE_PALETTES[7]} borderRadius={0} showOnHover>
      <img src={imageBgSrc} alt="shadow-border-hover" />
    </ShadowBorder>
  );
};

export default ShadowBorderHover;
