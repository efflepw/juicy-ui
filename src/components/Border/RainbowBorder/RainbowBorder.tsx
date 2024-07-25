import "./RainbowBorder.css";

type Props = {
  children: React.ReactNode;
};

const ButtonHover = ({ children }: Props) => {
  return <div className="rainbow-border">{children}</div>;
};

export default ButtonHover;
