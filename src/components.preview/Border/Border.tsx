import { RainbowBorder, ShadowBorder } from "../../components/Border";

const RainbowBorderPreview = () => {
  return (
    <div className="w-full h-full p-4">
      <div>
        <h2 className="text-2xl font-bold mb-8">Rainbow border</h2>
        <div className="flex justify-around items-center">
          <RainbowBorder>
            <button className="preview-button"></button>
          </RainbowBorder>
          <RainbowBorder>
            <button className="preview-button text-red-100 font-medium text-xl p-4">
              Look at me
            </button>
          </RainbowBorder>
          <RainbowBorder showOnHover>
            <button className="preview-button text-red-100 font-medium text-xl p-4">
              Hover over me
            </button>
          </RainbowBorder>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold my-8">Shadow border</h2>
        <div className="flex justify-around items-center">
          <ShadowBorder>
            <button className="preview-button"></button>
          </ShadowBorder>
          <ShadowBorder>
            <button className="preview-button text-red-100 font-medium text-xl p-4">
              Look at me
            </button>
          </ShadowBorder>
          <ShadowBorder showOnHover>
            <button className="preview-button text-red-100 font-medium text-xl p-4">
              Hover over me
            </button>
          </ShadowBorder>
        </div>
      </div>
    </div>
  );
};

export default RainbowBorderPreview;
