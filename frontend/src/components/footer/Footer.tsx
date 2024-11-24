import { IoLogoGithub } from 'react-icons/io5';

const currentYear = new Date().getFullYear();

export default function Footer() {
   return (
	  <footer className="flex justify-center items-center fixed bottom-0 h-20 w-full bg-background-mid
	  border-t border-t-grey-light gap-10">
		 <p className="font-montserrat font-semibold">Bartosz Sarnowski {currentYear}<sup>&copy;</sup></p>
		 <a target="_blank" href="https://github.com/barteks79"
			className="inline-flex items-center font-montserrat font-medium gap-2 hover:text-primary-dark
			transition-colors duration-100 ease-in-out">
			<IoLogoGithub size="1.5rem" />
			<p>barteks79</p>
		 </a>
	  </footer>
   );
}