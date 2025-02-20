import "./ShadowBorder.css";

type Props = {
  children: React.ReactNode;
  borderRadius?: number;
  subClassName?: string;
  showOnHover?: boolean;
};

export interface CSSVars extends React.CSSProperties {
  "--border-radius": string;
}

const ShadowBorder = ({
  showOnHover,
  borderRadius = 16,
  subClassName = "",
  children,
}: Props) => {
  const className = `shadow-border ${subClassName} ${
    showOnHover ? "sb-on-hover" : ""
  }`;

  const cssVars: CSSVars = {
    "--border-radius": `${borderRadius}px`,
  };

  return (
    <div className={className} style={cssVars}>
      {children}
    </div>
  );
};

export default ShadowBorder;
