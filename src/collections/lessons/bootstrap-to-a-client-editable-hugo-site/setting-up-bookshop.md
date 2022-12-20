---
title: Setting up Bookshop
image: 
order: 5
lead_score: 1
tutorial: bootstrap-to-a-client-editable-hugo-site
description: >-
  Connect and set up CloudCannon's open-source tool Bookshop to enable you to
  work with components on your Hugo site.
---
### What you'll learn here

* Introduction to Bookshop and what it's used for
* Setting up Bookshop

```shell
# Starting repo:
git clone git@github.com:CloudCannon/Megakit-Bootstrap-Agency-Template.git

# Starting branch:
git checkout bookshop-start

# Finished branch:
git checkout bookshop-finish
```

We have the layout in a good spot. Now it’s time to focus on the content. Like most websites these days, the content on the Megakit template is made up of a series of building blocks we’ll call components.

We could copy the HTML for these components into a layout for each page, but that would be fairly rigid and hard to maintain. Ideally, we want an easy way to define and reuse each component across the website.

At CloudCannon, we’ve created an open-source library called [Bookshop](https://github.com/CloudCannon/bookshop) to make working with components in SSGs as simple as possible. Better yet, as we’ll see later in the tutorial, Bookshop has tight integration with [CloudCannon](https://cloudcannon.com/) so our content editors will be able to build and update pages visually using our component library.

At a high level, we’ll pull each component into a Hugo partial. We'll also create a metadata file for each component to give it a name and describe the it’s expecting.

Bookshop integrates with Hugo as a Go module. To use a module in Hugo, your site must be a module itself. To achieve this, first check Go is installed by running the following in your terminal:

```shell
go version
```

If this prints out a version of at least 1.14 you’re good to go. If this command errors or you require a newer version, follow the instructions to [install Go](https://go.dev/doc/install) on your system.

In the `/hugo_src/` directory, let’s initialize a Go module:

```shell
go mod init megakit.local
```

To install Bookshop, we need Node installed with at least version 14. You can type in the command: \`node -v\` in your terminal to check your version. If you need to installed or upgrade it, the node website has [easy install guides for package managers](https://nodejs.org/en/download/package-manager/).

Once Node it set up, go to your \`/hugo\_src/\` directory and run the following command to initalize your Bookshop component library:

```shell
npx @bookshop/init --new component-library --framework hugo
```

You'll be asked which configuration format to use. For this tutorial we'll use YAML. From there, Bookshop will automatically detect which SSG you're using, configure itself for your website, and set up a sample component.<br>&nbsp;

There's a number of new directories and files that have been created. Let's go through each one to give you a brief overview of how Bookshop works.

* **/config.toml** - Registers your component library as a Hugo Module.
* **/bookshop/bookshop.config.js** - Tells bookshop which engine to use. On this site it should have automatically added `hugo-engine`.
* **/components/** - Where your components live.
* **/shared/hugo/** - Non component files that are needed for live editing (We'll get to these later in the series)
* **/shared/styles/** - Global styles related to your components.

The final step to getting Bookshop set up is telling Hugo where the components live and import the Hugo Bookshop module. Add the following to `/hugo_src/config.toml`\:

```toml
[module]
replacements = "local/component-library -> ../component-library"

[[module.imports]]
path = 'local/component-library'

[[module.imports]]
path = 'github.com/cloudcannon/bookshop/hugo/v3'
```

Running `hugo server` will download the Hugo Bookshop module. With that, we’re ready to start making Bookshop components\!


