import "./PointerTrail.css";

import { useEffect, useRef } from "react";
import { usePointerPosition } from "../../../hooks";
import { Trail } from "./Trail";
import { drawTrail } from "./util";
import { Palette } from "../../../utils/palette";

type Props = {
  palette: Palette;
};

const PointerTrail = ({ palette }: Props) => {
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

    const pointerTrail = new Trail(palette.getColors());

    drawTrail(ctx, pointerTrail, pointerRef);
  }, [palette]);

  return <canvas ref={canvasRef} className="cursor-trail"></canvas>;
};

export default PointerTrail;
