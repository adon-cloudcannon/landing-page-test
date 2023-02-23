const svgContents = require("eleventy-plugin-svg-contents"),
			yaml = require("js-yaml"),
			csv = require("csvtojson"),
			pluginBookshop = require("@bookshop/eleventy-bookshop"),
			{ DateTime } = require("luxon"),
			mila = require("markdown-it-link-attributes"),
			markdownIt = require("markdown-it"),
			md = new markdownIt({
				html: true,
			}).use(mila, {
				matcher(href, config) {
					return ! /^(https:\/\/(.*).?cloudcannon\.com|(?!http)).*$/gm.test(href);
				},
				attrs: {
					target: "_blank",
					rel: "noopener noreferrer"
				}
			}),
			syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight"),
			StyleRenderer = require('./src/config/style_renderer.js'),
			ImageRenderer = require('./src/config/image_renderer.js'),
			DataGetter = require('./src/config/data_getter.js'),
			Helpers = require('./src/config/helpers.js');

module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget("component-library/");
	eleventyConfig.addWatchTarget('src/styles/tailwind.config.js');
	eleventyConfig.addWatchTarget('src/styles/tailwind.css');
	

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
	eleventyConfig.addPassthroughCopy("src/images")
	eleventyConfig.addPassthroughCopy("src/fonts")
	

	eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents))
	eleventyConfig.addDataExtension('yml', contents => yaml.load(contents))
	eleventyConfig.addDataExtension('csv', async (contents) => {
		return await csv().fromString(contents);
	});

	// Plugins
	eleventyConfig.addPlugin(pluginBookshop({
		bookshopLocations: ["component-library"],
		pathPrefix: '',
	}));

	eleventyConfig.addFilter("excerpt", Helpers.excerpt);
	eleventyConfig.addFilter("UUID", Helpers.uuid);
	eleventyConfig.addFilter("is_integer", Helpers.is_integer);
	eleventyConfig.addFilter("push", Helpers.push_to_array);
	eleventyConfig.addFilter("download_github_readme", DataGetter.download_github_readme);
	eleventyConfig.addFilter("strip_markdown_images", DataGetter.strip_markdown_images);

	eleventyConfig.addPlugin(svgContents);
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addFilter("render_padding", StyleRenderer.render_padding);
	eleventyConfig.addFilter("render_margin", StyleRenderer.render_margin);
	eleventyConfig.addFilter("render_position", StyleRenderer.render_position);
	eleventyConfig.addFilter("render_position_percentage", StyleRenderer.render_position_percentage);
	eleventyConfig.addFilter("render_transform", StyleRenderer.render_transform);
	eleventyConfig.addFilter("render_logo_transform", StyleRenderer.render_logo_transform);
	eleventyConfig.addFilter("render_text_alignment", StyleRenderer.render_text_alignment);
	eleventyConfig.addFilter("render_heading_text_size", StyleRenderer.render_heading_text_size);
	eleventyConfig.addFilter("render_text_block_text_size", StyleRenderer.render_text_block_text_size);
	eleventyConfig.addFilter("render_justify", StyleRenderer.render_justify);
	eleventyConfig.addFilter("render_spacer", StyleRenderer.render_spacer);
	eleventyConfig.addFilter("render_block_alignment", StyleRenderer.render_block_alignment);
	eleventyConfig.addFilter("render_visibility", StyleRenderer.render_visibility);
	eleventyConfig.addFilter("render_columns", StyleRenderer.render_columns);
	eleventyConfig.addFilter("render_three_columns", StyleRenderer.render_three_columns);
	eleventyConfig.addFilter("render_vertical_block_alignment", StyleRenderer.render_vertical_block_alignment);
	
	eleventyConfig.addFilter("image_resize", ImageRenderer.image_resize);
	eleventyConfig.addFilter("image_dimensions", ImageRenderer.image_dimensions);

	eleventyConfig.addFilter("filterByTags", function(collection=[], ...requiredTags) {
		return collection.filter(post => {
			let tags = requiredTags.flat().filter(t => t !== 'posts');
			return tags.some(tag => post.data.tags.includes(tag));
		});
	});

	eleventyConfig.addFilter("markdownify", (markdown) => md.render(markdown));

	return {
		dir: {
			input: "src",
			output: "_site"
		}
	}
};