import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type DropdownMenuProps = {
   className?: string;
   title: string;
   children: ReactNode;
}

export default function DropdownMenu({ className, title, children }: DropdownMenuProps) {
   return (
	  <menu className={cn('flex flex-col w-60 border m-5 border-grey-light rounded-lg bg-white', className)}>
		 <h2 className="font-instrument font-semibold px-4 py-2">{title}</h2>
		 <div className="h-[0.8px] w-full bg-grey-light" />
		 <section className="space-y-1 p-1">{children}</section>
		 <div className="h-[0.8px] w-full bg-grey-light" />
		 <button
			type="button"
			className="flex-1 m-1 py-0.5 bg-primary-dark text-white rounded hover:bg-primary-light
			font-medium font-inter transition-colors duration-100 ease-out">Save
		 </button>
	  </menu>
   );
}