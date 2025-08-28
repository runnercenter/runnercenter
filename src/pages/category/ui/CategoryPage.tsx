import { Layout } from "../../../shared";
import { ProductFilters } from "../../../features/product-filters";
import { CategoryNavigation, ProductsGrid } from "../../../widgets";

export function CategoryPage() {
  return (
    <Layout>
      <div className="flex">
        <div className="w-[1240px] mx-auto mb-20">
          <div className='flex gap-5 font-light text-[14px] mt-8'>
            <div>Главная</div>
            <div className="text-[#6D6D6D]">/</div>
            <div className="text-[#6D6D6D]">Каталог</div>
          </div>
          <div className="text-[34px] font-bold text-[#1D1D35] mt-2">Кроссовки для бега с поддержкой</div>
          
          <CategoryNavigation />
          
          <div className="flex mt-10">
            <ProductFilters />
            <ProductsGrid />
          </div>
        </div>
      </div>
    </Layout>
  );
}
