---
title: Layouts in SvelteKit
image: https://dam-cdn.cloudcannon.com/tutorial-sveltekit.png
order: '2'
tutorial: sveltekit-beginner-tutorial-series
description: >-
  Learn how layouts help you set up and reuse the main structure of your
  SvelteKit site. 
---

The Skeleton website we set up in the previous lesson has an index page that you saw earlier. Let’s update the content on this page to put our own spin on it. Replace the contents of `/src/routes/index.svelte` with the following:

{% raw %}
 ```html
<svelte:head>
  <title>Svelte's Homepage</title>
</svelte:head>

<p>Hello, my name's Svelte. I'm a dog and this is my homepage.</p>
```
{% endraw %}

While we’re at it, let’s add another page to the site. Create `/src/routes/about.svelte` with the following content:

{% raw %}
 ```html
<svelte:head>
  <title>About Svelte</title>
</svelte:head>

<p>This is my about page. I'm a pup exploring the world of SvelteKit.</p>
```
{% endraw %}

That `<svelte:head>` tag doesn’t look like normal HTML. What is that?

When we were looking at `src/app.html`, you may have noticed two unfamiliar tags in this file, `%sveltekit.head%` and `%sveltekit.body%`. These are placeholders which will be replaced with content from our layouts and pages. `<svelte:head>` is as you may have guessed, a Svelte tag. Everything between the tags will go into `%sveltekit.head%` which is the `<head>` section of our site.

Open about your browser and navigate directly to [http://localhost:3000/about](http://localhost:3000/about) and you’ll see your new page.

## Your first layout

Let’s add an `<h1>` with title of the site to all of the pages. We *could* manually add the `<h1>` to every page, but what if we were to ever change it? Instead, let’s create a layout which the pages inherit.

First, create `__layout.svelte` (that’s two underscores at the start) in your `routes` directory and add the following content:

{% raw %}
 ```html
<h1>Svelte's space</h1>
<slot />
```
{% endraw %}

What’s that `<slot>` tag? This is where the body content of pages (or nested layouts) will go. That’s all we need to do. The layout will apply to all routes in the directory (and subdirectories) it lives in.

## **Adding styles**

Let’s some styling to the site to make it a little more aesthetically pleasing. Svelte automatically scopes styles to an individual component.

The way it works is you add a `<style>` tag to you component with the desired CSS. Svelte will automatically add a class to your component and styles to prevent it conflicting with other components. If you’re coming from vanilla HTML and CSS this might seem a bit magical to you. Try embracing the workflow: isolated components make for far easier maintenance in the future.

Sass has lots of added benefits over vanilla CSS so we’ll start by adding the Svelte Preprocess library and the Sass library to our site.

In your terminal, run:

```shell
npm i -D svelte-preprocess sass 
```

And then configure SvelteKit to use the preprocessor. Open `svelte.config.js` and add the preprocessor to the configuration like this:

```javascript
const config = {
  preprocess: preprocessor(),
  kit: {
    adapter: adapter()
  }
};
```

We’ll start by adding some global styles on the `<body>`. Append the following to the `__layout.svelte` you created previously:

{% raw %}
 ```html
<style lang="scss" >
  :global(body) {
    width: 400px;
    margin: 0 auto;
    font-family: sans-serif;
  }
</style>
```
{% endraw %}

Adding the SCSS lang tag tells SvelteKit to run Sass compilation over this block. This is one instance where we don’t want the CSS scoped so we’ve added `:global` to the selector. In the next lesson we’ll add a nav component with scoped styles where you’ll see how you’ll typically add styles.

Looking at [your site](http://localhost:3000) in the browser now, you’ll see some very basic styling.

## What’s next?

Currently the only way to get to the about page is by entering the address into the browser. In the next lesson we’ll add a navigation component to the site.

