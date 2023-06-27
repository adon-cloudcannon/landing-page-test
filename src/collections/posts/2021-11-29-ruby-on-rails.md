---
draft: false
title: How Ruby on Rails uses Jekyll to build their marketing site
cta:
  title: Launch your website today
  body_text: Give your content team full autonomy on your developer-approved tech stack with CloudCannon.
  button:
    content: 
      link: "https://app.cloudcannon.com/register?trial=cc_standard"
      text: "Get started free!"
    styles:
      size:
      style: "outline"
      extra_classes:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/uploads/rails-desktop.png
permalink: /blog/showcase-ruby-on-rails/
date: 2021-11-29T13:00:00+1300
description: >-
  In this showcase, we'll deconstruct the Ruby on Rail's marketing website,
  which is built on static site generator Jekyll, to see what makes it tick.
tags:
  - Resources
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
---
CloudCannon uses Rails for our backend and I can say that it is an absolute joy to work with. In this showcase, we'll deconstruct the Ruby on Rails marketing website to see what makes it tick.

Ruby on Rails is a heavily influential web application framework powering some of the largest businesses in the world. It was created in 2003 by David Heinemeier Hansson (DHH) to power 37signal's first commercial product, Basecamp. Since then it has won the hearts of developers around the world including my own.

## Content

