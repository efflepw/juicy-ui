import "./TextGradient.css";

type Props = {
  text: string;
  gradient: string;
  className?: string;
};

interface CSSVars extends React.CSSProperties {
  "--gradient": string;
}

const TextGradient = ({ text, gradient, className = "" }: Props) => {
  const cssVars: CSSVars = { "--gradient": `${gradient}` };

  return (
    <p style={cssVars} className={`rainbow-text ${className}`}>
      {text}
    </p>
  );
};

export default TextGradient;
