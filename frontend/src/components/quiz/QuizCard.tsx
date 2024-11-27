import Image from 'next/image';
import Link from 'next/link';

type QuizCardProps = {
   title: string;
   date: string;
   image: string;
   slug: string;
   favorites: number;
   ageCategory: number;
}

function QuizCardAgeCategoryButton({ age }: { age: number }) {
   return (
	  <p className="font-inter px-4 py-1 bg-white rounded-xl shadow-base text-sm font-medium text-grey-dark">+{age}</p>
   );
}

export default function QuizCard({ title, date, image, slug, favorites, ageCategory }: QuizCardProps) {
   return (
	  <Link className="p-4 h-64 bg-grey-lightest rounded-xl shadow-base hover:scale-[99%] transition-transform
	   duration-100 ease-in-out border border-grey-light" href={`/quiz/${slug}`}>
		 <section className="relative w-full h-3/5 ">
			<Image className="object-cover rounded-md" src={image} alt={title} quality={75} fill />
		 </section>
		 <section className="flex flex-col">
			<h2 className="text-lg font-instrument font-semibold py-1 -tracking-wide">{title}</h2>
			<div className="flex gap-2">
			   {ageCategory >= 13 && <QuizCardAgeCategoryButton age={13} />}
			   {ageCategory >= 16 && <QuizCardAgeCategoryButton age={16} />}
			   {ageCategory === 18 && <QuizCardAgeCategoryButton age={18} />}
			</div>
			<p className="font-montserrat text-grey-mid pt-2">Created: {date}</p>
		 </section>
	  </Link>
   );
}