'use client';

import { usePathname } from 'next/navigation';
import { getCurrentDateText } from '@/lib/utils';

import Link from 'next/link';
import { SiHey } from 'react-icons/si';

const currentDateText = getCurrentDateText();

export default function AsideUser() {
   const path = usePathname();
   const isCurrentPath = path === '/dashboard/user';

   return (
	  <Link href="/" className="flex justify-between items-center w-full px-5 py-3 mb-10text-black bg-grey-lighter
	  rounded shadow-sm hover:bg-grey-light transition-colors duration-75 ease-in-out">
		 <div className="flex flex-col">
			<h3 className="text-lg font-inter -tracking-wider">Hey, <span className="font-semibold">Guest</span></h3>
			<p className="text-[0.75rem] font-montserrat text-grey-mid">{currentDateText}</p>
		 </div>
		 <SiHey size="1.75rem" />
	  </Link>
   );
}