---
_schema: default
title: Planning for your next Hugo project
breadcrumb_title:
description: Tips and guiding principles for building a new website with Hugo.
draft: false
series:
image: https://cc-dam.imgix.net/blog/hugo-speed2-min_dcvugy.png
date: 2022-02-25T05:00:00+13:00
hide_publish_date: false
tags:
  - Resources
  - Hugo
author: 7abe9500-0933-48af-9130-87389dc36c9b
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
  - hugo
categories:
  - resources
templateEngineOverride: md
---
There’s plenty to be said for stuff that *just works*, and the [Hugo](https://gohugo.io/) static site generator (SSG) is a perfect exemplar of that well-worn descriptor. When you’re building a new website for a client, Hugo should be one of the first tools you pull from your bag.

This is because Hugo, like many other SSGs, creates sites with all the winning elements of the [Jamstack](https://cloudcannon.com/jamstack/) formula: top-of-the-line security over which your clients won’t have to fret, tremendous client-side performance that will enhance their SEO efforts, and minimal use of hosting resources which could otherwise cost them plenty.

But, compared to those other entrants in the [growing list of SSGs](https://jamstack.org/generators/), Hugo has a major ace up its sleeve. You see, the thing you hear most about Hugo is no exaggeration: Hugo really *is* the fastest way to generate a website. This SSG can easily churn out hundreds of web pages in *under a second* on each build. That titanic velocity is possible because Hugo itself is built with the [Go language](https://golang.org/). And, since every content change on an SSG-built site generates a new build, even in development, both you and your client will find that single Hugo advantage a compelling one.

Better yet, Hugo’s a single, self-contained binary — an app, if you will. As a result, it’s possible that neither you nor your client will need to worry about constantly updating various software dependencies, contrary to what’s necessary when you use most other SSGs. All of Hugo’s dependencies are baked in from the get-go, as are a wide array of capabilities that require *no* plugins or add-ons.

That said, as with all website projects, it’s a good idea to set down a few guiding principles before you get started building a site with Hugo. So let’s discuss a few. What follows is not, nor do I pretend that it is, an exhaustive list. Rather, it’s a collection of tips that come to mind as a result of my personal experience with Hugo over the last few years.

## Make maximum use of defaults

Hugo is built from the ground up to make website content management easy, even surprisingly automatic. In fact, that’s one of the many reasons it’s such a great fit for CloudCannon. But, regardless of whether CloudCannon is in the mix for any Hugo project you’re doing, you can save much time and effort by knowing, and using as many as possible, of Hugo’s default settings and features. Here are just a few:

### Lookup order

It’s important to know where Hugo expects to find things, so you’ll want to learn its [lookup order](https://gohugo.io/templates/lookup-order/) pretty early. The good thing is that it’s quite logical and, thus, soon grasped: for example, content goes in `/content` and layout templates go in `/layouts`. It gets more extensive than that, but it won’t take you long to get a feel for it.

### Asset directory

Speaking of the lookup order, Hugo’s built-in asset pipeline, [Hugo Pipes,](https://gohugo.io/hugo-pipes/) can process applicable items only if they’re in the [asset directory](https://gohugo.io/hugo-pipes/introduction/#asset-directory) for the project (or theme, about which more shortly). Of course, they can be in subdirectories *within* it. Let’s say your asset directory is the project’s top-level `/assets` directory. If so, Hugo Pipes can work with the contents of, *e.g.*, `/assets/images`, `/assets/scss`, and so on.

### Archetypes

If your clients will be creating new content with the `hugo new` [command](https://gohugo.io/commands/hugo_new/), a specific [archetype](https://gohugo.io/content-management/archetypes/) template file will automatically provide a new content file with the minimally acceptable content, including front matter, saving the content creator from having to start totally from scratch each time.

It’s not a one-size-fits-all situation, either: you can set up different archetypes to conform to how and where the content will be created.

### Themes

Although the site often can be just fine with only one set of layouts and styling, there can be various reasons to keep multiple such *themes* in a project. (For example, I have done so whenever I wanted to switch back and forth between two different CSS styling methods for testing purposes while otherwise keeping everything the same.) Hugo makes this easy.

Of course, *building* multiple themes obviously requires more work on your part — although you may be able to copy and paste much more than you think, especially where the underlying code “guts” are concerned. However, the actual switching between or among themes is as simple and quick as changing a one-line setting in the site-wide configuration file. Then, the aforementioned lookup order tells Hugo where to find the theme’s directories and files.

Oh, and while we’re on the subject of themes: you’ll be glad to know they also can help you deal with what may be Hugo’s proverbial elephant in the room. That’s our next topic.

## Get comfortable with Go

Templating in Hugo is a mixture of HTML and the Go language, on which Hugo depends. If your chief coding experience is with languages besides Go, you’ll want a bit of ramp-up to start templating in Hugo. Fortunately, there’s an easy way to do that — and your client can even help you! Because there are [so many available themes](https://themes.gohugo.io/) for Hugo, it’s likely you and your client will find a few that look and/or work at least somewhat like the targeted website layout and design you have in mind.

Pick as many such themes as you can, and dig into their code to see how others did what you’re considering. Then, back up your findings with what you can find in the extensive [Hugo documentation](https://gohugo.io/documentation/) and the [Hugo Discourse forum](https://discourse.gohugo.io/). This is the process through which I learned — and continue to learn — Hugo. The same doubtless is true for many other Hugo users. (Of course, if by some chance you and your clients find an external theme that’s already perfect for the project except for a few no-brainer edits, you’re basically home free! Just don’t expect to get that lucky. It happens, but don’t bet on it.)

Remember, too, that Hugo has been around for nearly a decade and, thus, its workings have been thoroughly explored by many bloggers, [Stack Overflow](https://stackoverflow.com/), and [Reddit](https://www.reddit.com/r/gohugo/). It’s highly likely that a diligent search for *how to do \[x\] in Hugo* will reward you with an answer *and* a valuable jump on handling similar questions in the future.

Incidentally, here’s one seemingly trivial yet surprisingly helpful tip for anyone coming to Hugo from, say, a JavaScript-based SSG. It’s something that would be apparent in most themes you’ll find, yet something you can easily overlook. While most SSGs use the `=` operator for both initializing a variable and assigning or re-assigning its value, Hugo uses Go’s `:=` operator for only initializing a variable and limits `=` to re-assigning the variable’s value. (The `{{/*</code> and <code>*/}}` below indicate Go-style commenting in Hugo, much as `/*` and `*/` do in most other SSGs.)

```go
{{/*
Correct use of `:=` to initialize $variableOne:
*/}}

$variableOne := 1

{{/*
...and correct use of `=` to reassign its value:
*/}}

$variableOne = 123

{{/*
...**but** this use of `:=` is incorrect because you've **already** initialized $variableOne:
*/}}

$variableOne := 456

{{/*
...while this use of `=` is incorrect for **initializing** this **second** variable:
*/}}

$variableTwo = 2
```

As I said, it seems trivial, but you’d be surprised by how much debugging you’ll spare yourself by knowing that one little thing before you start working with Hugo templating!

## Stay out of that train’s way

You might wonder how you can speed up your build time with Hugo. The main thing I can say on that front is: *try to avoid slowing Hugo down*. So, as you build a Hugo project, consider these examples of that approach.

### Be smart about styling

When styling your templates, take advantage of Hugo’s <a target="_blank" rel="noopener" href="https://gohugo.io/hugo-pipes/transform-to-css/">built-in</a> support for [Sass](https://sass-lang.com/). Since all valid CSS works in Sass, you can start with “vanilla” CSS and enable Sass’s capabilities as you learn about them. Sass is proven, feature-packed, and lovingly maintained. The stability and non-fussiness of a Hugo installation will be ably complemented by the solidity of Sass.

Moreover, the likely alternatives, such as JavaScript-based frameworks like Tailwind CSS and Windi CSS, can add a few seconds to each build *and* require management of an ever-changing set of software dependencies.

(By the way: when installing the Hugo binary, be aware that only its *extended* version supports Sass. I recommend always installing the extended version, regardless of your current styling choice, just in case you decide to go with Sass later on.)

### Decide the best way to handle images

Work out a strategy for how the site will have responsive images, so your clients’ visitors will have the best possible experience, regardless of their respective devices’ screen sizes or connectivity.

You’ll need to consider how many images are involved or will be involved over time. Although another built-in Hugo capability is [image processing](https://gohugo.io/content-management/image-processing/), and Hugo can do it remarkably quickly (of course), the processing of each additional image — and its various iterations as you perform responsive image handling — will lengthen each build. So run some tests, adding various Hugo image transformations on multiple images, to get a feel for any build-performance penalties that may gradually come into play.

Furthermore, with the images residing in the project repository, this eventually could run up against a remote repository’s file storage limits. Some have made Hugo work with Git’s Large File Storage functionality as at least a partial workaround, but large sites and growing asset libraries cause increasingly degraded performance during development, as well as longer build and deployment times.

In the end, you and your client may even wish to consider storing the site’s images on a separate image processing/delivery service and simply “call” the images through URLs provided by the service. In the coming weeks we’ll see CloudCannon introduce digital asset management (DAM) support — most services of this type offer free tiers, so you and your clients could experiment with this method without having to make any final choices.

## Hook up with a great host

If your clients don’t already have a web host in mind, make them aware of the difference between “traditional” hosts and the Jamstack-savvy hosts, the latter of which obviously are where you’d steer them for any SSG-based site.

A Jamstack-savvy host like CloudCannon links directly to a project’s remote repository and automatically rebuilds the project’s website every time there’s a push to the repo’s designated main branch. This ensures a smooth workflow for both your development efforts and the clients’ use of the site.

On each site rebuild, the host puts the resulting content out on the “[edge](https://cloudcannon.com/features/edge-hosting/)” — namely, a global content delivery network (CDN) — helping to boost the visitors’ perceived experience with the site, regardless of where those folks may be. Not all CDNs are equal, mind you; some have very few worldwide points of presence (PoPs), which makes them less effective for some visitors.

Fortunately, a CloudCannon-based site lives on a roaring fast CDN with *hundreds* of worldwide PoPs, far more than nearly all of its rivals. That’s just one of the many key advantages of using CloudCannon with your SSG of choice.

## Stay current

Subscribe to Hugo’s [“Releases” page on GitHub](https://github.com/gohugoio/hugo/releases) so you can keep up with Hugo updates. While many of these changes are only incremental and, thus, unlikely to merit your attention regarding an existing Hugo site, there sometimes will be a new feature which can be of great use to you and your clients. One such example was a December, 2021, release [adding the ability to fetch remote resources](https://github.com/gohugoio/hugo/releases/tag/v0.90.0) so Hugo could process them just as if they were local to the project repository.

Earlier, we discussed the hosting of a Hugo-based site. That brings up another way that “Releases” page will come in handy. At build time, each host loads a default Hugo version, which almost certainly isn’t the same version your project is using. Thus, you must set the desired version in a host-level environment variable, usually with the *key* of `HUGO_VERSION`. When setting the *value* for the variable, be sure to use the full version number; *e.g.*, make it `0.90.0` rather than just `0.90`. To confirm the correct version number, refer to the “Releases” page, since that’s the source from which hosts pull the specified binary version.

## Be your clients’ Hugo hero

Hugo powers websites ranging from the tiniest personal blogs to complex corporate and government sites. Its awesome speed makes the building and maintenance of all those sites easier and more pleasurable for developers and content owners alike. Hugo definitely merits consideration for your website projects, and its unique advantages can make you a hero with your clients, not only at site creation time but going forward — *especially* if you pair it with a collaborative CMS like CloudCannon. Be sure to check out the other Hugo-related articles here on the CloudCannon blog for more information of this type.