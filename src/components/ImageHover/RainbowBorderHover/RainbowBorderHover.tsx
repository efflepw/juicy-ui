import { RainbowBorder } from "../../Border";

const RainbowBorderHover = () => {
  const imageBgSrc = `https://utfs.io/f/5de3083f-c951-4037-aa21-09c6dd2a7bf7-ryenf4.png`;

  return (
    <RainbowBorder imageBgSrc={imageBgSrc}>
      <img src={imageBgSrc} alt="rainbow-border-hover" />
    </RainbowBorder>
  );
};

export default RainbowBorderHover;
