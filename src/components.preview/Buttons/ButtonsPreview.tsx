import { EmojiButton } from "../../components/Buttons";

const ButtonsPreview = () => {
  return (
    <div className="flex justify-around items-center w-full">
      <EmojiButton emoji="🤡" animationType={"burst"} />
      <EmojiButton emoji="🤡" animationType={"drop"} />
    </div>
  );
};

export default ButtonsPreview;
