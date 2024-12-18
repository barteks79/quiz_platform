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
			   light: '#2c73fd',
			   dark: '#1958F7',
			   border: '#8fadfa',
			   'bg-light': '#7ACDFF19',
			   'bg-dark': '#7ACDFF26'
			},
			background: {
			   light: '#FAFBFB',
			   mid: '#F0F5F6',
			   dark: '#f1f3ef'
			},
			grey: {
			   card: '#f6f6f5',
			   lightest: '#EFEFEE',
			   lighter: '#E5E5E4',
			   light: '#DCDDDC',
			   base: '#A2A2A2',
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
			base: '0 1px 1px rgba(0, 0, 0, 0.1)'
		 },
		 gridTemplateColumns: {
			quiz: 'repeat(auto-fit, minmax(325px, 1fr))'
		 },
		 animation: { 'pulse-fast': 'pulse 0.8s ease-in-out infinite' }
	  }
   },
   plugins: []
} satisfies Config;
