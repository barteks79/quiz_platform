'use client';

import { useState, useRef, type ReactNode } from 'react';
import Button from '@/components/ui/Button';
import { IoAddSharp, IoRemoveSharp } from 'react-icons/io5';

type FilterCheckboxProps = {
   children: ReactNode;
   name: string;
   isDefault?: boolean;
}

export default function FilterCheckbox({ children, name, isDefault = false }: FilterCheckboxProps) {
   const [isChecked, setIsChecked] = useState<boolean>(isDefault);
   const inputRef = useRef<HTMLInputElement>(null);

   const toggleInput = () => {
	  if (inputRef.current) {
		 inputRef.current.checked = !inputRef.current.checked;
		 setIsChecked(prevIsChecked => !prevIsChecked);
	  }
   };

   return (
	  <>
		 <Button
			type="button"
			onClick={toggleInput}
			variant="outline"
			isActive={isChecked}
			icon={isChecked ? <IoRemoveSharp /> : <IoAddSharp />}
			className="hidden xl:flex 2xl:gap-5 px-3 2xl:px-4 py-2 text-sm 2xl:text-base">
			<p className="font-instrument font-medium text-sm 2xl:text-[0.925rem]">{children}</p>
		 </Button>
		 <input id={name} name={name} type="checkbox" hidden ref={inputRef} />
	  </>
   );
}