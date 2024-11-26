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

export default function QuizCard({ title, date, image, slug, favorites, ageCategory }: QuizCardProps) {
   return (
	  <Link className="p-3 h-80 bg-grey-lightest rounded-xl shadow-base hover:scale-[99%] transition-transform
	   duration-100 ease-in-out border border-grey-light" href={`/quiz/${slug}`}>
		 <div className="relative w-full h-1/2 ">
			<Image className="object-cover rounded-md" src={image} alt={title} quality={75} fill />
		 </div>
	  </Link>
   );
}