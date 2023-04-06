---
draft: false
_schema: default
title: 'Forestry to CloudCannon: The full migration guide'
description: >-
  A full guide for Forestry features and concepts, how they translate to
  CloudCannon, and the steps developers need to take to make the transition.
series:
image: >-
  https://cc-dam.imgix.net/blog/migration-from-forestry-to-cloudcannon_vnmicj.jpg
date: 2022-02-11T16:00:00Z
hide_publish_date: false
tags:
  - Resources
author: a5f00346-90df-4d69-9ce1-d9e4c8e51b10
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
***We've recently released a helpful migration tool! Once you've connected your existing Forestry site repository to CloudCannon, we'll automatically generate a CloudCannon config file from your Forestry settings.***<br>***​​​​***

---

As the Forestry CMS moves towards its sunset, many Hugo, 11ty, and Jekyll developers are looking for a new home for their Jamstack websites. CloudCannon is a Git-based CMS which has been around since 2014 and powers thousands of websites for Fortune 500 companies, digital agencies, freelancers, and global businesses.

CloudCannon shares many similarities with Forestry, making for an easy transition for both developers and content editors alike. This post details a full guide for Forestry features and concepts, how they translate to CloudCannon, and the steps developers need to take to make the transition.

## A Forestry.io alternative

Forestry had a feature set that made it a great platform for empowering content editors to update content on Jamstack websites. To get a full picture of an alternative to Forestry, we’ll look at how CloudCannon compares to Forestry on a feature-by-feature basis:

### Git provider support

Both Forestry.io and CloudCannon are Git-based CMSs and support the major Git providers and Git LFS. In addition to committing content changes back to the Git repository, CloudCannon also supports workflows for content editors to branch, merge, and open Pull Requests allowing for tight collaboration with developers.

<table><thead><tr><th>Forestry.io</th><th>CloudCannon</th></tr></thead><tbody><tr><td>GitHub, GitLab, Bitbucket, Manual</td><td>GitHub, GitLab, Self-hosted GitLab, Bitbucket</td></tr></tbody></table>

### SSG support

Forestry had native support for Hugo and Jekyll, while also supporting any SSG through manual configuration. CloudCannon has native support for Hugo, Jekyll, Eleventy and plugins for all other major SSGs.

<table><thead><tr><th>Forestry.io</th><th>CloudCannon</th></tr></thead><tbody><tr><td>Hugo, Jekyll, others through manual configuration</td><td>Hugo, Jekyll, Eleventy, others through manual configuration</td></tr></tbody></table>

### Content editing files support

The majority of content on Forestry was powered by Markdown and front matter. CloudCannon also works with these file formats and adds native support for HTML as an alternative.

<table><thead><tr><th>Forestry.io</th><th>CloudCannon</th></tr></thead><tbody><tr><td>Markdown, JSON, YAML, TOML</td><td>HTML, Markdown, JSON, YAML, TOML, CSV, TSV</td></tr></tbody></table>

### <br>Front matter inputs

Fields or front matter inputs are the building blocks for structured content. Developers create components from these inputs which content editors can piece together to create complex pages.

<table><thead><tr><th>Forestry.io</th><th>CloudCannon</th></tr></thead><tbody><tr><td>Text, Text Area, Number, Toggle, Select, Datetime, Color picker, Tag field, Sortable list, File upload, Multi file upload, Field group, Repeatable field group, Include template, Block</td><td>Text, Text Area, Email, Code block, Check box, Switch, Color, Number, Range, URL, HTML, Markdown, Datetime, Date, Time, File, Image, Document, Select, Multiselect, Object, Array, Facebook, Twitter, Instagram, GitHub, Pinterest</td></tr></tbody></table>

### Previews

Content editors need to see their changes on the live website before publishing. Forestry had the concept of previews which ran an SSG build in the background with the modified files to generate a live version of the site.

