import AsideUser from './AsideUser';

export default function AsideNav() {
    return (
	  <aside className="flex flex-col items-center w-1/6 h-screenshadow-aside
	  bg-background-dark border-r border-r-grey-light">
		 <div className="py-7 w-5/6 h-screen">
			<AsideUser />
			<ul></ul>
		 </div>
	  </aside>
    );
}