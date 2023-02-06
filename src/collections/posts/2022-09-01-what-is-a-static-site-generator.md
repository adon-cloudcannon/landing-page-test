---
title: What is a Static Site Generator?
description: >-
  Learn about the static site generator tools we use to create static websites,
  why we use them, and how they fit into our workflows for publishing new
  content, creating new pages, and keeping our content up to date.
series:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/blog-what-is-an-ssg-r.jpg
date: 2022-09-01T05:00:00+1200
hide_publish_date: true
tags:
  - Resources
author: david-large
---
So you’ve decided you’d like a [static website](https://cloudcannon.com/blog/static-vs-dynamic-websites-the-definitive-guide/). Great news\! Let’s dig into the tools we use to create static websites, why we use them, and how they fit into our workflows for publishing new content, creating new pages, and keeping our content up to date.

**A static site generator (SSG) is a software tool that generates a modern static website from a range of source files**. Developers use static site generators to create websites which are fast, secure, scalable, and easy to maintain. And even better, SSGs themselves are open-source software, meaning they’re freely available for everyone to use and modify. Popular SSGs have large and active communities built up around them, with a constant stream of improvements and updates supplied by community members.

## Why use a static site generator?

Static site generators blend the benefits of static websites (simplicity, speed, security, and scalability) with a dynamic approach (code reuse and maintenance) to get the best of both worlds.

They are typically simple to learn and give the developer complete control over the tech stack without adding extra burden and complexity.

Without an SSG, a purely static website would be a nightmare to maintain. Let’s say you want to add an item to the navigation on your site — you’d have to make that same change manually on every single page of your website.

With an SSG, you can make that navigation change in just one place. The SSG will then rebuild the site and your change will be reflected across the entire site.

Static site generators make working with static websites viable for even the most expansive websites.

## How does a static site generator work?

A website made with a static site generator mainly consists of two types of files: layouts and content.

Layouts describe the overall structure and appearance of the website. Think of all the parts of a website that don’t really change between pages — the navigation (site menu), footer, and sidebar are all part of a site’s layout.

Content is simply that — the contents of the site. With the exception of assets like images and icons, most content files are text-based. These text files represent a single page on the website, and don’t contain any information about how they will be presented on the website — that’s the job of the layout.

When a developer runs an SSG tool on the website folder, it starts a ‘build’. During a build the SSG looks at a content file, processes the layout and content with additional assets like images, and outputs an HTML file that any web browser is able to understand. It continues doing this for every content file, at which point the build is complete and the SSG has created a folder with a purely static website in it.

![](https://cc-dam.imgix.net/blog/How Static Site Generators Work.svg)

This static website can then be uploaded to almost any hosting service to make it live on the internet.

If the developer makes a change to the website, the build process will start again, looking at every single file and recreating the entire static website, complete with the new changes.

## How do you choose an SSG?

There’s a huge range of static site generators available all with various pros and cons. It can be a daunting task for a developer to select one.

The choice is typically in the developer's hands and comes down to a couple of factors:

1. What’s the use case? Is it a more informational website or more of an application with authentication and interaction?
2. What is the developer’s preference in terms of programming language and frameworks?

Let’s take a high-level look at the most popular SSGs to get an idea of the differences between them:

### Hugo

Hugo is a popular choice for developers. It’s been around since 2012 and has an enthusiastic community behind it. Where Hugo really shines is building informational websites like marketing websites, blogs, documentation sites, or portfolios.

As websites get larger, their ‘build time’ (the amount of time it takes to generate a static site from the source files) can get excruciatingly long. Whenever a change is made, the site needs to rebuild, so long build times can be frustrating to the developer. Hugo is known for extremely fast build times so it’s a good choice for large (100k+ pages) websites.

### Jekyll

Jekyll was the first SSG to become widely known and used by developers. It’s simple to learn, flexible enough to handle a variety of use cases, and has a wide ecosystem of plugins and themes. Jekyll has many similarities to Hugo and is well suited to the same informational websites.

### Eleventy

In many ways, Eleventy is a spiritual successor to Jekyll. It shares many of the same conventions and setups, and expands on Jekyll’s goals. The build times are significantly faster than Jekyll (though not as fast as Hugo), and it has a vibrant and active community which continues to build and improve the SSG. Just like Hugo and Jekyll, it’s a great choice for informational websites.

### Gatsby.js

You may have heard of the popular JavaScript framework called React. Many frontend developers are fanatical about React, particularly when it comes to developing interactive components (like a calendar, calculator, or a slideshow) on a page.

Gatsby.js is an SSG built on top of the React framework. It’s a great choice for building websites that have a little bit more functionality and interaction than an informational website. It particularly excels in websites that pull data from many different locations. For example, you might pull product data from Shopify, payment processing from Stripe, search from Algolia, and content from text files. Gatsby.js can combine all of these sources and make them easy to interact with.

### Next.js

Next.js is the most widely used tool on this list. It’s also built on the React framework and is a great choice for building application websites. Think of a movie streaming website, a real estate website, or an ecommerce store — something that is more dynamic and configurable for the person viewing the website.

### Nuxt.js

Like Next.js, Nuxt.js thrives on application websites. The key difference is that Nuxt.js is built on a different JavaScript framework, named Vue.js. Because Next.js and Nuxt.js have similar approaches and use cases but different frameworks, choosing between these two SSGs is mostly a question of developer preference.

## What types of websites are static site generators used for?

Static site generators are used for a huge range of website use cases, from marketing to blogging, documentation, ecommerce, and single-page applications, as well as sites that occupy the middle ground between [static and dynamic](https://cloudcannon.com/blog/static-vs-dynamic-websites-the-definitive-guide/).

Here are some of the most common use cases for static site generators, as well as our recommendations for which SSG might be suitable for each. You might find it helpful to first ask yourself where your site sits on a sliding scale between ‘Information’ and ‘Application’.<br> 

![](https://cc-dam.imgix.net/page-neptune.svg){: width="70"}

### **Marketing sites and landing pages**

SSGs are a great choice for marketing websites because the websites load extremely fast and scale well, even under high traffic volumes. Static sites are also easy for search engines like Google to index, and their fast load speeds result in higher search ranking. If you’d like to offer more interactivity, you can add JavaScript to include user-triggered behaviors to your website.

**We recommend:** Hugo, Jekyll, Eleventy, Gatsby.js.<br> 

![](https://cc-dam.imgix.net/blog-neptune.svg){: width="70"}

### **Blogs**

For blogging-centric sites, any SSG will likely do well. Many other types of websites will feature a product or development blog as well as their landing pages, so you’ll often see static sites featuring blogs alongside other content.

**We recommend:** Hugo, Jekyll, Eleventy (though all major SSGs handle blogging with ease).<br> 

![](https://cc-dam.imgix.net/documentation-neptune.svg){: width="70"}

### **Documentation sites**

Documentation sites can get massive, particularly if they support a large or growing product family. For this reason we’d suggest an SSG with a low build time, such as Hugo or Eleventy.

**We recommend:** Hugo, Jekyll, Eleventy.<br> 

![](https://cc-dam.imgix.net/cart-neptune.svg){: width="100"}

### **Ecommerce sites**

Ecommerce is a wide spectrum, and SSGs can support everything from simple shop to a fully personalized experience. Payment gateways and shopping cart services such as SnipCart can easily integrate with static sites, and from simple online storefronts to more interactive components, there’s a range of SSGs to support most ecommerce goals. And as with marketing sites above, you can add layers of interactivity with JavaScript.

**We recommend:** Hugo, Jekyll, Eleventy (for simple ecommerce sites); or Gatsby.js, Next.js, Nuxt.js (for more complex or interactive ecommerce sites).<br> 

![](https://cc-dam.imgix.net/application-neptune.svg){: width="70"}

### **Applications**

We’re heading in a much more ‘dynamic-ish’ direction here, but there’s a lot of scope for SSGs to help move desktop applications to the browser. Hybrid frameworks allow developers to choose which sections of a website can be static and which can be dynamic, so they’re great for more complex projects — or those that will become more complex with time.

**We recommend:** Gatsby.js, Next.js, Nuxt.js.<br> 

If you have a use case that isn’t covered here, don’t worry\! There are [hundreds of reliable SSGs](https://jamstack.org/generators/) available to choose from, built with a wide range of languages and with an even wider range of uses in mind. At their core, though, all SSGs have the same goal — to create static HTML pages as efficiently as possible.

## How do I bring an existing site to a static site generator?

There are a number of reliable methods to bring an existing site to a static site generator. All will include some level of customization, depending on the styling and theme you want to replicate in an SSG, but at the most basic level, you’re looking at three main steps.

1. **Extract your existing site’s content and data.** Depending on your current site setup, this might be as straightforward as copying a folder of built site files, or might require writing a migration script for your database or RSS feed.
2. **Transform your content.** Once you have your content, the next step is transforming it into formats like Markdown, which your SSG will able to read and process. There are a range of developer tools available to do this; some WordPress plugins even automate the process entirely, if you’re migrating from that platform.
3. **Create your site layouts.** Your developer may want to bring over the majority of your existing layouts, components, and styling, or they may want to build them again from scratch. There are different tradeoffs to be made with each approach, so it really comes down to your individual situation. This step is where SSG documentation comes in particularly handy. CloudCannon also has helpful guides available for all the SSGs we support.

## How do I edit a website made with a static site generator?

Using a modern static site generator is a straightforward process. Developers will often use static site generators through a command-line interface, or CLI. **For most users, however, a content management system (CMS) simplifies the process of editing content, creating pages, and adding new assets** — in short, anything you would expect to do on a website.

Using a CMS, editing content files for a static site generator is as easy as writing and styling your copy in a rich text editor — or on the webpage itself. Users can also create new pages from components (blocks of content), and upload new assets that your SSG will use to build your pages.

If you’ve used Squarespace or WordPress before, you’ll find the combination of a static site generator and the right CMS will be just as straightforward to learn and use. Once you’ve finished editing your content, or building new pages, you simply save your changes in the CMS, and the SSG will rebuild your site.

## Find the SSG and CMS that work best for you and your team

You’ll now be familiar with how static site generators work, and the kinds of sites they’re most useful for. But will you have to alter your workflows to fit into the way an SSG creates websites? Not at all.

With a CMS like [CloudCannon](https://cloudcannon.com), you and your developers can fine tune your SSG’s editing and content creation processes to integrate with the ways you and your team prefer to work. That’s the value of a CMS that is tightly integrated with the ways that SSGs work — your editing and development workflows can be as flexible as you need them to be.