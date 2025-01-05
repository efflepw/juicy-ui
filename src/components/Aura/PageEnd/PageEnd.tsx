import { useEffect, useState } from "react";
import "./PageEnd.css";

// component still in progress
const PageEnd = () => {
  const [isBottom, setIsBottom] = useState(false);

  // on bottom
  useEffect(() => {
    const handleScroll = () => {
      // top
      // if (window.scrollY == 0) {
      // bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "1000px" }}>
      <div
        className="page-end-aura"
        style={{ display: isBottom ? "block" : "none" }}
      ></div>
    </div>
  );
};

export default PageEnd;
