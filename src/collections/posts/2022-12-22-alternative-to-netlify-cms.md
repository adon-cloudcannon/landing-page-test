---
draft: false
title: Looking for an alternative to Netlify CMS?
description: >-
  If you’ve been looking for an alternative to Netlify CMS for your Hugo,
  Eleventy, Jekyll, Gatsby, Next.js, NuxtJS, Astro, SvelteKit, or MKDocs static
  sites, CloudCannon is here to help.
series:
permalink: /blog/looking-for-an-alternative-to-netlify-cms/
image: https://cc-dam.imgix.net/blog/blog-netlify-alternative.jpg
date: 2022-12-17T05:03:00+1300
hide_publish_date: false
tags:
  - Agencies
  - Resources
  - Tutorials
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
---
If you’ve been looking for an alternative to Netlify CMS for your Hugo, Eleventy, Jekyll, Gatsby, Next.js, NuxtJS, Astro, SvelteKit, or MkDocs static sites, CloudCannon is here to help. CloudCannon is a Git-based CMS which powers thousands of websites for Fortune 500 companies, digital agencies, freelance developers, and global businesses.

Like Netlify CMS, CloudCannon is Git-based, so your site files are always securely stored in your GitHub, GitLab, or Bitbucket repositories. CloudCannon also offers a wide range of content editing options, from our intuitive Visual Editor to the Markdown-centric Content Editor, as well as the Data Editor and Source Editor for quick access to all of your site files.

CloudCannon shares many similarities with Netlify CMS, making for an easy migration for both developers and content editors alike. This post details how key Netlify CMS features and concepts translate to CloudCannon, and guides developers through the steps they will need to take to make the transition.

