---
draft: false
title: Jamstack vs. WordPress - reasons to make the change
description: >-
  WordPress and Jamstack can be used for the same purposes. If you’re reading
  this, you’re probably curious or even on the fence about switching.
date: 2021-05-26T03:00:00+1200
tags:
  - Resources
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
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
image: https://cc-dam.imgix.net/blog/uploads/two-developers.jpg
---

## What are Jamstack and WordPress?

When comparing “Jamstack” and “WordPress”, it’s important to acknowledge that this is not an apples-to-apples comparison. 

Jamstack is a development philosophy. It’s a design architecture for web projects that aims to be fast, secure, and easy to scale, putting great emphasis on developer experience. Jamstack started gaining traction as a new way to build the web around 2015, with Jekyll as the first popular static site generator. The term “Jamstack” itself was coined in 2016 to better reflect the not-so-static nature of this architecture when used with modern tooling. By design, Jamstack is modular and only needs a CDN to serve static files.

WordPress is an entire software platform. It’s an all-in-one solution to build websites that started as a blogging platform in 2003. At its core, it’s a CMS, but with its vast ecosystem of plugins and a thriving community, it’s much more than just a CMS. Different studies currently estimate that between 35% and 40% of all websites are powered by WordPress. By design, WordPress is monolithic and needs a LAMP server to run.

WordPress and Jamstack can be used for the same purposes. If you’re reading this, you’re probably curious or even on the fence about switching.

We’ll try to outline as objectively as possible why you should consider Jamstack.

## Who uses Jamstack?

