module.exports = {
	image_resize: function(image_path, size) {
		let path = image_path.split('/image/upload/');

		if (path.length != 2) {
			throw new Error('Invalid Cloudinary URL');
		}

		let transformations = `q_auto,f_auto,w_${size}`
		return `${path[0]}/image/upload/${transformations}/${path[1]}`;
	}
};