Our team of developers is available now to help with migrating your static sites over to CloudCannon. We’d love to chat about your use case, and show you more about what CloudCannon has to offer — feel free to&nbsp;[get in touch](https://cloudcannon.com/contact/)&nbsp;with any questions, or&nbsp;[book a no-obligation demo call](https://cloudcannon.com/book-a-demo/).

## Key CloudCannon features

### Visual editing


{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/666606985" autoplay:true extend:true border:true %}

CMSs exist to help non-technical editing or content teams manage a website’s contents. And the more simple editing experience a CMS can provide, the more your editing teams will be empowered to make their content updates without the help of a developer. CloudCannon puts the editor’s experience first and foremost, with a fully-featured Visual Editor that developers can configure for optimal editing.

With CloudCannon, content writers can write and update content directly on their websites — what could be more intuitive than that?

### Component page building

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/689518330" autoplay:true extend:true border:true %}

Markdown is fantastic, but it can be restrictive when it comes to complex marketing content, especially if content editors or clients prefer a visual approach. That’s where using components — which can be pieced together to build a page — are a great help. On CloudCannon, components are called&nbsp;[array structures](https://cloudcannon.com/documentation/edit/editing/configuration/#array-structures). You start by defining a label and the data fields in your component, and you’re free to use the&nbsp;[full range of field types](https://cloudcannon.com/documentation/edit/interfaces/inputs/#inputs)&nbsp;available on CloudCannon; you can even nest array structures\! Once configured, editors can use these components to easily build pages by assembling their content in intuitive blocks.

### Git-based

![](https://cc-dam.imgix.net/marketing/uploads/workflow-diagram.svg)

Just like Netlify CMS, CloudCannon is a Git-based CMS, with support for GitHub, GitLab, and Bitbucket. All changes in your repository automatically sync to CloudCannon, and all changes editors make will commit back to the repository. We give all editors the full power of Git when it comes to drafting, reviewing, and publishing — all without needing to know exactly how Git works. Editors on CloudCannon can create copies of sites by branching to make large-scale changes, then review their content on staging sites, and publish by a branch merge or pull request at a later date.

### Hosting included (but entirely optional)

All sites on CloudCannon have access to reliable, high-performance hosting through our partner Cloudflare. But if you’re already using Netlify to host your production site, you don’t need to change your build and deploy settings — [just connect CloudCannon to the same repository that Netlify uses](https://cloudcannon.com/documentation/articles/netlify-hosting-with-cloudcannon-editing/). If you’d like to set up a staging environment for a pre-publication review process, our built-in hosting can be used before you pushing approved changes to your production site — but ultimately the choice is yours.

## Getting started with CloudCannon

You can start testing CloudCannon and transferring your sites from Netlify CMS in a few minutes:

### 1\. Connect your site repository

Like Netlify CMS, CloudCannon is a Git-based CMS. To start, [sign up to CloudCannon](https://app.cloudcannon.com/register?trial=cc_standard), click “Add new site”, and select “Connect your own files.”

![](https://cc-dam.imgix.net/cloudcannon-add-new-site.png)

Create a name for your site.

![](https://cc-dam.imgix.net/cloudcannon-name-your-site.png)

Select a source for your website files. CloudCannon supports two-way Git syncing with GitHub, GitLab, and Bitbucket. Once you’ve selected your Git provider, you’ll need to authenticate it to CloudCannon.

![](https://cc-dam.imgix.net/cloudcannon-sync-files.png)

From here, select the repository and branch that is connected to your site on Netlify CMS. If you want to test CloudCannon out without impacting the live Netlify CMS site, select “Create New” in your branch setup to create a new branch. You can always merge it to your production branch at a later date.

![](https://cc-dam.imgix.net/cloudcannon-repository.png)

### 2\. Set up your SSG build

CloudCannon will automatically connect to your SSG and set configuration details based on your file structure. Review this configuration and make any tweaks for your project.

![](https://cc-dam.imgix.net/cloudcannon-build-site.png)

When your build succeeds, you’re ready to start configuring the editing. Otherwise, tweak your build options until you get it working. You can always reach out to our helpful [support team](https://cloudcannon.com/documentation/support/)&nbsp;if you need help with any steps along the way.

![](https://cc-dam.imgix.net/cloudcannon-site-is-ready.png)

### 3\. Configure the CMS

When you configured your site on Netlify CMS, you will have set up and customized your CMS sidebar, media paths, and your content model. These settings will be stored in your Netlify CMS `config.yml` file — usually stored in `/admin/`. CloudCannon stores these settings in a `cloudcannon.config.\*` file (JSON, YML, JS, and CJS are all supported), in your root directory.

Here’s how the major steps work on CloudCannon:

**Set up content sections for the site sidebar**

CloudCannon will automatically detect the pages, collections, and data files for most Hugo, 11ty, and Jekyll sites. In addition to this, you can&nbsp;[customize](https://cloudcannon.com/documentation/articles/defining-your-collections/)&nbsp;the icon each content section displays with, the sort order, whether new items can be added, and other options to fine-tune the sidebar.

You can also define custom collections, choose which collections are shown in the sidebar, and override the automatic CloudCannon detection, if you’d prefer.

Other SSGs don’t have strong conventions around folder structure, so while CloudCannon can’t automatically detect site content, the configuration is straightforward, at a minimum defining the path to the content folder and name.

**Set up correct paths for media and DAM files**

By default on CloudCannon, files are uploaded to a folder called `/uploads/` in your source directory; when a DAM is selected, files will be uploaded to `/dam\_uploads/` by default. You can override this with configuration to your own paths and even add your own variables like `:year`, `:month`, `:collection`, or `:categories` to keep things organized.

CloudCannon configuration works as a&nbsp;[cascade](https://cloudcannon.com/documentation/articles/using-the-configuration-cascade/). You can set global defaults and override them for specific collections or files, which gives you complete control over how each file is edited.

**Configure your content model**

Your content model dictates how content editors manage all the structured content across the site. In Netlify CMS, you will have built out your collections setting, which determines how content types and editor fields generate files and content.

CloudCannon has similar functionality with different terminology. There are three ingredients for creating flexible content models:

* [Schemas](https://cloudcannon.com/documentation/articles/defining-the-default-contents-of-new-files/)&nbsp;— A template (markdown or HTML) that’s used to populate new files with your desired content model. Broadly similar in scope to Netlify CMS’s collections setting within the `config.yml` file.
* [Structures](https://cloudcannon.com/documentation/articles/defining-what-adds-to-an-array-with-array-structures/#structures)&nbsp;— Define your own components, each with their own content model. Content editors use these components to build, rearrange, and reorganize even the most complex pages.
* [Inputs](https://cloudcannon.com/documentation/articles/how-to-choose-what-input-is-used-in-the-data-editor/)&nbsp;— Configure a wide range of options on your fields throughout your site. Use this to customize the editing experience of front matter and data files. Set the type, label, comment, and other options for a field that corresponds with a front matter field. Similar in scope to Netlify CMS’s ‘Widgets’.

Conveniently, all default Netlify CMS Widgets except Map have a corresponding Input type or option on CloudCannon:

| Netlify CMS Widgets | CloudCannon Inputs |
| --- | --- |
| Boolean | [Switch](https://cloudcannon.com/documentation/articles/using-checkbox-inputs-to-edit-your-data/#switch) |
| Code | [Code](https://cloudcannon.com/documentation/articles/using-code-inputs-to-edit-your-data/) |
| Color | [Color](https://cloudcannon.com/documentation/articles/using-color-inputs-to-edit-your-data/) |
| Date | [Date](https://cloudcannon.com/documentation/articles/using-date-and-time-inputs-to-edit-your-data/#date) |
| Datetime | [Datetime](https://cloudcannon.com/documentation/articles/using-date-and-time-inputs-to-edit-your-data/#datetime) |
| File | [File](https://cloudcannon.com/documentation/articles/using-upload-inputs-to-edit-your-data/#file) |
| Hidden | [Hidden](https://cloudcannon.com/documentation/articles/how-to-choose-what-input-is-used-in-the-data-editor/#configuration) option |
| Image | [Image](https://cloudcannon.com/documentation/articles/using-upload-inputs-to-edit-your-data/#image) |
| List | [Array](https://cloudcannon.com/documentation/articles/using-arrays-to-edit-your-data/#array) (plain) and [Structures](https://cloudcannon.com/documentation/articles/defining-what-adds-to-an-array-with-array-structures/) (configurable) |
| Map | No default equivalent (yet — it’s on our roadmap\!) |
| Markdown | [Markdown](https://cloudcannon.com/documentation/articles/using-rich-text-inputs-to-edit-your-data/#markdown) |
| Number | [Number](https://cloudcannon.com/documentation/articles/using-number-inputs-to-edit-your-data/#number) |
| Object | [Object](https://cloudcannon.com/documentation/articles/editing-objects-in-your-data/) |
| Relation | [Select](https://cloudcannon.com/documentation/articles/using-select-inputs-to-edit-your-data/) and [Collections](https://cloudcannon.com/documentation/articles/defining-your-collections) |
| Select | [Select](https://cloudcannon.com/documentation/articles/using-select-inputs-to-edit-your-data/) |
| Select (`multiple: true`) | [Multiselect](https://cloudcannon.com/documentation/articles/using-select-inputs-to-edit-your-data/#multiselect) |
| String | [Text](https://cloudcannon.com/documentation/articles/using-text-inputs-to-edit-your-data/#text) |
| Text | [Textarea](https://cloudcannon.com/documentation/articles/using-text-inputs-to-edit-your-data/#textarea) |

A sample CloudCannon config file might contain the following:

```yaml
# Global CloudCannon configuration
_inputs:
  title:
    type: text
    comment: The title of your page.
_select_data:
  colors:
    - Red
    - Green
    - Blue

# Base path to your site source files
source: src

# The subpath your built output files are mounted at
base_url: /documentation

# Populates collections for navigation and metadata in the editor
collections_config:
  people:
    # Base path for files in this collection, relative to source
    path: content/people

    # Whether this collection produces output files or not
    output: true

    # Collection-level configuration
    name: Personnel
    _enabled_editors:
      - data
  posts:
    path: _posts
    output: true
  pages:
    name: Main pages

# Generates the data for select and multiselect inputs matching these names
data_config:
  # Populates data with authors from an data file with the matching name
  authors: true
  offices: true

paths:
  # The default location for newly uploaded files, relative to source
  uploads: assets/uploads

  # The path to site data files, relative to source
  data: _data

  # The path to site layout files, relative to source
  layouts: _layouts
```

See our documentation for video overviews of Inputs and global configuration, and a full list of all the options available to you.

Once your global config file is complete, you’re all set\! Now let’s move on to making this site really sing, for everyone on your team.

### 4\. Unlock intuitive editing and page building for clients and content teams

CloudCannon provides a basic level of editing by default. To fine-tune intuitive editing options for your content editors or client sites, depending on your use case and users’ technical abilities, you can look at the following configurable options:

* [Inputs](https://cloudcannon.com/documentation/edit/interfaces/inputs/#inputs) — Choose and configure the editing interfaces (Visual Editor, Content Editor, Source Editor, and Data Editor) for different content types.
* [Array structures](https://cloudcannon.com/documentation/edit/editing/configuration/#array-structures) — Create your own components, which editors can use to build their own pages.
* [Editor links](https://cloudcannon.com/documentation/edit/editing/html/#editable-regions) — Add buttons and links to the visual editing interface to link to data in the front matter, collections or data files.

**Oh, and one more thing…**

We’ve created an open-source framework called [Bookshop](https://github.com/CloudCannon/bookshop) to speed up development and reduce maintenance for component-based websites. It natively supports the templating engines of Jekyll, Hugo, and Eleventy, so it’s a small learning curve if you’re already using these SSGs. The real magic comes with its tight integration with CloudCannon, which enables visual editing of content populated from front matter. If you’re getting started with CloudCannon, we’d highly recommend adding Bookshop to your workflow.

### 5\. Invite your team

Why use a CMS without a team to share it with? You can now invite everyone who needs access to the site, including clients, content editors, marketers, and developers. Guide them through the editing interfaces and they’ll be up to speed in no time.

![](https://cc-dam.imgix.net/cloudcannon-invite-team.png)

### 6\. Configure your hosting (optional)

When a developer pushes a change to the repository or a content editor updates content on CloudCannon, CloudCannon automatically starts a build. When the build completes, it’s pushed to CloudCannon’s production-grade global hosting&nbsp;[which ranks among the fastest and most stable in the world](https://cloudcannon.com/community/jamstack-hosting-comparison/). All sites on CloudCannon come with their own generated domain name which you can use as a testing or staging environment, or you can point your own domain at CloudCannon’s servers for your production website.
