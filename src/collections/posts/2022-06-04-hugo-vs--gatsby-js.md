---
title: Hugo vs. Gatsby.js
description: >-
  Let's compare two excellent static site generators: Hugo and Gatsby.js. Both
  SSGs are optimized for fast content delivery and are capable of handling large
  sites with thousands of pages — sites like documentation, blogs, landing pages
  or marketing websites. But there are several key differences to consider,
  including build times.
series:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/hugo-vs-gatsby.jpg
date: 2022-06-04T05:00:00+1200
tags:
  - Hugo
  - Gatsby
author: david-large
---
With [GatsbyConf](https://gatsbyconf.com/) a few months behind us, and the new-conference-on-the-block [HugoConf](https://hugoconf.io/) approaching on the horizon, we are now — temporally, at least — between Gatsby.js and Hugo. Distinctly different in their approaches to static site generation and developer workflows, both are popular and well established static site generators, with large and active communities surrounding them.

But which should you choose? The answer might be easier than you think, and it all depends on whether you’re building a ‘reference’ project or something that relies on user interaction. (Or at the very least, it depends where on that spectrum between those two points your project might land.)

Gatsby.js and Hugo are both fully compatible with CloudCannon’s [Git-based CMS](https://cloudcannon.com/git-cms/), and while both will work perfectly well for small business sites and blogs, each has different strengths. Whether you’re creating a documentation site with thousands of individual pages, or a single-page application with plenty of user interaction, or something in between, we’ll help you find the right tool.

## What is Gatsby.js?

Gatsby.js is a static site generator built with React; it uses React/JSX for templating and GraphQL for queries. It was the first SSG to really blur the lines between static and dynamic sites, allowing developers to hydrate their purely static sites with React components for dynamic interactions.

Gatsby.js is a developer-friendly SSG, with built-in features like code splitting, prefetching, routing and caching. Finally, Gatsby.js is well established, with an active community and a very healthy plugin ecosystem.

### **Sites made with Gatsby**

* [Figma](https://www.figma.com/)
* [Digital Ocean](https://www.digitalocean.com/)
* [Impossible Foods](https://impossiblefoods.com/)
* [National Geographic](https://www.nationalgeographic.co.uk/)

## **What is Hugo?**

Hugo is a static site generator built with Go (Golang), released in 2013 by [Steve Francia](https://github.com/spf13) and actively (since version 0.14) maintained by [Bj&oslash;rn Erik Pedersen](https://github.com/bep).

Hugo is one of the world’s most popular open-source static site generators. Even when compared to SSGs with venture capital backing, Hugo stacks up remarkably well in terms of overall installs, live sites, and GitHub stars. With its amazing speed and flexibility, Hugo makes building websites fun again.

Hugo’s popular primarily for its build speeds, though its flexibility and modularity plays a huge role as well. It’s simple to install, thanks to a single cross-platform binary, and has built-in features like i18n, image optimization, sitemaps, menus, and feeds. Oh, and if you’d like to start your Hugo build with a themes, [Hugo has you covered](https://cloudcannon.com/blog/fifty-of-the-most-popular-hugo-themes/).

### Sites made with Hugo

* [stackimpact.com](http://stackimpact.com/)
* [digital.gov](http://digital.gov/)
* [godottutorials.com](http://godottutorials.com/)
* [gohugo.io](http://gohugo.io)

## Comparing Hugo and Gatsby.js — at a glance

|   | Hugo | Gatsby.js |
| --- | --- | --- |
| **First release** | 2013 | 2015 |
| **Built with** | Go | JavaScript |
| **Templating engine(s)** | Go | JSX |
| **Plugins** | Limited | [Yes](https://www.gatsbyjs.com/plugins) — thousands\! |
| **GitHub stars** | 59k+ | 53k+ |
| **Themes** | [Yes](https://themes.gohugo.io/themes/) — hundreds\! | [Yes](https://www.gatsbyjs.com/plugins/?=gatsby-theme) — hundreds\! |
| **Licence** | Apache-2.0 | MIT |
| **Installation requirements** | None — Hugo is a single binary | Via npm |
| **Build speeds** | Fastest | Slower |
| **Remote data** | Via [getJSON or getCSV](https://gohugo.io/templates/data-templates/#get-remote-data) | Via GraphQL |
| **Multilingual and i18n** | Built-in | Yes, via plugins |
| **Shortcodes** | Yes | Yes, via plugins |
| **Easy WordPress / legacy converter** | Yes: [gohugo.io/tools/migrations](http://gohugo.io/tools/migrations) | No, but  only [slight configuration is required](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-wordpress/) to use Gatsby with WordPress |
| **Learning curve** | You'll need to learn conventions around folder structure and layouts, but otherwise straightforward. There are some [amazing tutorials available for Hugo beginners](https://cloudcannon.com/community/learn/hugo-beginner-tutorial/). | Easy for those with JavaScript and React experience, but steep for absolute beginners. |
| **Documentation** | [gohugo.io](http://gohugo.io/) | [gatsbyjs.com](https://www.gatsbyjs.com/) |
| **Support communities** | [Hugo Discourse](https://discourse.gohugo.io/) is a full-service forum with many active users; [HugoConf](https://hugoconf.io) promises to link Hugo users. | [AskGatsbyJS](https://twitter.com/AskGatsbyJS) on Twitter; [Gatsby Discord](https://gatsby.dev/discord) for real-time chat with community and team members; [GitHub Discussions](https://github.com/gatsbyjs/gatsby/discussions/categories/help) for more involved questions. |
| **Twitter accounts** | [Hugo Twitter](https://twitter.com/GoHugoIO) | [Gatsby Twitter](https://twitter.com/GatsbyJS), [Gatsby Changelog](https://twitter.com/GatsbyChangelog) |
| **GitHub repos** | [github.com/gohugoio/hugo](https://github.com/gohugoio/hugo) | [github.com/gatsbyjs/gatsby](https://github.com/gatsbyjs/gatsby) |
| **CloudCannon support** | Yes — you can get your [Hugo](https://cloudcannon.com/hugo-cms/) or [Gatsby.js](https://cloudcannon.com/gatsby-cms/) sites editable in minutes with CloudCannon. |

## So which should I choose?

**Choose Gatsby.js** if your site will feature or rely on React components for dynamic content, or if you see yourself needing to use GraphQL queries. For a single-page application (SPA), Gatsby is hard to beat — if your users are navigating within a site, pages are re-rendered by JavaScript and don't require an additional server request.

**Choose Hugo** if you're building a site that doesn't require dynamic content or interactions. If you're working on large reference sites with hundreds or thousands of pages, or if you think your site will eventually grow to that size, Hugo's fast builds will work in your favor. (Your content editors will thank you\!)

While you're likely to need a solid background in React (and therefore JavaScript) to use Gatsby effectively, the same isn't true for Hugo and Go — beginners to both will likely find Hugo easier to pick up, despite Go's vaunted complexity.

## Choose either — or both — with CloudCannon

Whichever static site generator you choose for your next website project, CloudCannon CMS will support you and your content editors with [two-way Git syncing](https://cloudcannon.com/features/developer-workflows/) for collaboration, [branch/merge workflows](https://cloudcannon.com/features/collaborative-publishing/) for adding new content and features, [top-tier hosting](https://cloudcannon.com/features/edge-hosting/), and best of all, an intuitive [visual editor](https://cloudcannon.com/features/visual-editing/) interface.

If you're looking for tutorials, find out more about working with [Hugo for beginners](https://cloudcannon.com/community/learn/hugo-beginner-tutorial/), or how to [make the most of Hugo and CloudCannon](https://cloudcannon.com/community/learn/hugo-cms---get-started-with-cloudcannon/). You may also find it helpful to dig into our [Documentation](https://cloudcannon.com/documentation/) to answer your SSG-specific questions about how to work with CloudCannon and Hugo, Gatsby,js, or any other static site generator. 

 
