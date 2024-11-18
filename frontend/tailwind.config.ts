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
				light: '#3437E2',
				dark: '#1B1EEA'
			 },
			 secondary: {
				light: '#999999',
				dark: '#666666'
			 },
			 background: {
				light: '#262626',
				dark: '#1C1C1C'
			 },
			 white: {
				default: '#FFFFFF',
				'01': '#FFFFFF1A',
				'02': '#FFFFFF33',
				'03': '#FFFFFF4D',
				'06': '#FFFFFF99',
				'07': '#FFFFFFB3'
			 }
		  },
		  fontFamily: {
			 inter: ['Inter', 'Montserrat', 'Arial'],
			 montserrat: ['Montserrat', 'Poppins', 'Arial'],
			 instrument: ['Instrument-Sans', 'Open-Sans', 'Arial']
		  }
	   }
    },
    plugins: []
} satisfies Config;
