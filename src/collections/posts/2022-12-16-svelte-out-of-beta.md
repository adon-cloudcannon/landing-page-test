---
draft: false
title: CloudCannon’s SvelteKit support out of beta 🎉
description: "Developers and content editors using SvelteKit on CloudCannon will now benefit from the same great tooling, tutorials, and documentation  as users of other major SSGs like Eleventy, Hugo, and Jekyll —\_as well as a free new theme!"
series:
permalink: /blog/cloudcannon-sveltekit-support-out-of-beta/
image: https://cc-dam.imgix.net/blog/blog-sveltekit-launch.webp
date: 2022-12-16T05:02:00+1300
hide_publish_date: false
tags:
  - SvelteKit
  - Features
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
ssg_frameworks: 
  - sveltekit
categories:
  - features
---
We’re celebrating the holiday season with another release — this time with increased support for SvelteKit users\! With [SvelteKit itself having just reached v1.0](https://svelte.dev/blog/announcing-sveltekit-1.0), this is perfect timing; our build flow now includes SvelteKit's latest stable release.&nbsp;

Our Git-based CMS has already had really solid beta support for SvelteKit for more than a year, and over that time we’ve been quietly working away on improving all aspects of the development and editing experience. We’re now confident that if you choose to use SvelteKit on CloudCannon, you’ll benefit from the same great developer and editor tooling as you do with other major SSGs like Eleventy, Hugo, and Jekyll.

It’s safe to say that everyone on our team has their own favorite SSG, and those of us on Team SvelteKit love it for its flexible filesystem-based routing, its simplicity, and its ease of use. We also appreciate SvelteKit’s rapidly growing community of developers, its [busy and helpful Discord community](https://svelte.dev/chat), and its active ecosystem of plugins and tools, offering developers a wealth of resources and support. Finally, for static websites that are heavy on images or other media, SvelteKit just performs *really well*, with plenty of options for optimization and speedy load times. What’s not to love?

## What’s improved for SvelteKit users?

We’ve talked about our high bar for support releases when [Eleventy support came out of beta](https://cloudcannon.com/blog/new-eleventy-features-a-new-theme-and-full-eleventy-support/) last week, and the same rules apply here. In order for the whole CloudCannon team to approve this release, we wanted to make sure we’d addressed the following:

### Lots of testing. (*So* much testing.)

We’ve imported, created, and stress-tested a *very* wide range of SvelteKit sites through all of CloudCannon’s available workflows — from local development with GitHub, GitLab, and Bitbucket connections, all the way to spinning up a new SvelteKit site directly on CloudCannon from one of our existing themes. Along the way we’ve improved the SvelteKit experience for everyone.

### Clear documentation and guides

As we stress-test, we’re constantly iterating updating our [documentation for SvelteKit users](https://cloudcannon.com/documentation/?ssg=SvelteKit), making sure that all manner of questions are addressed and easily searchable, as well as offering detailed help and advice on configuring your existing SvelteKit sites for use with CloudCannon’s Visual, Content, and Data Editors.

For users who are completely new to SvelteKit and want to try it out, we’ve also created a full [Beginner’s Guide for new SvelteKit users](/tutorials/sveltekit-beginner-tutorial/) for an easy introduction to layouts, components, templating, blogging and data files. We’ll continue to build on these tutorials over the coming months.

### Bookshop support for SvelteKit

For users of our open-source component development workflow [Bookshop](https://github.com/CloudCannon/bookshop), we’ve also created a [full reference guide for Bookshop on SvelteKit](https://github.com/CloudCannon/bookshop/blob/main/guides/sveltekit.adoc) and a [Bookshop starter template for SvelteKit](https://github.com/CloudCannon/sveltekit-bookshop-starter/). (The Sendit theme comes with Bookshop and a wide range of components already configured, too\!)

## Sendit: A new, free, pagebuilding theme for SvelteKit

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/blog-eleventy-launch-sendit.jpg" alt:"" extend:false border:false %}

We’ve released a new free SvelteKit theme called [Sendit](https://cloudcannon.com/community/themes/sendit/) to showcase all the benefits of SvelteKit’s flexibility and CloudCannon’s page-building workflows and responsive Visual Editor in a clean, modern, and ready-to-use site — and it’s available now for everyone to use and adapt as they see fit. Check out the [Sendit demo site](https://pleasant-worm.cloudvent.net/) to see what’s possible.

Sendit has an easily configurable navigation and footer, multiple hero options, and subtle animation, all optimized for editing in CloudCannon.

In less than a minute, anyone can [deploy a new Sendit site with SvelteKit and CloudCannon](https://app.cloudcannon.com/register#sites/connect/github/CloudCannon/sendit-sveltekit-template), and experience the best of our Visual Editor for intuitive page building.

With Sendit, all users can quickly build out their pages from a pre-made set of twenty(\!) pre-styled and reusable page components, as well as create their own components to extend the project.

---

*Do you have any questions about bringing your SvelteKit sites over to CloudCannon? Want some help with migration or configuration? [Book a no-obligation demo call](https://cloudcannon.com/book-a-demo/) with our SvelteKit experts to chat about what CloudCannon can do for you, check out our [documentation](https://cloudcannon.com/documentation/?ssg=SvelteKit), or get in touch via in-app support, and we’ll get back to you as soon as we can.*