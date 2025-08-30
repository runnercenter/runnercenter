interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  return (
    <div className={`${className} bg-[#061A84] hidden lg:flex text-white`}>
      <div className="w-[1240px] mx-auto py-10 px-10 flex gap-30">
        <div>
          <div className="font-bold text-[16px]">О нас</div>
          <div className="font-light text-[14px] mt-4">Отзывы</div>
          <div className="font-light text-[14px]">Реквизиты</div>
          <div className="font-light text-[14px]">Контакты</div>
          <div className="font-bold text-[16px] mt-4">Доставка и оплата</div>
          <div className="font-bold text-[16px] mt-2">Возврат</div>
          <div className="text-[#7070B3] text-[14px] font-light mt-10">© 2008 — 2025</div>
          <div className="font-bold text-[16px] mt-2">RunnerCenter</div>
          <div className="text-[#7070B3] text-[12px] font-light mt-2">Интернет-магазин<br/>беговой экипировки</div>
        </div>
        <div>
          <div className="font-bold text-[16px]">Блог</div>
          <div className="font-bold text-[16px] mt-2">Юридическая информация</div>
          <div className="font-light text-[14px] mt-4">Пользовательское соглашение</div>
          <div className="font-light text-[14px]">Политика конфиденциальности</div>
          <div className="font-light text-[14px]">Cookies</div>
          <div className="text-[#7070B3] text-[14px] font-light mt-10">ИП Божко Е.А.<br/>ИНН 360101249431<br/>ОГРНИП 308360111300031</div>
          <div className="flex items-center gap-2 mt-2">
            <img src="/runnercenter/footer/mir.png" className="w-[43px]" />
            <img src="/runnercenter/footer/alfa.png" className="w-[43px]" />
          </div>
        </div>
        <div>
          <div className="font-bold text-[16px] whitespace-nowrap">Мы в сети</div>
          <div className="flex items-center gap-2 mt-4">
            <img src="/runnercenter/footer/vk.png" className="w-[32px]"  />
            <img src="/runnercenter/footer/youtube.png" className="w-[29px]" />
            <img src="/runnercenter/footer/telegram.png" className="w-[23px]" />
          </div>
        </div>
        <div>
          <img src="/runnercenter/footer/map.png" className="w-full"  />
          <div className="flex mt-4">
            <div>
              <div className="font-bold text-[16px] whitespace-nowrap">Магазин находится по адресу:</div>
              <div className="text-[#7070B3] text-[14px] font-light">г. Москва, метро Аэропорт, ЦСКА, Легкоатлетический манеж, 418.</div>
            </div>
            <img src="/runnercenter/footer/review.png" className="w-[150px]"  />
          </div>
        </div>
      </div>
    </div>
  );
}
