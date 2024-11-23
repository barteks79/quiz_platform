import Filters from '@/components/quiz/filter/Filters';
import { type PropsWithChildren } from 'react';

export default function QuizLayout({ children }: PropsWithChildren) {
   return (
	  <div className="flex flex-col">
		 <Filters />
		 {children}
	  </div>
   );
}