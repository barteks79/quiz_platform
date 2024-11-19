'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IoSettingsSharp, IoSettingsOutline } from 'react-icons/io5';

export default function AsideUser() {
    const path = usePathname();
    const isCurrentPath = path === '/dashboard/user';

    return (
	  <Link href="/" className={`aside-user ${isCurrentPath ? ' active' : ''}`}>
		 <h3>Guest</h3>
		 {isCurrentPath ? <IoSettingsSharp /> : <IoSettingsOutline />}
	  </Link>
    );
}