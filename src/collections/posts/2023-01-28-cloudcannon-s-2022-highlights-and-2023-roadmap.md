---
draft: false
title: CloudCannon’s 2022 Highlights and 2023 Roadmap
description: >-
  CloudCannon’s Cofounder and Chief Technology Officer, George Phillips,
  summarizes the changes that have come to CloudCannon in the last twelve
  months, and looks ahead to CloudCannon's new API, support for more static site
  generators (SSGs), more approachable configuration, and more.
series:
permalink: /blog/cloudcannon-2022-highlights-and-2023-roadmap/
image: https://cc-dam.imgix.net/blog/blog-2023-vision.jpg
date: 2023-01-28T05:02:00+1300
hide_publish_date: false
tags:
  - Company
  - Features
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
---
In the latest episode of Static Feedback, George Phillips — CloudCannon’s Cofounder and Chief Technology Officer — spoke about the roadmap for the year ahead and the changes that have come to CloudCannon over the past twelve months. It’s been a busy year, and the path ahead is looking equally exciting.

{% bookshop "markdown/youtube" id:"4wv_mBwuiU8" title:"CloudCannon's 2023 Roadmap with CTO George Phillips" extend:true %}

## 2022 highlights

In 2022, CloudCannon averaged one release per week, supporting new static site generators (SSGs), bringing support for others out of beta, and making hugely positive and efficient changes to the way developers build their static sites, and to the ways editors create and manage content:

### Global configuration file

