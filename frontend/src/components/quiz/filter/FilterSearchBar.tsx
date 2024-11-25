'use client';

import { useState, useRef } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { cn } from '@/lib/utils';

export default function FilterSearchBar() {
   const [isFocused, setIsFocused] = useState<boolean>(false);
   const inputRef = useRef<HTMLInputElement>(null);
   const focusInput = () => inputRef?.current?.focus();

   return (
	  <div
		 onClick={focusInput}
		 className={cn('flex items-center gap-2 2xl:gap-4 px-3 2xl:px-4 bg-white py-2 rounded-lg shadow-base border ' +
			'border-white transition-colors duration-75 ease-in-out cursor-pointer w-full',
			{ 'border-primary-light': isFocused })}>
		 <IoSearchOutline className="text[0.95rem] 2xl:text-[1.2rem]" color={isFocused ? '#3D7AEB' : '#A2A2A2'} />
		 <input
			id="search"
			name="search"
			placeholder="Search for quizzes..."
			className="font-instrument font-light text-[0.8rem] 2xl:text-[0.925rem] outline-0 w-5/6"
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
			ref={inputRef}
		 />
	  </div>
   );
}