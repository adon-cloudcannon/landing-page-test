---
title: Eleventy (11ty) vs. Hugo
description: >-
  We’ll compare two excellent SSGs here: Hugo and Eleventy. Both are optimised
  for fast content delivery and are capable of handling large sites with
  thousands of pages — sites like documentations, blogs, landing pages or
  marketing websites. But there are several key differences to consider.
image: https://dam-cdn.cloudcannon.com/blog/uploads/eleventy-vs-hugo.jpg
date: 2021-08-04T05:00:00+1200
tags:
  - Resources
  - Eleventy
  - Hugo
author: cloudcannon
---
Better performance. Higher security. Ease of scaling. It’s easy to see why you’d want to move to a SEO-friendly static site built on the Jamstack architecture, where your request times and build times are decoupled.

But with hundreds of static site generators (SSGs) to choose from, what’s the best way to generate your pages and assets?

You could start with the most popular, or the fastest-growing SSG. Or delve deeper, considering your team’s or your client’s experience and preferred workflows.

We’ll compare two excellent SSGs here: Hugo and Eleventy (11ty). Both work smoothly with our Git-based CMS. Both are optimised for fast content delivery and are capable of handling large sites with thousands of pages — sites like documentations, blogs, landing pages or marketing websites. But there are several key differences to consider.

Let’s see how they match up.

## **What is Hugo?**

