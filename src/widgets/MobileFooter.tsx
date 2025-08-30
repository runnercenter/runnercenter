export default function MobileFooter() {
    return (
        <div className="lg:hidden bg-[#061A84] py-10 px-4 text-white">
            <div className="grid text-white gap-10 grid-cols-2">
                <div>
                    <div className="font-bold text-[14px]">О нас</div>
                    <div className="font-light text-[12px] mt-4">Отзывы</div>
                    <div className="font-light text-[12px]">Реквизиты</div>
                    <div className="font-light text-[12px]">Контакты</div>
                    <div className="font-bold text-[14px] mt-4">Доставка и оплата</div>
                    <div className="font-bold text-[14px] mt-2">Возврат</div>
                </div>
                <div>
                    <div className="font-bold text-[14px]">Блог</div>
                    <div className="font-bold text-[14px] mt-2">Юридическая информация</div>
                    <div className="font-light text-[12px] mt-4">Пользовательское соглашение</div>
                    <div className="font-light text-[12px]">Политика конфиденциальности</div>
                    <div className="font-light text-[12px]">Cookies</div>
                </div>
            </div>
            <div>
                <div className="flex mt-12">
                    <div>
                        <div className="font-bold text-[14px] whitespace-nowrap">Магазин находится по адресу:</div>
                        <div className="text-[#7070B3] text-[12px] font-light">г. Москва, метро Аэропорт, ЦСКА, Легкоатлетический манеж, 418.</div>
                    </div>
                    <img src="/runnercenter/footer/review.png" className="w-[100px] object-contain"  />
                </div>
                <img src="/runnercenter/footer/map.png" className="w-full mt-4"  />
            </div>
            <div className="flex items-center gap-2 mt-12">
                <img src="/runnercenter/footer/vk.png" className="w-[32px]"  />
                <img src="/runnercenter/footer/youtube.png" className="w-[29px]" />
                <img src="/runnercenter/footer/telegram.png" className="w-[23px]" />
            </div>
            <div className="grid grid-cols-2 gap-10 mt-4">
                <div>
                    <div className="text-[#7070B3] text-[14px] font-light">© 2008 — 2025</div>
                    <div className="font-bold text-[16px] mt-2">RunnerCenter</div>
                    <div className="text-[#7070B3] text-[12px] font-light mt-2">Интернет-магазин<br/>беговой экипировки</div>
                </div>
                <div>
                    <div className="text-[#7070B3] text-[14px] font-light">ИП Божко Е.А.<br/>ИНН 360101249431<br/>ОГРНИП 308360111300031</div>
                    <div className="flex items-center gap-2 mt-2">
                        <img src="/runnercenter/footer/mir.png" className="w-[43px]" />
                        <img src="/runnercenter/footer/alfa.png" className="w-[43px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}