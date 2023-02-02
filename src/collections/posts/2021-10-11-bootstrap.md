---
title: 'Deconstruction: How Bootstrap powers their documentation site with Hugo'
image: https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/uploads/showcases/bootstrap/bootstrap-hero.png
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
permalink: /blog/showcase-bootstrap/
date: 2021-10-11T13:00:00+1300
description: >-
  Not only has Bootstrap helped millions of developers build websites, but their
  documentation is built using static site generator, Hugo. Let's dive in and
  deconstruct the Bootstrap documentation.
tags:
  - Resources
  - Hugo
author: cloudcannon
---
Bootstrap is used to rapidly develop consistent, responsive websites. It was initially created at Twitter as a way to encourage design consistency in internal tools. Later it was publicly released in August 2011 and has become one of the most popular projects on GitHub.

The most important part of a documentation site is the content so let's start there. The front matter for content pages is simple, using five variables for the most part:


```markdown
---
layout: docs
title: Accessibility
description: A brief overview of Bootstrap's features and limitations for the creation of accessible content.
group: getting-started
toc: true
---
```

`layout`, `title` and `description` are self-explanatory. Things get interesting with `group` and `toc`, which are used to build navigation menus. We'll look at how navigation works in the next section. For the body content, Bootstrap does a great job of using simple markdown. The content is a mix of headings, paragraphs, code blocks, lists, links, and the occasional HTML block for tables and accessibility.

```html
### Visually hidden content

Content which should be visually hidden, but remain accessible to assistive technologies such as screen readers, can be styled using the `.visually-hidden` class. This can be useful in situations where additional visual information or cues (such as meaning denoted through the use of color) need to also be conveyed to non-visual users.


<p class="text-danger">
  <span class="visually-hidden">Danger: </span>
  This action is not reversible
</p>
```

Keeping the markdown simple is excellent because it makes it easier for the core team to maintain their documentation and for others to contribute. It also helps keep consistency throughout the site.
## Navigation

The Bootstrap documentation has three levels of navigation:
### Navbar

![Bootstrap top navigation](https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/uploads/showcases/bootstrap/1-nav.png)
 This is the primary navigation for the Bootstrap site and also the most simple in terms of implementation. Each link is hard coded and has an if statement to trigger the active state:

{% raw %}
```go
<li class="nav-item col-6 col-md-auto">
  <a class="nav-link p-2{{ if .IsHome }} active" aria-current="page{{ end }}" href="/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Bootstrap');">Home</a>
</li>
<li class="nav-item col-6 col-md-auto">
  <a class="nav-link p-2{{ if eq .Page.Layout 'docs' }} active" aria-current="true{{ end }}" href="/docs/{{ .Site.Params.docs_version }}/getting-started/introduction/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Docs');">Docs</a>
</li>
<li class="nav-item col-6 col-md-auto">
  <a class="nav-link p-2{{ if eq .Page.Title 'Examples' }} active" aria-current="true{{ end }}" href="/docs/{{ .Site.Params.docs_version }}/examples/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Examples');">Examples</a>
</li>
```
{% endraw %}

### Sidebar

![Bootstrap side navigation](https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/uploads/showcases/bootstrap/bootstrap-docs.png)
 The sidebar is more tricky. It's a two-level navigation component used on documentation pages. The first level is the group title, a high-level concept with an arrow indicating it can be expanded. Clicking on the group title expands the sidebar to show the navigation items related to the group. The sidebar is populated from a [YAML data file](https://github.com/twbs/bootstrap/blob/main/site/data/sidebar.yml)\:

```yaml
- title: Getting started
  pages:
    - title: Introduction
    - title: Download
    - title: Contents
    - title: Browsers & devices
    - title: JavaScript
    - title: Build tools
    - title: Webpack
    - title: Accessibility
    - title: RFS
    - title: RTL

- title: Customize
  pages:
    - title: Overview
    - title: Sass
    - title: Options
    - title: Color
    - title: Components
    - title: CSS variables
    - title: Optimize
```

Using a data file here makes sense for a couple of reasons:

