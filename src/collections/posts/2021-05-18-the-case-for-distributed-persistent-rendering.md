---
title: The case for Distributed Persistent Rendering
description: >-
  Let’s explore what Distributed Persistent Rendering (DPR) means for the future
  of Jamstack.
image:  https://dam-cdn.cloudcannon.com/blog/uploads/dpr-1.jpg
date: 2021-05-18T00:00:00+1200
tags:
  - Resources
author: mike-neumegen
---
As Jamstack adoption grows, we're seeing the limits of static sites put to the test. Excessive build times on large-scale sites are a hot topic and a problem that needs solving for Jamstack to become mainstream. Netlify has recently introduced a&nbsp;[feature](https://www.netlify.com/blog/2021/04/22/next.js-on-netlify-now-with-support-for-on-demand-builders-and-distributed-persistent-rendering/)&nbsp;and&nbsp;[spec](https://github.com/jamstack/jamstack.org/discussions/549)&nbsp;for Distributed Persistent Rendering (DPR). It's a hybrid approach to serving sites - a portion of pages are prerendered, the rest render on-demand to decrease the upfront build time. It's a fascinating idea that begs many questions. Are these sites static? Have we come full circle? Why not just have a dynamic site at this point?

In this article, I'd like to explore how we got here and what DPR means for the future of Jamstack.

## How we got here

It's human to strive to make something better and more useful than it was yesterday. This constant drive to improve has taken us from cave-dwelling mammals to creating a microwave that syncs with our phones. New functionality often comes with complexity, and we're continuously reinventing technology to maintain this balance. We see this in everything from cars, to phones, to the lights in our home, and we certainly see it with websites.

In the beginning, all websites were static. As the web grew in popularity, so did the size and complexity of websites. It quickly became apparent that managing large sites with pure HTML was unmaintainable. Not only that but there was also an increasing number of people who didn't know HTML, who wanted to create content for the web. To solve this, we put content in databases and used programming languages to piece together a page when it's requested. To this day, this is how the majority of websites on the internet function.

Dynamically generating website pages on the fly is powerful because it gives you ultimate control. You can run code to detect someone is from Reykjavik, Iceland, check a weather API and discover it's raining there, query your database for rain-related activities and deliver the page back to the user in seconds. With a database, you can easily have millions of content pages, which would be an impossible task to maintain on a purely static site. The problem comes with complexity. There's a whole stack of technologies that need to work together to generate a page - backend language, database, caching layer, security and SEO plugins, the list goes on. The more moving pieces, the more that can go wrong, and the broader the skill set web developers need to build websites.

The reinvention to address this complexity came in two forms: flat file CMS's and static site generators.

A flat file CMS removes the database from the stack and uses text files for content. Working with plain text files is a lower technical barrier to setting up and managing a database and removes a potential bottleneck. You still have all the other pros and cons of a dynamic system.

Static site generators (SSGs) address one of the significant downsides of a purely static website - maintainability. They have many of the features you get with a dynamic solution like layouts and includes. However, instead of running this logic on-demand, it's run in an upfront build step that generates a static site. Static sites are fast, secure, easy to scale, and straightforward, so it's easy to see why this approach has gained momentum. "Jamstack" was coined to talk about this approach without the limiting perception of the word 'static.'

As more people learn the benefits of Jamstack, so does the size of the use cases. We're seeing blogs and e-commerce sites with hundreds of thousands of pages making the jump to Jamstack. Developing a site of this scale in an SSG like Jekyll or Gatsby could result in excruciating long build times, possibly hours. Waiting an hour for a build isn't a productive way to work, so what are the options?

## Strategies for reducing Static Site Generator build times

We currently have several tools for reducing build time on SSGs:

**Build Caching**&nbsp;- Hugo has a feature called partial caching. It allows a partial (or include) to be cached, so it doesn't need to be re-rendered every time it's called. Most SSGs will have a feature similar to this. For something like navigation which doesn't change much, this can reduce the build time immensely.

**Incremental builds -**&nbsp;Many SSGs have incremental builds, which create a dependency tree of the site after a build. When a file changes, the SSG can look at the dependency tree to see which files are impacted and only rebuild those files. Fewer files to build = faster build times. This sounds like a silver bullet in theory, but doing it well is a lot harder than it sounds. There's plenty of cases that will miss regenerating a page which leads to stale content. If you touch the main layout, you're still going to have to build the entire site.

