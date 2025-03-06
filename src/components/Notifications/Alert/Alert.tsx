import { useEffect } from "react";
import "./Alert.css";
import { RainbowBorder, ShadowBorder } from "../../Border";
import { BASE_PALETTES } from "../../../const/palette";
import { Palette } from "../../../utils/palette";

type Props = {
  palette: Palette;
  message: string;
  duration: number;
  border: "shadow" | "rainbow";
  onClose: () => void;
};

const DEFAULT_PALETTE = BASE_PALETTES[0];

const Alert = ({
  palette = DEFAULT_PALETTE,
  border,
  message,
  duration,
  onClose,
}: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (border === "rainbow") {
    return (
      <div className="alert-container">
        <RainbowBorder>
          <div className="alert-inner">{message}</div>
        </RainbowBorder>
      </div>
    );
  }

  return (
    <div className="alert-container">
      <ShadowBorder palette={palette} subClassName="alert-inner">
        {message}
      </ShadowBorder>
    </div>
  );
};

export default Alert;
