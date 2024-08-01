import "./Aurora.css";

import { cssPrefix } from "../../../utils/css";

type Props = {
  title: string;
  theme: "light" | "dark";
};

const Aurora = ({ title, theme }: Props) => {
  const cm = cssPrefix("aurora", theme);

  return (
    <div className={cm("container")}>
      <div className={cm("bg")}></div>
      <div className={cm("content")}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Aurora;
