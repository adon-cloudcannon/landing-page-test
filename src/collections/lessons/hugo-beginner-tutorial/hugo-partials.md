---
title: Hugo Partials
image: 
order: '3'
tutorial: hugo-beginner-tutorial
description: |-
  Learn how to break down your Hugo pages into smaller “components” with
    partials in this Hugo tutorial.
---

{% bookshop "markdown/youtube" id:"EGwLmE7hfSE" title:"Hugo Partials" extend:true %}

The idea behind a partial is simple: it’s a file that can be included into a layout to reduce repetition or simply hide some complexity. You’ll add a nav bar to your site with a partial. While you could add this logic directly to your `baseof.html`, sometimes it’s nice to split a layout up into smaller partials so you don’t need to deal with a 2000-line file.

## Your first partial

Create a `partials` directory in your `layouts` directory so the final path will be `/layouts/partials/`. Inside create `nav.html` with the following contents:

{% raw %}
 ```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About</a></li>
  </ul>
</nav>
```
{% endraw %}

That’s the navigation taken care of. Now it’s time to include it in your layout. Open `/layouts/_default/baseof.html` and add the following below `<body>`\:

{% raw %}
 ```html
{{ partial "nav.html" }}
```
{% endraw %}

In Go, your single quotes are no good for strings, only double quotes designate a string.

Render your page, and there you have it.

## Your second partial

Let’s try another scenario to demonstrate the power of partials. We will simplify `baseof.html` even further by moving the contents of `<head>` to a partial. Create `/layouts/partials/meta.html` with the following content:

{% raw %}
 ```html
<meta charset="utf-8">
<title>{{ print .Page.Title }}</title>
{{ $style := resources.Get "sass/main.scss" | resources.ToCSS | resources.Minify }}
<link rel="stylesheet" href="{{ $style.Permalink }}">
```
{% endraw %}

In this partial, we have variables that need the context of the current page. Lucky for you, passing the context of the current page can be done with a single character.

Open up `/layouts/_default/baseof.html` and replace the contents of `<head>` with the following:

{% raw %}
 ```html
{{ partial "meta.html" . }}
```
{% endraw %}

That little `.` at the end is passing the context of the current page, which allows the partial to print out the current page’s title. You’ll see this come up a lot in your Hugo sites, just you wait.

## What’s next?

In the [next lesson we’ll go through the basics of Hugo templating](/community/learn/hugo-beginner-tutorial/hugo-templating-basics/) and see how we can manipulate and iterate over data.
