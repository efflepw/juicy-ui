import { useEffect, useState } from "react";
import "./PageEnd.css";
import { Palette } from "../../../utils/palette";

type Props = {
  palette: Palette;
};

// component still in progress
const PageEnd = ({ palette }: Props) => {
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
        style={{
          display: isBottom ? "block" : "none",
          background: palette.getLinearGradient(),
        }}
      ></div>
    </div>
  );
};

export default PageEnd;
