---
_schema: default
title: >-
  Share common components and syndicate content with Site Mounting on
  CloudCannon
breadcrumb_title:
description:
draft: true
series:
image: ''
date: 2023-11-10T05:00:00+13:00
hide_publish_date: false
tags:
  - Features
author: be1f96bb-0393-4938-b444-a5fb2f0c8590
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
---
We’ve just added a super-early Christmas present for CloudCannon users: Site Mounting, available right now for all CloudCannon developers on Standard, Team, and Enterprise plans.

By enabling Site Mounting with source files, you can easily reuse (’mount’) your centrally managed site components and shared layouts across multiple CloudCannon sites and keep these components on all of your sites up to date — all from one single source of truth.

Site Mounting is a brand-new feature to help users who manage multiple sites with common components — or anyone who has (until now) been relying on Git sub-modules, build hooks, or custom APIs controlling rebuild cascades to manage their site dependencies.

For CloudCannon developers on Team and Enterprise plans, Site Mounting also unlocks the ability to mount the build output of a site in addition to its source files. In effect, you’re now able to set up a pre-generated headless API without GraphQL, where you can aggregate content from multiple sites into a single content lake that *you* control — and from that single hub, you can publish to any number of separate sites.

## Publish (in your) Own Repo, Site Mount Everywhere

Site Mounting means no more prebuild scripts to clone in files from Git, no more environment variables to share access to private repositories, no more committing dependencies directly into your Git repository, and no more complex custom APIs to rebuild your dependent sites after you’ve changed a single component.

Site Mounting solves all of these problems immediately — and because it’s an incredibly open-ended feature, we’re sure it will allow a lot more flexibility in the way you choose to build and connect your static sites on CloudCannon.

You might, for example, have a single Git repo with your header and footer components, and want to reuse these across multiple sites. Here’s Zach Leatherman’s solution for that particular issue:

{% bookshop 'markdown/youtube' title: "" id: "owOUiCeFkAE" extend: false border: false %}

You could also create a public/private crossover repository where your content could be community moderated and edited, and then mounted into a private repo. This way, your source code and / or project files can remain entirely private, while your community can manage and edit your documentation or other public site content — the best of both worlds. (You might equally mount a private repo onto a public site in order to use a proprietary plugin — it’s entirely up to you!)

If you’re building for a large organization — a governmental agency, educational institution, or hospital network, for example, you may want your content to be syndicated across dozens or hundreds of sites. With Site Mounting this content can be edited from one single source of truth, and published to any number of sites whenever it is updated.

## Aggregate your content by Site Mounting with build outputs

In addition to mounting source files like components, CloudCannon users on Team and Enterprise plans can also mount build output files. This means with minimal configuration, developers can now manage a single static content hub aggregated from a suite of static sites — in essence a pre-generated headless API — all with complete control over every step of the process.

Let’s take a look at how that would work. Rather than mounting every site to every other site, we can mount source files from all relevant websites to one central site, aggregating our content in a single repository during the build process. That content lake repo would then build on CloudCannon, with the build output being aggregate JSON feeds.

Once we mount these build outputs we can make them available as static files for builds of our separate sites, and even choose to host the JSON files as an API for a classically headless approach. Because all paths are pre-generated, our sites remain fully static, and can simply reference the JSON data without needing to implement islands or dynamic content of any form.

![](https://cc-dam.imgix.net/IMG_4183.jpg)On a smaller scale, you might see two static sites sharing each other’s data, where an update to data on site A triggers a rebuild on site B, and vice versa.

However you set up Site Mounting, if a user edits any one of your mounted sites, this will trigger your content hub to re-aggregate your content, and rebuild any dependent sites — ensuring that your content is always up to date.

Most importantly to us, it’s possible to do all of this while keeping absolute ownership of every piece of your content — with CloudCannon, your data is always yours, and it’s always portable.

## How to start using **Site Mounting**

All CloudCannon developers on Standard, Team, and Enterprise plans have access to the Site Mounting feature immediately. Check out our new <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/site-mounting/">Site Mounting documentation</a> section to help you get started.

![](https://cc-dam.imgix.net/documentation/images/site-mounting/2023-Q4/CloudCannon-Documentation-Add-Site-Mounting.png)

Under your **Site Settings**, select **Site Mountings**. Here, you’ll be able to select a remote site and path to mount to your current site. In the above screenshot, you’ll see that I’ve mounted a remote site named ‘Website Components’ to my local site, selected the “Source files” artifact, and specifically connected my `/components` directory in the mounted site to the `/layouts/partials/components` directory in my current site.

That’s all the setup I need to share my central site components from one CloudCannon site to another. Now, any time I update my central components in the remote site, every single site that mounts those components will rebuild automatically — CloudCannon handles all of the logic. I could even have dozens of different sites using different subsets of the same central components, and because I control every step, I’m able to select precisely which sites mount which components.

Even better, CloudCannon’s Site Mounting detects changes specific to the mounted folder, only triggering a downstream build if that folder has changed.

## Let us know what you think!

Site Mounting is an open-ended feature with a huge range of workflows that can be triggered from a single commit to a mounted repository. Any number of publishing actions can now be chained together with this feature. We’re excited to see what our power users will be able to build, and what kinds of problems they’ll now be able to solve.

It’s a delight to be able to build out a feature that simplifies existing workflows for our customers, and also opens up a huge range of architectural possibilities for CloudCannon users.

We’d love to hear how you plan to use Site Mounting in your workflows, and how CloudCannon can help you.

---

## Site Mounting grows with you

Every CloudCannon Organization has access to Site Mounting, which includes mounting source files (e.g. shared components), and build triggers — when CloudCannon detects a commit to a source repository, all sites with that repo mounted will automatically rebuild.

### Standard Plan

On CloudCannon’s Standard Plan, you're automatically ready to connect a central components repository to both your staging and your production branches of two different CloudCannon sites — without the need for Git submodules and prebuild scripts.

* Mount source files
* Make up to four Site Mounting Connections
* Includes build triggers — updates to mounted site files will trigger a build on your connected sites.&nbsp;

### Team Plan

On CloudCannon’s Team Plan, which features branching workflows — copies of your static sites that allow you to work independently and merge back into main once you’re finished — we've increased the number of site connections you can make.

You also get access to build outputs through Site Mounting, enabling you to mount content generated by one site into any number of other sites, without triggering a rebuild on the syndicated sites.&nbsp;

* Mount source files *and* build output files
* ​​​Make up to 50 Site Mounting Connections
* Mount up to five sources onto one site
* Includes build triggers

### Enterprise Plan

On CloudCannon’s Enterprise Plan, we’ve really opened the floodgates for our power users — the sky is the limit here!

* Mount source files *and* build output files
* ​​​Make up to 500 Site Mounting Connections
* Mount as many sources as you like to one site.
* Includes build triggers

<!-- notionvc: 7937cf17-ecc8-4be6-a893-fbb3830dcbb6 -->