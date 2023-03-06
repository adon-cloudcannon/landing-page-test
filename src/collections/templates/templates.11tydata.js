module.exports = {
	layout: "template.html",
	lead_score: 1,
	tags: ["templates"],
	permalink: "/templates/{{ page.fileSlug }}/",
	eleventyComputed: {
		title: data => data.name
	}
};