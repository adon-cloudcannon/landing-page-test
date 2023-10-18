---
_schema: default
title: Wrapping up HugoConf 2023
breadcrumb_title:
description: >-
  Last month CloudCannon held the second HugoConf, with more than 750 registered
  participants from 50 countries.
draft: true
series:
image: https://cc-dam.imgix.net/hugoconf-wrapup-2023 (2).png
date: 2023-10-19T05:00:00+13:00
hide_publish_date: false
tags:
  - Hugo
author: 466580e8-b101-4837-a0c2-a90a8aebb5db
permalink: /blog/{{ title | slugify }}/
cta:
  title: Launch your Hugo website today
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
---
The team at CloudCannon really appreciates the Hugo community, and we’ve really enjoyed interacting with a vibrant group of Hugo developers and users over the past few years. Last month we held the second HugoConf, with additional sponsorship from <a target="_blank" rel="noopener" href="https://www.papercut.com/">PaperCut</a> and <a target="_blank" rel="noopener" href="https://opengraphimage.com/">OpenGraphImage</a>.

## **Why HugoConf?**

I wrote after last year’s conference that we created HugoConf because the community is widespread, both online and offline. (Actually, this probably works in our favor: if the Hugo community was more concentrated in one geographic area, it might have been harder to host a conference simultaneously from San Francisco and Dunedin, New Zealand, with live guests presenting from Seattle, New York, and Turkey.)

The simple answer to why we hosted another HugoConf this year (and kept it free for all attendees) is that we love supporting communities and open-source contributors, and we also love learning more about the projects and tools developers are working on. And ultimately, we enjoy it! Yes, our organizing team had some late nights, and we spent a lot of time building out the conference website, creating promotional content, administering the proposals for talks and workshops, and communicating with our speakers. But overall we find HugoConf to be an energizing experience — largely because of the community’s appreciation for it.

I wrote this last year, as well, but it’s still true:

> \[HugoConf is\] a labor of love, honestly — it’s easy to be excited about sharing something we use (and appreciate) every day.

## My **HugoConf highlights**

I was delighted that Joe Mooring, a frequent contributor to Hugo’s docs and test suites, agreed to take part in a live Q&A with our host Mike Neumegen. Mike also interviewed Hugo creator Steve Francia at last year’s conference, and his knowledge of Hugo and his enthusiasm for open-source projects helped drive his conversation with Joe.

Joe’s perspective on Hugo, and open source contributions in general, was fascinating to me, and really dovetails with my own perspective on HugoConf itself. He framed his work with Hugo as “enlightened self-interest” — that is, “if I give, I’m going to get more in return.”

{% bookshop 'markdown/youtube' title: "" id: "PuRDrL0NcAg" extend: false border: false %}

Joe also encouraged everyone to support — and not just sponsor — developers who work on open-source projects, and to remember that everyone appreciates positive motivation. He’s clearly committed to helping the Hugo community grow as a vibrant group of developers and Hugo users. For people like me, who use Hugo but don’t always feel confident contributing code, it’s particularly encouraging to see that there are pathways to contribute.

In the same vein, my other highlights (listed below in no particular order) all feature either open-source tools, tutorials, or approaches given to the community for no other reason than to help out.

### Automatic migrations to Hugo

One of the biggest hurdles to using a static site generator like Hugo is the initial transition from a different build tool, or a monolithic legacy CMS (WordPress, Drupal, etc). Of course, the advantages of an SSG are huge: you can select the best hosting, CI/CD, and CMS options for yourself, and maintain full control of your site content, without the same maintenance overheads.

Using CloudCannon’s (very) new open-source tool StaticShape, George Phillips showed the beginnings of a new process — migrating and converting any site's static output to a set of templates, markup, and layouts ready for use in Hugo.

{% bookshop 'markdown/youtube' title: "" id: "wlJkQEC2LNQ" extend: false border: false %}

### Pagefind’s journey to v1.0

Pagefind, the free and fully static search library, launched at last year’s HugoConf, and it’s obviously been a busy year for lead maintainer Liam Bigelow. Pagefind is positively constrained by the guiding principles of performing well on large sites, while using as little bandwidth as possible, and without hosting any infrastructure.

In his presentation, Liam showcased the newly released features in Pagefind 1.0, allowing users to index custom content and improve the relevance of your search results. He also discussed what he’s built and learned over the last year (and 58 releases) since launch, and expressed his appreciation for the contributors who raised and discussed issues, surfaced edge cases, and translated the tool for dozens of languages.

{% bookshop 'markdown/youtube' title: "" id: "WgoBoX4qTk8" extend: false border: false %}

### Building a Hugo theme from scratch

Like a lot of people, I just sat back in amazement watching Berkay Çubuk build out an entirely new Hugo theme in 32 minutes (🤯), armed only with ArchLinux and a Figma design.

{% bookshop 'markdown/youtube' title: "" id: "0WJ2lWNhqm8" extend: false border: false %}

There’s something to be said for coding as a spectator sport, particularly when the coder is flying through tasks as fast as Berkay!

### A deep dive into the HUGE framework

Régis Philibert showed us all how easy it is to setup HUGE, how to configure your project’s asset pipeline with it, and how it can help you handle other things like local environment variables, or self hosted fonts!

Even though Hugo handles a lot from configuration, most of its later features (pipes, js.build, image transformation) do not. HUGE aligns their ease of use with other features of Hugo. Namely: configuration files!

{% bookshop 'markdown/youtube' title: "" id: "z3sWZu7pEPI" extend: false border: false %}

(If you missed anything, you can watch all of the videos at the&nbsp;<a target="_blank" rel="noopener" href="https://hugoconf.io/">HugoConf site</a>, or on&nbsp;<a target="_blank" rel="noopener" href="https://www.youtube.com/playlist?list=PLrxYIq_0LFJcU9FQHt5FDpb90D_Tpzopw">YouTube through our HugoConf playlist</a>.)

Overall, I’m delighted with another successful HugoConf. We all came together, celebrated the tools and services we rely upon, cheered each other on, and — I hope — left the conference with a little more enthusiasm for contributing to Hugo and other open-source projects.

By the end of the day, we had more than 750 registered participants from 50 countries, up from just over 500 last year. I’d call that a success by any measure.

## What’s next?

Personally, if you hadn’t noticed, I’m quite keen to run another HugoConf.

In the meantime, I’ll keep running the&nbsp;<a target="_blank" rel="noopener" href="https://twitter.com/hugoconf">@hugoconf</a>&nbsp;Twitter and Mastodon accounts to signal-boost and discuss Hugo news and release notes, as well as share the community’s tutorials, tips, tricks, and tools. If you’re not on the list, you can sign up at <a target="_blank" rel="noopener" href="http://hugoconf.io">hugoconf.io</a> — and be first in line to hear about next year’s conference!

<!-- notionvc: 03353bfe-f00a-460f-ba4e-4883cbb01727 -->