Hugo is a static site generator built with Go (a.k.a. Golang), released in 2013 by&nbsp;[Steve Francia](https://github.com/spf13){: target="_blank" rel="noopener noreferrer"}&nbsp;and actively (since version 0.14) maintained by&nbsp;[Bj&oslash;rn Erik Pedersen](https://github.com/bep){: target="_blank" rel="noopener noreferrer"}.

Hugo is incredibly widely supported by Jamstack hosts and CMSs, and has more than 100K live sites, largely because of its well-deserved reputation for speed, simplicity and flexibility. It bills itself as “the world’s fastest static website engine”, with build times on an average site of less than 1ms per page.

With great speed also comes great simplicity: Hugo is distributed as a single cross-platform binary, meaning unless you want additional dependencies (and there are plenty to choose from), your installations can be up and running sooner, with built-in functionalities like i18n, menus, sitemaps, feeds and image optimization. Themes?&nbsp;[Hugo’s got them](https://themes.gohugo.io/).

### **Sites made with Hugo**

* [stackimpact.com](http://stackimpact.com/){: target="_blank" rel="noopener noreferrer"}
* [digital.gov](http://digital.gov/){: target="_blank" rel="noopener noreferrer"}
* [godottutorials.com](http://godottutorials.com/){: target="_blank" rel="noopener noreferrer"}

## **What is Eleventy?**

Eleventy, the “simpler static generator”, was created as a zero-config JavaScript alternative to Jekyll. It has a reputation for ease of use, as it works well with existing project files and also because of its logical hierarchies.

Let’s be clear: this is no JavaScript framework, nor does it rely on one. In fact, Eleventy was built with the aim of “opting out of the framework rat race”. It’s fast, lets you stay flexible, doesn’t require any client-side JavaScript, and doesn’t push you to learn any specific frameworks like Vue or React.

Did we mention that Eleventy is built with the world’s most popular programming language? For its growing user base, that counts for a lot. Most appealing for those new to the SSG world, though, is Eleventy’s flexibility for its template languages: HTML, Markdown, JavaScript, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml and Pug. Pick one, or if your team has a range of experience, use as many as you want — all within a single project.

With Eleventy’s independent template engines, your content is firmly decoupled for future transitions — just in case a shinier generator comes along in the future.

### **Sites made with Eleventy**

* [netlify.com](http://netlify.com/){: target="_blank" rel="noopener noreferrer"}
* [web.dev](http://web.dev/){: target="_blank" rel="noopener noreferrer"}
* [developer.chrome.com](http://developer.chrome.com/){: target="_blank" rel="noopener noreferrer"}

## At a glance

| Comparison | Eleventy | Hugo |
| --- | --- | --- |
| First release | 2018 | 2013 |
| Built with | JavaScript | Go |
| Templating engine(s) | JavaScript, HTML, Markdown, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug | Go |
| Plugins | Yes | Limited |
| GitHub stars\* | 9K+ | 51K+ |
| Themes | Yes (11ty uses the term 'starter'.) | Yes |
| Open source licence | MIT | Apache-2.0 |
| Installation requirements | Via npm | None — Hugo is a single binary. |
| Build speeds | Fast | Fastest |
| Multilingual and i18n | Via plugins | Built in |
| Shortcodes | Yes | Yes |
| Easy Wordpress et al. converter | No; you’ll need to convert to Markdown and then clean up with layout templates. | Yes: [gohugo.io/tools/migrations](http://gohugo.io/tools/migrations){: target="_blank" rel="noopener noreferrer"} |
| Learning curve | Gentle, especially if you have JavaScript experience | Less gentle / non-trivial |
| Documentation | [11ty.dev](http://11ty.dev){: target="_blank" rel="noopener noreferrer"} | [gohugo.io](http://gohugo.io){: target="_blank" rel="noopener noreferrer"} |
| Support communities | [Eleventy Discord](https://discord.gg/GBkBy9u){: target="_blank" rel="noopener noreferrer"}&nbsp;and&nbsp;[eleventy-community](https://github.com/11ty/eleventy-community){: target="_blank" rel="noopener noreferrer"}&nbsp;both have helpful communities. | [Hugo Discourse](https://discourse.gohugo.io/){: target="_blank" rel="noopener noreferrer"}&nbsp;is a full-service forum with many active users. |
| Twitter accounts | [Eleventy Twitter](https://twitter.com/eleven_ty){: target="_blank" rel="noopener noreferrer"} | [Hugo Twitter](https://twitter.com/GoHugoIO){: target="_blank" rel="noopener noreferrer"} |
| GitHub repos | [github.com/11ty/eleventy](https://github.com/11ty/eleventy/){: target="_blank" rel="noopener noreferrer"} | [github.com/gohugoio](https://github.com/gohugoio/){: target="_blank" rel="noopener noreferrer"} |

\* See&nbsp;[star-history.t9t.io/\#11ty/eleventy&gohugoio/hugo](https://star-history.t9t.io/#11ty/eleventy&amp;gohugoio/hugo){: target="_blank" rel="noopener noreferrer"}&nbsp;for a comparison over time. It’s always also worth noting that GitHub stars are solely a metric for how many users have pressed the star button — some do this to indicate a favorite repository, but others use the star system to follow active development, to be recommended similar projects, or just to support friends.

## **So, which should I choose?**

It’s a question of preference and your confidence, really. Both Eleventy and Hugo have impressively low build times. Both are content-focused, and both are under active development with large communities of users. (Granted, one community is significantly larger than the other…) Finally, both Eleventy and Hugo support, if not encourage, progressive enhancement of a project — they allow you to provide the essential content first and add dynamic functionality later.

But the choice likely boils down to what you already know, and what you want to learn. Which languages and frameworks suit your development team? Or your client?

Choose&nbsp;[**Hugo**](https://cloudcannon.com/hugo-cms/)&nbsp;if you’re comfortable working with Go, plan on having many thousands of posts or pages on your site, and you enjoy a steep learning curve. Hugo’s support community is very helpful for those starting out.

Choose&nbsp;[**Eleventy**](https://cloudcannon.com/eleventy-cms/)&nbsp;if you’re newer to the SSG world, your workflow includes collaborative development across different languages, or you intend to pass your site over to a client whose developers use anything other than Go. Sitting in the sweet spot between minimal and flexible, Eleventy is easy to theme and extend, and with its gentle learning curve it’s ideal for SSG beginners.

Whichever you choose, CloudCannon can help make your SSG experience even easier, from instant testing domains to a robust editor. Our [learning path for Hugo](https://cloudcannon.com/community/learn/hugo-101/) is already established, and over the coming weeks we'll roll out a series of blog posts, comparisons and tutorials for Eleventy, enabling you to get up and running as soon as possible. Whether you sync from your repository or CloudCannon’s [Git-based CMS](https://cloudcannon.com/git-cms/), you and your team will always stay up to date.
