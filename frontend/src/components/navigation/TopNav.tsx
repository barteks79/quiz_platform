import NavLink from '@/components/navigation/NavLink';

export default function TopNav() {
   return (
	  <nav
		 className="flex justify-between px-10 h-16 font-instrument font-medium border-b border-b-grey-light sticky
		 top-0 bg-background-mid z-10">
		 <ul className="flex items-center gap-3">
			<NavLink href="/">Home</NavLink>
			<NavLink href="/quiz?page=1">All Quizzes</NavLink>
			<NavLink href="/quiz/popular">Popular</NavLink>
		 </ul>
		 <ul className="flex items-center gap-3">
			<NavLink href="/login">Login</NavLink>
			<NavLink href="/signup">Signup</NavLink>
		 </ul>
	  </nav>
   );
}