import AsideUser from './AsideUser';

export default function AsideNav() {
    return (
	  <aside className="aside-navigation">
		 <div className="aside-wrapper">
			<AsideUser />
			<ul className="aside-list"></ul>
		 </div>
	  </aside>
    );
}