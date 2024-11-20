import type { Config } from 'tailwindcss';

export default {
    content: [
	   './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	   './src/components/**/*.{js,ts,jsx,tsx,mdx}',
	   './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
	   extend: {
		  colors: {
			 primary: {
				light: '#2962EB',
				dark: '#1958F7'
			 },
			 background: {
				light: '#FAFBFB',
				mid: '#F0F5F6',
				dark: '#f1f3ef'
			 },
			 grey: {
				lighter: '#E5E5E4',
				light: '#DCDDDC',
				mid: '#676667',
				dark: '#565858'
			 }
		  },
		  fontFamily: {
			 inter: ['Inter', 'Montserrat'],
			 montserrat: ['Montserrat', 'Poppins', 'Arial'],
			 instrument: ['"Instrument Sans"', 'Poppins', 'Arial']
		  },
		  boxShadow: {
			 aside: '0 0 5px rgba(0, 0, 0, 0.1)'
		  }
	   }
    },
    plugins: []
} satisfies Config;
