---
title: Comparing a Jekyll and Hugo template
image:  https://dam-cdn.cloudcannon.com/blog/uploads/hyde-theme.png
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
content_blocks:
  - _bookshop_name: heading-and-text
    heading: Layout
    content_markdown: >-
      Let's start with the overarching layout. This
      is&nbsp;[\_default.html](https://github.com/poole/hyde/blob/master/_layouts/default.html)&nbsp;on
      the Jekyll site:
    heading_type: h2
    col:
  - _bookshop_name: code-block
    source:
    language: liquid
    code_block: |-
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
  - _bookshop_name: text
    col: 1
    content_markdown: >-
      and&nbsp;[baseof.html](https://github.com/spf13/hyde/blob/master/layouts/_default/baseof.html){:
      target="_blank" rel="noopener noreferrer"}&nbsp;on the Hugo site:
  - _bookshop_name: code-block
    source:
    language: go
    code_block: |-
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
  - _bookshop_name: text
    col: 1
    content_markdown: >-
      The code is very similar in these layouts. It's interesting seeing the
      subtle differences between Jekyll and Hugo with includes/partials and
      content blocks. Hugo adds more options allowing you to set a theme color,
      reverse the layout and set up Google Analytics.


      One subtle difference is the head.html include in Jekyll doesn't include
      the `<html>` tag and doctype, whereas the Hugo partial does. I'm a big fan
      of opening and closing HTML tags in the same file. Untangling nested
      elements across multiple files is a nightmare.


      The post layout is slightly different between the two
      implementations.&nbsp;[In
      Jekyll](https://github.com/poole/hyde/blob/master/_layouts/post.html)&nbsp;we
      have a related posts section:
  - _bookshop_name: code-block
    source:
    language: liquid
    code_block: |-
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
  - _bookshop_name: text
    col: 1
    content_markdown: >-
      Where as [in
      Hugo](https://github.com/spf13/hyde/blob/master/layouts/_default/single.html){:
      target="_blank" rel="noopener noreferrer"} this has been changed to a
      Disqus comments section:
  - _bookshop_name: code-block
    source:
    language: go
    code_block: |-
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
  - _bookshop_name: spacing
    mobile_unit_number: 10
    tablet_unit_number: 10
    laptop_unit_number: 10
  - _bookshop_name: heading-and-text
    heading: Post
    content_markdown: >-
      The posts on the Hyde site
      in&nbsp;[Jekyll](https://raw.githubusercontent.com/poole/hyde/master/_posts/2012-02-06-whats-jekyll.md){:
      target="_blank" rel="noopener noreferrer"}&nbsp;a straightforward: YAML
      front matter with a body of Markdown.
    heading_type: h2
    col:
  - _bookshop_name: code-block
    source:
    language: markdown
    code_block: >-
      ---

      layout: post

      title: What's Jekyll?

      ---


      [Jekyll](http://jekyllrb.com) is a static site generator, an open-source
      tool for creating simple yet powerful websites of all shapes and sizes.
      From [the project's
      readme](https://github.com/mojombo/jekyll/blob/master/README.markdown):


      > Jekyll is a simple, blog aware, static site generator. It takes a
      template directory [...] and spits out a complete, static website suitable
      for serving with Apache or your favorite web server. This is also the
      engine behind GitHub Pages, which you can use to host your project’s page
      or blog right here from GitHub.


      It's an immensely useful tool and one we encourage you to use here with
      Hyde.


      Find out more by [visiting the project on
      GitHub](https://github.com/mojombo/jekyll
  - _bookshop_name: text
    col: 1
    content_markdown: >-
      One minor improvement I'd make here is setting the layout as a default in
      the \_config.yml rather than specifying it on each post. <!-- -->
  - _bookshop_name: code-block
    source:
    language: yaml
    code_block: |-
      defaults:
        -
          scope:
            path: ""
            type: posts
          values:
            layout: post
  - _bookshop_name: text
    col: 1
    content_markdown: >-
      On the Hugo site we don't have any posts, instead we have
      an&nbsp;[archetype](https://gohugo.io/content-management/archetypes/){:
      target="_blank" rel="noopener noreferrer"}&nbsp;- a template to create new
      posts: <!-- -->
  - _bookshop_name: code-block
    source:
    language: markdown
    code_block: |-
      +++
      Description = ""
      Tags = ["Development", "golang"]
      Categories = ["Development", "GoLang"]
      menu = "main"
      +++
  - _bookshop_name: text
    col: 1
    content_markdown: >-
      The structure is TOML front matter with an empty body for Markdown. The
      menu = "main" in the front matter adds the post to the sidebar:
  - _bookshop_name: code-block
    source:
    language: go
    code_block: |-
      <ul class="sidebar-nav">
        <li><a href="{{ .Site.BaseURL }}">Home</a> </li>
        {{ range .Site.Menus.main -}}
          <li><a href="{{.URL}}"> {{ .Name }} </a></li>
         {{- end }}
      </ul>
  - _bookshop_name: text
    col: 1
    content_markdown: >-
      Where as Jekyll iterates over all pages with a layout of "page" for the
      sidebar.
  - _bookshop_name: code-block
    source:
    language: liquid
    code_block: |-
      {% assign pages_list = site.pages %}
      {% for node in pages_list %}
        {% if node.title != null %}
          {% if node.layout == "page" %}
            <a class="sidebar-nav-item{% if page.url == node.url %} active{% endif %}" href="{{ node.url }}">{{ node.title }}</a>
          {% endif %}
        {% endif %}
      {% endfor %}
  - _bookshop_name: text
    col: 1
    content_markdown: >-
      The Hugo site could do with two archetypes, one for a page and one for the
      post. At the moment, the archetype is in-between. We have posts with tags
      and categories but no date.
  - _bookshop_name: spacing
    mobile_unit_number: 8
    tablet_unit_number: 8
    laptop_unit_number: 8
  - _bookshop_name: heading-and-text
    heading: Post list
    content_markdown: >-
      On the Jekyll site, the&nbsp;[Post list
      page](https://github.com/poole/hyde/blob/master/index.html){:
      target="_blank" rel="noopener noreferrer"}&nbsp;iterates over the
      paginated posts and outputs the title, URL, date, and content:
    alignment: left
    width: long
    heading_type: h2
    col: '1'
  - _bookshop_name: code-block
    source:
    language: liquid
    code_block: |-
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
  - _bookshop_name: text
    col: 1
    content_markdown: There's also handling of the pagination below the posts.
  - _bookshop_name: code-block
    source:
    language: liquid
    code_block: |-
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
  - _bookshop_name: text
    col: 1
    content_markdown: >-
      The&nbsp;[Hugo post list
      page](https://github.com/spf13/hyde/blob/master/layouts/index.html)&nbsp;is
      much more simple. It iterates over all the pages on the site and outputs
      the title, URL, and summary with a date.
  - _bookshop_name: code-block
    source:
    language: liquid
    code_block: |-
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
  - _bookshop_name: text
    col: 1
    content_markdown: >-
      There's still work to do to get the Hugo site into a usage state for a
      blog. I need to filter this to only posts and populate the date from the
      post itself. <!-- -->
  - _bookshop_name: spacing
    mobile_unit_number: 10
    tablet_unit_number: 10
    laptop_unit_number: 10
  - _bookshop_name: heading-and-text
    heading: Summary
    content_markdown: >-
      That wraps up the comparison of the Jekyll vs. Hugo Hyde template. It's
      always interesting to see implementation differences between static site
      generators. If you have a template or site you'd like a showcase, reach
      out to us on [Twitter](https://twitter.com/CloudCannon){: target="_blank"
      rel="noopener noreferrer"}.
    alignment: left
    width: long
    heading_type: h2
    col: '1'
  - _bookshop_name: spacing
    mobile_unit_number: 8
    tablet_unit_number: 9
    laptop_unit_number: 14
---
For this showcase, I thought it would be interesting to compare the implementations of a template with both Jekyll and Hugo versions.
