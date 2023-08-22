---
_schema: default
title: Blogging in Jekyll
image: https://cc-dam.imgix.net/community/Jekyll-tutorial.jpg
order: 7
tutorial: jekyll-tutorial
description: >-
  Create and manage blogging content quickly with Jekyll's easy-to-use post
  setup.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---
### What you’ll learn here:

* Creating blog posts
* Accessing post content
* Creating a layout for individual posts

```shell
# Starting repo
git clone https://github.com/CloudCannon/jekyll-learn-blog-template.git

# Starting branch:
git checkout blogging-intro-start

# Finished branch:
git checkout blogging-intro-finish
```

## Creating a blog with Jekyll

A blog wouldn’t be complete without articles of some kind. Fortunately, Jekyll makes it easy to manage your blog posts. In this lesson we will explain the conventions for Jekyll posts and how to display them on your site. Read more on posts <a target="_blank" rel="noopener" href="https://jekyllrb.com/docs/posts/">on Jekyll's official site</a>.

### Conventions for blog posts

A new Jekyll project is automatically generated with a **\_posts** folder and a single post example. For this lesson, we will be creating some posts about a few of our country’s curious feathered friends.

Before we start, there are a few conventions worth noting:

* A valid post name must be in the format `[year]-[month]-[day]-[post-name].md`. For example, `2021-01-01-my-post.md`.
* Posts are conventionally written in Markdown, but HTML is also fine.
* The beginning of the file should include front matter (even if empty) to show that there is content.

Let’s now create some posts following those conventions. Add any number of posts you feel like, which should look like this:

{% raw %}
 ```html
---
title: A blog post
---
```
{% endraw %}

**Your blog post content**

For those following along, you will find a `posts.txt` in the `_posts` folder. Simply follow the instructions to extract the posts into the `_posts` folder, substituting the current date (or any past date) for “year-month-day” where appropriate.

### Accessing your blog posts

Now that we have some posts, let’s use Liquid to display them. Each time Jekyll builds our site, it does a number of things for us:

* Outputs the post pages as HTML
* Creates a post object, with access to the post date and title (from filename by default), as well as a URL for each post
* Makes all of the posts available globally (under “site.posts”)

To begin with, we need a page to list existing posts out, so let’s create `blog.html` in our root directory, with the following, simple content:

{% raw %}
 ```html
---
layout: default
title: Blog Page
---
<ul>
{% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

```
{% endraw %}

As you can see, this is still simple HTML styling, but all post titles with links to their content will be shown within the default layout. For nicer styling, you can use this instead:

{% raw %}
 ```html
<h1 class="col-header dark-orange">All posts</h1>
{% for post in site.posts %}
<div class="post-preview">
  <img class="post-preview__left" src="{{ post.image }}" alt="{{ page.image_alt }}">
  <div class="post-preview__right">
    <a class="preview-title" href="{{ post.url }}">{{ post.title }}</a>
    <span>{{ post.date | date: "%b %d, %Y" }}</span>
    <div class="tag-group">
      {% for tag in post.tags %}
        <div class="tag"><span class="tag-text">{{ tag }}</span></div>
      {% endfor %}
    </div>
  </div>
</div>
{% endfor %}
```
{% endraw %}

### Using a layout

When we click on a post from above, we end up with an unstyled page. This is because we didn’t specify a layout to use, so let’s create one.

First, add `post.html` to our `_layouts` folder, with the following content (some CSS has already been written to handle style):

{% raw %}
 ```html
---
layout: default
---
<div class="b-hero">
  <img class="b-hero__image" src="{{ page.image }}" alt="{{ page.image_alt }}">
  <div class="b-hero__info">
    <h1 class="b-hero__title">{{ page.title }}</h1>
    <div class="b-hero__author-date">
      <span>Written by: {{ page.author }}</span>
      <span>{{ page.date | date: "%b %d, %Y" }}</span>
      <div class="tag-group">
        {% for tag in page.tags %}
          <div class="tag">
            <span class="tag-text">
              <a href="#">{{ tag }}</a>
            </span>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
{{ content }}

```
{% endraw %}

We are using inheritance again to avoid the hero section from the homepage. Only one small step remains: letting our posts know to use this layout. Go back into each post and add `layout: post` to the front matter.

Now we should have nicely formatted posts to view when we run our local server.

## What’s next?

Using Jekyll, we can easily set up a blog and manage our posts. But a blog post is not the only way to group our content, especially if the publishing date is not important.

Next, we’ll look at **collections** - a way to group related content.