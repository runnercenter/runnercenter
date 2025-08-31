import { useAllProducts } from "../shared";
import { ProductCard } from "../entities";
import { ProductSorting } from "../features/product-sorting";
import { useState } from "react";
import { Pagination } from "../shared/ui/Pagination";

export function ProductsGrid() {
  const [limit, setLimit] = useState(28);
  const [offset, setOffset] = useState(0);
  const { products, loading: productsLoading, error: productsError, toggleLike, total: total } = useAllProducts(limit, offset);

  const handlePageChange = (newOffset: number) => {
    if (newOffset < 0 || newOffset >= total) return;
    setOffset(newOffset);
  };

  const handlePageSizeChange = (newLimit: number) => {
    setLimit(newLimit);
  };

  return (
    <div className="lg:w-[75%] px-3 lg:px-0">
      <div className="lg:block hidden text-[18px] font-bold text-[#1D1D35]">Гиперпронатор (Support)</div>
      <div className="lg:block hidden text-[16px] font-light mb-4 text-[#6D6D6D] mt-5">

        У спортсменов с гиперпронацией, касание с поверхностью начинается с внешней стороны стопы, но при приземлении она значительно разворачивается внутрь. Поэтому они называются гиперпронаторами. При приземлении, стопа и голень имеют неустойчивость. Соответственно, затруднена стабилизация тела, нагрузка распределяется неравномерно. Отталкивание происходит, в большей степени, за счёт большого и второго пальца стопы, то есть внутренней части свода. Поэтому гиперпонаторам необходима поддержка свода стопы.
      </div>
      
      <ProductSorting />
      
      {productsLoading && <div>Loading products...</div>}
      {productsError && <div>Error loading products</div>}
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onToggleLike={toggleLike} />
        ))}
      </div>
      <Pagination
        limit={limit}
        total={total}
        offset={offset}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
}
