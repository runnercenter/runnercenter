import { useState } from 'react';
import { Layout } from '../shared/ui/Layout';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { LuMessagesSquare } from "react-icons/lu";
import { FaCheck } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

function Shoes() {
  const [images] = useState<string[]>([
    "/runnercenter/shoe/1.jpg",
    "/runnercenter/shoe/2.jpg",
    "/runnercenter/shoe/3.jpg",
    "/runnercenter/shoe/4.jpg",
  ])
  const [activeImage, setActiveImage] = useState<string>(images[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOneClickPurchase = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <div className='flex mt-10'>
        <div className='mx-auto w-[1240px]'>
          <div className='flex gap-5 font-light text-[14px]'>
            <div>Главная</div>
            <div>/</div>
            <div>Кроссовки</div>
            <div>/</div>
            <div>Мужские кроссовки</div>
          </div>
          <div className="grid grid-cols-2 mt-10 gap-10">
            <div className='flex gap-20'>
              <div className='flex flex-col gap-5'>
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className={`p-2 relative cursor-pointer ${activeImage === image ? 'border border-[#E4E4E4]' : ''}`} 
                    onClick={() => setActiveImage(image)}
                  >
                    <img src={image} className='w-[84px] h-[84px] object-contain' alt={`Shoe ${index + 1}`} />
                    {activeImage !== image && (
                      <div className="absolute inset-0 bg-white opacity-50 pointer-events-none" />
                    )}
                  </div>
                ))}
              </div>
              <div>
                <img 
                  src={activeImage}
                  className='w-[503px] h-[503px] object-contain'
                />
              </div>
            </div>
            <div>
              <div className='text-[#6D6D6D] text-[14px] font-light'>SKU: 110382870</div>
              <div className='text-[#1D1D35] text-[24px] font-bold'>Кроссовки Brooks GLYCERIN 20</div>
              <div className='flex items-center gap-5 mt-2'>
                <div className='flex items-center text-[#C0FD14] gap-1'>
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStarHalfAlt size={20} />
                </div>
                <span className='text-[#1D1D35] text-[14px]'>4.8</span>
                <div className='flex items-center gap-1'>
                  <LuMessagesSquare className='text-[#D9D9D9]'/>
                  <span className='text-[#1D1D35] text-[14px]'>15</span>
                </div>
                
              </div>
              <div className='mt-5 text-[16px] font-light'>Выберите цвет</div>
              <div className='flex gap-2 mt-2'>
                <div className='w-[30px] h-[30px] bg-[#FFFFFF] border border-[#D9D9D9] rounded-full cursor-pointer'></div>
                <div className='w-[30px] h-[30px] bg-[#E7520E] rounded-full cursor-pointer flex'><FaCheck className='mx-auto my-auto text-white'/></div>
                <div className='w-[30px] h-[30px] bg-[#FFEB37] rounded-full cursor-pointer'></div>
              </div>
              <div className='flex items-center mt-7 gap-5'>
                <div className='text-[16px] text-[#1D1D35] font-bold underline'>EUR</div>
                <div className='text-[16px] text-[#6D6D6D] font-light'>CM</div>
                <div className='text-[16px] text-[#6D6D6D] font-light'>US</div>
                <div className='text-[16px] text-[#6D6D6D] font-light'>UK</div>
                <div className="text-[#6D6D6D] ml-auto underline text-[16px] font-light">Таблица размеров</div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {Array.from({ length: 12 }, (_, index) => (
                  <div key={index} className='flex flex-col px-4 py-2 border border-[#E4E4E4] text-[#A1A1A1] text-[12px]'>US {(index * 0.5) + 5}</div>
                ))}
              </div>
              <div className='flex gap-5 mt-5'>
                <div className='text-[34px] font-bold text-[#1D1D35]'>17 750 ₽</div>
                <div className='text-[20px] font-regular text-[#B8B8C2] mt-auto line-through'>22 990 ₽</div>
              </div>    
              <div className="flex gap-5 mt-10">
                <div className='border-2 border-[#061A84] bg-[#061A84] text-white px-20 py-4 text-[16px] cursor-pointer'>В корзину</div>
                <div 
                  className='border-2 border-[#061A84] text-[#1D1D35] px-10 py-4 text-[16px] font-bold cursor-pointer hover:bg-[#061A84] hover:text-white transition-colors duration-200'
                  onClick={handleOneClickPurchase}
                >
                  Купить в один клик
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white p-5 px-6 max-w-md w-full mx-4 relative">
            <button 
              onClick={closeModal}
              className="absolute top-[-40px] right-[-40px] text-white hover:text-gray-300"
            >
              <IoClose size={34} />
            </button>
            
            <div className="text-[34px] font-bold text-[#1D1D35] mb-6">Купить в один клик</div>
            
            <form className="space-y-4">
              <div className="flex">
                <img src='/runnercenter/shoe/2.jpg' className='w-[80px] h-[80px] object-contain rounded-md mr-4' />
                <div className="flex flex-col">
                  <div className="font-bold text-[16px]">Кроссовки Brooks<br/>GLYCERIN 20</div>
                  <div className="font-light text-[#6D6D6D] text-[14px]">Цвет: синий</div>
                  <div className="font-light text-[#6D6D6D] text-[14px]">Размер: 43 EU</div>
                  <div className="font-bold text-[#061A84] text-[14px]">8 000 ₽</div>
                </div>
              </div>
              <div>
                <input 
                  type="text" 
                  required
                  className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:ring-[#061A84]"
                  placeholder="Имя *"
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  required
                  className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:ring-[#061A84]"
                  placeholder="Телефон *"
                />
              </div>
              
              
              
              <div className="flex gap-3 mt-6">
                <button 
                  type="submit"
                  className="flex-1 bg-[#061A84] text-white py-5 px-4 hover:bg-[#051570] transition-colors duration-200"
                >
                  Купить
                </button>
              </div>
              <div className='flex items-center gap-2 mt-4'>
                <input
                  type="checkbox"
                  className='w-[20px] h-[20px] border border-[#E4E4E4] ring-[#061A84]'
                />
                <div className='text-[12px] text-[#6D6D6D]'>
                  Нажимая кнопку «Купить», вы автоматически соглашаетесь с политикой конфиденциальности и условиями оферты
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Shoes;
