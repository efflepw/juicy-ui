import TextGradient from "../../components/Text/TextGradient";

const TEXT = "Wandering in the dark";

type Props = {
  gradient: string;
};

const TextPreview = ({ gradient }: Props) => {
  const commonClasses =
    "flex items-center flex-col gap-6 px-6 py-8 rounded-lg w-[30%]";

  return (
    <div className="">
      <div className="flex flex-row justify-around gap-3 text-3xl font-semibold w-full">
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
