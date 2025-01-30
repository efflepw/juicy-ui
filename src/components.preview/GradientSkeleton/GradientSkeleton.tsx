import Skeleton from "../Skeleton";

const GradientPreview = () => {
  return (
    <div>
      <div className="flex gap-5 bg-white rounded px-4 py-10">
        <Skeleton />
        <Skeleton />
      </div>
      <div className="flex gap-5 mb-6 bg-gray-700 rounded px-4 py-10 mt-10">
        <Skeleton />
        <Skeleton />
      </div>
      <div className="flex gap-5 mb-6 bg-black rounded px-4 py-10 mt-10">
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
};

export default GradientPreview;
