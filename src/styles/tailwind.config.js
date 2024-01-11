const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
	content: ['_site/**/*.html'],
	safelist: [
		'text-ellipsis'
	],
	theme: {
		extend: {
			screens: {
				'xsm': '500px',
			},
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
				"cc-blue": {
					DEFAULT: '#034AD8',
					900: '#034AD8',
					800: '#356EE0',
					600: '#6892E8',
					400: '#9AB7EF',
					200: '#CDDBF7',
					100: '#E6EDFB'
				},	
				carbon: {
					DEFAULT: '#393939',
					900: '#393939',
					800: '#616161',
					600: '#888888',
					400: '#B0B0B0',
					200: '#D7D7D7',
					100: '#ECECEC'
				},
				ruby: {
					DEFAULT: '#F03A47',
					900: '#F03A47',
					800: '#F3616C',
					600: '#F68991',
					400: '#F9B0B5',
					200: '#FCD8DA',
					100: '#FEECED'
				},
				space: {
					DEFAULT: '#354361',
					900: '#354361',
					800: '#5D6981',
					600: '#868EA0',
					400: '#AEB4C0',
					200: '#D7D9DF',
					100: '#EBEDF0'
				},
				amber: {
					DEFAULT: '#FC6D26',
					900: '#FC6D26',
					800: '#FD8A51',
					600: '#FDA77D',
					400: '#FEC5A8',
					200: '#FEE2D4',
					100: '#FCD8DA' // check this one with Vic
				},
				emerald: {
					DEFAULT: '#38A413',
					900: '#38A413',
					800: '#60B642',
					600: '#88C871',
					400: '#AFDBA1',
					200: '#D7EDD0',
					100: '#ECF6E8'
				},
				gold: {
					DEFAULT: '#C9B25F',
					900: '#C9B25F',
					800: '#F9E683',
					600: '#FAECA2',
					400: '#FCF3C1',
					200: '#FDF9E0',
					100: '#FFFCF0'
				},
				'electric-purple': {
					DEFAULT: '#C703D8',
					900: '#C703D8',
					800: '#D235E0',
					600: '#DD68E8',
					400: '#E99AEF',
					200: '#F4CDF7',
					100: '#FAE6FC'
				},				
				nimbus: '#707070',
				caramel: '#fdf6db',
				sea: '#B9E5E3',
				sky: '#b4e7f7',
				ash: '#f7f5f2',
				night: '#2B2B31',
				midnight: '#26252A',								
				comet: "#8BB4ED",
				bronze: "#F4A34E",
				silver: "#C0C0C0",				
				platinum: "#B9C8E6"
			},
			boxShadow: {
				'menu': '0 24px 30px 4px rgb(0 0 0 / 0.08)'
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
			'cc-cubic': 'cubic-bezier(.22 ,1, .36 ,1)',
		}

	},
	plugins: [
		require('@tailwindcss/typography')
	],
}