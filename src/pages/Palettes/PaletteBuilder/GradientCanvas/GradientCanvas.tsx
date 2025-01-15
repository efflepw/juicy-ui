import { useEffect, useRef, useState } from "react";
import { PointerPosition } from "../../../../hooks/usePointerPosition";

const WIDTH = 196;
const HEIGHT = 128;

type Props = {
  baseColor: string;
};

const GradientCanvas = ({ baseColor }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMouseDown = useRef(false);

  const [circlePos, setCirclePos] = useState<PointerPosition>({
    x: WIDTH - 20,
    y: 0,
  });

  const drawGradient = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    const colorGradient = ctx.createLinearGradient(0, 0, WIDTH, 0);
    colorGradient.addColorStop(0, "white");
    colorGradient.addColorStop(1, baseColor);
    ctx.fillStyle = colorGradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    const blackGradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);
    blackGradient.addColorStop(0, "transparent");
    blackGradient.addColorStop(1, "black");
    ctx.fillStyle = blackGradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  };

  const updateMousePos = (e: MouseEvent) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (e.clientX - rect.left) * scaleX - 10;
    const y = (e.clientY - rect.top) * scaleY - 10;

    setCirclePos({
      x: Math.min(Math.max(0, x), WIDTH - 20),
      y: Math.min(Math.max(0, y), HEIGHT - 16),
    });
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
      drawGradient(canvasRef.current);
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
  }, []);

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
          left: circlePos.x,
          top: circlePos.y,
        }}
      ></div>
    </div>
  );
};

export default GradientCanvas;
