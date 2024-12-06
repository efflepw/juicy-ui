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
      <RainbowBorder>
        <button className="preview-button bg-gray-950 text-red-100 font-medium text-xl p-4">
          Find out
        </button>
      </RainbowBorder>
      <RainbowBorder showOnHover>
        <button className="preview-button bg-gray-950 text-red-100 font-medium text-xl p-4">
          Hover to find out
        </button>
      </RainbowBorder>
    </div>
  );
};

export default RainbowBorderPreview;
