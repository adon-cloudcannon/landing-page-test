module.exports = {
	layout: "author.html",
	tags: ["authors"],
	eleventyComputed: {
		slug: data => data.name.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, '')
			.replace(/[\s_-]+/g, '-')
			.replace(/^-+|-+$/g, '')
	}
};