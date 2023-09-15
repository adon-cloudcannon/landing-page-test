---
_schema: default
title: 'Q3 2023: CloudCannon features and improvements'
breadcrumb_title: CloudCannon features and improvements
description: >-
  Based on the feedback we receive from our users and Partners, the CloudCannon
  team is always working on big features alongside smaller quality-of-life
  improvements to our CMS.
draft: true
series:
image: https://cc-dam.imgix.net/test12345.png
date: 2023-09-16T05:00:00+12:00
hide_publish_date: false
tags:
  - Company
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
---
Here at CloudCannon we’re all about making life easier for editors and developers. Based on the feedback we receive from our users and [Partners](https://cloudcannon.com/partner-program/), we’re always working on big features alongside smaller quality-of-life improvements to our CMS.

Looking back over the past few months in our [changelog](https://cloudcannon.com/documentation/changelog/), we’ve released some huge (and some small) features in our updates — from GUI improvements for editing your configurations, to supporting an even wider range of static site generators (SSGs). Let's dive in and explore the some of the exciting enhancements that have come to CloudCannon so far this year!

## Site navigation, Dashboard, and migration improvements

![](https://cc-dam.imgix.net/blog-q3-features-projects.png)

We wanted to show you more of your team’s activities on CloudCannon, so we added Site Activity to your Dashboard, and now show reports on your Status page. When editing a site, you can now use a dropdown in the top-left to quickly access the associated project, and other sites from that project.

![](https://cc-dam.imgix.net/blog-q3-features-config.png)

We also added a neat feature to auto-detect Forestry and Netlify CMS configuration on new sites, giving users the option to migrate from either to a CloudCannon configuration. And on that note…

## Configuring CloudCannon to work for you

You can now seamlessly edit your CloudCannon site configuration using our new Data Editor GUI, putting all of CloudCannon’s flexibility and power right at your fingertips. We've also introduced some handy prompts to walk you through the steps of creating a new site and setting it up for editing. It's all designed with developers in mind, to simplify your workflow and enhance your experience with CloudCannon.

Here’s our Engineering Lead, Ross Phillips, on what the new configuration view brings:

{% bookshop 'markdown/youtube' title: "Static Feedback #7 — A new way to configure your CloudCannon sites" id: "Xlxr0j6nhyE" extend: false border: false %}

See our <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/editing-objects-in-your-data/">updated documentation</a>&nbsp;for more information about the new configuration options available.

## More static site generators out of beta!

For developers excited about working with the newest SSGs on on the market (and the most up-to-date versions of them!), we’ve released full support for Astro v3.0, Next.js 13, Nuxt v3.6, and Gatsby v5.12. (And yes, we’ve also updated Eleventy support for their v2.0 release.)

What does this mean? It means that not only does CloudCannon correctly build with these tools, we’ve documented how to get the most out of them, and built out at least one template to demonstrate how to configure your websites.

To get started with these SSGs, try our&nbsp;<a target="_blank" rel="noopener" href="https://cloudcannon.com/templates/sendit/">Sendit template</a>, a fully featured SAAS-themed template optimized for visual editing in CloudCannon. Check out&nbsp;<a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/guides/">our starter guides</a> for all supported SSGs over on the CloudCannon docs.

## More static site generators in beta!

However you want to build your static sites, we’ve got you covered. Docusaurus, Bridgetown, and Lume have all entered beta support in CloudCannon. (People always ask what our favorite SSG is, but the truth is we’re fans of them all —&nbsp;<a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/editing-with-docusaurus/">Docusaurus’s MDX snippets</a> got the team so excited we just had to support them, Bridgetown inherits a lot of what made us love Jekyll way back when we began, and Lume is so slick our engineering team chose it to build our <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/">documentation</a> site!)

## Digital Asset Management improvements

DAM systems are fantastic tools to manage all the images, videos, and documents needed for your sites, and we’ve been busy adding extra DAM features and support for more DAMs.

* Cloudflare R2 and DigitalOcean Spaces users, rejoice! Both are now supported as DAMs on CloudCannon.
* For users who want their assets to only be available in a DAM, we’ve added the option to set a DAM as the main asset source on a site. This means that CloudCannon will omit the base URL for assets from that DAM.
* For more visibility and user assistance, we’ve added a confirmation step and a progress indicator when uploading assets through the DAM browser.
* You can now <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/managing-your-connected-dams/#limiting-size-of-uploads-to-your-dam">configure maximum file size limits for your DAM uploads</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/managing-your-connected-dams/#determine-where-on-the-site-your-dam-can-be-used">choose which DAMs are available for different inputs</a> on your site, and <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/adjusting-the-uploads-path/">define the way files are named</a> when uploaded to your site or DAM.
* Cloudinary users can now choose whether to <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/creating-a-cloudinary-dam/#link-cloudinary-to-your-site">preview assets</a> in the CloudCannon browser or the Cloudinary widget.
* Sites with Azure DAMs now have an option to tag uploaded files with the email of the user who uploaded them.

## Quality of life improvements

There’s a lot here! It feels like we’ve already packed a year’s worth of work into the CMS, and this isn’t even our final form. In brief, everything here is aimed at improving the day-to-day workflow with CloudCannon, both for developers, technical editors, and non-technical client users.

* We now automatically give new sites a sensible name based on the source, if you haven’t named them deliberately.
* You can now describe your site changes to your team, either with a templated message or as free text. <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/formatting-your-commit-messages/">Commit message templates</a>&nbsp;are now available to all users, with a large text area for editing by default.
* MDX is now supported in the Content Editor, and we’ve added MDX syntax highlighting in the Source Editor. 🎉
* You can now configure the color of icons in the CloudCannon interface, using the&nbsp;`preview.icon_color`&nbsp;option.
* We’ve increased the maximum size for uploaded .zip files to 500mb, and added the option to exclude your .git folder for a smaller download size.
* We’ve made ongoing incident reports more visible from the login page.
* You’ll now see automated suggestions for several common build issues.
* You can now configure the&nbsp;`image_size_attributes`&nbsp;option to choose whether to add width and height attributes to your rich text images.
* You can now preview invoices on a web page, and choose to download them as a PDF if you’d like.
* <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/editing-with-python-markdown/">Python Markdown extensions</a> now have default snippets supported!
* You can now add multiple new collection items within the same commit.
* You can now <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/connecting-a-gitlab-respository-as-your-source/">authenticate with GitLab using a group access token</a>, to give CloudCannon access to more finely scoped sets of resources.
* <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/best-practices-for-rich-text/">HTML is now sanitized before rendering</a> in any rich text editors.
* For added security, <a target="_blank" rel="noopener" href="http://app.cloudcannon.com">app.cloudcannon.com</a> now returns CSP headers and uses TLS v1.3.
* We’ve added a new Hugo portfolio template, fully configured for visual editing and page building. Check out our <a target="_blank" rel="noopener" href="https://cloudcannon.com/templates/vonge/">Vonge</a> template by <a target="_blank" rel="noopener" href="https://app.cloudcannon.com/#sites/connect/github/cloudcannon/vonge-hugo-bookshop-template">deploying on CloudCannon</a>, flicking through its <a target="_blank" rel="noopener" href="https://jazzed-kale.cloudvent.net/">demo site</a>, or at the repo over <a target="_blank" rel="noopener" href="https://github.com/CloudCannon/vonge-jekyll-bookshop-template">on GitHub</a>.
* If you’re using a package manage other than npm, we’ve added the ability to configure a custom install command for Hugo sites. Oh, and by default, new Hugo sites will now preserve&nbsp;`node_modules/`,&nbsp;`hugo_cache/`, and&nbsp;`resources/`&nbsp;paths.
* We’ve added an easy&nbsp;`rel="nofollow"` option to links within the Content Editor, when you want to prevent search engine crawlers from following links.
* Finally, we’ve added support for GitHub Enterprise Server as a Git provider.

This may all seem like a lot, but we’re working on some even bigger improvements to CloudCannon’s editing and development workflows. Watch this space!

---

*Do you have any questions about our recent releases and updates? Or is there a feature you’d love to use on CloudCannon? Check out our&nbsp;**<a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation">documentation</a>**, or get in touch via in-app support, and we’ll get back to you as soon as we can.*

*Our roadmaps are heavily influenced by our users, so we’d love to hear what would make your CloudCannon experience more efficient, more pleasant, or more flexible for the way you want to work.*