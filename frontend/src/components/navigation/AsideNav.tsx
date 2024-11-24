import AsideCategory from './AsideCategory';
import AsideButton from './AsideButton';
import AsideUser from './AsideUser';

import { MdOutlineAccountCircle } from 'react-icons/md';
import { GoGear } from 'react-icons/go';
import { RiQuestionAnswerLine, RiUserAddLine } from 'react-icons/ri';
import { IoCreateOutline, IoHeartOutline, IoCellularOutline, IoLogOutOutline, IoKeyOutline } from 'react-icons/io5';

export default function AsideNav() {
   return (
	  <aside className="flex flex-col items-center w-1/6 min-w-64 h-screen
	  bg-background-dark border-r border-r-grey-light sticky top-0">
		 <div className="py-7 w-5/6 h-screen">
			<AsideUser />
			<AsideCategory label="Dashboard">
			   <AsideButton icon={<IoCreateOutline size="1.35rem" />} href="/quiz/create">Create Quiz</AsideButton>
			   <AsideButton icon={<RiQuestionAnswerLine size="1.2rem" />} href="/quiz/my">My Quizzes</AsideButton>
			   <AsideButton icon={<IoHeartOutline size="1.2rem" />} href="/quiz/favorite">Favorites</AsideButton>
			   <AsideButton icon={<IoCellularOutline size="1.2rem" />} href="/quiz/progress">In Progress</AsideButton>
			</AsideCategory>
			<AsideCategory label="User">
			   <AsideButton icon={<MdOutlineAccountCircle size="1.25rem" />} href="/user">My Profile</AsideButton>
			   <AsideButton icon={<GoGear size="1.2rem" />} href="/settings">Settings</AsideButton>
			</AsideCategory>
			<AsideCategory label="Actions">
			   <AsideButton icon={<IoKeyOutline size="1.2rem" />} href="/login">Login</AsideButton>
			   <AsideButton icon={<RiUserAddLine size="1.2rem" />} href="/signup">Signup</AsideButton>
			   <AsideButton icon={<IoLogOutOutline size="1.2rem" />} href="/logout">Logout</AsideButton>
			</AsideCategory>
		 </div>
	  </aside>
   );
}