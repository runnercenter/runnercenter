import { useState } from "react";
import { DoubleSlider } from "../../../shared/ui/DoubleSlider";

export function PriceFilter() {
  const min = 6000;
  const max = 10500;
  const [from, setFrom] = useState(min);
  const [to, setTo] = useState(max);

  const handleSliderChange = (newFrom: number, newTo: number) => {
    setFrom(newFrom);
    setTo(newTo);
  };

  return (
    <div>
      {/* Two inputs from to and under slider */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center border border-[#E4E4E4] px-3 py-1 w-full">
          <div className="text-[14px] text-[#A1A1A1]">от</div>
          <input
            type="number"
            min={min}
            max={to - 1}
            value={from}
            onChange={e => {
              const val = Math.min(Number(e.target.value), to - 1);
              setFrom(val);
            }}
            className="bg-transparent font-light text-[#1D1D35] text-[14px] outline-none py-2 placeholder:text-[rgb(29, 29, 53, 0.1)] ml-2 w-full"
          />
        </div>
        <div className="flex items-center border border-[#E4E4E4] pl-3 py-1 w-full">
          <div className="text-[14px] text-[#A1A1A1]">до</div>
          <input
            type="number"
            min={from + 1}
            max={max}
            value={to}
            onChange={e => {
              const val = Math.max(Number(e.target.value), from + 1);
              setTo(val);
            }}
            className="bg-transparent font-light text-[#1D1D35] text-[14px] outline-none py-2 placeholder:text-[rgb(29, 29, 53, 0.1)] ml-2 w-full"
          />
        </div>
      </div>
      <DoubleSlider min={min} max={max} from={from} to={to} onChange={handleSliderChange} />
    </div>
  );
}
