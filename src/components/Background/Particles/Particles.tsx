import { useEffect, useRef } from "react";
import "./Particles.css";
import { useMousePosition } from "../../../hooks";
import { animateParticles, createParticles, createWaves } from "./utils";
import { MOUSE_INITIAL_STATE } from "./const";

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

    animateParticles(canvas, particles, waves, mouseRef, MOUSE_INITIAL_STATE);
  }, []);

  return <canvas className="canvas-preview" ref={canvasRef}></canvas>;
};

export default Particles;
