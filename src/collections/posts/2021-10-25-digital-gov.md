---
title: 'Deconstruction: How Digital.gov uses Hugo to power their community site'
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/uploads/digital-gov-desktop.png
permalink: /blog/showcase-digital-gov/
date: 2021-10-25T13:00:00+1300
description: >-
  To keep the government community informed, the U.S. General Services
  Administration (GSA) has created a Hugo site, digital.gov, with the latest
  technology, news, and events.
tags:
  - Resources
  - Hugo
author: cloudcannon
---
The U.S. government employs millions of people, many of whom are working on government websites or digital technology. Corralling and informing such a large community is a huge undertaking, and exactly what digital.gov is all about. Let's dive in.

## Edit me

I'm going to start off with a feature that genuinely surprised and delighted me. When you click on the blue edit symbol at the bottom right of the screen, it highlights all the editable pieces of content on the page with a yellow background. Clicking on one takes you to the source Markdown file on GitHub where you can fork, update the content and submit a pull request.
![Digital gov landing page, after pressing the edit button](https://cc-dam.imgix.net/blog/uploads/digitalgov-edit.png)
 Clicking the red bug icon takes you a page to create an issue on GitHub with the current page already populated.

How cool is that? You have a basic CMS and bug reporting tool that any visitor to the website can use. It's a website of the people, by the people, for the people. Better yet, they still have all the advantages of a static site and haven't had to set up any extra services. The only downside I can see is throwing the average person in GitHub might be overwhelming, but this site is for a digital audience, so many of them are likely well versed with GitHub and Markdown.

So how does it work? It's actually relatively simple, editable elements have a `data-edit-this` attribute added to them like this:

{% raw %}
 ```go
<li data-edit-this="resources/coronavirus-covid19-guidance-for-us-government.md">
```
{% endraw %}

Which is generated in Hugo by outputting the path of the current page:

{% raw %}
 ```go
<li data-edit-this="{{- .Path -}}">
```
{% endraw %}

They have jQuery that picks up these attributes and turns them into a GitHub link when edit mode is enabled.

```javascript
$('*[data-edit-this]').each(function(){
  var filepath = $(this).data('edit-this');
	var edit_link = '<a class="edit_this_btn" href="https://github.com/'+git_org+'/'+git_repo+'/edit/'+branch+'/content/'+filepath+'" title="edit this" target="_blank"><span>edit</span></a>';
	$(this).addClass('edit-this').append(edit_link);
});
```

We have a similar feature on CloudCannon called [c](https://cloudcannon.com/documentation/edit/editing/html/#editor-links)[lient sharing](https://cloudcannon.com/documentation/articles/giving-clients-access-to-update-a-site/). Currently only people you've shared the site with can edit. We're exploring a similar workflow where visitors can suggest changes. It's an exciting workflow that essentially brings Wikipedia-style collaboration to sites built with an SSG.

## Build script

One of the limitations of Hugo is it's a static binary, so you can't extend the build with plugins like you can with most other static site generators. To get around this, [Digital.gov](http://digital.gov) uses NPM to run static checks and Gulp to build the asset pipeline.

Let's start with the Gulp asset pipeline. There's a lot of code here so I'm going to talk at a high level. If you want the nitty-gritty, then dive into the [repo](https://github.com/GSA/digitalgov.gov).

Images run through the following steps:

* Output a data file with the width, height, and format of each image. The best I can tell is this is used to create a page that lists all the images available on the site, sort of a home brewed Digital Asset Management tool (DAM).
* Normalize the file name - this replaces any special characters with a hyphen and ensures the file names and extensions are consistent.
* Resize images to a variety of predefined sizes to make it easy to have responsive images. WebP images are created at this stage too.
* Upload to S3

I'm surprised to see no image minifying with something like [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin). Perhaps it increases the build time too much.

Scripts through the following:

* Copy the design system JS and jQuery to the destination.
* Run JS hint and uglify over the project and common JS and output to destination.

Styles run through the following:

* Compile Sass
* Autoprefix to add browser-specific prefixes to CSS
* Minify with [csso](https://github.com/css/csso)
* Output to destination

These are pretty standard flows for CSS and JS, nothing too fancy but saves time and problems by automating it as part of the build.

As I mentioned, NPM is running a series of static checks to help ensure a high quality website. Let's have a look at them one by one:

* [markdownlint](https://github.com/DavidAnson/markdownlint) - Runs through a series of checks to ensure markdown files a well structured. While you won't see markdown files on the live site, linting them helps make sure there aren't any weird or unexpected when they're converted to HTML.
* [jsonlint](https://github.com/zaach/jsonlint) - [Digital.gov](http://digital.gov) has serveral generated JSON files used as API endpoints. As API endpoints, these files need to be free from errors. The JSON linter guarantees these files are valid JSON.
* [htmlproofer](https://github.com/gjtorikian/html-proofer) - Broken links, missing alt tags, and invalid opengraph tags can often creep into a website without you noticing. htmlproofer will catch any of these issues and many more.
* [pa11y](https://github.com/pa11y/pa11y/) - Accessibility is often something that is checked sporadically. [Digital.gov](http://digital.gov) has added an accessibility check to their build pipeline using pa11y so they can catch any accessibility issues straight away.

These scripts either run before or after the Hugo build and provide a lot of extra functionality that wouldn't be possible in Hugo itself.

## Caching

[Digital.gov](http://digital.gov/) makes great use of partial caching to ensure speedy builds: <!-- -->

{% raw %}
 ```go
<div class="paper">
  {{- partialCached "core/notice-bar.html" . -}}
  {{- partialCached "core/usa-banner.html" . -}}
  {{- partialCached "core/header.html" . -}}


  {{/* Main Content */}}
  {{ block "data" . }}{{ end }}
  {{ block "content" . }} The BASE CONTENT didn't load. :/ {{ end }}


  {{- partialCached "core/newsletter-signup.html" . -}}
  {{- partialCached "core/footer.html" . -}}
  {{- partialCached "core/usa-anchor.html" . -}}
</div> <!-- end paper -->
```
{% endraw %}

This site has around 4000 content pages and there's 6 partials here which render the bulk of the layout. Without caching Hugo would render have to render 24000 partials. With caching it's 6. The moral of the story is give Hugo and your CPU a break and use [partial caching](https://gohugo.io/functions/partialcached/). 

## Blogging

The news section is the core of the [digital.gov](http://digital.gov/) website. It's essentially a blog that combines news and past events. To start, let's look at a news markdown file:

{% raw %}
```markdown
---
date: 2021-04-07 20:33:00 -0500
kicker: Artificial Intelligence
title: Using Chatbots To Improve Customer Experience
summary: "Three federal teams showcase their success using chatbots to improve customer satisfaction, increase availability, and empower their users to accomplish tasks faster."

# See all topics at https://digital.gov/topics
topics:
  - chatbots
  - ai
  - artificial-intelligence
  - social-media
  - cx
  - customer-satisfaction

# See all authors at https://digital.gov/authors
authors:
  - ruxi-giura

slug: using-chatbots-to-improve-customer-experience

primary_image: fsa-aidan-virtual-assistant-desktop-mobile-examples

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1
---

Better customer experience, faster response time, and longer availability are some of the many benefits of leveraging automation and artificial intelligence (AI). As more federal teams consider the use of chatbots to improve access for millions of people needing government services, here are some tips and lessons learned from three different case studies.

## How to get started

One of the greatest advantages of AI is that it facilitates decision-making by making the process faster and smarter. Chatbots can perform the same task 24/7 without getting bored or tired, and the outcome is relatively consistent. Therefore, answering basic frequently asked questions about a topic or a service usually can be a good first process to automate.  

{{< youtube U0Rk0euqKWw >}}
```
{% endraw %}

Fairly standard for a blog post, some metadata in the front matter and markdown content for the body.

When it comes to listing the posts, they first retrieve the past events and combine it with news:

{% raw %}
 ```go
{{/* Gets the past events */}}
{{- $past_events := where (where .Site.RegularPages.ByDate.Reverse "Section" "events") ".Date.Unix" "<" now.Unix -}}

{{/* Gets the past events that have youtube_id set  */}}
{{- $past_events := where $past_events ".Params.youtube_id" "!=" nil -}}

{{/* Gets the recent blog posts */}}
{{- $posts := where .Pages "Section" "news" -}}

{{/* Merges the past events and the recent blog posts */}}
{{ $stream := union $posts $past_events }}
```
{% endraw %}

Then use the event type to determine which layout to render with. I was expecting a switch/case statement here and was surprised find there isn't a switch statement with Go templating.

{% raw %}
 ```go
{{/* Loop through all the pages */}}
{{/* Also sorting all the items by date and reverse chron */}}
{{- range (.Paginate ( $stream.ByDate.Reverse )).Pages -}}

  {{- if eq .Type "events" -}}
    {{- .Render "card-event-past" -}}
  {{- end -}}

  {{- if eq .Type "news" -}}
    {{/* External links */}}
    {{- if .Params.source -}}
      {{/* see /layouts/news/ for card templates */}}
      {{ .Render "card-elsewhere"}}
    {{ else }}
      {{/* Blog Posts — Internal links */}}
      {{- if .Params.deck }}
        {{/* see /layouts/news/ for card templates */}}
        {{ .Render "card-article"}}
      {{ else }}
        {{/* see /layouts/news/ for card templates */}}
        {{ .Render "card-article"}}
      {{ end }}
    {{ end }}
  {{- end -}}
{{ end }}
{{ partial "core/pagination.html" . }}
```
{% endraw %}

When it comes to rendering an individual post it's fairly standard too, the layout works its way through rendering the metadata and content. It's lengthy so I won't post it here. If you're interested, [take a peak](https://github.com/GSA/digitalgov.gov/blob/main/themes/digital.gov/layouts/news/single.html).

## Wrap up

One last thing I wanted to call attention to is the beautiful formatting of this data file:

```yaml
termsofservice:
  - name          : Amazon Appstore
    url           : https://developer.amazon.com/public/
    description   : Mobile app store
    uri           : '2014/07/amazon-appstore-agreements-tos-amendment-12714-140522145744-phpapp02.pdf'
    type          : 'PDF'
    updated       : 07-2014
    status        :

  - name          : "AddThis"
    url           : 'http://www.addthis.com/'
    description   : 'Bookmarking & sharing'
    uri           : '2014/07/addthis-updated-tos-amendment.pdf'
    type          : 'PDF'
    updated       : 07-2014
    status        :
```

Data files are often a dumping ground for copy-pasted spaghetti formatted code. It's nice to see someone take pride in their code, even in a place that isn't seen by many people. Shout out to Jeremy Zilar for the pleasant surprise.

That wraps up the [digital.gov](http://digital.gov) showcase. This is a well-established, frequently updated Hugo use case with interesting complexity around news/blog. If you're interested in using Hugo for your next project, take a look at this [Hugo tutorial](/tutorials/hugo-tutorial/) to get started. 
