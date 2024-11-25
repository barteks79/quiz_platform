import FilterButton from './FilterButton';
import FilterSearchBar from './FilterSearchBar';
import FilterCheckbox from './FilterCheckbox';

export default function Filters() {
   return (
	  <header className="flex justify-between w-full h-16 border-b border-b-grey-light bg-background-mid px-4 2xl:px-8
	   transition-all duration-250 ease-in-out">
		 <form className="flex items-center gap-3 2xl:gap-5 w-[28%]">
			<FilterSearchBar />
			<FilterButton>Search</FilterButton>
		 </form>
		 <form className="flex items-center gap-3 2xl:gap-5">
			<label className="text-sm 2xl:text-base font-instrument font-semibold">Sort By</label>
			<FilterCheckbox name="latest" isDefault>Latest</FilterCheckbox>
			<FilterCheckbox name="oldest">Oldest</FilterCheckbox>
			<div className="w-[1px] bg-grey-light h-3/4" />
			<label className="text-sm 2xl:text-base font-instrument font-semibold">Age</label>
			<FilterCheckbox name="age13">13</FilterCheckbox>
			<FilterCheckbox name="age16">16</FilterCheckbox>
			<FilterCheckbox name="age18">18</FilterCheckbox>
			<div className="w-[1px] bg-grey-light h-3/4" />
			<FilterButton>Filter</FilterButton>
		 </form>
	  </header>
   );
}