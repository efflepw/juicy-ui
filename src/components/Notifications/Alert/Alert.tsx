import { useEffect } from "react";
import "./Alert.css";

type Props = {
  message: string;
  duration: number;
  onClose: () => void;
};

const Alert = ({ message, duration, onClose }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return <div className="alert">{message}</div>;
};

export default Alert;
