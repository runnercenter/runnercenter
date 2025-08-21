import { useState } from 'react';
import { Link } from 'react-router-dom';
import closeLogo from '../assets/icons/close.svg'
import keyLogo from '../assets/icons/key.svg'
import searchLogo from '../assets/icons/search.svg'
import arrowDownLogo from '../assets/icons/arrow-down.svg'
import arrowDownBlackLogo from '../assets/icons/arrow-down-black.svg'
import whatsappLogo from '../assets/icons/whatsapp.svg'
import telegramLogo from '../assets/icons/telegram.svg'
import heartLogo from '../assets/icons/heart.svg'
import cartLogo from '../assets/icons/cart.svg'
import {CategoryNavBar} from "../entities/category/CategoryNavBar.tsx";

interface HeaderProps {
  className?: string;
}

export function Header({ className = '' }: HeaderProps) {
  const [isAdOpen, setIsAdOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownPhoneOpen, setIsDropdownPhoneOpen] = useState(false);
  const handleDropdownToggle = () => setIsDropdownOpen((prev) => !prev);
  const handleDropdownPhoneToggle = () => setIsDropdownPhoneOpen((prev) => !prev);
  const handleDropdownClose = () => setIsDropdownOpen(false);

  return (
    <header className={`${className}`}>
      {isAdOpen && (
      <div className="bg-[#C0FD14] flex">
        <div className="w-[1240px] mx-auto flex py-2 items-center px-2">
          <div className="text-center mx-auto font-light text-[14px]">Скидка -20% на первый заказ по промокоду</div>
          <div onClick={() => setIsAdOpen(false)}><img src={closeLogo} alt="Закрыть" className="cursor-pointer object-contain" /></div>
        </div>
      </div>
      )}
      <div className='bg-[#061A84]'>
        <div className="w-[1240px] mx-auto text-[14px] flex py-3 items-center px-2 text-[#8D98D0]">
          <div className='flex items-center gap-8 relative'>
            <div className='cursor-pointer flex items-center gap-2 relative select-none' onClick={handleDropdownToggle} tabIndex={0} onBlur={handleDropdownClose}>
              <div>О компании</div>
              <img src={arrowDownLogo} alt="" className="cursor-pointer object-contain" />
              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 bg-[#061A84] shadow-lg rounded z-10 min-w-[160px] text-[#8D98D0]" onMouseLeave={handleDropdownClose}>
                  <a href="#" className="block px-4 py-2 whitespace-nowrap">Отзывы</a>
                </div>
              )}
            </div>
            <a href="#">Доставка и оплата</a>
            <a href="#">Возврат товара</a>
            <a href="#">Программа привилегий</a>
            <a href="#">Контакты</a>
          </div>
          <div className='flex items-center ml-auto gap-3'>
            <img src={keyLogo} alt="" className="cursor-pointer object-contain" />
            <div>Личный кабинет</div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className="w-[1240px] mx-auto text-[14px] flex py-3 items-center px-2">
          <Link to="/" className='flex gap-4 items-center'>
            <img src="/runnercenter/logo.png" />
            <div className='text-[#1D1D35]'>Интернет-магазин<br/>беговой экипировки</div>
          </Link>
          <div className='flex items-center ml-20'>
            <img src={searchLogo} alt="" className="cursor-pointer object-contain" />
            <input 
              type="text" 
              placeholder="Поиск более чем по 1 000 товарам..."
              className="border-b-2 border-[#C0FD14] bg-transparent outline-none py-2 placeholder:text-[rgb(29, 29, 53, 0.1)] ml-2 w-[300px]"
            />
          </div>
          <div className="flex items-center ml-auto gap-5">
            <div className='cursor-pointer flex items-center gap-2 relative select-none' onClick={handleDropdownPhoneToggle} tabIndex={0}>
              <div className="text-[17px] text-[#1D1D35]">+7 (495) 940 55 34</div>
              <img src={arrowDownBlackLogo} alt="" className="cursor-pointer object-contain" />
              {isDropdownPhoneOpen && (
                  <div className="absolute left-0 top-full mt-2 z-10 min-w-[160px] bg-white border border-[#E4E4E4] text-[#1D1D35]">
                    <a href="#" className="flex items-center px-4 py-2 whitespace-nowrap gap-2">
                      <img src={whatsappLogo} alt="" className="cursor-pointer object-contain" />
                      <div>Whatsapp</div>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 whitespace-nowrap gap-2">
                      <img src={telegramLogo} alt="" className="cursor-pointer object-contain" />
                      <div>Telegram</div>
                    </a>
                  </div>
              )}
            </div>
            <div className="flex flex-col">
              <img src={heartLogo} alt="" className="mx-auto w-5 h-5 cursor-pointer object-contain" />
              <div className="text-[12px] text-center">Избранное</div>
            </div>
            <div className="flex flex-col">
              <img src={cartLogo} alt="" className="mx-auto w-5 h-5 cursor-pointer object-contain" />
              <div className="text-[12px] text-center">Корзина</div>
            </div>
          </div>
        </div>
      </div>
      <CategoryNavBar/>
    </header>
  );
}
