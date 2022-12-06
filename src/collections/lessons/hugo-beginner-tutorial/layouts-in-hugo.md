---
title: Layouts in Hugo
image: 
order: '2'
tutorial: hugo-beginner-tutorial
description: >-
  Learn how layouts help you set up and reuse the main structure of your Hugo
  site. 
---

{% bookshop "markdown/youtube" id:"xRwZmWItIBA" title:"Hugo Partials" extend:true %}

Making good use of layouts is essential to creating an easy-to-maintain, flexible, and thriving Hugo website, so let’s see what makes them tick.

## What is a layout?

A layout is used for all the ‘framing’ on a page around the content. For example, think of all the things that remain relatively unchanged between pages on a website, such as the header and footer.

In Hugo, each page on the site is a content file. At the top is a small snippet of metadata called front matter, followed by markdown. The goal of a content file is, well, to store the content in its purest form. There’s rarely any HTML or other presentation logic in a content file.

All of the fancy HTML to display and format the content lives in a layout. One layout might be used for multiple content pages. For example, on a portfolio website you might use the same layout for your about page and services page. Other times, particularly if you’re doing something intricate, you might have a layout specifically for an individual content page, for example a contact page with a complex form.

## Your first page

There’s a Hugo concept called [Page Bundles](https://gohugo.io/content-management/page-bundles/) which can be tricky to get your head around. We’re going to do the bare minimum here to get your site going.

By default, content pages use a layout called `single`. Creating a content file which is named exactly `_index.md`, underscore and all, is the exception to this. These pages act like a table of contents for the pages around it and use a layout called `list` by default.

Just like a good non-fiction book, it’s a good practice to start off with a table of contents. You’ll do this for the home page of your site.

If all that sounded confusing, it’s actually much simpler than it sounds. Create a file called `_index.md` in the directory `/content/` with the following content:

```markdown
---
title: Home
---
Hello, I'm a ferocious lion.
```

The `---` lines indicate the metadata or front matter I mentioned before. We’ll get to that in a future lesson.

## Your first layout

Hugo has a [hierarchy to figure out which layout to use](https://gohugo.io/templates/lookup-order/) for a content\_d file. The last fallback is looking for a layout in the `_default` directory. Let’s create a default list layout for your home page.

Create a new directory inside `/layouts/` called `_default` and inside, create `list.html` with the following content:

{% raw %}
 ```html

<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>{{ .Page.Title }}</title>
</head>

<body>
  {{ .Content }}
</body>
</html>
```
{% endraw %}

Those {% raw %}`{{ *** }}`{% endraw %} parts are rendering content from our content file (`_index.md`) using Hugo templating which we’ll cover soon.

You’ve got everything you need to render your first page. Will it build or will it error? There’s only one way to find out.

Hugo has a command called `serve` which will build your site and serve it locally at [http://localhost:1313/](http://localhost:1313/) (by default). Run this command in the root of your site and open the [localhost address](http://localhost:1313/) in your browser:

```shell

hugo serve
```

Look at you go\! That’s real content rendering through a layout on your Hugo site. Let’s celebrate with a second page on your site.

## Your second layout

Let’s get a second page on your website. Create `/content/about.md` (note that we’re not using an underscore here):

```markdown
---
title: About
---
I'm learning Hugo, one step at a time.
```

`about.md` looks for a layout named `single` by default. We could clone `/layouts/_default/list.html` to `/layouts/_default/single.html` and it would work fine, but you’d be left maintaining two, very similar versions of the same layout. We want to reduce repetition and make our lives easier where ever possible.

Instead, create a new layout at `/layouts/_default/baseof.html` with the following content:

{% raw %}
 ```html

<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>{{ .Page.Title }}</title>
</head>

<body>
  {{ block "main" . }}
  {{ end }}
</body>
</html>
```
{% endraw %}

This is almost identical to the `list` layout, with one minor change. Instead of outputting {% raw %}`{{ .Content }}`{% endraw %}, we now have a main ‘block’. This block is a placeholder that other layouts can use to only specify that part of the page.

Let’s do that with your list layout. Replace the entre contents of `/layouts/_default/list.html` with the following:

{% raw %}
 ```html

{{ define "main" }}
  {{ .Content }}
{{ end }}
```
{% endraw %}

Create `/layouts/_default/single.html` with the exact same code.

Try going to [http://localhost:1313/about/](http://localhost:1313/about/) and see your new about page.

## Adding styles

This is a Hugo course so we’re not going to go into any CSS. However, you and I can both agree that the default browser styles leave a lot to be desired. Not only am I going to give you a stylesheet, it’s going to be a [Sass](https://sass-lang.com/) stylesheet to make it easy to maintain as you expand your website.

We already have a directory called `static` where all the static assets live. If we were using a plain CSS file, this would be the place to put it. We’re using Sass which needs to be processed into a CSS file.

Create a directory in the root of your site called `/assets/`. This is where the assets that need some form of processing will live. Inside assets, create a directory called `sass`. This is where our `.scss` files will live. Let’s create a main file at `/assets/sass/main.scss` with the following:

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

We also need to reference the stylesheet in our HTML. Open `/layouts/_default/baseof.html` and insert the following below `</title>`\:

{% raw %}
 ```html

{{ $style := resources.Get "sass/main.scss" | resources.ToCSS | resources.Minify }}
<link rel="stylesheet" href="{{ $style.Permalink }}">
```
{% endraw %}

This tells Hugo to build the `.scss` files and output the link in a stylesheet tag. You’ll notice this will apply to both the `list` and `single` layouts. That work we did earlier is already coming in handy\! You may need to restart your `hugo serve` to see the changes in your browser.

## What’s next?

The only way to access the about page currently is by navigating to it directly. In the [next lesson we’ll add site navigation using a Hugo partial](/community/learn/hugo-beginner-tutorial/hugo-partials/).
