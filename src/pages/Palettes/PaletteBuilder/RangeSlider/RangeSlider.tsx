import { useEffect, useRef, useState } from "react";
import { Palette } from "../../../../utils/palette";

const HEIGHT = 128;
const MAX_SLIDER_V = 120;

type Props = {
  v: number;
  minV: number;
  maxV: number;
  palette: Palette;
  thumbColor: string;
  onValueChange: (v: number) => void;
};

const RangeSlider = ({
  minV,
  maxV,
  palette,
  thumbColor,
  onValueChange,
}: Props) => {
  const isMouseDown = useRef(false);
  const bgRef = useRef<HTMLDivElement>(null);

  const [rectPos, setRectPos] = useState(0);

  const updateMousePos = (e: MouseEvent) => {
    if (!bgRef.current) return;

    const bg = bgRef.current;

    const rect = bg.getBoundingClientRect();
    const scaleY = HEIGHT / rect.height;
    const v = (e.clientY - rect.top) * scaleY - 6;

    const validated = Math.min(Math.max(0, v), MAX_SLIDER_V);
    const newValue = Math.round(
      minV + (validated * (maxV - minV)) / MAX_SLIDER_V
    );

    setRectPos(validated);
    onValueChange(newValue);
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
      className="relative w-10 h-32 rounded-lg"
      style={{ background: palette.getLinearGradient() }}
      onMouseDown={handleMouseDown}
      ref={bgRef}
    >
      <div
        className="w-10 h-2 rounded absolute border-2"
        style={{ top: rectPos, borderColor: thumbColor }}
      ></div>
    </div>
  );
};

export default RangeSlider;
