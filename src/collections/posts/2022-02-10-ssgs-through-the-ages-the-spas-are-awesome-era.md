---
title: The 'SPAs are awesome' era
description: >-
  The fourth part of an ongoing series: the 'SPAs are awesome' period of static
  site generators saw a proliferation of companies developing single-page
  applications.
series:
  - SSGs through the ages
permalink: /blog/ssg-history-4-spas-are-awesome/
image: /uploads/explorer-4.png
date: 2022-02-10T05:00:00.000Z
tags:
  - Resources
author: mike-neumegen
---
In the early 2010s —&nbsp;[while Jekyll was being reinvented](/blog/ssg-history-3-reinvention/) — web browsers were becoming ever more capable, spurring a proliferation of companies developing single-page applications. However, building single-page web applications required a level of shared data consistency that the most popular JavaScript framework at the time, JQuery, was not equipped to handle. We saw a number of frameworks tackle this problem, including [Backbone](https://backbonejs.org/){: target="_blank" rel="noopener noreferrer"}, [Ember](https://emberjs.com/){: target="_blank" rel="noopener noreferrer"}, [Knockout](https://knockoutjs.com/index.html){: target="_blank" rel="noopener noreferrer"}, and most popular, [AngularJs](https://angularjs.org/){: target="_blank" rel="noopener noreferrer"}. These frameworks provided a structure for creating large applications.

Adding your own event handlers and manually manipulating the Document Object Model (DOM) is error-prone and slow. It also makes it difficult to reuse views. In 2013, React was released by [Jordan Walke](https://github.com/jordwalke){: target="_blank" rel="noopener noreferrer"} at Facebook and offered a completely new way of thinking about the view layer. Instead of having to manipulate the DOM directly to get to your desired state, React takes a declarative approach. You tell React what state you want the UI to be in, and it works out the details. React handles the events and performs the time-consuming DOM manipulations on a virtual DOM, which is significantly faster as it only updates the objects that have changed on the real DOM.

Around the same time, [Evan You](https://github.com/yyx990803){: target="_blank" rel="noopener noreferrer"} was using AngularJs on some internal projects at Google. He like parts of AngularJs but felt it was too heavyweight for his projects. Evan set out to build a lightweight version of the framework which he released in 2014, under the name Vue.js.

Both React and Vue.js surged in popularity in the mid 2010s. Developers in the SSG community were working out how to integrate these technologies with their existing static site. A new wave of tooling arrived soon after this, which made these new JavaScript frameworks first-class citizens of the static site generator world.

![Gatsby logo sitting at year 2015](https://dam-cdn.cloudcannon.com/gatsby-timeline.svg){: width="600" height="77"}

## **[Gatsby.js](https://www.gatsbyjs.com/){: target="_blank" rel="noopener noreferrer"}**&nbsp;

*by&nbsp;[Kyle Mathews](https://github.com/KyleAMathews){: target="_blank" rel="noopener noreferrer"}*

The release of Gatsby.js started a seismic shift with regards to what an SSG could be. Until now, SSGs had mainly focused on building HTML from source files. Kyle Mathew's vision was to flip this on its head. He thought of it as pulling content rather than pushing:

> when you start working on more complex sites, you really start to miss the flexibility of building a database-driven site. With a database, all your data is available to query against in any fashion that you'd like. Whatever bits of data you need to assemble a page, you can&nbsp;*pull*&nbsp;in. You want to create author pages showing their bio & last 5 posts? It's just a query away.

Gatsby.js completely streamlined sourcing content and data from anywhere: it could be from a static file (like existing SSGs), your database, your CMS, or somewhere else. All this data is available through a GraphQL interface, making it easy to interact with content from multiple sources.

React was already the go-to tool for developers in product development due to its flexibility, simplicity, and ability to power even the largest web products. Gatsby.js capitalized on this popularity and enabled React developers to bring their knowledge and components to informational websites.

Gatsby.js was also the first SSG to blur the line between static and dynamic websites by supporting single-page applications (SPAs) as first-class citizens. It gives developers the best of the static and dynamic:

1. Gatsby.js builds an entirely static website.
2. When a client loads a page, React hydrates the page enabling dynamic interactions.

The developer doesn't need to build these experiences individually. Everything is created from React components.

The idea for Gatsby.js came to Kyle while he was working on his previous start-up, RelateRocket. On the marketing website, he stated that he "wanted to avoid using anything other than React.js." By 2018, Gatsby.js already had over 10k stars on GitHub (Jekyll had around 30k simultaneously but with a much lower trajectory). With this momentum, Kyle teamed up with&nbsp;[Sam Bhagwat](https://github.com/calcsam){: target="_blank" rel="noopener noreferrer"}&nbsp;to form Gatsby Inc., a venture-backed company focused on building cloud infrastructure to push Gatsby.js even further.

Gatsby.js made a monumental change in how we think about SSGs and added a great deal of legitimacy to the space. It currently powers the websites for well-known brands such as&nbsp;[Figma](https://www.figma.com/){: target="_blank" rel="noopener noreferrer"},&nbsp;[Digital Ocean](https://www.digitalocean.com/){: target="_blank" rel="noopener noreferrer"},&nbsp;[Impossible](https://impossiblefoods.com/){: target="_blank" rel="noopener noreferrer"}, and&nbsp;[National Geographic](https://www.nationalgeographic.co.uk/){: target="_blank" rel="noopener noreferrer"}.

[*Get started with Gatsby.js on CloudCannon*](https://app.cloudcannon.com/register?trial=cc_standard).

![Next.js logo at year 2016](https://dam-cdn.cloudcannon.com/next-timeline.svg){: width="600" height="77"}

## **[Next.js](https://nextjs.org/){: target="_blank" rel="noopener noreferrer"}**&nbsp;

*by&nbsp;[Guillermo Rauch](https://github.com/rauchg){: target="_blank" rel="noopener noreferrer"}*

Guillermo and his company Ziet (now&nbsp;[Vercel](https://vercel.com/){: target="_blank" rel="noopener noreferrer"}) had "been pursuing a vision of universal JavaScript applications." In other words: a way to develop websites and web applications using JavaScript to run in both the frontend and backend. This idea is also known as isomorphic JavaScript and was first popularized by the&nbsp;[Meteor](https://www.meteor.com/){: target="_blank" rel="noopener noreferrer"}&nbsp;framework in 2011. Next.js is Vercel's take on this vision.

Next.js started with six principles in mind:

1. Zero setup. Use the filesystem as an API — Automatically route files in the pages directory. For example, pages/about.js maps to /about.
2. Only JavaScript. Everything is a function — Every route in Next.js is a function or extension of&nbsp;*React.Component*. Doing this keeps everything modular, flexible, and highly testable.
3. Automatic server rendering and code splitting — Every component inside&nbsp;*`pages/`* gets server-rendered automatically and their scripts inlined. Each page has its own set of dependencies that don't impact the performance of the rest of the site.
4. Data fetching is up to the developer — Fetching data is unopinionated and straightforward, giving the developer complete flexibility to work with any API implementation.
5. Anticipation is the key to performance — In Next.js, "if you navigate around, odds are that by the time you follow a link or trigger a route transition, the component has already been fetched."
6. Simple deployment — Running Next.js is a two-step process: first a build step, and then starting it. Deploying to Vercel can be done with a single command.

Next.js isn't just a static site generator. It's a hybrid framework, meaning it blends server-side generated pages with static pages. You also have the option to run&nbsp;*`next export`*&nbsp;to create a purely static website that doesn't need the Next server to run.

Within six months of launching, Next.js had already amassed 10k stars on GitHub. Along with Gatsby.js, Next.js was embraced by the fast-growing React community, which further fuelled its popularity. The hybrid approach meant that Next.js could power websites that wouldn't be feasible with a purely static approach, for example:

* Content-rich websites — Most SSGs will have an excruciatingly long build time on a website with 100k+ pages. With server-side rendering, these pages render on demand, meaning no upfront build time.
* E-commerce — Large e-commerce stores typically rely on search and filtering to help customers find what they're looking for. They also highly value SEO to bring customers inbound. Ticking these boxes is difficult for a static website, particularly when there are millions of products. Again, server-side rendering gives the developer more flexibility to handle sites of this scale flawlessly.

Next.js is currently the world's most popular static site generator, due to its excellent developer experience, flexibility, and ability to work it a wide range of use-cases. It powers the websites for world-leading brands such as&nbsp;[Ticketmaster](https://www.ticketmaster.com/){: target="_blank" rel="noopener noreferrer"},&nbsp;[Realtor.co](https://www.realtor.com/){: target="_blank" rel="noopener noreferrer"},&nbsp;[AT&T](https://www.att.com/){: target="_blank" rel="noopener noreferrer"}, and&nbsp;[Tiktok](https://www.tiktok.com/){: target="_blank" rel="noreferrer noopener"}.

[*Get started with Next.js on CloudCannon.*](https://app.cloudcannon.com/register?trial=cc_standard)

![Nuxt logo sitting at year 2016](https://dam-cdn.cloudcannon.com/nuxt-timeline.svg){: width="600" height="77"}

## **[Nuxt.js](https://nuxtjs.org/){: target="_blank" rel="noreferrer noopener"}**&nbsp;

by&nbsp;[Alexandre Chopin](https://github.com/alexchopin/){: target="_blank" rel="noopener noreferrer"}&nbsp;&&nbsp;[Sébastien Chopin](https://github.com/Atinux){: target="_blank" rel="noopener noreferrer"}

Much like the many SSGs taking direct inspiration from Jekyll, Nuxt.js started as a Vue.js alternative to Next.js:

> The 25th of October 2016, the team behind&nbsp;[zeit.co](https://web.archive.org/web/20180623121740mp_/https://zeit.co/){: target="_blank" rel="noopener noreferrer"}, announced&nbsp;[Next.js](https://web.archive.org/web/20180623121740mp_/https://zeit.co/blog/next){: target="_blank" rel="noopener noreferrer"}, a framework for server-rendered React applications. A few hours after the announcement, the idea of creating server-rendered&nbsp;[Vue.js](https://web.archive.org/web/20180623121740mp_/https://vuejs.org){: target="_blank" rel="noopener noreferrer"}&nbsp;applications the same way as Next.js was obvious:&nbsp;**Nuxt.js**&nbsp;was born.

Just like Next.js, Nuxt is a hybrid framework giving developers the ability to serve and deploy websites using server-side rendering (SSR), single-page apps (SPAs), or use static site generation (SSG) to build an entirely static website.

Vue.js had an answer for Next.js, propelling the rapid growth and adoption of Nuxt. To ensure the continued success and growth of Nuxt.js, Alexandre & Sébastien Chopin formed the commercial entity NuxtLabs and promptly raised $2M "to build a team of Nuxt experts working full time on Open Source and business solutions around it."

Nuxt.js powers the websites for well-known brands such as&nbsp;[Upwork](https://www.upwork.com/){: target="_blank" rel="noopener noreferrer"},&nbsp;[design.gitlab.com](https://design.gitlab.com/){: target="_blank" rel="noopener noreferrer"},&nbsp;[Ecosia](https://www.ecosia.org/){: target="_blank" rel="noopener noreferrer"}, and even Nintendo's&nbsp;[Paper Mario](https://papermario.nintendo.com/){: target="_blank" rel="noopener noreferrer"}.

---

Complexity tends to lead to further complexity, though as we see in the SPA era, there are layers within layers — even within the SPA space, players like Nuxt.js saw the advantages of lightweight tooling.

My next major focus in this series emphasizes what I see as a shift back to simpler times — and what could be simpler than HTML templates with Markdown content?