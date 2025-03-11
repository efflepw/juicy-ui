import { useEffect, useRef, useState } from "react";
import { PointerPosition } from "../../../../hooks/usePointerPosition";
import { drawGradient, GC_HEIGHT, GC_WIDTH, gradientToColor } from "../utils";

type Props = {
  baseColor: string;
  setColor: (color: string) => void;
};

const GradientCanvas = ({ baseColor, setColor }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMouseDown = useRef(false);

  const [pointer, setPointer] = useState<PointerPosition>({
    x: GC_WIDTH - 12,
    y: 8,
  });

  const updateMousePos = (e: MouseEvent) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const sx = (e.clientX - rect.left) * scaleX;
    const sy = (e.clientY - rect.top) * scaleY;

    const x = Math.min(Math.max(8, sx), GC_WIDTH - 12);
    const y = Math.min(Math.max(8, sy), GC_HEIGHT - 8);

    setPointer({ x, y });

    setColor(gradientToColor(baseColor, x, y));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isMouseDown.current = true;
    updateMousePos(e.nativeEvent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isMouseDown.current) {
      updateMousePos(e);
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      drawGradient(canvasRef.current, baseColor);
      setColor(gradientToColor(baseColor, pointer.x, pointer.y));
    }
  }, [baseColor]);

  useEffect(() => {
    const handleMouseUp = () => {
      isMouseDown.current = false;
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [baseColor]);

  return (
    <div className="relative">
      <canvas
        className="w-48 h-32 rounded-lg"
        ref={canvasRef}
        onMouseDown={handleMouseDown}
      ></canvas>
      <div
        className="w-4 h-4 rounded-full absolute border-2 border-white"
        style={{
          left: pointer.x - 8,
          top: pointer.y - 8,
        }}
      ></div>
    </div>
  );
};

export default GradientCanvas;
