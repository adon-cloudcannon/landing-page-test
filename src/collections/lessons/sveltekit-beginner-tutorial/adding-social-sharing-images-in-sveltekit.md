---
_schema: default
title: Adding Social Sharing Images in SvelteKit
image: https://cc-dam.imgix.net/tutorial-sveltekit.png
order: '7'
tutorial: tutorials/sveltekit-beginner-tutorial
description:
seo:
  open_graph_type: article
  featured_image: https://cc-dam.imgix.net/tutorial-sveltekit.png
  featured_image_alt: SvelteKit Beginner Tutorial with CloudCannon
---
Continuing our [SvelteKit beginner tutorial series](https://cloudcannon.com/community/learn/sveltekit-beginner-tutorial/), in this installment, we look at adding social sharing images in SvelteKit. We also see how easy it is to add other Search Engine Optimization (SEO) metadata to your Svelte blog posts.

We'll start with the basics, adding a meta description. This is the text snippet we want search engines to show when our blog post appears in search results. Taking it up a level we then look at social sharing images and Schema.org SEO markup. We'll talk more about those later.

## SEO Basics: Meta Description

You might have run the Lighthouse tool on your site before and lost some points because you were missing a title element or meta description. These are useful for SEO as they give the search engines some pointers on how to present your page in search results. We already have a new `title` tag within the `svelte:head` section of our blog post template (`src/lib/components/blog/post.svelte`). Let's go ahead and add the meta description too:

```html
<script>
  /** @type string */
  export let description;

  /** @type string */
  export let date;

  /** @type string */
  export let slug;

  /** @type string */
  export let title;

  const url = `https://example.com/blog/${slug}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={url} />
</svelte:head>
```

We also sneaked in a canonical rel tag here. It is a good idea to add this if you are featuring your content on another site as well as your own. It lets search engines know the copy on your site is the original and avoids the guest post being flagged as duplicate content (which can harm your ranking).

## Updating Post Content

You might have noticed we included `description` and `slug` fields among the imports in the last section. We have not added them to our post front matter yet though! We can do that now, as well as add some other fields which we will use later. You can edit the file in the CloudCannon Source Editor:

<img src="/uploads/rodney1-1.png" width="808" height="455" />

When you click save, the changes are automatically synced to your git repo.

Add the following new fields to the front matter in each blog post:

* `last_updated`\: date of last update (`2023-02-02` for example),
* `slug`\: this will be `bed`, `nose` or `sniffing` to match the post path,
* `description`\: a short snippet of text which search engines can show in results,
* `og_image`\: `bed-og.jpg`, `nose-og.jpg` or `sniffing-og.jpg` to match the post,
* `image_alt`\: alt text to describe your images, you might want to add this once you have the images in place, but don't forget to come back to it!

## Social Share Images

Another common practice in SEO is to add images which show up when visitors share your post on social media. Without using metadata to tell the social apps which image you want to use here, the platform might take any image on the page and even place an ugly crop on it!

Before we can add the meta we need a picture. You want something engaging and related to the post. There are many options for creating these social sharing images now. You might decide to craft a prompt for your favorite AI platform and let it create a custom image for you. Alternatively, you could use a tool like Satori to generate your images. We will target images which are `1200` pixels wide and `627` pixels tall. If you're lacking inspiration we have some stock images you can opt for ([`bed-og.jpg`](https://github.com/rodneylab/cloudcannon-sveltekit-social-sharing-images/raw/main/static/assets/bed-og.jpg), [`nose-og.jpg`](https://github.com/rodneylab/cloudcannon-sveltekit-social-sharing-images/raw/main/static/assets/nose-og.jpg) and [`sniffing-og.jpg`](https://github.com/rodneylab/cloudcannon-sveltekit-social-sharing-images/raw/main/static/assets/sniffing-og.jpg)).

As before you can work in the CloudCannon console here. Create a new `static/assets` folder in the project and drop the three images in there. Name them `bed-og.jpg`, `nose-og.jpg` and `sniffing-og.jpg`.

<img src="/uploads/rodney-2-1.png" width="808" height="455" />

## Open Graph Svelte Markup

You might prefer to work on your local code editor for the next part. Remember to do a git pull so you have the updated Markdown files as well as new images available locally.

Let's go back to the blog post template and add the Open Graph markup:

```html
<script>
  // ...TRUNCATED
  /** @type string */
  export let image_alt;

  /** @type string */
  export let last_updated;

  /** @type string */
  export let og_image;

// TRUNCATED...
</script>

<svelte:head>
  // TRUNCATED...

  <meta property="og:site_name" content="Svelte’s Homepage" />
  <meta property="og:locale" content="en" />
  <meta property="og:url" content={url} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={`/assets/${og_image}`} />
  <meta property="og:image:alt" content={image_alt} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="627" />
</svelte:head>
```

Open Graph came out of Facebook but now, most social platforms will make use of this meta. You can see we added a little more data than just the images. This is all meta which the social platforms can use whenever a visitor to your site shares the page on a social site.

We put the images in the `static` folder under a new `assets` directory. The `static` folder in SvelteKit is for anything which does not need processing. The images fall into this category, we can serve up JPG or PNG images and do not even have to worry about including next-gen formats like WebP or AVIF. As an example, the `nose` post will have its Open Graph image available at `https://example.com/assets/nose-og.jpg`. We just drop the files in `static/assets`, add the `og_image` field to the post front matter and SvelteKit takes care of the rest.

## Schema.org Svelte Markup

Finally we will add a spot of Schema.org markup. This is markup designed to let the search engines know more about our page content and generate [featured snippets](https://developers.google.com/search/docs/appearance/featured-snippets). For example, on an e-commerce site product page, you can include meta on the price and availability of the featured product. Schema.org is quite an advanced SEO topic so we will just scratch the surface here, but explore [Schema.org](https://schema.org/) if you are keen to learn more.

Schema.org markup goes into a `script` tag with type set to `application/ld+json`. This is a little different to the other meta we added.

```html
<!-- EXAMPLE ONLY -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://example.com/blog/nose#webpage",
      "url": "https://example.com/blog/nose",
      // TRUNCATED...
  ]
}
</script>
```

That said we can still add it to the `svelte:head` element. The script tag body will be JSON and we can build it up using JavaScript code in the top, `script`, section of our blog template:

```html
<script>
  // ...TRUNCATED

  const schemaOrgWebPage = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    isPartOf: {
      '@id': 'https://example.com/#website'
    },
    datePublished: date,
    dateModified: last_updated,
    author: {
      '@id': 'https://example.com/#/schema/person/#author'
    },
    description,
    inLanguage: 'en',
    potentialAction: [
      {
        '@type': 'ReadAction',
        target: [url]
      }
    ]
  };

  const schemaOrgObject = {
    '@context': 'https://schema.org',
    '@graph': [schemaOrgWebPage]
  };
  let jsonLdString = JSON.stringify(schemaOrgObject);
  let jsonLdScript = `
    <script type="application/ld+json">
      ${jsonLdString}
    ${'<'}/script>
  `;
</script>

<svelte:head>
  ...TRUNCATED

  {@html jsonLdScript}
</svelte:head>

<!-- TRUNCATED -->
```

The value for `jsonLdScript` looks a little unwieldy! This just prevents automated formatters from unwittingly breaking the code. Inspect the element in your browser and it should not look too different to the example above.

## Adding Social Sharing Images in SvelteKit: What’s next?

We saw a few different elements of technical SEO in this post on adding social sharing images in SvelteKit. There is a lot to dive deeper into. Even so, we have covered most bases in the Svelte code here and you should be able to take it quite far, exploring the most interesting aspects for your project in more detail. [Facebook](https://developers.facebook.com/tools/debug/?_fb_noscript=1) and [Twitter](https://cards-dev.twitter.com/validator) provide tools for checking that your Open Graph meta is up to spec. There is also a [Google tool](https://search.google.com/test/rich-results) for checking your Rich results. You can [learn more about the Svelte `@html` template syntax](https://svelte.dev/docs#template-syntax-html) in the Svelte docs.

Finally I want to briefly mention [CloudCannon](https://cloudcannon.com/sveltekit-cms/) — it's a content management system with first-class support for SvelteKit. It syncs directly with your Git repository, so your development team can continue working in SvelteKit while your content team can manage the content on the site. It's the best of both worlds.

Thanks for reading and keep on building with SvelteKit!