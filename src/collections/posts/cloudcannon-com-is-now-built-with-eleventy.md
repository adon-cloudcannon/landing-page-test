---
_schema: default
title: CloudCannon.com is now built with Eleventy!
description: >-
  CloudCannon.com officially switched our website over to build with Eleventy,
  and the results with this static site generator have been amazing. Our core
  web vitals, build speeds and page load speeds have all dramatically improved,
  our Lighthouse scores for the homepage are perfect 100s across the board, and
  we’re inching closer to full SEO optimization by default. 
draft: false
series:
image: https://cc-dam.imgix.net/cloudcannon-com-eleventy-11ty.jpg
date: 2023-03-27T16:00:00Z
hide_publish_date: false
tags:
  - Eleventy
  - Company
author: 466580e8-b101-4837-a0c2-a90a8aebb5db
permalink: /blog/{{ title | slugify }}/
cta:
  title: Launch your Eleventy website today
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
  featured_image: https://cc-dam.imgix.net/cloudcannon-com-eleventy-11ty.jpg
  featured_image_alt: Graphic of CloudCannon homepage and Eleventy SSG logo
---
CloudCannon.com is now <a target="_blank" rel="noopener" href="https://cloudcannon.com/eleventy-cms/">built with Eleventy</a>!

We’re big fans of Eleventy for a host of reasons — including its build speed, its focus on making lean websites, and its flexibility and overall developer experience — and moving over to full Eleventy builds on our own site has been something I’ve looked forward to since I started experimenting with the SSG more than a year ago.

After working on designs and development for a couple of months, we officially switched over to our new Eleventy site repository just two weeks ago, and I’m not exaggerating when I say that writing blog posts, building pages, and editing existing content on this new site has been the best website editing experience I’ve ever had.

Best of all, thanks to some careful design and development decisions (more on those below), both our build speed and page load speed have dramatically improved, our Lighthouse scores for the homepage and other key landing pages hover tantalizingly close to perfect 100s across the board, and we’re inching closer and closer to full SEO optimization by default.

But how did we get there?

## Design

Our goal with the new CloudCannon website design was simple: craft a journey for prospective users that was clear, concise, and to the point. To do this we partnered with our friends at <a target="_blank" rel="noopener" href="https://staticmania.com">Static Mania</a> to design a site that’s clean, uses white space effectively across a range of device types, and ensures the layout is easy to navigate.&nbsp;

