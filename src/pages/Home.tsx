/*
import { BrandCard } from '../entities/brand';
import { BlogCard } from '../entities/blog';
*/
import { Layout } from '../shared/ui/Layout';
import nikeIcon from '../assets/icons/nike.svg'
import brooksIcon from '../assets/icons/brooks.svg'
import FiltersList from '../entities/filters/FiltersList';
import { useProducts  } from '../shared/hooks';
import { ProductCard } from '../entities/product';
import { GridContainer } from '../shared/ui/GridContainer';
import { Loading, ErrorMessage } from '../shared/ui';
import { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

function Home() {
  const { products, loading: productsLoading, error: productsError, toggleLike } = useProducts();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    {
      title: "Коллекция\nспециализированной обуви",
      buttons: ["Мужские", "Женские"],
      background: "/runnercenter/hero.png",
      icon: nikeIcon
    },
    {
      title: "Коллекция\nспециализированной обуви",
      buttons: ["Мужские", "Женские"],
      background: "/runnercenter/hero2.png",
      icon: brooksIcon
    }
  ];

  const changeSlide = (newSlide: number) => {
    if (newSlide === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(newSlide);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % slides.length;
    changeSlide(newSlide);
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(newSlide);
  };

  /*
  const { brands, loading: brandsLoading, error: brandsError } = useBrands();
  const { blogPosts, loading: blogLoading, error: blogError } = useBlogPosts();
  */
  return (
    <Layout>
      <div 
        className={`mt-5 bg-center bg-cover bg-no-repeat h-[600px] flex flex-col relative transition-all duration-500 ease-in-out`}
        style={{
          backgroundImage: `url("${slides[currentSlide].background}")`
        }}
      >
        <div className='w-[1240px] mx-auto pt-24 relative'>
          <img 
            src={slides[currentSlide].icon} 
            alt="" 
            className={`w-[93px] h-[93px] object-contain transition-all duration-300 ease-in-out ${
              isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
            }`} 
          />
          <div className={`text-white text-[48px] font-bold leading-tight transition-all duration-300 ease-in-out ${
            isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
          }`}>
            {slides[currentSlide].title.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          <div className={`flex gap-5 mt-5 transition-all duration-300 ease-in-out ${
            isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
          }`}>
            {slides[currentSlide].buttons.map((buttonText, index) => (
              <div 
                key={index}
                className='text-[16px] text-black font-bold px-9 py-4 bg-white hover:bg-transparent hover:text-white border-2 cursor-pointer border-white transition-all duration-300 ease-in-out'
              >
                {buttonText}
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={prevSlide}
          disabled={isTransitioning}
          className='absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-[#C0FD14] transition-colors duration-200 disabled:opacity-50'
        >
          <IoChevronBack size={40} />
        </button>
        <button 
          onClick={nextSlide}
          disabled={isTransitioning}
          className='absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-[#C0FD14] transition-colors duration-200 disabled:opacity-50'
        >
          <IoChevronForward size={40} />
        </button>
        
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              disabled={isTransitioning}
              className={`h-[2px] w-12 transition-colors duration-300 disabled:opacity-70 ${
                currentSlide === index ? 'bg-[#C0FD14]' : 'bg-white'
              }`}
            />
          ))}
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
