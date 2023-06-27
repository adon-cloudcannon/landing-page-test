---
draft: false
title: Updated input configuration for your workflows
description: >-
  We’ve created a consolidated inputs key to streamline your development
  workflows.
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
image: https://cc-dam.imgix.net/blog/uploads/inputs-hero-2.jpg
date: 2021-11-26T12:00:00+1300
tags:
  - Features
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
ssg_frameworks:
categories:
  - features
---
As your CloudCannon sites grow progressively larger, you’ll want to configure more and more inputs. Our previous input configuration required users to redefine their input keys multiple times, spreading the configuration for an input across multiple places. This was, admittedly, a suboptimal process. But no more\!

## One key to rule them all

We’ve now created a consolidated key called `_inputs` that encompasses our previous keys:

* `_options`
* `_comments`
* `_instance_values`
* `_select_data`
* `_structures` (renamed from `_array_structures`)

For example, our previous configuration would result in the following:

```yaml
hero_image: /uploads/hero.png
_comments:
  hero_image: Use a large image here
_options:
  hero_image:
    width: 500
    height: 600
```

The new configuration looks like this:

```yaml
hero_image: /uploads/hero.png
_inputs:
  hero_image:
    comment: Use a large image here
    options:
      width: 500
      height: 600
```

## Inclusivity and flexibility

Our team, like many others, speaks and works across a range of languages — including Spanish, Portuguese, German, Afrikaans, Mandarin, and Russian. It's important to us, then, that our new features are more inclusive for developers and clients working in languages other than English. To help everyone, we've introduced two new configuration settings, `type` and `label`, which let you define a label text separate from the input key and associated naming conventions. Now that your inputs can encompass a `type`, for example, your labels will no longer end up a mix of languages with appended suffixes. This also means that diacritics like umlauts or accents are now supported in labels.

Another heavily requested feature we've added is the ability to connect a select or multiselect input to datasets outside of the naming convention. You can also choose the value that the select / multiselect input saves, making it that much easier to access and use that value in your templates.

We've added a `disabled` input for text that you want to be visible but not editable, and we've also brought in two new inputs — `range` (number) and `switch` (boolean) — as well as support for conditionally shown input fields. This means you can set a hidden key on an input, which is based on another input: toggle a checkbox, and suddenly you'll reveal more keys to edit\!

It doesn't stop there. We have more input types coming soon — [contact our support team](https://cloudcannon.com/documentation/support/) if you have specific requests.

## Hello, structures

To help clarify one of our most popular features, we've renamed **Array Structures** to **Structures.** These can now be configured with `_structures` instead of `_array_structures` — you can either define the values directly, or reference `_structures` as defined anywhere in your configuration cascade. (Whichever way you like to work, we've got you covered\!)

We’ve also added support for structures on objects, which can power object variants without using arrays. For example, your blog posts might end with a CTA block relevant to the content. Now that we’ve allowed structures on objects, a content editor could be enabled to choose the most effective type of CTA for the post. They might opt for a newsletter CTA instead of a signup CTA, and can now make that choice by replacing the whole object rather than dancing around a set of unused fields.

## Better object previews, with richer comments

You know your content (and your content editors) better than we do, so we've opened up configuration options for object previews: `text_key`, `subtext_key`, `image_key` and `icon` are now available to configure for arrays, objects and structures.

Comments now support a limited set of Markdown: links, bold, italic, subscript, superscript and inline code elements are allowed. Links in this block now also support [Editor Links](https://cloudcannon.com/documentation/articles/extending-in-app-navigation-with-editor-links/).

## Update when it's right for you

While we do recommend updating to the new key to smooth out your future workflows, we also know that required updates can be a burden, particularly if you’re pushed for time. That’s why we’re still supporting the previous configuration with full backwards compatibility, allowing you to update your sites when it best suits you.

Of course, new users will benefit from the updated key and new input types from day one.

## Brought to you by the community

About 80% of the digital agencies and external developers we’ve spoken to — and there have been a lot so far\! — have requested more explicit input configuration for their current or potential clients, so we’re quite excited to see how this consolidated key is used, and how much time it's going to save you. Defining every characteristic of an input in a single place should cut down a lot of double- or triple-handling when it comes to defining and redefining keys, freeing up your development time for more interesting tasks.

## How to migrate

We’ve written up a full [migration guide](https://cloudcannon.com/documentation/articles/migrating-to-input-configuration/) over on our Documentation pages with detailed explanations, examples, and before-and-after code blocks. Please note also that the docs on [Customizing your inputs in the Data Editor](https://cloudcannon.com/documentation/articles/how-to-choose-what-input-is-used-in-the-data-editor/), [Changing inputs in the configuration cascade](https://cloudcannon.com/documentation/articles/using-the-configuration-cascade/), and [Using Text Inputs to edit your data](https://cloudcannon.com/documentation/articles/using-text-inputs-to-edit-your-data/) — and our [other input pages](https://cloudcannon.com/search/?b=Documentation&amp;q=inputs) — have been updated to reflect the new `_inputs` key.

If you have any questions about the migration process, feel free to [get in touch](https://cloudcannon.com/documentation/support/) with our helpful support team.
