import "./Ambient.css";

import { useEffect, useRef, useState } from "react";

import { AMBIENT_CONFIG } from "./const";

interface CSSVars extends React.CSSProperties {
  "--hor-inc": string;
  "--ver-inc": string;
}

type Props = {
  imageSrc: string;
  showOnHover?: boolean;
};

const Ambient: React.FC<Props> = ({ imageSrc, showOnHover }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageClassName = `ambient-effect-image ${
    showOnHover ? "ambient-effect-on-hover" : ""
  }`;

  const cssVars: CSSVars = {
    "--hor-inc": `-${AMBIENT_CONFIG.BLUR_INCREASE_FACTOR_H * 100}%`,
    "--ver-inc": `-${AMBIENT_CONFIG.BLUR_INCREASE_FACTOR_V * 100}%`,
  };

  useEffect(() => {
    if (!imageRef.current) return;

    const handleLoad = () => setImageLoaded(true);

    imageRef.current.addEventListener("load", handleLoad);

    return () => {
      imageRef.current?.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (!imageLoaded || !imageRef.current) return;

    const imageClientRect = imageRef.current?.getBoundingClientRect();

    if (!imageClientRect) return;

    const imageSize = {
      width: imageClientRect.width,
      height: imageClientRect.height,
    };

    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width =
      imageSize.width * (AMBIENT_CONFIG.BLUR_INCREASE_FACTOR_H * 2 + 1);
    canvas.height =
      imageSize.height * (AMBIENT_CONFIG.BLUR_INCREASE_FACTOR_V * 2 + 1);

    const context = canvas.getContext("2d");
    if (!context) return;

    context.filter = `blur(${AMBIENT_CONFIG.BLUR_WIDTH}px)`;

    context.drawImage(
      imageRef.current,
      imageSize.width * AMBIENT_CONFIG.BLUR_INCREASE_FACTOR_H,
      imageSize.height * AMBIENT_CONFIG.BLUR_INCREASE_FACTOR_V,
      imageSize.width,
      imageSize.height
    );
  }, [imageLoaded]);

  return (
    <div className="ambient-effect-container-parent">
      <div className="ambient-effect-container">
        <img
          ref={imageRef}
          id="ambient-effect-image-id"
          className={imageClassName}
          src={imageSrc}
        />
        <canvas
          ref={canvasRef}
          className="ambient-effect-canvas"
          style={cssVars}
        />
      </div>
    </div>
  );
};

export default Ambient;
