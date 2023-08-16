---
title: Getting started with Jekyll
tutorial: jekyll-tutorial
order: 2
image: https://cc-dam.imgix.net/community/Jekyll-tutorial.jpg
description: >-
  Set the ground work for the rest of the series by setting up a Jekyll site
    and going over Jekyll conventions.
---
### Prerequisites:

* Ruby
* Jekyll
* Git (optional - for code-along repositories)
* Some familiarity with command line usage

## Introduction

Welcome to CloudCannon’s Jekyll Beginners tutorial series\! We’ll provide you with tools and practice to help you use the Jekyll static site generator.

In this lesson, we will concentrate on the setup and contents of a basic Jekyll project, so you can get a feel for how it works. Feel free to continue using this basic setup for your own project, but we recommend checking out the code in each subsequent lesson, as that will help you practice specific Jekyll topics, step by step.

## Create and run your first Jekyll project

Let’s get started by creating a basic Jekyll project and taking a look at it. With your preferred command-line tool, navigate to somewhere you would like to create the project and run:

`jekyll new learn-jekyll`

We’ve given the project the name “learn-jekyll” for now, but you can use whatever name you’d like. When this is done, navigate into the newly created project folder with your command-line tool and run:

`bundle exec jekyll serve`

This will “build” your site and make it viewable on your web browser. Any time you make any changes, this will trigger a “rebuild” so that you don’t have to run this command again. Now, open your browser on:

`http://127.0.0.1:4000/`

You should see a minimal but pleasant blog - all from a few commands. If you want to stop the project at any time, use Ctrl + C. Now let’s look at how a Jekyll project works.

### Basic Jekyll structure

Jekyll is a “convention over configuration” framework, and the basic setup is quite simple. You should now see two main folders - `_posts`and `_site` (you can ignore `.jekyll-cache` altogether):

* `_posts` is simply where your blog posts will go in future.
* `_site` is where your finished site is “built”. In other words, this is where your viewable website will be created - ready for deployment. Any files such as CSS, JS, and images will also end up here in an `assets` folder.

There are some other files worth mentioning too:

* `_config.yml` is where you manage the configuration for your project, like global variables, “collections”, or default names/paths. This where a lot of customization is done.
* `.gitignore` is for files/folders you don’t want to save into version control (e.g., information you don’t want available publicly).
* `Gemfile/Gemfile.lock` is how you manage any extensions to Jekyll.

We will look at `_config.yml` and `Gemfile` more in the future, as these are important for unlocking more power with Jekyll.

You might have also noticed a number of Markdown files. These are used to make it easy to write content - especially blog posts. In fact, there are no about.html and index.html by default. These are actually built into HTML - automatically - from `about.markdown` and `index.markdown`&nbsp;into the `_site` folder.

### Further conventions

In addition to these basics, you can also manually add other folders with specific names that Jekyll will recognize. We will set these up in future lessons, but for now it’s just good to know about them:

* `_data`\: any “data” files your site needs (like a small database)
* `_drafts`\: posts that you don’t want automatically published
* `_layouts`\: files that you want to use as a “frame” for specific pages - e.g., the layout for all of your posts
* `_includes`\: parts of HTML files you want to reuse in multiple pages - e.g., navigation, footer.

### Building and serving your website

There are a few different commands worth looking at for different purposes in Jekyll. For more detail, see the [Jekyll Command Line page](https://jekyllrb.com/docs/usage/).

* `bundle exec jekyll serve` - when **developing** your site, you’ll want to create your site’s files as well as serve them so that you can view the site in the browser.
* `jekyll build` - when **deploying** your site to production, you’ll just want to build its files.
* `jekyll help` - run this if you need general command-line help, or **`jekyll help <command name>`** for more specific help.

For local development, you can also use jekyll serve, but we recommend the slightly longer bundle exec jekyll serve. Don’t worry much about the difference - this is just so the versions you installed locally are used (and not some other version), which might save you some troubleshooting.


## What’s next?

We can now create, run, and understand the basic structure of a Jekyll project. But let’s actually start using Jekyll and improving our workflow - starting with the Liquid templating language.


