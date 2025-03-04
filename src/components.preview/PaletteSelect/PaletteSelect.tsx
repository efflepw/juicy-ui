import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Palette } from "../../utils/palette";
import usePalettes from "../../hooks/usePalettes";

type GradientSelectProps = {
  defaultPalette: Palette | null;
  palettes: Palette[];
  onChange?: (item: Palette) => void;
  placeholder?: string;
};

const GradientSelect = ({
  defaultPalette,
  onChange,
  placeholder = "Select palette",
}: GradientSelectProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [palette, setPalette] = useState<Palette | null>(defaultPalette);
  const selectRef = useRef<HTMLDivElement>(null);
  const palettes = usePalettes();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (item: Palette) => {
    setPalette(item);
    setIsOpen(false);
    if (onChange) {
      onChange(item);
    }
  };

  return (
    <div ref={selectRef} className="relative w-56">
      <div
        className="flex items-center justify-between border border-gray-300 rounded-md cursor-pointer hover:bg-secondary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {palette ? (
          <div className="flex items-center justify-between cursor-pointer p-1 hover:bg-secondary w-full rounded-md">
            <div
              className="w-full h-6 rounded-sm"
              style={{ background: palette.getLinearGradient() }}
            ></div>
          </div>
        ) : (
          <span className="text-gray-400 p-2">{placeholder}</span>
        )}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ml-1 mr-2 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 240 }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute z-10 mt-1 border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto w-full bg-primary "
        >
          {palettes.map((item) => (
            <div
              key={item.getName()}
              className="flex items-center justify-between cursor-pointer px-1 pb-1 hover:bg-secondary w-full rounded-md first:pt-1"
            >
              <div
                className="w-full h-6 rounded-sm"
                style={{ background: item.getLinearGradient() }}
                onClick={() => handleSelect(item)}
              ></div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default GradientSelect;
