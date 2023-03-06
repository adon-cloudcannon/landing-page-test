---
title: Navigation
image: 
order: 3
lead_score: 1
tutorial: bootstrap-to-a-client-editable-hugo-site
description: >-
  Simplify your navigation, and learn some Hugo magic to make it easier to
  maintain.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---
### What you'll learn here

* Separating navigation from the layout
* Using Hugo's inbuilt navigation system
* Basic Hugo partial usage

```shell
# Starting repo:
git clone git@github.com:CloudCannon/Megakit-Bootstrap-Agency-Template.git

# Starting branch:
git checkout nav-start

# Finished branch:
git checkout nav-finish
```

Let’s hone in on the navigation and sprinkle some Hugo magic to make it easier to maintain. The navigation in this template can go up to three levels deep. Hugo can handle this, but for the purposes of this tutorial, we’re going to simplify it down to a single level.

[Hugo has built-in menu support](https://gohugo.io/content-management/menus/) to help us separate the content structure of the navigation from the templating. Open `/hugo_src/config.toml` and add the following TOML to the bottom of it:

```toml
[menu]
  [[menu.main]]
    identifier = "home"
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    identifier = "about"
    name = "About"
    url = "/about/"
    weight = 2
  [[menu.main]]
    identifier = "services"
    name = "Services"
    url = "/services/"
    weight = 3
  [[menu.main]]
    identifier = "portfolio"
    name = "Portfolio"
    url = "/portfolio/"
    weight = 4
  [[menu.main]]
    identifier = "pricing"
    name = "Pricing"
    url = "/pricing/"
    weight = 5
  [[menu.main]]
    identifier = "blog"
    name = "Blog"
    url = "/blog/"
    weight = 6
  [[menu.main]]
    identifier = "contact"
    name = "Contact"
    url = "/contact/"
    weight = 7
```

This sets up the basic structure for our menu with a `name` and `url`, and handles the ordering with the `weight` field. Coding Concepts has a great example of [how to handle nested menus](https://codingnconcepts.com/hugo/nested-menu-hugo/) if you want to go the extra mile.

With the content structure in place, we can use Hugo’s templating language to iterate over the main menu to build the navigation. We’ll create a [partial](/tutorials/hugo-tutorial/hugo-partials/) for our navigation logic so we don’t overcomplicate our layout. Create a `partials` directory inside `layouts` and create `/hugo_src/layouts/partials/nav.html` with the following:

{% raw %}
 ```html
<div id="navbar">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <nav class="navbar navbar-expand-lg px-0 py-4">
          <a class="navbar-brand" href="/">
            Mega<span>kit.</span>
          </a>
    
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09"
            aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-bars"></span>
          </button>
    
          <div class="collapse navbar-collapse text-center" id="navbarsExample09">
            <ul class="navbar-nav ml-auto">
              {{ $current := . }}
              {{ range .Site.Menus.main }}
                <li class="nav-item {{ if eq $current.RelPermalink .URL }}active{{ end }}">
                  <a class="nav-link" href="{{ .URL }}">{{ .Name }}</a>
                </li>
              {{ end }}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>
```
{% endraw %}

The majority of this file is the Bootstrap HTML from the original template. Where things get interesting from a Hugo point of view is iterating over the menu items:

{% raw %}
 ```html
{{ $current := . }}
{{ range .Site.Menus.main }}
  <li class="nav-item {{ if eq $current.RelPermalink .URL }}active{{ end }}">
    <a class="nav-link" href="{{ .URL }}">{{ .Name }}</a>
  </li>
{{ end }}
```
{% endraw %}

We iterate over each item using the [range](https://gohugo.io/functions/range/) function, checking if the current page’s relative permalink is the same as that menu item; if it is we add an active class. Then we output an `<a>` tag with the URL and name. Now we can update the menu in our `config.toml` file and be sure each menu item will be rendered consistently.

Finally, we need to tell our layout to use our new `nav.html` partial. Open up `/hugo_src/layouts/baseof.html` and replace the entire `<div id="navbar">` (it ends just before `</header>`) with this:

{% raw %}
 ```html
{{ partial "nav.html" . }}
```
{% endraw %}

Ideally we’d make similar changes to the footer to make it easier to maintain. In the interest of keeping this tutorial shorter, I’m going to leave that as homework for you.