![](https://cc-dam.imgix.net/developer-hero+%281%29.png)

Ultimately, showcasing the CMS is still our main goal, so we’ve also added new illustrations that not only give users an idea of what our app looks like, but also shows them the processes behind it. We want our prospective users to feel confident they know what they’re getting when they choose CloudCannon as a CMS.

## Development

A small team of CloudCannon developers built out the site, with a focus on performance, asset management, and — of course — ease of editing. They treated the project as a proof of concept: that CloudCannon can provide the most intuitive and flexible editing interface for users with a range of experience. From non-technical marketers to source code dabblers, all the way through to developers working in their favorite IDE, the new codebase for CloudCannon.com caters for everyone already in our team, as well as future team members.

Here’s the tech stack we settled on:

### Static site generator: Eleventy

The main advantages of <a target="_blank" rel="noopener" href="https://www.11ty.dev/">Eleventy</a> that swayed us were its build speed, its flexibility for templating languages — particularly Liquid, which a lot of our team has experience with — and the features offered by the recent 2.0 release. We’ve also built an <a target="_blank" rel="noopener" href="https://github.com/CloudCannon/bookshop/blob/main/guides/eleventy.adoc">Eleventy integration</a> for our open-source component manager <a target="_blank" rel="noopener" href="https://github.com/CloudCannon/bookshop">Bookshop</a> across our builds, with [visual data bindings](https://cloudcannon.com/documentation/articles/what-are-visual-data-bindings/) to allow live visual editing.

### Styling: TailwindCSS

<a target="_blank" rel="noopener" href="https://tailwindcss.com/">Tailwind</a> has a lot of advantages to it — including the ability to code CSS without leaving HTML, customizability, responsiveness, and a small file size — but the main drawcards for us were reinforcing consistency across our development team with standardized classes, and ensuring that new devs joining our team will find everything in the CloudCannon.com codebase readable. (And Tailwind’s amazing documentation helps, too!)

### Asset management: S3 and imgix

We use an S3 bucket for our asset management, and with [imgix](https://imgix.com/) in front of it, all our content editors need to do is upload a high-resolution image directly through the CloudCannon interface. Luckily for us, imgix takes care of everything else — optimizing, resizing, rendering, and serving the right image size and type for the user’s device. As far as workflows for site editors go, it’s ideal.

### Performance: Jampack

Eleventy handles performance well by default, and we’ve leaned into its default optimization strategies, but a tool like Div/Riots’ <a target="_blank" rel="noopener" href="https://jampack.divriots.com/">Jampack</a> also helped to push our Core Web Vitals in the right direction. Jampack is particularly good at optimizing above the fold, and we’ve used their tag `<the-fold>`&nbsp;to indicate where that should sit. (We’ve even built that tag into a simple Bookshop component, so content editors can set the fold without dipping into HTML.)

Adding Jampack to our build was easy — with CloudCannon’s <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/extending-your-build-process-with-hooks/">build hooks</a>, adding Jampack to our production postbuild file was a simple one-line addition for a lot of potential gains.

### Site search: Pagefind

It’s probably no surprise that we use our own open-source search tool, <a target="_blank" rel="noopener" href="https://pagefind.app">Pagefind</a>, for our live search — it has the performance benefits of using as little user bandwidth as possible, without having to host any additional infrastructure. (If you’re interested in the stats, Pagefind takes on average 3 seconds to index our whole site after each Eleventy build, and the average network traffic for a single search term is only around 100kB.) Again, postbuild hooks FTW!

## How we use the site

### Blogging

Eleventy makes blogging flexible enough that it’ll fit in with anyone’s writing habits. Since we often schedule our posts and have multiple drafts on the go, we added a few lines of JavaScript logic to our `posts/posts.11tydata.js` file to ensure we could keep our drafts unpublished, and publish our new posts exactly when we want to.

Personally, I almost always use CloudCannon’s <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/introducing-the-content-editor/">Content Editor</a> to draft my posts — as a rich text editor for Markdown files, it’s ideal for writing in a clean and intuitive interface. For shorter posts that rely more heavily on images or videos, I’d switch over to the live <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/introducing-the-visual-editor/">Visual Editor</a>, where I can see the full context of the page as it would appear to a reader.

I make a lot of use of Eleventy's shortcodes while blogging, as well. Eleventy supports Nunjucks, Liquid, Handlebars, and JavaScript shortcodes, but with Bookshop we've pulled all of our shortcodes into our global `cloudcannon.config.yml` file instead of Eleventy's `.eleventy.js` file, so I can add them to my posts with a single click. This isn't an essential step, but keeping editing and build features in separate config files means future developers will always know where to find them.

### Page building

This is the magical part, in my view. Thanks to [Bookshop](https://github.com/CloudCannon/bookshop), pages on [CloudCannon.com](http://CloudCannon.com) are based on a ‘container’ component, which can hold content blocks like headings, Markdown text, images, videos — anything you’d conceivably need to add to a webpage. And because we can use the Visual Editor to edit our pages and nest container components, as well as to select device-specific images, layouts, spacing, margin, and padding attributes, we’re able to turn out pretty complex pages within just a few minutes.

Here's our Marketing Manager Olivia Nicholson, discussing what she looks for in a performant site, and why page building with Eleventy works for her:&nbsp;&nbsp;

{% bookshop "markdown/youtube" id:"uB3-l0atPok" title:"CloudCannon.com on Eleventy — The Marketing Point of View" extend:true %}

### CloudCannon.com’s publishing workflows

We use CloudCannon’s <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/enabling-editor-branching-with-projects/">Projects</a> feature to control our publishing workflow. In brief, it’s set up like so:

`main` &lt;— `staging` &lt;— `branches`

When we want to draft new content for the site, or edit existing content, we branch from our private `staging` site — this means different members of our team can simultaneously test out new content and dev features without anyone blocking each other. Publishing the branch creates a Git pull request and merges it to `staging`, where we run our final checks before publishing once more to `main`, our live production site.

### Our developers’ perspective

I also spoke with some of the CloudCannon dev team who helped put the site together — Alysha Nolan, Tiaan Fairchild, and Mike Neumegen. Here’s their take on the different elements of our stack, and what makes Eleventy such a great static site generator:

{% bookshop "markdown/youtube" id:"ynn1xMfvgDo" title:"CloudCannon.com is now built with Eleventy!" extend:true %}

## And finally, some stats

### Lighthouse

Google’s [PageSpeed Insights](https://pagespeed.web.dev/) offers several helpful indicators of site performance. If you’re interested, I wrote about static sites and page weight in a [previous post](https://cloudcannon.com/blog/does-my-website-look-big-in-this-six-tips-to-lower-your-page-weight/), with six actionable tips to improve your own site performance metrics.

Lighthouse scores are generally used to diagnose performance issues, across the categories Performance, Accessibility, Best Practices, and SEO. We’re currently sitting pretty at 100 across the board for desktop users — proof positive that Eleventy and CloudCannon, together with the rest of our new stack, make for excellent performance.

![](https://cc-dam.imgix.net/cloudcannon-lighthouse.png)

### Core Web Vitals

When it comes to our CWV — the measurements that make up the Lighthouse categories — we’re in the green on every metric:

* Largest Contentful Paint (LCP): **1\.8s**
* First Input Delay (FID): **7ms**
* Cumulative Layout Shift (CLS): **0\.02**
* First Contentful Paint (FCP): **1s**
* Interaction to Next Paint (INP): **40ms**
* Time to First Byte (TTFB): **0\.5s**

![](https://cc-dam.imgix.net/cloudcannon-core-web-vitals.png)

While we’re always looking for ways to improve these scores, we attribute them to a range of factors: static generation and optimization from Eleventy, image processing from imgix, post-build processing from Jampack, and most of all, considered development from the CloudCannon dev team.

---

*As CloudCannon’s CMS has grown over the past ten years, we’ve added full support for many SSGs — <a target="_blank" rel="noopener" href="https://cloudcannon.com/jekyll-cms/">Jekyll</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/eleventy-cms/">Eleventy</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/hugo-cms/">Hugo</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/sveltekit-cms/">SvelteKit</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/gatsby-cms/">Gatsby</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/nextjs-cms/">Next.js</a>, and most recently <a target="_blank" rel="noopener" href="https://cloudcannon.com/astro-cms/">Astro</a>, with more on the way over the coming months. In all honesty, we could have worked with any of the above generators, and had the same great editing experience alongside excellent site performance.*

*Do you have any questions about bringing your static sites to CloudCannon, or need a little help with migration or configuration? Feel free to&nbsp;**[book a demo call](https://cloudcannon.com/book-a-demo/)**, take a look at our&nbsp;**[documentation](https://cloudcannon.com/documentation/)**, or&nbsp;**[get in touch with our support team](https://cloudcannon.com/support/)**.*