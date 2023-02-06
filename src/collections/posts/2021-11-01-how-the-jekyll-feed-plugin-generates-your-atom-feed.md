---
title: How the Jekyll Feed plugin generates your Atom feed
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/uploads/jekyll-feed-desktop-banner.png
permalink: /blog/showcase-how-the-jekyll-feed-plugin-generates-your-atom-feed/
date: 2021-11-01T13:00:00+1300
description: >-
  In this showcase, we're taking a peek behind the curtain to see how the Jekyll
  Feed plugin works.
tags:
  - Resources
  - Jekyll
author: cloudcannon
---
In this showcase, we're taking a peek behind the curtain to see how the Jekyll Feed plugin works.

## What is an RSS or Atom feed?

If you're an avid reader of blogs, you might have a list of websites you check out every day. Working through this list every day is a hassle, especially when there's no new content. You could sign up for a newsletter for each blog, but do you want to read long-form content in your inbox? Wouldn't it be better to have something similar to email but specifically for the blogs you read? Well, that's exactly what an RSS reader is. An RSS reader periodically checks an XML feed of the blogs you follow, pulls in the content, and displays them in an interface similar to an email inbox. The XML feed commonly comes in two formats RSS or Atom, which lists the latest posts on the site, including the HTML content of the post and associated metadata such as the published date, title, and author. The two formats are so similar I'm not going to get into the details of how they differ. You can [read more about it here](https://problogger.com/rss-vs-atom-whats-the-big-deal/).

## XML

XML is a text-based format for encoding documents. It looks very similar to HTML, and while they are related, they're not the same thing. HTML is used for displaying data, whereas XML is used for transferring data. XML is stricter than HTML:

* It's case-sensitive.
* Close tags are required.
* Parsers won't try to continue parsing if they hit an error like they do with HTML.

Nowadays, JSON is a more popular format for transmitting data because it's less verbose and typically easier to work with.
## The feed

Let's skip straight to the exciting part - how is the feed generated? The plugin has a file called [feed.xml](https://github.com/jekyll/jekyll-feed/blob/master/lib/jekyll-feed/feed.xml) that generates the feed from the site posts. There's nothing particularly complicated going on here. It's a file that uses Liquid to generate the output, just like you would on a regular page in Jekyll.

To start, feed.xml has boilerplate code to set up the XML file. Here's a small snippet:

{% raw %}
 ```xml
<?xml version="1.0" encoding="utf-8"?>
{% if page.xsl %}
  <?xml-stylesheet type="text/xml" href="{{ '/feed.xslt.xml' | absolute_url }}"?>
{% endif %}
<feed xmlns="http://www.w3.org/2005/Atom" {% if site.lang %}xml:lang="{{ site.lang }}"{% endif %}>
  <generator uri="https://jekyllrb.com/" version="{{ jekyll.version }}">Jekyll</generator>
  <link href="{{ page.url | absolute_url }}" rel="self" type="application/atom+xml" />
  <link href="{{ '/' | absolute_url }}" rel="alternate" type="text/html" {% if site.lang %}hreflang="{{ site.lang }}" {% endif %}/>
  <updated>{{ site.time | date_to_xmlschema }}</updated>
  <id>{{ page.url | absolute_url | xml_escape }}</id>
```
{% endraw %}

Then we get into the posts. By default, the feed.xml contains the ten most recent posts:

{% raw %}
 ```xml
{% assign posts = posts | sort: "date" | reverse %}
{% assign posts_limit = site.feed.posts_limit | default: 10 %}
{% for post in posts limit: posts_limit %}
  <entry{% if post.lang %}{{" "}}xml:lang="{{ post.lang }}"{% endif %}>
```
{% endraw %}

The title runs through four different filters before its output:

{% raw %}
 ```xml
{% assign post_title = post.title | smartify | strip_html | normalize_whitespace | xml_escape %}
<title type="html">{{ post_title }}</title>
```
{% endraw %}

Let's have a look at what each one is doing:

* **smartify** - Converts straight quotes (`"hi"`) into opening and closing quotes (`“hi”`).
* **strip\_html** - Removes any HTML from a string.
* **normalize\_whitespace** - Replaces any whitespace with a single space.
* **xml\_escape** - Encodes any XML special characters (e.g. `<` to `&lt;`)

