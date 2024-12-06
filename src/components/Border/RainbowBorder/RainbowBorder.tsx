import "./RainbowBorder.css";

type Props = {
  children: React.ReactNode;
  showOnHover?: boolean;
};

export interface CSSVars extends React.CSSProperties {}

const RainbowBorder = ({ showOnHover, children }: Props) => {
  const className = `rainbow-border ${showOnHover ? "rb-on-hover" : ""}`;

  return <div className={className}>{children}</div>;
};

export default RainbowBorder;
