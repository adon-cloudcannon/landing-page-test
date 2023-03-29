---
draft: false
title: Stay in the race with Hugo, Bookshop, and CloudCannon’s Git-powered CMS
permalink: /blog/stay-in-the-race-with-hugo-bookshop-and-cloudcannons-git-powered-cms/
description: >-
  If you make a living building Hugo-based sites, you owe it to yourself to take
  a very close look at what’s possible — for you and your customers — when you
  combine Hugo, Bookshop, and CloudCannon's Git-based CMS.
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
image: https://cc-dam.imgix.net/stayintherace.jpg
date: 2022-04-28T05:00:00+1200
tags:
  - Hugo
author: 7abe9500-0933-48af-9130-87389dc36c9b
---
It’s tough to be competitive in the ever-changing world of web development. Trends, even fads, come and go. While an experienced web dev learns to know the difference between sound practices and those which are simply forgettable Flavors of the Month, your customers and prospects out in the real world usually lack this ability to differentiate. Often, they simply ask for New Shiny Things that they’ve seen on their competitors’ sites. They don’t have any way to know whether that approach really is best for them long-term, especially when their own, possibly tech-challenged content editors have to maintain the resulting site.

For developers who build sites with the [Hugo](https://gohugo.io) static site generator (SSG), this particular aspect of commercial website development can be especially perplexing. You know how to give prospective clients the snazzy features that have caught their eyes elsewhere, but making it possible for *them* to make non-destructive changes later — *e.g.*, editing a product description, contact information, or a call-to-action (CTA) banner — can get hairy in a hurry.

Let’s say you’re vying with other web dev firms to get a lucrative contract to build a company’s website, and you’re making your case to the company’s marketing team. When the prospective content editors want to know how they’d be able to make changes, you definitely do *not* want to have to say, “Um, well, you’ll be using Markdown files, editing Go code in templates, and maybe tweaking a little CSS or Sass here and there. Oh, by the way, there’s also this thing called Git that you’ll need to understand.”

Even if you offer to give them perpetual, free lessons on all that stuff, they will already have moved on, mentally, to your competitors. Unless some of the content editors have an unusual degree of technical expertise, you can bet they’ll want to do all changes in a CMS with a modern, attractive GUI. If you can’t give them a “mouse, mouse, click, click, type a little here and there” UX, they won’t be interested in what you’re offering, either now or down the line when they have their next web project up for bids.

Also: when they do need to make changes, they *won’t* want to be forced to edit an entire web page just to change only one small part of that page. Instead, they’ll want the ability to edit individual pieces. You know them as *components*. If only a CTA needs a change, that’s all they want to touch, and nothing more.

They may not know what *scaling* is, but you do; and you understand that this sort of thing can be extremely hard to scale, especially if there are to be many such components on just one page, much less scattered across a whole siteful of pages. To be sure, *you* know how to handle that, perhaps through items like cleverly designed Hugo [partials](https://gohugo.io/templates/partials/); but *they* aren’t going to get under the hood like that — nor do you want them doing so, knowing what chaos could erupt if so much as one little curly bracket gets accidentally deleted in some of the templating.

And, to be sure, they never, ever want to worry about any animal remotely like Git, even if they understand that some form of version-control software is lurking deep beneath the surface of that pretty GUI, protecting their content from worst-case scenarios.

In short: if you can offer only standard Hugo-based websites, you could increasingly find many prospects’ requirements nearly impossible to meet, and you’ll lose business as a result.

And what if you’re willing and able to use other web dev platforms that are more component-oriented than Hugo and other SSGs? You then take on their greater tendency toward code bloat, slower performance, and appallingly long lists of potentially problematic software dependencies. Worse, you’re still stuck with the conundrum of how best to offer prospects a truly user-friendly experience for content editing in general and component-by-component content editing in particular. Lastly: regardless of platform choice and UX considerations, there also remains that nasty question of version control.

It sounds pretty dismal, doesn’t it?

But don’t fret: you can get right back into the competitive mix. Instead of a plain-vanilla Hugo site, propose a website that combines Hugo-based web development with CloudCannon’s [**Bookshop**](https://cloudcannon.com/blog/introducing-bookshop/) **workflow tool** and, for your prospects’ content editors, CloudCannon’s Git-powered [Hugo CMS](https://cloudcannon.com/hugo-cms).

## Make the connection

As its [GitHub home page](https://github.com/CloudCannon/bookshop) explains, the purpose of Bookshop is to enable the building of components in the various templating languages used by SSGs. The result meshes seamlessly with CloudCannon. At launch, Bookshop supported the Ruby-based [Jekyll](https://jekyllrb.com) and JavaScript-based [Eleventy](https://11ty.dev) SSGs. It now also supports the Go-based Hugo, with support for more platforms in the works.

Hugo works with CloudCannon and Bookshop through [Hugo Modules](https://gohugo.io/hugo-modules/) (which, in turn, are based on [Go Modules](https://github.com/golang/go/wiki/Modules)). One outstandingly clear and concise explanation of the “what and why” of Hugo Modules came from [Kaushal Modi](https://github.com/kaushalmodi) in his recent article, “[Hugo Modules: Getting Started](https://scripter.co/hugo-modules-getting-started/)”:

> The Hugo Modules feature allows collecting different pieces of your Hugo site source from different repositories. Here\[,\] each “piece” is a module. These modules do not have to be just themes — they can even be parts of your site content.

The ability to define parts of content makes the Hugo Modules functionality, available since the 2019 release of [Hugo 0.56.0](https://gohugo.io/news/0.56.0-relnotes/), a perfect fit for interconnecting Hugo, Bookshop, and CloudCannon.

## Take a spin

It’s one thing to know that a spiffy new car on the dealer’s lot is a nice-looking ride. It’s quite another to find out what it’s like actually to drive that car. So it is with the Hugo/Bookshop/CloudCannon troika. I won’t go into great detail in this article (and will explain why near the end); but — as someone who’s built websites since the days of the stegosaurus, yet only recently had his first experience with either Bookshop or Hugo Modules — I’ll pass along a few observations about my own test drive.

### Configuration

First: once you have a Hugo project’s repository [set up with the Bookshop Go Module](https://github.com/CloudCannon/bookshop/blob/main/guides/hugo.adoc#connecting-your-bookshop-to-hugo), you’ll be pleased to see how much of the basic plumbing setup has been done for you. While you obviously still have templating and other development tasks ahead, you’re spared the pain of uniting the very different platforms.

What’s left consists of the kinds of configuration you’ll likely *prefer* to do, ensuring that the finished product will look and work as you and your customers want. Everything happens in the usual kinds of files you see in Hugo: HTML-with-Go templates, as well as config files in your choice of formats. By default, Hugo-with-Bookshop is set up for styling with SCSS, but you also can use any CSS that works with the Hugo asset pipeline.

### It’s still Hugo, fortunately

Hugo-with-Bookshop on your local machine still runs at the same blazing speed that Hugo always effects, so that’s another revelation you’ll meet with relief. The CloudCannon team that develops Bookshop has done so with keen awareness of this key attribute of Hugo’s, and they’ve taken great pains to add Bookshop’s powers *without* turning the greyhound of SSGs into a snail.

The basic Hugo project structure is left pretty much as you would expect, with the biggest change in the form of a top-level `component-library/` folder. As the name implies, this folder contains the necessary subfolders and files for the project’s Bookshop-enabled components. Each such subfolder has at least two files: a Bookshop config file and a template file, and can also have its own SCSS file. Yes, support for *automatically scoped styling* is a part of Bookshop, just as you’d expect for a truly component-based workflow.

### Component-building

You generate a new component by entering a simple command in your terminal app. For example, to create an about component, enter:

```shell
npx @bookshop/init --component about
```

​​​​​The interface will ask you which config file format you want (the YAML default, TOML, JavaScript, or JSON). Once you give it an answer — we’ll assume you stick with YAML for this example — Bookshop almost instantaneously creates a `component-library/components/about/` folder containing `about.bookshop.yml` for configuration, `about.hugo.html` for templating, and `about.scss` for that scoped styling mentioned earlier. Each file is minimally pre-populated for your convenience.

You’ll find *helper files* such as `helper.hugo.html` and `page.hugo.html` in `component-library/shared/`; these serve an important purpose for the integration with CloudCannon. As the [documentation](https://github.com/CloudCannon/bookshop/blob/main/guides/hugo.adoc#using-shared-bookshop-helpers-in-hugo) says (at least as of this writing):

> It is essential to render arrays of components using the page helper. Live editing \[in the CloudCannon CMS\] only works within Bookshop component helpers, so using this method means that rearranging and adding new components will work in the \[CMS’s\] Visual Editor.

The integration with Bookshop also provides a basic *component browser* that you can use with your local Hugo repo. It gives you a “playground” environment for working with the items you’ve coded into the project’s components.

## CloudCannon for the win

Once you’re ready to move beyond your local machine, connecting your Bookshop-enabled repo to CloudCannon is quick and painless, involving only a small number of well-documented steps which will take you only minutes. From there, you can edit in both the CMS and your local repo. You’ll quickly be impressed by the CMS’s buttery-smooth interaction with your project’s remote repository as you make changes in one place or another. (Obviously, you should use your chosen Git workflow and tool kit to keep your local repo in sync with the remote repo whenever the latter “gets ahead of” the former.)

And, of course, I would be remiss if I didn’t mention the clean-looking and snappily-performing CMS UI itself, where the ultimate magic happens:

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/689852104" autoplay:true extend:true border: true %}

If you give your prospective clients a demo of how this CMS looks and
works, they’re likely to be eager to get their hands on it — especially
after you explain its comparative advantages regarding security,
performance, and bullet-proof version control. You can even give each
component its own custom icon, making things still friendlier for the
eventual content editors.

## Suggestions for even smoother sailing

While it’s very well-organized, clear, and thorough, the documentation for
Bookshop is fluid, as is true for pretty much every modern software or
web-based application. Thus, I have a few tips to offer.

### Use the template, Luke

It’s certainly possible to start fresh with Bookshop by introducing it to
a clean Hugo repo and then working from there within the documentation,
but you’ll thank yourself later if, instead, you take some time to clone
the [Megakit
template](https://cloudcannon.com/community/themes/megakit/) and then compare its various files to the
finished result in your local browser. Trust me: any additional time you
spend on this learning process, you’ll more than make up for by the time
you’ll save, later, in understanding how it all works.

Better still . . .

### Learn from the tutorial

This article you’re reading now purposely **hasn’t** been a tutorial in
using Bookshop and CloudCannon with Hugo, because an [excellent
one](/tutorials/bootstrap-to-a-client-editable-hugo-site/) already exists right here on the
CloudCannon website\! Do yourself a favor by setting aside some time to go
through the tutorial in its entirety. Not coincidentally, it uses the
aforementioned Megakit template.

### Remember that clean Modules are happy Modules

Sometimes, Hugo Modules can get a little squirrelly after a while, so make
it a habit to do a fairly regular run of [`hugo mod
clean`](https://gohugo.io/commands/hugo_mod_clean/) in your local Hugo/Bookshop repo. The
command deletes the project’s existing Hugo Modules cache. You’ll know
it’s needed if you get something like this in your terminal app when you
run `hugo server`\:

```shell

ERROR 2022/04/18 21:14:00 render of "taxonomy" failed:
"/Users/yourname/yourrepo/layouts/_default/baseof.html:8:31": execute of
template failed: template: _default/list.html:8:31: executing
"_default/list.html" at <partial "bookshop_scss" .>: error calling
partial: partial "bookshop_scss" not found

```

​​​​​​Please note that this will re-download the Bookshop Hugo Module the
next time you run either `hugo` or `hugo server`; but, if you need
it, you need it. According to
the [documentation](https://gohugo.io/commands/hugo_mod_clean/), running `hugo –gc` (the *gc*
refers to [*garbage
collection*](https://en.wikipedia.org/wiki/Garbage_collection_&#40;computer_science&#41;)) also accomplishes this
“cleaning.”

## Get a competitive edge

When you can offer potential customers a website development and
maintenance project like the one that you get with
Hugo/Bookshop/CloudCannon, you give yourself a tremendous leg up against
your competition.

In one easy-to-understand package, you’re proposing category-leading
performance and security, an exceptionally attractive and user-friendly
content editing experience, and ironclad protection for customers’ files
within an invisible Git workflow. Add your own proven knack for satisfying
customers, and you’ll be difficult to overcome.

The bottom line: if you make a living building Hugo-based sites, you owe
it to yourself to take a very close look at what’s possible — for you and
your customers — when you combine Hugo, Bookshop, and CloudCannon.

***Acknowledgment****\: I am deeply grateful for the tremendous and
patient help that Liam Bigelow, the lead developer of the Bookshop
project, gave me during the research and testing that led to this article.
If you encounter any hurdles getting Bookshop up and running, the most
efficient place to ask for and receive assistance will be via
the *[*Bookshop GitHub
repository*](https://github.com/cloudcannon/bookshop/issues)*.*