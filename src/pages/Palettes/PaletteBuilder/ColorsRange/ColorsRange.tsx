import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Color from "./Color";

type Props = {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
};

const ColorsRange = ({ colors, setColors }: Props) => {
  const moveColor = (fromIndex: number, toIndex: number) => {
    const newColors = [...colors];
    const [removed] = newColors.splice(fromIndex, 1);

    newColors.splice(toIndex, 0, removed);

    setColors(newColors);
  };

  const deleteColor = (i: number) => {
    if (colors.length > 2) {
      setColors((colors) => colors.filter((_, index) => index !== i));
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex gap-4 flex-wrap">
        {colors.map((color, i) => (
          <Color
            key={i}
            idx={i}
            color={color}
            onDelete={() => deleteColor(i)}
            onMove={moveColor}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default ColorsRange;
