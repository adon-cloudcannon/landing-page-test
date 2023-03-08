---
_schema: default
title: Blogging in SvelteKit
image: https://cc-dam.imgix.net/tutorial-sveltekit.png
order: 5
tutorial: sveltekit-beginner-tutorial
description: >-
  In this tutorial you will learn how to create a blog with SvelteKit content
  and layouts.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---
A blog in SvelteKit consists of a page that lists all the blog posts, and a series of content pages with a date for the posts. That’s all there is to it.

We’re going to use [mdsvex](https://github.com/pngwn/MDsveX) to render our Markdown posts. It’s a Markdown preprocessor for Svelte which allows you to use Svelte templating and components amongst your Markdown.

## Configuring Markdown

Let’s start by installing mdsvex.

```shell
npm i -D mdsvex
```

Now we need to configure SvelteKit to use mdsvex for `.md` and `.svx` files in our `svelte.config.js`\:

```javascript
import adapter from '@sveltejs/adapter-static';
import preprocessor from 'svelte-preprocess';
import {mdsvex} from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md', '.svx'],
    preprocess: [
        preprocessor(),
        mdsvex({
            extensions: ['.md', '.svx'],
            layout: 'src/routes/blog/_post.svelte'
        })
    ],
    kit: {
        adapter: adapter()
    }
};

export default config;
```

## Post layout

The one curious line in the above config is where we set the layout. Any `.md` or `.svx` will use this layout by default. It doesn’t exist yet so let’s create it. Create a directory called `blog` inside the routes folder and inside create `_post.svelte` with the following:

{% raw %}

```html
<script>
 export let title
 export let date
</script>

<svelte:head>
 <title>{ title }</title>
</svelte:head>

<h1>{title}</h1>

<p>Published: {date}</p>

<slot />
```

{% endraw %}

We’re setting props for `title` and `date` which will be set through front matter in our post (we’ll get to this soon). The rest of this is similar to our first layout, we’re setting a `<title>`, some elements on the page, then calling `<slot />` for our content.

SvelteKit nests layouts by default, so it will work up the directory tree applying any `__layout.svelte` that it finds. So SvelteKit will render our post pages using the following resources:

* `.md` file
* `/src/routes/blog/_post.svelte`
* `/src/routes/__layout.svelte`
* `/app.html`

## Creating posts

Each post is a Markdown file and lives in the `/src/routes/blog/` directory we created before. Now let's create three blog posts:

```markdown
---
title: Dog's nose
date: "2022-07-01"
---
A dog's nose is unique, just like the finger prints of a human.
```

```markdown
---
title: Owner's bed
date: "2022-07-02"
---
45% of dogs in the US sleep on their owner's bed.
```

```markdown
---
title: Sniffing power
date: "2022-07-03"
---
A dog's smell is around 40x better than our own.
```

You might be wondering what the triple dashed lines are. They indicate front matter, which is a way to set metadata for the page. We’ve already set up props in the post layout for this metadata so they’ll automatically be initialized.

Finally we need to create a page which lists all the blog posts. Create `/src/routes/blog/index.svelte` with the following:

{% raw %}

```html
<script context="module">
 const blogPosts = import.meta.glob('./*.md');

 let body = [];

 for (let path in blogPosts) {
   body.push(
     blogPosts[path]().then(({ metadata }) => {
       path = path.replace(".md", "").replace(".svx", "");
       return { path, metadata };
     })
   );
 }

 export async function load({ url, params, fetch }) {
   const posts = await Promise.all(body);
   return {
     props: {
       posts
     }
   };
 }
</script>

<script>
 export let posts;
</script>

<h1>Blog</h1>

<ul>
 {#each posts.reverse() as { path, metadata: { title, date }}}
   <li>
     <a rel="prefetch" href="blog/{path}">{title}</a> - { date }
   </li>
 {/each}
</ul>
```

{% endraw %}

There’s a lot going on here so let’s break it down.

First, we collect all the post modules in the current directory:

```javascript
const blogPosts = import.meta.glob('./*.md');
```

Then we create an array of promises that extracts the metadata from each blog post. The path has the file extension of the post whereas the end URL will not, so we remove it:

```javascript
let body = [];

for (let path in blogPosts) {
    body.push(
      blogPosts[path]().then(({ metadata }) => {
      	path = path.replace(".md", "").replace(".svx", "");
        return { path, metadata };
      })
    );
}
```

SvelteKit components can define a [load function](https://kit.svelte.dev/docs/loading) which runs before the component is loaded. We’re using this function to execute all the promises and save the results to the page props:

```javascript
export async function load({ url, params, fetch }) {
  const posts = await Promise.all(body);
  return {
    props: {
      posts
    }
  };
}
```

And finally, we iterate over the posts prop to output a list of posts:

{% raw %}

```html
<ul>
 {#each posts.reverse() as { path, metadata: { title, date }}}
   <li>
     <a href="blog/{path}">{title}</a> - { date }
   </li>
 {/each}
</ul>
```

{% endraw %}

There’s one last step before we take a look at the blog in the browser, add the blog to the navigation. Open up your `Nav` component and add a link to the blog:

{% raw %}

```html
<li><a href="/blog/">Blog</a></li>
```

{% endraw %}

That’s all there is to it! Open the site up in the browser and take a browse through your blog.

## What’s next?

In our final lesson, we’ll use a generated JSON file to populate a map with the top dog parks.