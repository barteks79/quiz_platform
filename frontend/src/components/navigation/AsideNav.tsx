import AsideUser from './AsideUser';

export default function AsideNav() {
    return (
	  <aside className="aside-navigation">
		 <div className="aside-wrapper">
			<label>Your Account</label>
			<AsideUser />
			<ul className="aside-list">
			    <label>Dashboard</label>
			</ul>
		 </div>
	  </aside>
    );
}