import Link from 'next/link';
import { IoChevronForwardSharp, IoChevronBackSharp } from 'react-icons/io5';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

function PageButtonNumber({ page, currentPage }: { page: number; currentPage: number }) {
   return (
	  <Link
		 href={`/quiz/?page=${page}`}
		 className={cn('flex items-center px-[14px] py-1 rounded-md bg-grey-lightest shadow-base hover:bg-grey-light ' +
			'transition-colors duration-125 ease-in-out', {
			'border border-primary-border shadow-none text-primary-dark': page === currentPage
		 })}>
		 <p className="font-instrument -tracking-wide">{page}</p>
	  </Link>
   );
}

function PreviousNextButton({ currentPage, label, isDisabled }: {
   currentPage: number; label: 'Next' | 'Previous'; isDisabled: boolean;
}) {
   return (
	  <Link
		 href={isDisabled ? '' : `/quiz?page=${currentPage + (label === 'Previous' ? -1 : 1)}`}
		 className={cn('flex items-center gap-2 px-3 py-1 mr-1 bg-grey-lightest rounded-md shadow-base cursor-default', {
			'hover:bg-grey-light transition-colors duration-125 ease-in-out cursor-pointer': !isDisabled,
			'ml-1': label === 'Next'
		 })}>
		 {label === 'Previous' && <IoChevronBackSharp size="0.9rem" />}
		 <p className="font-instrument -tracking-wide">{label}</p>
		 {label === 'Next' && <IoChevronForwardSharp size="0.9rem" />}
	  </Link>
   );
}

export default function Pagination({ currentPage, pagesAmount }: { currentPage: number; pagesAmount: number; }) {
   const pageButtons: ReactNode[] = [];
   for (let i = currentPage - 1; i < currentPage + 2; i++) {
	  if (i <= 1 || i >= pagesAmount) continue;
	  pageButtons.push(<PageButtonNumber key={i} page={i} currentPage={currentPage} />);
   }

   return (
	  <menu className="flex gap-2 font-medium">
		 <PreviousNextButton currentPage={currentPage} label="Previous" isDisabled={currentPage === 1} />
		 <PageButtonNumber page={1} currentPage={currentPage} />

		 {currentPage - 3 >= 1 &&
            <p className="cursor-default py-1 px-[12px] bg-grey-lightest rounded-md shadow-base">...</p>}
		 {pageButtons.map(button => button)}
		 {currentPage + 3 <= pagesAmount &&
            <p className="cursor-default py-1 px-[12px] bg-grey-lightest rounded-md shadow-base">...</p>}

		 {pagesAmount > 1 && <PageButtonNumber page={pagesAmount} currentPage={currentPage} />}
		 <PreviousNextButton currentPage={currentPage} label="Next" isDisabled={currentPage === pagesAmount} />
	  </menu>
   );
}