1. **Ordering:** Arrays give you an intuitive way of ordering things. The other common method of handling order is to have a 'page-weight' number in the front matter of each document. When you're outputting documents, you would order by the page weight. The advantage of page weight is you don't need a separate YAML file to set an order. The downside is reordering can get messy. In this case, I think the Bootstrap team has picked the correct implementation.
2. **Naming:** The navigation group and item titles have to live somewhere. Having them in the YAML file works. To render the sidebar, Bootstrap has a [docs-sidebar.html](https://github.com/twbs/bootstrap/blob/main/site/layouts/partials/docs-sidebar.html) partial. They start by iterating over the data file:

{% raw %}
```go
{{- range $group := .Site.Data.sidebar -}}
  {{- $group_slug := $group.title | urlize -}}
  {{- $is_active_group := eq $.Page.Params.group $group_slug -}}
```
{% endraw %}

`$group_slug` is calculated by slugifying the title in the data file. `$group_slug` is then compared to the `group` front matter field (The one we saw in the content section ) on the current page being rendered. If they match, then the current page is part of this navigation group. This state is stored in the `$is_active_group` variable. The next code block renders the group title. The interesting part from a Jamstack perspective is seeing how they use `$is_active_group`. It's used to add a collapsed class if it's **not** the active group, it's also used to set two accessibility attributes: `aria-expanded` and `aria-current`.

{% raw %}
```go
<li class="mb-1">
  <button class="btn d-inline-flex align-items-center rounded {{ if not $is_active_group }} collapsed {{ end }}" data-bs-toggle="collapse" data-bs-target="#{{ $group_slug }}-collapse" aria-expanded="{{ $is_active_group }}"{{ if $is_active_group }} aria-current="true"{{ end }}>
    {{ $group.title }}
  </button>
```
{% endraw %}

Following the group title, we have the logic to render the navigation items. First, the pages in the current group are iterated over. Each page is assigned to `$doc.` Then `$doc`'s title is slugified and checked to see if it's the current page in a similar way to how the active group was calculated. The result of this is assigned to `$is_active.` `$href` is a combination of the `docs_version`, `$group_slug` and `$doc_slug`. It's a bit magic because there just happens to be a page with that URL. There's no real connection there from Hugo's point of view. This will work as long the team is consistent with their structure and doesn't override any [permalinks](https://gohugo.io/content-management/urls/#permalinks). As an improvement, you could find the source page using the `$group_slug` and `$doc_slug` and get the permalink from there. This would be less fragile as you are free to change the permalink. However, it would add extra code and complexity, so it may not be necessary here.

{% raw %}
```go
<div class="collapse{{ if $is_active_group }} show{{ end }}" id="{{ $group_slug }}-collapse">
  <ul class="list-unstyled fw-normal pb-1 small">
    {{- range $doc := $group.pages -}}
    {{- $doc_slug := $doc.title | urlize -}}
    {{- $is_active := and $is_active_group (eq $page_slug $doc_slug) -}}
    {{- $href := printf "/docs/%s/%s/%s/" $.Site.Params.docs_version $group_slug $doc_slug -}}
    <li><a href="{{ $href }}" class="d-inline-flex align-items-center rounded {{ if $is_active }} active {{ end }}"{{ if $is_active }} aria-current="page"{{ end }}>{{ $doc.title }}</a></li>
    {{- end -}}
  </ul>
</div>
</li>
```
{% endraw %}

One point worth noting is while it looks easy to update a navigation group or item title in the YAML file, there's more than meets the eye. The titles have `urlize` run on them to link them back to the original document as we saw. If you want to update a title for the navigation, you will also have to change the file name of the source file. Otherwise the link will break. As a small improvement, I would opt to have the slugified references in the YAML file and then have an optional front matter field in each document called `menu_title` if you want to use something other than `title` for menu items.
### Table of contents

![Bootstrap documentation table of contents](https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/uploads/showcases/bootstrap/bootstrap-docs2.png)
 On the right side of the most of their documentation pages, Bootstrap includes a table of contents which lists the headings on the page. It's a nice way to help users find the content they're looking for. Hugo makes generating a table of contents super straight forward, it parses the markdown and automatically makes the HTML output available with the variable `.TableOfContents`. As we saw before, some pages have a `toc` front matter variable. The Bootstrap site uses this variable to determine if the table of contents should be rendered:

{% raw %}
```go
{{ if (eq .Page.Params.toc true) }}
  <div class="bd-toc mt-4 mb-5 my-md-0 ps-xl-3 mb-lg-5 text-muted">
    <strong class="d-block h6 my-2 pb-2 border-bottom">On this page</strong>
    {{ .TableOfContents }}
  </div>
{{ end }}
```
{% endraw %}

### Versioning

Successful software frameworks like Bootstrap release many major versions of their software. Each major version likely differs enough from each other to warrant its own documentation. Bootstrap has a clever dropdown that makes it easy to switch between versions.
![Bootstrap dropdown showing versioning](https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/uploads/showcases/bootstrap/bootstrap-docs3.png)
 Clicking [All versions](https://getbootstrap.com/docs/versions/) takes you to a page with the documentation for every major and minor release going back to version 1.0 which is pretty neat. Bootstrap has an elegant way of handling this legacy content. [doc-versions.yml](https://github.com/twbs/bootstrap/blob/main/site/data/docs-versions.yml) is a data file that lists all the available versions:

```yaml
# Snippet of docs-versions.yml

- group: v3.x
  baseurl: "https://getbootstrap.com/docs"
  description: "Every minor and patch release from v3 is listed below. Last update was v3.4.1."
  versions:
    - v: "3.3"
    - v: "3.4"

- group: v4.x
  baseurl: "https://getbootstrap.com/docs"
  description: "Current major release and its minor versions. Last update was v4.6.0."
  versions:
    - v: "4.0"
    - v: "4.1"
    - v: "4.2"
    - v: "4.3"
    - v: "4.4"
    - v: "4.5"
    - v: "4.6"
```

This file is iterated over on the [versions page](https://raw.githubusercontent.com/twbs/bootstrap/3cf51c6ac95c4702efc632a7983019c71f77d4b3/site/content/docs/versions.md) to create the version appendix. Each major and minor version of Bootstrap has its own branch (or tag), which contains only that version's documentation. The URL structure has a segment for the version number e.g. `/docs/5.0/getting-started/introduction/`. I don't have visibility into how this is deployed but what I suspect is that each site is generated independently, and then combined after the build. CloudCannon has a feature called [subpaths](https://cloudcannon.com/documentation/host/domains/#subpaths) that makes it easy to do something similar - mount multiple sites together to look like a single site.

I'm a big fan of this strategy for documentation versioning for several reasons:

1. Bootstrap has 29 versions of its documentation. With each major version, Bootstrap is refining the design of their docs to keep them fresh and easy to use. In some cases, they've completely changed how the documentation is generated. In the early days, the documentation was a simple static website, then they switched to Jekyll and more recently Hugo. If they had to maintain a single design and platform for 29 versions, it would be hard to make any changes without breaking something. Plus, it's cool seeing the design evolve through the years.
2. Between versions the documentation is very similar. If all versions were on the same branch, it would be easy to get confused about which of the 29 introduction pages I was meant to update. The way Bootstrap has it set up, as long as I'm on the right branch, I know I'm editing the right docs.
3. Finally, the Bootstrap source code and documentation are in the same repository. This makes it easy to keep documentation in sync with development. If all versions were available on every branch and I spot a spelling mistake on an older version, do I make the change on the latest branch or the branch for that version? This would get messy quickly.
### Search

Search is a great way to help users quickly find what they're looking for. There's several ways to add search to a static site. Bootstrap uses [Algolia](https://www.algolia.com/), which is hard to beat when it comes to ease of integration and search performance.
![search query in bootstraps search box](https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/uploads/showcases/bootstrap/bootstrap-docs4.png)
 Algolia has a free tool built explicitly for documentation called [Docsearch](https://docsearch.algolia.com/). The way it works is simple:

1. You enter the URL of your documentation site on the Docsearch site.
2. Algolia automatically scrapes and indexes your content every day.
3. Algolia gives you a JavaScript snippet to embed on your site. This snippet turns an input box into a fancy autocomplete search box with your content. That's all there is to it\!
## Wrap up

Bootstrap is a fantastic example of a well-built documentation site on Hugo. If you're building a documentation site, I'd recommend having a dig around their source code as they typically have elegant solutions to common problems. If Hugo is the static site generator you want to use for your next project, take a look at this [Hugo tutorial](https://cloudcannon.com/community/learn/hugo-tutorial/) to get you started. 

