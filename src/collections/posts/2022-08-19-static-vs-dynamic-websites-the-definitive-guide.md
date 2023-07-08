---
draft: false
_schema: default
title: 'Static vs Dynamic Websites: The Definitive Guide'
description: >-
  When it comes to making a new website, you’ve probably come across the terms
  static and dynamic. But what do they mean for you? And which approach should
  you choose? 
series:
image: https://cc-dam.imgix.net/blog/blog-static-dynamic-definitive-r.jpg
date: 2022-08-24T17:00:00Z
hide_publish_date: true
tags:
  - Resources
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
ssg_frameworks:
categories:
  - resources

---
When it comes to making a website, you’ve probably come across the terms **static** and **dynamic**. But what do they mean for you? And which approach should you choose? Let’s dig into these terms, and the specific kinds of sites they’re each suited for.

## What is static?

When we talk about a ‘static’ website, we’re not talking about how many videos and interactive elements you include, or how much movement there is on the page. We’re referring to how the website is delivered to the user.

With a static website, every page of the website is generated, or ‘built’, *before* your user even requests it. Each page of the website is an individual file that lives on the web server. When someone requests the About page, the web server looks to see if it has the About page file. If it does, it sends it to the user. It’s as simple as that.

## What is dynamic?

The other way you can deliver sites is dynamically, which is how content management systems such as WordPress, Drupal, and Squarespace work. Once more, this term refers to how the page is delivered to the user. On a dynamic site, instead of the web server sending the page itself, the web server holds code that can generate the webpage as it’s requested. When someone requests the About page of the site, the web server might run code that constructs the page layout from a theme, gets the content from the database, loads any other plugins, and returns the page to the user.

So when a user loads a dynamic site in their browser window, it may look and feel exactly the same as a static site — it’s just the method of delivery that changes. Of course, speed and security come into the picture as well; read on for more.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/static-request-vs-dynamic-request.svg" alt:"" extend:false border:false %}

**Picture** **a static site as the equivalent of a novel that’s on shelves all around the world, just waiting for you to reach out for it**. It’s already printed and bound, and it’s constructed in exactly the same manner for every single reader.

By contrast, **a dynamic site is the equivalent of a custom print-on-demand novel that passes through multiple pairs of hands to reach you — and every single time you turn a page, or set the book down and want to pick it up again, it has to be printed and pieced together once more.**

---

## What’s static delivery? Talking less, and doing more.

You’re probably familiar with the idea of your computer (or your browser) ‘talking’ to other computers — that’s a great mental model for how the internet works. But all of that ‘talking’ — the back-and-forth querying that happens every time you load a single HTML page — can take longer than it really needs to when sites are delivered dynamically.

At its core, a static site network request works like this:

**YOUR BROWSER:** Can I see this website’s homepage, please?<br>**SERVER:** Sure thing, I have that on hand. Here you go!

By contrast, a dynamic site’s network request works something like this:

**YOUR BROWSER:** Can I see this website’s homepage, please?<br>**SERVER:** Sure thing, let me prepare that for you!<br>**YOUR BROWSER:** …<br>**SERVER:** Hang on, just talking to the application server.<br>**YOUR BROWSER:** …<br>**SERVER:** Ok, loading plugins now.<br>**YOUR BROWSER:** …<br>**SERVER:** Aaand pulling data from the database.<br>**YOUR BROWSER:** …<br>**SERVER:** Just a sec, now I’m building the page for you.<br>**YOUR BROWSER:** …<br>**SERVER:** Ok, here it is.

That’s a lot more complicated, isn’t it?

Remember, page load requests can be slow, especially on mobile devices. Often, the more involved a page request is, the slower your site will be, making for a less responsive experience. (And in a user’s eyes, a less responsive website implies a less responsive business.) So it’s worth doing everything we can to optimize the way we deliver websites.

---

## The advantages of static

When we optimize for static delivery, the three primary improvements we see are gains in **performance and speed**, **security**, and **flexibility**.

### Deliver the fastest websites

Static sites are generally easier to host than dynamic ones, and they load faster for your users, meaning your search engine rankings will be higher, and your users will be happier. Why do they load faster? Simply put, because every page is already made; they're not being generated on the fly. Static websites can also be easily hosted on a content delivery network (CDN) — a network of servers that’s distributed globally, ready to serve your site and its assets (HTML pages, JavaScript files, CSS stylesheets, images, videos and everything else). This means that visitors from around the world will have a fast experience when viewing your site.

Why is speed so important? Well, according to [recent research on user behavior](https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm), **a site that loads in 1 second has a lead generation conversion rate that’s 3x higher than a site that loads in 5 seconds**. For transaction conversions, that difference slips to 2.5x higher, but the pattern is clear — the more time users spend waiting, the less they’ll spend on the site. And the scariest stat for ecommerce? **If users have to wait up to 4 seconds for a site to load, that site is likely to lose about 80% of their potential conversions**.

Because **static** **sites don’t need a database or backend to function**, there’s no server-side code or database queries to slow down the process of serving pages. You’re not waiting for every single section of a page to be assembled before you see it: you simply request the page, and you get it.

