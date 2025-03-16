import { RefObject, useEffect, useState } from "react";
import {
  getContainerProps,
  getElbowPath,
  getStraightPath,
  getTargetFromRef,
} from "./utils";
import { motion as m } from "motion/react";
import { TargetRect } from "./types";

type Props<T extends HTMLElement> = {
  type: "straight" | "elbow";
  fromRef: RefObject<T>;
  toRef: RefObject<T>;
};

const SignalLine = <T extends HTMLElement>({
  type,
  fromRef,
  toRef,
}: Props<T>) => {
  const [fromTarget, setFromTarget] = useState<TargetRect | null>(null);
  const [toTarget, setToTarget] = useState<TargetRect | null>(null);

  useEffect(() => {
    setFromTarget(getTargetFromRef(fromRef));
    setToTarget(getTargetFromRef(toRef));
  }, [fromRef, toRef]);

  if (!fromTarget || !toTarget) return null;

  const containerProps = getContainerProps(fromTarget, toTarget);

  const getPath = type == "straight" ? getStraightPath : getElbowPath;
  const linePath = getPath(fromTarget, toTarget);

  return (
    <div
      className="absolute"
      style={{
        ...containerProps,
      }}
    >
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${containerProps.width} ${containerProps.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={linePath} stroke={"#242424"} strokeWidth={2} fill={"none"} />
        <m.path
          d={linePath}
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeDasharray={"20"}
          initial={{ opacity: 0, filter: "blur(2px)", strokeDashoffset: 0 }}
          animate={{
            opacity: [0, 1, 0],
            strokeDashoffset: [0, -40],
            filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
          }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </svg>
    </div>
  );
};

export default SignalLine;
