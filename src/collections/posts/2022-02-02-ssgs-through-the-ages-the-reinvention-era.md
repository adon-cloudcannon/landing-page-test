---
title: The ‘Reinvention’ era'
description: >-
  The third part of an ongoing series: the reinvention period sees a flurry of
  static site generators challenging some of Jekyll's underlying foundations.
series: SSGs through the ages
permalink: /blog/ssg-history-3-reinvention/
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/explorer-3_zaafvp.jpg
date: 2022-02-02T05:00:00.000Z
tags:
  - Resources
author: mike-neumegen
---
After [years of recreating and iterating on Jekyll](/blog/ssg-history-2-after-jekyll/), the reinvention period sees a flurry of static site generators challenging some of Jekyll's underlying foundations.

We see SSGs doing new things with taxonomies, specialized SSGs that do less, plugin-based SSGs that can do anything. It's a wild period of play and experimentation that pushes the limits of SSGs.

## [Hugo](https://gohugo.io/)

*First released in 2012 by [Steve Francia](https://github.com/spf13)*

Prior to this point, the majority of SSGs have been about converting Jekyll's functionality into another language. Hugo is a standout in the history of SSGs because it directly addresses some of Jekyll's weaknesses. Most notably:

* Build speed — Jekyll is notoriously slow and building sites. Hugo is written in [Go](https://golang.org/), which is a compiled language and, according to its current leader maintainer, a "perfect match for many of the tasks that Hugo performs". The result is Hugo's ability to build tens of thousands of pages in seconds.
* Dependencies — Setting up Ruby, dealing with Gemfiles and installing Jekyll can be surprisingly challenging. Hugo is a binary file; just download it and run it.

The story of how Hugo came to be starts with Steve Francia. At the time, [his blog](https://spf13.com/) used WordPress. Over time, he became frustrated at how WordPress was optimized for writing content rather than for the reader. The website was slow, and the WYSIWYG editor was introducing poorly rendered HTML. Steve was interested in static site generators and took his frustrations with WordPress as an opportunity to focus on both the content *and* structure of his site.

He evaluated other SSGs and found the build times too slow and content inflexible, typically restricted to blogging workflows.

> Since I was already looking for a good project to write in golang I decided to build my own static site generator called hugo.

Hugo took some ideas from other static site generators like front matter and Markdown-based content and introduced some of its own. These include taxonomies, built-in image processing, i18n, custom outputs, RSS feeds, menus, and more. Everything is included. No plugins are required.

Hugo has seen success with corporate customers, including [1Password](https://support.1password.com/), [Linode](https://www.linode.com/docs/) [Digital.gov](https://digital.gov/), [KeyCDN](https://www.keycdn.com/), and [Let's Encrypt](https://letsencrypt.org/), to name just a few. [Bj&oslash;rn Erik Pedersen](https://github.com/bep) took over as the lead maintainer in 2015 and continues to lead Hugo's thriving community.

*[See our introduction to getting started with Hugo on CloudCannon](/tutorials/hugo-tutorial/getting-started/#introduction)*.

## [Sculpin](https://sculpin.io/)

*First released in 2012 by [Beau Simensen](https://github.com/simensen)*

Beau Simensen was using Jekyll to create static sites and hit issues he created pull requests to fix. After months of inactivity on his pull requests, he grew frustrated and set out to build a new SSG. Beau had experience in PHP and thought, "Maybe I could rewrite Jekyll in PHP". Symfony's HTTP Kernel SSG could serve as the heart of the SSG, [Composer](https://getcomposer.org/) was making waves as a PHP dependency manager, and Twig was a popular PHP templating language. He had all the building blocks he needed. And so, Sculpin was born.

Sculpin has a similar feature set to Jekyll in that you can blog, there are custom content types (Jekyll's "collections"), layouts, and the ability to extend Sculpin for your own needs.

## [Hexo](https://hexo.io/)

*First released in 2012 by [Tommy Chen](https://github.com/tommy351)*

Tommy Chen was using Octopress on his personal blog and was running into performance issues.

> \[translated from Traditional Chinese\] I think every [Octopress](http://octopress.org/) user must have such troubles — as the number of articles increases, the speed of file creation becomes slower and slower. This site has grown to 54 articles, and it takes at least one minute to create a file every time.

He had been messing around with Node.js, and decided to create a Jekyll-inspired prototype using the framework. His prototype took the build time on his blog from one minute on Jekyll down to two seconds. Impressed with the results — and who wouldn't be? — he spent a month building out the rest of the SSG and released the first version of Hexo.

Hexo wasn't the first JavaScript-based SSG, but it was the first to gain a significant following. It has a similar feature set to Jekyll, a vast number of [themes](https://hexo.io/themes/) and [plugins](https://hexo.io/plugins/), and has the ability for deep customization for those familiar with Node.js.

## [Harp](http://harpjs.com/)

*First released in 2012 by [Brock Whitten](https://github.com/sintaxi)*

Coming off the success of creating PhoneGap, a way of building mobile apps with HTML, CSS, and JS, Brock Whitten set to work on a new kind of SSG, Harp.

The idea behind Harp is all the preprocessors are built in, so you can write your Sass CSS in a .sass file and Harp will automatically build it into a .css. It also supports Markdown, Jade, EJS, LESS, Stylus, and CoffeeScript.

Harp isn't just a static site generator, either. You can use it to 'compile' or build a site just as you would with a static site generator. You can also use it as a middleware for handling assets in a larger application, or as a production web server replacing something like Nginx or Apache.

Where Harp really shines is in its simplicity. Sure, it doesn't have some of the standard SSG features like front matter and blogging. But, if you don't need those, this is a neat little SSG. You can create Markdown files, wrap them in your HTML layout, and have your Sass automatically build.

## [Metalsmith](https://metalsmith.io/)

*First released in 2014 by [Ian Storm Taylor](https://github.com/ianstormtaylor)*

In 2011, Ian Storm Taylor cofounded [Segment](https://segment.com/), a customer data platform that helps collect, clean, and control customer data. Years later, he created the SSG Metalsmith, which he used to power the Segment technical documentation. Just this week, after a 5-year maintenance mode break, [Kevin Van Lierde](https://github.com/webketje) took over as lead developer and maintainer, and [shared his roadmap](https://www.metalsmith.io/news/2022-01-27/metalsmith-is-back/) for future features and patches.

In some ways, Metalsmith is one of the simplest SSGs. The entire codebase is under 400 lines(\!), but don't let that fool you — this is one of the most powerful and flexible SSGs out there. Everything in Metalsmith is a plugin. From layouts, to collections, pagination, drafts, permalinks, image processing — you name it, there's a plugin for that. You configure these plugins to process files on your site and have complete control over where and how they're run. If a plugin doesn't exist, you can always add your own using Metalsmith's simple Node.js API.

Metalsmith isn't just restricted to HTML-based websites either; on their website they have workflows for creating ebooks, building assets, and project scaffolding.

## [Zola](https://www.getzola.org/)

*First released in 2015 by [Vincent Prouillet](https://github.com/Keats)*

Vincent gets straight to the point in his announcement of 'Gutenberg' (later [renamed](https://github.com/getzola/zola/issues/377) to Zola).

> *Why would we possibly want another static site engine?* I already hear some say. That's a very valid question\!

He initially used Pelican to power the static websites he worked on, and later switched to Hugo "for the speed and the standalone binary and \[he\] stayed for the instant live reload." Hugo was great, but he soon grew frustrated with the Go templating engine.

Vincent had been working on his own templating engine, [Tera](https://github.com/Keats/tera) in Rust, and thought building a static site generator would be a great way to further his knowledge of the language. Before long, he had created Gutenberg, an opinionated yet flexible way to build "all kinds of sites, from landing pages to knowledge bases, not only blogs." Gutenberg launched with support for CommonMark for content, category and tag support, automatic RSS feeds, and a host of other features that made it a viable alternative to Hugo.

In 2018, WordPress announced its block-based editor, Gutenberg, and began a heavy marketing campaign. Up against the platform that powered most of the web (an SEO matchup he described as "[a plankton vs a tsunami](https://twitter.com/20100Prouillet/status/1032189593322508288)"), Vincent changed the name to Zola, after the famous French writer.

Zola is now a fully-fledged SSG with support for shortcodes, pagination, taxonomies, search, Sass preprocessing, image processing, and multilingual sites.

---

The era of reinvention saw developers flexing their creative muscles, and really pushing the boundaries of what a static site generator is capable of. An overlapping era of static generation was already underway, however, and single-page web applications were beginning to make waves. In my \[N\]ext article, I'll dig more deeply into the web's boundless enthusiasm for SPAs.

*This is the third part of an ongoing series. If you’d like to read about the earlier history of static site generators, see [Part 1: The ‘Before Jekyll’ era](https://cloudcannon.com/blog/ssg-history-1-before-jekyll/) and [Part 2: The 'After Jekyll' era](/blog/ssg-history-2-after-jekyll/).*