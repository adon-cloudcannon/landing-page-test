---
title: Managing complex content with Array Structures
date: 2019-05-22
tags:
  - Features
author: mike-neumegen
image: https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/uploads/lights.jpg
---
At CloudCannon, we're always looking for ways to offload content management from developers and empower editors to make changes themselves. Enabling editors to build their own pages with complex elements such as slideshows, testimonials and call to actions is something we've wanted to support but haven't had a good solution for.

Using the Visual Editor or Content Editor for these complex elements can work, but don't provide any structure resulting in editors creating inconsistent and hard to maintain pages.

Using a front matter array is another implementation we've seen but suffers from the opposite problem of being too rigid. By default you can only have one type of structure in an array so it's difficult to support adding both slideshows and testimonials for example.

With [Array Structures](/documentation/edit/editing/configuration/#array-structures), editors have the best of both worlds. They have the freedom to create pages using multiple predefined elements the developer has setup _and_ a rigid structure making the pages consistent and easy to maintain.

## What are Array Structures?

Array Structures are simply front matter arrays with special configuration to define content types. Developers create templates for different types of content. Editors use these templates like building blocks to create their own pages.

## How do developers setup Array Structures?

To begin, create an empty array to store the content in, `page_blocks` in the example below.

Next, we'll configure content types for `page_blocks` using the `_array_structures` key. You can think of these content types as the template for when an editor adds a new item.

Each type has a `label` and `icon` to help identify it in CloudCannon, and a `value` which is used to populate `page_blocks` when the editor adds a content type in CloudCannon.

In this example we've set an `_id` for each content type. This isn't required and isn't a special field, we'll use it later to identify the content type when we're iterating over the array for output.

For a more detailed explanation of configuring Array Structures, check out out the [documentation](/documentation/edit/editing/configuration/#array-structures).

```yaml
page_blocks: []
_array_structures:
  page_blocks:
    values:
      - label: Text Block
        icon: ballot
        value:
          _id: text_block
          title:
          content_markdown:
          image:
      - label: Testimonial
        icon: format_quote
        value:
          _id: testimonial
          name:
          quote:
          company:
          photo_image:
      - label: Slideshow
        icon: collections
        value:
          _id: slideshow
          slides: []
  slides:
    values:
      - label: Slide
        icon: collections
        value:
          image:
          caption:
```

## How do editors use Array Structures?

Editors manage content in Array Structures just like a normal front matter array. They can remove, reorder or edit existing items. The only difference is they have multiple options to add new items to the array:

![Array Structures](https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/assets/blog/array-structures/array-structure.png){: srcset="https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/assets/blog/array-structures/array-structure.png 800w, https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/assets/blog/array-structures/array-structure@2x.png 1600w"}

Adding a new item copies the `value` from the Array Structure and populates a new item in `page_blocks`. Editors then add their content to the structured interface:

![Add Array](https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/assets/blog/array-structures/new.png){: .screenshot srcset="https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/assets/blog/array-structures/new.png 800w, https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/assets/blog/array-structures/new@2x.png 1600w"}

Once saved, the source code for the array contains the various content types:

```yaml
page_blocks:
  -
    _id: text_block
    title: Yellow Rain Coat
    content_markdown: >-
      Stand out from the crowd this winter with a stylish jacket. Protects you
      from the elements, keeps you dry and fashionable, what more could you
      want?
    image: /uploads/thom.jpg
  -
    _id: slideshow
    slides:
      - image: /uploads/sharon.jpg
        caption: Women in rain coat
      - image: /uploads/pascal.jpg
        caption: Man in raincoat
  -
    _id: testimonial
    name: Beatrice Bettermin
    quote: I love these rain coats
    company: Raincoat Review Company
    photo_image: /uploads/beatrice.jpg
```

## Output

The final step is to iterate over the `page_blocks` array to output the content on the page. You can do this however you'd like. We find using a case statement on an `_id` field and having an include for each type the cleanest option.

{% raw %}
```liquid
{% for block in page.page_blocks %}
  {% case block._id %}
    {% when 'text_block' %}
      {% include text-block.html block=block %}
    {% when 'testimonial' %}
      {% include testimonial.html block=block %}
    {% when 'slideshow' %}
      {% include slideshow.html block=block %}
  {% endcase %}
{% endfor %}
```
{% endraw %}

Having an include for each content type makes it easy to maintain and iterate on in the future:

{% raw %}
```html
<div class="testimonial">
  <blockquote>
    <p>{{ include.block.quote }}</p>
  </blockquote>
  <div class="person">
    <h3>{{ include.block.name }}</h3>
    <h4>{{ include.block.company }}</h4>
    <div class="author-image">
      <img src="{{ include.block.photo_image }}" alt="{{ include.block.name }}">
    </div>
  </div>
</div>
```
{% endraw %}

## Summary

Array Structures open a wealth of opportunities to empower editors to build complex pages. We'd love to hear about how you're using them!
