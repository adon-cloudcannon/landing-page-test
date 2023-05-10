---
draft: false
title: Editor Link Modals
date: 2018-07-18T13:06:00+1200
tags:
  - Features
author: 68fdf39d-de6e-4729-8747-1bf901498c5c
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
image: https://cc-dam.imgix.net/blog/uploads/blog-greyscale-3d-triangles.jpg
---
Front matter is a great way to structure content and metadata for a Jekyll website. We've made some updates to allow you to further integrate your front matter into your editing experience.

## Sidebar and Editor Links

The right sidebar is the default place to edit your front matter in the *Visual* and *Content Editors*. CloudCannon builds an easy to use interface around each of your fields, controlled by an intuitive naming scheme. With larger sets of front matter, it's sometimes difficult for editors to connect where the changes appear. *Editor Links* help bridge this context gap.

Editor Links are contextual pointers to front matter fields and other pages in the *Visual Editor*. The default behaviour of a front matter *Editor Link* is to highlight the associated front matter field in the sidebar. For example, an **Edit Title** button that highlights the `page.title` field so editors know where to change it.

> *Editor Links* can be styled to fit the brand of your site, and are not displayed on your live site.


![Example front matter Editor Link](https://cc-dam.imgix.net/blog/assets/blog/editor-link-modals/sidebar-editor-link.png)

## Modals

We've added the option to have *Editor Links* open front matter fields in a modal pop up. Use this option to keep your editors inside the *Visual Editor* where context is at its peak.

> Modals display the linked field only and provide more screen space than the sidebar. This is particularly useful with *Rich Text* fields.


![Example modal front matter Editor Link](https://cc-dam.imgix.net/blog/assets/blog/editor-link-modals/modal-editor-link.png)

Open *Editor Links* in a modal by setting the `data-cms-editor-link-style` attribute to **modal**, or by hiding them in the sidebar.

```html
<a href="cloudcannon:#title" data-cms-editor-link-style="modal">Edit the title</a>
```

CloudCannon adds the `cms-editor-link-dirty` class to *Editor Links* after changes are made using the modal style. Use this to add styles indicating that changes are pending in the editor.

## Hiding fields

You can hide specific fields in the sidebar to prevent changes from editors, or to move front matter editing into modals.

> *Editor Links* pointing to hidden fields will open in a modal as they can't be highlighted in the sidebar.


Hide fields by prefixing the key with an underscore (e.g. `_hidden_text`) or with [editing options](https://docs.cloudcannon.com/editing/options/#hidden-fields) (e.g. setting `_options.layout.hidden` to **true**).

---

See our [official documentation](/documentation/edit/editing/html/#editor-links) for more details on setting up your first *Editor Link*.
