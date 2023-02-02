---
title: Layouts in Eleventy
image: https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/eleventy-beginner-tutorial-2-layouts.png
order: 2
tutorial: eleventy-beginner-guide
description: >-
  Learn how layouts help you set up and reuse the main structure of your
  Eleventy site.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---
Let’s set up our first page on our Eleventy site. Create `/index.html` with the following content:

{% raw %}
 ```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Home</title>
</head>

<body>
  <p>Hello, I'm an Opossum.</p>
</body>
</html>
```
{% endraw %}

Pretty simple right? Now we can run Eleventy’s `--serve` command to build the site and serve it locally at [http://localhost:8080](http://localhost:8080/).

```shell
npx @11ty/eleventy --serve
```

Now open [http://localhost:8080](http://localhost:8080) in your web browser and see your masterpiece.

”What’s the big deal — isn’t this just a static website?”, I hear you say. You’re 100% right. At the moment this is a purely static website; let’s add some Eleventy magic.

One of the main benefits of a static site generator over a purely static website is reducing repetition. One tool Eleventy gives us to reduce repetition is layouts. A layout is typically comprised of all the HTML on a website that remains relatively unchanged between the pages of the site. The head metadata, header, navigation, and footer are often perfect candidates for a layout.

Let’s take everything except the content of our `/index.html` file and put it into a layout so it can be used for other pages.

## Your first layout

Create a directory in the root of your site called `_includes` and inside that, create a file called `page.html` with the following contents:

{% raw %}
 ```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>{{ title }}</title>
</head>

<body>
  {{ content }}
</body>
</html>
```
{% endraw %}

This is almost identical to our original index file except it has two snippets: `{{ title }}` and `{{ content }}` replacing the content we had for this page. These snippets are a templating language called [Liquid](https://liquidjs.com/). If you’ve used the static site generator Jekyll before, this will all look very familiar.

Now we can reference the new layout in `/index.html` and change the page to only specify the placeholders for content — title and content. Replace the contents of `/index.html` with the following:

{% raw %}
 ```html
---
title: Home
layout: page.html
---
<p>Hello, I'm an Opossum.</p>
```
{% endraw %}

You may have noticed the triple dashes at the top of the file. These dashes indicate metadata for the page, commonly known as front matter. We’ll dive deeper into front matter later in the series. For now, I want you to see the connection between setting the title in the page front matter and referencing it in the layout file. We’re also using front matter here to tell Eleventy which layout to use for this page.

The body content is available using the `{{ content }}` variable in the layout. Let’s make one further iteration here. This content is relatively simple and would be a great fit for Markdown. If we change the extension of our index file to `.md` and change the body content to Markdown (in this case by simply removing `<p>` and `</p>`), we have an even simpler way to maintain our content. The end result looks like this:

```markdown
---
title: Home
layout: page.html
---
Hello, I'm an Opossum.
```

## Your second page

Let’s create a second page on the site to demonstrate how the layout is doing most of the heavy lifting for us.

Create `/about.md` with the following content:

```markdown
---
title: About
layout: page.html
---
I'm an Opossum joey building my first Eleventy site.
```

Navigate directly to the new about page at [http://localhost:8080/about/](http://localhost:8080/about/). Wow, so easy\!

## Adding styles

We’re not going to go into any CSS details in this series to keep the focus on learning Eleventy. That doesn’t mean we’re going to avoid the subject completely however, learning how to build [Sass](https://sass-lang.com/) files will be extremely valuable throughout your Eleventy journey.

Eleventy doesn’t have Sass support built in, however it is easy to add with a plugin. First we’ll install the `eleventy-sass` plugin to our site:

```shell
npm install --save-dev eleventy-sass
```

Next we’ll tell Eleventy about this plugin. Create `.eleventy.js` in the root of your site and add the following:

```javascript
const eleventySass = require("eleventy-sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
};
```

`.eleventy.js` is where the global configuration for our eleventy site lives. In this case we’re importing the `eleventy-sass` plugin and loading it into Eleventy as a plugin. Now any `.scss` file will automatically be built into a `.css` file. Let’s take advantage of this. Create a new folder in the root named `assets` and inside that, a file named `main.scss` with the following contents:

```scss
body {
  width: 400px;
  margin: 0 auto;
  font-family: sans-serif;
}

nav ul {
  list-style: none;
  padding: 3px 5px;
  background: #111;

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

footer {
  background: #f2f2f2;
  padding: 2px 2px;
  font-size: .7em;
  text-align: center;
}

#map {
  height: 300px;
}
```

Finally we need to reference the CSS in our layout below `</title>`\:

{% raw %}
 ```html
<link rel="stylesheet" href="/assets/main.css">
```
{% endraw %}

Looking at [your site](http://localhost:8080) in the browser now, you’ll see some very basic styling.

## What’s next?

The only way to get to the `about` page currently is by navigating directly to it. In the next lesson, we’ll use a partial to add navigation to the page.


