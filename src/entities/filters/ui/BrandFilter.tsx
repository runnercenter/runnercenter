import { CheckBoxFilter } from "../../../shared/ui/CheckBoxFilter";
import { FaSearch } from "react-icons/fa";

export function BrandFilter() {
  return (
    <div>
      <div className="flex items-center mb-5">
        <FaSearch size={22} className="text-[#6D6D6D]" />
        <input 
          type="text" 
          placeholder="Искать по названию"
          className="bg-transparent font-light outline-none py-2 placeholder:text-[rgb(29, 29, 53, 0.1)] ml-4 w-full"
        />
      </div>
      <CheckBoxFilter values={["Brooks", "Hoka", "Mizuno", "Nike", "Adidas", "Puma"]} />
    </div>
  );
}
