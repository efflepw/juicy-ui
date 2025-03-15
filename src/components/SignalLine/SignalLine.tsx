import { RefObject, useEffect, useState } from "react";
import {
  getContainerProps,
  getStraightLineProps,
  getTargetFromRef,
} from "./utils";
import { TargetRect } from "./types";

type Props<T extends HTMLElement> = {
  fromRef: RefObject<T>;
  toRef: RefObject<T>;
};

const SignalLine = <T extends HTMLElement>({ fromRef, toRef }: Props<T>) => {
  const [fromTarget, setFromTarget] = useState<TargetRect | null>(null);
  const [toTarget, setToTarget] = useState<TargetRect | null>(null);

  useEffect(() => {
    setFromTarget(getTargetFromRef(fromRef));
    setToTarget(getTargetFromRef(toRef));
  }, [fromRef, toRef]);

  if (!fromTarget || !toTarget) return null;

  const containerProps = getContainerProps(fromTarget, toTarget);
  const line = getStraightLineProps(
    fromTarget,
    toTarget,
    containerProps.width,
    containerProps.height
  );

  return (
    <div
      className="absolute"
      style={{
        ...containerProps,
      }}
    >
      <svg className="w-full h-full">
        <line
          x1={line.start.x}
          y1={line.start.y}
          x2={line.end.x}
          y2={line.end.y}
          stroke="red"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default SignalLine;
