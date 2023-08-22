---
_schema: default
title: Layouts in Jekyll
image: https://cc-dam.imgix.net/community/Jekyll-tutorial.jpg
order: 5
tutorial: jekyll-tutorial
description: |-
  Layouts help you set up and reuse the main structure of your Jekyll
    site.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---
### What you’ll learn here:

* Creating layouts for your pages
* Using a layout within another layout
* Changing a page title programmatically

```shell
# Starting repo
git clone https://github.com/CloudCannon/jekyll-learn-blog-template.git

# Starting branch:
git checkout layouts-intro-start

# Finished branch:
git checkout layouts-intro-finish
```

## What are Jekyll layouts?

When writing a website in HTML, you will probably notice that many sections stay the same across multiple pages, such as head, footers, and navigation. If your site contains more than a few pages, that’s a lot of content to copy and paste - and any changes need to be made across all pages. Jekyll gives us an easy solution to this problem - layouts. Read more on layouts <a target="_blank" rel="noopener" href="https://jekyllrb.com/docs/layouts/">on Jekyll's official site</a>.

### How to use layouts

Layouts are simple to set up and use. To begin with, we need to create a `_layouts`&nbsp;folder at the root of our project - Jekyll knows to look for this name.

Next, let’s create `default.html` within that folder. This will be the default “shell” of a webpage. Now let’s look at our `index.html`&nbsp;and separate the unique content from the repeatable content. We will take all of the content from `index.html` and paste it into `default.html`. Then, we need to tell Jekyll where to inject our content - simply insert this tag into the area missing content:

```
{% raw %}<!-- Content goes here: -->
{{ content }}{% endraw %}
```

We’re almost there - let’s actually use the layout. Back in our `index.html`, we need to use **front matter** to tell Jekyll that the page’s content should be injected into a layout. To do this, simply add front matter with the special **layout** variable and add default(without .html) as the value:

```plaintext
---
layout: page
title: Home
---
<p class="featured">Featured posts</p>
<h2 class="heading-secondary dark-blue">Latest posts</h2>
```

Now we can run our server again and view the contents of our page. As we can see, nothing has changed, but our `index.html` is much shorter. We can now write content without worrying about repetition and use the `default` (or other custom) layout.

One thing you might notice is that our `about.md` page links to another layout by default - from Jekyll’s default theme. Change the layout reference to `default` as well.

### Layout inheritance

A layout can also be referenced within another layout. But when could this be useful? Sometimes we might want to keep the content the same across all pages, such as a hero area to our default page, but not in all cases.

In our current layout, the hero section is used in `default.html`, which means it will appear in all pages using it. Let’s create another layout called `page.html` with the hero section from `default` removed and pasted into it, then add front matter with **layout** itself pointing to **default:**

```
{% raw %}---
layout: default
---
<div class="hero">
<h1 class="hero__header dark-orange">{{ site.title }}</h1>
</div>
{{ content }}{% endraw %}
```

To use this page, we will modify our index page’s front matter:

```plaintext
---
layout: page
Title: Home
---
```

Now our **index** page will load with a hero section when we visit it, but all others using the **default** layout will not have it.

### Page variables

Remember that we also added `{{ page.title }}` to the title tag of our index page in the last lesson? Now we can continue to add **title** variables in each page that references a layout, and Jekyll will change this automatically. Remove “title: Home” from the `default.html` layout, and add these variables to index and about pages:

```plaintext
title: Home
```

```plaintext
title: About
```

Any other page variables can be referenced in the same way. This makes it easier to set content once in a layout but have different output, depending on the page. There are more variables than page - including site, which points to your `_config.yml` file. Check out the <a target="_blank" rel="noopener" href="https://jekyllrb.com/docs/variables/">Jekyll Variables</a>&nbsp;page if you are interested in more. We will deal with `_config.yml` more in future lessons.

## What’s next?

Layouts are great for making out sites cleaner and more manageable. But Jekyll still has more to offer. Let’s look at reusing even smaller pieces of pages with **includes.**