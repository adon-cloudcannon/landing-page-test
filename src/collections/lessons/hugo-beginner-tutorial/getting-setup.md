---
title: Getting set up in Hugo
image: 
breadcrumb_title: Hugo beginner tutorial
tutorial: hugo-beginner-tutorial
order: 1
description: Get Hugo set up and installed for the rest of the lessons.
---
{% bookshop "markdown/youtube" id:"SVvihs0WfhQ" title:"Getting set up in Hugo" extend:false %}

Welcome to this introduction to Hugo tutorial. The goal of this series is to take you from a lion cub with basic web design knowledge to creating your first Hugo website. In this series you’ll learn how to set up a Hugo site, the basics of usingHugo layouts, partials, and templating, set up a blog, and finally use data files. By the end of this series you’ll have the foundational knowledge to build your own Hugo sites.

Let’s get into your first lesson.

## What is Hugo?

Hugo is a static site generator. It takes a directory of source files and runs a build process over them to generate a purely static website.

What makes Hugo unique is its [unparalleled build speeds](https://css-tricks.com/comparing-static-site-generator-build-times/) and strict conventions around layouts, taxonomies, and content. It’s a static site generator that powers high profile websites such as Let’s Encrypt, 1Password, [Linode](https://cloudcannon.com/blog/showcase-linode/), and [digital.gov.](https://cloudcannon.com/blog/showcase-digital-gov/#keyword:digital.gov)

## Installing Hugo

Hugo is one of the simplest static site generators to install as it’s distributed as a single binary — one of the many perks of a Go program.

If you’re using **macOS** or **Linux**, then [Homebrew](https://docs.brew.sh/Installation) is the easiest way to install Hugo. Once you have Homebrew installed, you can run:

```shell
brew install hugo
```

If you’re on **Windows**, then the [Chocolatey](https://chocolatey.org/install) package manager is the way to go. Once Chocolatey is installed, run:

```shell
choco install hugo-extended -confirm
```

Let’s triple check that all went to plan. In your terminal check the Hugo version:

```shell
hugo version
```

If that printed out a version number, you’re good to go\! If not, consult the [Hugo documentation](https://gohugo.io/getting-started/installing/) or reach out on the [Hugo community forums](https://gohugo.io/getting-started/installing/).

## Set up your Hugo site

In your terminal, navigate to the directory where you want your Hugo project to live in you and run this command:

```shell
hugo new site my-first-hugo-site
```

Hugo will set up the scaffolding for your site. Open up your site in your favorite code editor and poke through the contents.

You’ll see a number of directories that probably don’t mean anything to you at this stage. I’ll give a brief explanation of each one but don’t fret if you don’t understand them right now. We’ll be using them over the course of this tutorial which will build familiarity.

* **archetypes** - defines default metadata (also known as front matter) for new content. You don’t need to worry about archetypes for this series.
* **config.toml** - the configuration file for your soon-to-be flourishing Hugo site.
* **content** - your (typically markdown) content for pages lives here.
* **data** - csv, json, xml or toml files that can be accessed like a read-only database.
* **layouts** - the page templates for your content.
* **static** - all of your assets that don’t need processing (often images, fonts, pdfs etc.)
* **themes** - Jumpstart your Hugo site with an existing theme. (We won’t be using themes in this series.)

## What’s next?

Stay tuned for the next lesson where we’ll learn the [basics of Hugo layouts](/community/learn/hugo-beginner-tutorial/layouts-in-hugo/).


