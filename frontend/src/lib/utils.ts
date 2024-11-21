export const getCurrentDateText = (): string => {
   const currentDate = new Date();
   const currentMonth = currentDate.getMonth();
   let monthAsText: string | undefined;

   switch (currentMonth) {
	  case 0:
		 monthAsText = 'January';
		 break;
	  case 1:
		 monthAsText = 'February';
		 break;
	  case 2:
		 monthAsText = 'March';
		 break;
	  case 3:
		 monthAsText = 'April';
		 break;
	  case 4:
		 monthAsText = 'May';
		 break;
	  case 5:
		 monthAsText = 'June';
		 break;
	  case 6:
		 monthAsText = 'July';
		 break;
	  case 7:
		 monthAsText = 'August';
		 break;
	  case 8:
		 monthAsText = 'September';
		 break;
	  case 9:
		 monthAsText = 'October';
		 break;
	  case 10:
		 monthAsText = 'November';
		 break;
	  case 11:
		 monthAsText = 'December';
		 break;
   }
   if (monthAsText) {
	  return `${monthAsText} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
   }

   return `${currentMonth + 1} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
};