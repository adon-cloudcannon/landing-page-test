---
_schema: default
title: Eleventy (11ty) vs. Hugo
description: >-
  We’ll compare two excellent SSGs here: Hugo and Eleventy. Both are optimised
  for fast content delivery and are capable of handling large sites with
  thousands of pages — sites like documentations, blogs, landing pages or
  marketing websites. But there are several key differences to consider.
draft: false
image: https://cc-dam.imgix.net/blog/uploads/eleventy-vs-hugo.jpg
date: 2021-08-04T05:00:00+12:00
hide_publish_date: false
tags:
  - Resources
  - Eleventy
  - Hugo
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
permalink: /blog/{{ title | slugify }}/
cta:
  title: Launch your website today
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
  featured_image:
  featured_image_alt:
ssg_frameworks:
  - 11ty
  - hugo
categories:
  - resources
---
Better performance. Higher security. Ease of scaling. It’s easy to see why you’d want to move to a SEO-friendly static site built on the Jamstack architecture, where your request times and build times are decoupled.

But with hundreds of static site generators (SSGs) to choose from, what’s the best way to generate your pages and assets?

You could start with the most popular, or the fastest-growing SSG. Or delve deeper, considering your team’s or your client’s experience and preferred workflows.

We’ll compare two excellent SSGs here: Hugo and Eleventy (11ty). Both work smoothly with our Git-based CMS. Both are optimised for fast content delivery and are capable of handling large sites with thousands of pages — sites like documentations, blogs, landing pages or marketing websites. But there are several key differences to consider.

Let’s see how they match up.

## **What is Hugo?**

