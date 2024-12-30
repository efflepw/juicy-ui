import GradientText from "../../components/Text/GradientText";
import { BASE_GRADIENTS } from "../../const/gradients";
import { toTitleCase } from "../../utils/format";

const TEXT = "Wandering in the dark";

type Props = {
  gradient: keyof typeof BASE_GRADIENTS;
};

const TextPreview = ({ gradient }: Props) => {
  const commonClasses = "flex flex-col gap-6 p-12 rounded-lg";

  return (
    <div>
      <h2 className="text-4xl p-2">{toTitleCase(gradient)}</h2>
      <div className="flex flex-row justify-around gap-3 text-3xl font-semibold w-full">
        <div className={`${commonClasses} `}>
          <span>{TEXT}</span>
          <GradientText text={TEXT} gradient={BASE_GRADIENTS[gradient]} />
        </div>
        <div className={`${commonClasses} bg-[#101013ee]`}>
          <span>{TEXT}</span>
          <GradientText text={TEXT} gradient={BASE_GRADIENTS[gradient]} />
        </div>
        <div className={`${commonClasses} bg-white text-black`}>
          <span>{TEXT}</span>
          <GradientText text={TEXT} gradient={BASE_GRADIENTS[gradient]} />
        </div>
      </div>
    </div>
  );
};

export default TextPreview;
