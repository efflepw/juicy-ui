import "./RainbowSkeleton.css";

type Props = {
  className: string;
};

const RainbowSkeleton = ({ className }: Props) => {
  return <div className={`rainbow-skeleton-anim ${className}`}></div>;
};

export default RainbowSkeleton;
