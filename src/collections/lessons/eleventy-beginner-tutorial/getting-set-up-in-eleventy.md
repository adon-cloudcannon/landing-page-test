---
title: Getting set up in Eleventy
image: >-
  https://dam-cdn.cloudcannon.com/eleventy-beginner-tutorial-1-getting-set-up.png
order: 1
tutorial: eleventy-beginner-guide
description: 'Learn the basics of Eleventy in this six-part tutorial series. '
---

Welcome to this Eleventy for Beginners tutorial. In this series we’ll go through the basics of Eleventy from learning how to install the framework, creating layouts, pages, and blog posts, and an introduction to using data files. We’ll build everything from scratch and explain eleventy concepts as we go so no previous eleventy knowledge is necessary. By the end of this tutorial you’ll be able to build your very own Eleventy website.

Let’s get into it\!

## What is Eleventy?

Eleventy is a static site generator. It’s a piece of software that takes a directory of source files — content Markdown files, layouts, images, and CSS — and builds an entirely static website.

Eleventy is beloved in the community. It takes many of the concepts from its predecessors, Jekyll and Hugo, and polishes, streamlines and improves them. While Eleventy is written in JavaScript, it’s not tied to any particular JavaScript framework. In fact, just like Jekyll and Hugo, JavaScript is entirely optional.

You may have heard of some of the high profile websites using Eleventy — [EsLint](https://eslint.org/), [Foursquare](https://foursquare.com/), [Web.dev](https://web.dev/), and [V8.dev](https://v8.dev/) to name a few.

## Installing Eleventy

As a JavaScript framework, we can install Eleventy using [npm](https://www.npmjs.com/). First we’ll check if [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) are installed. Open your terminal and run the following:

```shell
node -v
npm -v
```

If both return a version and node is at least version 8.0.0, you’re good to go. If not, head over to the [Node.js/npm installation instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm).

## Set up your Eleventy site

In your terminal, create a directory for where your Eleventy site will live:

```shell
mkdir my-first-11ty-site
cd my-first-11ty-site
```

Next we need to add a `package.json` to contain the dependencies for our site. Fortunately, npm can do this for us:

```shell
npm init -y
```

Now we can install Eleventy and add it as a development dependency to our `package.json`\:

```shell
npm install --save-dev @11ty/eleventy
```

Let’s check that all went to plan:

```shell
npx @11ty/eleventy --version
```

Running this command should output the version number of Eleventy installed. If this command errored, refer to the [Eleventy documentation](https://www.11ty.dev/docs/getting-started/) or get help from the community on the [11ty Discord](https://discord.gg/GBkBy9u).

The directory structure of an Eleventy site is entirely configurable. As you gain confidence in the framework you may want to tweak the structure for your own preferences.

For this tutorial, we’ll be using the default directory structure which I’ll explain below. We’ll be creating these directories and files over the course of this series, so you don’t need to understand them at this stage.

* **.eleventy.js** — The eleventy configuration for you site lives here.
* **\_includes** — Contains page layout elements.
* **\_data** — A place to put `.json` or `.js` files (which can fetch data at build time) that can be accessed across the site.
* **\_site** — The output directory for the built website.

## What’s next?

In our next lesson, we’ll learn the basics of Eleventy layouts.