The Rails marketing site is a good example of keeping things super simple.
When you look through the main navigation, you'll see all the pages link
to external locations. So what's actually part of the Jekyll site? [The
home page](https://rubyonrails.org/), [Code of conduct](https://rubyonrails.org/conduct/),
[Doctrine](https://rubyonrails.org/doctrine/) and other tightly scoped supporting pages. The
front matter for all the pages is straightforward, simply setting the
title and description for SEO, the layout, and a permalink for making the
URL a little bit prettier.

```text
---
layout: page
title: Code of Conduct
permalink: /conduct/
description: Rails is committed to fostering a welcoming community. If you
encounter any unacceptable behavior, follow these steps to report the
issue to the core team. We are here to help.
---
```

The body of the pages is pure HTML. There's no liquid for loops or fancy
Jekyll implementations here.

```html
<section>
  <h1>Rails is made of people</h1>

  <figure class="right">
    <img src="/images/community.png" alt="Community">
  </figure>

  <p>Ruby on Rails is for everyone who wants to build web applications, whether they're 30-year veterans or only just started to learn yesterday. All are welcome!</p>

  <p>You can meet the community online on the <a href="https://discuss.rubyonrails.org/">Ruby on Rails Discussions</a>, <a href="http://stackoverflow.com/questions/tagged/ruby-on-rails">the Ruby on Rails StackOverflow Q&A tag</a>, or the #rubyonrails IRC channel on irc.freenode.net. We also do a yearly <a href="http://railsconf.com">RailsConf</a> conference for people to meet in real life.</p>

  <h2 id="core">The core team</h2>

  <p>The direction of the framework is being stewarded by the Rails core team. This group of long-term contributors manage releases, evaluate pull-requests, handle conduct complaints, and does a lot of the groundwork on major new features.
  </p>
```

The home page is the only page with a top navigation so again, pure HTML,
no magic.

```html
<div class="nav">
  <ul>
    <li class="first"><a href="https://weblog.rubyonrails.org/">Blog</a></li>
    <li><a href="https://guides.rubyonrails.org/">Guides</a></li>
    <li><a href="https://api.rubyonrails.org/">API</a></li>
    <li><a href="https://discuss.rubyonrails.org/">Forum</a></li>
    <li><a href="https://github.com/rails/rails">Contribute on GitHub</a></li>
    </ul>
</div>
```

With the sheer number of frameworks and libraries available to developers
these days, it can be tempting to use a site like this as a testbed for
the latest tools. The Rails team has done a great job of assessing their
needs for the marketing site and creating the simplest solution possible.
It's easy to maintain, easy to contribute to, future Jekyll updates are
unlikely to break this site, and no one needs to document how it all fits
together. It just works.

## Layouts

{% raw %}
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="/style.css" type="text/css" media="screen" charset="utf-8">
    <meta name="google-site-verification" content="Jknoaf3CvRzba3wXMxqgurDErIGZ9e1L1luuDMhQYEI">
    {% seo %}
  </head>

  <body>
    <div class="container">
      {{ content }}
    </div> <!-- /.container -->
  </body>
</html>
```
{% endraw %}

Most of the pages outside the homepage use the page layout. This adds the
rails logo and a link back to the home page. 

{% raw %}
```html
---
layout: default
---
<div class="logo">
  <a href="/">
    <img src="/images/rails-logo.svg" width="130" height="46" alt="Ruby on Rails">
  </a>
</div>

{{ content }}

<section>
  <p class="back">
    <a href="/">&larr; Back to homepage</a>
  </p>
</section>
```
{% endraw %}

The final layout is for the [doctrine page](https://rubyonrails.org/doctrine/). This page is unique because it's translated into five languages. We'll dive into how the translation works in the next section.

{% raw %}
```html
---
layout: default
---
<div class="logo">
  <a href="/">
    <img src="/images/rails-logo.svg" width="130" height="46" alt="Ruby on Rails">
  </a>
</div>

<div class="select__wrapper" id="language-list">
  <div class="language__item active">
    Language
  </div>

  <div class="language__items">
    <div class="language__item">
      <a href="/doctrine">English</a>
    </div>
    <div class="language__item">
      <a href="/doctrine/es">Español</a>
    </div>
    <div class="language__item">
      <a href="/doctrine/ru">Russian</a>
    </div>
    <div class="language__item">
      <a href="/doctrine/zh_cn">简体中文</a>
    </div>
    <div class="language__item">
      <a href="/doctrine/zh_tw">繁體中文</a>
    </div>
  </div>
</div>

{{ content }}

<section>
  <p class="back">
    <a href="/">&larr; Back to homepage</a>
  </p>
</section>

<script src="/lib/language_switcher.js"></script>
```
{% endraw %}

## Translations

Delivering translated website can require highly complex processes. True
to the nature of this website, the Rails team has made the translation
process as simple as possible.

As a user, clicking on the Doctrine page takes me to the English version.
On the right side, there's a language picker to switch languages. Each
translation of the page is its own page, with its own URL.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/uploads/rails-doctrine.png" alt:"Ruby on Rails, The Rails Doctrine page" extend:false border:false %}

As we saw in the layout, there's a reference to a JavaScript file for the
language picker. It happens to be the only piece of JavaScript on the
entire website, so what's it doing?

```javascript
document.getElementById('language-list').onclick = function() {
  this.classList.toggle('active')
}
```

The active state switches the state of the arrow and opens the dropdown.
That's it\! It's so close to a JavaScript free website. Using the `:focus`
CSS property, it's possible to do the same thing in pure CSS but that's
just getting nitpicky.

So how do the translated pages work? Well, they're other pages that happen
to have the same content and structure as the source page:

```html
---
layout: doctrine
title: Doctrina
permalink: /doctrine/es
---

<section lang="es">
  <h1 style="margin-bottom: 0px">La Doctrina Rails</h1>
  <p style="margin-top: 0"><small style="color: grey">Por David Heinemeier Hansson en Enero de 2016</small></p>

  <figure class="right">
    <img src="/images/doctrine.png" alt="La Doctrina Rails">
  </figure>

  <p>El fenomenal ascenso de Ruby on Rails al estrellato se debió en gran parte a su despegue en la tecnología y en los tiempos novedosos. Pero las ventajas tecnológicas se erosionan con el tiempo y un buen momento no sostiene movimientos por sí solos a largo plazo. Por lo tanto, se necesita una explicación más amplia de cómo Rails no solo sigue siendo relevante, sino también para aumentar su impacto y su comunidad. Propongo que el facilitador a lo largo del tiempo ha sido y sigue siendo su doctrina controvertida.</p>

  <p>Esta doctrina ha evolucionado durante la última década, pero la mayoría de sus pilares más fuertes también son sus fundadores. No pretendo reivindicar la originalidad fundamental de estas ideas. El principal logro de Rails fue unir y cultivar una tribu fuerte en torno a un amplio conjunto de pensamientos heréticos sobre la naturaleza de la programación y los programadores.</p>

  <p>Después de todo este preámbulo, aquí tienen los nueve pilares más importantes de la Doctrina Rails, tal como yo los percibo:</p>

  <p>
    <ol>
      <li><a href="#optimize-for-programmer-happiness">Optimización para la felicidad del programador</a></li>
      <li><a href="#convention-over-configuration">Convención sobre configuración</a></li>
      <li><a href="#omakase">La carta al estilo omakase</a></li>
      <li><a href="#no-one-paradigm">Ningún paradigma</a></li>
      <li><a href="#beautiful-code">Exalta el código hermoso</a></li>
      <li><a href="#provide-sharp-knives">Proporciona cuchillos afilados</a></li>
      <li><a href="#integrated-systems">Valora los sistemas integrados</a></li>
      <li><a href="#progress-over-stability">Progreso sobre estabilidad</a></li>
      <li><a href="#big-tent">Construir una gran tienda de acampar</a></li>
    </ol>
  </p>
```

For a single page with straightforward content, this works great.
Translators can make a copy of the English page and translate each piece
of content.


If there were multiple pages to translate, this strategy would soon get
unwieldy. Let's say you wanted to adjust the structure of the logo in the
header. You would have to make this change on every translated page. One
minor improvement to address this is taking the header section, turning it
into an include, and populating the content from variables.

{% raw %}
```liquid
# _includes/doctrine-header.html

<h1 style="margin-bottom: 0px">{{ include.main_heading }}</h1>

<p style="margin-top: 0"><small style="color: grey">{{ include.author
}}</small></p>

<figure class="right">
  <img src="/images/doctrine.png" alt="{{ include.main_heading }}">
</figure>
```
{% endraw %}

Then the content file would use the include like this:

{% raw %}
```html
---
layout: doctrine
title: Doctrina
permalink: /doctrine/es
---

<section lang="es">
  {% include doctrine-header.html main_heading="La Doctrina Rails" author="Por David Heinemeier Hansson en Enero de 2016" %}

  <p>El fenomenal ascenso de Ruby on Rails al estrellato se debió en gran parte a su despegue en la tecnología y en los tiempos novedosos. Pero las ventajas tecnológicas se erosionan con el tiempo y un buen momento no sostiene movimientos por sí solos a largo plazo. Por lo tanto, se necesita una explicación más amplia de cómo Rails no solo sigue siendo relevante, sino también para aumentar su impacto y su comunidad. Propongo que el facilitador a lo largo del tiempo ha sido y sigue siendo su doctrina controvertida.</p>

  <p>Esta doctrina ha evolucionado durante la última década, pero la mayoría de sus pilares más fuertes también son sus fundadores. No pretendo reivindicar la originalidad fundamental de estas ideas. El principal logro de Rails fue unir y cultivar una tribu fuerte en torno a un amplio conjunto de pensamientos heréticos sobre la naturaleza de la programación y los programadores.</p>

  <p>Después de todo este preámbulo, aquí tienen los nueve pilares más importantes de la Doctrina Rails, tal como yo los percibo:</p>
```
{% endraw %}

Now anytime you want to adjust the structure of the header, you can do it
in one place, which will change it across all the translations.

A more scalable way of doing this is using a translation system.
CloudCannon has an open-source tool called
[Rosey,](https://github.com/CloudCannon/rosey) which takes a lot of the complexity out of
translations. The way it works is you build your website in one language,
then set a key for each piece of content using HTML attributes. For
example:

```html
<h1 data-rosey="title">Welcome!</h1>
```

When you run Rosey on your static output, it will generate a JSON file
with all your keys and their source language values. You can set up a
process to automatically send this file to your translation service
([Smartling](https://www.smartling.com/) for example) or translate them manually. When the translation
is complete, you'll have a version of this file for every language you're
translating to. Rosey takes these translated files and generates a
multilingual version of your site. Again, for the Rails site, this would
be overkill. If their translations requirements increase in the future, it
might be something to look at.

## Plugins

The Rails site uses the [GitHub Pages gem](https://github.com/github/pages-gem), which is a gem that gives you access to all the Jekyll
plugins whitelisted for GitHub Pages. The plugins actually used on this
site are pretty typical for a Jekyll site:

* [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from) -
Creates HTML files to handle redirects.
* [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) - Adds
metatags for search engines to help them index content.
* [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap) - Creates a
sitemap to further help search engines index all the pages on a site.

I can't see anywhere they're creating redirects, so `jekyll-redirect-from`
is likely unnecessary here.

`jekyll-seo-tag` does a lot with minimal configuration. They're setting
the default title, description, image, and Twitter handle for the SEO
plugin in their `_config.yml`.

```yaml
title: Ruby on Rails

description: A web-application framework that includes everything needed
to create database-backed web applications according to the
Model-View-Controller (MVC) pattern.

twitter:
  username: rails
defaults:
  - scope:
      path: ""
    values:
      image: https://avatars.githubusercontent.com/u/4223
```

On the homepage, without any extra configuration, this creates the
following meta-tag structure:

```html
<!-- Begin Jekyll SEO tag v2.7.1 -->
<title>Ruby on Rails | A web-application framework that includes
everything needed to create database-backed web applications according to
the Model-View-Controller (MVC) pattern.</title>

<meta name="generator" content="Jekyll v3.9.0" />
<meta property="og:title" content="Ruby on Rails" />
<meta property="og:locale" content="en_US" />
<meta name="description" content="A web-application framework that
includes everything needed to create database-backed web applications
according to the Model-View-Controller (MVC) pattern." />
<meta property="og:description" content="A web-application framework that
includes everything needed to create database-backed web applications
according to the Model-View-Controller (MVC) pattern." />
<link rel="canonical" href="https://rubyonrails.org/" />
<meta property="og:url" content="https://rubyonrails.org/" />
<meta property="og:site_name" content="Ruby on Rails" />
<meta property="og:image"
content="https://avatars.githubusercontent.com/u/4223" />
<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:image"
content="https://avatars.githubusercontent.com/u/4223" />
<meta property="twitter:title" content="Ruby on Rails" />
<meta name="twitter:site" content="@rails" />
<script type="application/ld+json">
{"image":"https://avatars.githubusercontent.com/u/4223","@type":"WebSite","headline":"Ruby
on Rails","url":"https://rubyonrails.org/","description":"A
web-application framework that includes everything needed to create
database-backed web applications according to the Model-View-Controller
(MVC) pattern.","name":"Ruby on
Rails","@context":"https://schema.org"}</script>
<!-- End Jekyll SEO tag -->
```

This is a must have plugin for any Jekyll site. I can tell you first hand
that creating this meta-tag block by hand, sucks.

`jekyll-sitemap` typically doesn't require any extra configuration. On the
Rails site the output looks like this:

```html
<urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
  <loc>https://rubyonrails.org/community/</loc>
  </url>
  <url>
  <loc>https://rubyonrails.org/conduct/</loc>
  </url>
  <url>
  <loc>https://rubyonrails.org/doctrine/</loc>
  </url>
  <url>
  <loc>https://rubyonrails.org/doctrine/es</loc>
  </url>
  <url>
  <loc>https://rubyonrails.org/everything-you-need/</loc>
  </url>
  <url>
  <loc>https://rubyonrails.org/</loc>
  </url>
  <url>
  <loc>https://rubyonrails.org/maintenance/</loc>
  </url>
  <url>
  <loc>https://rubyonrails.org/doctrine/ru</loc>
  </url>
  <url>
  <loc>https://rubyonrails.org/security/</loc>
  </url>
  <url>
  <loc>https://rubyonrails.org/trademarks/</loc>
  </url>
  <url>
  <loc>https://rubyonrails.org/doctrine/zh_cn</loc>
  </url>
  <url>
  <loc>https://rubyonrails.org/doctrine/zh_tw</loc>
  </url>
  <url>
  <loc>
  https://rubyonrails.org/materials/fonts/BorgstrandPro/FountainLicense.pdf
  </loc>
  <lastmod>2021-03-26T21:04:28+00:00</lastmod>
  </url>
  </urlset>
```

Google won't have any issues finding all the pages on this site.
Interesting it picks up the PDF license for their font. Probably not
intentional, whoops.

## Wrap up

The Rails team has a well-constructed marketing site that I'm sure will
serve them for years to come. Their implementation is so simple that
there's virtually no risk of the site becoming unmaintainable or the build
breaking in a future Jekyll update. If it is a problem, they could
probably switch to another static site generator like Hugo in under 15
minutes.


As a learning resource, this is a great site to look at when you're
starting out with Jekyll. It highlights the simplicity that Jekyll brings.
It's a small step from a purely static website that makes a world of
difference when it comes to maintenance.