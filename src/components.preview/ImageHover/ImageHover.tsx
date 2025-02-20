import {
  AmbientHover,
  BlackAndWhiteHover,
  RainbowBorderHover,
  ResizeHover,
  ShadowBorderHover,
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
        <ShadowBorderHover />
        <ShadowBorderHover />
        <ShadowBorderHover />
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
