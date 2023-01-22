module.exports = {
	basic_checks: function(fm) {
		return fm !== undefined && fm.desktop !== undefined;
	},

	get_data: function(fm, device, type) {
		if (!module.exports.basic_checks(fm)) {
			return undefined;
		}

		if (device === undefined) {
			device = 'desktop';
		}

		let attr = fm.desktop[type];
		if (device == 'tablet' && fm.tablet[type].active) {
			attr = fm.tablet[type];
		}

		if (device == 'mobile') {
			if (fm.mobile[type].active) {
				attr = fm.mobile[type];
			} else if (fm.tablet[type].active) {
				attr = fm.tablet[type];
			}
		}

		return attr;
	},

	render_space: function(styles, fm, device, type) {
		let space = module.exports.get_data(fm, device, type);

		if (space === undefined) {
			return styles;
		}

		if ('top' in space) {
			styles += `${type}-top: ${space.top}px;`
		} 

		if ('right' in space) {
			styles += `${type}-right: ${space.right}px;`
		} 

		if ('bottom' in space) {
			styles += `${type}-bottom: ${space.bottom}px;`
		} 
		
		if ('left' in space) {
			styles += `${type}-left: ${space.left}px;`
		}

		return styles;
	},

	render_padding: function (styles, fm, device) {
		return module.exports.render_space(styles, fm, device, 'padding');
	},

	render_margin: function(styles, fm, device) {
		return module.exports.render_space(styles, fm, device, 'margin');
	},

	render_heading_text_size: function(styles, fm, device) {
		let sizing = module.exports.get_data(fm, device, 'sizing');

		if (sizing === undefined) {
			return styles;
		}

		let textSize = '1rem';
		switch(sizing.size) {
			case 'biggest':
				textSize = '4.5rem';
				break;
			case 'bigger':
				textSize = '4rem';
				break;
			case 'big':
				textSize = '3rem';
				break;
			case 'normal':
				textSize = '2.25rem';
				break;
			case 'small':
				textSize = '1.5rem';
				break;
			case 'smallest':
				textSize = '1.1rem';
				break;
		}

		return styles +  `font-size: ${textSize};`;
	},

	render_subheading_text_size: function(styles, fm, device) {
		let sizing = module.exports.get_data(fm, device, 'sizing');

		if (sizing === undefined) {
			return styles;
		}

		let textSize = '1rem';
		switch(sizing.size) {
			case 'big':
				textSize = '1.5rem';
				break;
			case 'normal':
				textSize = '1.25rem;';
				break;
		}

		return styles +  `font-size: ${textSize};`;
	},

	render_text_alignment: function(styles, fm, device) {
		let validOptions = [
			'left',
			'right',
			'center',
			'justify',
			'inherit'
		];

		let alignment = module.exports.get_data(fm, device, 'alignment');

		if (alignment === undefined) {
			return styles;
		}

		if (validOptions.includes(alignment.align.toLowerCase())) {
			styles += `text-align: ${alignment.align};`;
		}

		return styles;
	}
};
