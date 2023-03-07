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

	// Shortcodes
    eleventyConfig.addShortcode('youtube', function(title, id, extend, border ){
		let extendClass = '' ;
		let borderClass = '';
		if(extend){
			extendClass = 'xl:mx-[-9rem]'
		}

		if(border){
			borderClass = 'border-2';
		}

        return `<div class="relative ${extendClass} ${borderClass} ">
        <iframe
        class="w-full aspect-video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen="" 
        frameborder="0"
        loading="lazy"
        src="https://www.youtube.com/embed/${id}?rel=0&amp;modestbranding=1&amp;showinfo=0" 
        title="${title}"></iframe>
    </div>
    `
    });
	eleventyConfig.addShortcode('vimeo', function(video, title, border){
		let j= '?';
		let borderClass= '';
		if(video.includes('?')){
			j = '&';
		}
		if(border){
			borderClass = 'border-2';
		}
		return `<div class="relative ${borderClass}">
			<iframe
				class="w-full aspect-video"
				src="${video}${j}muted=1&background=1&loop=1&autopause=0&autoplay=1"
				allow="autoplay; fullscreen; picture-in-picture" 
				allowfullscreen="" 
				title="${ title }" 
				data-ready="true"
				loading="lazy"
				frameborder="0"></iframe>
		</div>`	
	});

	eleventyConfig.addShortcode('video', function(url, title, border){
		let borderClass= '';
		if(border){
			borderClass = 'border-2';
		}
		return `<video 
		autoplay muted loop
		class="w-full aspect-video ${borderClass}"
		title="${ title}">
		<source src="${ url}" type="video/mp4">
		</video>`
	});

	eleventyConfig.addShortcode('quote', function(quote){
		return `<blockquote class="border-0 px-14 text-3xl leading-relaxed">
		<p>${ quote}</p>
		</blockquote>`
	});

	eleventyConfig.addShortcode('image', function(src, alt, extend, border){
		let extendContainerClass = '';
		let extendImageClass = '';
		let borderClass = '';

		if(extend){
			extendContainerClass = '-mx-36';
			extendImageClass = 'w-full max-h-[700px] object-cover object-center';
		}

		if(border){
			borderClass = 'border-2';
		}
		return `<div class="relative ${extendContainerClass} ${borderClass}">
			<img src="${src}" alt="${ alt }" class="rounded-xl mx-auto ${ extendImageClass}" />
		</div>`
	});

	eleventyConfig.addFilter("excerpt", Helpers.excerpt);
	eleventyConfig.addFilter("UUID", Helpers.uuid);
	eleventyConfig.addFilter("is_integer", Helpers.is_integer);
	eleventyConfig.addFilter("push", Helpers.push_to_array);
	eleventyConfig.addFilter("download_github_readme", DataGetter.download_github_readme);
	eleventyConfig.addFilter("strip_markdown_images", DataGetter.strip_markdown_images);
	eleventyConfig.addFilter("strip_cc_deploy", DataGetter.strip_cc_deploy);

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