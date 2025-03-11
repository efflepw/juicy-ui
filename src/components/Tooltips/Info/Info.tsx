import "./Info.css";

import { useState } from "react";

type Props = {
  symbol?: string;
  message: string;
};

const Info = ({ symbol = "!", message }: Props) => {
  // const [viewed, setViewed] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <div
        className="info-tooltip-icon"
        onMouseEnter={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}
      >
        <span>{symbol}</span>
        <div
          className="info-tooltip-popup"
          style={{ display: showMessage ? "block" : "none" }}
        >
          <span>{message}</span>
        </div>
      </div>
    </>
  );
};

export default Info;
