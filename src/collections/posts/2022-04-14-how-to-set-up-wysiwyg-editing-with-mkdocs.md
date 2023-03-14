---
title: How to set up WYSIWYG editing with MkDocs
description: >-
  With CloudCannon’s Content Editor, you’ll be able to set up a rich content
  editing experience that brings collaborative WYSIWYG editing to MkDocs’ build
  flow, all in a matter of minutes.
series:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/mkdocs-blog-hero.jpg
date: 2022-04-14T05:00:00+1200
tags:
  - Mkdocs
  - Resources
author: 466580e8-b101-4837-a0c2-a90a8aebb5db
---
[MkDocs](https://www.mkdocs.org/) is a fantastic static site generator (SSG) for project documentation. It builds quickly, its documentation source files are written in Markdown, and its sites are configured with a single YAML file. It has a [wide variety of themes](https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes), and best of all, its built files are pure static HTML, which can be hosted anywhere. It’s also the most recent SSG we’re supporting at CloudCannon\!

With almost 14,000 stars on [GitHub](https://github.com/mkdocs/mkdocs) it’s clear that MkDocs has a large number of users, fans and contributors. That’s why we’re pleased to be bringing our collaborative editing CMS to MkDocs, so whole teams — even non-technical content team members or those just learning Markdown — can jump right in and be instantly productive. With CloudCannon’s Content Editor, you’ll be able to set up a rich text content editing experience that brings WYSIWYG editing to MkDocs’ build flow, all in a matter of minutes.

Once it's all set up, it'll be ready to edit in Markdown or rich text, and will look a little like this:

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/698029744" autoplay:true extend:true border: true %}

 Let’s dig in, shall we?
### **1\. Installing MkDocs**


If you already have a MkDocs site you’d like to connect to CloudCannon,
skip ahead to step 2. For everyone else, we’ll start by installing MkDocs
— we’re basically following the instructions at MkDocs.org, so check those
out if you have more questions.

In this example I’ll add a very basic MkDocs site — two pages in Markdown
format and a config file called `mkdocs.yml`. The build process itself
will happen within CloudCannon, so there’s no need to connect the `site/`
folder you’d create locally when you use the `build` command. (I'd also
recommend adding `site/` to your `.gitignore` file.)
CloudCannon also offers an easy interface for editors to add new pages
themselves.

The repo I’ll connect is up at
[https://github.com/David-Large/mkdocs-cc-project](https://github.com/David-Large/mkdocs-cc-project) — feel free to use this and
jump ahead to step 2, or follow the simple instructions at below to create
and set up your own site.

Let's install MkDocs first:

```shell
pip install mkdocs
```

We can now create a new project, and then navigate to the docs folder
within your project folder.

```shell
mkdocs new cc-project
cd cc-project/docs
```

You'll see that there's a single page in the docs folder, `index.md`.
Let's add to that — create a Markdown file called `about.md`, and add any
Markdown content you’d like. I’ve added stock MkDocs lorem ipsum for now,
but we can change this later\!

Jump back to your project folder, and now edit your `mkdocs.yml` file to
reflect your nav items (and site name):

```yaml
site_name: MkCloudCannon
site_url: https://example.com/
nav:
    - Home: index.md
    - About: about.md
```

If you’re serving locally you’ll be able to see that these nav items
immediately populate in the navigation menu, and that the search function
immediately works, searching across all of your pages with no
configuration on your part. Easy.

Put these files into a new repository on your GitHub, GitLab, or Bitbucket
account, and let's get ready to edit\!

### 2\. Connecting your MkDocs site to CloudCannon

Connecting your site to CloudCannon is as easy as adding your Git
repository, which for this sample site contains only three files — my
`mkdocs.yml` configuration file, and my pages: `docs/index.md` and
`docs/about.md`. 

If you haven't already, sign up for a CloudCannon account. Once you're in,
add a new site (connect your own files for this tutorial), name your site,
choose your Git provider, and select your source files — your new
repository. (Or [mine](https://github.com/David-Large/mkdocs-cc-project), if you like.)

Now we've connected our site and we could view it on a free test domain on
any device, but a documentation site is only as strong as its ease of
editing. And how do we make editing it easier? Let's tell CloudCannon how
you and your team will want to edit your site and its pages by creating a
new YAML file, `cloudcannon.config.yml`.

We’ll define what CloudCannon shows in the CMS sidebar (the pages in
MkDocs’ docs folder), where new files should go, how CloudCannon should
build URLs, and, most importantly for your technical writers, which rich
text buttons will be available in CloudCannon’s WYSIWYG Content Editor.

Here’s the contents of my `cloudcannon.config.yml` file:

```yaml
# Which collections CloudCannon will show in the CMS sidebar
collections_config:
  docs:
    name: Documentation
    path: "docs"
    output: true
    url: "/[full_slug]/" # mkdocs' default url behavior for nested files

# Where CloudCannon should put new files, and how it should build URLs
paths:
  uploads: "docs" # Put new files inside the docs folder
  static: "docs" # Reference files in the docs folder as /<file>

# The available buttons in the CloudCannon Content Editor
_editables:
  content:
    link: true
    blockquote: true
    bold: true
    format: "p h1 h2 h3 h4 h5 h6"
    italic: true
    strike: true
    subscript: true
    superscript: true
    underline: true
    bulletedlist: true
    indent: true
    numberedlist: true
    outdent: true
    code: true
    embed: true
    horizontalrule: true
    image: true
    table: true
    undo: true
    redo: true
    removeformat: true
    copyformatting: true
```

Note that while I’ve added a lot of options for editors above, I haven’t
added everything — see our documentation for [defining editable
regions](https://cloudcannon.com/documentation/articles/defining-editable-regions-in-your-html/) to see all of your options.

Now that we’ve added this `cloudcannon.config.yml` file to our site,
CloudCannon will rebuild it automatically. Once we refresh, we’ll see that
our page is now fully editable. Any saved changes will automatically
trigger a new build. (You can turn this feature off and manually trigger
or schedule your site builds in the settings — whatever works for you and
your team.)

Here's a quick video overview of the whole process:

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/698390229" autoplay:true extend:true border: true %}

## That was easy. Now what?

That brings us to the end of this short and sweet post — we’ve created a
new site, brought it into CloudCannon, and defined just how CloudCannon
will enable you to interact with your site and its pages. There’s a
tremendous amount of power, potential, and flexibility in that
`cloudcannon.config.yml` file, and we’ve barely scratched the surface.

If you'd like to dig into more of the deep configuration options in
CloudCannon, check out our documentation on [using the configuration
cascade](https://cloudcannon.com/documentation/articles/using-the-configuration-cascade/), which is a set of sources containing
customizable options for the editor, each with a different scope and
priority. This allows you to set global defaults and where necessary,
override those for specific collections or files.

If you come across any issues while you're dialling in your configuration,
please reach out to us via our support channel — we're here to help.