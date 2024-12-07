import { RainbowBorder } from "../../components/Border";

const RainbowBorderPreview = () => {
  return (
    <div className="flex justify-around items-center w-full">
      <RainbowBorder>
        <button className="preview-button"></button>
      </RainbowBorder>
      <RainbowBorder>
        <button className="preview-button bg-gray-950 text-red-100 font-medium text-xl p-4">
          Look at me
        </button>
      </RainbowBorder>
      <RainbowBorder showOnHover>
        <button className="preview-button bg-gray-900 text-red-100 font-medium text-xl p-4">
          Hover and look
        </button>
      </RainbowBorder>
    </div>
  );
};

export default RainbowBorderPreview;
