---
title: Your first layout
image: 
order: '2'
lead_score: 1
tutorial: bootstrap-to-a-client-editable-hugo-site
description: Set up your first layout to set the overall look and feel of the site.
---

### What you'll learn here

* Hugo’s layout naming and structure conventions
* How to create and use basic layouts
* How to get the assets working once in Hugo

```shell
# Starting repo:
git clone git@github.com:CloudCannon/Megakit-Bootstrap-Agency-Template.git

# Starting branch:
git checkout layouts-start

# Finished branch:
git checkout layouts-finish
```

Layouts contain the structure of the website. Hugo has strict conventions when it comes to layouts; you can learn more about this in our [getting started with Hugo series](https://cloudcannon.com/community/learn/hugo-tutorial/layouts-in-hugo/).

To begin, create the overarching layout for the site at `/hugo_src/layouts/_default/baseof.html`; you’ll have to create the `_default` directory here too. As a starting point, let’s copy the contents of `/theme/index.html` into this file. This is an entire page of the site — doctype, meta-tags, navigation, content, footer, everything\!

The page title is critical for SEO and accessibility and should reflect the purpose of the page. Currently the title is hardcoded, so as we add more pages, it won’t change. Let’s fix that.

Hugo uses Go templating. If it’s your first time using it, the scoping and context can be a little confusing. [Régis Philibert](https://twitter.com/regisphilibert) [has a great introduction](https://www.regisphilibert.com/blog/2018/02/hugo-the-scope-the-context-and-the-dot/) to these concepts if you’re looking to gain a deeper understanding.

In our new `baseof.html` layout, find the `<title>` and replace it with this:

{% raw %}
 ```html
<title>{{ print .Page.Title " | " .Site.Title }}</title>
```
{% endraw %}

This is going to construct the page title from a page variable followed by a `|`, followed by a variable set for the entire site. Let’s set the site level title now; we’ll set the page level title shortly.

Open `/hugo_src/config.toml` and change the title (or add it if it doesn’t exist):

```toml
title = 'Megakit'
```

One of the key concepts of Hugo (and SSGs in general) is separating content from layout.

Our next step is to move the content from `baseof.html` to a content file and replace it with placeholders for the content. Remove everything in between `</header>` and `<footer>` in your layout and replace it with:

{% raw %}
 ```html
{{ block "main" . }}{{ end }}
```
{% endraw %}

`baseof.html` is our overarching layout. The block keyboard allows other layouts to inherit this layout and specify their own main.

Let’s do exactly that. Create `/hugo_src/layouts/_default/list.html` and add the following:

{% raw %}
 ```html
{{ define "main" }}
  {{ .Content }}
{{ end }}
```
{% endraw %}

You might wonder why this file is called `list` and why we can’t just add {% raw %}`{{ .Content }}`{% endraw %} to `baseof.html`. At a high level, Hugo has two types of pages:

* A **branch bundle** is designated with an underscore at the beginning of the file name. Branch bundles are used to list their children (think of a blog list page).
* A **leaf bundle** is a normal page which is a child of a branch bundle (think blog post).

We don't want our index page to list anything but we need to create a **branch bundle**, hence the list layout and why the index file we're about to create is called `_index.md`.

Now we’ll create a content file and check the website is working end-to-end. Create `/hugo_src/content/_index.md` with the following:

```markdown
---
title: "Home"
---
It's working!
```

The two triple dashed lines indicate an area of the page where you can add metadata, also known as the page’s front matter.

Everything that follows is markdown, and will be automatically converted into HTML for you. Here we’ve set our page level title as **Home**.

We’re ready to test the site. Open your terminal to the `/hugo_src/` directory and run:

```shell
hugo serve
```

This will build your site and serve it locally at [http://localhost:1313/](http://localhost:1313/) (by default). Open this in the browser and you should see an unstyled header, footer and your “It’s working\!” content right in the middle.

The page looks a little bare as is, so let’s get styles, scripts, and images on the page.

Let’s start with the easy stuff — some copying and pasting will get us quite far. Copy the following directories:

* `/theme/plugins/` → `/hugo_src/static/plugins/`
* `/theme/images/` → `/hugo_src/static/images/`
* `/theme/js/` → `/hugo_src/static/js/`

If you look at the rendered page now, it’ll have some styles and images. We’re missing the main stylesheet for the site, however. We could copy the built CSS files from `/theme/css/` to our static folder, but it would be nicer to keep the scss files from the source and have Hugo build them, to make it easier to update and maintain in the future.

Create the directory `/hugo_src/assets/` and copy the directory `/source/scss/` to `/hugo_src/assets/scss/`.

Now we need to tell Hugo to build the SCSS files. Open our `baseof.html` layout and find the main stylesheet:

{% raw %}
 ```html
<!-- Main Stylesheet -->
<link rel="stylesheet" href="css/style.css">
```
{% endraw %}

and replace it with this:

{% raw %}
 ```html
{{ $style := resources.Get "/scss/style.scss" | resources.ToCSS | resources.Minify | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $style.Permalink }}" />
```
{% endraw %}

You may need to restart your Hugo server for the changes to take effect.

When you view the page in the browser now, you should see a black, styled header. The page content “It’s working\!” will be in an odd position for now; we’ll get to this soon.

We’re close to having all our assets sorted. The last step will prevent us running into issues when we add new pages. Currently the paths to the assets are relative to the current page. For example:

{% raw %}
 ```html
<link rel="stylesheet" href="plugins/bootstrap/bootstrap.min.css">
```
{% endraw %}

We want them to be absolute paths so the paths of new pages won’t impact where the browser attempts to load the assets from. This is as simple as going through all the elements referencing assets in `<head>` and the scripts before `</body>` and adding a `/` to the start of the path. For example:

{% raw %}
 ```html
<link rel="stylesheet" href="/plugins/bootstrap/bootstrap.min.css">
```
{% endraw %}



