---
draft: false
title: Custom Editor Styles
date: 2018-01-23
author: 68fdf39d-de6e-4729-8747-1bf901498c5c
tags:
  - Features
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
image: https://cc-dam.imgix.net/blog/uploads/blog-irridescent-disco-ball.jpeg
ssg_frameworks:
categories:
  - features
---

The editing interface is the core of CloudCannon. It has sensible defaults for most use cases, and can be configured to cover more. We've extended the configuration to allow custom styles, alignment and structure.

## Custom styles

Custom styles allow your editors to mark up inline or block level content with your predefined styles. This opens up an enormous number of use cases, including callouts, multiple types of text emphasis and image filtering. Available styles are configured on a custom scope from globally down to individual elements.

This feature uses class names and styles that you define, so the editing experience is seamless in the *Visual Editor*, and much more contextual in the *Content Editor*.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/assets/blog/custom-editor-styles/content-editor-custom-styles.png" alt:"Content Editor with custom styles and alignment" extend:false border:false %}

To set up custom styles, you'll need to define a path to find the styles (following the same convention as our other [configuration options](https://docs.cloudcannon.com/editing/options/)):

~~~yaml
_options:
  content:
    styles: /css/editor.css
~~~

CloudCannon extracts the styles in the file to populate the *Styles* dropdown. All styles in the file are added to the editor, however only the selectors in the `element.class-name` form appear in the dropdown. You must include the same styles on your live site for the *Visual Editor*.

~~~css
p.callout {
  border: 1px solid #417bfd;
  border-radius: 3px;
  padding: 10px 15px;
  background-color: #edf1ff;
}

strong.warning-text {
  color: red;
}

h2 {
  font-family: Helvetica, sans-serif;
  font-weight: 500;
}
~~~

## Alignment

One of the most common requests for custom styles is for alignment. You can now enable toolbar buttons for alignment and define the class that is applied.

~~~yaml
_options:
  _block:
    left: align-left
    right: align-right
~~~

Use the `styles` file above to include the alignment styles if you're using the *Content Editor* or a *Rich Text* field, otherwise adding the class won't affect the text in the editor.

~~~css
.align-left {
  text-align: right;
}

.align-right {
  text-align: right;
}
~~~

You can style the alignment to match your output site (e.g. `text-align`, `float` or `position`). The other alignment options are `center` and `justify`.

## Structure

The format dropdown has always been available in the *Content Editor* and on block level *Editable Regions*, used mainly to mark up headings. You can now define what options are available in this list:

~~~yaml
_options:
  my_rich_text_markdown:
    format: p h2 h3
~~~

Use this to remove headings or mark up element that editors should not be using in a specific context.

---

Read more about these features in our [official documentation](https://docs.cloudcannon.com/editing/options/). This was one of the most requested features we've ever had, and we're proud to see it available for you to use.