const { transform } = require("esbuild");

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

	validInteger: function(key, object) {
		return key in object && Number.isInteger(object[key]);
	},

	render_space: function(styles, fm, device, type) {
		let space = module.exports.get_data(fm, device, type);

		if (space === undefined) {
			return styles;
		}

		if (module.exports.validInteger('top', space)) {
			styles += `${type}-top: ${space.top}px;`
		} 

		if (module.exports.validInteger('right', space)) {
			styles += `${type}-right: ${space.right}px;`
		} 

		if (module.exports.validInteger('bottom', space)) {
			styles += `${type}-bottom: ${space.bottom}px;`
		} 
		
		if (module.exports.validInteger('left', space)) {
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

	render_position: function(styles, fm, device) {
		let position = module.exports.get_data(fm, device, 'position');

		if (position === undefined) {
			return styles;
		}

		if (module.exports.validInteger('top', position)) {
			styles += `top: ${position.top}px;`
		} 

		if (module.exports.validInteger('right', position)) {
			styles += `right: ${position.right}px;`
		} 

		if (module.exports.validInteger('bottom', position)) {
			styles += `bottom: ${position.bottom}px;`
		} 
		
		if (module.exports.validInteger('left', position)) {
			styles += `left: ${position.left}px;`
		}

		return styles;
	},

	render_heading_text_size: function(styles, fm, device) {
		let sizing = module.exports.get_data(fm, device, 'text_sizing');

		if (sizing === undefined) {
			return styles;
		}

		let textSize = '1rem';
		switch(sizing.text_size) {
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

	render_text_block_text_size: function(styles, fm, device) {
		let sizing = module.exports.get_data(fm, device, 'text_sizing');

		if (sizing === undefined) {
			return styles;
		}

		let textSize = '1.125rem';

		switch(sizing.text_size) {
			case 'biggest':
				textSize = '1.5rem';
				break;
			case 'big':
				textSize = '1.3rem';
				break;
			case 'normal':
				textSize = '1.125rem';
				break;
		}

		return styles +  `font-size: ${textSize};`;
	},

	render_justify: function(styles, fm, device) {
		let justify = module.exports.get_data(fm, device, 'justify');

		if (justify === undefined) {
			return styles;
		}

		let j = 'flex-start';
		switch(justify.align) {
			case 'start':
				j = 'flex-start';
				break;
			case 'end':
				j = 'flex-end';
				break;
			case 'between':
				j = 'space-between';
				break;
			case 'center':
				j = 'center';
				break;
			case 'around':
				j = 'space-around';
				break;
			case 'evenly':
				j = 'space-evenly';
				break;
		}

		return styles + `justify-content: ${j};`;
	},

	render_text_alignment: function(styles, fm, device) {
		let validOptions = [
			'left',
			'right',
			'center',
			'justify',
			'inherit'
		];

		let alignment = module.exports.get_data(fm, device, 'text_alignment');

		if (alignment === undefined) {
			return styles;
		}

		if (validOptions.includes(alignment.align.toLowerCase())) {
			styles += `text-align: ${alignment.align};`;
		}

		return styles;
	},

	render_transform: function(styles, fm, device) {
		let transform = module.exports.get_data(fm, device, 'transform');

		if (transform === undefined) {
			return styles;
		}

		let transformations = '';

		if (module.exports.validInteger('scale', transform)) {
			transformations += `scale(${transform.scale}) `;
		} 

		if (module.exports.validInteger('translate_x', transform)) {
			transformations += `translateX(${transform.translate_x}px) `;
		}

		if (module.exports.validInteger('translate_y', transform)) {
			transformations += `translateY(${transform.translate_y}px) `;
		} 

		if (module.exports.validInteger('rotate', transform)) {
			transformations += `rotate(${transform.rotate}deg) `;
		} 

		if (module.exports.validInteger('skew', transform)) {
			transformations += `skew(${transform.skew}deg) `;
		} 

		return styles + `transform: ${transformations};`
	},

	render_spacer: function(styles, fm, device) {
		let spacing = module.exports.get_data(fm, device, 'space');

		if (spacing === undefined) {
			return styles;
		}

		if (spacing.size < 0) {
			styles += `margin-top: ${spacing.size}px`;
		} else {
			styles += `padding-top: ${spacing.size}px`;
		}

		return styles;
	}
};
