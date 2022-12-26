---
title: Fine tuning the editing experience
image: https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/eleventy-cloudcannon-tutorial-social.png
order: 4
tutorial: eleventy-cms--get-started-with-cloudcannon
description: Eleventy content structure on CloudCannon.
---
CloudCannon provides basic content editing without any configuration. To get the most out of the platform, you have full control to fine-tune the editing experience. CloudCannon configuration typically lives in a [global config file](https://cloudcannon.com/documentation/articles/setting-global-configuration/?ssg=Hugo) but can also be [set at a variety of scopes](https://cloudcannon.com/documentation/articles/using-the-configuration-cascade/?ssg=Hugo).

Let’s set up the global config file. Create `cloudcannon.config.yml` in the source directory (probably the root unless you have a custom setup) of your website. We’ll use this file throughout the rest of this tutorial.

There are four main ways to structure content on a Eleventy site, let’s walk through how they work on CloudCannon:

### Markdown

Content sourced from Markdown will editable in the Visual Editor by default as long as it’s wrapped in an HTML element. For example, this would be editable in the Visual Editor:

{% raw %}
 ```html
<div class="content">
  {{ content }}
</div>
```
{% endraw %}

This would not:

{% raw %}
 ```html
<div class="content">
  {{ content }}
  <p>I'm not an only child</p>
</div>
```
{% endraw %}

Read more about this in the [Editing Markdown files in Visual Editor docs](https://cloudcannon.com/documentation/articles/editing-markdown-files-in-the-visual-editor/?ssg=Hugo).

You can also edit Markdown content on CloudCannon with the Content Editor, and in the front matter with the Data Editor.

The two things you may want to configure for Markdown content is your [Markdown engine](https://cloudcannon.com/documentation/articles/configuring-your-markdown-engine/?ssg=Hugo), and the [WYSIWYG toolbar](https://cloudcannon.com/documentation/articles/defining-editable-regions-in-your-html/?ssg=Hugo#options) in both the Visual and Content Editor.Let’s go over an example of how you would customize the toolbar. Say we want to give our content team the ability to add a table to Markdown files. In our global config file we have full control over all the editing WYSIWYG toolbar.

```yaml
_editables:
  content:
    bold: true
    italic: true
    bulletlist: true
    numberedlist: true
    image: true
    table: true
    undo: true
    redo: true
```

This example scratches the surface of how you can configure the WYSIWYG toolbar. [Check out the docs for a full list of options](https://cloudcannon.com/documentation/articles/defining-editable-regions-in-your-html/?ssg=Hugo#options).

## HTML

You can add a class of editable to most HTML elements to make them editable in the Visual Editor. For example:

{% raw %}
 ```html
<p class="editable">I'm editable in the visual editor</p>
<p>I'm <strong>not</strong> editable in the visual editior</p>
```
{% endraw %}

Give as much or as little access to your content team as they need. Just note, changes to the HTML save back to the layout which might be used by multiple content files.

The element you apply the `editable` class to will change what editing options are available in the WYSIWYG toolbar. For example, add the `editable` class to an `<h1>` and you’ll get basic text formatting options. Add it to a `<div>` and you’ll also be able to add images, lists, and tables. You can even [customize the WYSIWYG toolbar](https://cloudcannon.com/documentation/articles/defining-editable-regions-in-your-html/?ssg=Hugo#options) to have complete control over what editors can and cannot add to each element.

HTML content can only be updated in the Visual Editor.

### Front Matter

Content in front matter is automatically available in the sidebar in both the Visual Editor and Content Editor, as well as on its own in the Data Editor. You can customize every property to provide the&nbsp;best editing interface for your content team.

CloudCannon has naming conventions that do not require any further configuration. For example, if you end a front matter field with `_image`, like `background_image`, CloudCannon will display a image upload/selector. There’s a number of these conventions you can learn more about in&nbsp; the [Customizing your inputs documentation](https://cloudcannon.com/documentation/articles/how-to-choose-what-input-is-used-in-the-data-editor/?ssg=Hugo).

You can also explicitly configure a front matter field too. For example, let’s say you had the following front matter:

{% raw %}
 ```html
---
background: "#ff0000"
hero_content: "Everything you need"
sidebar: 
---
```
{% endraw %}

And we wanted editors to have the following inputs for each one:

* **background**&nbsp;— color picker
* **hero\_content** — WYSIWYG markdown editor
* **sidebar** — checkbox

We could add the following to the global configuration file:

```yaml
_inputs:
  background:
    type: color
  hero_content:
    type: markdown
  sidebar:
    type: checkbox
```

Here’s some of the input types available:

* [Text Area](https://cloudcannon.com/documentation/articles/using-text-inputs-to-edit-your-data/?ssg=Hugo#textarea)
* [Code block](https://cloudcannon.com/documentation/articles/using-code-inputs-to-edit-your-data/?ssg=Hugo)
* [Color Picker](https://cloudcannon.com/documentation/articles/using-color-inputs-to-edit-your-data/?ssg=Hugo)
* [Checkbox](https://cloudcannon.com/documentation/articles/using-checkbox-inputs-to-edit-your-data/?ssg=Hugo#checkbox)
* [Date](https://cloudcannon.com/documentation/articles/using-date-and-time-inputs-to-edit-your-data/?ssg=Hugo)
* [Image](https://cloudcannon.com/documentation/articles/using-upload-inputs-to-edit-your-data/?ssg=Hugo#image)

On top of configuring the type of input, you can configure how it displays and behaves in CloudCannon:

* Comment — Add a description to help your editors understand how to use this field.
* Instance Value — Initialize a field with a unique UUID or today’s date.
* Hidden — Hide a field you don’t want your content team to change.
* Label — The label for the input.

Let’s add some of these fields to the input configuration we defined previously:

```yaml
_inputs:
  background:
    type: color
    comment: "Defines the background for the entire page"
  hero_content:
    type: markdown
    label: "Hero text"
  sidebar:
    type: checkbox
    hidden: true
```

If you want to update front matter content in the Visual Editor rather than the sidebar, you can set up [Visual Data binding](https://cloudcannon.com/documentation/articles/what-are-visual-data-bindings/?ssg=Hugo), which is a small snippet of HTML in your layout to tell CloudCannon which front matter property populates the HTML element. For example,

{% raw %}
 ```html
<h1 data-cms-bind="#title">Main Heading</h1>
```
{% endraw %}

will open an overlay to edit the title property in front matter.

### Page Building

A popular and powerful way to empower content editors is to provide them with a set of building blocks or page components and let them add, remove, reorder, and update these components to build their own pages.

CloudCannon [Structures](https://cloudcannon.com/documentation/articles/defining-what-adds-to-an-array-with-array-structures/?ssg=Hugo) support a set of predefined objects. For example, you might have a structure that allows editors to add photo galleries, testimonials, image and text blocks, and CTAs. It makes them a perfect fit for creating your own page builder. You define the content structures you want for editors, and they can add, remove, reorder, and update them from the array.

When you pair [Structures](https://cloudcannon.com/documentation/articles/defining-what-adds-to-an-array-with-array-structures/?ssg=Hugo) with [visual data binding](https://cloudcannon.com/documentation/articles/what-are-visual-data-bindings/?ssg=Hugo) and [visual data previews](https://cloudcannon.com/documentation/articles/using-live-editing-with-vanilla-js/?ssg=Hugo), you have a powerful page builder which behaves in a similar way to Squarespace. This is extremely powerful but can take some configuration to set up, so we’ve created [Bookshop](https://github.com/CloudCannon/bookshop) to automate this process. It’s an open-source component library for Eleventy and other SSGs. It’s simple to set up and has tight integration into CloudCannon, which will handle the majority of the setup.

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/689852104" autoplay:false extend:true border:true %}

To get started with Bookshop, take a look at the [Eleventy starter guide](https://github.com/CloudCannon/bookshop/blob/main/guides/eleventy.adoc).

### Data files

Data files are automatically available to update in the [Data Editor](https://cloudcannon.com/documentation/articles/introducing-the-data-editor/?ssg=Hugo). The same [inputs configuration](https://cloudcannon.com/documentation/articles/how-to-choose-what-input-is-used-in-the-data-editor/?ssg=Hugo) you used for front matter will work on data files too.

