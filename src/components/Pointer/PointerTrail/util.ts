import { RefObject } from "react";
import { Trail } from "./Trail";
import { PointerPosition } from "../../../hooks/usePointerPosition";

const colors = ["#fff"];

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

  drawCursor(ctx, pointerRef);

  requestAnimationFrame(() => drawTrail(ctx, trail, pointerRef));
};

export const drawCursor = (
  ctx: CanvasRenderingContext2D,
  pointerRef: RefObject<PointerPosition>
) => {
  if (!pointerRef || !pointerRef.current) return;

  const px = pointerRef.current.x;
  const py = pointerRef.current.y;

  const r = 15;

  const sec_radius = Math.ceil(r / colors.length);

  for (let i = 0; i < colors.length; i++) {
    ctx.beginPath();
    ctx.arc(px, py, r - i * sec_radius, 0, Math.PI * 2);
    ctx.fillStyle = colors[i];
    ctx.fill();
  }
};
