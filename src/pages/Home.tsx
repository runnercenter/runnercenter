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
import { IoIosArrowForward } from 'react-icons/io';

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
      <div className='flex mb-2'>
        <div className='mx-auto mt-1 w-[1240px]'>
          <div className="flex gap-5">
            <div className='bg-[#EFEFEF] px-10 py-8 h-[256px] w-[400px] relative'>
              <div className='text-[18px] text-[#1D1D35] '>Кроссовки для бега</div>
              <div className='flex mt-7 gap-8'>
                <div className='flex flex-col gap-3 text-[16px] font-light underline'>
                  <div>Мужские</div>
                  <div>Женские</div>
                  <div>Детские</div>
                </div>
                <div>
                  <img src="/runnercenter/Cross for run.png" className='mt-1 w-[250px]' />
                </div>
              </div>
              
              <div className='bg-[#C0FD14] absolute bottom-0 right-0 p-3 flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-all duration-200'>
                <IoIosArrowForward size={18} />
              </div>
            </div>
            <div className='bg-[#EFEFEF] px-10 py-8 h-[256px] w-[505px] relative'>
              <div className='text-[18px] text-[#1D1D35]'>Одежда для бега мужская</div>
              <div className='flex mt-7 gap-3'>
                <div className='flex flex-col gap-3 text-[16px] font-light underline'>
                  <div>Брюки</div>
                  <div>Тайтсы</div>
                  <div>Шорты</div>
                  <div>Костюмы</div>
                </div>
                <div className='flex flex-col gap-3 text-[16px] font-light underline'>
                  <div>Термобелье</div>
                  <div>Куртки</div>
                  <div>Футболки</div>
                </div>
              </div>
              <div className='absolute bottom-0 right-0'>
                <img src="/runnercenter/Mizuno men's sweatshirt.png" className='w-[245px] h-[245px]' />
              </div>
              <div className='bg-[#C0FD14] absolute bottom-0 right-0 p-3 flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-all duration-200'>
                <IoIosArrowForward size={18} />
              </div>
            </div>
            <div className='bg-[#EFEFEF] px-10 py-9 h-[256px] w-[296px] relative'>
              <div className='text-[18px] text-[#1D1D35]'>Детская<br/>одежда</div>
              <div className='absolute bottom-4 right-6'>
                <img src="/runnercenter/Kid's wear.png" className='w-[195px] h-[210px]' />
              </div>
              <div className='bg-[#C0FD14] absolute bottom-0 right-0 p-3 flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-all duration-200'>
                <IoIosArrowForward size={18} />
              </div>
          </div>
          
        </div>
        </div>
      </div>
      <div className='flex mb-20'>
        <div className='mx-auto mt-3 w-[1240px]'>
          <div className="flex gap-5">
            <div className='bg-[#EFEFEF] px-10 py-8 h-[256px] w-[400px] relative'>
              <div className='text-[18px] text-[#1D1D35] '>Шиповки</div>
              <div className='flex mt-5 gap-8'>
                <div className='flex flex-col gap-3 text-[16px] font-light underline'>
                  <div>Для бега</div>
                  <div>Для прыжков</div>
                  <div>Метания</div>
                </div>
              </div>
              <div className='absolute bottom-10 right-1'>
                <img src="/runnercenter/Ships.png" className='w-[250px]' />
              </div>
              
              <div className='bg-[#C0FD14] absolute bottom-0 right-0 p-3 flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-all duration-200'>
                <IoIosArrowForward size={18} />
              </div>
            </div>
            <div className='bg-[#EFEFEF] px-10 py-8 h-[256px] w-[505px] relative'>
              <div className='text-[18px] text-[#1D1D35]'>Одежда для бега женская</div>
              <div className='flex mt-7 gap-3'>
                <div className='flex flex-col gap-3 text-[16px] font-light underline'>
                  <div>Брюки</div>
                  <div>Тайтсы</div>
                  <div>Шорты</div>
                  <div>Костюмы</div>
                </div>
                <div className='flex flex-col gap-3 text-[16px] font-light underline'>
                  <div>Термобелье</div>
                  <div>Куртки</div>
                  <div>Футболки</div>
                </div>
              </div>
              <div className='absolute bottom-0 right-2'>
                <img src="/runnercenter/Mizuno women's sweatshirt.png" className='w-[245px] h-[245px]' />
              </div>
              <div className='bg-[#C0FD14] absolute bottom-0 right-0 p-3 flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-all duration-200'>
                <IoIosArrowForward size={18} />
              </div>
            </div>
            <div className='bg-[#EFEFEF] px-10 py-9 h-[256px] w-[296px] relative'>
              <div className='text-[18px] text-[#1D1D35]'>Аксессуары</div>
              <div className='absolute bottom-4 right-10'>
                <img src="/runnercenter/Socks.png" className='w-[203px] h-[152px]' />
              </div>
              <div className='bg-[#C0FD14] absolute bottom-0 right-0 p-3 flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-all duration-200'>
                <IoIosArrowForward size={18} />
              </div>
          </div>
          
        </div>
        </div>
      
      
    </div>
    <div className="overflow-hidden w-full py-8">
      <div className="relative w-full">
        <div
          className="flex gap-13 items-center animate-logo-scroll whitespace-nowrap"
          style={{ minWidth: '2000px' }}
        >
          <div><img src="/runnercenter/Brooks logo.png" className='opacity-75 w-[99px]' /></div>
          <div><img src="/runnercenter/Nike logo.png" className='opacity-75 w-[75px]' /></div>
          <div><img src="/runnercenter/Casio logo.png" className='opacity-75 w-[92px]' /></div>
          <div><img src="/runnercenter/Mizuno logo.png" className='opacity-75 w-[79px]' /></div>
          <div><img src="/runnercenter/UYN logo.png" className='opacity-75 w-[80px]' /></div>
          <div><img src="/runnercenter/Skins logo.png" className='opacity-75 w-[90px]' /></div>
          {/* Дублируем для бесшовной прокрутки */}
          <div><img src="/runnercenter/Brooks logo.png" className='opacity-75 w-[99px]' /></div>
          <div><img src="/runnercenter/Nike logo.png" className='opacity-75 w-[75px]' /></div>
          <div><img src="/runnercenter/Casio logo.png" className='opacity-75 w-[92px]' /></div>
          <div><img src="/runnercenter/Mizuno logo.png" className='opacity-75 w-[79px]' /></div>
          <div><img src="/runnercenter/UYN logo.png" className='opacity-75 w-[80px]' /></div>
          <div><img src="/runnercenter/Skins logo.png" className='opacity-75 w-[90px]' /></div>
        </div>
      </div>
    </div>
      <div className='flex mb-20'>
        <div className='mx-auto mt-20 w-[1240px]'>
          <div className='text-[34px] font-medium mb-5'>Спецпредложения</div>
          {productsLoading ? (<Loading />) : productsError ? (<ErrorMessage message={productsError} />) : (
            <GridContainer>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onToggleLike={toggleLike} />
              ))}
            </GridContainer>
          )}
        </div>
      </div>
      <div className='flex mb-2'>
        <div className='mx-auto mt-1 w-[1240px]'>
          <div className="flex gap-5">
            <div
              className="px-10 py-10 bg-[#ECEFF3] w-[610px] h-[245px] bg-cover bg-center relative"
              style={{
                backgroundImage: "url('/runnercenter/bg_with_arrow.png')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
            >
              <div className='text-[34px] text-[#1D1D35] mt-1'> Mizuno</div>
              <div className='flex gap-8'>
                <div className='flex flex-col gap-10 text-[#1D1D35] text-[20px] font-light '>
                  <div>Новая коллекция<br/>кроссовок</div>
                </div>
              </div>
              <img
                src="/runnercenter/New_mizuno_shoes.png"
                alt="Mizuno Shoes"
                className="w-[300px] absolute right-0 bottom-0 "
              
              />
            </div>
            <div
              className="px-10 py-10 bg-[#ECEFF3] w-[610px] h-[245px] bg-cover bg-center relative"
              style={{
                backgroundImage: "url('/runnercenter/bg_with_arrow.png')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
            >
              <div className='text-[34px] text-[#1D1D35] mt-1'> Nordski</div>
              <div className='flex gap-8'>
                <div className='flex flex-col gap-10 text-[#1D1D35] text-[20px] font-light '>
                  <div>Новая коллекция<br/>одежды</div>
                </div>
              </div>
              <img
                src="/runnercenter/New_nordski.png"
                alt="Mizuno Shoes"
                className="w-[300px] absolute right-0 bottom-0 "
              
              />
            </div>
            </div>
          </div>
        </div>
      <div className='flex mb-20'>
        <div className='mx-auto mt-20 w-[1240px]'>
          <div className='text-[34px] font-medium mb-5'>Популярное</div>
          {productsLoading ? (<Loading />) : productsError ? (<ErrorMessage message={productsError} />) : (
            <GridContainer>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onToggleLike={toggleLike} />
              ))}
            </GridContainer>
          )}
        </div>
      </div>
      <div className='flex mb-20'>
        <div className='mx-auto mt-20 w-[1240px]'>
          <div className='text-[34px] font-medium mb-5'>Новое в блоге</div>
           <div className='flex gap-4 items-center'>
           <div>
            <img src="/runnercenter/Blog1.png"  />
           <div className='text-[16px] font-medium mt-3'>Эволюция модели Saucony<br/>Triumph</div>
           </div>
           <div>
            <img src="/runnercenter/Blog2.png"  />
           <div className='text-[16px] font-medium mt-3'>Руки в тепле: выбираем<br/>перчатки для бега...</div>
           </div>
           <div>
            <img src="/runnercenter/Blog3.png"  />
           <div className='text-[16px] font-medium mt-3'>Как выбрать термобелье<br/>для тренировок в холод</div>
           </div>
           <div>
            <img src="/runnercenter/Blog4.png" />
           <div className='text-[16px] font-medium mt-3'>Как выбрать кроссовки для<br/>марафона?</div>
           </div>
           <div>
            <img src="/runnercenter/Blog5.png"  />
           <div className='text-[16px] font-medium mt-3'>Как выбрать кроссовки<br/>для марафона?</div>
           </div>
           </div>
            
            
            
            
           
           
        </div>
      </div>
    </Layout>
  );
}

export default Home;
