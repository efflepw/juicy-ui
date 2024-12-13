import { RainbowBorder } from "../../Border";

const RainbowBorderHover = () => {
  const imageBgSrc = `https://utfs.io/f/mufUz19XUjVCB1FCpkZ0Jd7LXnzyKf8oQ1tYWZAa6hImSTVU`;

  return (
    <RainbowBorder showOnHover>
      <img src={imageBgSrc} alt="rainbow-border-hover" />
    </RainbowBorder>
  );
};

export default RainbowBorderHover;
