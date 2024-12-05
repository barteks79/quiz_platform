'use client';

import { useState, type ReactNode, ButtonHTMLAttributes } from 'react';
import DropdownMenu from '@/components/ui/DropdownMenu';
import { IoCheckmarkOutline } from 'react-icons/io5';

interface DropdownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode;
}

function OrderDropdownMenuButton({ children, ...props }: DropdownButtonProps) {
   return (
	  <button {...props}
			  className="flex justify-between items-center w-full px-4 py-1 rounded
		 hover:bg-grey-light transition-colors duration-150 ease-out">{children}</button>
   );
}

export default function OrderDropdownMenu() {
   const [isSortedByLatest, setIsSortedByLatest] = useState(true);
   const changeSortMode = (isLatest: boolean) => setIsSortedByLatest(isLatest);

   return (
	  <DropdownMenu className="absolute top-24 right-24 z-10" title="Order By">
		 <OrderDropdownMenuButton type="button" onClick={() => changeSortMode(true)}>
			<p className="font-instrument font-medium">Latest</p>
			{isSortedByLatest && <IoCheckmarkOutline size="1.2rem" />}
		 </OrderDropdownMenuButton>
		 <OrderDropdownMenuButton type="button" onClick={() => changeSortMode(false)}>
			<p className="font-instrument font-medium">Oldest</p>
			{!isSortedByLatest && <IoCheckmarkOutline size="1.2rem" />}
		 </OrderDropdownMenuButton>
	  </DropdownMenu>
   );
}