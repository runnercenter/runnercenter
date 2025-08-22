import React, { useRef, useState } from "react";

interface DoubleSliderProps {
  min: number;
  max: number;
  from: number;
  to: number;
  onChange: (from: number, to: number) => void;
}

export const DoubleSlider: React.FC<DoubleSliderProps> = ({ min, max, from, to, onChange }) => {
  const [dragging, setDragging] = useState<null | "from" | "to">(null);
  const [localFrom, setLocalFrom] = useState(from);
  const [localTo, setLocalTo] = useState(to);
  const sliderRef = useRef<HTMLDivElement>(null);

  const getPercent = (value: number) => ((value - min) / (max - min)) * 100;

  const handleMouseDown = (which: "from" | "to") => (e: React.MouseEvent) => {
    setDragging(which);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, x / rect.width));
    const value = Math.round(min + percent * (max - min));
    if (dragging === "from") {
      const newFrom = Math.min(value, localTo - 1);
      setLocalFrom(newFrom);
      onChange(newFrom, localTo);
    } else {
      const newTo = Math.max(value, localFrom + 1);
      setLocalTo(newTo);
      onChange(localFrom, newTo);
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  });

  React.useEffect(() => {
    setLocalFrom(from);
    setLocalTo(to);
  }, [from, to]);

  return (
    <div className="relative w-full h-6 flex items-center" ref={sliderRef}>
      {/* Track */}
      <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded bg-[#E4E4E4]" />
      {/* Selected range */}
      <div
        className="absolute top-1/2 h-1 -translate-y-1/2 rounded bg-[#061A84]"
        style={{
          left: `${getPercent(localFrom)}%`,
          width: `${getPercent(localTo) - getPercent(localFrom)}%`,
        }}
      />
      {/* From handle */}
      <div
        className="absolute top-1/2 w-5 h-5 rounded-full border-2 border-[#061A84] bg-white -translate-y-1/2 cursor-pointer z-10"
        style={{ left: `calc(${getPercent(localFrom)}% - 10px)` }}
        onMouseDown={handleMouseDown("from")}
      />
      {/* To handle */}
      <div
        className="absolute top-1/2 w-5 h-5 rounded-full border-2 border-[#061A84] bg-white -translate-y-1/2 cursor-pointer z-10"
        style={{ left: `calc(${getPercent(localTo)}% - 10px)` }}
        onMouseDown={handleMouseDown("to")}
      />
    </div>
  );
};
