import { type ReactNode } from 'react';

type AsideCategoryProps = {
   label: string;
   children: ReactNode;
}

export default function AsideCategory({ label, children }: AsideCategoryProps) {
   return (
	  <>
		 <label className="inline-block mt-8 mb-1 font-inter text-grey-base font-light">{label}</label>
		 <ul className="flex flex-col">
			{children}
		 </ul>
	  </>
   );
}