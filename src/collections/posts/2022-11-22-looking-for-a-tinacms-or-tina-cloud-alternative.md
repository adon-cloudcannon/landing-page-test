---
draft: false
title: Looking for a TinaCMS or Tina Cloud alternative?
description: >-
  CloudCannon has been helping developers and content writers create, maintain,
  and update static sites for more than ten years. We’re actively developing
  intuitive content editing solutions for users of new static site generators
  and hybrid frameworks, while making sure we maintain feature parity for users
  who are already committed to static-first SSGs like Hugo, Eleventy, and
  Jekyll.
series:
image: https://cc-dam.imgix.net/blog/blog-tina-alternative.jpg
date: 2022-11-22T05:00:00+1300
hide_publish_date: false
tags:
  - Agencies
  - Resources
  - Tutorials
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
ssg_frameworks:
categories:
  - agencies
  - resources
  - tutorials
---
CloudCannon is here to help if you've been seeking an alternative to TinaCMS or Tina Cloud for your Hugo, Eleventy, Jekyll, Gatsby, Next.js, NuxtJS, Astro, SvelteKit, or MkDocs static sites. CloudCannon is a Git-based content management system that runs hundreds of websites for Fortune 500 firms, digital agencies, freelance developers, and worldwide corporations.&nbsp;

CloudCannon, like TinaCMS, is Git-based, which means your site files are always securely kept in your GitHub, GitLab, or Bitbucket repositories. CloudCannon also provides a variety of content editing choices, ranging from our user-friendly Visual Editor to the Markdown-centric Content Editor, as well as the Data Editor and Source Editor for rapid access to all of your site's files.

Unlike TinaCMS, however, CloudCannon has been helping developers and content writers create, maintain, and update static sites for more than ten years. We’re actively developing intuitive content editing solutions for users of new static site generators and hybrid frameworks, while making sure we maintain feature parity for users who are already committed to static-first SSGs like Hugo, Eleventy, and Jekyll.

If you’re currently using TinaCMS (or its predecessor Forestry, which is sunsetting in late 2022), you’ll find that CloudCannon’s feature set encompasses everything that you’re already doing on your current CMS — and more — making it a simple transition for both developers and content writers. This post provides an overview of CloudCannon’s features and concepts, how they relate to structural concepts within TinaCMS, and the actions developers must take to complete the switch.

Our app team is available now to help with migrating your static sites over to CloudCannon. We'd love to chat about your use case, and show you more about what CloudCannon has to offer — feel free to [get in touch](https://cloudcannon.com/contact/) with any questions, or [book a no-obligation demo call](https://cloudcannon.com/book-a-demo/).&nbsp; &nbsp;&nbsp;

## Key CloudCannon features

### Visual editing

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/666606985" autoplay:true extend:true border:true %}

CMSs exist to help editing and content teams manage the contents of a website. And the simpler the editing experience provided by a CMS, the more empowered your editing teams will be to make content improvements without the assistance of a developer. CloudCannon prioritises the editor's experience, with a fully-featured Visual Editor that developers can customize for optimal editing.

Content writers can use CloudCannon to produce and update content directly on their websites, with Visual Editing mode fully supported no matter which SSG you choose to use — what could be easier?

## Component page building

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/689518330" autoplay:true extend:true border:true %}

Markdown is excellent, but it may be limiting when it comes to sophisticated marketing material, particularly if content editors or clients prefer a visual approach. That's when components, which may be assembled to form a page, come in handy. Components are powered by [array structures](https://cloudcannon.com/documentation/edit/editing/configuration/#array-structures) on CloudCannon. You begin by specifying a label and the data fields in your component, and you are free to utilise the [full range of CloudCannon field types](https://cloudcannon.com/documentation/edit/interfaces/inputs/#inputs); you can even layer array structures\! Once set up, editors may utilise these components to quickly create pages by arranging their information in user-friendly blocks.

## Git-based

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/marketing/uploads/workflow-diagram.svg" alt:"" extend:false border:false %}

CloudCannon, like TinaCMS, is a Git-based CMS. All modifications in your repository are automatically synced to CloudCannon, and any changes made by editors are committed to your repository. We provide all editors complete Git capability for authoring, reviewing, and publishing — without requiring them to understand how Git works. CloudCannon editors may make clones of sites by branching to make large-scale modifications, check their content on staging sites, then publish via branch merge or pull request afterwards.

### Hosting included (but entirely optional)

All sites on CloudCannon receive reliable, high-performance hosting through our partner Cloudflare. But if you’re already using services like Netlify or Vercel to host your production site, you can keep these settings, and use our built-in hosting just for your staging environment — the choice is yours.
## Getting started with CloudCannon

You can start testing CloudCannon and transferring your sites from TinaCMS in a matter of minutes:

