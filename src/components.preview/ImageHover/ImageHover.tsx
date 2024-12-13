import {
  AmbientHover,
  BlackAndWhiteHover,
  RainbowBorderHover,
} from "../../components/ImageHover";

const ImageHover = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        <RainbowBorderHover />
        <RainbowBorderHover />
        <RainbowBorderHover />
        <AmbientHover />
        <AmbientHover />
        <AmbientHover />
        <BlackAndWhiteHover />
        <BlackAndWhiteHover />
        <BlackAndWhiteHover />
      </div>
    </div>
  );
};

export default ImageHover;
