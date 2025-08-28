import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

export function ColorFilter() {
  const [colors] = useState<string[]>([
    "#FFFFFF", "#061A84", "#C0FD14",
    "#02AEFF", "#FF4444", "#6D6D6D",
    "#0F754E", "#60BFBF", "#FF6C11",
    "#BB0DD6", "#000000", 
  ]);
  const [selectedColor, setSelectedColor] = useState<string>("#FFFFFF");

  return (
    <div className="grid grid-cols-5 gap-2">
      {colors.map((color) => (
        <div 
          key={color}
          className={`w-[36px] h-[36px] flex rounded-full cursor-pointer ${color == "#FFFFFF" ? "border border-[#E4E4E4]" : ""}`}
          style={{ backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
        >
          {selectedColor === color && (
            <FaCheck className={`mx-auto my-auto ${color != "#FFFFFF" ? "text-white" : "text-[#A1A1A1]"}`} />
          )}
        </div>
      ))}
    </div>
  );
}
