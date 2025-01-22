import { RainbowSkeleton } from "../../components/Skeleton";

const Skeleton = () => {
  return (
    <div className="flex justify-center gap-4">
      <RainbowSkeleton className="w-40 h-40 rounded" />
      <div className="flex gap-3 flex-col">
        <RainbowSkeleton className="w-64 h-6 rounded my-2" />
        <RainbowSkeleton className="w-[280px] h-4 rounded" />
        <RainbowSkeleton className="w-[280px] h-4 rounded" />
        <RainbowSkeleton className="w-[280px] h-4 rounded" />
        <RainbowSkeleton className="w-[280px] h-4 rounded" />
      </div>
    </div>
  );
};

export default Skeleton;
