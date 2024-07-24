import "./RainbowOnMove.css";

import { useEffect, useRef } from "react";

const RainbowOnMove = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>();
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");
      let ctx = canvasCtxRef.current;
      if (!ctx) return;
    }
  }, []);

  return <canvas id="canvas" ref={canvasRef as any}></canvas>;
};

export default RainbowOnMove;
