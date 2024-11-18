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
		 <Link className={`nav-link ${href === path && 'active'}`} href={href}>{children}</Link>
	  </li>
    );
}