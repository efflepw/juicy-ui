import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import useMergeRefs from "../../../../../hooks/useMergeRef";

type Props = {
  idx: number;
  color: string;
  onDelete: () => void;
  onMove: (fromIndex: number, toIndex: number) => void;
};

const Color = ({ idx, color, onDelete, onMove }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [{ isDragging }, dragRef] = useDrag<
    { idx: number },
    void,
    { isDragging: boolean }
  >({
    type: "COLOR",
    item: { idx },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "COLOR",
    hover: (item: { idx: number }, monitor) => {
      if (!containerRef.current) return;

      const dragIndex = item.idx;
      const hoverIndex = idx;

      if (dragIndex === hoverIndex) return;

      const hoverBRect = containerRef.current.getBoundingClientRect();
      const hoverMiddleX = (hoverBRect.left - hoverBRect.right) / 2;
      const clientOffset = monitor.getClientOffset();

      if (!clientOffset) return;

      const hoverClientX = clientOffset.x - hoverBRect.right;

      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) return;
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) return;

      onMove(dragIndex, hoverIndex);

      item.idx = hoverIndex;
    },
  });

  return (
    <div
      ref={useMergeRefs([dropRef, containerRef])}
      className="flex flex-col gap-2 h-32"
    >
      <div
        ref={dragRef}
        className={`w-10 rounded-lg border-2 cursor-pointer flex-1 border-[#fff8]`}
        style={{
          backgroundColor: color,
          opacity: isDragging ? 0.25 : 1,
        }}
      ></div>
      <div
        className={`w-10 h-10 border-2 border-white rounded-lg flex justify-center items-center`}
        onClick={onDelete}
      >
        <span className="rotate-[45deg] text-white text-4xl cursor-pointer select-none">
          +
        </span>
      </div>
    </div>
  );
};

export default Color;
