import FilterButton from './FilterButton';
import FilterSearchBar from './FilterSearchBar';
import FilterForm from './FilterForm';

export default function Filters() {
   return (
	  <header className="flex justify-between w-full h-16 border-b border-b-grey-light bg-background-mid px-4 2xl:px-8
	   transition-all duration-250 ease-in-out">
		 <form className="flex items-center gap-3 2xl:gap-5 w-[28%] min-w-72">
			<FilterSearchBar />
			<FilterButton>Search</FilterButton>
		 </form>
		 <FilterForm />
	  </header>
   );
}