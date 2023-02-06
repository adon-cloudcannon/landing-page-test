---
title: Blogging in Eleventy
image: https://cc-dam.imgix.net/eleventy-beginner-tutorial-5-blogging.png
order: 5
tutorial: eleventy-beginner-guide
description: Learn how to use Liquid templating to create a blog with Eleventy.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---

A simple Eleventy blog consists of two different page types:

1. A page to list all the posts.
2. A page to show an individual blog post.

In this lesson we’ll demonstrate how these page types work together to create your very own blog.

## Collections

Collections are a way of grouping content together which allows you to list, paginate, filter in interesting ways. We’re going to use a collection for our blog.

You add a piece of content to a collection by assigning it a string in a front matter field called `tags`. Pages with the same tag are grouped together in a collection.

### Creating a blog list page

First let’s create the page that will list all of the blog posts. Create a file called `blog.html` in the root of your site. I’ve opted for HTML over Markdown for clarity. Markdown is great for content but for structuring a layout, HTML is far clearer. Add the following to `blog.html`\:

{% raw %}
 ```html
---
title: Blog
layout: page.html
---
<h1>My posts</h1>
<ul>
{% for post in collections.posts | reverse %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a> - {{ post.date | readableDate }}
  </li>
{% endfor %}
</ul>
```
{% endraw %}

There’s a few new concepts here; let me explain.

1. `collections.posts` doesn’t exist yet. We’ll set this up in the next step.
2. We’re calling the `reverse` filter on the posts. By default it returns the posts oldest to newest. A blog is the opposite.
3. `.url` can be called on any page to get its output URL. It’s particularly useful if you want to link to a page.

That’s it for the list page, let’s have a look at the posts.

## Creating posts

The hard part is already done. Let’s get this blog going by creating some posts.

First we’ll create a folder in the root of the site called `posts`. As you may have guessed, this is where our posts will live.

Let’s create three blog posts:

```markdown
---
title: Playing dead
date: 2022-06-01
layout: post.html
tags: 
  - posts
---
Opossums have a physiological response to play dead when
danger is presented. They have no control over this response,
similar to fainting for humans.
```


```markdown
---
title: Tick eaters
date: 2022-06-02
layout: post.html
tags: 
  - posts
---
Ticks don't stand a chance with opossums around. A single 
opossum can eat up to 5,000 ticks per season.
```


```markdown
---
title: Immunities
date: 2022-06-03
layout: post.html
tags: 
  - posts
---
Opossums have a wide range of natural immunities 
including rabies, snake venom, honeybee stings, 
and botulism toxin. (I hope they enjoy their natural wrinkles.)
```

We need to create a layout specifically for a post at `/_includes/post.html`\:

{% raw %}
 ```html
---
layout: page.html
---
<h1>{{ title }}</h1>
<p>{{ date | date: "%Y-%m-%d" }}</p>
{{ content }}
```
{% endraw %}

One thing to note here is we have front matter in a layout, which is setting another layout. In Eleventy, this is called layout chaining: our posts call the `post.html` layout, which in turn calls the `page.html` layout. This allows us to reuse layouts in a variety of situations which promotes better maintainability.

Finally, let’s add the blog to the navigation. Open `/_includes/_nav.html` and add another list item:

{% raw %}
 ```html
<li><a href="/blog/">Blog</a></li>
```
{% endraw %}

Take a look at the site in your browser and navigate through your very own Eleventy-powered blog.

## Cleaning up

I keep harping on about repetition, but spotting and reducing repetition really does make your life so much easier in the long run.

In our blog, you may have spotted one area that has heavy repetition. Each post sets a `post.html` layout and a tag of `posts`. For this site, we’re always going to do this for a post, so how can we automate this process?

Fortunately, Eleventy has an answer for us in the form of a [directory specific data file](https://www.11ty.dev/docs/data-template-dir/). The way it works is we create a JSON file in our `posts` directory named `posts.json` with the desired front matter data for all the pages in the directory.

Let’s break it down. First create `/posts/posts.json` with the following content:

```json
{
  "layout": "post.html",
  "tags": ["posts"] 
}
```

This is JSON rather than YAML, so while the syntax is slightly different from what we saw in the post files, the data structure is exactly the same.

Now we can remove the following from the post files' front matter:

```markdown
layout: post.html
tags: 
  - posts
```

and *voila*. Hello, easier-to-maintain code\!

As your blog grows, you may want to look at paginating the blog list page. Pagination is outside the scope of this tutorial, however, if you’re interested, [check out the docs](https://www.11ty.dev/docs/pagination/). Eleventy has one of the nicest built-in pagination systems.

## What’s next?

In our final lesson, we’ll use a global data file to populate a map with top locations to spot an opossum.