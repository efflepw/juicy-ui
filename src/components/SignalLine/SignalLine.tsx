import { RefObject, useEffect, useState } from "react";

type Props<T extends HTMLElement> = {
  from: RefObject<T>;
  to: RefObject<T>;
};

type Target = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const SignalLine = <T extends HTMLElement>({ from, to }: Props<T>) => {
  // calculate absolute position for from ref
  // calculate absolute position for to ref
  // generate svg
  // calculate absolute position of shape
  // place it absolutely

  const [start, setStart] = useState<Target | null>(null);
  const [end, setEnd] = useState<Target | null>(null);

  useEffect(() => {
    if (from.current && to.current) {
      const parentRect = from.current.offsetParent?.getBoundingClientRect() ?? {
        x: 0,
        y: 0,
      };

      const fromRect = from.current.getBoundingClientRect();
      const toRect = to.current.getBoundingClientRect();

      const fromOffsetX = fromRect.x - parentRect.x;
      const fromOffsetY = fromRect.y - parentRect.y;
      const toOffsetX = toRect.x - parentRect.x;
      const toOffsetY = toRect.y - parentRect.y;

      setStart({
        x: fromOffsetX + fromRect.width / 2,
        y: fromOffsetY + fromRect.height / 2,
        width: fromRect.width,
        height: fromRect.height,
      });

      setEnd({
        x: toOffsetX + toRect.width / 2,
        y: toOffsetY + toRect.height / 2,
        width: toRect.width,
        height: toRect.height,
      });
    }
  }, [from, to]);

  if (!start || !end) {
    return null;
  }

  const lineCenterLeft = start.x + (end.x - start.x) / 2;
  const lineCenterTop = start.y + (end.y - start.y) / 2;

  const width = Math.abs(start.x - end.x);
  const height = Math.abs(start.y - end.y);

  return (
    <div
      className="absolute border-2 border-red-300"
      style={{
        left: lineCenterLeft - width / 2,
        top: lineCenterTop - height / 2 + start.height / 2,
        width: width,
        height: height - (start.height + end.height) / 2,
      }}
    ></div>
  );
};

export default SignalLine;
