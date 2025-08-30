import heartLogo from '../assets/icons/heart.svg'
import cartLogo from '../assets/icons/cart.svg'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function MobileHeader() {
    return (
        <div className="flex lg:hidden py-2 px-4 items-center">
            <a href="/">
                <img className="w-[140px]" src="/runnercenter/logo.png" />
            </a>
            <div className="ml-auto gap-6 flex items-center">
              <img src={heartLogo} alt="" className="mx-auto w-6 h-6 cursor-pointer object-contain" />
              <img src={cartLogo} alt="" className="mx-auto w-6 h-6 cursor-pointer object-contain" />
              <RxHamburgerMenu size={28} className="cursor-pointer text-[#061A84]"/>
            </div>
        </div>
    )
}