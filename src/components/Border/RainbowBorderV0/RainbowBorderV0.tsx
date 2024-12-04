import "./RainbowBorderV0.css";

type Props = {
  children: React.ReactNode;
};

const RainbowBorderV0 = ({ children }: Props) => {
  return <div className="rainbow-border-v0">{children}</div>;
};

export default RainbowBorderV0;
