import {
  BlackAndWhiteHover,
  RainbowBorderHover,
} from "../../components/ImageHover";

const ImageHover = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        <BlackAndWhiteHover />
        <BlackAndWhiteHover />
        <BlackAndWhiteHover />
        <RainbowBorderHover />
        <RainbowBorderHover />
        <RainbowBorderHover />
      </div>
    </div>
  );
};

export default ImageHover;