**Sharding**&nbsp;- This is the idea of splitting one logical site into multiple sites and then mounting them back together when it's served. We do this for our marketing site for CloudCannon. We have separate Jekyll sites for the main marketing pages, blog, documentation, and community which all use the same theme. Then we use&nbsp;[subpaths](https://cloudcannon.com/documentation/host/domains/#subpaths)&nbsp;to serve them as a single logical site. Updates to the community site build quickly while the blog takes a bit longer. It's a situational solution. If you have a large blog, it probably doesn't make sense to shard it.

**SSG -**&nbsp;Your choice of SSG can have a considerable impact on build time. Hugo is known for fast build speeds - there are real-world use cases of building 75k content pages in under 15 seconds. Doing this in most other SSGs will take minutes, if not hours.

## What is Distributed Persistent Rendering, and how does it work?

As mentioned earlier, Distributed Persistent Rendering is a new approach to addressing long build times on large sites. A portion of pages are prerendered, the rest render on-demand. When an on-demand page is requested, the web server runs the SSG to generate a&nbsp;**single**&nbsp;page (currently, only Nuxt and 11ty support this). Ideally, the webserver will have an aggressive cache, so only the first visit will render on-demand.

## **Why would I want to do this?**

Looking at the "Strategies for reducing SSG build times" above, it becomes apparent that all of these solutions are situational:

* Build caching works well for content that remains relatively static between pages.
* Incremental falls down if you have to touch a layout that all pages use.
* Sharding only makes sense in specific scenarios.
* While Hugo is fantastic, we can't use it for&nbsp;**everything**.

DPR is interesting because it's a less situational strategy than the other options. You're trading a shorter upfront build time for some complexity and a small overhead on the long tail of pages.

There are some caveats to be aware of with DPR. If you have time-sensitive logic like pulling from an API or outputting a date, there's no guarantee exactly when the page will build.

## **Does using DPR make a static site, dynamic?**

What is a static website? It's a surprisingly nuanced question. At one end of the spectrum, you have a purely static site. The HTML that the developer saves in their code editor is exactly the same as the HTML the browser renders. We can all agree this is a static site. But what about a SPA that requests data on load? A flat file CMS with an aggressive cache in front of it? Outputting a static website from a WordPress site?

The keyword for me is prerendering. If the webserver essentially serves files without generating anything, it's static. Anything else, you might have many of the advantages of a static, but I'm hard-pressed to call it a static site. With on-demand generation, it's a stretch to call a site using DPR a static site. It's essentially making an SSG into a flat-file dynamic site. However, it's a strategy that does a good job of maintaining the benefits of a static site:

* **Performance**&nbsp;- The first request will have overhead, but after that, it will be cached. There's nothing particularly unique about what DPR is doing here. You could do this on any dynamic site.
* **Security**&nbsp;- The only piece of information the on-demand builder needs to know is the file to generate. There's not a lot a malicious user could exploit.
* **Straightforward**&nbsp;- You don't need to build a Jamstack site with DPR in mind. It's something that happens at the hosting layer.

## How does Distributed Persistent Rendering compare with Incremental Static Regeneration?

Incremental Static Regeneration (ISR) is a way of updating a static page without rebuilding the entire site. While this definition sounds similar to DPR, there's a subtle difference. ISR is a stale-while-revalidate caching strategy. It will serve stale content while generating the page in the background. The advantage of this is you don't have a slower response on the first request to a page—the disadvantage predictability. If I update a page, I can't guarantee when that content will be live on the website.

## **What DPR means for Visual Jamstack CMSs**

This is a technology that's particularly interesting for CloudCannon as a visual CMS for Jamstack sites. When users update website content on CloudCannon, they have to wait for their entire site to build before making another change. With this technology, we can significantly reduce the waiting time by rebuilding an individual page.

We hope more SSGs jump on to support DPR. Kudos to Netlify for making an&nbsp;[open spec](https://github.com/jamstack/jamstack.org/discussions/549)&nbsp;we can all build on.
