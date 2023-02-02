---
title: 'Does My Website Look Big in This? Six Tips to Lower your Page Weight '
description: >-
  There are some large bandwidth and data savings we can make on our static
  websites and the tools we use on them, simply by keeping bandwidth constraints
  in the forefront of our minds.
series:
image: https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/blog-page-weight-r.jpg
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
date: 2022-10-21T05:00:00+1300
hide_publish_date: false
tags:
  - Resources
author: david-large
---
Personally, the biggest drawcards to static sites over yet another WordPress install — and probably the biggest reasons I wanted to work for CloudCannon — were the promises of reducing both overall energy expenditure (in the form of both page weight and compute time) and my own over-reliance on PHP, proprietary databases, and teetering tech stacks.

## Minimal computing and \#leanweb

By the time I shifted over to \#leanweb I’d already read some convincing position statements by [Alex Gil](http://www.elotroalex.com/) and [Jentery Sayers](https://jntry.work/), focusing on what they and others call [minimal computing](https://go-dh.github.io/mincomp/thoughts/) — which their working group describes as:

> **computing done under some set of significant constraints** of hardware, software, education, network capacity, power, or other factors. … Minimal computing is also a critical movement, akin to environmentalism, asking for **balance between gains and costs** in related areas.

\[*Emphasis added.*\]

In an ideal world, we’d like all of our websites to work equally well regardless of network capacity or user knowledge — from site creation, through various edits and changes all the way to preservation, in high- and low-bandwidth scenarios, across as many devices as possible.

## What are your current constraints?

We always have constraints, of course: if it’s not time, it’s usually our own energy or enthusiasm to learn a new approach, or find the balance between costs and gains.

But I think collectively, as part of the static site community, we can address a lot of the most common constraints, or at least make significant improvements to the dynamic render-on-demand status quo:

