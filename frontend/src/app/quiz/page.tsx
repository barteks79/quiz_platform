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
	  <section className="h-screen px-1 lg:px-3 xl:px-10 2xl:px-20 py-16">
		 <div className="grid grid-rows-quiz grid-cols-quiz gap-10">
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