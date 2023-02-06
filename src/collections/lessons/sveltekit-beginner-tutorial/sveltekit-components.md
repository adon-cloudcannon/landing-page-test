---
title: SvelteKit Components
image: https://cc-dam.imgix.net/tutorial-sveltekit.png
order: 3
tutorial: sveltekit-beginner-tutorial-series
description: >-
  Learn how to break down your SvelteKit pages into smaller “components” in this
  tutorial.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---

Components are core to SvelteKit, so let’s spend this lesson learning how they work by adding a navigation bar to our layout.

## Your first component

First we need a home for all of our components. Create a directory called `lib` inside `src` so you end up with `/src/lib/`. Inside your new `lib` directory create `Nav.svelte` with the following:

{% raw %}
 ```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About</a></li>
  </ul>
</nav>

<style lang="sass">
  nav ul {
    list-style: none;
    padding: 3px 5px;
    background: #111;

    &.alt {
      background: blue;
    }

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    li {
      display: inline;
    }
  }
</style>
```
{% endraw %}

Let’s add this to our layout at `/src/routes/__layout.svelte`. First we’ll import the module at the top of file:

{% raw %}
 ```html
<script>
  import Nav from '$lib/Nav.svelte';
</script>
```
{% endraw %}

In Svelte, a capitalized tag like `<Widget>` indicates a component. So we can call our Nav component like this:

{% raw %}
 ```html
<Nav />
```
{% endraw %}

If we put that all together, our layout will look something like this:

{% raw %}
 ```html
<script>
  import Nav from '$lib/Nav.svelte';
</script>

<h1>Svelte's space</h1>
<Nav />

<slot></slot>

<style lang="scss">
    :global(body) {
    width: 400px;
    margin: 0 auto;
    font-family: sans-serif;
  }
</style>
```
{% endraw %}

Take a look at your new navigation bar in the browser\!

## Passing parameters to components

Let’s take this a step further by adding some props to the component to allow for further customization.

You may have noticed the unused `.alt` style we specified in `<style>` as part of the `Nav` component. Let’s say we want the `Nav` to apply the `alt` class when it’s called from this layout while allowing us to still call the original version of the component from elsewhere on the site. We can do this by setting props.

We’ll start by declaring the prop in our component:

{% raw %}
 ```html
<script>
  export let className = '';
</script>
```
{% endraw %}

This initializes the className prop to an empty string which will be overridden if we pass a parameter to this component. Now we can use this to set the class on our `<ul>`\:

{% raw %}
 ```html
<ul class="{className}">
```
{% endraw %}

So now the whole file looks like this:

{% raw %}
 ```html
<script>
  export let className = '';
</script>

<nav>
  <ul class="{className}">
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About</a></li>
  </ul>
</nav>

<style lang="scss">
  nav ul {
    list-style: none;
    padding: 3px 5px;
    background: #111;

    &.alt {
      background: blue;
    }

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    li {
      display: inline;
    }
  }
</style>
```
{% endraw %}

Now you should have a blue nav bar when you view your site. Pretty neat\!

## What’s next?

In the next lesson we’ll go over the basics of templating in SvelteKit.
