import TextGradient from "../../components/Text/TextGradient";

const TEXT = "Wandering in the dark";

type Props = {
  gradient: string;
};

const TextPreview = ({ gradient }: Props) => {
  const commonClasses =
    "flex items-center flex-col gap-4 px-8 py-6 rounded-lg max-w-[30%]";

  return (
    <div className="">
      <div className="flex flex-row justify-around gap-3 text-2xl font-semibold w-full">
        <div className={`${commonClasses} bg-[#0c0c0c]`}>
          <span>{TEXT}</span>
          <TextGradient text={TEXT} gradient={gradient} />
        </div>
        <div className={`${commonClasses} bg-[#101013ee]`}>
          <span>{TEXT}</span>
          <TextGradient text={TEXT} gradient={gradient} />
        </div>
        <div className={`${commonClasses} bg-white text-black`}>
          <span>{TEXT}</span>
          <TextGradient text={TEXT} gradient={gradient} />
        </div>
      </div>
    </div>
  );
};

export default TextPreview;