Jamstack remains especially popular with developers more than anyone else. But it powers much more than personal projects and blogs. Many companies, including big international brands, build not only informational and marketing sites with Jamstack, but also full blown e-commerce solutions. Take a look at the [Jekyll](https://jekyllrb.com/showcase/), [Hugo](https://gohugo.io/showcase/), and [NextJS](https://nextjs.org/showcase) showcases for just some of the examples, or get inspired [our own showcases](https://cloudcannon.com/community/showcases/).

The possibilities are constantly increasing thanks to a growing community and an ever-expanding number of enterprise-grade APIs available.

## WordPress’ weak points

 

![](https://cc-dam.imgix.net/blog/uploads/wordpress-issues-1.png)

WordPress remains immensely popular, mostly because it allows non-technical people to launch websites without developers. But in this specific niche, those without technical know-how or the budget for developers, other solutions like Wix, SquareSpace, and Shopify are rapidly [gaining ground](https://kinsta.com/wordpress-market-share/). 

The most frequent problems for WordPress users surround security, speed, UI and the complications inherent to monolithic architecture.

### Security issues

WordPress sites are a favorite target for hackers. Long gone are the days when the admin username and password would default to “admin” and “admin”, but WordPress security remains an ongoing battle for 2 reasons:

1. Should hackers find a vulnerability, there are millions of sites to infect. On this point, WordPress is simply a victim of its success.
2. There is actually something to hack. WordPress runs server-side logic, so getting control of a WordPress server, especially a powerful one, is very interesting to hackers. Not only is there a CPU to take over, but there is also a database that can contain lots of juicy information.

Of course, WordPress *can* be secure, but the attack surface is inherently large. Not only do you need to update the server itself, but every plugin can be a vulnerability. It’s just one more thing to think about. Constantly.

### Speed, and the effort required to get it 

While WordPress can be made very fast, it’s far from a given. There are many ways to optimize WordPress: lightweight themes, reducing plugins, a better hosting platform. There are even ways to deploy cached versions of your pages to a CDN. But as we all know, there are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.

Much like security, speed is an ongoing battle for owners of WordPress sites. And it is only getting tougher as users add more content, plugins, and functionalities. Speed issues can also come from a nice-to-have problem: lots of traffic.

### Scaling issues

Quoting from Stack Exchange’s WordPress [community](https://wordpress.stackexchange.com/a/1167)\:

“Nothing scales as well as static files served by a fast web server.”

 Sadly, that is not what WordPress defaults to. Quoting from the same page: 

“Don't expect much from shared hosting–don't blame WordPress for slowness if you're on a shared host. Shared hosts might cram 1000s of accounts into one server. So you can spend all day optimizing a $10/month account and it won't matter.”

Scaling is not a problem for smaller websites. But should you ever start generating serious traffic, scaling might be hard, expensive or both.

### A complicated user interface

The WordPress UI has one big advantage: a lot of people have seen it before, so it feels familiar to many clients. But, besides this undeniable advantage, the admin panel is objectively cluttered and confusing to many non-technical folks (and some technical ones too).

When clients log in, they should be able to focus on content creation without distractions like  warnings about the need to update their PHP version and 3 different plugins.

### A sub-optimal developer experience

Developing with WordPress can be a bit frustrating.

* Everything lives in one place; the website’s code, database and server are all dependent on one another. This makes separation of concerns difficult.
* Plugins don’t always play nice with one another.
* Setting up a local development environment can be tricky, leading too many people to work in production-only setups.
* There is a lack of consensus around Git usage. 

Quoting Chris Coyier from [CSS-Tricks](https://css-tricks.com/wordpress-and-jamstack/)\:

“What should go in Git? To this day, I don’t really know, but I’ve largely settled on the entire /wp-content folder. It feels weird to me there is no guidance or obvious best practices. It can be a bit of a headache.”

It seems weird that Git, which is ubiquitous in modern software development, has such an unimportant place in the WordPress world. Perhaps this is due to WordPress being 2 years older than Git. WordPress itself uses SubVersion for version control.

## How Jamstack solves WordPress’ problems

 

![](https://cc-dam.imgix.net/blog/uploads/jamstack-benefits-1.png)

### Speed - static files that require no processing

It’s been said over and over again: **performance matters**. Amazon famously reported that every [100ms of latency](https://www.gigaspaces.com/blog/amazon-found-every-100ms-of-latency-cost-them-1-in-sales/) cost them 1% in sales. Google reported equally dramatic research: 53% of mobile users leave a site that takes longer than [3 seconds to load](https://www.thinkwithgoogle.com/intl/en-ca/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/#:~:text=Yet%2053%25%20of%20visits%20are,than%20three%20seconds%20to%20load.&amp;text=That's%20a%20big%20problem.,their%20cart%20and%20move%20on). 

A fast website matters now more than ever. People just don’t have much patience, even when they’re browsing from a mobile device on the go.

Well, performance happens to be one of the core precepts of Jamstack, not an afterthought. Of course, a Jamstack site *can* be slow; a site containing dozens of images over 10MB each and will be slow regardless of architecture. But doing it right is easier because the hardest parts, like serving static files from a CDN and scaling, become the default rather than something tricky. So you can focus on making a speedy front-end.

WordPress simply has more complexity, which requires more effort to optimize, whereas Jamstack is pre-optimized and easy to improve on. Think of a complex gas-run car vs. the instant acceleration of an electric car.

### Security - a dramatically reduced attack surface

No system is 100% safe from attacks. But attacking a static site is a bit like punching water. 

Typical attacks won’t work because they require the server to run some code. If the server is a CDN serving only static files, there’s little that can happen. Sure, hackers can try to overload a CDN, but defeating one node means almost nothing in a distributed, global network. Taking down an entire CDN is no easy task. Even if this does happen, it’s not a hard task to upload static files to another CDN and change the DNS.

But Jamstack sites can be more than static files on a CDN. Lots of APIs can be at play, and even serverless functions.

APIs can be compromised, but fortunately, **your** responsibility is normally reduced to keeping your private keys safe. The rest is taken care of by API providers. Also, if one of your API providers does get compromised, it only affects that one API.

Serverless functions can also be hacked. But, they tend to run for a maximum of 10 seconds, so taking control of one is nowhere near as attractive as taking control of an actual server. 

This isn’t to say that you should write serverless functions without thinking about security at all. Security is an **absolute must** if you’re using serverless for payment processing or authentication. But security should be easy since a serverless function is just that, a function. A few isolated functions are much easier to maintain than a single server containing all those functions, a database, and more.

### Developer experience - flexibility and a Git-centric workflow

Using Jamstack means using the tools and languages your team loves, not being bound to the LAMP stack. It’s also using Git to its full capabilities. Make a new branch for a new feature, deploy that branch for parallel testing, rollback if needed. Everything, or nothing, can live in Git - it’s flexible.

### SEO - ace the speed ranking factor

Performance increasingly matters for SEO. Google first announced in 2010, site speed was a [ranking factor](https://developers.google.com/search/blog/2010/04/using-site-speed-in-web-search-ranking). In 2018, they announced page speed would be even more important for [mobile search](https://developers.google.com/search/blog/2018/01/using-page-speed-in-mobile-search). In 2020, they announced that a [major update](https://developers.google.com/search/blog/2020/11/timing-for-page-experience) rolling out in 2021 will put more focus on “page experience signals”, also known as Core Web Vitals, where speed is central. (It affects Largest Contentful Paint, First Input Delay, and Cumulative Layout Shifts.)

Google puts increasing emphasis on page speed as a ranking factor because it’s important for user experience. We already made the point that Jamstack architecture makes high performance easier to achieve. This makes high SEO performance easier to achieve, too.

### Costs - minimal infrastructure and processing

Whether you’re serving a thousand or a million requests per month, hosting static files is cheaper than a server running PHP 24/7. Higher traffic means higher costs. Even if your Jamstack site uses multiple APIs and serverless functions, you’ll only pay for what you use. No more paying for 16GB of RAM all the time because it’s needed once a week.

### Simple is beautiful

The Jamstack philosophy may feel like a return to the basics; serving static files is how the web started, after all. Dynamically rendering websites were revolutionary for the web, but now we’re going backwards?

A return to simplicity can be a good thing. Complex solutions are not necessarily the most elegant. If your landing page is different for every user on every request, a dynamic solution probably makes sense. But if your landing page contains the same information for the remainder of the year, what purpose do a database and backend code serve?

WordPress is nice because it allows you to do so much out of the box, and even more with plugins. But it still leaves you a lot to manage:

* Dealing with SSL certificates
* Caching
* Setting up file permissions
* Configuring a CDN
* Constantly keeping an eye on security

The beauty of working with Jamstack is that you only need to implement complex solutions when required.

## How CloudCannon and Jamstack work together

 

![](https://cc-dam.imgix.net/blog/uploads/untitled-artwork-2.png)

There is no such thing as a silver bullet. Jamstack isn’t a catch-all solution. For example, you will lack a CMS and hosting, need to re-generate your site manually, and work out architecture and optimization best practices.

Fortunately, these are reasons why CloudCannon was started, realizing the great potential of Jekyll and other static site generators for a better, leaner web - but also recognizing that WordPress is famously easy to use. We are also continuously working on support for popular static site generators for greater flexibility and choice.

Setup is simple with email or existing [GitHub](https://docs.github.com/en/github/getting-started-with-github), [GitLab](https://docs.gitlab.com/ee/intro/), or [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-cloud/) accounts. Then it’s simply a matter of connecting existing site repositories, or selecting from our free themes for blogs, e-commerce, and more. 

Your site automatically gains access to powerful features that can be difficult for both Jamstack and WordPress:

* Global testing domains, SSL, and a world-class CDN
* Secure environments for code, without fear of vulnerability
* Automated builds, optimization, and instant cache invalidation
* Two-way Git syncing

The CMS itself also makes life easy for both developers and editors, without the complicated interface:

* Secure form submission through HTML
* Real-time editing previews
* Sharing with clients and teams
* Site and page authentication
* Advanced options for hosting, builds, and internationalization

With CloudCannon and Jamstack, your site is future-proofed for speed, security, and scale, while remaining easy to edit and use. Dive into our [learning](https://learn.cloudcannon.com/) tutorials and check out the [docs](http://docs.cloudcannon.com), so you can start creating your next website with CloudCannon. 
