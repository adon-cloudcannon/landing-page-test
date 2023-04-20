---
_schema: default
title: How Jampack optimizes our Eleventy website and improves performance
description: "Jampack is a post-processing tool that takes the output of any static site generator\_and optimizes it for user experience. CloudCannon uses Jampack to achieve perfect Lighthouse scores and excellent Core Web Vitals scores on cloudcannon.com."
draft: false
series:
image: https://cc-dam.imgix.net/Jampack-CC (2).png
date: 2023-04-15T05:07:00+12:00
hide_publish_date: false
tags:
  - Resources
  - Eleventy
author: 466580e8-b101-4837-a0c2-a90a8aebb5db
permalink: /blog/{{ title | slugify }}/
cta:
  title: Launch and optimize your website today
  body_text: >-
    Give your content team full autonomy on your developer-approved tech stack
    with CloudCannon.
  button:
    content:
      link: https://app.cloudcannon.com/register?trial=cc_standard
      text: Get started free!
    styles:
      size:
      style: outline
      extra_classes:
seo:
  open_graph_type: article
  featured_image: https://cc-dam.imgix.net/jampack-cc-2.png
  featured_image_alt: Image showing a computer screen sketch with a fold line across is
---
I’ve written previously about the performance outcomes of <a target="_blank" rel="noopener" href="https://cloudcannon.com/blog/cloudcannon-com-is-now-built-with-eleventy/">transitioning cloudcannon.com to Eleventy</a>, which include perfect Lighthouse scores and excellent Core Web Vitals scores. We’re now several weeks into the flow of building our site pages, as well as drafting, editing, and publishing blog posts on Eleventy with CloudCannon as our CMS, and it’s been, as we expected, a joy to work with. But I’ve also wanted to dig a little deeper into each of the tools we used to achieve our performance gains, and to share how we configured these tools. So let’s get started, shall we?

One of the easiest tools to include in our new stack was <a target="_blank" rel="noopener" href="https://jampack.divriots.com/">Jampack</a> from <a target="_blank" rel="noopener" href="https://divriots.com/">&lt;div&gt;RIOTS</a>, who you may know as the developers of <a target="_blank" rel="noopener" href="https://backlight.dev/">Backlight</a>; the Figma plugins <a target="_blank" rel="noopener" href="https://story.to.design/">story.to.design</a>, <a target="_blank" rel="noopener" href="https://www.figma.com/community/plugin/1159123024924461424/html.to.design">html.to.design</a>, and <a target="_blank" rel="noopener" href="https://www.figma.com/community/plugin/1222554159237609568/code.to.design">code.to.design</a>; and the online IDEs <a target="_blank" rel="noopener" href="https://webcomponents.dev/">WebComponents.dev</a>, <a target="_blank" rel="noopener" href="https://lwc.studio/">LWC.studio</a>, and <a target="_blank" rel="noopener" href="https://components.studio/">Components.studio</a>. Altogether, these tools are used by hundreds of thousands of developers and designers — and for a reasonably small core team, &lt;div&gt;RIOTS punches well above their weight.

## What is Jampack?

In brief, Jampack is a post-processing tool that takes the output of any static site generator and optimizes it for user experience and Core Web Vitals scores. Jampack is one of <a target="_blank" rel="noopener" href="https://divriots.com/opensource">several open-source tools</a> that the &lt;div&gt;RIOTS team have created. It was released at the end of January 2023, and as soon as we heard about it, we immediately started testing it out.

I’ll go into more detail below, but in brief, **I would recommend Jampack to any CloudCannon user**, or indeed anyone with a static site.

Why the blanket endorsement? Primarily because Jampack is SSG-agnostic. While we use <a target="_blank" rel="noopener" href="https://cloudcannon.com/eleventy-cms/">Eleventy</a> to build cloudcannon.com, everyone who works at CloudCannon uses a range of static site generators to build our personal sites, and Jampack works with all of them. (Even, of course, those built without an SSG — because all Jampack requires is a folder containing an output static site.)

## What does Jampack do?

Quite a lot, really! Here’s a quick summary of the major steps Jampack takes when it’s run:

### 1) Optimize images