Next Liquid outputs the link, published date, last updated date, and ID for the post.

{% raw %}
 ```xml
<link href="{{ post.url | absolute_url }}" rel="alternate" type="text/html" title="{{ post_title }}" />
<published>{{ post.date | date_to_xmlschema }}</published>
<updated>{{ post.last_modified_at | default: post.date | date_to_xmlschema }}</updated>
<id>{{ post.id | absolute_url | xml_escape }}</id>
```
{% endraw %}

There's a configuration option to only output the post's excerpt rather than the entire content to keep the feed shorter:

{% raw %}
 ```xml
{% assign excerpt_only = post.feed.excerpt_only | default: site.feed.excerpt_only %}
{% unless excerpt_only %}
  <content type="html" xml:base="{{ post.url | absolute_url | xml_escape }}">{{ post.content | strip | xml_escape }}</content>
{% endunless %}
```
{% endraw %}

The post's author matches a data file containing more information like the email, a URI for the author, and full name.

{% raw %}
 ```xml
{% assign post_author = post.author | default: post.authors[0] | default: site.author %}
{% assign post_author = site.data.authors[post_author] | default: post_author %}
{% assign post_author_email = post_author.email | default: nil %}
{% assign post_author_uri = post_author.uri | default: nil %}
{% assign post_author_name = post_author.name | default: post_author %}

<author>
  <name>{{ post_author_name | default: "" | xml_escape }}</name>
  {% if post_author_email %}
    <email>{{ post_author_email | xml_escape }}</email>
  {% endif %}
  {% if post_author_uri %}
    <uri>{{ post_author_uri | xml_escape }}</uri>
  {% endif %}
</author>
```
{% endraw %}

The categories and tags for the post are listed next:

{% raw %}
 ```xml
{% if post.category %}
  <category term="{{ post.category | xml_escape }}" />
{% elsif post.categories %}
  {% for category in post.categories %}
    <category term="{{ category | xml_escape }}" />
  {% endfor %}
{% endif %}

{% for tag in post.tags %}
  <category term="{{ tag | xml_escape }}" />
{% endfor %}
```
{% endraw %}

Followed by the excerpt (if there is one):

{% raw %}
 ```xml
{% if post.excerpt and post.excerpt != empty %}
  <summary type="html">{{ post.excerpt | strip_html | normalize_whitespace | xml_escape }}</summary>
{% endif %}
```
{% endraw %}

And finally, an associated image:

{% raw %}
 ```xml
{% assign post_image = post.image.path | default: post.image %}
{% if post_image %}
  {% unless post_image contains "://" %}
    {% assign post_image = post_image | absolute_url %}
  {% endunless %}
  <media:thumbnail xmlns:media="http://search.yahoo.com/mrss/" url="{{ post_image | xml_escape }}" />
  <media:content medium="image" url="{{ post_image | xml_escape }}" xmlns:media="http://search.yahoo.com/mrss/" />
{% endif %}
```
{% endraw %}

That's it. It's relatively easy to follow along and is sure better than building it by hand.
## The rest of the Jekyll feed plugin

There are two other pieces of this plugin: a Liquid tag and a generator.

The [Liquid tag](https://github.com/jekyll/jekyll-feed/blob/master/lib/jekyll-feed/meta-tag.rb) has one job - output the metatag to link to the RSS feed. It finds the path and title from the config file and returns a string in this format:

{% raw %}
 ```xml
<link type="application/atom+xml" rel="alternate" href="https://mysite/feed.xml" title="My Site" />
```
{% endraw %}

The [generator](https://github.com/jekyll/jekyll-feed/blob/master/lib/jekyll-feed/generator.rb) is more involved. It's mostly setting up where to output the feed, which collection to run it on, and normalizing data. In the end, it calls the feed Liquid file we dissected above to generate the feed.

## Wrap up

Jekyll plugins can be a black box, but they're usually relatively straightforward when you dive into them. Hopefully, this has given you a glimpse into what it takes to generator your Jekyll feed. If you're interested in more deep dives on Jekyll plugins, reach out on Twitter. 

If you're interested in using Jekyll for your next project, take a look at this [Jekyll tutorial](https://cloudcannon.com/community/learn/jekyll-tutorial/) to get started. 

