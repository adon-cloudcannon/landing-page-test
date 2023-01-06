const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['_site/**/*.html'],
	safelist: [],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						"code::before": {content: ''},
						"code::after": {content: ''},
						"code": {
							background: '#f2f2f2'
						}
					}
				}
			},
			fontFamily: {
				'sans': ['TT Norms Pro', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				cc: '#034AD8',
				cc_hover: '#123da6',
				caramel: '#fdf6db',
				sky: '#b4e7f7',
				ash: '#f7f5f2',
				night: '#2B2B31',
				blackish: '#26252A'
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
		},
		transitionTimingFunction: {
			'cc-cubic': 'cubic-bezier(.22,1,.36,1)',
		  }
	
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}