'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type ReactNode } from 'react';

type NavLinkProps = {
   href: string;
   children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
   const path = usePathname();
   const isCurrentPage = path === href.split('?')[0];

   return (
	  <li>
		 <Link
			className={`px-5 py-2 rounded transition-all ease-in-out 
			${isCurrentPage ? 'shadow-base text-primary-dark bg-primary-bg-light hover:bg-primary-bg-dark duration-75'
			   : 'hover:shadow-base text-black hover:text-primary-dark hover:bg-primary-bg-light duration 125'}`}
			href={href}>
			{children}
		 </Link>
	  </li>
   );
}