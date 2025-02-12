import "./ShadowBorder.css";

type Props = {
  children: React.ReactNode;
  subClassName?: string;
  showOnHover?: boolean;
};

export interface CSSVars extends React.CSSProperties {}

const ShadowBorder = ({ showOnHover, subClassName = "", children }: Props) => {
  const className = `shadow-border ${subClassName} ${
    showOnHover ? "sb-on-hover" : ""
  }`;

  return <div className={className}>{children}</div>;
};

export default ShadowBorder;
