---
_schema: default
title: Includes in Jekyll
image: https://cc-dam.imgix.net/community/Jekyll-tutorial.jpg
order: 6
tutorial: jekyll-tutorial
description: |-
   Learn how Jekyll includes allow you to break down your pages into smaller
    “components”.
seo:
   open_graph_type: article
   featured_image:
   featured_image_alt:
---
### What you’ll learn here:

* Creating and using Jekyll includes
* Passing parameters to Jekyll includes

```shell
# Starting repo
git clone https://github.com/CloudCannon/jekyll-learn-blog-template.git

# Starting branch:
git checkout includes-intro-start

# Finished branch:
git checkout includes-intro-finish
```

## What are Jekyll includes?

Previously, we looked at creating layouts as an outer “frame” for page content. But sometimes we have smaller page fragments that we want to remain consistent over multiple pages. Great examples of this are social media sharing and forms. <a target="_blank" rel="noopener" href="https://jekyllrb.com/docs/includes/">Jekyll</a>&nbsp;<a target="_blank" rel="noopener" href="https://jekyllrb.com/docs/includes/">includes</a>&nbsp;allow you to break down your pages into smaller “components” like navigation, section titles, and footers - there are many potential use cases. Read more on includes <a target="_blank" rel="noopener" href="https://jekyllrb.com/docs/includes/">on Jekyll's official site</a>.

## How to use includes

Setting up our includes is much like layouts - we need to create an `_includes` folder for Jekyll to recognize, and then we can put our HTML fragments in it.

For our first example, let’s take our existing navigation and footer from our `default.html` layout and place them in their own files:

* Create `_includes/nav.html`. Cut and paste all of the `<header>` element from `_layouts/default.html` into this file.
* Create `_includes/footer.html`. Cut and paste all of the `<footer>` element from `_layouts/default.html` into this file. Lastly, to use our new includes, simply add these in the place of the content we have moved:

{% raw %}
```plaintext
---
---
<!DOCTYPE html>
<html lang="en">
 ... rest of head ...
<body class="page">
  {% include nav.html %}
    <main class="main-content">
      <div class="container">
        <div class="page-content">
          {{ content }}
        </div>
    </main>
    {% include footer.html %}
</body>
</html>
```
{% endraw %}

<div class="c-card c-card--clickable"><div class="c-card__preview"><p class="u-hide-when-loaded">No preview available</p></div><div class="c-card__content"><div class="c-card__heading"><div class="c-card__icon "><cc-icon name="mdi:data_object" class="u-hide-when-loaded"></cc-icon></div><div class="c-card__heading-content"><p class="c-card__text c-card__text--full-height">Raw</p></div></div></div></div>

<img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" width="15" title="Click and drag to move" height="15" role="presentation" draggable="true" /> Now our default layout is quite a bit cleaner and easier to read, and it’s easier for us to work with these areas individually.



### Add some versatility - pass parameters to includes

It’s great being able to break our site down further, but what if we want to create a component that changes as we need it, like a number of social media posts? Normally, we would just have to copy and paste embed code from a provider, but Jekyll offers another solution: parameters.

When we view a post/video or similar, it is usually identified by a unique code. We can use this code as a “parameter” to pass into our include’s URL, so that our includes become even more reusable.

Let’s create a YouTube component that we can put on our page. Create `youtube.html` in your `_includes` folder and paste this code into it:

{% raw %}
 ```html
<div class="spacing youtube">
<iframe width="560" height="315"
	src="https://www.youtube.com/embed/{{ include.youtube_id }}"
	frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen>
</iframe>
</div>
```
{% endraw %}

<div class="c-card c-card--clickable"><div class="c-card__preview"><p class="u-hide-when-loaded">No preview available</p></div><div class="c-card__content"><div class="c-card__heading"><div class="c-card__icon "><cc-icon name="mdi:data_object" class="u-hide-when-loaded"></cc-icon></div><div class="c-card__heading-content"><p class="c-card__text c-card__text--full-height">Raw</p></div></div></div></div>

<img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" width="15" title="Click and drag to move" height="15" role="presentation" draggable="true" />



Notice the placeholder for a YouTube video ID. Now, all we need to do is include our YouTube component in our page, with our unique code. Let’s add two to our page to show how easily we can now display different videos:

{% raw %}
 ```html
<p class="featured">Featured posts</p>
<h2 class="heading-secondary dark-blue">Latest videos</h2>
<div class="includes-grid">
  {% include youtube.html youtube_id="7W7hEUGtv4U" %>
  {% include youtube.html youtube_id="E3a88_SjJR0" %}
</div>
```
{% endraw %}

<div class="c-card c-card--clickable"><div class="c-card__preview"><p class="u-hide-when-loaded">No preview available</p></div><div class="c-card__content"><div class="c-card__heading"><div class="c-card__icon "><cc-icon name="mdi:data_object" class="u-hide-when-loaded"></cc-icon></div><div class="c-card__heading-content"><p class="c-card__text c-card__text--full-height">Raw</p></div></div></div></div>

<img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" width="15" title="Click and drag to move" height="15" role="presentation" draggable="true" />



You can apply this same logic to Instagram, Facebook, or any other social media posts. Simply find the “embed” option for a post/content to create your include, then replace the unique code with {% raw %}{{ include.<your variable> }}{% endraw %}. Now all you need to add is the unique code whenever there is a new post to add.

## What’s next?

Includes are a great way to help manage your website and prevent the need for copy and paste. But for now let’s move our focus to creating content for our blog through **posts.**