---
title: Why should you use a static site generator?
description: >-
  For many developers, the draw of an SSG is that it represents the best of both
  worlds: the end-product benefits of static with the developer features of a
  dynamic system. If you’re a fan of Occam’s razor, you’ll see the appeal.
series:
permalink: /blog/why-should-you-use-a-static-site-generator/
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/ssg-race.jpg
date: 2022-03-17T05:15:00+1300
tags:
  - Resources
author: david-large
---
Static site generators appeal to many developers primarily for reasons relating to their performance. Sites can certainly be faster and more secure if they’re created with an SSG, but some of the additional reasons we love SSGs here at CloudCannon include their simplicity and elegance, as well as the control and freedom they can offer — both to developers and to content editors.

## **First things first: ‘static’ doesn’t mean ‘unchanging’**

Whereas a traditional dynamic CMS like Wordpress essentially requests, loads and formats every single HTML page each time a visitor requests it, when an SSG user updates their content, the SSG generates a static HTML-based website. These static pages and assets are served from a content delivery network (CDN), which can serve a global audience at scale at astounding speeds.

Let’s consider the difference using a metaphor. Imagine you (and everyone in your town) wants to know the answer to the same math question. You could ask one very knowledgable math professor — she’s sure to know. The only problem is that everyone else in town wants to ask her too. So you wait in line with the whole town, everyone asks the question, she thinks a little every time, and gives everyone the (same) answer. That’s a dynamic process, with a lot of server-side interaction.

But if the same professor did her mental calculation just once, and wrote her answer down, all she’d have to do is point at the answer every time someone asked. That’s our static process. We still build the site, and we can still change it whenever we need to, but every page request is pointed to a CDN instead of setting off a chain of code-database interaction and handshaking.

If you’re a fan of Occam’s razor — the principle of parsimony, a problem-solving axiom that “entities should not be multiplied beyond necessity” — you’ll see the appeal.

## The advantage of static sites

### Reduced server-side dependencies

Taking the monolithic Wordpress as our example, a typical install would require users to install, set up and manage PHP, a web server, MySQL, and the Wordpress application itself, along with any additional plugins, themes or templates. (And we’re not even *thinking* about what to do when just one of these moving parts stops working, or is no longer supported by another.)

Because an SSG generates client-side files and assets, any dependencies they might need aren’t deployed to a production server. This means that static websites don’t just stop working because, for example, someone upgraded PHP to v8.1.3 without checking that every active plugin was compatible.

### **Scalability**

Sudden traffic surges to a site are sometimes caused by Good Things — popularity, newsworthiness, or virality — but how will your site respond? Well, if you’ve ever received the message “*Error establishing a database connection*” when you’ve requested a page, you’ll be familiar with one way WordPress can react.

Because static sites are usually composed of flat files, not code and databases interacting on every page request, they’re much easier to scale to high traffic volumes.

### **Security**

Security is a valid concern for anyone building public-facing websites. Security experts talk about a ‘surface area’ for attack; even a simple login screen is famously only as secure as its weakest password. Anything that requires user input or code running on every page request adds to a site’s surface area, making it more vulnerable. To keep on top of these concerns, developers and admins have to be constantly aware, patching and upgrading elements and plugins as soon as vulnerabilities are discovered.

Now, constant security awareness isn’t a bad thing. But the overheads and time lost to upgrades — whether it’s dev time or site downtime — can be drastically reduced with a static site generator. Because SSGs just build once, and keep everything else simple, requiring little to no server-side functionality, their surface area for attacks are significantly lower.

In a world of Platonic solids, a static site is as close to a perfect sphere as a modern web developer can get — the lowest surface area-to-volume ratio possible. (It’s a weird analogy, I admit. ’Volume’, here, approximates the value of a site’s content — more is better\!)

## **What is an SSG? (And why should I use one?)**

At its core an SSG is a software package that automates the task of creating HTML pages, based on a set of templates and a source of assets and content files (usually, though not always, Markdown). SSGs are often held up as alternatives to dynamic CMSs, and that’s true for all of the advantages listed above, though without the user-friendly interface of a CMS any non-developer would have a much harder time updating a page, much less creating an entire site.

For many developers, though, the appeal of an SSG is that it represents the best of both worlds: the end-product benefits of static with the developer features of a dynamic system. With an SSG you can programmatically build static web pages, retrieve content from an external database or an API, and use layouts and includes just like on a dynamic site. You can separate content from logic, create templates and customize content beyond the confines of a database’s fields.

As to why you should use an SSG, ask yourself the following: what is the most efficient tool for your job? What will create the most visitor-friendly site? The best performing site? I’m admittedly biased, but for most use cases the best result will be a static site.

## **Which SSG will you use for your next project?**

If you’d like to make your next website faster, more secure, and more responsive, a static site generator is a great way to go. Your choice may well be determined by your preferred languages — see our [SSG comparison table](https://cloudcannon.com/community/jamstack-ecosystem/static-site-generators/) for a full rundown of many popular SSGs.

Those new to Jekyll and Hugo might appreciate our [in-depth tutorials](/tutorials/) for these popular SSGs; once you’ve built a site with either (or Next.js, SvelteKit, Eleventy, or Gatsby, for that matter), all you need to do to enable responsive and highly configurable on-page editing is to connect your repository to CloudCannon and set your data model. (But first, check out our [Developer Demo](https://cloudcannon.com/documentation/articles/learning-to-set-up-the-cms-with-the-developer-demo/) to see what all the fuss is about\!)

Find out more about [connecting your first site](https://cloudcannon.com/documentation/articles/connecting-your-first-site/?ssg=Other) over on our Documentation hub, and you’ll be well on your way to creating performant sites with an intuitive (and elegant) editing interface — without all the overhead that a monolithic CMS brings.

Or, if you’re already sold on the benefits of static site generators, why not [build and edit with CloudCannon today](https://app.cloudcannon.com/register?trial=cc_standard)?
