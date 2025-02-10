import { RainbowBorder, ShadowBorder } from "../../components/Border";
import { BORDER_USAGE_DOC } from "../../const/docs";
import ComponentDoc from "../ComponentDoc";

const RainbowBorderPreview = () => {
  return (
    <div className="w-full h-full p-4">
      <h2 className="text-2xl font-bold mb-8">Border</h2>
      <div className="my-16">
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
              Hover me
            </button>
          </RainbowBorder>
        </div>
        <ComponentDoc docs={[BORDER_USAGE_DOC[0]]} />
      </div>
      <div className="my-16">
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
              Hover me
            </button>
          </ShadowBorder>
        </div>
        <ComponentDoc docs={[BORDER_USAGE_DOC[1]]} />
      </div>
    </div>
  );
};

export default RainbowBorderPreview;