Jampack compresses images with the high-performance [`sharp`](https://sharp.pixelplumbing.com/)&nbsp;processing module; `JPEG`&nbsp;and&nbsp;`PNG`&nbsp;images are converted to&nbsp;`AVIF`&nbsp;and&nbsp;`WebP`. Jampack also creates responsive images for smaller devices, and assigns image dimensions to avoid any <a target="_blank" rel="noopener" href="https://web.dev/optimize-cls/#images-without-dimensions">CLS issues</a>.

### 2) Optimize above the fold

Jampack introduced a new&nbsp;`<the-fold></the-fold>`&nbsp;mark that you can add to your HTML to mark where a page’s fold should be. Based on this mark, Jampack prioritizes images above the fold and turns them into&nbsp;<a target="_blank" rel="noopener" href="https://www.thewebmaster.com/progressive-jpegs/">progressive JPEGs</a>&nbsp;for a better user experience. If images above the fold are smaller than 1500 bytes, Jampack embeds the image into html using&nbsp;<a target="_blank" rel="noopener" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs">data URLs</a>.

Below the fold, Jampack lazy-loads all images and iframes.

### 3) Compress all assets

In its second and final pass, Jampack compresses all untouched assets, keeping the same name and same file format for each:

<table><thead><tr><th scope="col">Extension</th><th scope="col">Compressor</th></tr></thead><tbody><tr><td><code>.html</code>,<code>.htm</code></td><td><a target="_blank" rel="noopener" href="https://github.com/terser/html-minifier-terser"><code>html-minifier-terser</code></a></td></tr><tr><td><code>.css</code></td><td>Elements of both&nbsp;<a target="_blank" rel="noopener" href="https://github.com/css/csso"><code>csso</code></a>&nbsp;and&nbsp;<a target="_blank" rel="noopener" href="https://lightningcss.dev/"><code>lightningCSS</code></a></td></tr><tr><td><code>.js</code></td><td><a target="_blank" rel="noopener" href="https://swc.rs/"><code>swc</code></a></td></tr><tr><td><code>.svg</code></td><td><a target="_blank" rel="noopener" href="https://github.com/svg/svgo"><code>svgo</code></a></td></tr><tr><td><code>.jpg</code>,<code>.jpeg</code></td><td><a target="_blank" rel="noopener" href="https://sharp.pixelplumbing.com/"><code>sharp</code></a></td></tr><tr><td><code>.png</code></td><td><a target="_blank" rel="noopener" href="https://sharp.pixelplumbing.com/"><code>sharp</code></a></td></tr><tr><td><code>.webp</code></td><td><a target="_blank" rel="noopener" href="https://sharp.pixelplumbing.com/"><code>sharp</code></a></td></tr><tr><td><code>.avif</code></td><td><a target="_blank" rel="noopener" href="https://sharp.pixelplumbing.com/"><code>sharp</code></a></td></tr></tbody></table>

Check out the <a target="_blank" rel="noopener" href="https://jampack.divriots.com/">Jampack docs</a> for more detail, and also the available <a target="_blank" rel="noopener" href="https://jampack.divriots.com/cli-options/">CLI options</a>.

## How we use Jampack

To add Jampack to cloudcannon.com, we simply added a single line to our <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/extending-your-build-process-with-hooks/">postbuild</a> file, which runs on our production site. (While we could run Jampack on our staging branch, or on every single branch we make, we’re privileging the production branch here, and in the process shaving off a *very* small amount of post-build time when we’re working on new site content earlier on in our publishing workflow.)

Because Jampack optimizes above the fold, we’ve also built a specific <a target="_blank" rel="noopener" href="https://github.com/CloudCannon/bookshop">Bookshop</a> component to indicate where the fold should be. If you use Bookshop to manage your components and would like to do the same for your site, here’s that component’s data file:

```yaml
spec:
  structures:
    - blocks
  label: "Fold"
  description: >-
    Indicates where the page fold is.
    Everything below this point will be lazy loaded.
  icon: folder_open
  tags: []
```

This component, when added to a page by editors using CloudCannon’s Visual Editor, simply inserts the following between other page components:

```html
<the-fold></the-fold>
```

It’s a really simple step, but it gives me and our team of editors a lot of control: we’re able to precisely determine which parts of a page should be more heavily optimized, and which should be lazy-loaded.

![](https://cc-dam.imgix.net/Fold-component-block+%282%29.png)

As you can see above, we generally set the fold at the end of the first ‘container’ component on each page. (We've set our Bookshop components to be shown or hidden, depending on mobile, tablet, or desktop breakpoints; to make sure that Jampack optimizes above the fold for all device types, we set the fold under all device-specific versions of that top component.)

## SSG chaining

Jampack fits into a workflow we refer to internally as ‘SSG chaining’ — like our open-source search tool [Pagefind](https://pagefind.app/), and our translation management tool <a target="_blank" rel="noopener" href="https://rosey.app/">Rosey</a>. The general idea of SSG chaining, as we use the term, is that static sites can (and should) stay simple — and static site generators shouldn’t have to ship and build every single possible feature or optimization strategy. Instead, users can first build their sites using any SSG they like, and then ‘chain’ a series of post-build tools on the static output.

Rather than building an optimizer or a search plugin for a dozen different SSGs, tools like Jampack are able to share the benefits they offer across the whole static site ecosystem. And when a newer, shinier SSG comes along, there’s no question that these SSG-chaining tools will still work on them: because there’s not the sense of lock-in that can come with plugins we depend upon, developers are freer to shift between static site generators, while still using their preferred post-build tools.

## Final thoughts

Though I think we’re seeing some major development tools and frameworks feature-creep towards full meta-framework, jack-of-all-trades, gotta-catch-them-all status, Jampack reminds us that it’s possible to escape that particular rat race. Or at least to sidestep it, and give every developer the same Core Web Vitals advantages, regardless of the tools they choose to build their static sites.