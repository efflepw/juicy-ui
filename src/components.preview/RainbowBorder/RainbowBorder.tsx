import { RainbowBorder, RainbowBorderV0 } from "../../components/Border";

const RainbowBorderPreview = () => {
  return (
    <div className="flex justify-around items-center w-full">
      <RainbowBorderV0>
        <button className="preview-button"></button>
      </RainbowBorderV0>
      <RainbowBorder>
        <button className="preview-button"></button>
      </RainbowBorder>
    </div>
  );
};

export default RainbowBorderPreview;
