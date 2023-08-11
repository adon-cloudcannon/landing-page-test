---
draft: false
title: Eleventy (11ty) vs. Jekyll
description: >-
  We compare two distinctly different static site generators (SSGs): Jekyll and
  Eleventy (11ty). They’re both fully compatible with CloudCannon’s Git-based
  CMS, and both are ideal for marketing sites (such as this one, built with
  Jekyll), as well as documentation and blogs.
cta:
  title: Launch your website today
  body_text: Give your content team full autonomy on your developer-approved tech stack with CloudCannon.
  button:
    content: 
      link: "https://app.cloudcannon.com/register?trial=cc_standard"
      text: "Get started free!"
    styles:
      size:
      style: "outline"
      extra_classes:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/eleventy-vs-jekyll.jpg
date: 2021-08-11T05:00:00+1200
tags:
  - Resources
  - Jekyll
  - Eleventy
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
ssg_frameworks:
  - 11ty
  - jekyll
categories:
  - resources
---
Welcome to the static world. Your sites scale easily, load faster and more efficiently, and you and your clients are already seeing the benefits. The [Jamstack ecosystem](https://cloudcannon.com/community/jamstack-ecosystem/) is thriving, with tools and support for static sites growing day by day, and [CloudCannon has just launched Eleventy support](https://cloudcannon.com/blog/eleventy-11ty-support-in-cloudcannon/), alongside Jekyll and Hugo. There’s never been a better time to be a web developer. But we return to the perennial question: which static site generator (SSG) should you choose for your next project?

Here we’ll compare two distinctly different SSGs: Jekyll and Eleventy. They’re both fully compatible with CloudCannon’s [Git-based CMS](https://cloudcannon.com/git-cms/), and both are ideal for marketing sites (such as this one, built with Jekyll), as well as documentation and blogs. But let's compare and contrast, shall we?

## **What is Jekyll?**

Tom Preston-Werner’s “simple, blog-aware” SSG, released in 2008, kicked off the recent web dev trend towards static sites: Jekyll is the basis of GitHub Pages, serving verbatim or Markdown files to visitors, and enabling GitHub users to host their own blogs, documentation, and even books. Written in Ruby by Preston-Werner, Jekyll has since been maintained by Parker Moore, and is currently sitting at version 4.2.0. Nice.

Because Jekyll has been around for so long, there’s a huge amount of documentation, support, plugins and templates available for users. Think about it like this: the existing users have asked the tough questions and largely figured out the edges of the generator so you don’t have to.

### Sites made with Jekyll

* [http://rubyonrails.org/](http://rubyonrails.org/) (See our [deep dive into the Ruby on Rails site](https://cloudcannon.com/community/showcases/ruby-on-rails/) and how it uses Jekyll)
* [https://developer.spotify.com/](https://developer.spotify.com/)
* [https://dev.twitch.tv/](https://dev.twitch.tv/)
* [https://login.gov/](https://login.gov/)
* [https://cloudcannon.com/](https://cloudcannon.com/) (This site — you’re here right now\!)

## **What is Eleventy?**

Eleventy, released in 2018 by Zach Leatherman, is a JavaScript alternative to Jekyll, built for speed and flexibility. Zero-config by default, but incredibly flexible if customization is your thing, Eleventy can build several times faster than an equivalent Jekyll site.

For many developers, part of Eleventy's appeal is that it doesn’t make assumptions about your content. The default hierarchies are logical if you're starting a new project, but you can also bring over your existing project files and directory structures, and just point Eleventy in the right direction.

For those developers who like to flex their fingers from time to time — or who have existing SSG projects written using related template engines — Eleventy supports no fewer than ten templating languages: HTML, Markdown, JavaScript, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, and Pug. Choose your favorite, or use them all side by side.

### Sites made with Eleventy

* [https://www.11ty.io/](https://www.11ty.io/)
* [https://eu-testbook.com/](https://eu-testbook.com/)
* [https://web.dev/](https://web.dev/)
* [https://templates.netlify.com/](https://templates.netlify.com/)
* [https://splitinfinities.com/](https://splitinfinities.com/)

## **Let’s compare**

| Comparison  | Jekyll  | Eleventy |
| --- | --- | --- |
| First release  | 2008  | 2018 |
| Built with  | Ruby  | JavaScript |
| Templating engine(s)  | Liquid  | JavaScript, HTML, Markdown, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug |
| Plugins  | Yes, via Ruby Gems  | Yes |
| GitHub stars  | 43K+  | 9K+ |
| Themes  | Yes  | Yes (11ty uses the term ‘starter’.) |
| Open source licence  | MIT  | MIT |
| Installation requirements  | Ruby must be installed.  | Via npm |
| Build speeds  | Fast-adjacent, though growing sites build increasingly slowly.  | Faster |
| Multilingual and i18n  | Via plugins  | Via plugins |
| Shortcodes  | Yes  | Yes |
| Easy Wordpress et al. converter  | Yes: [Jekyll converter](https://import.jekyllrb.com/)  | No; you’ll need to convert to Markdown and then clean up with layout templates. |
| Learning curve  | Gentle, especially if you have Ruby experience.  | Slightly more gentle, especially if you have JavaScript experience |
| Documentation  | [jekyllrb.com/docs/](https://jekyllrb.com/docs/)  | [11ty.dev](http://11ty.dev/) |
| Support communities  | [Jekyll Talk](https://talk.jekyllrb.com/) <br><br>[Gitter](https://gitter.im/jekyll/jekyll)  | [Eleventy Discord](https://discord.gg/GBkBy9u) and [eleventy-community](https://github.com/11ty/eleventy-community) both have helpful communities. |
| Twitter accounts  | [Jekyll Twitter](https://twitter.com/jekyllrb)  | [Eleventy Twitter](https://twitter.com/eleven_ty) |
| GitHub repos  | [github.com/jekyll](https://github.com/jekyll)  | [github.com/11ty/eleventy](https://github.com/11ty/eleventy/) |

## **Which should I choose?**

For experienced developers, the choice likely won’t be as simple as picking sides between Ruby and JavaScript. Beginners will likely find Eleventy a more straightforward proposition, though the historic wealth of documentation and support for Jekyll may well sway those who prefer their paths well-traveled.

Neither Jekyll nor Eleventy is difficult to set up on your local machine, though in any case, CloudCannon makes setting up (and connecting to your chosen Git repo) a single-click proposition.

Choose **[Jekyll](https://cloudcannon.com/jekyll-cms/)** if you want a quick solution to importing existing blogs from legacy dynamic monoliths. For new Jekyll builds you’ll find dates, drafts and sorting posts are ready to use immediately, but as some users have pointed out, Jekyll has a relatively strict structure, meaning it can be more difficult to customize. Jekyll build times might remain a concern for some, particularly with larger sites; you’ll find that as a site grows it will take progressively longer to build.

Choose **[Eleventy](https://cloudcannon.com/eleventy-cms/)** if you’re looking for a future-proofed SSG, where content is decoupled as much as possible from the SSG itself (and is therefore easier to extract, should you need to). Even the templating engines — and remember, you can mix and match between ten, within a single project — are by design as Eleventy-independent as possible. If build times are a big concern, Eleventy is likely to be the SSG for you. Add to that the widest flexibility for templating languages the Jamstack community has seen so far (including Liquid, for those particularly interested in transferring from Jekyll).

Whatever your choice, CloudCannon is here for you. Our Git-based CMS works seamlessly with both Jekyll and Eleventy (as well as [Hugo](https://cloudcannon.com/hugo-cms/), if Go is more your speed, and more speed is more your thing), letting you empower your content team with robust publishing workflows, and spend more time on the development work you enjoy.
