const probe = require('probe-image-size'),
hasTemplateFormat = require("@11ty/eleventy-plugin-syntaxhighlight/src/hasTemplateFormat");

module.exports = {
	image_resize: function(image_path, size, dpr) {
		let transformations = `auto=compress,format&w=${size}&dpr=${dpr}`
		return `${image_path}?${transformations}`
	},

	image_dimensions: async function(image_path) {
		let html = '',
			width = 0,
			height = 0;

		try {
			let result = await probe(image_path);

			width = result.width;
			height = result.height;

			if (width !== undefined && width > 0) {
				html += ` width="${width}"`
			}

			if (height !== undefined && height > 0) {
				html += ` height="${height}"`
			}

			return html;
		} catch (error) {
			return '';
		}
	}
};