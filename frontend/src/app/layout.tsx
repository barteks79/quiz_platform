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
		 <body>
			{children}
		 </body>
	  </html>
    );
}
