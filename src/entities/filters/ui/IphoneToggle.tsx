import { useState } from "react";

export function IphoneToggle({ name }: { name: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="text-[16px] text-[#1D1D35] font-light">{name}</div>
      <button
        type="button"
        aria-pressed={on}
        onClick={() => setOn(v => !v)}
        className={`w-12 ml-auto h-7 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${on ? 'bg-[#061A84]' : 'bg-[#D9D9D9]'}`}
        style={{ minWidth: 44 }}
      >
        <span
          className={`inline-block w-5 h-5 rounded-full shadow transform transition-transform duration-300 ${on ? 'translate-x-6 bg-white' : 'translate-x-1 bg-white'}`}
        />
      </button>
    </div>
  );
}
