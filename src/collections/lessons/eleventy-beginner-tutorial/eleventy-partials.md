---
title: Eleventy Partials
image: https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/eleventy-beginner-tutorial-3-partials.png
order: 3
tutorial: eleventy-beginner-guide
description: >-
  Learn how to break down your Eleventy pages into smaller “components” with
  partials in this Eleventy tutorial.
---
Partials are a way to include a snippet of code into a layout with the goal of reducing repetition or hiding some complexity. In this lesson, we’ll add a navigation bar to the site using a partial. While we could add the nav bar to our existing layout, it’s easier to maintain a site which is broken down into small components rather than sprawling thousand-line files.

## Your first partial

Partials live in the `_includes` directory we’ve already created and typically have a convention of starting the filename with an underscore to distinguish them from layouts. Create `/_includes/_nav.html` with the following contents:

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

That’s all there is to the navigation. Now we can include it in our layout. Open `/_includes/page.html` and add the following below `</body>`\:

{% raw %}
 ```html
{% include '_nav.html' %}
```
{% endraw %}

Render the page and admire your new navigation.

## Your second partial

Another great use for partials is to hide complexity. Typically the `<head>` will contain all sorts of asset references, SEO tags, social tags, and analytics scripts. I like to pull all of this HTML into a partial to simplify the layout and make the tags easier to find.

Create `/_includes/_meta.html` with the following contents:

{% raw %}
 ```html
<meta charset="utf-8">
<title>{{ title }}</title>
<link rel="stylesheet" href="/assets/main.css">
```
{% endraw %}

And replace the contents of `<head>` in `/_includes/page.html` with an include:

{% raw %}
 ```html
{% include '_meta.html' %}
```
{% endraw %}

The rendered site should look exactly the same, only this time it’s a little bit easier for you to maintain.

## What’s next?

In the next lesson we’ll go over the basics of templating using Liquid in Eleventy.
