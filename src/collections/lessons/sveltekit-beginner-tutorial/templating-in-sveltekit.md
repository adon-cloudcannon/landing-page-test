---
title: Templating in SvelteKit
image: https://dam-cdn.cloudcannon.com/tutorial-sveltekit.png
order: '4'
tutorial: sveltekit-beginner-tutorial-series
description: >-
  In this tutorial we'll go over basic SvelteKit templating concepts and see how
  you can use templating on your site.
---

Svelte gives us complete control over how pages and components are rendered. We can loop over content, output variables, run logic statements, or pull in data from external sources. We’ve already encountered some templating — the curly braces `{ }` to output the className in the previous lesson.

## How do I use templating in SvelteKit?

Templating is one of the most common things you’ll be doing in SvelteKit, so let’s go through some examples to demonstrate how it works.

### Output a string

{% raw %}
 ```html
<p>You can write normal HTML, and when you want to switch to Svelte, 
you can use single curly braces like this: { "Hello!" }</p>
```
{% endraw %}


### Output prop value


{% raw %}
 ```html
<script>
  export let favorite_treat = 'bone';
</script>

<p>My favorite treat is a { favorite_treat }</p>
```
{% endraw %}


### Conditions


{% raw %}
 ```html
<script>
  export let goodBoy = true;
</script>

{#if goodBoy}
  <p>One treat please.</p>
{:else}
  <p>No treats for me.</p>
{/if}
```
{% endraw %}


### Looping


{% raw %}
 ```html
<script>
  export let whoLetTheDogsOut = [
    'Bryan',
    'Sally',
    'Garry'
  ];
</script>

<ul>
{#each whoLetTheDogsOut as name}
  <li>{name}</li>
{/each}
</ul>
```
{% endraw %}


### Interactive element


{% raw %}
 ```html
<script>
  let count = 0;
	
  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  clicks: {count}
</button>

<!-- When you click the button it will run the handleClick function
and live update {count} -->
```
{% endraw %}

That gives you some of the basic tools to play with. You’ll be using these concepts over and over again through your SvelteKit journey.

## Putting it all together

We’ve seen a lot of different concepts here. Let’s put it into practice by adding a footer to the website the date and time the page was rendered.

First, we’ll create a component for the footer. Create `/src/lib/Footer.svelte` with the following content:

{% raw %}
 ```html
<script>
  let now = new Date();
</script>

<footer>
  Website was generated { today }
</footer>
```
{% endraw %}

Just like we did earlier, now we can import `Footer` into our layout and render the component:

{% raw %}
 ```html
<script>
  import Nav from '$lib/Nav.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<h1>Svelte's space</h1>
<Nav className="alt" />

<slot></slot>

<Footer />

<style lang="scss">
    :global(body) {
    width: 400px;
    margin: 0 auto;
    font-family: sans-serif;
  }
</style>
```
{% endraw %}

## What’s next?

Let’s put our templating knowledge to the test by creating a blog.

