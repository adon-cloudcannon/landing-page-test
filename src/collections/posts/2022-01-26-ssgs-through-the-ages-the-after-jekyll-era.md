---
title: 'The ‘After Jekyll’ era'
description: >-
  The 'After Jekyll' Era: part 2 of a series exploring the innovative history of
  static site generators.
series: SSGs through the ages
permalink: /blog/ssg-history-2-after-jekyll/
image: https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/explorer-2_vumhwx.svg
date: 2022-01-26T05:00:00+1300
tags:
  - Resources
author: mike-neumegen
---
*This is the second part of an ongoing series. If you'd like to read about the genesis of static site generators, see [Part 1: The 'Before Jekyll' era](https://cloudcannon.com/blog/ssg-history-1-before-jekyll/).*

---

By 2008, static websites were seen by most as ancient, obsolete technology, a holdover from the previous decade (or millennium, depending on your viewpoint).

Jekyll changed that. It was a breath of fresh air for developers coming from a world of complex APIs, plugins, and databases. The control and simplicity offered by Jekyll inspired developers to start creating their personal blogs on the platform. Before long, Jekyll was frequently used for documentation and other commercial projects.

Jekyll's success triggered a decade of recreation and iteration. Open-source developers around the world created their own special versions of Jekyll, bringing their own ideas and implementing them in their favorite languages. Static site generators were truly here to stay.

## [Jekyll](https://jekyllrb.com/)

