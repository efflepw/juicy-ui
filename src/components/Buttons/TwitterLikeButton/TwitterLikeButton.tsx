import "./TwitterLikeButton.css";

import { useState } from "react";

const TwitterLikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="twitter-like">
      <div className="twitter-like-bg">
        <div
          className={`twitter-like-icon ${liked ? "liked" : ""}`}
          onClick={() => setLiked((liked) => !liked)}
        ></div>
      </div>
    </div>
  );
};

export default TwitterLikeButton;
