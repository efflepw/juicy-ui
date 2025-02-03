type Props = {
  selected: number | null;
  colors: string[];
  selectColor: (i: number) => void;
  deleteColor: (i: number) => void;
};

const ColorsRange = ({ selected, colors, selectColor, deleteColor }: Props) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {colors.map((color, i) => (
        <div key={i} className="flex flex-col gap-2 h-32">
          <div
            className={`w-10 rounded-lg border-2 cursor-pointer flex-1 ${
              selected == i ? "border-black" : "border-[#fff8]"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => selectColor(i)}
          ></div>
          <div
            className={`w-10 h-10 border-2 border-white rounded-lg flex justify-center items-center`}
            onClick={() => deleteColor(i)}
          >
            <span className="rotate-[45deg] text-white text-4xl cursor-pointer select-none">
              +
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorsRange;
