const svgContents = require("eleventy-plugin-svg-contents"),
			yaml = require("js-yaml"),
			csv = require("csvtojson"),
			pluginBookshop = require("@bookshop/eleventy-bookshop"),
			{ DateTime } = require("luxon"),
			markdownIt = require("markdown-it"),
			markdownItRenderer = new markdownIt(),
			syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight"),
			mila = require("markdown-it-link-attributes");

module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget("../component-library/");
	eleventyConfig.addWatchTarget("../filters/");
	eleventyConfig.addWatchTarget('./styles/tailwind.config.js');
	eleventyConfig.addWatchTarget('./styles/tailwind.css');

	eleventyConfig.setLibrary("md", markdownIt({ 
		html: true
	}).use(mila, {
		matcher(href, config) {
			return ! /^(https:\/\/(.*).?cloudcannon\.com|(?!http)).*$/gm.test(href);
		},
		attrs: {
			target: "_blank",
			rel: "noopener noreferrer"
		}
	}).disable('code'));

	eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
	eleventyConfig.addPassthroughCopy("./images")
	eleventyConfig.addPassthroughCopy("./fonts")
	

	eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents))
	eleventyConfig.addDataExtension('yml', contents => yaml.load(contents))
	eleventyConfig.addDataExtension('csv', async (contents) => {
		return await csv().fromString(contents);
	});

	// Plugins
	eleventyConfig.addPlugin(svgContents);
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addPlugin(pluginBookshop({
		bookshopLocations: ["../component-library"],
		pathPrefix: '',
	}));

	eleventyConfig.addFilter("excerpt", (post) => {
		const content = post.replace(/(<([^>]+)>)/gi, "");
		return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
	});

	eleventyConfig.addFilter("filterByTags", function(collection=[], ...requiredTags) {
		return collection.filter(post => {
			let tags = requiredTags.flat().filter(t => t !== 'posts');
			return tags.some(tag => post.data.tags.includes(tag));
		});
	});

	eleventyConfig.addFilter('markdownify', (str) => {
		return markdownItRenderer.renderInline(str);
	});
};