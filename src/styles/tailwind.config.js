const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['_site/**/*.html'],
	safelist: [],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['TT Norms Pro', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				cc: '#034AD8',
				caramel: '#fdf6db',
				sky: '#b9e5e3',
				ash: '#f7f5f2'
			},
			boxShadow: {
				'menu': '0 5px 25px 10px rgb(0 0 0 / 0.08)'
			}
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				sm: "100%",
				md: "100%",
				lg: "1024px",
				xl: "1280px"
		 }
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}