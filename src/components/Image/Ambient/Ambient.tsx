import "./Ambient.css";

import { useEffect, useRef, useState } from "react";

const Ambient = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

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

    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = 400 * 1.2;
    canvas.height = 282.5 * 1.4;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.filter = "blur(24px)";

    context.drawImage(
      imageRef.current,
      400 * 0.025,
      282.5 * 0.125,
      canvas.width - 400 * 0.075,
      canvas.height - 282.5 * 0.225
    );
  }, [imageLoaded]);

  return (
    <div className="ambient-effect-container-parent">
      <div className="ambient-effect-container">
        <canvas
          ref={canvasRef}
          className="ambient-effect-canvas"
          width={400}
          height={282.5}
          style={{ width: 400 * 1.2, height: 282.5 * 1.4 }}
        />
        <img
          ref={imageRef}
          id="ambient-effect-image-id"
          className="ambient-effect-image"
          src="dino.svg"
        />
      </div>
    </div>
  );
};

export default Ambient;
