import { Info } from "../../components/Tooltips";

const TooltipPreview = () => {
  return (
    <div className="p-4 h-full">
      <p>
        Components still in progress, Im still thinking on how it can be played
      </p>
      <div className="w-full h-full flex justify-around items-center ">
        <Info symbol="?" message="What are you looking for?" />
        <Info message="None of your business" />
      </div>
    </div>
  );
};

export default TooltipPreview;
