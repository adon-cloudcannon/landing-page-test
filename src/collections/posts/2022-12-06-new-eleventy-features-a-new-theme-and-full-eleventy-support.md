---
title: New Eleventy features, a new theme, and full Eleventy support
description: "We’re delighted to announce CloudCannon’s full support for Eleventy, one of the most popular (and fast) static site generators in the world. While our Git-based CMS has had very functional Eleventy support over the past year, our product developers have been hard at work on additional features for the SSG —\_like folding Nunjucks and Liquid shortcodes into our new Snippets feature!"
series:
image: https://cc-dam.imgix.net/blog/blog-eleventy-launch-r.jpg
date: 2022-12-06T05:00:00+1300
hide_publish_date: false
tags:
  - Eleventy
  - Features
author: cloudcannon
---
We’re delighted to announce CloudCannon’s full support for Eleventy, one of the most popular (and fastest) static site generators in the world. While our Git-based CMS has had *very* functional Eleventy support over the past year, our product developers have been hard at work on additional features (like folding Nunjucks and Liquid shortcodes into our new Snippets feature\!) and additional documentation, to bring our Eleventy developer and editor tooling up to parity with that of other major SSGs like Hugo and Jekyll.

We love Eleventy for a wide range of reasons: firstly, Eleventy has extremely fast build times, so even large, complex sites can build in a matter of seconds. Secondly, we appreciate the developer freedom that Eleventy promotes in its templating languages: WebC, HTML, Markdown, JavaScript, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, and Pug. Developers can pick one, or be as flexible as they want and choose multiple languages — all within a single project. Finally, we love Eleventy’s ease of use: it works well with existing project files and multiple data sources, and features logical and intuitive hierarchies.

Speed and flexibility with no required client-side JavaScript? Sign us up\!

## What does ‘out of beta’ mean to CloudCannon?

The bar is pretty high, to be honest. We need to have a great deal of confidence that we’ve addressed all common issues that users have with a given SSG, and that our internal tooling and developer features work exactly as well with a newer SSG like Eleventy as they do with an SSG like Jekyll, which we’ve been supporting for a decade. Part of this process has included removing ‘Jekyllisms’ from the way CloudCannon works, so that we can truly offer an SSG-agnostic content management system for *everyone*.

When we say our support for Eleventy has come out of beta, here's what we mean:

1. We’ve imported, created, and tested all manner of different Eleventy sites over the last year, resolving all issues that appeared;
2. We’ve written up [rock-solid documentation on how to get started with Eleventy](https://cloudcannon.com/community/learn/eleventy-cms---get-started-with-cloudcannon/);
3. We’ve created additional developer tooling like Snippets — and [documented how to configure your existing Eleventy shortcodes and includes for all site users to create and edit them](https://cloudcannon.com/documentation/articles/editing-with-eleventy-shortcodes/?ssg=Eleventy) — so content writers on Eleventy sites benefit from CloudCannon’s intuitive visual UI.
4. We’ve created a new page-building starter (theme) for Eleventy called [Sendit](https://cloudcannon.com/community/themes/sendit/), which acts as a showcase for both Eleventy’s slick build speeds and CloudCannon’s best-in-class editing features.&nbsp;
5. For users of our open-source component development workflow [Bookshop](https://github.com/CloudCannon/bookshop), we’ve created a [full reference guide for Bookshop on Eleventy](https://github.com/CloudCannon/bookshop/blob/main/guides/eleventy.adoc) and a [Bookshop starter template](https://github.com/CloudCannon/eleventy-bookshop-starter). (The Sendit theme comes with Bookshop and a wide range of components already configured, too\!)

With these major milestones achieved, we’re confident that CloudCannon can offer the best development and editing experience for all Eleventy users.

## Bring your custom Eleventy shortcodes and includes to CloudCannon with Snippets

Eleventy shortcodes allow users to easily inject content into their templates — like reusable components. CloudCannon’s new Snippets feature encompasses shortcodes in both the Nunjucks and Liquid templating languages.

In CloudCannon, you can now embed rich Snippets in your Markdown content. Once [configured](https://cloudcannon.com/documentation/articles/editing-with-eleventy-shortcodes/?ssg=Eleventy), Snippets in your content will be presented as blocks in rich text views, with the ability to add them via the toolbar and easily edit them from the Content Editor.

## Sendit: A new, free, page-building starter for Eleventy

![](https://cc-dam.imgix.net/blog/blog-eleventy-launch-sendit.jpg)

We’ve created a brand new free theme (or ‘starter’, if you prefer) called [Sendit](https://cloudcannon.com/community/themes/sendit/) — for everyone to use and adapt as they see fit. You can [deploy Sendit on CloudCannon right now](https://app.cloudcannon.com/register#sites/connect/github/CloudCannon/sendit-eleventy-template)&nbsp;and try it for yourself, or check out the [Sendit demo site](https://potent-ship.cloudvent.net/) to see what's possible.

Sendit is a clean and modern Eleventy theme, with easily configurable navigation and footer, multiple hero options, and subtle animation, all optimized for editing in CloudCannon.

In less than a minute, anyone can spin up a new Sendit site with Eleventy and CloudCannon, and experience the best of our Visual Editor for intuitive page building.

With Sendit, all users can quickly build out their pages from a pre-made set of twenty(\!) pre-styled and reusable page components, as well as create their own components to extend the project.

## What’s next on the SSG roadmap?

There’s no resting on laurels for the CloudCannon product development team\! We’re working on adding equally rich support for a range of SSGs, including Next.js, Astro, and SvelteKit — with the same high level of features, new page-building themes, and documentation. (And if you’re working on product documentation sites, there’s not need to feel left out — we’re also working on MkDocs support, among others\!)

We’re always focused on allowing developers and content teams as much freedom as possible. That means static site developers can work with their preferred tools on CloudCannon, and content editors can use our CMS tooling to create, manage, and edit content on all sites.

Web agencies using CloudCannon to build client sites, too, will be able to have feature parity across any static site generators they choose to use, meaning they’ll have the freedom to choose the most suitable SSG for each client — and know that CloudCannon’s development *and* editing features will be available, along with our top-tier support.

---

*Do you have any questions about bringing your Eleventy sites over to CloudCannon? Want some help with migration or configuration? [Book a no-obligation demo call](https://cloudcannon.com/book-a-demo/)&nbsp;with our Eleventy experts to chat about what CloudCannon can do for you, check out our&nbsp;[documentation](https://cloudcannon.com/documentation/?ssg=Eleventy), or get in touch via in-app support, and we’ll get back to you as soon as we can.*