---
title: 'Deconstruction: How Bitcoin.org uses Jekyll to power their marketing site'
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/uploads/bitcoin-desktop.png
permalink: /blog/showcase-bitcoin-org/
date: 2021-10-11T13:00:00+1300
description: >-
  Learn how the Bitcoin.org marketing site is built using static site generator,
  Jekyll. 
tags:
  - Resources
  - Jekyll
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
---
Bitcoin is a cryptocurrency created in 2008 by a mysterious person or group by the alias Satoshi Nakamoto. It was the first decentralized cryptocurrency and is currently the most valuable, with a market cap of over $2 trillion.

With such a large amount of wealth and people involved with the network, Bitcoin needs a website with comprehensive information for everyone, including individuals, miners, and software developers. The problem with an online presence for Bitcoin is no one owns the network, so there can't be an "official" website. The closest we have is [Bitcoin.org](http://bitcoin.org) which provides high-quality content for the community.

![Bitcoin landing page](https://cc-dam.imgix.net/blog/uploads/bitcoin-homepage.png)
 
## Blog

The site has a blog with the latest news, arranged in alternating left/right blocks.
![Ruby on Rails landing page](https://cc-dam.imgix.net/blog/uploads/bitcoin-blog.png)
 The left/right blocks are a neat way to organize posts I haven't seen before. The implementation is actually super straight forward. The posts output in a list:

{% raw %}
 ```liquid
<ul class="post-list clearfix">
  {% for post in site.posts %}
    <li class="post">
      <div class="post-inner">
        <p class="post-date">{{ post.date | date: "%b %-d, %Y" }}</p>
        <p class="post-name">{{ post.title }}</p>
        <p class="post-description">
	        <!-- Event description -->
        </p>
        <a class="button btn-bright" href="{{ post.url | remove: '.html' }}">{% translate informbut getting-started %}</a>
      </div>
    </li>
  {% endfor %}
</ul>
```
{% endraw %}

Then each list item has an alternating left/right float with some margin. Applying a style to only even (or odd) elements is something I used to do directly in Jekyll. Using the cycle tag in Liquid was a great way to do this:

{% raw %}
 ```liquid
{% for post in site.posts %}
  <li class="post {% cycle "left", "right" %}">{{ post.title }}
{% endfor %}
```
{% endraw %}

Browser support for `nth-child` has become much better since the early days of Jekyll. A more elegant way to do this now is pure CSS like the [Bitcoin.org](http://bitcoin.org/) team have:

```css
li:nth-child(even) {
  float: right;
}
```

The posts themselves are fairly standard. At the top of each post, there are four links: Blog Home, Subscribe to RSS feed, Post History, and Report Issue. Blog Home is fairly self-explanatory. Post History and Report Issue are interesting because they're linking directly to GitHub. Post History to the [commit history on a particular file](https://github.com/bitcoin-dot-org/bitcoin.org/commits/master/_posts/2021-01-21-regarding-csw.md)\:

{% raw %}
 ```liquid
<a href="https://github.com/bitcoin-dot-org/bitcoin.org/commits/master/{{page.path|uri_escape}}">Post history</a>
```
{% endraw %}

And Report Issue to [open an issue on GitHub](https://github.com/bitcoin-dot-org/bitcoin.org/issues/new?body=Source%20File%3A%20_posts/2019-09-26-recognizing-efforts-contributors-to-translation-team.md%0A%0A). <!-- -->

{% raw %}
 ```liquid
<a href="https://github.com/bitcoin-dot-org/bitcoin.org/issues/new?body=Source%20File%3A%20{{page.path | uri_escape}}%0A%0A">Report issue</a>
```
{% endraw %}

It's clever using GitHub in this way for a developer-focused community site. It allows the team to have a completely static website and still have deep interactions and conversations about the site's content with the community.

The [RSS feed](https://bitcoin.org/en/rss/blog.xml) is manually generated. Typically I would recommend using [jekyll-feed](https://github.com/jekyll/jekyll-feed) to generate an RSS feed because it's set and forget it. Getting one tiny bit of the XML wrong will cause the entire feed to be invalid. The [Bitcoin.org](http://bitcoin.org) team has a number of RSS feeds across the site, which is likely why they've opted to generate them manually.

{% raw %}
 ```liquid
---
# This file is licensed under the MIT License (MIT) available on
# http://opensource.org/licenses/MIT.

layout:
lang: en
---
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bitcoin.org Site Blog</title>
    <description>News about Bitcoin.org</description>
    <link>https://bitcoin.org/en/blog</link>
    <atom:link href="https://bitcoin.org/en/rss/blog.xml" rel="self" type="application/rss+xml"/>
    <pubDate>{{ site.time | date_to_rfc822 }}</pubDate>
    <lastBuildDate>{{ site.time | date_to_rfc822 }}</lastBuildDate>
    <generator>Jekyll v{{ jekyll.version }}</generator>
    {% for post in site.posts limit:5 %}
      <item>
        <title>{{ post.title | xml_escape }}</title>
        <description>{{ post.content | xml_escape }}</description>
        <pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
        <link>https://bitcoin.org{{ post.url }}</link>
        <guid isPermaLink="true">https://bitcoin.org{{ post.url }}</guid>
        {% for tag in post.tags %}
          <category>{{ tag | xml_escape }}</category>
        {% endfor %}
        {% for cat in post.categories %}
          <category>{{ cat | xml_escape }}</category>
        {% endfor %}
      </item>
    {% endfor %}
  </channel>
</rss>
```
{% endraw %}

Diving into the source code for a post, the front matter looks pretty standard with one minor oddity, the author is a snippet of HTML:

```markdown
---
# This file is licensed under the MIT License (MIT) available on
# http://opensource.org/licenses/MIT.

type: posts
layout: post
category: blog

title: "Regarding CSW and the Bitcoin Whitepaper"
permalink: /en/posts/regarding-csw.html
date: 2021-01-21
author: |
  <a href="https://github.com/cobra-bitcoin">Cøbra</a>
---
```

Using the HTML snippet makes the author easy to output as they do after a post:

{% raw %}
 ```liquid
<a href="/en/blog">Bitcoin.org Site Blog</a> on {{ page.date | date: "%d %B %Y" }} {% if page.author %} by {{ page.author }}{% endif%}
```
{% endraw %}

The problem I can see, is say you want to add a profile image to the author, you would have to update the front matter on every single post. A more flexible way to accomplish this is to store the author information in a data file and reference that from the post. It would work something like this:

```yaml
# _data/authors.yml
cobra:
  name: Cøbra
  github_user: cobra-bitcoin
  profile_image: /authors/cobra.jpg
will_binns:
  name: Will Binns
  github_user: wbnns
  profile_image: /authors/wbnns.jpg
```

In the post front matter, we reference the key in the data field:

```markdown
# _posts/2021-04-15-bitcoin.md
---
layout: post
author: cobra
---
```

Then in the layout, we take the author, match it to a key in the authors data file, then render the author however we'd like.

{% raw %}
 ```liquid
# _layouts/post.html

{% assign author = site.data.authors[page.author] %}

<div class="author-bio>
  <img src="{{ author.profile_image }}" alt="{{ author.name }}" />
  <a href="https://github.com/{{ author.github_user }}">{{ author.name }}</a>
</div>
```
{% endraw %}

Now there's a single place to update the structure of an author.

The last thing I'll mention on the blog is excerpts. Jekyll automatically creates an excerpt variable for posts which contains a small snippet of content. It's often used on a blog list page to give a preview of the content. Something like this:

{% raw %}
 ```liquid
<ul class="posts">
  {% for post in site.posts %}
    <li>
      <h3>{{ post.title }}</h3>
      {{ post.excerpt }}
      <p><a href="{{ post.url }}">Read more</a></p>
    </li>
  {% endfor %}
</ul>
```
{% endraw %}

By default, excerpt is the first paragraph of content in a post but you can override it. [Bitcoin.org](http://bitcoin.org/) does exactly this in their [\_config.yml](https://github.com/bitcoin-dot-org/Bitcoin.org/blob/master/_config.yml) by setting a excerpt separator:

```yaml
excerpt_separator: "<!-- END_EXCERPT -->"
```

They can insert this separator in the post content to determine the end of the excerpt. It could be after a few words, or perhaps they want the first three paragraphs. Like this:

```markdown
This is the first paragraph

This is the second paragraph

This is the third paragraph
<!-- END_EXCERPT -->
```

## Translations

A portion of the site is translated into an impressive 28 different languages. The way the site does this is pretty interesting. They have built a translation engine using a Jekyll plugin. The way it works is they have a translation tag which they pass a key:

{% raw %}
 ```liquid
<h2 id="title">{% translate title %}</h2>
```
{% endraw %}

There's a translation file for each language which has a list of keys and the translation in that language:

```yaml
es:
  about-us:
    title: "Acerca de bitcoin.org"
    pagetitle: "Acerca de bitcoin.org"
    pagedesc: "Bitcoin.org está dedicado a ayudar a Bitcoin a desarrollarse de forma sostenible."
    own: "¿Quién es el dueño de bitcoin.org?"
    owntxt: "Bitcoin.org es el dominio original utilizado para la primera página web de Bitcoin. Fue registrado y sigue siendo gestionado por <a href=\"#development#\">los desarrolladores del núcleo de Bitcoin</a> y por otros miembros de la comunidad, con las aportaciones de las <a href=\"#community#\">comunidades de Bitcoin</a>. Bitcoin.org no es una página web oficial. Así como nadie es propietario de la tecnología del correo electrónico, nadie es propietario de la red Bitcoin. Por tanto, nadie puede pretender hablar en nombre de Bitcoin."
    control: "Entonces... quién controla Bitcoin?"
    controltxt: "Bitcoin es controlado por todos los usuarios de Bitcoin alrededor del mundo. Los desarrolladores están mejorando el software, pero no pueden forzar un cambio en las reglas del protocolo de Bitcoin porque todos los usuarios son libres de escoger el software que utilizan. Para permanecer compatibles unos con otros, los usuarios deben usar software que cumpla con las mismas reglas. Bitcoin solo puede funcionar bien con un consenso completo entre todos los usuarios. Por lo tanto, todos los usuarios y desarrolladores tienen un fuerte incentivo para adoptar y proteger este consenso."
    mission: "Misión"
    missiontxt1: "Informar a los usuarios para protegerlos de errores comunes."
```

On build, the plugin iterates over languages, grabs content from the translation file and outputs the file with a prefix of the language code (`/es/` in the example above

It's similar to a strategy to a translation engine we've built at CloudCannon called [Rosey](https://github.com/CloudCannon/rosey). The main difference is Rosey runs after the Jekyll build, where this Jekyll plugin runs as part of the Jekyll build. Personally, I'm a fan of keeping translations out of Jekyll because translating in Jekyll adds a lot of complexity as we'll see later in the showcase. There are situations where it might make sense to keep the translation logic in liquid. If you have complex logic around specific translations, you have complete control over how each translation is rendered. However, the majority of the time, that level of control is not necessary.

## Wallets

Selecting a digital wallet to store your Bitcoin can be overwhelming with the number of options available. The [bitcoin.org](http://bitcoin.org/) site has an interactive questionnaire to help you find the perfect Wallet.
![bitcoin.org, Wallet page](https://cc-dam.imgix.net/blog/uploads/bitcoin-wallet.png)
 It's well designed and easy to use. Filling this out takes you to a table of wallets matching your criteria:
![Wallet page, table of wallets matching your criteria selected](https://cc-dam.imgix.net/blog/uploads/bitcoin-wallet2.png)
 The data for the wallets comes from a Jekyll collection. Here's the document for the Wasabi Wallet:

```yaml
---
# This file is licensed under the MIT License (MIT) available on
# http://opensource.org/licenses/MIT.

id: wasabi
title: "Wasabi Wallet"
titleshort: "Wasabi"
compat: "desktop windows mac linux"
level: 3
platform:
  - desktop:
    name: desktop
    default: &DEFAULT
      text: "walletwasabi"
      link: "https://wasabiwallet.io/"
      source: "https://github.com/zkSNACKs/WalletWasabi/"
      screenshot: "wasabi.png"
      features: "bech32 hardware_wallet segwit"
      check:
        control: "checkgoodcontrolfull"
        validation: "checkfailvalidationcentralized"
        transparency: "checkgoodtransparencydeterministic"
        environment: "checkfailenvironmentdesktop"
        privacy: "checkgoodprivacyimproved"
        fees: "checkpassfeecontroloverride"
      privacycheck:
        privacyaddressreuse: "checkpassprivacyaddressrotation"
        privacydisclosure: "checkpassprivacydisclosurefullnode"
        privacynetwork: "checkpassprivacynetworksupporttorproxy"
    os:
      - name: windows
        <<: *DEFAULT
      - name: mac
        <<: *DEFAULT
      - name: linux
        <<: *DEFAULT
---
```

If you haven't seen the anchor and alias syntax in YAML before, it's a great way to keep your YAML files DRY. In this example `&DEFAULT` defines an anchor, `*DEFAULT` refers to an anchor and essentially replaces the value with the anchor when it's parsed.

Each Wallet has its own page with in-depth information.
![Wasabit wallet page](https://cc-dam.imgix.net/blog/uploads/bitcoin-wasabi-wallet.png)
 There's a plugin which generates these pages:

```ruby
class WalletPage < Page
  def initialize(site, base, dir, wallet, platform, os, title, lang)
    @site = site
    @base = base
    @dir = dir
    @name = 'index.html'

    self.process(@name)
    self.read_yaml(File.join(base, '_layouts'), 'wallet-container.html')
    self.data['wallet'] = wallet
    self.data['platform'] = platform
    self.data['os'] = os
    self.data['id'] = ['wallets', platform['name'], os['name'], wallet['id']].join('-')
    self.data['lang'] = lang
    self.data['title'] = title
  end
end
```

Collections have output behavior built in so I'm curious why they've opted to generate these pages through a plugin. My guess is translations.

The other place that uses the Wallet collection is the table of wallets shown above. Here's the code that generates the table, I've simplified it to make it easier to follow the gist of what it's doing:

{% raw %}
 ```liquid
{% for wallet in site.wallets %}
  {% for platform in wallet.platform %}
    {% for os in platform.os %}
      <a href="/{{page.lang}}/wallets/{{platform.name}}/{{id}}/">
        <div class="wallet-table-data">
          <img class="wallet-img" src="/img/wallet/{{id}}.png" alt="{{ wallet.title }}" />
          <span class="wallet-label">{{wallet.titleshort}}</span>
        </div>

        {% for check in os.check %}
          {% assign checkName = check[0] %}
          {% assign checkValue = check[1] %}

          <div class="wallet-table-data" data-cell="{{checkName}}">
            <div class="wallet-score-wrapper">
              {% if checkValue contains 'checkgood' %}
                <span class="wallet-table-text">{% translate wallet-scoring-good choose-your-wallet %}</span>
                <div class="wallet-score wallet-good"></div>
              {% elsif checkValue contains 'checkpass' %}
                <span class="wallet-table-text">{% translate wallet-scoring-pass choose-your-wallet %}</span>
                <div class="wallet-score wallet-pass"></div>
              {% elsif checkValue contains 'checkfail' %}
                <span class="wallet-table-text">{% translate wallet-scoring-fail choose-your-wallet %}</span>
                <div class="wallet-score wallet-caution"></div>
              {% elsif checkValue contains 'checkneutral' %}
                <span class="wallet-table-text">{% translate wallet-scoring-neutral choose-your-wallet %}</span>
                <div class="wallet-score wallet-neutral"></div>
              {% endif %}
            </div>
          </div>
        {% endfor %}
      </a>
    {% endfor %}
  {% endfor %}
{% endfor %}
```
{% endraw %}

This is where we really see how much complexity the translation engine is adding. It's a lot of logic to essentially output a tick in one of four states. If we ignore the translations, I would structure it something like this: <!-- -->

```yaml
---
# This file is licensed under the MIT License (MIT) available on
# http://opensource.org/licenses/MIT.

id: wasabi
title: "Wasabi Wallet"
titleshort: "Wasabi"
compat: "desktop windows mac linux"
level: 3
platform:
  - desktop:
    name: desktop
    default: &DEFAULT
      text: "walletwasabi"
      link: "https://wasabiwallet.io/"
      source: "https://github.com/zkSNACKs/WalletWasabi/"
      screenshot: "wasabi.png"
      features: "bech32 hardware_wallet segwit"
      check:
        control: "good"
        validation: "fail"
        transparency: "good"
        environment: "fail"
        privacy: "good"
        fees: "pass"
      privacycheck:
        privacyaddressreuse: "pass"
        privacydisclosure: "pass"
        privacynetwork: "pass"
    os:
      - name: windows
        <<: *DEFAULT
      - name: mac
        <<: *DEFAULT
      - name: linux
        <<: *DEFAULT
---
```

I've changed the values of the checks to make them easier to understand. When we're outputting the checks, the logic can now be simplified in a big way:​​​​​​​

{% raw %}
 ```liquid
{% for check in os.check %}
  {% assign check_name = check[0] %}
  {% assign check_value = check[1] %}

  <div class="wallet-table-data" data-cell="{{ check_name }}">
    <div class="wallet-score-wrapper">
      <span class="wallet-table-text">{{ check_value }}</span>
      <div class="wallet-score wallet-{{ check_value }}"></div>
    </div>
  </div>
{% endfor %}
```
{% endraw %}

Isn't that easier to read?

## Wrap up

The [Bitcoin.org](http://bitcoin.org) site is a fantastic resource for the Bitcoin community and a excellent example of how you can extend Jekyll's behavior in significant ways through plugins.

One last point of interest to leave you with. In the [\_config.yml](https://github.com/bitcoin-dot-org/Bitcoin.org/blob/master/_config.yml#L549) file, there is some YAML syntax I haven't seen before:

```yaml
aliases:
  --author=Satoshi Nakamoto: Satoshi Nakamoto
  gmaxwell: Gregory Maxwell
```

What's the `--author=` doing here? Send us a Tweet if you have any ideas, I'm curious.

You may have decided by now, that Jekyll is a great static site generator for your next project. If you'd like to learn more, take a look at this [Jekyll tutorial](/tutorials/jekyll-tutorial/) to get you started. 
