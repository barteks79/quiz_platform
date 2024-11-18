import NavLink from '@/components/navigation/NavLink';

export default function TopNav() {
    return (
	  <nav className="top-navigation">
		 <ul className="nav-list">
			<NavLink href="/">Home</NavLink>
		 </ul>
	  </nav>
    );
}