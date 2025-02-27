import { useEffect } from "react";
import "./Alert.css";
import { RainbowBorder, ShadowBorder } from "../../Border";

type Props = {
  message: string;
  duration: number;
  border: "shadow" | "rainbow";
  onClose: () => void;
};

const Alert = ({ border, message, duration, onClose }: Props) => {
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
      <ShadowBorder subClassName="alert-inner">{message}</ShadowBorder>
    </div>
  );
};

export default Alert;
