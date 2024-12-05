'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';
import FilterCheckbox from '@/components/quiz/filter/FilterCheckbox';
import FilterButton from '@/components/quiz/filter/FilterButton';
import OrderDropdownMenu from '@/components/quiz/filter/OrderDropdownMenu';

export default function FilterForm() {
   const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
   const [isAgeDropdownOpen, setIsAgeDropdownOpen] = useState(false);

   const toggleOrderDropdown = () => {
	  if (isAgeDropdownOpen && !isOrderDropdownOpen) setIsAgeDropdownOpen(false);
	  setIsOrderDropdownOpen(prev => !prev);
   };

   const toggleAgeDropdown = () => {
	  if (isOrderDropdownOpen && !isAgeDropdownOpen) setIsOrderDropdownOpen(false);
	  setIsAgeDropdownOpen(prev => !prev);
   };

   return (
	  <form className="flex items-center gap-3 2xl:gap-5">
		 <label className="text-sm 2xl:text-base font-instrument font-semibold">Sort By</label>
		 {isOrderDropdownOpen && <OrderDropdownMenu />}
		 <Button onClick={toggleOrderDropdown} variant="icon"
				 icon={isOrderDropdownOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />} type="button"
				 className="xl:hidden bg-primary-dark text-white p-2 rounded-lg hover:bg-primary-light" />
		 <FilterCheckbox name="latest" isDefault>Latest</FilterCheckbox>
		 <FilterCheckbox name="oldest">Oldest</FilterCheckbox>
		 <div className="w-[0.5px] xl:w-[1px] bg-grey-light h-3/4" />

		 <label className="text-sm 2xl:text-base font-instrument font-semibold">Age</label>
		 <Button onClick={toggleAgeDropdown} variant="icon"
				 type="button" icon={isAgeDropdownOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
				 className="xl:hidden bg-primary-dark text-white p-2 rounded-lg hover:bg-primary-light" />
		 <FilterCheckbox name="age13">13</FilterCheckbox>
		 <FilterCheckbox name="age16">16</FilterCheckbox>
		 <FilterCheckbox name="age18">18</FilterCheckbox>
		 <div className="w-[0.5px] xl:w-[1px] bg-grey-light h-3/4" />

		 <FilterButton>Filter</FilterButton>
	  </form>
   );
}