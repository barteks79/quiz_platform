import QuizCard from '@/components/quiz/QuizCard';

const exampleQuizCardProps = {
   title: 'General knowledge of Fruits',
   date: '01-01-2024',
   image: '/test-images/fruits.jpg',
   slug: 'general-knowledge-of-fruits',
   favorites: 23,
   ageCategory: 16
};

export default function AllQuizzesPage() {
   return (
	  <section className="flex justify-center w-full py-8 xl:py-12 2xl:py-16 transition-[padding] duration-150">
		 <div className="grid grid-rows-quiz grid-cols-quiz gap-10 w-[90%]">
			<QuizCard {...exampleQuizCardProps} />
			<QuizCard {...exampleQuizCardProps} />
			<QuizCard {...exampleQuizCardProps} />
			<QuizCard {...exampleQuizCardProps} />
			<QuizCard {...exampleQuizCardProps} />
			<QuizCard {...exampleQuizCardProps} />
		 </div>
	  </section>
   );
}