import {
  AmbientHover,
  BlackAndWhiteHover,
  RainbowBorderHover,
  ResizeHover,
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
        <ResizeHover />
        <ResizeHover />
        <ResizeHover />
        <BlackAndWhiteHover />
        <BlackAndWhiteHover />
        <BlackAndWhiteHover />
      </div>
    </div>
  );
};

export default ImageHover;
