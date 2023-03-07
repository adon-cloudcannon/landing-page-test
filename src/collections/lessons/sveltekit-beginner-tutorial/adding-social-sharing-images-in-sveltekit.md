---
_schema: default
title: Adding Social Sharing Images in SvelteKit
image:
order: '7'
tutorial: tutorials/sveltekit-beginner-tutorial
description:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---
# Adding Social Sharing Images & Meta to your SvelteKit Posts

Continuing our&nbsp;[SvelteKit beginner tutorial series](https://cloudcannon.com/community/learn/sveltekit-beginner-tutorial/), in this installment, we look at adding social sharing images in SvelteKit. We also see how easy it is to add other Search Engine Optimization (SEO) metadata to your Svelte blog posts.

We'll start with the basics, adding a meta description. This is the text snippet we want search engines to show when our blog post appears in search results. Taking it up a level we then look at social sharing images and Schema.org SEO markup. We'll talk more about those later.

## SEO Basics: Meta Description

You might have run the Lighthouse tool on your site before and lost some points because you were missing a title element or meta description. These are useful for SEO as they give the search engines some pointers on how to present your page in search results. We already have a title tag within the svelte:head section of our blog post template (src/lib/components/blog/post.svelte). Let's go ahead and add the meta description too:

&lt;script&gt; /\*\* @type string \*/ export let description; /\*\* @type string \*/ export let date; /\*\* @type string \*/ export let slug; /\*\* @type string \*/ export let title; const url = \`https://example.com/blog/$\{slug\}\`; &lt;/script&gt; &lt;svelte:head&gt; &lt;title&gt;\{title\}&lt;/title&gt; &lt;meta name="description" content=\{description\} /&gt; &lt;link rel="canonical" href=\{url\} /&gt; &lt;/svelte:head&gt;

We also sneaked in a canonical rel tag here. It is a good idea to add this if you are featuring your content on another site as well as your own. It lets search engines know the copy on your site is the original and avoids the guest post being flagged as duplicate content (which can harm your ranking).

## Updating Post Content

You might have noticed we included description and slug fields among the imports in the last section. We have not added them to our post front matter yet though! We can do that now, as well as add some other fields which we will use later. You can edit the file in the CloudCannon Source Editor:

When you click save, the changes are automatically synced to your git repo.

Add the following new fields to the front matter in each blog post:

* last\_updated: date of last update (2023-02-02 for example),
* slug: this will be bed, nose or sniffing to match the post path,
* description: a short snippet of text which search engines can show in results,
* og\_image: bed-og.jpg, nose-og.jpg or sniffing-og.jpg to match the post,
* image\_alt: alt text to describe your images, you might want to add this once you have the images in place, but don't forget to come back to it!

## Social Share Images

Another common practice in SEO is to add images which show up when visitors share your post on social media. Without using metadata to tell the social apps which image you want to use here, the platform might take any image on the page and even place an ugly crop on it!

Before we can add the meta we need a picture. You want something engaging and related to the post. There are many options for creating these social sharing images now. You might decide to craft a prompt for your favorite AI platform and let it create a custom image for you. Alternatively, you could use a tool like Satori to generate your images. We will target images which are 1200 pixels wide and 627 pixels tall. If you're lacking inspiration we have some stock images you can opt for ([bed-og.jpg](https://github.com/rodneylab/cloudcannon-sveltekit-social-sharing-images/raw/main/static/assets/bed-og.jpg),&nbsp;[nose-og.jpg](https://github.com/rodneylab/cloudcannon-sveltekit-social-sharing-images/raw/main/static/assets/nose-og.jpg)&nbsp;and&nbsp;[sniffing-og.jpg](https://github.com/rodneylab/cloudcannon-sveltekit-social-sharing-images/raw/main/static/assets/sniffing-og.jpg)).

As before you can work in the CloudCannon console here. Create a new static/assets folder in the project and drop the three images in there. Name them bed-og.jpg, nose-og.jpg and sniffing-og.jpg.

## Open Graph Svelte Markup

You might prefer to work on your local code editor for the next part. Remember to do a git pull so you have the updated Markdown files as well as new images available locally.

Let's go back to the blog post template and add the Open Graph markup:

&lt;script&gt; // ...TRUNCATED /\*\* @type string \*/ export let image\_alt; /\*\* @type string \*/ export let last\_updated; /\*\* @type string \*/ export let og\_image; // TRUNCATED... &lt;/script&gt; &lt;svelte:head&gt; // TRUNCATED... &lt;meta property="og:site\_name" content="Svelte’s Homepage" /&gt; &lt;meta property="og:locale" content="en" /&gt; &lt;meta property="og:url" content=\{url\} /&gt; &lt;meta property="og:type" content="article" /&gt; &lt;meta property="og:title" content=\{title\} /&gt; &lt;meta property="og:description" content=\{description\} /&gt; &lt;meta property="og:image" content=\{\`/assets/$\{og\_image\}\`\} /&gt; &lt;meta property="og:image:alt" content=\{image\_alt\} /&gt; &lt;meta property="og:image:width" content="1200" /&gt; &lt;meta property="og:image:height" content="627" /&gt; &lt;/svelte:head&gt;

Open Graph came out of Facebook but now, most social platforms will make use of this meta. You can see we added a little more data than just the images. This is all meta which the social platforms can use whenever a visitor to your site shares the page on a social site.

We put the images in the static folder under a new assets directory. The static folder in SvelteKit is for anything which does not need processing. The images fall into this category, we can serve up JPG or PNG images and do not even have to worry about including next-gen formats like WebP or AVIF. As an example, the nose post will have its Open Graph image available at https://example.com/assets/nose-og.jpg. We just drop the files in static/assets, add the og\_image field to the post front matter and SvelteKit takes care of the rest.

## Schema.org Svelte Markup

Finally we will add a spot of Schema.org markup. This is markup designed to let the search engines know more about our page content and generate&nbsp;[featured snippets](https://developers.google.com/search/docs/appearance/featured-snippets). For example, on an e-commerce site product page, you can include meta on the price and availability of the featured product. Schema.org is quite an advanced SEO topic so we will just scratch the surface here, but explore&nbsp;[Schema.org](https://schema.org/)&nbsp;if you are keen to learn more.

Schema.org markup goes into a script tag with type set to application/ld+json. This is a little different to the other meta we added.

&lt;!-- EXAMPLE ONLY --&gt; &lt;script type="application/ld+json"&gt; \{ "@context": "https://schema.org", "@graph": \[ \{ "@type": "WebPage", "@id": "https://example.com/blog/nose#webpage", "url": "https://example.com/blog/nose", // TRUNCATED... \] \} &lt;/script&gt;

That said we can still add it to the svelte:head element. The script tag body will be JSON and we can build it up using JavaScript code in the top, script, section of our blog template:

&lt;script&gt; // ...TRUNCATED const schemaOrgWebPage = \{ '@type': 'WebPage', '@id': \`$\{url\}#webpage\`, url, name: title, isPartOf: \{ '@id': 'https://example.com/#website' \}, datePublished: date, dateModified: last\_updated, author: \{ '@id': 'https://example.com/#/schema/person/#author' \}, description, inLanguage: 'en', potentialAction: \[ \{ '@type': 'ReadAction', target: \[url\] \} \] \}; const schemaOrgObject = \{ '@context': 'https://schema.org', '@graph': \[schemaOrgWebPage\] \}; let jsonLdString = JSON.stringify(schemaOrgObject); let jsonLdScript = \` &lt;script type="application/ld+json"&gt; $\{jsonLdString\} $\{'&lt;'\}/script&gt; \`; &lt;/script&gt; &lt;svelte:head&gt; ...TRUNCATED \{@html jsonLdScript\} &lt;/svelte:head&gt; &lt;!-- TRUNCATED --&gt;

The value for jsonLdScript looks a little unwieldy! This just prevents automated formatters from unwittingly breaking the code. Inspect the element in your browser and it should not look too different to the example above.

## Adding Social Sharing Images in SvelteKit: What’s next?

We saw a few different elements of technical SEO in this post on adding social sharing images in SvelteKit. There is a lot to dive deeper into. Even so, we have covered most bases in the Svelte code here and you should be able to take it quite far, exploring the most interesting aspects for your project in more detail.&nbsp;[Facebook](https://developers.facebook.com/tools/debug/?_fb_noscript=1)&nbsp;and&nbsp;[Twitter](https://cards-dev.twitter.com/validator)&nbsp;provide tools for checking that your Open Graph meta is up to spec. There is also a&nbsp;[Google tool](https://search.google.com/test/rich-results)&nbsp;for checking your Rich results. You can&nbsp;[learn more about the Svelte @html template syntax](https://svelte.dev/docs#template-syntax-html)&nbsp;in the Svelte docs.

Finally I want to briefly mention&nbsp;[CloudCannon](https://cloudcannon.com/sveltekit-cms/)&nbsp;— it's a content management system with first-class support for SvelteKit. It syncs directly with your Git repository, so your development team can continue working in SvelteKit while your content team can manage the content on the site. It's the best of both worlds.

Thanks for reading and keep on building with SvelteKit!