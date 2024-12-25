import GradientText from "../../components/Text/GradientText";

const TEXT = "Wandering in the dark";

const GRADIENTS = {
  "50-SHADES": "linear-gradient(45deg, #94989b, #444b4d)",
  RAINBOW:
    "linear-gradient(45deg, #fd9090cc, #fff962cc, #9bf993cc, #80daf5cc, #bb90facc)",
  "BLUE-PINK": "linear-gradient(45deg, #a9c5f6, #f9a5e1)",
  "BLACK-PINK": "linear-gradient(120deg, #f9a5e1, #121212)",
  CACTUS: "linear-gradient(45deg, #C6EA8D, #FE90AF)",
  PEACH: "linear-gradient(45deg, #FFECD2, #FCB69F)",
  ORCA: "linear-gradient(45deg, #44A08D, #093637)",
};

type Props = {
  gradient: keyof typeof GRADIENTS;
};

const toTitleCase = (str: string) => {
  return str
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const TextPreview = ({ gradient }: Props) => {
  const commonClasses = "flex flex-col gap-6 p-12 rounded-lg";

  return (
    <div>
      <h2 className="text-4xl p-2">{toTitleCase(gradient)}</h2>
      <div className="flex flex-row justify-around gap-3 text-3xl font-semibold w-full">
        <div className={`${commonClasses} `}>
          <span>{TEXT}</span>
          <GradientText text={TEXT} gradient={GRADIENTS[gradient]} />
        </div>
        <div className={`${commonClasses} bg-[#101013ee]`}>
          <span>{TEXT}</span>
          <GradientText text={TEXT} gradient={GRADIENTS[gradient]} />
        </div>
        <div className={`${commonClasses} bg-white text-black`}>
          <span>{TEXT}</span>
          <GradientText text={TEXT} gradient={GRADIENTS[gradient]} />
        </div>
      </div>
    </div>
  );
};

export default TextPreview;
