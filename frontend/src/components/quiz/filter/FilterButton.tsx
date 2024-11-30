import Button from '@/components/ui/Button';
import { type ReactNode } from 'react';

type FilterButtonProps = {
   children: ReactNode;
   className?: string;
}

export default function FilterButton({ children, className }: FilterButtonProps) {
   return (
	  <Button
		 type="submit"
		 variant="filled"
		 className="text-sm 2xl:text-base font-instrument py-2 px-4 2xl:px-7 text-[0.925rem]"
	  >{children}</Button>
   );
}