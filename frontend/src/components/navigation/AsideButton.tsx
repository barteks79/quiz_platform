'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type AsideButtonProps = {
   children: ReactNode;
   icon: ReactNode;
   href: string;
}

export default function AsideButton({ children, href, icon }: AsideButtonProps) {
   const path = usePathname();
   const isCurrentPage = path === href;

   return (
	  <Link
		 className={cn('flex justify-between items-center w-full px-5 py-3 bg-grey-lightest rounded shadow-base mb-3 ' +
			'hover:bg-primary-dark hover:text-white hover:shadow-md transition-all duration-125 ease-in-out',
			{ 'bg-primary-dark text-white hover:bg-grey-lightest hover:text-black': isCurrentPage })}
		 href={href}>
		 <p className="font-instrument font-medium">{children}</p>
		 {icon}
	  </Link>
   );
}