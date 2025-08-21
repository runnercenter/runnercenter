import { useState } from 'react';
import closeLogo from '../assets/icons/close.svg'
import keyLogo from '../assets/icons/key.svg'

interface HeaderProps {
  className?: string;
}

export function Header({ className = '' }: HeaderProps) {
  const [isAdOpen, setIsAdOpen] = useState(true);
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
          <div className='flex items-center gap-8'>
            <div>О копмпании</div>
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
    </header>
  );
}
