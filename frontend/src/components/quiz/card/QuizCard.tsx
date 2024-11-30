import Button from '@/components/ui/Button';
import { IoHeartOutline, IoChevronForwardOutline } from 'react-icons/io5';
import Image from 'next/image';

type QuizCard = {
   id: string;
   title: string;
   date: string;
   image: string;
   slug: string;
   favorites: number;
   ageCategory: number;
}

function QuizCardAgeCategoryButton({ age }: { age: number }) {
   return (
	  <p className="border border-grey-light font-inter px-5 py-1 bg-white rounded-xl text-sm font-medium text-grey-dark">
		 {age}
	  </p>
   );
}

export default function QuizCard({ title, date, image, slug, favorites, ageCategory }: QuizCard) {
   return (
	  <article className="py-3 px-4 min-h-72 bg-grey-card rounded-xl border border-grey-light">
		 <section className="relative w-full h-3/5">
			<Image className="object-cover rounded-md" src={image} alt={title} quality={75} fill />
		 </section>
		 <section className="flex h-2/5">
			<div className="flex flex-col justify-evenly w-3/4">
			   <h2 className="text-lg font-instrument font-semibold -tracking-wide pt-1">{title}</h2>
			   <div className="flex gap-2 py-1">
				  {ageCategory === 13 && <QuizCardAgeCategoryButton age={13} />}
				  {ageCategory <= 16 && <QuizCardAgeCategoryButton age={16} />}
				  {ageCategory <= 18 && <QuizCardAgeCategoryButton age={18} />}
			   </div>
			   <p className="font-instrument text-grey-mid">Created: {date}</p>
			</div>
			<div className="flex flex-col justify-center w-1/4 gap-2 pt-3">
			   <Button
				  variant="outline"
				  icon={<IoHeartOutline size="1.2rem" />}
				  className="justify-center font-instrument">
				  <p>{favorites}</p>
			   </Button>
			   <Button
				  href={`/quiz/${slug}`}
				  variant="filled"
				  icon={<IoChevronForwardOutline size="1.2rem" />}
				  className="justify-center font-instrument">
				  <p>Visit</p>
			   </Button>
			</div>
		 </section>
	  </article>
   );
}