---
title: Eleventy vs Next.js
description: "Both Next.js and Eleventy are incredibly popular tools for generating static websites —\_and if you’ve been tuned into the web development world for the past few years you’ll have come across adherents and passionate advocates for each. It’s a testament to the vision driving the development of each tool that both have found such widespread support. But which should you choose? Let’s start comparing apples and oranges!"
series:
image: https://cc-dam.imgix.net/blog/blog-eleventy-vs-next-js.jpg
date: 2022-11-23T05:00:00+1300
hide_publish_date: false
tags:
  - Eleventy
  - Resources
  - Next.js
author: cloudcannon
---
You’d be hard pressed to find two more popular but distinctly different tools to use for static site generation than [Eleventy](https://www.11ty.dev/) and [Next.js](https://nextjs.org/). In fact, simply comparing Eleventy and Next.js suggests a false equivalency — while both tools can generate static websites, they’re intended for two very different markets and use cases, from a focus on lightweight static sites (Eleventy) all the way up to complex and interactive web apps (Next.js).

Luckily for both developers and content teams, CloudCannon supports both Eleventy and Next.js: whichever tool you choose for your static sites, with CloudCannon you’ll have the benefit of accessible content management, flexible dev tooling, and intuitive content editing and page building.

Both Next.js and Eleventy are incredibly popular tools, both built with JavaScript — and if you’ve been tuned into the web development world for the past few years you’ll have come across adherents and passionate advocates for each. It’s a testament to the vision driving the development of each tool that both have found such widespread support. But which should you choose? Well, as usual, the answer will depend almost entirely on your use case. (The remainder of the answer is much more qualitative: try both, and keep the one that fits your preferred workflow!)

With that said, let’s start comparing apples and oranges, shall we?

## What is Eleventy?

Eleventy is a JavaScript-based static site generator with independent templating languages. Users can use Markdown or one of ten other template languages to create their content — and even mix and match different languages side by side within the same project. Eleventy can also dynamically generate pages from local or external data and compile at build time.

Eleventy has no client-side JavaScript dependencies, so it creates sites that are truly static and as performant as possible. And because Eleventy is built for flexibility, it works with your project’s existing directory structure and allows incremental adoption, so you can migrate as fast or slow as you like, converting a few templates at a time.

Finally, because Eleventy bets on JavaScript (and the npm ecosystem), it has access to a huge ecosystem for additional functionality — at last count approximately 580k modules!

### Sites made with Eleventy

* [web.dev](http://web.dev/)
* [developer.chrome.com](http://developer.chrome.com/)
* [eslint.org](https://eslint.org/)
* [netlify.com](http://netlify.com/)

## What is Next.js?

Next.js is a powerful hybrid framework for both server-rendered React applications and statically exported React applications and websites. As a framework, Next.js handles the tooling and configuration developers need for React, while also providing additional structure, features, and optimizations for their applications.

Next.js is increasingly popular among developers with React experience, or those who require the flexibility of a hybrid model that can encompass both server-side rendering (SSR) and static site generation (SSG) in a single project.

Backed by [Vercel](https://vercel.com/), the stated aim for Next.js is to bring the power of full-stack to the frontend. With recent developments including new Rust-based tooling for transpilation and minification, and the incremental bundler and build system [Turbopack](https://turbo.build/) replacing Webpack, Next.js looks set to remain a powerhouse for users who want the full gamut of development options available to them.

### Sites made with Next.js

* [notion.com](https://notion.com/)
* [hulu.com](https://www.hulu.com/)
* [hbomax.com](https://www.hbomax.com/)
* [ign.com](https://www.ign.com/)

## Comparing Next.js and Eleventy

|  | **Next.js** | Eleventy |
| --- | --- | --- |
| **First release** | 2016 | 2018 |
| **Built with** | JavaScript (React) | JavaScript |
| **Templating language(s)** | JSX | JavaScript, HTML, Markdown, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug, WebC |
| **Plugins** | Yes | Yes |
| **GitHub stars** | 96k+ | 13k+ |
| **Templates / Starters** | Yes (Next.js uses the term ‘Template’.) | Yes (Eleventy uses the term ‘Starter’.) |
| **Licence** | MIT | MIT |
| **Installation requirements** | Via npm | Via npm |
| **Build speeds** | Fast | Faster |
| **Multilingual and i18n** | Multilingual with a little work; i18n built-in. | Both via plugins. |
| **Easy WordPress / legacy converter** | No; you’ll need to convert to Markdown and then clean up your content. | No; you’ll need to convert to Markdown and then clean up with layout templates. |
| **Learning curve** | Moderate; it will help to have React.js experience. | Gentle; it will help to have JavaScript experience. |
| **Documentation** | [nextjs.org](https://nextjs.org/docs/getting-started) | [11ty.dev](http://11ty.dev/) |
| **Support communities** | [Next.js Discord](http://nextjs.org/discord) is a busy and helpful community. | [Eleventy Discord](https://discord.gg/GBkBy9u)&nbsp;and&nbsp;[11ty-community](https://github.com/11ty/11ty-community/)&nbsp;are both helpful; [11ty.rocks](http://11ty.rocks/) is also a great place to start. |
| **Twitter accounts** | [Next.js Twitter](https://twitter.com/nextjs) | [Eleventy Twitter](https://twitter.com/eleven_ty) |
| **GitHub repos** | [github.com/vercel/next.js](https://github.com/vercel/next.js) | [github.com/11ty/eleventy](https://github.com/11ty/eleventy/) |
| **Code splitting** | Yes (automatic) | Yes (manually) |
| **Image optimization** | Yes | Yes |
| **Disable runtime JS** | Yes (experimental feature) | No runtime JS required by default |
| **Environment variables** | Yes | Yes |
| **Content security policy** | Via `next-secure-headers` | Custom HTTP headers rules |
| **CloudCannon support** | Yes — your&nbsp;[Next.js](https://cloudcannon.com/nextjs-cms/)&nbsp;sites (in SSG mode) can be editable in minutes with CloudCannon. | Yes — you can get your&nbsp;[Eleventy](https://cloudcannon.com/eleventy-cms/)&nbsp;sites editable in minutes with CloudCannon. |

## Which should I choose?

The short answer — as always — is that it depends on you, your team, and your plan for the future of your project.

**Choose [Eleventy](https://cloudcannon.com/eleventy-cms/)** if you know that you’ll be creating a website with a more constrained vision: one where [the advantages of static](https://cloudcannon.com/blog/static-vs-dynamic-websites-the-definitive-guide/) are clear to you and the site’s users. Because Eleventy’s scope is very clear — minimal JavaScript, very fast build speeds, and a major focus on site performance — it’s the ideal solution for websites where every millisecond and kilobyte matters. (Arguably, this is true for all websites, of course!)

Further, Eleventy is a great choice if your workflow includes collaborative development across multiple languages, or you’re handing off a built site to an external development team with a wide range of language preferences. Because Eleventy is both minimal and flexible, it’s easy to theme and extend, and brings with it a gentle learning curve for beginners to static sites.

**Choose [Next.js](https://cloudcannon.com/nextjs-cms/)** if you (or your team) have existing React expertise and/or components, or you already know your website project or app will grow in size and/or scope beyond a plain static site in the near future. Remember, Next.js is more than a static site generator. It’s a hybrid framework, meaning it blends server-side generated pages with static pages. This makes Next.js a compelling option for content-rich websites with a large number of pages (100k+), because upfront build time can be minimized or avoided entirely.

Similarly, for large e-commerce stores that rely on search and filtering to help users find one product among thousands, Next.js’s server-side rendering gives developers more flexibility to handle scaling. Larger development teams with short timeframes to scale their architecture will equally benefit from Next.js; if your team was tasked with launching a production-ready app as soon as possible, it’d be hard to look elsewhere.

## Choose either — or both — with CloudCannon

CloudCannon’s focus is, and always has been, making content editing and production more accessible to everyone, no matter the use case. Accordingly, we provide excellent support for both Eleventy and Next.js, meaning we’re here for you whichever approach you choose. With our Git-based CMS, your content teams will be able to easily build pages in an intuitive visual editor, while developers benefit from our flexible approach to configuration and content management.

We’ve published a series of tutorials on [getting started with Eleventy](/tutorials/), and we also have a comprehensive overview (and video guide) of [how to get started with Next.js and CloudCannon](https://cloudcannon.com/documentation/articles/nextjs-starter-guide/?ssg=Next.js). It’s worth nothing, however, that our support for Next.js is focused on Next.js’s SSG capabilities, and as such does not include SSR.