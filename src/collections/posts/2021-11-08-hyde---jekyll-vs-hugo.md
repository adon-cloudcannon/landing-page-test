---
title: Comparing a Jekyll and Hugo template
image:  https://cc-dam.imgix.net/blog/uploads/hyde-theme.png
permalink: /blog/showcase-hyde---jekyll-vs-hugo/
date: 2021-11-08T13:00:00+1300
description: >-
  For this showcase, I thought it would be interesting to compare the
  implementations of a template with both Jekyll and Hugo versions.
tags:
  - Resources
  - Hugo
  - Jekyll
author: cloudcannon
---
For this showcase, I thought it would be interesting to compare the implementations of a template with both Jekyll and Hugo versions.

## Layout

Let's start with the overarching layout. This is [\_default.html](https://github.com/poole/hyde/blob/master/_layouts/default.html) on the Jekyll site:

{% raw %}
 ```liquid
<!DOCTYPE html>
<html lang="en-us">

  {% include head.html %}

  <body>

    {% include sidebar.html %}

    <div class="content container">
      {{ content }}
    </div>

  </body>
</html>
```
{% endraw %}

and [baseof.html](https://github.com/spf13/hyde/blob/master/layouts/_default/baseof.html) on the Hugo site:

{% raw %}
 ```go
{{ partial "head.html" . }}
  <body class="{{ .Site.Params.themeColor }} {{if .Site.Params.layoutReverse}}layout-reverse{{end}}">
  {{ partial "sidebar.html" . }}
    <main class="content container">
    {{ block "main" . -}}{{- end }}
    </main>

    {{ if not .Site.IsServer }}
      {{ template "_internal/google_analytics.html" . }}
    {{ end }}
  </body>
</html>
```
{% endraw %}

The code is very similar in these layouts. It's interesting seeing the subtle differences between Jekyll and Hugo with includes/partials and content blocks. Hugo adds more options allowing you to set a theme color, reverse the layout and set up Google Analytics.

One subtle difference is the head.html include in Jekyll doesn't include the `<html>` tag and doctype, whereas the Hugo partial does. I'm a big fan of opening and closing HTML tags in the same file. Untangling nested elements across multiple files is a nightmare.

The post layout is slightly different between the two implementations. [In Jekyll](https://github.com/poole/hyde/blob/master/_layouts/post.html) we have a related posts section:

{% raw %}
 ```liquid
---
layout: default
---

<div class="post">
  <h1 class="post-title">{{ page.title }}</h1>
  <span class="post-date">{{ page.date | date_to_string }}</span>
  {{ content }}
</div>

<div class="related">
  <h2>Related Posts</h2>
  <ul class="related-posts">
    {% for post in site.related_posts limit:3 %}
      <li>
        <h3>
          <a href="{{ post.url }}">
            {{ post.title }}
            <small>{{ post.date | date_to_string }}</small>
          </a>
        </h3>
      </li>
    {% endfor %}
  </ul>
</div>
```
{% endraw %}

Where as [in Hugo](https://github.com/spf13/hyde/blob/master/layouts/_default/single.html) this has been changed to a Disqus comments section:

{% raw %}
 ```go
{{ define "main" -}}
<div class="post">
  <h1>{{ .Title }}</h1>
  <time datetime={{ .Date.Format "2006-01-02T15:04:05Z0700" }} class="post-date">{{ .Date.Format "Mon, Jan 2, 2006" }}</time>
  {{ .Content }}
</div>

{{ if .Site.DisqusShortname -}}
<h2>Comments</h2>
{{ template "_internal/disqus.html" . }}
{{- end }}
{{- end }}
```
{% endraw %}

## Post

The posts on the Hyde site in [Jekyll](https://raw.githubusercontent.com/poole/hyde/master/_posts/2012-02-06-whats-jekyll.md) a straightforward: YAML front matter with a body of Markdown.

```markdown
---
layout: post
title: What's Jekyll?
---

[Jekyll](http://jekyllrb.com) is a static site generator, an open-source tool for creating simple yet powerful websites of all shapes and sizes. From [the project's readme](https://github.com/mojombo/jekyll/blob/master/README.markdown):

> Jekyll is a simple, blog aware, static site generator. It takes a template directory [...] and spits out a complete, static website suitable for serving with Apache or your favorite web server. This is also the engine behind GitHub Pages, which you can use to host your project’s page or blog right here from GitHub.

It's an immensely useful tool and one we encourage you to use here with Hyde.

Find out more by [visiting the project on GitHub](https://github.com/mojombo/jekyll
```

One minor improvement I'd make here is setting the layout as a default in the \_config.yml rather than specifying it on each post.

```yaml
defaults:
  -
    scope:
      path: ""
      type: posts
    values:
      layout: post
```

On the Hugo site we don't have any posts, instead we have an [archetype](https://gohugo.io/content-management/archetypes/) - a template to create new posts:

```markdown
+++
Description = ""
Tags = ["Development", "golang"]
Categories = ["Development", "GoLang"]
menu = "main"
+++
```

The structure is TOML front matter with an empty body for Markdown. The menu = "main" in the front matter adds the post to the sidebar:

{% raw %}
 ```go
<ul class="sidebar-nav">
  <li><a href="{{ .Site.BaseURL }}">Home</a> </li>
  {{ range .Site.Menus.main -}}
    <li><a href="{{.URL}}"> {{ .Name }} </a></li>
   {{- end }}
</ul>
```
{% endraw %}

Where as Jekyll iterates over all pages with a layout of "page" for the sidebar.

{% raw %}
 ```liquid
{% assign pages_list = site.pages %}
{% for node in pages_list %}
  {% if node.title != null %}
    {% if node.layout == "page" %}
      <a class="sidebar-nav-item{% if page.url == node.url %} active{% endif %}" href="{{ node.url }}">{{ node.title }}</a>
    {% endif %}
  {% endif %}
{% endfor %}
```
{% endraw %}

The Hugo site could do with two archetypes, one for a page and one for the post. At the moment, the archetype is in-between. We have posts with tags and categories but no date.

## Post list

On the Jekyll site, the [Post list page](https://github.com/poole/hyde/blob/master/index.html) iterates over the paginated posts and outputs the title, URL, date, and content:

{% raw %}
 ```liquid
<div class="posts">
  {% for post in paginator.posts %}
  <div class="post">
    <h1 class="post-title">
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h1>

    <span class="post-date">{{ post.date | date_to_string }}</span>

    {{ post.content }}
  </div>
  {% endfor %}
</div>
```
{% endraw %}

There's also handling of the pagination below the posts.

{% raw %}
 ```liquid
<div class="pagination">
  {% if paginator.next_page %}
    <a class="pagination-item older" href="{{ site.baseurl }}page{{paginator.next_page}}">Older</a>
  {% else %}
    <span class="pagination-item older">Older</span>
  {% endif %}
  {% if paginator.previous_page %}
    {% if paginator.page == 2 %}
      <a class="pagination-item newer" href="{{ site.baseurl }}">Newer</a>
    {% else %}
      <a class="pagination-item newer" href="{{ site.baseurl }}page{{paginator.previous_page}}">Newer</a>
    {% endif %}
  {% else %}
    <span class="pagination-item newer">Newer</span>
  {% endif %}
</div>
```
{% endraw %}

The [Hugo post list page](https://github.com/spf13/hyde/blob/master/layouts/index.html) is much more simple. It iterates over all the pages on the site and outputs the title, URL, and summary with a date.

{% raw %}
 ```liquid
{{ define "main" -}}
<div class="posts">
{{ range .Site.RegularPages -}}
<article class="post">
  <h1 class="post-title">
    <a href="{{ .Permalink }}">{{ .Title }}</a>
  </h1>
  <time datetime="{{ .Date.Format "2006-01-02T15:04:05Z0700" }}" class="post-date">{{ .Date.Format "Mon, Jan 2, 2006" }}</time>
  {{ .Summary }}
  {{ if .Truncated }}
  <div class="read-more-link">
    <a href="{{ .RelPermalink }}">Read More…</a>
  </div>
  {{ end }}
</article>
{{- end }}
</div>
{{- end }}
```
{% endraw %}

There's still work to do to get the Hugo site into a usage state for a blog. I need to filter this to only posts and populate the date from the post itself. 

## Summary

That wraps up the comparison of the Jekyll vs. Hugo Hyde template. It's always interesting to see implementation differences between static site generators. If you have a template or site you'd like a showcase, reach out to us on [Twitter](https://twitter.com/CloudCannon).
