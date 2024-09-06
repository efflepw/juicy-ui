import "./RainbowBorder.css";

type Props = {
  children: React.ReactNode;
};

const RainbowBorder = ({ children }: Props) => {
  return <div className="rainbow-border">{children}</div>;
};

export default RainbowBorder;
