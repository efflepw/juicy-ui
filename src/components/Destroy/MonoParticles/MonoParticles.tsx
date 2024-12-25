import { useEffect, useRef, useState } from "react";
import "./MonoParticles.css";

const DOT_SIZE = 4;
const SPEED = 1.2;

const WIDTH = 400;
const HEIGHT = 250;

type Particle = {
  x: number;
  y: number;
  angle: number;
};

const getInitialParticlesPosition = (): Particle[] => {
  const particles: Particle[] = [];
  for (let i = 0; i < WIDTH; i = i + DOT_SIZE + 1) {
    for (let j = 0; j < HEIGHT; j = j + DOT_SIZE + 1) {
      const particle = {
        x: i + WIDTH * 0.5,
        y: j + HEIGHT * 0.75,
        angle: Math.random() * Math.PI * 2 + Math.PI / 4,
      };

      particles.push(particle);
    }
  }

  return particles;
};

const updateParticlesPosition = (
  particles: Particle[],
  iter: number
): Particle[] => {
  const updated = particles.reduce<Particle[]>((ac, cv) => {
    const rnd = Math.random();

    if (rnd > iter * 0.0005) {
      const newCoord = {
        x: cv.x + Math.cos(cv.angle) * SPEED,
        y: cv.y + Math.sin(cv.angle) * SPEED,
        angle: cv.angle,
      };

      return [...ac, newCoord];
    }

    return ac;
  }, []);

  return updated;
};

const MonoParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvasRef.current.getContext("2d");

    if (!ctx) return;

    let rafId: number | null = null;
    let iter = 1;
    let particles = getInitialParticlesPosition();

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#8298b0";

      particles = updateParticlesPosition(particles, iter);

      particles.forEach((p) => {
        ctx.fillRect(p.x, p.y, DOT_SIZE, DOT_SIZE);
      });

      iter++;

      if (animating && particles.length) {
        rafId = requestAnimationFrame(drawParticles);
      } else if (animating && !particles.length) {
        setAnimating(false);
      }
    };

    if (animating && !rafId) {
      drawParticles();
    }

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [animating]);

  const onDestroy = () => {
    setAnimating(true);
  };

  return (
    <div className="mono-particles-container">
      <canvas
        ref={canvasRef}
        className="mono-particles-canvas"
        width={WIDTH * 2}
        height={HEIGHT * 2.5}
      ></canvas>
      <div className={`mono-particles-content-wrapper`}>
        {!animating && (
          <div className="mono-particles-content" onClick={onDestroy}></div>
        )}
      </div>
    </div>
  );
};

export default MonoParticles;
