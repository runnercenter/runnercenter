import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

interface CheckBoxFilterProps {
    values: string[];
}

export function CheckBoxFilter({ values }: CheckBoxFilterProps) {
    const [checked, setChecked] = useState<{ [key: string]: boolean }>(() => {
        if (values.length > 0) {
            return { [values[0]]: true };
        }
        return {};
    });

    const handleChange = (value: string) => {
        setChecked((prev) => ({ ...prev, [value]: !prev[value] }));
    };

    const [expanded, setExpanded] = useState(false);
    const hasMoreThanFour = values.length > 4;
    const visibleValues = hasMoreThanFour && !expanded ? values.slice(0, 4) : values;

    return (
        <div>
            {visibleValues.map((value) => {
                const isChecked = !!checked[value];
                return (
                    <label
                        key={value}
                        className="flex items-center cursor-pointer select-none gap-2 mb-2"
                        onClick={() => handleChange(value)}
                    >
                        <span
                            className={`flex items-center justify-center w-[26px] h-[26px] border transition-colors duration-150 ${
                                isChecked
                                    ? 'bg-[#061A84] border-[#061A84] text-white'
                                    : 'bg-white border-[#E4E4E4] text-transparent'
                            }`}
                            style={{ minWidth: 26, minHeight: 26 }}
                        >
                            {isChecked && <FiCheck size={20} />}
                        </span>
                        <span
                            className={`font-light text-[16px]`}
                        >
                            {value}
                        </span>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleChange(value)}
                            value={value}
                            className="hidden"
                        />
                    </label>
                );
            })}
            {hasMoreThanFour && !expanded && (
                <div
                    className="text-[14px] text-[#061A84] cursor-pointer select-none mt-2"
                    onClick={() => setExpanded(true)}
                >
                    Показать все
                </div>
            )}
            {hasMoreThanFour && expanded && (
                <div
                    className="text-[14px] text-[#061A84] cursor-pointer select-none mt-2"
                    onClick={() => setExpanded(false)}
                >
                    Скрыть
                </div>
            )}
        </div>
    );
}