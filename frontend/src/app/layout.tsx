import TopNav from '@/components/navigation/TopNav';
import AsideNav from '@/components/navigation/AsideNav';
import Footer from '@/components/footer/Footer';

import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
   title: 'NextJS Quiz Platform',
   description: 'Share quizzes with all your friends!'
};

export default function RootLayout({ children }: PropsWithChildren) {
   return (
	  <html lang="en">
		 <body className="flex w-full bg-background-light">
			<AsideNav />
			<main className="w-full">
			   <TopNav />
			   {children}
			   {/*<Footer />*/}
			</main>
		 </body>
	  </html>
   );
}
