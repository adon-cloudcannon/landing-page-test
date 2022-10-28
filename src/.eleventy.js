const svgContents = require("eleventy-plugin-svg-contents"),
			yaml = require("js-yaml"),
			csv = require("csvtojson"),
			pluginBookshop = require("@bookshop/eleventy-bookshop");

module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget('./styles/tailwind.config.js')
	eleventyConfig.addWatchTarget('./styles/tailwind.css')

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

	eleventyConfig.addPlugin(pluginBookshop({
		bookshopLocations: ["../component-library"],
		pathPrefix: '',
	}));
};