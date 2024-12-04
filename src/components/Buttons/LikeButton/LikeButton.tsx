import "./LikeButton.css";

import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="like-button">
      <div className="heart-bg">
        <div
          className={`heart-icon ${liked ? "liked" : ""}`}
          onClick={() => setLiked((liked) => !liked)}
        ></div>
      </div>
    </div>
  );
};

export default LikeButton;
