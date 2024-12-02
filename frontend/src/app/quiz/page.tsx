import BreadCrumb from '@/components/ui/BreadCrumb';
import Pagination from '@/components/ui/Pagination';
import QuizCard from '@/components/quiz/card/QuizCard';
import QuizzesLoader from '@/components/loaders/QuizzesLoader';

const exampleQuizCards = [
   {
	  id: '1',
	  title: 'General knowledge of Fruits',
	  date: '01-01-2024',
	  image: '/test-images/fruits.jpg',
	  slug: 'general-knowledge-of-fruits',
	  favorites: 23,
	  ageCategory: 13
   },
   {
	  id: '2',
	  title: 'World War II Leaders',
	  date: '03-07-2024',
	  image: '/test-images/battle.jpg',
	  slug: 'world-war-ii-leaders',
	  favorites: 76,
	  ageCategory: 13
   },
   {
	  id: '3',
	  title: 'Programming Languages',
	  date: '12-11-2023',
	  image: '/test-images/code.jpg',
	  slug: 'programming-languages',
	  favorites: 13,
	  ageCategory: 16
   },
   {
	  id: '4',
	  title: 'Harvard Medicine Test',
	  date: '31-08-2024',
	  image: '/test-images/medicine.jpg',
	  slug: 'harvard-medicine-test',
	  favorites: 133,
	  ageCategory: 18
   },
   {
	  id: '5',
	  title: 'Most Dangerous Mountains',
	  date: '17-12-2023',
	  image: '/test-images/mountains.jpg',
	  slug: 'most-dangerous-mountains',
	  favorites: 40,
	  ageCategory: 13
   }
];

const exampleBreadCrumb = [
   { label: 'Home', href: '/' },
   { label: 'Quiz', href: '/quiz', isActive: true }
];

export default async function AllQuizzesPage({ searchParams }: { searchParams: Promise<{ page: string }> }) {
   const { page } = await searchParams;

   return (
	  <section className="flex flex-col items-center w-full transition-[padding] duration-150">
		 <div className="flex justify-between py-3 2xl:py-5 px-2 w-[90%]">
			<BreadCrumb items={exampleBreadCrumb} />
			<Pagination currentPage={+page || 1} pagesAmount={10} />
		 </div>
		 {/*<QuizzesLoader />*/}
		 <div className="grid grid-cols-quiz gap-5 w-[90%]">
			{exampleQuizCards.map(quiz => (
			   <QuizCard key={quiz.id} {...quiz} />
			))}
		 </div>
	  </section>
   );
}