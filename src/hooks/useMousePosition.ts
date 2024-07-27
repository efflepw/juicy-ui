import { RefObject, useCallback, useEffect, useRef } from "react";

export type MousePosition = {
  x: number;
  y: number;
};

type UseMousePosition = {
  mouseRef: RefObject<MousePosition>;
};

const useMousePosition = (): UseMousePosition => {
  const mouseRef = useRef<MousePosition>({
    x: 0,
    y: 0,
  });

  const onMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return { mouseRef };
};

export default useMousePosition;
