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
	  <Link className="h-64 bg-grey-lightest rounded-xl shadow-base hover:scale-[99%] transition-transform
	   duration-100 ease-in-out" href={`/quiz/${slug}`}></Link>
   );
}