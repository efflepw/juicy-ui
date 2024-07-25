import { getStroke } from "./MoveTrail/const";
import { getSvgPathFromStroke } from "./MoveTrail/utils";
import "./RainbowOnMove.css";

import { useEffect, useRef } from "react";

const RainbowOnMove = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>();
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  const stroke = getStroke();
  const svgPath = getSvgPathFromStroke(stroke, true);
  const path = new Path2D(svgPath);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");

      canvasRef.current.width = 1000;
      canvasRef.current.height = 800;

      let ctx = canvasCtxRef.current;
      if (!ctx) return;

      ctx.stroke(path);
    }
  }, []);

  return <canvas id="canvas" ref={canvasRef as any}></canvas>;
};

export default RainbowOnMove;
