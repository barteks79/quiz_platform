import NavLink from '@/components/navigation/NavLink';

export default function TopNav() {
    return (
	  <nav className="flex justify-between px-10 h-16 font-instrument font-medium border-b border-b-grey-light">
		 <ul className="flex items-center gap-8">
			<NavLink href="/">Home</NavLink>
			<NavLink href="/">Quizzes</NavLink>
			<NavLink href="/">Popular</NavLink>
		 </ul>
		 <ul className="flex items-center gap-8">
			<NavLink href="/">Login</NavLink>
			<NavLink href="/">Signup</NavLink>
		 </ul>
	  </nav>
    );
}