### 1\. Connect your site repository

Like TinaCMS, CloudCannon is a Git-based CMS. To start, [sign up to CloudCannon](https://app.cloudcannon.com/register?trial=cc_standard), click “Add new site”, and select “Connect your own files”.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/cloudcannon-add-new-site.png" alt:"" extend:false border:false %}

Create a name for your site.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/cloudcannon-name-your-site.png" alt:"" extend:false border:false %}

Select a source for your website files. CloudCannon supports two-way Git syncing with GitHub, GitLab, and Bitbucket. Once you’ve selected your Git provider, you’ll need to authenticate it to CloudCannon.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/cloudcannon-sync-files.png" alt:"" extend:false border:false %}

From here, select the repository and branch that is connected to your site on TinaCMS. If you want to test CloudCannon out without impacting the content or setup of your live TinaCMS site, select “Create New” in your branch setup to create a new branch. You can always merge it to your production branch at a later date.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/cloudcannon-repository.png" alt:"" extend:false border:false %}

### 2\. Set up your SSG build

Based on your file structure, CloudCannon will attempt to link your SSG and configuration data. Review this configuration and make any necessary changes for your project.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/cloudcannon-build-site.png" alt:"" extend:false border:false %}

If the build is successful, you may begin customising the editing experience. Otherwise, fine-tune your build choices. If you need help with any steps along the way, you can always reach out to our helpful [support team](https://cloudcannon.com/documentation/support/).

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/cloudcannon-site-is-ready.png" alt:"" extend:false border:false %}

### 3\. Configure the CMS

When you have configured your site on TinaCMS, you will have set up and customized your media configuration and your content model, among other settings. These settings will be stored in your TinaCMS `.tina/config.\*` file. CloudCannon stores equivalent settings in a `cloudcannon.config.\*` file (JSON, YML, JS, and CJS are all supported), in your root directory.

Here’s how the major steps work on CloudCannon:

**Set up content sections for the site sidebar**

CloudCannon will automatically recognise most Hugo, 11ty, and Jekyll sites' pages, collections, and data files. In addition to this, you can&nbsp;[customize](https://cloudcannon.com/documentation/articles/defining-your-collections/) the icon each content section displays with, the sort order, whether new items can be added, and other sidebar features.

You can also define custom collections, specify which collections are shown in the sidebar, and if you like, override the automatic CloudCannon detection.

Some other SSGs don’t have strong conventions around folder structure. Where CloudCannon can’t automatically detect site content, the required configuration is straightforward, at a minimum defining the path to your content folder and site name.

**Set up correct paths for media and DAM files**

By default on CloudCannon, files are uploaded to a folder called `/uploads/` in your source directory; when a DAM is selected, files will be uploaded to `/dam\_uploads/` by default. To keep things structured, you may override this with configuration to your own paths and even add your own variables like `:year`, `:month`, `:collection`, or `:categories` to keep things organized.

CloudCannon configuration works as a&nbsp;[cascade](https://cloudcannon.com/documentation/articles/using-the-configuration-cascade/). You can set global defaults and override them for specific collections or files, which gives you complete control over how each file is edited.

**Configure your content model**

Your content model governs how content editors handle all structured content across your site. In TinaCMS, you will have built out your `schema` setting, which determines the shape of your content.

CloudCannon performs similar functions but uses different terminology. There are three major ingredients to develop flexible content models:

* [Schemas](https://cloudcannon.com/documentation/articles/defining-the-default-contents-of-new-files/) — A template (markdown or HTML) that’s used to populate new files with your desired content model. Similar in scope to TinaCMS’s `schema` property.
* [Structures](https://cloudcannon.com/documentation/articles/defining-what-adds-to-an-array-with-array-structures/#structures) — Define your own components, each with their own content model. Content editors use these components to build, rearrange, and reorganize even the most complex pages.
* [Inputs](https://cloudcannon.com/documentation/articles/how-to-choose-what-input-is-used-in-the-data-editor/) — Configure a wide range of options on your fields throughout your site. Use this to customize the editing experience of front matter and data files. Set the type, label, comment, and other options for a field that corresponds with a front matter field. Similar in scope to TinaCMS’s ‘Field Types’.

Conveniently, all default TinaCMS Field Types have a corresponding Input type or option on CloudCannon, with [many more options](https://cloudcannon.com/documentation/articles/how-to-choose-what-input-is-used-in-the-data-editor/) as well:

| CloudCannon Inputs | TinaCMS Field Types |
| --- | --- |
| [Code](https://cloudcannon.com/documentation/articles/using-code-inputs-to-edit-your-data/) | &nbsp; |
| [Color](https://cloudcannon.com/documentation/articles/using-color-inputs-to-edit-your-data/) | &nbsp; |
| [Date](https://cloudcannon.com/documentation/articles/using-date-and-time-inputs-to-edit-your-data/#date) | &nbsp; |
| [Datetime](https://cloudcannon.com/documentation/articles/using-date-and-time-inputs-to-edit-your-data/#datetime) | datetime |
| [File](https://cloudcannon.com/documentation/articles/using-upload-inputs-to-edit-your-data/#file) | &nbsp; |
| [Image](https://cloudcannon.com/documentation/articles/using-upload-inputs-to-edit-your-data/#image) | image |
| [Arrays](https://cloudcannon.com/documentation/articles/using-arrays-to-edit-your-data/#array) (plain) and [Structures](https://cloudcannon.com/documentation/articles/defining-what-adds-to-an-array-with-array-structures/) (configurable) | &nbsp; |
| [Markdown](https://cloudcannon.com/documentation/articles/using-rich-text-inputs-to-edit-your-data/#markdown) | &nbsp; |
| [Number](https://cloudcannon.com/documentation/articles/using-number-inputs-to-edit-your-data/#number) | number |
| [Objects](https://cloudcannon.com/documentation/articles/editing-objects-in-your-data/) | object |
| [Rich text](https://cloudcannon.com/documentation/articles/using-rich-text-inputs-to-edit-your-data/) | rich text |
| [Select](https://cloudcannon.com/documentation/articles/using-select-inputs-to-edit-your-data/) and [Collections](https://cloudcannon.com/documentation/articles/defining-your-collections) | reference |
| [Select](https://cloudcannon.com/documentation/articles/using-select-inputs-to-edit-your-data/) | &nbsp; |
| [Switch](https://cloudcannon.com/documentation/articles/using-checkbox-inputs-to-edit-your-data/#switch) | boolean |
| [Multiselect](https://cloudcannon.com/documentation/articles/using-select-inputs-to-edit-your-data/#multiselect) | &nbsp; |
| [Text](https://cloudcannon.com/documentation/articles/using-text-inputs-to-edit-your-data/#text) | string |
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

See our [documentation](https://cloudcannon.com/documentation/) for video overviews of Inputs and global configuration, and a full list of all the options available to you.

Once your global config file is complete, you’re all set\! Now let’s move on to making this site really sing, for everyone on your team.

### 4\. Unlock intuitive editing and page building for clients and content teams

CloudCannon comes with a basic level of editing by default. Depending on your use case and your users’ technical abilities or preferences, you can further tweak intuitive editing options for your content editors and client sites with the following configurable options:

* [Inputs](https://cloudcannon.com/documentation/edit/interfaces/inputs/#inputs)&nbsp;— Choose and configure the editing interfaces (Visual Editor, Content Editor, Source Editor, and Data Editor) for different content types.
* [Array structures](https://cloudcannon.com/documentation/edit/editing/configuration/#array-structures)&nbsp;— Create your own components, which editors can use to build their own pages.
* [Editor links](https://cloudcannon.com/documentation/edit/editing/html/#editable-regions)&nbsp;— Add buttons and links to the visual editing interface to link to data in the front matter, collections or data files.

**Oh, and one more thing**

We’ve designed the open-source framework [Bookshop](https://github.com/CloudCannon/bookshop)&nbsp;to accelerate development and reduce maintenance for component-based websites. Bookshop natively supports the templating engines of Jekyll, Hugo, SvelteKit, and Eleventy, so there’s only a small learning curve if you’re already using these SSGs. The real magic comes with Bookshop’s tight integration with CloudCannon, which enables responsive visual editing of content that’s populated from a page’s front matter.

If you’re getting started with CloudCannon, we’d highly recommend adding Bookshop to your workflow.

### 5\. Invite your team

What’s a CMS without a team to share it with? You’re now ready to invite everyone who requires site access, such as clients, content editors, marketers, and developers. Guide them through the editing interfaces and they’ll be up and running in no time.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/cloudcannon-invite-team.png" alt:"" extend:false border:false %}

### 6\. Configure your hosting (optional)

When a developer pushes a change to the repository or a content editor updates content on CloudCannon, CloudCannon automatically starts a build. When the build is finished, it’s pushed to CloudCannon’s production-grade global hosting&nbsp;[which ranks among the fastest and most stable with its peers](https://cloudcannon.com/community/jamstack-hosting-comparison/). All sites on CloudCannon come with their own generated domain name which you can use as a testing or staging environment, or you can point your own domain at CloudCannon’s servers for your production website.

## Welcome\!

We’d love to hear from you — and we’re always ready to listen. If you want to make sure CloudCannon can handle your use case or have questions about your migration,&nbsp;[reach out to our team of experts for a demo call](https://cloudcannon.com/book-a-demo/)&nbsp;and we’ll help you get set up.
