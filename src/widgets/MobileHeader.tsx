import { useState, useEffect } from 'react'
import heartLogo from '../assets/icons/heart.svg'
import cartLogo from '../assets/icons/cart.svg'

export default function MobileHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className="flex lg:hidden py-2 px-4 items-center relative z-40">
                <a href="/">
                    <img className="w-[140px]" src="/runnercenter/logo.png" />
                </a>
                <div className="ml-auto gap-6 flex items-center">
                  <img src={heartLogo} alt="" className="mx-auto w-6 h-6 cursor-pointer object-contain" />
                  <img src={cartLogo} alt="" className="mx-auto w-6 h-6 cursor-pointer object-contain" />
                  
                  <button 
                    onClick={toggleMenu}
                    className="w-7 h-7 flex flex-col justify-center items-center cursor-pointer relative"
                  >
                    <span className={`block h-0.5 w-6 bg-[#061A84] transition-all duration-300 ease-in-out ${
                      isMenuOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'
                    }`}></span>
                    <span className={`block h-0.5 w-6 bg-[#061A84] transition-all duration-300 ease-in-out my-1 ${
                      isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                    <span className={`block h-0.5 w-6 bg-[#061A84] transition-all duration-300 ease-in-out ${
                      isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'
                    }`}></span>
                  </button>
                </div>
            </div>

            {/* Full Screen Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transition-all duration-300 ease-in-out lg:hidden ${
                isMenuOpen 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-full pointer-events-none'
            }`}>
                {/* Header in Menu */}
                <div className="flex py-3 px-4 items-center">
                    <a href="/">
                        <img className="w-[140px]" src="/runnercenter/logo.png" />
                    </a>
                    <div className="ml-auto gap-6 flex items-center">
                        <img src={heartLogo} alt="" className="mx-auto w-6 h-6 cursor-pointer object-contain" />
                        <img src={cartLogo} alt="" className="mx-auto w-6 h-6 cursor-pointer object-contain" />
                        
                        {/* Same Animated Button */}
                        <button 
                            onClick={toggleMenu}
                            className="w-7 h-7 flex flex-col justify-center items-center cursor-pointer relative"
                        >
                            <span className={`block h-0.5 w-6 bg-[#061A84] transition-all duration-300 ease-in-out ${
                                isMenuOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'
                            }`}></span>
                            <span className={`block h-0.5 w-6 bg-[#061A84] transition-all duration-300 ease-in-out my-1 ${
                                isMenuOpen ? 'opacity-0' : 'opacity-100'
                            }`}></span>
                            <span className={`block h-0.5 w-6 bg-[#061A84] transition-all duration-300 ease-in-out ${
                                isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'
                            }`}></span>
                        </button>
                    </div>
                </div>

                {/* Menu Content */}
                <div className="flex flex-col p-6 space-y-8">
                    <div className="text-[24px] font-light text-[#1D1D35] border-b border-[#E4E4E4] pb-4">
                        Каталог
                    </div>
                    
                    <div className="flex flex-col space-y-6">
                        <a href="#" className="text-[18px] text-[#1D1D35] font-light hover:text-[#061A84] transition-colors">
                            Мужчины
                        </a>
                        <a href="#" className="text-[18px] text-[#1D1D35] font-light hover:text-[#061A84] transition-colors">
                            Женщины
                        </a>
                        <a href="#" className="text-[18px] text-[#1D1D35] font-light hover:text-[#061A84] transition-colors">
                            Дети
                        </a>
                        <a href="#" className="text-[18px] text-[#1D1D35] font-light hover:text-[#061A84] transition-colors">
                            Бренды
                        </a>
                        <a href="#" className="text-[18px] text-[#1D1D35] font-light hover:text-[#061A84] transition-colors">
                            Распродажа
                        </a>
                    </div>

                    <div className="flex flex-col space-y-6 pt-8 border-t border-[#E4E4E4]">
                        <a href="#" className="text-[16px] text-[#6D6D6D] font-light hover:text-[#061A84] transition-colors">
                            О нас
                        </a>
                        <a href="#" className="text-[16px] text-[#6D6D6D] font-light hover:text-[#061A84] transition-colors">
                            Контакты
                        </a>
                        <a href="#" className="text-[16px] text-[#6D6D6D] font-light hover:text-[#061A84] transition-colors">
                            Доставка
                        </a>
                        <a href="#" className="text-[16px] text-[#6D6D6D] font-light hover:text-[#061A84] transition-colors">
                            Возврат
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}