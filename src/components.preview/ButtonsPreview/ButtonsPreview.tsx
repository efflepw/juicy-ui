import { LikeButton, TwitterLikeButton } from "../../components/Buttons";
import EmojiButton from "../../components/Buttons/EmojiButton";

const ButtonsPreview = () => {
  return (
    <div className="flex justify-around items-center w-full">
      <LikeButton />
      <TwitterLikeButton />
      <EmojiButton emoji="😂" animationType={"burst"} />
      <EmojiButton emoji="😂" animationType={"drop"} />
    </div>
  );
};

export default ButtonsPreview;
