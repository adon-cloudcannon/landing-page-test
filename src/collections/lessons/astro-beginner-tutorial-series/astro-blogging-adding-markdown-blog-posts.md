---
_schema: default
title: 'Astro Blogging: adding Markdown Blog Posts'
image: https://cc-dam.imgix.net/Astro+Basics.png
order: 4
tutorial: astro-beginners-tutorial-series
description: In this lesson you will learn how to get started with Astro blogging.
seo:
  open_graph_type: article
  featured_image: https://cc-dam.imgix.net/Astro+Basics.png
  featured_image_alt: Astro blog tutorial
---
## Astro blogging

We will now add some blog posts to the website we are building in this&nbsp;<a target="_blank" rel="noopener" href="/tutorials/astro-beginners-tutorial-series/">Astro Tutorial</a>. In earlier lessons, we created a new Astro site, then added a header and footer using Astro Layouts. We also added a contacts page, sourcing contact information from a JSON file within the project.

Turning to Astro blogging, we will source the post content from Markdown files in a project folder. We’ll take a new approach to generate the post pages. You are going to create a single blog template for all posts (instead of individual `.astro` files for each one). Astro will use the template to render the Markdown content into pages.

## Astro blogging: first blog post

Astro Collections are fantastic for Markdown blog sites. They give us types and autocompletion on front matter fields and also provide some convenient utility functions. Astro looks for Collections in the project’s `src/content` folder, so create that directory to get started. Then, add a `blog` directory inside it. Finally, create a new Markdown file, `src/content/blog/penny-farthing.md`, with the following content:

```
---
title: "Penny-Farthing"
description: "All about penny-farthings"
date: 2023-04-30T17:11:05.000+0100
draft: false
---

### Some interesting penny-farthing facts

Let’s start with the name…

- the penny-farthing, known as a high wheel in many parts of the world, has a front wheel much larger than the rear one
- the penny-farthing name relates to the relative sizes of the wheels; the penny and farthing were coins used in Victorian Britain, where the cycles were popular
- penny-farthings were phased out as safer alternatives resembling modern cycles were introduced
```

When you save this file, jump to your text editor and look for a \`\`.astro/types.d.ts file\`. Open this up and scan through it. Astro has generated types for you, for the new post:

```
declare module "astro:content" {
  // TRUNCATED...

  const entryMap: {
    blog: {
      "penny-farthing.md": {
        id: "penny-farthing.md";
        slug: "penny-farthing";
        body: string;
        collection: "blog";
        data: any;
      } & { render(): Render[".md"] };
    };
  };

  // TRUNCATED...
}
```

`entryMap.blog.data` actually contains front matter fields. In the next lesson, we see how you provide types for these (and get rid of that `any` type).

## Astro blogging: template

We need Astro to generate a blog post page for each source Markdown file in `src/content/blog`. For that to work, we need to let Astro know:

* Which content source files we want Astro to use with the template;
* How to generate an output path from the content; and
* How to extract front matter fields (like the title) from the source.

Astro provides a `getStaticPaths` method, which will help with mapping content source files to generated pages. Then, Astro Collections will assist us in extracting the description and title from the content Markdown front matter.

Let’s see this in action. We will name the blog post template file `[...slug].astro` and place it in the `src/pages` folder. The square brackets indicate this file generates dynamic content. We’ll come back to the name itself in a moment. For now, create the file and add some Astro front matter:

```
---
import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import BaseLayout from "~/layouts/BaseLayout.astro";

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => {
    const { slug } = post;

    return {
      params: { slug },
      props: post,
    };
  });
}
---
```

There is no need to use file APIs to search for Markdown files in the blog directory; Astro provides a `getCollection` helper function for accessing the input Markdown content. That helper function generates an array of posts which looks something like this:

```
  posts: [
    {
      id: 'penny-farthing.md',
      slug: 'penny-farthing',
      body: '\n' +
        '### Some interesting penny-farthing facts\n' + // TRUNCATED...
      collection: 'blog',
      data: {
        title: 'Penny-Farthing',
        description: 'All about penny-farthings',
        date: '2023-04-30T17:11:05.000+0100',
        draft: false
      }
}
      //TRUNCATED...
    }
  ]
