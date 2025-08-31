type PaginationProps = {
  limit: number;
  offset: number;
  total: number;
  onPageChange: (offset: number) => void;
  onPageSizeChange: (limit: number) => void;
};

export function Pagination({ limit, offset, total, onPageChange }: PaginationProps) {
    const totalPages = Math.ceil(total / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    return (
        <div className="block lg:flex items-center mt-10">
            <div className="px-12 text-center lg:whitespace-nowrap py-3 bg-[#061A84] text-[15px] text-white cursor-pointer" onClick={() => onPageChange(offset + limit)}>Показать еще</div>
            <div className="justify-between lg:justify-end w-full mt-4 lg:mt-0 flex ml-auto items-center gap-2">
                <div 
                    className="border border-[#E4E4E4] py-3 px-7 cursor-pointer"
                    onClick={() => onPageChange(offset - limit)}
                >
                    Назад
                </div>
                {
                    currentPage == 1 ? (
                        <>
                            {Array.from({ length: Math.min(currentPage + 2, totalPages) }, (_, i) => (
                                <div 
                                    key={i} 
                                    className={`px-5 border py-3 cursor-pointer ${i === currentPage - 1 ? 'border-[#061A84] bg-[#061A84] text-white' : 'border-[#E4E4E4] text-[#1D1D35]'}`} 
                                    onClick={() => onPageChange(i * limit)}
                                >
                                    {i + 1}
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            {Array.from({ length: 3 }, (_, i) => {
                                const pageNum = currentPage - 1 + i;
                                if (pageNum >= 1 && pageNum <= totalPages) {
                                    return (
                                        <div 
                                            key={pageNum} 
                                            className={`px-5 border py-3 cursor-pointer ${pageNum === currentPage ? 'border-[#061A84] bg-[#061A84] text-white' : 'border-[#E4E4E4] text-[#1D1D35]'}`} 
                                            onClick={() => onPageChange((pageNum - 1) * limit)}
                                        >
                                            {pageNum}
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </>
                    )
                }
                {(currentPage + 1 != totalPages && currentPage != totalPages) && (
                    <div className="hidden lg:flex items-center gap-2">
                        <div
                            className={`px-5 border py-3 cursor-pointer border-[#E4E4E4] text-[#1D1D35]`}
                        >
                            ...
                        </div>
                        <div
                            className={`px-5 border py-3 cursor-pointer ${totalPages === currentPage ? 'border-[#061A84] bg-[#061A84] text-white' : 'border-[#E4E4E4] text-[#1D1D35]'}`}
                        >
                            {totalPages}
                        </div>
                    </div>
                )}
                <div
                    className="border border-[#E4E4E4] py-3 px-7 cursor-pointer"
                    onClick={() => onPageChange(offset + limit)}
                >
                    Далее
                </div>
            </div>
        </div>
    )
}