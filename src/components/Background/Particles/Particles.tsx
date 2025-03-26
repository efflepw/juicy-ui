import { useEffect, useRef } from "react";
import "./Particles.css";
import { usePointerPosition } from "../../../hooks";
import { animateParticles, createParticles, createWaves } from "./utils";
import { MOUSE_INITIAL_STATE } from "./const";
import { CanvasSize } from "./types";

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { pointerRef } = usePointerPosition();

  useEffect(() => {
    const clientRect = canvasRef.current?.getBoundingClientRect();

    if (!clientRect) return;

    const canvasSize: CanvasSize = {
      width: clientRect.width,
      height: clientRect.height,
    };

    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = clientRect.width;
    canvas.height = clientRect.height;

    const context = canvas.getContext("2d");
    if (!context) return;

    const particles = createParticles(canvasSize);
    const waves = createWaves(canvasSize);

    let animationFrameId: number;

    const animate = () => {
      animateParticles(
        canvas,
        particles,
        waves,
        pointerRef,
        MOUSE_INITIAL_STATE,
        canvasSize
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas className="canvas-preview canvas-bg" ref={canvasRef}></canvas>;
};

export default Particles;
