import "./RainbowBorder.css";

type Props = {
  children: React.ReactNode;
  imageBgSrc?: string;
};

export interface CSSVars extends React.CSSProperties {
  "--image-bg-src"?: string;
}

const getCssVars = (imageBgSrc?: string): CSSVars =>
  imageBgSrc
    ? {
        "--image-bg-src": `url("${imageBgSrc}")`,
      }
    : {};

const RainbowBorder = ({ imageBgSrc, children }: Props) => {
  const className = `rainbow-border ${
    imageBgSrc ? "rainbow-image-border" : ""
  }`;

  return (
    <div className={className} style={getCssVars(imageBgSrc)}>
      {children}
    </div>
  );
};

export default RainbowBorder;
