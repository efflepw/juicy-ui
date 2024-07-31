import { LikeButton, TwitterLikeButton } from "../../components/Buttons";

const LikeButtons = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <LikeButton />
      <TwitterLikeButton />
    </div>
  );
};

export default LikeButtons;