We brought in a [global configuration file](https://cloudcannon.com/documentation/articles/setting-global-configuration/) that’s independent of the user’s static site navigator, meaning that support for any SSG — JavaScript-based, Go-based, or anything — is possible. (As a CI/CD platform there’s a lot of technical possibilities available to our users, and 2023 will see more documentation, templates, and support for users bringing their existing sites to CloudCannon, regardless of the SSG used to build them.)

### Syncing framework improvements

We added [support for Git LFS](https://cloudcannon.com/documentation/articles/using-git-lfs/), and we rewrote our entire syncing framework so users can change branches on existing sites. This means everything is much more resilient to pushes or pulls failing: in the event that GitHub goes down (which we saw three times last year), CloudCannon will keep your changes, wait until the Git provider downtime is finished, and just push the changes back.

### DAM support

We also added [support for digital asset management systems (DAMs)](https://cloudcannon.com/documentation/articles/integrating-your-dam-with-cloudcannon/) and assets, which allows users to choose where to store their large files — as opposed to keeping non-editable media files in a Git repository.

### Schemas

You can keep your data up to date by adding new keys to your [collection schemas](https://cloudcannon.com/documentation/articles/creating-collection-schemas/), meaning you can populate the initial contents of new files, keep your content consistent, and provide default options when choosing a new file.

### Live previews and multi-file commits

With live previews via React, any other JavaScript, or a component system like [Bookshop](https://github.com/CloudCannon/bookshop), you can reduce the time between testing a change and seeing it live. We’ve essentially removed the ‘wait for build’ roadblock — a common headache for editors and content writers. Along with these changes we’ve brought in the ability to edit and batch save multiple files, as well as the ability for users to review or discard changes to files before committing.

### Git updates, permissions

[CloudCannon’s GitHub integration is now updated to a GitHub App](https://cloudcannon.com/documentation/articles/connecting-a-github-repository-as-your-source/), meaning users have much more fine-grained choice about the repositories they share access to. We’ve also reduced permissions for Bitbucket and GitLab, meaning CloudCannon doesn't have excessive access.

### Snippets

With [CloudCannon’s new Snippets feature](https://cloudcannon.com/blog/save-time-with-cloudcannon-snippets/), content editors can use a simple interface to easily insert includes, shortcodes and Markdown extensions into their content — all without touching the underlying code. Snippets will be a big part of CloudCannon support for new SSGs in the future: with them, we've really opened the door to supporting templating language that sits within a block of text.

### Eleventy and SvelteKit out of beta

In the final month of 2022, CloudCannon brought support for both [Eleventy](https://cloudcannon.com/blog/new-eleventy-features-a-new-theme-and-full-eleventy-support/) and [SvelteKit](https://cloudcannon.com/blog/cloudcannon-sveltekit-support-out-of-beta/) out of beta, with a full page-building experience, a new template, and full documentation for each. These templates act as a proof of concept for what’s possible on CloudCannon.

## 2023 Roadmap

CloudCannon has several big goals for the year ahead — bringing support for more SSGs out of beta, increasing the number of site templates configured for CloudCannon editing, and adding richer configuration options for agency and enterprise users to add new sites and streamline the way Organizations are created. We’ll also be focusing even more on improving the editing and writing experience for content writers and editors, to give them more control over their data as well as their written content.

Overall, we’re committed to bridging the gap between software that people can run, and software that people can configure. Editor choice and developer freedom should, after all, go hand in hand.

### Increasing SSG support

In 2023 we’ll be bringing support for Next.js, Gatsby, and Astro out of beta, as well as SSGs that address documentation use cases, like MkDocs, Docusaurus, and Sphinx. We’ll be creating templates for each SSG that demonstrate how both CloudCannon editing and configuration work, as well as documenting the process of both creating new sites and importing existing sites to CloudCannon.

### Fine-grained permissions

We’re working on designing even more fine-grained permissions and user roles, giving all users and user groups the flexibility they need for their organization structure.

### More approachable configuration

The double-edged sword of having a highly configurable content management system is that users need to learn a lot of different configuration options. We want to ensure that our global configuration file is more approachable to all users, whether or not they have experience building sites with an SSGs. We’re still in the process of scoping out this issue, but users can expect to see more clarity about site configuration, both with CloudCannon’s interface and in the config file itself.

### Helping editors even more

Our final focus for the year — and this is a big one — is thinking more deeply about what editors need from a CMS, and how we can make it easier for developers to configure for their editors. Our end-goal here is bridging the ‘imagination gap’ — the space between what an editor can imagine being on the page, and the preview of the page itself.

* To this end we’ll be investigating live editing of data files, which could bring the same magical experience as live-rendered page building to things like CSS variables.
* We’re also excited about helping teams of editors collaborate more closely by reviewing and commenting on each other’s work, and co-authoring commits.

### Features for everyone: freelance devs, agencies, and enterprise

New features for CloudCannon’s CMS, whatever they are, mean that everyone wins. We’re guided by this principle, so we tend to find the engineering bandwidth to address support or feature requests from any CloudCannon customers, regardless of the plan they’re on — whether it’s migration from another CMS, adding support for new DAMs, or something entirely new.

### The CloudCannon API and our vision for 2023

With our API, coming in 2023, developers will be able to work a lot more efficiently in their local environment, automate more tasks, and validate their configuration before pushing.

We’re aiming at a shared CloudCannon experience — from developer to non-developer to commenter to reviewer — where everyone can view the version of their website that they're happiest with. Developers can use their preferred text editor, technical editors or documentation teams can work in Markdown or any other view they like, marketing or legal teams can review content in a user-friendly interface, and everyone is still working on the same files.

The power of this vision is enabled by the site content and static site generator being together, with CloudCannon connecting everything. We’d see more image processing, more cropping, more integrations with useful tools. Imagine having a DAM that’s connected to Canva, Figma, or Unsplash, or bringing other external data sources to your static site.

Taking this a step further: CloudCannon will be able to start making informed suggestions about what users should do next — not just an SEO tool, or a broken link checker, but a deep link to the CloudCannon editor to fix the issue.

Ultimately, we want our users to be able to publish with confidence. Everything we’re already working on — and everything we have planned to work on throughout 2023 — will help make all the people who work on a static site feel more comfortable, and work more efficiently.

How will we get there? By carefully scoping out new features. By building in configurability and flexibility at every step. And by talking to our users.

Our thanks to everyone who has discussed their feature requests with us, and we look forward to talking to you more over the coming months.