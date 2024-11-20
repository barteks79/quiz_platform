'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IoSettingsSharp, IoSettingsOutline } from 'react-icons/io5';

export default function AsideUser() {
    const path = usePathname();
    const isCurrentPath = path === '/dashboard/user';

    return (
	  <Link href="/" className={`aside-user ${isCurrentPath ? ' active' : ''}`}>
		 <div className="aside-user-info">
			<h3>Hey, <span className="aside-user-name">Guest</span></h3>
			<p>November 20, 2024</p>
		 </div>
		 {isCurrentPath ? <IoSettingsSharp size="1.5rem" /> : <IoSettingsOutline size="1.5rem" />}
	  </Link>
    );
}