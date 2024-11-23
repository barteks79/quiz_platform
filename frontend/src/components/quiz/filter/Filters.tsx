import FilterButton from './FilterButton';
import FilterSearchBar from './FilterSearchBar';
import FilterCheckbox from './FilterCheckbox';

export default function Filters() {
   return (
	  <header className="flex justify-between w-full h-16 border-b border-b-grey-light px-3 xl:px-8">
		 <form className="flex items-center gap-5 w-[28%]">
			<FilterSearchBar />
			<FilterButton>Search</FilterButton>
		 </form>
		 <form className="flex items-center gap-5">
			<label className="font-instrument font-semibold">Sort By</label>
			<FilterCheckbox name="likes">Likes</FilterCheckbox>
			<FilterCheckbox name="views">Views</FilterCheckbox>
			<div className="w-[1px] bg-grey-light h-3/4" />
			<label className="font-instrument font-semibold">Age</label>
			<FilterCheckbox name="age13">13</FilterCheckbox>
			<FilterCheckbox name="age16">16</FilterCheckbox>
			<FilterCheckbox name="age18">18</FilterCheckbox>
			<div className="w-[1px] bg-grey-light h-3/4" />
			<FilterButton>Filter</FilterButton>
		 </form>
	  </header>
   );
}