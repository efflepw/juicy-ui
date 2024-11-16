import "./RainbowBorder.css";

type Props = {
  children: React.ReactNode;
};

const RainbowBorder = ({ children }: Props) => {
  // @todo add color presets
  return <div className="rainbow-border">{children}</div>;
};

export default RainbowBorder;