```

Notice, Astro has extracted the slug field (`penny-farthing`) from the Markdown filename for us. We will use that in a moment to instruct Astro on how to build the post’s route.

### `getStaticPaths`, `params` and `props`

We mentioned the `getStaticPaths` API maps our `posts` array to the pages we want Astro to generate. For each page, our `getStaticPaths` function should return a `params` object and a `props` object. More generally,&nbsp;**`props`**&nbsp;is optional, though required here to pass the `title` and `description` into the template.

**`params`**&nbsp;fields are used to define the page path; we will use `slug` as the only param. For our first post, the value of `slug` is `penny-farthing`, so `...slug` in the template path will be substituted for this value. You can have multiple `params` fields (for example, to add a year to the path), though one is sufficient here.

To help understand how Astro generates pages from a template, it might be useful to think of Astro replacing the template file with a new `src/pages/penny-farthing.astro file`. That would sit beside `src/pages/contact.astro`, which `https://example.com/contact` will be generated from. For more details on&nbsp;<a target="_blank" rel="noopener" href="https://docs.astro.build/en/core-concepts/endpoints/#params-and-dynamic-routing">how Astro generates dynamic pages, see the Astro docs</a>.

There are some restrictions on referencing variables in the `getStaticPaths` function, and also on names for params (param values should be URL-safe). See the&nbsp;<a target="_blank" rel="noopener" href="https://docs.astro.build/en/reference/api-reference/#getstaticpaths">Astro docs for more on these restrictions</a>, and more detail on `getStaticPaths`, `params` and `props`.

### Astro blog post props

Next, (still within the template file) we need to generate the markup for each post. You have to instruct Astro what to render for blog post pages. For each concrete, generated blog post page, we will use the same `BaseLayout` that the home page, and contact page used. Add this markup below the front matter:

```
<BaseLayout description={description} title={title}>
  <main>
    <h2>{title}</h2>
    <Content />
  </main>
</BaseLayout>
```

The `Content` component will be supplied by a `render` function which Astro generates for us, to convert content Markdown to HTML. Add this snippet to the bottom of the template front matter section, to give us access to that `render` function, via `props`\:

```
// ...TRUNCATED

type Props = CollectionEntry<"blog">;

const post: Props = Astro.props;
const { Content } = await post.render();
const {
  data: { description, title },
} = post;

---
<!-- TRUNCATED... -->
```

Astro Collections are helping us out here once more, this time to create a type alias for the template’s props. Notice the template is playing two roles:

* Earlier, we defined `getStaticPaths` to tell Astro which pages we want to generate with this template.
* Now, we are looking at what to render for any particular blog post.

### Accessing other Markdown front matter fields

We only destructured the `description` and `title` fields from `post.data`, though the other fields (included in the Markdown front matter) are all available.

Go to `http://localhost:3000/penny-farthing` in your browser, and you should new see your first blog post.

![Astro blog post](https://cc-dam.imgix.net/blogging-in-astro-blog-post.png "Astro blog post")

## Adding other blog posts

To wrap up, this Astro blogging lesson, let’s add a couple more blog posts. We will use them to create a list of posts for the home page in the next lesson. Create `src/content/blog/tandem-cycles.md` with this content:

```
---
title: "Tandem Cycles"
description: "Sharing is caring, why you might try a tandem"
date: 2023-03-30T17:11:05.000+0100
---

### Many… legs make light work?

Did know you that…

- tandem bikes are fantastic for families; no-one has to be get left behind
- if an extra pair of legs isn't enough to get you up hills, try a tandem with electric assist
- the trident is another option for families with two full adult seats and a smaller child one at the back
```

Then finally, `src/content.blog/unicycles.md`\:

```

---
title: "Unicycles"
description: "Unicycles: not just for clowns!"
date: 2023-03-30T17:11:05.000+0100
---

### What you might not know about unicycles

Unicycles aren’t just for the circus:

- probably not the fastest for your daily commute, but unicycles were originally used a mode of transport
- great way for many to stay fit, with lower impact on joints than running, for example
- unicycle basketball and unicycle hockey are both actually a thing
```

## Wrapping up

That’s all for this part of the Astro Beginners’ tutorial. We have the foundations in place for our blog site. We took a first look at Astro Collections and created a blog post template using `getStaticPaths`. Now you can add more blog post pages to the site just by creating new Markdown files in `src/content/blog`. You will&nbsp;<a target="_blank" rel="noopener" href="/tutorials/astro-beginners-tutorial-series/astro-content-collections-typed-markdown/">explore Astro Content Collections</a>&nbsp;a little more in the next lesson. Right now, we have to type the post URLs manually; not ideal for user experience. We will add a list of posts next, to address this. See you there!