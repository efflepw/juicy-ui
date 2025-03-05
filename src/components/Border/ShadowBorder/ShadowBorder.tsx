import { Palette } from "../../../utils/palette";
import { StyledDiv } from "./ShadowBorder.styled";
import { getPulseKeyFrames } from "./utils";

type Props = {
  palette: Palette;
  children: React.ReactNode;
  borderRadius?: number;
  subClassName?: string;
  showOnHover?: boolean;
};

const ShadowBorder = ({
  palette,
  showOnHover,
  borderRadius = 16,
  subClassName = "",
  children,
}: Props) => {
  const keyframesString = getPulseKeyFrames(palette);

  return (
    <StyledDiv
      $keyframesString={keyframesString}
      $borderRadius={borderRadius}
      $showOnHover={showOnHover}
      className={subClassName}
    >
      {children}
    </StyledDiv>
  );
};
export default ShadowBorder;
