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

   return (
	  <li>
		 <Link className="text-black hover:text-grey-dark transition-colors duration-75 ease-in-out" href={href}>
			{children}
		 </Link>
	  </li>
   );
}