*First released in 2008 by [Tom Preston-Werner](https://twitter.com/mojombo)*

Tom Preston-Werner founded [GitHub](https://github.com/) in 2008 with his cofounders Chris Wanstrath, P. J. Hyett, and Scott Chacon. 2008 was a busy year for Tom. Nine months after founding GitHub, in December 2008, he launched Jekyll — a simple, blog-aware, static site generator.

The complexity of existing blogging platforms fueled Tom to create Jekyll.

> I already knew a lot about what I *didn't* want. I was tired of complicated blogging engines like WordPress and Mephisto. I wanted to write great posts, not style a zillion template pages, moderate comments all day long, and constantly lag behind the latest software release.

Jekyll built on many of the ideas from Nanoc and introduced two now-staple SSG features of its own:

* Front matter — Having page metadata in a small YAML snippet at the top of a page's source code.
* "Blog-aware" — Just put Markdown files in a folder, and Jekyll will turn it into a blog.

Along with Jekyll, GitHub launched GitHub Pages — a free hosting platform for Jekyll websites, which propelled Jekyll to become a household name among web developers.

Developers starting building their personal blogs, documentation, and even some business websites with Jekyll. The inflection point came when [Kyle Rush](https://twitter.com/kylerush) [used a Jekyll website to raise $250M for the Obama Campaign](https://moz.com/blog/kyle-rush-reveals-how-the-obama-campaign-broke-every-online-fundraising-record-free-mozcon-video), and praised its quick page loads, reduction in page weight, structural flexibility for A/B testing, and the accompanying increase in donations for the campaign. The tides were changing on static. Static was no longer perceived as a limited technology, and SSGs weren't just tools to build personal developer blogs. There was a strong business case for creating static websites.

Jekyll's contributions were dwindling in late 2012 and looked like a dormant future for the SSG powerhouse. That was until [Parker Moore](https://twitter.com/parkr) wrote [an open letter](https://byparker.com/blog/2012/an-open-letter-to-tom-preston-werner/) to Tom and became the lead maintainer until 2018. Parker took Jekyll from 0.9.x to 3.6 and led the charge in introducing many improvements along the way, including Collections, Sass and CoffeeScript support, front matter defaults, and many other quality-of-life improvements.

[Ashwin Maroli](https://github.com/ashmaroli) and [Matt Rodgers](http://mattr.info/) took over after that and have pushed Jekyll forward to 4.2.1 with many bug fixes, documentation improvements, optimizations and quality of life improvements.

[*See our introduction to getting started with Jekyll on CloudCannon*](https://cloudcannon.com/community/learn/jekyll-tutorial/getting-started/#introduction).

## [Middleman](https://middlemanapp.com/)

*First released in 2009 by [Thomas Reynolds](https://github.com/tdreyno)*

Thomas Reynolds came to SSGs from a slightly different angle: "I started Middleman basically to make my life building email templates a little more simple and \[DRY\]". While building email templates was Middleman's initial use case, the principles of reducing complexity and repetition made it a popular alternative to Jekyll.

If you were coming from Ruby on Rails or Sinatra, Middleman would feel right at home with its ERB templating system and Ruby-based configuration. Until 3.0, Middleman was actually built on the Sinatra Ruby framework.

Where Middleman shone was in its consistency and supporting features. While Jekyll had many different maintainers, Thomas has always been at the helm of Middleman, creating a more cohesive platform. Features such as i18n, minifying, multiple templating languages, and CDN integration help set it apart.

Middleman enjoyed success with companies such as Mailchimp, Thoughtbot, and Vox Media. Thoughtbot used Middleman to rapidly spin up small landing page websites for clients. They also used it as their blog platform for a couple of years, driven by the performance of static sites and the improved contribution and review workflows enabled by Git.

## [Octopress](http://octopress.org/)

*First released in 2009 by [Brandon Mathis](https://twitter.com/imathis)*

Brandon Mathis's story of creating Octopress is a little unusual from the rest of the static site generators for two reasons:

1. Brandon came from a design and photography background.
2. Octopress isn't an SSG in its own right. In Brandon's words, "Octopress is basically some guy's Jekyll blog you can fork and modify".

In October 2009, Brandon started working on a new version of his blog. He decided to use Jekyll, built a few rake tasks, made a nice theme, and before long, his WordPress site was now a Jekyll site.

Soon after, Chris Epstein, the creator of [Compass](http://compass-style.org/) and co-creator of [Sass](https://sass-lang.com/), forked Brandon's repository and asked for some help with the design. Being a big fan of Chris's, Brandon jumped on the opportunity straight away. He pulled out the content, made the theme more generic, and named his creation Octopress.

A few years later, he decided to improve Octopress. He took a few months off work, made the theme nicer, made fancier Rake tasks and plugins, and [released Octopress 2.0](http://octopress.org/2011/07/23/octopress-20-surfaces/). It was swiftly picked up on Hacker News and became one of the top 25 most forked repositories at the time.

## [Hakyll](https://jaspervdj.be/hakyll/)

*First released in 2009 by [Jasper Van der Jeugt](https://twitter.com/jaspervdj)*

In November 2009, Jasper Van der Jeugt set out to create a personal blog. He started researching platforms and found the following as his best options:

> [Wordpress](http://wordpress.org/) is probably the most common blog software. I didn't really like it, because it's written in php, and because I recently became interested in static site generators.

> [nanoc](http://nanoc.stoneship.org/), written by someone I know, seemed more appropriate. The downside was that it requires some Ruby knowledge, which I am currently lacking.

> [yst](http://github.com/jgm/yst) is a similar static site generator, mostly based on data files. I didn't really like its configuration system, and the next item looked better:

> [jekyll](http://github.com/mojombo/jekyll) is also written in Ruby, but it seems more high-level and blog-ready (which is a good thing, you know, with my non-existent Ruby skills…). However, when I tried it out I ran across a certain bug, and I started googling. It turned out jekyll is not perfectly compatible with Ruby 1.9. Yeah, I'll repeat that: it's not compatible with Ruby 1.9. I didn't feel like downgrading any packages

(Any Jekyll user can relate to Jasper's Ruby struggles. It's often the most challenging part of installing Jekyll.)

Not finding any satisfactory options, Jasper did what many developers would do in this situation, and built his own SSG. Jekyll spurred many developers to build something different in their language of choice; going forward, we'll see this trend repeat across many SSGs. In this case, Jasper was learning Haskell, and creating a new SSG was the perfect opportunity to apply his new knowledge.

Hakyll stands out from its predecessors for two reasons:

1. It's highly configurable — you have deep control over the routing and compilers (how pages are processed).
2. It has tight integration with [pandoc](https://pandoc.org/) — pandoc is the Swiss Army knife of file conversions. You could write your content in Jira Wiki and output it as a PDF or Asciidoc to HTML. It supports many different formats allowing you to write and output in the languages you need.

These strengths are also Hakyll's weaknesses — if you want a simple SSG to quickly spin up a Markdown blog, this is probably not the SSG for you.

## [Pelican](https://blog.getpelican.com/)

*First released in 2010 by [Alexis Metaireau](https://twitter.com/ametaireau)*

Pelican wasn't the first Python-based static site generator, but it was the first to gather considerable popularity. Alexis Metaireau created Pelican in November 2010 to scratch his own itch:

> I was previously using wordpress, a solution you can host on a web server to manage your blog. Most of the time, I prefer using markup languages such as Markdown or RestructuredText to type my articles. To do so, I use vim. I think it is important to let the people choose the tool they want to write the articles. In my opinion, a blog manager should just allow you to take any kind of input and transform it to a weblog. That's what pelican does. You can write your articles using the tool you want, and the markup language you want, and then generate a static HTML weblog.

Using Jinja2 as a templating language and accessing the Python ecosystem was a huge win for the Python audience. Many of Pelican's features mirror Jekyll's, some with a bit of Pelican flair of their own. For example, front matter does not have the triple dash lines:

<code>Title: My super title<br />Date: 2010-12-03 10:20</code>

`This is the content of my super blog post.`

In other areas, Pelican outshines Jekyll. In particular:

* Translations — Is core functionality in Pelican.
* Pagination — The pagination in Jekyll is notoriously painful. Pagination in Pelican is a core feature that can be configured to your needs.
* Atom & RSS Feed support — Jekyll has Atom feeds through a plugin. Pelican goes to the next level allowing you to have a feed per category, tag, and/or author, in addition to an overall feed.

[Justin Mayer](https://twitter.com/jmayer) took over the reins as Pelican's lead maintainer in 2014, and he has steadily added new functionality, fixed bugs, and added quality-of-life improvements since then.

---

We've stepped through years of recreating and iterating on Jekyll — all vital to the current state of our SSG ecosystem. But what came next?

To my mind, it's an era of experimentation, of reinvention, of challenging Jekyll's foundations.

*Stay tuned for Part 3 of this series: The 'Reinvention' era.*
