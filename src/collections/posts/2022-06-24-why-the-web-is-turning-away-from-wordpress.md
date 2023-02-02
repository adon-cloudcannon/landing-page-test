---
title: Why the web is turning away from WordPress
description: >-
  WordPress’ market share is slipping where it matters, and sites built with
  static site generators, by contrast, are on the rise. Why? And what will these
  changes mean for you?
series:
image: https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/web-turning-away-wordpress.jpg
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
date: 2022-06-24T05:00:00+1200
tags:
  - Opinion
author: david-large
---
A few months ago, I read [a fascinating interview with Matt Mullenweg](https://www.theverge.com/2022/3/15/22977857/wordpress-tumblr-simplenote-internet-automattic-matt-mullenweg-interview), the CEO of Automattic and co-founder of WordPress. Among other glimpses into the inner workings of the 17-year-old company — among them the laudable desire to ‘keep the internet weird’ — Mullenweg forecasts that 85% of the web will be on WordPress within the next decade. But which 85%, you might ask? An equally important follow-up question might be, “How well will that 85% of the web perform?”

## WordPress’ market share is slipping where it matters

Over the last year, [WordPress has started losing its market share](https://trends.builtwith.com/cms/WordPress) among the most viewed sites on the internet. This is true of the top 10K, the top 100K, and the top 1 million popular websites. More specifically, the monolithic CMS’s share of the top 10K sites is lower than it has been for five years — not just a plateau, but a significant drop for a single twelve-month period.

Yes, WordPress still hovers around the 43% mark when it comes to its share of the CMS market — according to both Mullenweg and [W3Tech’s web technology surveys](https://w3techs.com/technologies/history_overview/content_management/all) — but it’s pretty clear that there’s a change in the air when it comes to the sites used by the most people.

Sites built with static site generators, by contrast, are on the rise within that same five-year period. In fact, SSGs experienced an eightfold increase in their share of the top 10K websites over that period:

![](https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/WP-SSG-graph-10k.png)

(If you'd like to see the data yourself, check out BuiltWith trends on the top 10K sites for [WordPress](https://trends.builtwith.com/cms/WordPress), [Jekyll](https://trends.builtwith.com/cms/Jekyll), [Hugo](https://trends.builtwith.com/cms/Hugo), [Next.js](https://trends.builtwith.com/framework/Next.js), [Nuxt.js](https://trends.builtwith.com/framework/Nuxt.js), and [Gatsby](https://trends.builtwith.com/framework/Gatsby-JS).)

## Why are developers and big businesses turning away from WordPress?

Even though we’re watching the trends, it’s hard to argue with raw numbers. One number that’s thrown around a lot is that WordPress is responsible for more that 2 million new domain registrations per year. Though that particular statistic is based on a [report from 2015](https://blog.builtwith.com/2015/07/06/entire-internet-cms-usage-january-july-2015/), it still matches [current estimates](https://trends.builtwith.com/cms/WordPress). Clearly, WordPress is still a viable option for a great many users — perhaps they’re familiar with the interface, the themes, the plugins, or they rely on the large install base for the inevitable troubleshooting. Critical mass is, after all, a real phenomenon.

But the dominance of WordPress — of any single platform — comes at a cost. The larger and more monolithic a service or piece of software becomes, the less flexibility it will come to have. Anyone who has managed WordPress sites for longer than a few months knows how the cycle goes: Upgrade PHP. Upgrade and reconfigure broken plugins. Find replacement plugins for those that no longer work. Upgrade WordPress. Upgrade PHP again. And the cycle continues, ad nauseam. Success can be a hindrance, and over almost 20 years, technical debts accrue. An upgrade / update cycle is true of all tech stacks, to be fair, but because Wordpress is server-based, not updating can be a severe security risk.

But relying on WordPress and PHP as a foundational part of your tech stack is no longer as relevant as it was, and leaner, less rigid, and more productive frameworks have emerged in the years since WordPress was first released.

A typical development cycle for major product categories — say, customer-facing websites that non-technical users can edit — would involve engineers using similar tools they use for creating their main products (database, webserver, rendering pages on request). In 2005, WordPress emerged as a standardized version of those constraints. Nowadays, engineers are **still** building them with similar tools they build their main products with, it’s just that those tools are different (e.g. React, Vue, Svelte). Static site generators like Next.js, Nuxt.js, and SvelteKit have emerged as a standardized version of those newer (and less constraining) constraints. Because development in general is trending away from monolithic stacks, we’re seeing web development do the same.

Talented new frontend developers currently enter the workforce with neither the need or the patience to unpick almost two decades of complexity — our current best practices include tech stacks that didn’t exist just a few years ago. Thus these developers work with React, with Vue, with Svelte — and absent those, they rely on the leanest and fastest interoperable tools in their kit: pure CSS, HTML and JavaScript, built by SSGs like Hugo, Eleventy, and Jekyll.

## Performance and security concerns

Without a lot of paring back and additional development time, WordPress sites simply don’t perform to our exacting modern standards. To tease out the feelings behind [a tweet from content marketer Brooklin Nash](https://twitter.com/realbrooknash/status/1489017807425748992?lang=en) that’s been stuck in my mind for some time, our desire for instant gratification has the tendency to outpace our ability to be realistic:

> Somehow I’m old enough to remember dial-up but young enough to rage-quit any website that takes longer than 5 seconds to load. — Brooklin Nash (@realBrookNash) [February 2, 2022](https://twitter.com/realBrookNash/status/1489017807425748992?ref_src=twsrc%5Etfw)
{: .twitter-tweet}

<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Quite aside from slow hosts or shared servers, both users and developers might experience delays on WordPress from a range of factors, including out-of-date or non-optimized plugins and themes, top-heavy sites with too much client-side data, and of course, running older versions of PHP and of WordPress. [According to WordPress](https://wordpress.org/about/stats/), less than 1% of WordPress sites are running the latest version of PHP, and more than 58% aren’t using the latest version of WordPress itself\!

In addition to our performance concerns, we’re also becoming more and more security conscious — both as users and developers. We covered [the security differences between the Jamstack approach and WordPress](https://cloudcannon.com/blog/jamstack-vs-wordpress-reasons-to-make-the-change) last year, and it’s fair to say that nothing’s changed there — static sites are simply more secure for the vast majority of users, with considerably less surface area to exploit.

What has changed, though, is both the number of developers using SSGs — and their obvious success.

## The static site generator market is maturing

Over the past few years we’ve seen some high-profile SSG developers move to corporate jobs in the SSG space, often with some connection to their own open-source SSG work — and in most cases, with the expectation that they will continue to work on these projects. This isn’t a surprise, really — making something amazing has always been the best way to find a job where you’re paid to make amazing things. But the fact that names such as Rich Harris (Svelte / SvelteKit), Zach Leatherman (Eleventy), and Ben Holmes (Slinkity) are known *outside of their Git repositories* suggests that the value of their open-source work is being explicitly recognized. Corporate sponsorship of open-source software is a delicate balance — just ask Automattic, who pledge to [contribute 5% of their resources to the WordPress project](https://wordpress.org/five-for-the-future/pledge/automattic/) — but it is nonetheless a strong signal that there’s scope for growth in SSG software beyond GitHub sponsorships.

Personalities and prodigious patronage aside, it’s hard to argue with the numbers. Even allowing for the slightly complicated arithmetic of tracking usage of multiple tools, we’re seeing higher numbers of developers using SSGs, and even higher numbers of websites built with these modern tools.

The [Jamstack ecosystem](https://cloudcannon.com/community/jamstack-ecosystem/) is expanding, too. Static site generators such as Hugo, Eleventy, and Gatsby have libraries of themes, starters, and plugins available to them, for those developers who prefer to begin from a functional template. [The broad separation of SSG trends](https://cloudcannon.com/blog/ssg-history-8-islands/) into one of four approaches — simplicity (Eleventy, Jekyll, Hugo), partial hydration (Elder.js, Astro, Slinkity), SPAs (Next.js, Nuxt.js, Gatsby, Sveltekit) and the full stack (Redwood.js, Blitz.js) — suggests the category has expanded to fill every website niche currently imaginable.

## What will the future of static sites mean for you?

If these trends continue — the downward slope of WordPress and the steady gains of SSGs\* among the web’s most popular sites — we’re likely to see a few changes to the web’s resilience and infrastructure, as well as the way we work.

First off, we’d see less reliance on (and collective time spent maintaining) servers and databases for sites that show the same content to all end users, and a corresponding increased SEO ranking for these sites. Static cached files load much faster than dynamic database queries, disadvantaging those WordPress users who do not cache their sites. CDNs and edge hosting companies will pick up the slack here, as their services will be more in demand and sub-1s response times will be more likely.

**If you’re a developer**, a trend towards static sites means you’re likely to see better dev workflows. That’s a nebulous claim, so let me hastily qualify: you’ll see workflows that enable more collaboration when you need to collaborate, and at the same time more independence for you *and* for content writers and site editors. Non-developers will become increasingly less reliant on devs for simple changes as static content management systems mature, which we’re already seeing.

**If you’re a marketer or content creator**, your sites will be fast by default, decreasing your bounce rates and giving you better SEO ranking. Any major changes will see faster turnarounds from your developers, who will need to spend less of their own time fighting the framework. Finally, with server-side analytics you’ll be able to see traffic patterns with full visibility — even of the &gt;50% of your audience who use ad blockers that render their browsing invisible to platforms like Google Analytics.

**If you’re a web user, consumer, or reader** — and we all are, of course — everything comes down to you. You might not rage if a website takes more than five seconds to load, but statistically you’re less likely to purchase from a slow-loading site (to the tune of more than [$2.6 billion of lost sales per year](https://www.invisionapp.com/inside-design/statistics-on-user-experience/)). On average, [you take approximately 0.05 seconds to form your opinion of a website](https://www.tandfonline.com/doi/abs/10.1080/01449290500330448), and if you have a good user experience on a site, you’re [90% more likely to continue shopping](https://www.toptal.com/designers/ux/ux-statistics-insights-infographic) there.

With that in mind, an increasing number of static sites means you’ll see faster site loads and will have a better, more secure user experience. You’ll be less likely to close a tab out of exasperation, and, as an interesting side effect of that good UX, you’re 90% more likely to stay remain a customer when you’re shopping online.

My final point is a small one, but not insignificant. Because static sites are less resource-intensive than database-driven sites, they are also more eco-friendly, and all else being equal, a more responsible choice to make. While it’s a stretch to imagine that global data centre power usage would decrease in a world where static sites were the norm rather than the exception, it’s nonetheless reassuring that static sites enable us to choose the best of both worlds when it comes to our energy usage and site performance.

## DX, meet UX (or, have your cake and eat it too)

As static site generators have developed, so have the tools that bridge the gap between developers and non-technical users. [CloudCannon CMS](https://cloudcannon.com/git-cms/), for example, focuses on both the developer experience (DX) of creating, maintaining, and optimizing static sites created by a growing list of SSGs, as well as the user experience (UX) of a content editor whose working life does not need to be burdened with the knowledge (or “glorious purpose”, if you prefer) of Git and all its inner workings.

[Bookshop](https://github.com/CloudCannon/bookshop), one of our own open-source tools, allows the kind of component-based editing in SSGs such as Hugo, Jekyll, and Eleventy that — to put it bluntly — no one thought was possible. It’s an inflection point that will affect how these SSGs will be used in the coming years; think Elementor’s block-based builder for WordPress, with increasing support for additional platforms that don’t have rigid security and maintenance constraints. With Bookshop, developers can work with custom components on the SSG they choose, without being locked into a single platform.

Mullenweg’s aspirations to keep the internet weird are just that — aspirational — and seem a little at odds with the monotonous maintenance required of WordPress developers. Most interpretations of ‘weirdness’ sit pretty clearly in the sphere of content rather than that of structure, after all, and WordPress is historically inflexible when it comes to inventive site structures. (Little wonder, then, that Tumblr, acquired by Automattic in 2019, carries the can for weirdness.)

But by all means, let’s keep the internet weird. Let’s also just make sure that the sites we make perform really well by all objective measures, that they’re actively intuitive to build and edit, and that our individual interpretations of weirdness don’t depend on a tech stack that’s nearly old enough to vote.

Yes, it’s true that user-friendly site builders such as Squarespace and
Wix are also growing at WordPress’ expense, but they remain walled gardens
with increasingly limited development options as they grow — more on them
next week.