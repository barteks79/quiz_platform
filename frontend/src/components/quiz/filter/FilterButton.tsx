import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type FilterButtonProps = {
   children: ReactNode;
   className?: string;
}

export default function FilterButton({ children, className }: FilterButtonProps) {
   return (
	  <button className={cn(`font-instrument text-white bg-primary-dark py-2 px-7 rounded-lg text-[0.925rem]
		 hover:bg-primary-light transition-colors duration-75 ease-in-out shadow-base`, className)} type="submit">
		 {children}
	  </button>
   );
}