Hugo is a static site generator built with Go (a.k.a. Golang), released in 2013 by [Steve Francia](https://github.com/spf13) and actively (since version 0.14) maintained by [Bjørn Erik Pedersen](https://github.com/bep).

Hugo is incredibly widely supported by Jamstack hosts and CMSs, and has more than 100K live sites, largely because of its well-deserved reputation for speed, simplicity and flexibility. It bills itself as “the world’s fastest static website engine”, with build times on an average site of less than 1ms per page.

With great speed also comes great simplicity: Hugo is distributed as a single cross-platform binary, meaning unless you want additional dependencies (and there are plenty to choose from), your installations can be up and running sooner, with built-in functionalities like i18n, menus, sitemaps, feeds and image optimization. Themes? [Hugo’s got them](https://themes.gohugo.io/).

### **Sites made with Hugo**

* [stackimpact.com](http://stackimpact.com/)
* [digital.gov](http://digital.gov/)
* [godottutorials.com](http://godottutorials.com/)

## **What is Eleventy?**

Eleventy, the “simpler static generator”, was created as a zero-config JavaScript alternative to Jekyll. It has a reputation for ease of use, as it works well with existing project files and also because of its logical hierarchies.

Let’s be clear: this is no JavaScript framework, nor does it rely on one. In fact, Eleventy was built with the aim of “opting out of the framework rat race”. It’s fast, lets you stay flexible, doesn’t require any client-side JavaScript, and doesn’t push you to learn any specific frameworks like Vue or React.

Did we mention that Eleventy is built with the world’s most popular programming language? For its growing user base, that counts for a lot. Most appealing for those new to the SSG world, though, is Eleventy’s flexibility for its template languages: HTML, Markdown, JavaScript, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml and Pug. Pick one, or if your team has a range of experience, use as many as you want — all within a single project.

With Eleventy’s independent template engines, your content is firmly decoupled for future transitions — just in case a shinier generator comes along in the future.

### **Sites made with Eleventy**

* [netlify.com](http://netlify.com/)
* [web.dev](http://web.dev/)
* [developer.chrome.com](http://developer.chrome.com/)

## At a glance

<table><thead><tr><th>Comparison</th><th>Eleventy</th><th>Hugo</th></tr></thead><tbody><tr><td>First release</td><td>2018</td><td>2013</td></tr><tr><td>Built with</td><td>JavaScript</td><td>Go</td></tr><tr><td>Templating engine(s)</td><td>JavaScript, HTML, Markdown, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug</td><td>Go</td></tr><tr><td>Plugins</td><td>Yes</td><td>Limited</td></tr><tr><td>GitHub stars*</td><td>9K+</td><td>51K+</td></tr><tr><td>Themes</td><td>Yes (11ty uses the term 'starter'.)</td><td>Yes</td></tr><tr><td>Open source licence</td><td>MIT</td><td>Apache-2.0</td></tr><tr><td>Installation requirements</td><td>Via npm</td><td>None — Hugo is a single binary.</td></tr><tr><td>Build speeds</td><td>Fast</td><td>Fastest</td></tr><tr><td>Multilingual and i18n</td><td>Via plugins</td><td>Built in</td></tr><tr><td>Shortcodes</td><td>Yes</td><td>Yes</td></tr><tr><td>Easy Wordpress et al. converter</td><td>No; you’ll need to convert to Markdown and then clean up with layout templates.</td><td>Yes: <a href="http://gohugo.io/tools/migrations">gohugo.io/tools/migrations</a></td></tr><tr><td>Learning curve</td><td>Gentle, especially if you have JavaScript experience</td><td>Less gentle / non-trivial</td></tr><tr><td>Documentation</td><td><a href="http://11ty.dev">11ty.dev</a></td><td><a href="http://gohugo.io">gohugo.io</a></td></tr><tr><td>Support communities</td><td><a href="https://discord.gg/GBkBy9u">Eleventy Discord</a> and <a href="https://github.com/11ty/eleventy-community">eleventy-community</a> both have helpful communities.</td><td><a href="https://discourse.gohugo.io/">Hugo Discourse</a> is a full-service forum with many active users.</td></tr><tr><td>Twitter accounts</td><td><a href="https://twitter.com/eleven_ty">Eleventy Twitter</a></td><td><a href="https://twitter.com/GoHugoIO">Hugo Twitter</a></td></tr><tr><td>GitHub repos</td><td><a href="https://github.com/11ty/eleventy/">github.com/11ty/eleventy</a></td><td><a href="https://github.com/gohugoio/">github.com/gohugoio</a></td></tr></tbody></table>

\* See [star-history.t9t.io/#11ty/eleventy&gohugoio/hugo](https://star-history.t9t.io/#11ty/eleventy&amp;gohugoio/hugo) for a comparison over time. It’s always also worth noting that GitHub stars are solely a metric for how many users have pressed the star button — some do this to indicate a favorite repository, but others use the star system to follow active development, to be recommended similar projects, or just to support friends.

## **So, which should I choose?**

It’s a question of preference and your confidence, really. Both Eleventy and Hugo have impressively low build times. Both are content-focused, and both are under active development with large communities of users. (Granted, one community is significantly larger than the other…) Finally, both Eleventy and Hugo support, if not encourage, progressive enhancement of a project — they allow you to provide the essential content first and add dynamic functionality later.

But the choice likely boils down to what you already know, and what you want to learn. Which languages and frameworks suit your development team? Or your client?

Choose [**Hugo**](https://cloudcannon.com/hugo-cms/) if you’re comfortable working with Go, plan on having many thousands of posts or pages on your site, and you enjoy a steep learning curve. Hugo’s support community is very helpful for those starting out.

Choose [**Eleventy**](https://cloudcannon.com/eleventy-cms/) if you’re newer to the SSG world, your workflow includes collaborative development across different languages, or you intend to pass your site over to a client whose developers use anything other than Go. Sitting in the sweet spot between minimal and flexible, Eleventy is easy to theme and extend, and with its gentle learning curve it’s ideal for SSG beginners.

Whichever you choose, CloudCannon can help make your SSG experience even easier, from instant testing domains to a robust editor. Our [learning path for Hugo](/tutorials/hugo-beginner-tutorial/) is already established, and over the coming weeks we'll roll out a series of blog posts, comparisons and tutorials for Eleventy, enabling you to get up and running as soon as possible. Whether you sync from your repository or CloudCannon’s [Git-based CMS](https://cloudcannon.com/git-cms/), you and your team will always stay up to date.