import "./RainbowBorder.css";

type RbType =
  | "rb-hover"
  | "rb-shadow-hover"
  | "with-shadow"
  | "shadow-hover"
  | undefined;

type Props = {
  children: React.ReactNode;
  type?: RbType;
};

export interface CSSVars extends React.CSSProperties {}

const getClassNames = (type: RbType) => {
  switch (type) {
    // show rb on hover
    case "rb-hover":
      return "rb-on-hover";
    // show rb and shadow only on hover
    // case "rb-shadow-hover":
    //   return "rb-shadow-hover";
    // show shadow all the time
    case "with-shadow":
      return "rb-shadow";
    // show only shadow on hover while rb is always visible
    case "shadow-hover":
      return "shadow-hover";
    default:
      return "";
  }
};

const RainbowBorder = ({ type, children }: Props) => {
  const extraClassName = getClassNames(type);

  return <div className={`rainbow-border ${extraClassName}`}>{children}</div>;
};

export default RainbowBorder;
