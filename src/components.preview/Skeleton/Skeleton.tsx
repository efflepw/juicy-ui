import { RainbowSkeleton } from "../../components/Skeleton";

const Skeleton = () => {
  return (
    <div className="flex justify-center gap-4">
      <RainbowSkeleton className="w-44 h-44 rounded" />
      <div className="flex gap-3 flex-col">
        <RainbowSkeleton className="w-72 h-6 rounded my-2" />
        <RainbowSkeleton className="w-[320px] h-4 rounded" />
        <RainbowSkeleton className="w-[320px] h-4 rounded" />
        <RainbowSkeleton className="w-[320px] h-4 rounded" />
        <RainbowSkeleton className="w-[320px] h-4 rounded" />
      </div>
    </div>
  );
};

export default Skeleton;
