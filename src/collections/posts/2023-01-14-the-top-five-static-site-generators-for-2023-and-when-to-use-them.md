---
draft: false
_schema: default
title: The Top Five Static Site Generators for 2023 (and when to use them!)
description: >-
  What are the top five static site generators for 2023? Should you choose the
  most popular framework, the site builder you already know how to use, or the
  SSG best suited to your new website project's use case? We've assessed five
  leading SSGs covering a wide range of uses cases.
series:
image: https://cc-dam.imgix.net/blog/blog-top-five-ssgs-2023.jpg
date: 2023-01-13T16:00:00Z
hide_publish_date: false
tags:
  - Resources
  - Eleventy
  - Hugo
  - Next.js
  - SvelteKit
  - Astro
author: 466580e8-b101-4837-a0c2-a90a8aebb5db
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
---
There’s no shortage of static site generators (SSGs) to choose from, though I’ve limited the below list to five major SSGs covering a wide range of uses, from marketing sites, portfolios and blogs to documentation hubs with hundreds of thousands of pages.

Because I use CloudCannon to manage content on the sites I create, and because our product developers have been so busy over the last year, I’ve been able to put a much wider range of SSGs through their paces than I’d thought would be possible, working both locally and through CloudCannon’s web interface.

## So why should I use a static site generator in 2023?

For the same reason you used an SSG last year: to make your website faster, more secure, and easier to maintain. Because SSGs create websites as ‘flat’ or plain text files, they don't require a database or server-side processing. This makes static sites faster, more secure, and easier to maintain than most websites created on a legacy stack like WordPress.

## Which SSG should I use?

If you’re not already using an SSG, the answer to this question depends on two main factors: the use case of the site you’re building, and your level of comfort with different approaches to content organization. Overall (because you’re likely a flexible developer and will want the best for site users), the site’s use case should guide you the most — you’ll need to consider both the planned scope at launch and how you want the site to grow and change over time.

Let’s take a look at my top SSG picks for 2023, in no particular order.

### [Astro](https://astro.build/)