CloudCannon supports a Visual Editor which replaces the need to generate previews. The editing interface the content editors see is exactly what will display on the live website. In addition, preview domains are automatically generated at build time. CloudCannon is also a Jamstack CDN hosting provider. You can set up your staging, production, and any other testing websites all on the same platform.

<table><thead><tr><th>Forestry.io</th><th>CloudCannon</th></tr></thead><tbody><tr><td>Preview URL is temporary.</td><td>Visual editing. Permanent staging/previewing URL.</td></tr></tbody></table>

### Content Editing

Managing content is the core reason for using a CMS. The main way of editing content with Forestry was the Markdown editor. It provided a view of the front matter fields on the left, and a configurable WYSIWYG editor on the right.

CloudCannon lets editors manage their content directly on the page using the Visual Editor. The Visual Editor supports content sourced from HTML, Markdown, and front matter.

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/668434951" autoplay:true extend:true border: true %}

CloudCannon also supports an alternative Content Editor for a distraction-free writing experience.

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/676055112" autoplay:true extend:true border: true %}

Alternatively, CloudCannon's Source Editor lets developers make quick source changes right from the browser.

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/675676859" autoplay:true extend:true border: true %}

### Media Management

With a Git-based CMS, storing assets is a major consideration. For a small website, you can store all your website files and assets in a single repository. For larger websites, you’ll quickly reach the upper storage limit of around 1-4GB if you try to store assets in the repository. Both CloudCannon and Forestry have plenty of options for keeping your assets out of the repository, including Git LFS support.

<table><thead><tr><th>Forestry.io</th><th>CloudCannon</th></tr></thead><tbody><tr><td>Git, Cloudinary, AWS S3, Netlify Large Media</td><td>Git, Cloudinary, AWS S3, Tenovos</td></tr></tbody></table>

### User roles

Controlling access to content on an account or individual site level is important to ensuring everyone has enough access to do their job. Forestry and CloudCannon offer similar levels of user permission granularity and both offer the concept of Organizations which allow admins to give a group of users access across multiple sites. Fine grained permissions are coming to CloudCannon over the coming months and will enable you to create your own roles with completely custom permission sets.

<table><thead><tr><th>Forestry.io</th><th>CloudCannon</th></tr></thead><tbody><tr><td>Admin, Developer, Editor, Site level sharing</td><td>Owner, Developer, Technical Editor, Editor, Site level sharing</td></tr></tbody></table>

### Remote admin

Forestry’s remote admin allowed editors to manage the content of their site right from their own domain. Freelancers and agencies used this feature to white-label Forestry and provide a more streamlined way of accessing the CMS.

