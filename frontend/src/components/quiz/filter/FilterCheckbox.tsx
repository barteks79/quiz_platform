'use client';

import { useState, useRef, type ReactNode } from 'react';
import { IoAddSharp, IoRemoveSharp } from 'react-icons/io5';
import { cn } from '@/lib/utils';

type FilterCheckboxProps = {
   children: ReactNode;
   name: string;
}

export default function FilterCheckbox({ children, name }: FilterCheckboxProps) {
   const [isChecked, setIsChecked] = useState<boolean>(false);
   const inputRef = useRef<HTMLInputElement>(null);

   const toggleInput = () => {
	  if (inputRef.current) {
		 inputRef.current.checked = !inputRef.current.checked;
		 setIsChecked(prevIsChecked => !prevIsChecked);
	  }
   };

   return (
	  <>
		 <button className={cn('flex items-center gap-5 px-4 py-2 bg-grey-lightest rounded-lg shadow-base ' +
			'hover:bg-grey-light transition-all duration-125 ease-in-out border',
			{ 'text-primary-dark border-primary-border': isChecked })}
				 onClick={toggleInput} type="button">
			<p className="font-instrument font-medium text-[0.925rem]">{children}</p>
			{isChecked ? <IoRemoveSharp /> : <IoAddSharp />}
		 </button>
		 <input id={name} name={name} type="checkbox" hidden ref={inputRef} />
	  </>
   );
}