At the start of last year, [we picked Astro as “one to watch”](https://cloudcannon.com/blog/ssg-history-8-islands/#astro), and it’s certainly lived up to our hopes. The Astro project has grown quite dramatically over the course of 2022, and shows no sign of slowing down. Its team of experienced core maintainers has grown, its appreciative user base has at least tripled in size, and at the time of writing, a 2.0 release is fast approaching.

With partial hydration or islands architecture at its core, Astro extracts UI into smaller, isolated components on the page, and replaces unused JavaScript with lightweight HTML, giving site users faster loads and lower time-to-interactive (TTI).

Astro also supports content sources from the filesystem or a remote CMS, database, or API. In addition, Astro offers first-class support for React/Preact (JSX), Vue, Svelte, and Tailwind CSS, and an ecosystem of more than 100 integrations and themes to explore.

The reason Astro really shines, in my opinion, is that it hits an incredibly productive middle ground that neatly avoids having to ship a JavaScript bundle while also allowing you to build with JavaScript components. With Astro, you can build your site with your favorite JavaScript framework, but your finished site can be a zero-JavaScript static site. (Unless you make the conscious choice to opt in to islands of JavaScript, of course.)

Get started with Astro on CloudCannon by [syncing an existing site repository](https://cloudcannon.com/documentation/articles/connecting-your-first-site/?ssg=Other); after your site has built in CloudCannon you're ready to [set up a global configuration file, define your collections, and customize your editing experience](https://cloudcannon.com/documentation/articles/integrating-your-site/?ssg=Other).

### [Eleventy](https://www.11ty.dev/)

Like Astro, Eleventy had a [banner year](https://www.zachleat.com/web/icymi/2022/#open-source) in 2022. Thanks to Netlify's full-time sponsorship of the project, which began in February, the Eleventy team has been able to release 28 versions and close more than 800 issues and 300 pull requests in the year. The number of tutorials, guides and starters (themes) also skyrocketed over the year, and the Eleventy community grew along with it. Here at CloudCannon we’ve seen a growing number of Eleventy sites being built by our users over the past year, and we’re not surprised!

In July of last year, Eleventy lead maintainer Zach Leatherman set up a [benchmark exercise](https://www.zachleat.com/web/build-benchmark/) that compared build times of six major generators; Eleventy and Hugo were clear winners of the test, which established Eleventy as the fastest JavaScript-based generator — regardless of site size tested (the exercise tested up to 4000 Markdown files). It’ll be fascinating to compare build times for the latest versions of each of the six SSGs tested, but it’s clear that Eleventy had a firm hold on speed.

Overall, Eleventy makes it easy for developers to get started with new website projects. It’s designed to be both simple and flexible, allowing you to focus more on your content and not on the framework. In a sense, it’s a stack that makes a concerted effort to get out of your way, but is always accessible when you need to tweak something.

With Eleventy, you can choose from a variety of template languages such as Nunjucks, Liquid, and Handlebars to structure and layout your content in the way that you want. Additionally, Eleventy is highly customizable, giving you the ability to tailor it to your specific needs using custom plugins and scripts. With fast build times and an active community of developers, you'll find a wealth of resources and support available to help you along the way.

Eleventy is a great choice for developers who value simplicity, flexibility, and customizability, and who want an SSG with fast build times and a strong community of support. If you’re focused on build speed and site performance, and would rather avoid JavaScript in your built sites where possible, you’d be hard pressed to choose anything other than Eleventy. (Especially with a stable 2.0 release on its way over the next few weeks!)

Get started with Eleventy on its own with our [Eleventy Beginner tutorial series](/tutorials/eleventy-beginner-tutorial/), or find out more about [setting up and configuring an Eleventy site for the ideal editing experience with CloudCannon](https://cloudcannon.com/documentation/guides/eleventy-cms-get-started-with-cloudcannon/).

### [Hugo](https://gohugo.io/)

Hugo is known primarily for its build speed, but also for its reputation as an extremely efficient — if sometimes opinionated — tool for producing performant websites. Hugo is written in Go, a programming language known for its fast performance. Don’t be put off by this, though — you don’t need to be a Go expert to use Hugo. Its performance makes Hugo a good choice for developers who are working on large or complex websites. Personally, it’s my go-to for new sites when I have a short turnaround time for a proof-of-concept, or have a huge number of Markdown pages to include — in general terms, build times will be considerably faster than other SSGs.

Hugo’s shortcodes add flexibility to Markdown, and it ships with pre-made templates for commenting, SEO, analytics, and other functions. It also supports unlimited content types, taxonomies, menus, and dynamic API-driven content, all without plugins.

Hugo also offers a highly flexible templating system, which provides developers with the ability to create their own unique templates. This is ideal for those who have specific requirements and need to tailor their output to their own specific needs. With this system, developers don't have to rely on existing templates and can instead craft custom ones that perfectly suit their purposes. This makes Hugo a great choice for developers who are looking for a templating system that can be tailored to their exact specifications.

Hugo is an incredibly extensible platform, offering a wide range of both free and paid themes that allow you to customize and extend the functionality of your website. Whether you are looking for a simple design or something more complex, you can find a theme that fits your needs, giving you the ability to make your website unique. With the wide array of customization options available, you can tailor your website to your specific needs.

Hugo is a great choice for developers who need fast build times and flexible templating, and who value extensibility and a smaller but very knowledgeable and helpful community. (And with the free [HugoConf](https://hugoconf.io) returning for 2023, you’ll have ample chances to show the Hugo community your sites and shortcodes, and hear about new tools and approaches for including Hugo in your workflow.)

You can get started with Hugo on its own through our [Hugo Beginner tutorial series](/tutorials/hugo-beginner-tutorial/), or [find out more about setting up and configuring a Hugo site for editing with CloudCannon](https://cloudcannon.com/documentation/guides/hugo-starter-guide/). We've also created a tutorial on [how to optimise your Hugo site for SEO](/tutorials/hugo-seo-best-practices/).&nbsp;

### [SvelteKit](https://kit.svelte.dev/)

SvelteKit hit its own [1\.0 release in mid-December](https://svelte.dev/blog/announcing-sveltekit-1.0) last year, marking a new level of internal confidence in the project, but it’s already been the Svelte developer’s site generator of choice since its release in 2020. And its roadmap for the months ahead is equally impressive: built-in i18n support, incremental static regeneration, granular control over deployment region and runtime, image optimisation, and many other improvements.

SvelteKit is built on top of the Svelte framework, which is known for its efficient performance. And because it uses Vite, its builds are incredibly fast (though not up to the same speeds as Eleventy and Hugo), and has support for TypeScript, ESLint, and Prettier, as well as Playwright and Vitest. You can integrate Tailwind and Supacase, and use Storybook or Histoire for your component stories. Overall, SvelteKit is a framework that addresses the tradeoffs between having a simple document web page versus a single page application.

SvelteKit includes automatic code splitting, which means that it can split your code into smaller chunks that are only loaded when needed. This can help improve the performance of your application by reducing the amount of code that needs to be loaded at once. And like Astro and Next.js, SvelteKit supports server-side rendering, which can be useful for optimizing the performance of web applications, especially on slower devices or for users with low bandwidth.

Svelte compiles its components to highly efficient JavaScript code that runs in the browser, making it a good choice for building fast and responsive web applications. It’s designed to be simple and easy to use, so it’s well established for Svelte developers who want to get up and running quickly with a new project. With its modern and intuitive codebase, developers can quickly create powerful and lightweight sites and web apps, allowing for quick and easy development without sacrificing quality.

You can get started with SvelteKit with our [SvelteKit Beginner tutorial series](/tutorials/sveltekit-beginner-tutorial/), or [find out more about setting up and configuring a SvelteKit site to get the most out of&nbsp; CloudCannon](https://cloudcannon.com/documentation/articles/integrating-your-site/?ssg=SvelteKit).

### [Next.js](http://nextjs.org/)

I don’t see the Next.js train slowing over 2023 — it’s built up such a head of steam that it’s guaranteed at least another couple of years of healthy use and attention from developers.

Like Astro and SvelteKit, Next.js supports both server-rendered and static site generation, meaning you’re able to pick and choose which aspects of your site or application to build statically and be deployed to a CDN, and which should be rendered (at least initially) on the server.

Next.js also comes with a development experience that includes features such as hot-reloading, which allows for rapid development, and a development server that makes it easy to test your application on different devices and network conditions. Next.js also includes easy-to-use client-side routing, which makes it simple to define and navigate between different pages in a web application.

Next.js includes automatic code splitting, which breaks up the code for a web application into smaller chunks that are only loaded when needed. This can improve the performance of the application by reducing the amount of code that needs to be loaded at once.

Finally (and this is something of a self-fulfilling guarantee of popularity), Next.js has a *very* large and active community of developers, so you can find a lot of resources and support available online, including official and third-party plugins, integrations, tutorials, and examples. If you’re new to Next.js and interested in web development there’s never been a better time to learn — you can hardly browse anywhere online without tripping over a new Next.js tutorial.

Next.js is a good choice for developers who want to build React applications and who value optimized performance and a rich ecosystem.

Get started with Next.js on CloudCannon with our [starter tutorial](https://cloudcannon.com/documentation/articles/nextjs-starter-guide/?ssg=Next.js), which covers all the steps you'll need to take in order to set up customized editing on CloudCannon.

## How to manage your static content

Whichever SSG you choose for your next project, CloudCannon is here to help your users manage and edit your content. With our [Git-based CMS](https://cloudcannon.com/git-cms/) for Eleventy, Next.js, Astro, Hugo, and SvelteKit (among others), you’ll be able to configure a customized editing experience for your clients and content teams, meaning they’ll be able to spend more time doing what they do best — writing, editing, and managing their own content.

If content management is a concern for you and your team, you can find out more about [getting started with CloudCannon](https://cloudcannon.com/documentation/) at our documentation hub, or [book a personalized demo](https://cloudcannon.com/book-a-demo/) — our static site experts would love to discuss what you need from a CMS, and how we can help.

## Free and open-source tools to extend your SSGs

As great as SSGs are — and they are! — they can’t do it all. That’s why we’re creating and maintaining a growing range of free and open-source tools to extend your site functionality — all while paying the utmost attention to your users’ bandwidth, and simplifying your development experience. Regardless of which SSG you use, we think you’ll love the following solutions for search, multilingual translation management, and component development:

### Site search

[Pagefind](https://pagefind.app/) is a fully static search library that runs after Hugo, Eleventy, Next.js, Astro, SvelteKit, or any other SSG. It aims to perform well on large sites, while using as little of your users’ bandwidth as possible, and without hosting any infrastructure. It’s a fantastic alternative to a paid search solution, and its bandwidth requirements are nothing short of incredible.

### Managing translations

[Rosey](https://rosey.app/) is an open-source tool for managing translations on static websites. Rosey runs after Hugo, Eleventy, or any other tool that generates fully static sites, merging your original site and your translations into one multilingual website. Rosey aims to decouple your SSG from your translation workflow, simplifying development of multilingual components and layouts.

### Component development workflow

[Bookshop](https://github.com/CloudCannon/bookshop) is a component development workflow for static websites. Bookshop defines a convention for building self-contained components in the templating languages supported by common SSGs. Using these conventions, Bookshop provides developer tooling that empowers you to integrate these components with your stack, build and browse UI components locally, and provide rich live editing experiences for your editors.

Bookshop currently supports [Jekyll](https://github.com/CloudCannon/bookshop/blob/main/guides/jekyll.adoc), [Eleventy](https://github.com/CloudCannon/bookshop/blob/main/guides/eleventy.adoc), [Hugo](https://github.com/CloudCannon/bookshop/blob/main/guides/hugo.adoc), and [SvelteKit](https://github.com/CloudCannon/bookshop/blob/main/guides/sveltekit.adoc), with support for more SSGs coming in the near future.

---

*Which SSGs do you see leading the way in 2023? What additional open-source tools would you like to extend your chosen SSG? Let us know via [Twitter](https://twitter.com/cloudcannon) or [Mastodon](https://techhub.social/@cloudcannon).*