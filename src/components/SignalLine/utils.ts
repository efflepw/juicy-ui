import { TargetRect } from "./types";
import { RefObject } from "react";

export const getTargetFromRef = <T extends HTMLElement>(
  ref: RefObject<T>
): TargetRect | null => {
  if (!ref.current) {
    return null;
  }

  const parentRect = ref.current.offsetParent?.getBoundingClientRect() ?? {
    x: 0,
    y: 0,
  };

  const rect = ref.current.getBoundingClientRect();

  const fromOffsetX = rect.x - parentRect.x;
  const fromOffsetY = rect.y - parentRect.y;

  return {
    x: fromOffsetX + rect.width / 2,
    y: fromOffsetY + rect.height / 2,
    width: rect.width,
    height: rect.height,
  };
};

// const isVerticalAlignment = () => {
//   return false;
// }

const getContainerSize = (from: TargetRect, to: TargetRect) => {
  const width = Math.max(Math.abs(from.x - to.x), 2);
  const height = Math.max(
    Math.abs(from.y - to.y) - (from.height + to.height) / 2,
    2
  );

  return { width, height };
};

export const getContainerProps = (from: TargetRect, to: TargetRect) => {
  const { width, height } = getContainerSize(from, to);

  const left = (from.x + to.x) / 2 - width / 2;
  const top = (from.y + to.y) / 2 - height / 2;

  return { width, height, left, top };
};

export const getStraightLineProps = (
  from: TargetRect,
  to: TargetRect,
  width: number,
  height: number
) => {
  const start = { x: 2, y: 2 };
  const end = { x: 2, y: 2 };

  if (from.x > to.x) start.x = width - 2;
  else end.x = width - 2;

  if (from.y > to.y) start.y = height - 2;
  else end.y = height - 2;

  return { start, end };
};
