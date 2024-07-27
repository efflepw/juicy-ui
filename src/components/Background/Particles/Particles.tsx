import { useEffect, useRef } from "react";
import "./Particles.css";
import { useMousePosition } from "../../../hooks";
import { animateParticles, createParticles, createWaves } from "./utils";

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { mouseRef } = useMousePosition();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = 1728;
    canvas.height = 897;

    const context = canvas.getContext("2d");
    if (!context) return;

    const particles = createParticles();
    const waves = createWaves();

    animateParticles(canvas, particles, waves, mouseRef);
  }, []);

  return <canvas className="canvas-bg" ref={canvasRef}></canvas>;
};

export default Particles;
