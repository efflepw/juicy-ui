import { useEffect, useRef } from "react";

const SIZE = 128;

type Props = {
  angle: number;
  setAngle: (v: number) => void;
};

const AngleSelector = ({ angle, setAngle }: Props) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const isMouseDown = useRef(false);

  const updateMousePos = (e: MouseEvent) => {
    if (!bgRef.current) return;

    const bg = bgRef.current;

    const rect = bg.getBoundingClientRect();

    const scaleX = SIZE / rect.width;
    const scaleY = SIZE / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    const angle = -1 * Math.atan2(SIZE / 2 - x, SIZE / 2 - y) * (180 / Math.PI);

    setAngle(angle);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isMouseDown.current = true;
    updateMousePos(e.nativeEvent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isMouseDown.current) {
      updateMousePos(e);
    }
  };

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
    <div
      className="relative w-32 h-32 bg-black rounded-lg flex justify-center items-center"
      onMouseDown={handleMouseDown}
      ref={bgRef}
    >
      <div className="flex justify-center items-center w-28 h-28 border-2 border-black rounded-full bg-white">
        <div className="flex justify-center items-center w-16 h-16 rounded-full bg-black z-10">
          <span className="text-white text-3xl select-none">
            {Math.round(angle)}
          </span>
        </div>
      </div>
      <div
        className="absolute left-0 right-0 w-full h-full"
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <div className="absolute left-0 right-0 w-4 h-16 bg-black top-2 ml-auto mr-auto"></div>
      </div>
    </div>
  );
};

export default AngleSelector;
