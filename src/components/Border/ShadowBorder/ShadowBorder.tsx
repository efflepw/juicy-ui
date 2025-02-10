import "./ShadowBorder.css";

type Props = {
  children: React.ReactNode;
  showOnHover?: boolean;
};

export interface CSSVars extends React.CSSProperties {}

const ShadowBorder = ({ showOnHover, children }: Props) => {
  const className = `shadow-border ${showOnHover ? "sb-on-hover" : ""}`;

  return <div className={className}>{children}</div>;
};

export default ShadowBorder;
