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
			className={cn('font-instrument -tracking-wide px-3 py-1 hover:text-black', {
			   'font-medium text-black': item.isActive
			})}>{item.label}</Link>
	  </>
   );
}

export default function BreadCrumb({ items }: { items: BreadCrumb[] }) {
   return (
	  <menu className="flex items-center text-grey-mid text-md 2xl:text-lg">
		 {items.map((item, idx) => <BreadCrumbItem item={item} idx={idx} key={idx} />)}
	  </menu>
   );
}