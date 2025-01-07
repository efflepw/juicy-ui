import "./CursorTrail.css";

import { useEffect, useRef } from "react";
import { usePointerPosition } from "../../../hooks";
import { Trail } from "./Trail";
import { drawTrail } from "./util";

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { pointerRef } = usePointerPosition();

  useEffect(() => {
    const clientRect = canvasRef.current?.getBoundingClientRect();

    if (!clientRect) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = clientRect.width;
    canvas.height = clientRect.height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cursorTrail = new Trail();

    drawTrail(ctx, cursorTrail, pointerRef);
  });

  return <canvas ref={canvasRef} className="cursor-trail"></canvas>;
};

export default CursorTrail;