CloudCannon has a similar feature called [client sharing](https://cloudcannon.com/documentation/articles/giving-clients-access-to-update-a-site/). Instead of setting up user accounts for editors, you set up a password. Clients navigate to theirdomain.com/update, enter the password and get a white labeled interface to update the content on their site.

![Screenshot of CloudCannon's client sharing feature](https://cc-dam.imgix.net/client-sharing-example.png)

### Deployment

Forestry relied on third-party hosting providers to publish the website live. CloudCannon includes top tier CI/CD and global hosting as part of its offering. Content changes made in the CloudCannon CMS automatically kick off an SSG build, deploy to a global network across 250 cities, invalidates the cache, and is ready to scale to handle your traffic. Or you can keep your current hosting and just use CloudCannon as your CMS.

## Making the switch

The similarities between Forestry and CloudCannon make it a fairly painless switch. Even better, your content editors will find a new level of empowerment by visually editing content on your Hugo, 11ty, and Jekyll websites. Follow these steps and you’ll be up and running in no time:

### 1\. Connect your repository

Just like Forestry, CloudCannon is a Git-based CMS. To start, sign up to CloudCannon, click “Add new site”, and select “Connect your own files.”

![Screenshot of CloudCannon interface showing how you add a new site](https://cc-dam.imgix.net/cloudcannon-add-new-site.png)

Create a name for your site.

![Screenshot of CloudCannon interface where you can name your site](https://cc-dam.imgix.net/cloudcannon-name-your-site.png)

Select a source for your website files. CloudCannon supports two-way Git syncing with GitHub, GitLab, and Bitbucket. Once you’ve selected your Git provider, you’ll need to authenticate it to CloudCannon.

![CloudCannon screenshot of the sync files interface](https://cc-dam.imgix.net/cloudcannon-sync-files.png)

From here, select the repository and branch that is connected to your site on Forestry. If you want to test CloudCannon out without impacting the live Forestry site, select Create new in branch setup to create a new branch. You can always merge it to your production branch at a later date.

![Screenshot of CloudCannon interface where you can select your repository](https://cc-dam.imgix.net/cloudcannon-repository.png)

### 2\. Set up your SSG build

CloudCannon will try to connect your SSG and configuration details based on your file structure. Review this configuration make any tweaks for your project.

![Screenshot of CloudCannon interface](https://cc-dam.imgix.net/cloudcannon-build-site.png)

If the build succeeds you’re ready to start configuring the editing. Otherwise, tweak your build options until you get it working. You can always reach out to our [support team](https://cloudcannon.com/documentation/support/) if you need help with any step along the way.

![Screenshot of CloudCannon interface](https://cc-dam.imgix.net/cloudcannon-site-is-ready.png)

### 3\. Configure the CMS

When you configured your site on Forestry, you will have taken steps to set up and customize your CMS sidebar, media paths, and content model. Here’s how each one of those steps works on CloudCannon:

**Set up content sections for the CMS sidebar**

CloudCannon will automatically detect the pages, collections, and data files for Hugo, 11ty, Jekyll sites. In addition to this, you can [customize](https://cloudcannon.com/documentation/articles/defining-your-collections/) the icon each content section displays with, the sort order, whether new items can be added, and other options to finetune the sidebar.

You can also define custom collections, choose which collections are shown in the sidebar, and override the automatic CloudCannon detection, if you'd prefer.

Other SSGs don’t have strong conventions around folder structure, so while CloudCannon can’t automatically detect site content, the configuration is straight forward, at a minimum defining the path to the content folder and name.

**Set up correct paths for media**

By default, files are uploaded to a folder called uploads in your source direction. You can override this with configuration to your own path and even add your own variables like :year, :month, :collection, :categories to keep things organized.

CloudCannon configuration works as a [cascade](https://cloudcannon.com/documentation/articles/using-the-configuration-cascade/). You can set global defaults and override them for specific collections or files which gives you complete control over how each file is edited.

**Configure your content model**

Your content model dictates how content editors manage all the structured content across the site. In Forestry, you will have built out a Front Matter Template which pieces together data types into a structure which can be used to create new pieces of content. These templates live in a folder called .forestry.

CloudCannon has similar functionality with different terminology. There are three ingredients for creating flexible content models:

* [Inputs](https://cloudcannon.com/documentation/articles/how-to-choose-what-input-is-used-in-the-data-editor/) — Configure a wide range of options on your fields throughout your site. Use this to customize the editing experience of front matter and data files. Set the type, label, comment, and other options for a field that corresponds with a front matter field. Similar in scope to Forestry's 'Fields'.
* [Defaults files](https://cloudcannon.com/documentation/articles/defining-the-default-contents-of-new-files/) — A template (markdown or HTML) that’s used to populate new files with your desired content model. Similar in scope to Forestry's 'Front Matter Templates'.
* [Structures](https://cloudcannon.com/documentation/articles/defining-what-adds-to-an-array-with-array-structures/#structures) — Define your own components, each with their own content model. Content editors use these components to build, rearrange, and reorganize even the most complex pages. Conveniently, each Forestry "Field" has a corresponding input on CloudCannon:

<table><thead><tr><th>Forestry.io</th><th>CloudCannon</th></tr></thead><tbody><tr><td>Text</td><td><a href="https://cloudcannon.com/documentation/articles/using-text-inputs-to-edit-your-data/#text">Text</a></td></tr><tr><td>Textarea</td><td><a href="https://cloudcannon.com/documentation/articles/using-text-inputs-to-edit-your-data/#textarea">Textarea</a></td></tr><tr><td>Number</td><td><a href="https://cloudcannon.com/documentation/articles/using-number-inputs-to-edit-your-data/#number">Number</a></td></tr><tr><td>Toggle</td><td><a href="https://cloudcannon.com/documentation/articles/using-checkbox-inputs-to-edit-your-data/#switch">Switch</a></td></tr><tr><td>Select</td><td><a href="https://cloudcannon.com/documentation/articles/using-select-inputs-to-edit-your-data/#select">Select</a></td></tr><tr><td>Datetime</td><td><a href="https://cloudcannon.com/documentation/articles/using-date-and-time-inputs-to-edit-your-data/#datetime">Datetime</a></td></tr><tr><td>Color Picker</td><td><a href="https://cloudcannon.com/documentation/articles/using-color-inputs-to-edit-your-data/">Color</a></td></tr><tr><td>Tags Field</td><td><a href="https://cloudcannon.com/documentation/articles/using-select-inputs-to-edit-your-data/#multiselect">Multiselect</a></td></tr><tr><td>Sortable List Field</td><td><a href="https://cloudcannon.com/documentation/articles/using-arrays-to-edit-your-data/#array">Array</a></td></tr><tr><td>File Upload</td><td><a href="https://cloudcannon.com/documentation/articles/using-upload-inputs-to-edit-your-data/#file">File</a></td></tr><tr><td>Multi-File Upload</td><td><a href="https://cloudcannon.com/documentation/articles/using-arrays-to-edit-your-data/#array">Array</a> + <a href="https://cloudcannon.com/documentation/articles/using-upload-inputs-to-edit-your-data/#file">File</a></td></tr><tr><td>Field Group</td><td><a href="https://cloudcannon.com/documentation/articles/editing-objects-in-your-data/#object">Object</a></td></tr><tr><td>Repeatable Field Group</td><td><a href="https://cloudcannon.com/documentation/articles/using-arrays-to-edit-your-data/#complex-and-nested-values">Complex Array</a></td></tr><tr><td>Blocks</td><td><a href="https://cloudcannon.com/documentation/articles/defining-what-adds-to-an-array-with-array-structures/#structures">Structures</a></td></tr></tbody></table>

Furthermore, we’ve created an open-source framework called [Bookshop](https://github.com/CloudCannon/bookshop) to speed up development and reduce maintenance for component-based websites. It natively supports the templating engines of Jekyll, Hugo, and 11ty so it’s a small learning curve if you’re already using these SSGs. The real magic comes with its tight integration with CloudCannon which enables visual editing of content populated from front matter. If you’re getting started with CloudCannon, we’d highly recommend adding Bookshop to your workflow.

### 4\. Invite your team

What good is a CMS without a team to share it with? Invite everyone who needs access to the site including content editors, marketers, and developers. Guide them through the editing interfaces and they’ll be up to speed in no time.

![Screenshot of CloudCannon interface](https://cc-dam.imgix.net/cloudcannon-invite-team.png)

### 5\. Configure your hosting (optional)

When a developer pushes a change to the repository or a content editor updates content on CloudCannon, CloudCannon automatically starts a build. When the build completes, it’s pushed to CloudCannon’s production-grade global hosting [which ranks among the fastest and most stable with its peers](https://cloudcannon.com/community/jamstack-hosting-comparison/). All sites on CloudCannon come with their own generated domain name which you can use as a testing or staging environment, or you can point your own domain at CloudCannon’s servers for your production website.

![Screenshot of CloudCannon interface](https://cc-dam.imgix.net/cloudcannon-custom-domain.png)

## Come and say hello

There’s no better time to make the switch. Migration takes a few steps and you can rest assured you’re moving to a platform that’s here for the long term. We’re always here to help and listen. If you want to make sure CloudCannon can handle your use case or you need a hand during your migration, [reach out to our team of experts](https://cloudcannon.com/documentation/support/) and we’ll help you get set up.