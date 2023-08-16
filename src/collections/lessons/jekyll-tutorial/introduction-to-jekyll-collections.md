---
title: Collections in Jekyll
tutorial: jekyll-tutorial
order: 8
image: https://cc-dam.imgix.net/community/Jekyll-tutorial.jpg
description: >-
  Create and display related groups of content, independent of date, with Jekyll
  collections in this tutorial.
---

### What you’ll learn here:

* The difference between posts and collections
* Creating collections
* Using collections on your pages
* Outputting collections as standalone pages

```shell
# Starting repo
git clone https://github.com/CloudCannon/jekyll-learn-blog-template.git

# Starting branch:
git checkout collections-intro-start

# Finished branch:
git checkout collections-intro-finish
```


## What are Jekyll collections?

[Collections in Jekyll](https://jekyllrb.com/docs/collections/) are quite similar to the posts that we created in the previous lesson. So what’s the difference? Here’s a simple summary:

* Use **posts** when you want to write independent articles, with a publishing date.
* Use **collections** when you want to group related content, which can have its own page, but date is unimportant.

The keyword to remember is “group”. If you have a series of items that fall under a certain category/theme - like profiles for people/employees or recipes/menu items - a collection is probably suitable. Often, the content of items can all be displayed on the same page, or also have its own page, whereas a post should only take up its own page.

Let’s reinforce the point by explaining how collections are used in this code-along project:

* Our posts provide “spotlight” articles on topics relating to birds, so the content is not all 100% related.
* Our collections are more flexible. We will use some of the content to construct a gallery overview, and these excerpts will link to an individual “profile” page. This content will be unrelated to publishing time.

Hopefully the purpose of collections is clearer. Now let’s put them into action.

### Creating collections in Jekyll

Technically, we could simply put a collection of items into front matter on a specific page that uses them. However, it would be better to access these items across multiple pages. This makes the content flexible and easier to maintain. Jekyll provides simple conventions to do this - no surprises here.

First, let’s finally visit our `_config.yml` file. This file stores our “global” variables (accessible from any page), and we intend to make our collections global too. Add this to the `_config.yml`\:

{% raw %}
 ```html
collections:
  birds:
```
{% endraw %}

Now that we have the collection name recognized, let’s add the actual collections. Create a folder at the root of the project that matches this variable name, with an underscore - `_birds`. This is the convention to follow for collections.

We can now add collection documents to this folder. Again, like posts, it is also most common to use Markdown documents. If you are using the code-along project, the contents for collection items can be found in `collections.zip` in the root of the project. Simply unzip the contents into \_birds.

### Using collections — gallery

Now that we have our collection set up, let’s use it. For this example, we are going to display them in a gallery view. For this purpose, we will create `gallery.html` in the root of the directory, with the following front matter:

{% raw %}
 ```html
---
layout: default
title: Gallery
---
```
{% endraw %}

Now all we need to do is loop through our collection, which has been made a global `site` variable in our `_config.yml` file. To begin, add the following content below the front matter in `gallery.html`\:

{% raw %}
 ```html
{% for bird in site.birds %}
  <img src="{{ bird.image }}" alt="{{ bird.image_alt }}">
  <span>{{ bird.description }}</span>
{% endfor %}

```
{% endraw %}

Now we can see the images and the description in our gallery, which is great.

If you are using the code-along site, for something that looks a bit nicer and makes full use of the collection content, you can check out the “finished” repository or use this code:

{% raw %}
 ```html
---
layout: default
title: Gallery
---
<h1 class="gallery-header dark-blue">Bird Index</h1>
<div class="gallery-container">
  {% assign sorted_array = site.birds | sort: "title" %}
  {% for bird in sorted_array %}
    <div class="gallery-item">
      <div class="gallery-item__image-block">
        {% if bird.status == "Endangered" %}
          <span class="gallery-item__status">
            <span class="gallery-item__bullet"></span>
            {{ bird.status }}
          </span>
        {% endif %}
        <img class="gallery-item__image" src="{{ bird.image }}">
      </div>
      <p class="gallery-item__title">{{ bird.title }}</p>
      <p class="gallery-item__text">{{ bird.brief }}</p>
      <!-- Add item link here later -->
      <a href="">
        <div class="gallery-item__link">
          <span>Read More</span>
            <img class="gallery-item__arrow" src="/images/arrow-white.svg">
        </div>
      </a>
    </div>
  {% endfor %}
</div>

```
{% endraw %}

Feel free to play around with the collections and logic. Now we can see our collection as a gallery when we run our server.

### Collections as pages

It is also possible to output your collection items as independent pages. To do this, we will need to do three small things:

* Add a flag to our collection object in `_config.yml`
* Create a layout to display each item
* Change the layout that each collection item should use

First, change the collection object in `_config.yml` to the following:

{% raw %}
 ```html
collections:
  birds:
    output: true
```
{% endraw %}

Now when Jekyll builds the site, it will create (output) pages for each item, but only basic HTML content. Let’s create another layout - `item.html` - that will be used for showing each item:

{% raw %}
 ```html
---
layout: default
---
<div class="article-container">
  <h1 class="item-header">{{ page.title }}</h1>
  <img class="article-image" src="{{ page.image }}" alt="{{ page.image_alt }}">
  <div class="item-footer">
    <div class="item-footer__status">
      <div class="item-footer__left">
        <p class="item-footer__bold">Conservation status:</p>
        <p>{{ page.status }}</p>
      </div>
      <div class="item-footer__right">
        <p class="item-footer__bold">New Zealand status:</p>
        <p>{{ page.nz_status }}</p>
      </div>
    </div>
    <div class="item-footer__location">
      <p class="item-footer__bold">Found in:</p>
      <p>{{ page.distribution }}</p>
    </div>
  </div>
  {{ content }}
</div>
```
{% endraw %}

As with posts, we need to add which layout to use in the front matter (this has already been done note `layout: item` in each collection item).

Lastly, to access our items, we will also update `gallery.html` to use the newly created collection links (look for HTML comment):

{% raw %}
 ```html
<!-- Add item link here later -->
<a href="{{ bird.url }}">

```
{% endraw %}

In our browser, we can now view both the item preview and the full item content from the links.

## What’s next?

Hopefully it should now be clear why you might want to use collections over posts. But let’s move onto an even lower-level type of content - **data files**.
