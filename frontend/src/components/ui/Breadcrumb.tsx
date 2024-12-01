import Link from 'next/link';
import { cn } from '@/lib/utils';
import { IoChevronForwardSharp } from 'react-icons/io5';

type BreadCrumb = {
   label: string;
   href: string;
   isActive?: boolean;
}

function BreadCrumbItem({ item, idx }: { item: BreadCrumb, idx: number }) {
   return (
	  <>
		 {idx !== 0 && <IoChevronForwardSharp size="0.8rem" />}
		 <Link
			href={item.href}
			className={cn('font-instrument -tracking-wide px-3 hover:text-black', {
			   'font-medium text-black': item.isActive
			})}>{item.label}</Link>
	  </>
   );
}

export default function BreadCrumb({ items }: { items: BreadCrumb[] }) {
   return (
	  <menu className="flex items-center py-4 2xl:py-6 w-[90%] text-grey-mid">
		 {items.map((item, idx) => <BreadCrumbItem item={item} idx={idx} key={idx} />)}
	  </menu>
   );
}