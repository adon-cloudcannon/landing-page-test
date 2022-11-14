---
title: The 'Islands' era
description: >-
  Concluding the epic history of static site generators, the islands era sees a
  number of SSGs bringing the advantages of partial hydration to reality.
series:
  - SSGs through the ages
permalink: /blog/ssg-history-8-islands/
image: https://dam-cdn.cloudcannon.com/Explorer 8.jpg
date: 2022-03-09T05:00:00+1300
tags:
  - Resources
author: mike-neumegen
---
Islands architecture or 'partial hydration' is an approach that gives the fast-loading nature of a purely static website, paired with the dynamic iterations you get from an SPA. To understand why islands architecture is such as big deal, we need a brief internet history lesson.

As JavaScript grew more powerful in the early 2000s, we could suddenly push browsers to do more. Instead of loading an entirely new page for each request, we could use JavaScript to rewrite the existing page to make it feel more like a native application. This idea is called Single Page Applications, or SPAs, and expanded the possibilities of what a website could be. They created a wave of moving desktop software into the browser including Gmail, Google Docs, and Netflix.

SPAs aren't a silver bullet, however. There are several downsides to consider:

1. They require large amounts of JavaScript to download and execute, which is particularly an issue for slower devices and limited internet speeds.
2. While waiting for the JavaScript to download, the user will likely see a loading spinner.
3. Search engines can execute JavaScript. However, it's not as straightforward as a typical HTML web page, making it harder to rank well with an SPA.

To mitigate points 2 & 3, frameworks like Gatsby, Next.js, Nuxt.js, and Gridsome prerendered the JavaScript components into HTML and hydrated them on page load. They work like this:

1. Prerender JavaScript components to HTML.
2. On a page request, send the prerendered, HTML version of the page.
3. On page load, initiate the JavaScript framework. The framework will look over the HTML and attach event handlers, so now it acts as a single page application.

It's a middle ground where you quickly get a static version of the site while your large JavaScript framework downloads and runs. It's better but not perfect. You're still loading and processing a large JavaScript file, albeit at a more convenient time.

For many websites, full hydration is overkill. There may only be a handful of components that need interaction. This is the fundamental idea behind partial hydration, and it works something like this:

1. Prerender JavaScript components to HTML.
2. On a page request, send the prerendered, HTML version of the page.
3. On page load, only hydrate the components that the developer has specifically marked as needing hydration.

The islands era sees a number of SSGs bringing the advantages of partial hydration to reality.

---

