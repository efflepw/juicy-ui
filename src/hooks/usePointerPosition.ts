import { RefObject, useCallback, useEffect, useRef } from "react";

export type PointerPosition = {
  x: number;
  y: number;
};

type UsePointerPosition = {
  pointerRef: RefObject<PointerPosition>;
};

const usePointerPosition = (): UsePointerPosition => {
  const pointerRef = useRef<PointerPosition>({
    x: -100,
    y: -100,
  });

  const onMove = useCallback((e: MouseEvent) => {
    pointerRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return { pointerRef };
};

export default usePointerPosition;
