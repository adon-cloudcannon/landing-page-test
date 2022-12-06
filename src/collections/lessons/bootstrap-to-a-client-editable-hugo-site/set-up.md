---
title: Set up Site and Hugo
image: 
breadcrumb_title: Bootstrap to a client editable Hugo site
order: '1'
lead_score: 1
tutorial: bootstrap-to-a-client-editable-hugo-site
description: Clone the Megakit repository, and install the Hugo static site generator.
---
In this tutorial, we'll take a polished Bootstrap theme, add some Hugo magic, and upload it to [CloudCannon](https://cloudcannon.com) for easy and intuitive visual editing. You can see the end result in the video below:

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/689852104" autoplay:true extend:true border:true %}

The template we’ll convert is called [Megakit](https://github.com/themefisher/Megakit-Bootstrap-Agency-Template) ([see demo here](https://demo.themefisher.com/megakit/)). It’s a business-style template with drop-down navigation, blog, a wide range of components and a crisp, clean design.

To start, let’s clone the repo and open the source files in your favorite code editor:

```shell
git clone git@github.com:themefisher/Megakit-Bootstrap-Agency-Template.git
```

Looking through the file structure, you might notice that Themefisher have built their own mini static site generators. There’s a Gulp task that runs over the `source` directory to run SASS, source maps, file includes, prefixing, and other tasks. This is pretty neat, as it helps avoid a lot of the mundane tasks of building a pure HTML website without using a full-blown SSG. In this tutorial, we’ll add the Hugo static site generator to build this site, which replaces the need for this Gulp task. As far as this tutorial is concerned, we’ll be almost exclusively using files from the the `theme` directory, which is the pure HTML version of the site.

Next we need to install the static site generator for this project, [Hugo](https://gohugo.io/). Hugo is known for its fast build speeds, advantaged taxonomies, and vibrant community. It’s written in Go, which makes installation a breeze when compared to other SSGs (I'm looking at you Jekyll). If you already have a package manager like [brew](https://brew.sh/) or [Chocolatey](https://chocolatey.org/) installed, you can install Hugo with a single command.

Follow the [install guide](https://gohugo.io/getting-started/installing/) for your operations system. You’ll know it’s installed if the following command outputs a version number:

```shell
hugo version
```

Hugo is somewhat particular on where it expects files to live. The easiest way to get started is to run Hugo’s new command to set up a basic structure for us. Let's keep our Hugo files separate from the existing files by putting them in new directory. The following command will initialize a bare bones Hugo site in a directory called `hugo_src`. Run this command in the root of your site:

```shell
hugo new site hugo_src
```

Now we have the basic structure of a Hugo site. We’ll cover what most of the files and folders are doing over the course of this tutorial. To give you a sneak peak, here’s a high-level overview:

* **archetypes** — Defines default parameters / content for new pieces of content.
* **config.toml** — Sets the configuration options for Hugo.
* **content** — Contains the (typically markdown) content for your site.
* **data** — A directory for YAML, JSON, and TOML files which acts like a read-only database for your site.
* **layouts** — Templates that content files use to render into a web page.
* **static** — Contains the static assets for your site (images, CSS, JavaScript, etc.).
* **themes** — Could contain a third-party theme to style the site. Because we’re building everything from scratch, we won’t be using `themes` in this tutorial.
