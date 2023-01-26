const probe = require('probe-image-size');

module.exports = {
	image_resize: function(image_path, size) {
		let path = image_path.split('/image/upload/');

		if (path.length != 2) {
			throw new Error('Invalid Cloudinary URL');
		}

		let transformations = `q_auto,f_auto,w_${size}`
		return `${path[0]}/image/upload/${transformations}/${path[1]}`;
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