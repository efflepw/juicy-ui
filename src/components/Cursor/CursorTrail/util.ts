import { RefObject } from "react";
import { Trail } from "./Trail";
import { PointerPosition } from "../../../hooks/usePointerPosition";

export const drawTrail = (
  ctx: CanvasRenderingContext2D,
  trail: Trail,
  pointerRef: RefObject<PointerPosition>
) => {
  if (!pointerRef || !pointerRef.current) return;

  const px = pointerRef.current.x;
  const py = pointerRef.current.y;

  trail.pushPoint(px, py);

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const paths = trail.getSvgPath();

  paths.forEach((path) => {
    const path2d = new Path2D(path.svgPath);

    ctx.beginPath();
    ctx.fillStyle = path.color;
    ctx.fill(path2d);
  });

  // ctx.beginPath();
  // ctx.arc(px, py, 15, 0, Math.PI * 2);
  // ctx.fillStyle = "white";
  // ctx.fill();

  requestAnimationFrame(() => drawTrail(ctx, trail, pointerRef));
};