![](https://dam-cdn.cloudcannon.com/Elder.js-Timeline.svg){: width="600"}

## **[Elder.js](https://elderguide.com/tech/elderjs/){: target="_blank" rel="noopener noreferrer"}**

***[​​](https://elderguide.com/tech/elderjs/)**by [Nick Reese](https://github.com/nickreese){: target="_blank" rel="noopener noreferrer"}*

Nick Reese is the co-founder of Elder Guide — a website to find and compare senior living options. Over the past 14 years, Nick has managed five major SEO properties, so the benefits of Jamstack are highly tangible to him.

When he started Elder Guide, he evaluated six SSGs: Gatsby, Next.js, Nuxt.js, 11ty, Sapper, and Hydrogen.js. Unfortunately, none of these ticked all of his requirements.

Nick had three realizations:

1. Most SSGs cater to either simple sites/blogs or full-scale web applications. There's no in-between.
2. Fetching data from multiple sources is difficult.
3. Fully hydrating a web page is overkill for most websites. But what if we could only hydrate the components that need to be hydrated?

He whipped up a rudimentary prototype based on Svelte, named it Elder.js, and started using it to power Elder Guide.

Elder.js was one of the first SSGs to pioneer partial hydration or islands architecture and is currently "stable and production-ready". Nick has executed his vision of what he wanted in an SSG and has rolled it out over a couple of the websites he manages. Now his roadmap is about working on bug fixes and incremental changes that are primarily under the hood.

![](https://dam-cdn.cloudcannon.com/Sveltekit-Timeline.svg){: width="600"}

## **[Sveltekit](https://kit.svelte.dev/){: target="_blank" rel="noopener noreferrer"}**

*by [Rich Harris](https://github.com/Rich-Harris){: target="_blank" rel="noopener noreferrer"}*

After years of working on Sapper, Rich Harris and the Svelte team reflected on the state of the project and had a few realizations:

* The distinction between Svelte templates and Sapper templates is confusing.
* The codebase had become unkempt over the years and was due for some heavy refactoring.
* Sapper has assumed a module bundler like Webpack was necessary to create code that can run anywhere. Build tools like&nbsp;[Snowpack](https://www.snowpack.dev/){: target="_blank" rel="noopener noreferrer"}&nbsp;and&nbsp;[Vite](https://vitejs.dev/){: target="_blank" rel="noopener noreferrer"}&nbsp;bridge the pros and cons of an unbundled/bundled workflow and bring a better developer experience.
* Sapper requires running a Node.js server. The Svelte team identified a trend towards serverless platforms and wanted a framework that fully embraced the paradigm.

These ideas led Rich and the Svelte team to build a new Svelte-based application framework from scratch, SvelteKit. The framework addresses the shortcomings of Sapper including:

* The introduction of adapters allowing tight integration with serverless platforms such as&nbsp;[Netlify](https://www.netlify.com/){: target="_blank" rel="noopener noreferrer"},&nbsp;[Vercel](https://vercel.com/){: target="_blank" rel="noopener noreferrer"}, and&nbsp;[Cloudflare](https://workers.cloudflare.com/){: target="_blank" rel="noopener noreferrer"}
* A Vite-powered build to provide a better/faster developer experience
* The ability to prerender a subset of pages and dynamically render the rest
* Standardized workflows for working with Svelte

SvelteKit is actively working towards its 1.0, where it will have stable APIs ready for production use. It's a framework that addresses the tradeoffs between having a simple document web page versus a single page application. The icing on the cake will be if Svelte can add an elegant solution for partial hydration.

[*Get started with SvelteKit on CloudCannon.*](https://app.cloudcannon.com/register?trial=cc_standard){: target="_blank" rel="noopener"}

![](https://dam-cdn.cloudcannon.com/Astro-Timeline.svg){: width="600"}

## **[Astro](https://astro.build/){: target="_blank" rel="noopener noreferrer"}**

*by [Fred K. Schott](https://github.com/FredKSchott){: target="_blank" rel="noopener noreferrer"}*

"There's a simple secret to building a faster website —&nbsp;*just ship less*." Frameworks like React have normalized shipping hundreds of kb of JavaScript. The choice to use a JavaScript framework involves considering some tradeoffs. How much interactivity do I need? Is it worth the overhead of downloading an entire web framework? Would I be better off using simple HTML, CSS, and vanilla JavaScript?

The team of open source developers behind&nbsp;[Snowpack](https://www.snowpack.dev/)&nbsp;had been pondering these questions and saw an opportunity to create a new SSG, Astro.

Astro "borrowed the best parts of our favorite tools and then added a few innovations of our own".

With Astro, you can bring your own JavaScript framework, including React, Svelte, Vue, Preact, web components, or vanilla HTML & JavaScript. On build, Astro renders the entire website to completely static HTML. Static HTML means the pages load extremely quickly with no JavaScript overhead. When you do need interactive JavaScript on a component, Astro loads just that one component. It's partial hydration or islands architecture like Elder.js. On top of that, Astro has SEO features such as automatic site maps, RSS feeds, pagination, and collections to help ensure your site ranks well.

The combination of bringing your own JavaScript framework with partial hydration created tremendous hype in the community. Astro is still in beta and has already amassed a large following of 8k+ stars on GitHub, as well as taking out the [2021 Jammies Ecosystem Innovation Award](https://jamstackconf.com/jammies/){: target="_blank" rel="noopener noreferrer"}. It's certainly one to watch in the future.

![](https://dam-cdn.cloudcannon.com/Slinkity-Timeline.svg){: width="600"}

## **[Slinkity](https://slinkity.dev/){: target="_blank" rel="noopener noreferrer"}**

*by [Ben Holmes](https://github.com/Holben888){: target="_blank" rel="noopener noreferrer"}*

If there were an award for best SSG launch video, Ben's&nbsp;[Slinkity announcement](https://twitter.com/BHolmesDev/status/1404426841440538627?s=20){: target="_blank" rel="noopener noreferrer"}&nbsp;would get my vote. Slinkity isn't an SSG in its own right. It's a plugin that extends 11ty to bring React, Vue, or Svelte magic to your static website.

At a high level, there are two types of static site generators:

1. The traditional "simple" SSGs — These frameworks focus on outputting simple HTML and CSS based websites.
2. The application SSGs — These are based on JavaScript application frameworks like React, Vue, and Svelte. They output HTML and CSS, then hydrate the page with JavaScript to enable client-side interactions.

Slinkity is part of the new wave. Along with Astro and Elder.js, these SSGs are trying to find a middle ground between the above two extremes. Where Slinkity separates itself is instead of being a standalone framework, it's bolted onto 11ty. This integration is a major bonus as it means you can start building your website using 11ty, which has a low learning curve, then when you need more dynamic interactions, you're free to layer on React, Vue, or Svelte where you need it.

You have complete control over how components partially hydrate in Slinkity. By default, they render 'eager', which means they're hydrated as soon as the page loads. You can also render them 'lazy', which is the same except the component only loads when it's scrolled into view. Finally, you can render them 'static', which means no JavaScript and no interactivity.

11ty + Slinkity is an exciting duo, I'm looking forward to see where Ben takes it. Slinkity is currently in early alpha, so probably isn't much just in production yet, but hopefully soon.

---

## Where to from here?

This brings us to the end of this series (for now). The history of SSGs has been a constant journey of adding new ideas, then reinventing it in simpler or more powerful ways. The future of SSGs isn’t heading in single direction; instead we have a four-headed hydra:

1. **The pure** *(Jekyll, Hugo, 11ty)* — A focus on simplicity and pure HTML generation.
2. **The partial hydration** *(Elder.js, Astro, Slinkity)* — Striking a balance between page speed and dynamic interactions.
3. **The SPA** *(Next.js, Nuxt, Gatsby, Sveltekit)* — Bridging the gap between static and dynamic.
4. **The full stack** *(Redwood.js, Blitz.js)* — Everything you need to build modern web applications.

Which direction will win? Well, all of them\! Each direction has its own benefits and tradeoffs that make sense for particular use cases. The SSG hydra now has full coverage of the web development gamut from a simple company website to a full blown application.

As for what comes next, I think we’re already starting to see it — iterations and new SSGs that address downsides of current SSGs. Namely:

* **Faster build speeds** — The days of SSGs used or created specifically for a 20-page personal developer blog are long gone. Commercial use cases can have thousands of pages and waiting 20+ minutes for a build to complete is a deal breaker.
* **Smarter JS Hydration** — Pushing huge JavaScript files to the client goes against one of the original reasons for using a SSG, which was shipping smaller and faster handcrafted websites. Partial hydration has the potential to strike a perfect balance between fast loading websites and dynamic, interactive components.
* **Static / Dynamic smoothie** — We’re seeing the line between static and dynamic blur further with every year that passes. We’re seeing smart ways of making dynamic content, static and mitigating some of the downsides of dynamic by moving everything to the edge.

Momentum and innovation is accelerating in the world of static site generators. What do you think will be the biggest developments in the coming years?