* The barrier for entry when it comes to site creation, via a static site generator (or a CMS that assists an SSG), is lower than ever, as more developers are shifting to modern static websites. With an ecosystem of commercial and open-source tooling around the generators themselves, SSGs are becoming more accessible for non-technical users.
* Static sites, being structures of flat files, are naturally preservable, without reliance on opaque database structures or vendor lock-in. (And versioning via a [Git-based CMS](https://cloudcannon.com/git-cms/) like CloudCannon allows an easy way to track all of your site changes over time.)
* CloudCannon’s [Visual and Content Editor](https://cloudcannon.com/features/visual-editing/) views also help greatly with the editing side of things, without adding dependencies beyond a couple of configuration files.

This leaves us with one major constraint to work under: variable user bandwidth. The solution to this constraint is obvious: **lower our page weights**. How to get there, though? Well, for most developers, the journey is half the fun.

On a recent episode of [CloudCannon’s Static Feedback webinar](https://www.youtube.com/watch?v=MuAe7aZu0Nw), [Joost van der Schee](https://usecue.com) and I discussed how to apply constraints to our workflows, and what bandwidth and page weight means to the user experience in terms of speed and satisfaction. While we focused then on the almost philosophical approach of knowing the purpose of each line of code, we didn’t extend the scope of our conversation quite so much to search rankings, which depend in part on low page weights, nor the slow but pleasurable journey of fine-tuning websites, page by page and tool by tool.

Before I dive in today, it’s worth noting that I’m not advocating for all sites to be as aggressively minimalist as the [Musk Foundation](http://www.muskfoundation.org/)’s, or as transparently sustainable as [Low-tech Magazine’s self-hosted, off-grid and solar-powered site](https://solar.lowtechmagazine.com/2020/01/how-sustainable-is-a-solar-powered-website.html). There are, however, comparatively large bandwidth and data savings we can make on our websites and the tools we use on them, simply by keeping bandwidth constraints in the forefront of our minds.

## Tools for lowering your page weight

### 1\. Image and video optimization

This is one of the most impactful changes you can make to your bandwidth usage, but you’re probably always trying to balance acceptable size against acceptable quality. Where your project sits on this spectrum is up to you, but there are several tools and approaches that might help:

**Use formats like [WebP and AVIF](https://www.smashingmagazine.com/2021/09/modern-image-formats-avif-webp/)** — this is an offline solution, but deciding on an efficient modern format for your assets is an excellent first step.

**Use a service like [ImageOptim](https://imageoptim.com/)** for offline preparation of single or multiple images, once you’ve settled on your preferred image format.

**Image management tools within your SSG** —Joost gave a [HugoConf talk on resizing all images](https://www.youtube.com/watch?v=y6_v7Jc6R2I) in a Hugo project, targeting resources over a certain size and using a render hook for images within markdown content. Other SSGs will have different solutions: if you’re using Jekyll, for example, a plugin like [jekyll-image-size](https://rubygems.org/gems/jekyll-image-size) will help generate a range of image sizes for different screens, along with Open Graph link tags, img-tags, CSS, and HTML props.

### 2\. CSS optimization

If you’re hand-crafting your CSS, using only the exact classes you need, you’ll still probably find that your CSS file size grows as your site does. But it doesn’t need to grow too much — you can remove unused classes with tools like [Purge CSS](https://purgecss.com/) .

It might be a point of contention for artisanal purists, but even if you’re committed to the artisanal approach, I’d recommend extending your ‘knowledge toolkit’ to include [Tailwind CSS](https://tailwindcss.com/). It has [excellent documentation](https://tailwindcss.com/docs/), which really helps you get your head around everything it’s doing behind the scenes. Yes, its development builds are large by design, but [optimizing for production](https://v2.tailwindcss.com/docs/optimizing-for-production) tree-shakes very efficiently, to the point that most CSS files, compressed, won’t exceed 10kb. As their docs put it:

> Think of Tailwind like a giant box of LEGO — you dump it all out on the floor and build what you want to build, then when you’re done you put all the pieces you didn’t use back into the box.

Tailwind creator [Adam Wathan has written up a great article](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) on the transition from ‘traditional CSS’ to the ‘utility-first CSS’ that Tailwind enables, and while it might take a while to switch lanes, you’ll probably find that the fact that utilities offer a further set of constraints, which help to enforce consistency for team development.

### 3\. Minify your HTML and JS

When it comes to minifying HTML and JS your performance gains will likely be small, as these tools strip out unnecessary whitespace, newlines, comments, and indentation, as well as crunching variable names. You can find manual minifying tools easily enough in a basic web search; for my SSG of choice, Hugo, I’d use Hugo Pipes and [resources.Minify](https://gohugo.io/hugo-pipes/minification/) to reduce CSS, JS, JSON, HTML, SVG, and XML in one command.

### 4\. Gzipping your files

Gzip identifies repetitive strings within your files, and replaces them with a token, resulting in significant size and pageweight savings. As with minification, the result is perfectly readable for browsers, but not exactly friendly for human readers — but that’s okay, since both minification and gzipping are part of your build process. Still confused about the difference? See Chris Coyier’s [excellent article comparing the two approaches](https://css-tricks.com/the-difference-between-minification-and-gzipping/). Chris gives the example of Bootstrap’s CSS file (147KB): minified, it’s 123KB; gzipped, it’s 22KB; and with both approaches combined, it’s a mere 20KB.

### 5\. Bundling JS

JavaScript bundling merges multiple JS files together into a single file, reduce the number of page requests. Depending on your SSG, approaches for bundling will vary; Hugo uses Pipes and [resources.Concat](https://gohugo.io/hugo-pipes/bundling/), for example.

### 6\. Consider performance and additional site functions

You probably already have a set of tools you habitually turn to for additional site features, but the artisanal approach is about consciously creating new habits. Here are a few of my favorite tools, and general approaches to optimizing performance:

**Pagefind for site search** — Static search that scales incredibly well, for sites up to 100k+ pages. [Pagefind](https://pagefind.app) is built with low network requests as a primary constraint, and still manages to deliver an extremely polished performance.

**Delay loading assets** — To be sure that your images and JavaScript are only loaded when your user needs them, use the lazy [loading attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading) for your images and delay your JavaScript until the component is in the viewport.

**Inspect your sites and watch your network traffic** — Try using a tool like [web.dev/measure](https://web.dev/measure/) — it’s a great habit to be in before you publish anything. (And if you have the luxury of colleagues to double-check your optimizing strategy, it’s amazing how much of a difference it can make at this point.)

**Agree on constraints with your team —** If you develop as part of a team, one of the best ways to lower your site’s weight overall is to make sure that everyone on your team is on the same page. It’s a valuable conversation to have every few months, and it will help to shape the guidelines you all use for your own best practices.

## Page weight and sustainable web design

I recently read with great interest [the manifesto](https://dodonut.com/manifesto/#0) of a new web design agency, Dodonut. Their stated mission — their primary constraint, laid bare for the web to see — is to create a positive environmental impact, largely by reducing emissions related to the products they design. They include a persuasive carbon calculator on their [homepage](https://dodonut.com/), directly equating page weight to CO₂ emissions, and contextualizing the environmental value of removing as little as 50kb from a site with reasonable traffic.

Dodonut comes with a great pedigree, too; not an entirely new entity, it’s part of [Bejamas](https://bejamas.io/), the 2021 Jamstack Agency of the Year. So with this wealth of static development knowledge, a ready supply of assistive developer tooling, and above all the desire to reduce page weight, things are looking good for both Dodonut’s customers and the planet.

## Where should I start?

I’d start by assessing how much extraneous code you’re shipping. Look at your favorite technologies — what are you using because you’ve always used it? What do you know is inefficient, but you do it anyway?

Alternatively, you can just start minifying and gzipping where you’re not already, or looking for other easy wins. Why not start with your images. Perhaps you’ll optimize one at a time, and reduce your page weight by just 20kb. That’s still a great start\! Or maybe you’ll go all out, and aim for a *complete website* no larger than 100kb. Constraints, you’ll remember, are shifting targets we can set for ourselves on a per-project basis — we have to start somewhere, and what you regard as ‘best practice’ can and should evolve as you keep developing.

For now, we know that **excess page weight makes for a sub-optimal user experience, reduces SEO rankings, and contributes to emissions**. And with all of these factors in mind, we have a productive constraint. So let’s get creative with it.