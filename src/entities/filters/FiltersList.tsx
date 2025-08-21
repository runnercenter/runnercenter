import { useState } from "react";

type Filter = {
    name: string;
    icon: string;
}

export default function FiltersList() {
    const [filters ] = useState<Filter[]>([
        {
            name: "Средний и длинный бег",
            icon: "1.svg"
        },
        {
            name: "Спринтерский и барьерный бег",
            icon: "2.svg"
        },
        {
            name: "Прыжки в высоту",
            icon: "3.svg"
        },
        {
            name: "Прыжки с шестом",
            icon: "4.svg"
        },
        {
            name: "Прыжки в длину",
            icon: "5.svg"
        },
        {
            name: "Тройной прыжок",
            icon: "6.svg"
        },
        {
            name: "Метание копья",
            icon: "7.svg"
        },
        {
            name: "Толкание ядра",
            icon: "8.svg"
        },
        {
            name: "Метание молота и диска",
            icon: "9.svg"
        },
    ]);

    return (
        <div className='mt-10 flex'>
            <div className='mx-auto flex gap-5'>
                {filters.map((filter) => (
                    <div key={filter.name} className='flex flex-col items-center'>
                        <div className="w-[103px] h-[103px] bg-[#EFEFEF] rounded-full flex">
                            <img src={`/runnercenter/filter/${filter.icon}`} className="mx-auto my-auto" alt="Filter Icon" />
                        </div>
                        <span className='mt-2 text-[12px] text-[#6D6D6D] w-[100px] text-center'>{filter.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}