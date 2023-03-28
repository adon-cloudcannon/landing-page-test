---
title: "Choosing a CMS for your Static Site: Part 2 —\_Headless? Git-based, or API-based?"
description: >-
  What is a headless CMS? What's the difference between a Git-based CMS and an
  API-based CMS? Discover which CMS category will suit you best, so you can
  choose the best CMSs to evaluate.
series:
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
image: https://cc-dam.imgix.net/blog/how-to-choose-a-cms-2r.jpg
date: 2022-09-14T05:00:00+1200
hide_publish_date: true
tags:
  - Resources
author: 466580e8-b101-4837-a0c2-a90a8aebb5db
---
Congratulations\! You’re well on your way to identify the right content management system (CMS) for your team. At this stage in your journey you’re already likely to recognize [the benefits of modern static sites](https://cloudcannon.com/blog/static-vs-dynamic-websites-the-definitive-guide/), and you might have even chosen your preferred [static site generator (SSG)](https://cloudcannon.com/blog/what-is-a-static-site-generator/) and planned the process of [selecting your new CMS for your static website](https://cloudcannon.com/blog/choosing-a-cms-for-your-static-site-part-1/).

## What types of CMS can I use with a static site generator?

There are two different categories of CMS that work with SSGs. Before you create a shortlist of CMSs to evaluate, you’ll have one important decision to make — which of the two types you’ll need. You may have come across new terms like ‘headless’ or ‘decoupled’, and ‘Git-based’ or ‘API-based’. Let’s define all of these terms now, so you’ll know which CMS category will suit you best.

## What is a headless CMS?

A legacy CMS like WordPress handles everything for a website — from the admin (dashboard) interface for creating, editing and saving content, to actually building the pages for visitors.

A headless or ‘decoupled’ CMS is only concerned with managing your content, the ‘body’ of your site; it doesn’t control how that content is shown on the live website. That’s the job of the static site generator, the ‘head’ in this case.

Separating your website’s content and delivery like this might sound more limiting, but it has many benefits:

* You’re far more flexible on the technology stack that actually builds your website. You can swap out the site-building stack at any point, while the CMS remains the same.
* You can reuse content in many different situations. Your headless CMS might power content for your marketing website, application, e-commerce store, and mobile app.
* By separating concerns, you can choose the best tool for each job — the best headless CMS for editing your content, and the best static site generator for your use case. With a legacy CMS, these concepts are joined together: you might have to settle for a subpar editing experience to support your use case, or vice versa.

Broadly speaking, headless CMSs fall into one of two categories: Git-based or API-based. Each has different tradeoffs we’ll explore in the next section.

## Git-based or API-based?

Git and API are both concepts and terms developers use. So what do they mean for a marketer or editor who actually uses the content management system?

### Git-based

A Git-based CMS is a content editing layer that sits on top of the files for your website. It’s a specialized tool that understands how your website works, as well as the relationship between the code your web developer writes and the content your editor writes. Because of this deep understanding, a Git-based CMS can provide intuitive visual editing where editors update content directly on the web page.

Because it’s a layer, a Git-based CMS can easily be added, changed, or removed at any time. It’s working on top of your website files, so you always have full control of your content. If you want to change CMSs, there’s no need to export anything. You can simply disconnect your current Git-based CMS from your website files, connect your new one, and configure your website to get the most out of your new content management system.

So what is Git, exactly? Git is a technology used by developers to collaborate on software. You can think of it as an advanced version of Dropbox or Google Docs. It’s become an essential tool for any software project for many reasons:

* It stores every change made to a piece of software so you can easily go back to a previous version.
* It serves as an offsite backup so if your computer breaks, you don’t lose the source code for your software.
* It allows you to work on multiple versions of the software in parallel. For example, you might work on a feature that will take you a month to complete, but in the meantime, you might switch back to an older version to work on a bug fix that needs to be released today.
* It allows many people to work on the software in parallel. Some software projects have thousands of developers collaborating on them from all around the world.
* It has a powerful review process where source code is rigorously tested and looked over to ensure it’s high quality and bug-free.

There’s really not an equivalent tool for non-developers. The reason Git is not used outside of the developer world is that it’s very technical to use. You would typically type commands in a terminal, and there are a lot of technical terms and concepts you would need to understand.

A Git-based CMS hides all of this complexity behind an easy-to-use interface. Developers still have access to all the technical bells and whistles of Git, while editors can change content and hit ‘Save’, which will do all the Git magic behind the scenes.

### API-based

An API-based CMS is almost entirely the opposite of a Git-based CMS. Instead of working directly on your website files, an API-based CMS works completely separately from them. It’s effectively a Swiss-army knife content management system that can work in a large variety of situations.

Setting up an API-based CMS involves creating content models for the different types of content on the website. For example, for a blog you would need a content model for the posts. A post might have a title, author, image, short description, and body of the post. Once you’ve created the model, you can create a new post. It’ll have a form field for each piece of data that you fill out, and then you can save it. Some API-based CMSs will have a way of previewing the content on the actual website so you can view it before you publish it.

Now you can create, update, and delete content, how do you get it on the website? This is where the API part comes in. API stands for Application Programming Interface, which might sound somewhat intimidating, but it’s really not.

Think of an API like ordering food on Uber Eats. Every restaurant has their own menu, their own cooking processes, and their own ways of ordering. With Uber Eats, you don’t need to understand anything about the restaurant: you just select what looks good to you, and it’ll turn up on your door. APIs are sort of like this for developers: they allow you to interact with another piece of software, possibly written and maintained by someone else, and have a standard, well-structured set of rules for doing so. In the case of an API-based CMS, it allows developers to access the content in the CMS and use it for whatever website or application they’re working on.

This separation between the website and content is a tradeoff with many advantages. Because the CMS doesn’t understand anything about the website, it means the content (and the CMS) can be reused across a variety of situations. Your API-based CMS might power content for your website, web application, social media, and even digital signage.

Using an API-based CMS with a static site generator requires some setup from a developer. Typically, the developer will create a page in the CMS for each page on the website. When the site builds, it connects to the CMS using the API, downloads the content for each page, and outputs a purely static website ready to be published.

## Choosing between a Git-based and an API-based CMS

Now, in many ways **pitting a Git-based CMS against an API-based CMS is a false binary** — when compared to a legacy CMS like WordPress or Drupal, both Git-based and API-based CMSs are excellent choices, since they both provide user-friendly interfaces, more flexibility, and improved development workflows.

When it comes to choosing the approach that will best suit your website — and your team — it’s best to consider your needs first. One of the major factors is understanding how the content will be used.

* If the content is only needed for a single website, the specialized nature of a Git-based CMS might make more sense. This is especially the case if intuitive editing, data ownership, and familiar Git procedures are important to your team.
* If the content is needed across many different use cases, the flexible nature of an API-based strategy could be more advantageous, particularly if your team requires centralized, raw data access across multiple outputs.

## What is CloudCannon?

**CloudCannon is a Git-based CMS that helps developers and content editors work together to create exception websites.** Editors use an [intuitive and user-friendly interface](https://cloudcannon.com/features/visual-editing/) to create and edit content while developers have full [flexibility and free range](https://cloudcannon.com/features/developer-workflows/) to add new features, styles, and everything else a website requires.

It’s a complete platform used by world-leading companies such as Netflix and Twitch to power exceptional digital experiences.

CloudCannon offers a **14-day free trial** for you to see if the CMS is a good fit for your team. Whether you already have a site that's built with a static site generator or you're planning to transition from a legacy CMS, you and your developers can [register and get started today](https://app.cloudcannon.com/register). If you have any questions along the way, reach out to our support team — they'll do everything they can to help you get up and running as soon as possible.