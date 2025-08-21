/*
import { BrandCard } from '../entities/brand';
import { BlogCard } from '../entities/blog';
*/
import { Layout } from '../shared/ui/Layout';
import nikeIcon from '../assets/icons/nike.svg'
import FiltersList from '../entities/filters/FiltersList';
import { useProducts  } from '../shared/hooks';
import { ProductCard } from '../entities/product';
import { GridContainer } from '../shared/ui/GridContainer';
import { Loading, ErrorMessage } from '../shared/ui';

function Home() {
  const { products, loading: productsLoading, error: productsError, toggleLike } = useProducts();
  /*
  const { brands, loading: brandsLoading, error: brandsError } = useBrands();
  const { blogPosts, loading: blogLoading, error: blogError } = useBlogPosts();
  */
  return (
    <Layout>
      <div className='mt-5 bg-[url("/runnercenter/hero.png")] h-[600px] flex flex-col'>
        <div className='w-[1240px] mx-auto pt-24'>
          <img src={nikeIcon} alt="" className="w-[93px] h-[93px] object-contain" />
          <div className='text-white text-[48px] font-bold'>Коллекция<br/>специализированной обуви</div>
          <div className='flex gap-5 mt-5'>
            <div className='text-[16px] text-black font-bold px-9 py-4 bg-white hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300 ease-in-out'>
              Мужские
            </div>
            <div className='text-[16px] text-black font-bold px-9 py-4 bg-white hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300 ease-in-out'>
              Женские
            </div>
          </div>
        </div>
      </div>
      <FiltersList />
      <div className='flex mb-20'>
        <div className='mx-auto mt-10 w-[1240px]'>
          <div className='text-[34px] font-medium mb-5'>Новинки</div>
          {productsLoading ? (<Loading />) : productsError ? (<ErrorMessage message={productsError} />) : (
            <GridContainer>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onToggleLike={toggleLike} />
              ))}
            </GridContainer>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
