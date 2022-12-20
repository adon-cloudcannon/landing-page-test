---
title: Getting set up in SvelteKit
image: https://dam-cdn.cloudcannon.com/tutorial-sveltekit.png
breadcrumb_title: SvelteKit beginner tutorial
order: 1
tutorial: sveltekit-beginner-tutorial-series
description: >-
  Learn how to get SvelteKit set up and installed for the rest of the tutorial
  series.
---

In this series we’re going through the basics of learning the web framework, [SvelteKit](https://kit.svelte.dev/). We’ll go through installing SvelteKit, create a few pages, a blog, and finally take a look at data files. Everything we do will be built from scratch, so no previous Svelte or SvelteKit knowledge is necessary — only basic HTML, CSS, and JavaScript. By the of this series you’ll have the skills and knowledge to build your own SvelteKit projects.

Let’s get started\!

## What is SvelteKit?

Let’s start off with the fundamentals. What is Svelte? Svelte is a front end compiler which excels at producing highly optimized, vanilla JavaScript. Unlike other JavaScript frameworks like React and Vue, Svelte has a compile step which turns Svelte code into vanilla JavaScript.

SvelteKit on the other hand, is a web framework which is powered by Svelte. It provides tooling around the front end rendering of Svelte such as routing, layouts, and content fetching to create entire web pages or apps.

SvelteKit can handle a broad range of applications from simple informational websites to full blown web apps. In this tutorial, we going to focus on the simpler side of the spectrum by creating an informational website with a blog and treat SvelteKit as a static site generator.

## Installing SvelteKit

SvelteKit is installed using [npm](https://www.npmjs.com/). If you don’t have npm installed, [have a look at their installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

With npm installed, we can set up our first SvelteKit application by running a single command in the terminal:

```shell
npm init svelte my-first-svelte-app
```

This will prompt you to select an app template. Let’s use “Skeleton project”.
![Screenshot showing Svelte app templates](https://dam-cdn.cloudcannon.com/sveltekit skeleton.jpg)
 Answer the rest of the questions with ‘no’.

Svelte has set up the skeleton code for our first Svelte app. Let’s take a look. First `cd` into the directory:

```shell
cd my-first-svelte-app/
```

We’ll install the npm packages the skeleton code requires (Svelte + SvelteKit):

```shell
npm install
```

And finally run the SvelteKit server:

```shell
npm run dev
```

If you open a browser and go to [http://localhost:3000/](http://localhost:3000/), you’ll see a basic page welcoming you to SvelteKit. Congrats\! SvelteKit is now installed.

## Running static

By default, SvelteKit uses the auto adapter for rendering pages. This adapter will prerender where it can and fall back to edge functions for dynamic content. To keep this tutorial simple, we’ll switch to the static adapter which renders static HTML for all pages.

First we need to install the static adapter:

```shell
npm i -D @sveltejs/adapter-static@next
```

And then configure SvelteKit to use it. Open `svelte.config.js` and replace:

```javascript
import adapter from '@sveltejs/adapter-auto';
```

with:

```javascript
import adapter from '@sveltejs/adapter-static';
```

## Directory overview

You may be wondering what all those files are in the Skeleton project. Here’s a quick overview of what they do. We’ll be using most of them throughout this tutorial, so don’t worry if it doesn’t make sense right now:

* **.svelte-kit** — this is the default location SvelteKit adds its generated files to during a build.
* **src** — we’ll mostly be dealing with this directory, the source files for your SvelteKit site.
* **src/app.html** — the main template for HTML responses. All other HTML layouts extend from this one.
* **src/routes** — SvelteKit creates pages on the site based on the files in this directory.
* **static** — Assets that don’t require SvelteKit to build them. Images, fonts, PDFs etc.
* **package.json** — Lists your npm dependencies and commands for running the site.
* **svelte.config.js** — the configuration settings for Svelte.

## What's next?

In our next lesson, we’ll create our first page and set up a layout.