(Incidentally, the response times for sites hosted through CloudCannon are [among the fastest in the world](https://cloudcannon.com/community/jamstack-hosting-comparison/). You’re welcome.)

### Static sites work at scale

On a similar note, when demand for your website grows, it’s important to be able to respond quickly — or better yet, not have to do anything different at all. Static delivery means that your site files are immediately ready for increased demand and high traffic volumes. Because there’s no code or database interactions behind the scenes, static sites are much easier to scale without additional resources.

Delays of even a fraction of a second will increase user bounce rates, so you certainly won’t want your users to encounter long page loads, much less site downtime due to bottlenecks on the server side. Dynamic sites are complex to scale to high demand, because each moving piece needs to be monitored and scaled separately. And remember, a dynamic site is nothing if not *a lot* of moving pieces! If just one part of a dynamic stack fails (for example, an overloaded database or incorrectly provisioned server), then the whole stack collapses.

### Space for your design and creativity

Static sites don’t have to be constrained in terms of their style, or their content. There’s a great deal of creative freedom for designers and frontend developers to create stunning and responsive modern sites that truly represent their clients’ products, perspectives, and unique values.

Your static site can be every bit as modern, on-brand, and even as flashy as any other site — that’s what web designers do! And with static, you can reach and convert customers more effectively.

And because static sites are composed of the components every browser understands — HTML, CSS, and JavaScript — your developers can spend their time on the features that matter to you and to every visitor.

### Worried about security? Don’t give hackers an opportunity.

You might not be too worried about your site being hacked. But most security breaches aren’t aimed at a single business in particular — they’re aimed at specific points of entry into vulnerable tech stacks. And if you happen to still be on [an out-of-date or unpatched Drupal or WordPress site](https://en.wikipedia.org/wiki/Panama_Papers#Data_security) when a new exploit is discovered … well, I wouldn’t envy you. Regardless, you don’t want to have to take down your site because of a security risk, whether it’s aimed at you, your stack, or your users.

Even if your WordPress install itself is up-to-date and secure (no mean feat for many existing sites), every plugin you install puts the reputation and integrity of your digital presence in the hands of an external developer. Do your developers spend time running security audits for every plugin they install? How do they know a plugin is secure, every time it updates? Wouldn’t you rather avoid these concerns, and reduce your risk?

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/static-security-vs-dynamic-security.svg" alt:"" extend:false border:false %}

There are a few key reasons why static sites are more secure:

1. **There's no dynamic code running on a server that can be exploited**, because all the server is doing is sending the user pre-built HTML files. Application servers used by dynamic sites are vulnerable to third-party code and malicious requests, including code injection.
2. **Static sites are not database-driven**. While static sites can *use* databases as external data stores, the static site itself doesn’t depend on a database, meaning the critical parts of the site have less ‘surface area’ to exploit. Databases can be vulnerable if unsecured or not updated.
3. **Static sites are usually hosted on a CDN**. This means that your site can be globally distributed across multiple servers, making it more difficult to take it down and much more resilient to high demand.

### Static lowers technical barriers, and reduces maintenance

Because static sites are built with HTML, CSS, and JavaScript, and they don’t rely on more complicated frameworks or elements that need to be constantly updated, you won’t need to rely on expensive specialized developers.

Additionally, those developers you work with can be much more efficient: it’s a true win-win scenario! Development cycles for new static site features are drastically shorter than their dynamic equivalents: within a shorter timespan, developers are able to create sites that perform incredibly well, with quick load speeds, low bandwidth requirements, and optimal Google rankings.

Most importantly for your budget, static sites are easy to maintain, with no ongoing upgrades, performance tuning, or server provisioning. As a marketer or a content editor, this might not be something you’d often consider — or it might be something you’d rather not think about!

I’m sure we can agree, though, that your developers definitely don’t want the stress of tracking down exactly what caused your site to break for some users and not others, or the risk of not upgrading PHP because it would cause an essential plugin to fail.

Wouldn’t it be easier on everyone to sidestep these concerns entirely? For your developers to be able to focus on frontend work that every single user will actually see? For you to trust that your site will actually be able to handle the hundreds of thousands *or more* simultaneous users you want to get your message in front of?

(I’m sure the answer is yes.)

### Stay flexible, and take your website anywhere

If you need to switch platforms in the future, for any reason, how hard will it be? Well, **static backups and migrations are easy**, with no vendor lock-in.

With a static site, you’re always flexible. If your requirements change, you can move your website files to any hosting platform in the world. All you need is a hosting provider or CDN that’s capable of serving static files — and that’s pretty much all of them!

What this means for your business is **increased freedom** and a lower technical commitment to the services you use to build and deliver your site.

(Dynamic sites, by contrast, are simply more complicated to move. They’re more reliant on stacks of infrastructure, data centers, and the individual databases holding the code and resources needed to create their pages.)

---

## Static? Isn’t that what we did in the '90s?

It is! When the web was young(er), we hand-coded every single page, and the results were static files: the same prebuilt files served to every user. And looking back on this laborious method of making websites, it’s easy to see why dynamic websites — effectively just complicated sets of instructions that created pages on the fly for each individual user — became popular. But web development has come a long way, and static sites are now faster and more efficient to build, edit, and maintain. Thanks to modern build tools and content management systems (CMSs), we’re able to address the limitations of static sites, and amplify their benefits.

With the rapid and enthusiastic development of static site generators (SSGs; the tools we use to create our sites) over the past ten years, we’ve seen faster and faster workflows for creating and editing our websites. We can, for example, create and edit layouts and templates that make changes to all of our pages at once. We can draw upon external data sources. We can build efficiently and host our sites anywhere in the world. And with a user-first CMS like CloudCannon to help users edit their sites, legacy systems like WordPress can be a thing of the past.

---

## When should I use a static site?

Let’s begin by looking at your use case, or more precisely, what your users see. Does your site content remain relatively the same for every single user viewing it? If so, then static is a great choice for you. In essence, any website that does not rely on highly personalized content should be considered for a static approach. Use cases like marketing websites, blogs, documentation sites, and portfolios often fall into this category.

Beyond that, what’s important to you? You should choose a static website when your site’s performance (and your search ranking) is a key metric that determines your success. Static is also a smart option when you want to get the most out of a limited development budget, avoid security concerns, and remain flexible for any future hosting or development transitions.

Remember, **static sites are reliable, efficient, and stable: everything you want your website to be.** Your business itself, of course, is as free to be as exciting, dynamic, and surprising as ever.

---

## When should I use a dynamic site?

The final difference between static and dynamic use cases — aside from those performance and development differences mentioned above — is what you want your users to experience. Do you want your site to change, depending on the user? If so, dynamic is the method for you.

Dynamic websites have their place, particularly when it comes to personalizing content for specific users. If you’re building an interactive web app, then dynamic delivery is the only logical approach. Take Netflix for example, where each user’s experience is unique, and constantly affected by their actions within the application. Netflix’s fine-tuned recommendations, based on your viewing habits, are well suited to the dynamic approach to delivery, where information is flowing back and forth between user and server. But the extensive network of microsites that support and inform Netflix’s customers and partners? [That’s where they turn to static delivery](https://cloudcannon.com/customers/netflix/).

If you require your users to log in to receive a customized or unique experience where they’re served different content depending on their past actions (e.g. Facebook, Instagram, or Google Analytics), then a dynamic approach would work well for you. But each of these choices come with tradeoffs, and dynamic sites are often used in situations where static delivery would offer significant performance improvements.

---

## So who’s using static sites?

Who isn’t? Google, Netflix, Twitch, and even the US Government all choose static sites as a core part of their website offerings. Simply put, **when reliability, security, and efficiency are at the top of your mind, delivering static sites should be top of your list.**

Static sites work incredibly well for [large corporate sites](https://www.papercut.com/) that tie together multiple services and products. Because they’re fast, and deliver the same content to all users, they work for [blogs](https://blog.twitch.tv/) and [documentation sites](https://www.kubeflow.org/), where immediacy is key to both launching on deadline and reaching users.

And other use cases? Static is ideal for websites like eCommerce storefronts, blogs, portfolio sites, and small and medium businesses — those sites for whom a high Google search ranking is essential for reaching new customers, and for being more visible to existing customers.

---

## It’s time to future proof your website

Simply put, static sites remove unnecessary complications — anything that takes your developers away from building what you see on a page. Static sites worked in the 1990s, they work today, and they will work 20 years from now. You don’t need to worry about making sure you’re always using the latest version, or whether the tech stack you commit to will continue to be developed. The important thing — and where static shines — is making sure your message gets through.

When we start thinking of a website as a content delivery model — a path for information — we can see that a site’s role is simply to get your message to your readers, clients, and customers (or potential ones) as simply as possible, with as few barriers in the way as possible. And what’s an extra second to load? A barrier. What’s a lingering doubt about security? Another barrier. I could go on, but I’m sure you get the point.

Let’s pause for a second here, and return to our book publishing analogy. Imagine the structure of a book — any book. Ink on paper, bound together. That’s some cutting-edge technology, right there. And any book published thirty years ago still works today, doesn’t it? The content remains just as accessible as when it was first published; the central technology of a physical book hasn’t gone out of date. The printing press helped speed up its manufacture and delivery, but the book itself is as efficient a medium for content as you could imagine. So too with static websites — their creation and delivery speeds have been greatly improved by the development of static site generators, but the sites themselves are as performant as ever.

Sure, the contents of that book sitting on your shelf might need to be refreshed from time to time. But we can do that for our static sites, quickly and easily. From an editor’s perspective, [static sites are extremely customizable and easy to update](https://cloudcannon.com/features/visual-editing/), for even the most non-technical of non-technical users. And any change that you make is instantly reflected in every single copy of your book, on every bookshelf in the world.

That’s where a visual CMS like CloudCannon comes in. Welcome.