---
title: Blogging in Hugo
image: 
order: '5'
tutorial: hugo-beginner-tutorial
description: |-
  In this Hugo tutorial you will learn how to create a blog with Hugo content
    and layouts.
---

{% bookshop "markdown/youtube" id:"fa-hCPDy0Rg" title:"Blogging in Hugo" extend:false %}

A blog in Hugo is relatively straightforward. It consists of a page that lists all the blog posts, and a series of content pages with a date for the posts. That’s all there is to it.

## Creating a blog list page

You’re going to see how the layouts hierarchies work with this example.

Create a directory called `posts` in your `/content/` directory, and inside that, create a file called `_index.md` with the following:

```markdown
---
title: Blog
---
```

`_index.md` — remember what that means? It’s a table of contents file, and in this case it will be listing your posts. At the moment, it’s going to try to use the `/layouts/_default/list.html` layout. You don’t want to use this layout as this page doesn’t have any content. Instead, you’ll want to create a new layout specifically for listing posts.

The way the Hugo layout hierarchy works is it will first look for a layout that matches the current section (think of section as the directory), then fall back to the global default in `_default`. In other words, we can create a new directory called `posts` in the layouts directory, and inside create `list.html` with the following content:

{% raw %}
```markdown
{{ define "main" }}
  <h1>My posts</h1>
  <ul>
  {{ range .Pages }}
    <li>
      <a href="{{ .Permalink }}">{{ .Title }}</a> - {{ .Date.Format "January 2, 2006" }}
    </li>
  {{ end }}
  </ul>
{{ end }}
```
{% endraw %}

There are few new concepts here; let me explain.

1. A list page (`_index.html`) has an array of all its children pages with the variable `.Pages`.
2. `.Date` has format called on it and gets passed a random date in 2006. Why is that? It’s a quirk of Go for formatting dates. You can read more about it [here](https://gohugo.io/functions/format/#gos-layout-string).
3. `.Permalink` can be called on any page to get its end URL. It’s particularly useful if you want to link to a page.

That’s all we need for our list page. Let’s move onto a post.

## Creating a post

We’ve already done the hard part. Let’s get this blog finished by creating a few posts.

The posts live in the `/content/posts` directory and don’t require any special naming convention. One tip I like to encourage is adding the date of the post to the file name. Hugo will completely ignore it, but it helps when you have find a post amongst hundreds of others.

Let’s create three blog posts to get you started.

`/contents/posts/2022-04-03-i-like-to-roar.md`

```markdown
---
title: I like to roar
date: 2022-04-03
---
Hi, quick update from me. I just want to let everyone know that I like roaring.

```

`/contents/posts/2022-04-02-today-i-made-friends.md`

```markdown
---
title: Today I made friends
date: 2022-04-02
---
I got lost in the woods today. Two friends, a Meerkat and a Warthog, found me,
sung a song with me and gave my life new meaning. Today was a good day.
```

`/contents/posts/2022-04-01-vegan-experiment.md`

```markdown
---
title: Vegan experiment
date: 2022-04-01
---
I tried to become a vegan today. I made it to lunch time and couldn't bear the 
sight of another green leaf. Yuck!
```

Just like the blog list page, these posts will try to use `/layouts/_default/single.html`. Let’s create a layout specifically for posts at `/layouts/posts/single.html` with the following:

{% raw %}
 ```html
{{ define "main" }}
  <h1>{{ .Params.Title }}</h1>
  <p>{{ .Date.Format "January 2, 2006" }}</p>
  {{ .Content }}
{{ end }}
```
{% endraw %}

Finally, let’s add the blog to the navigation. Open `/layouts/partials/nav.html` and add another item:

{% raw %}
 ```html
<li><a href="/posts/">Blog</a></li>
```
{% endraw %}

Run `hugo serve`, open the site in a browser and view your masterpiece.

## What’s next?

[In our final lesson](/community/learn/hugo-beginner-tutorial/using-data-in-hugo/), we will use Hugo Data files to populate a map with your favorite vacation spots.
