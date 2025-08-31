import { Layout } from "../../../shared";
import { ProductFilters } from "../../../features/product-filters";
import { CategoryNavigation, ProductsGrid } from "../../../widgets";

export function CategoryPage() {
  return (
    <Layout>
      <div className="flex">
        <div className="lg:w-[1240px] lg:mx-auto lg:mb-20 mb-10">
          <div className='flex gap-5 font-light text-[14px] mt-8 px-3 lg:px-0'>
            <div>Главная</div>
            <div className="text-[#6D6D6D]">/</div>
            <div className="text-[#6D6D6D]">Каталог</div>
          </div>
          <div className="lg:text-[34px] text-[28px] font-bold text-[#1D1D35] mt-2 px-3 lg:px-0">Кроссовки для бега с поддержкой</div>

          <CategoryNavigation />
          
          <div className="block lg:flex lg:mt-10 mt-2">
            <ProductFilters />
            <ProductsGrid />
          </div>
        </div>
      </div>
    </Layout>
  );
}
