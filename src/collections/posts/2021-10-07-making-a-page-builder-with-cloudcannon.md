---
title: Making a Page Builder with CloudCannon
description: >-
  Learn how to give content editors the ability to visually build pages, manage,
  and rearrange content.
image: https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/page-builder.jpg
date: 2021-10-07T05:00:00+1300
tags:
  - Resources
author: jordan-trbuhovic
---
Page builders give editors an intuitive and easy way to manage and build websites. All editing can be done within CloudCannon's Visual Editor in real time.

Visual data previews are enabled with the use of [Bookshop](https://github.com/CloudCannon/bookshop). Bookshop is a component development workflow for static websites which currently supports [Jekyll](https://jekyllrb.com/) and [Eleventy](https://11ty.dev/), and will support a wider variety of static site generators in the near future.

Bookshop helps you to create a component-based file structure, which works out of the box with CloudCannon's *[array structures](https://cloudcannon.com/documentation/articles/defining-what-adds-to-an-array-with-array-structures/#array-structures)*. (See our documentation on [array structures](https://cloudcannon.com/documentation/articles/array-structures-reference/) for more information.) This setup allows CloudCannon to immediately re-render any changes to page components and edits within the Visual Editor.

## Getting started

Download or fork our example repositories ( [Jekyll](https://github.com/CloudCannon/page-builder-example-jekyll), [11ty](https://github.com/CloudCannon/page-builder-example-eleventy) ) from GitHub. If you've downloaded the example website you will need to unzip it. With your terminal, change directory into the website. e.g. `cd ~/desktop/page-builder-example-jekyll/`

To run the website locally run the following commands:

* Install *(11ty)*\: `npm i`
* Install *(Jekyll)*\: `npm i && bundle install`
* Run the stack: `npm start`

Your website can now be opened in a web browser by visiting the URL listed in your terminal. Once the website is built and uploaded to CloudCannon you will be able to use the live editing features.

## Directory structure

After unzipping or cloning the example website you will see the following directories:

* **.cloudcannon**<br>*(This is a hidden directory so it will only be visible if you open the website with your text editor)*
* **component-library**
  * bookshop
  * components
  * shared
* **site**

These are all necessary for Bookshop, and enable live editing with CloudCannon.

**.cloudcannon** contains a pre-build script that tells CloudCannon to install any dependencies, and run the Bookshop script. Without this, live editing on CloudCannon won't be possible.

**component-library** has three directories which contain the website components, shared styles, Bookshop config, etc. The *components* directory is where all of your components should be built. Each component has its own folder which holds everything relating to it:

* ***component.&lt;framework&gt;***<br>*The component template*
* ***component.bookshop.toml***<br>*The configuration/front-matter settings for the component on CloudCannon*
* ***component.scss***<br>*The styles for the component*

This gives you an easy to manage component library with self-contained components. Bookshop automatically compiles the styles on build, and turns all components into array structures for CloudCannon. You don't need to worry about *adding, including, or importing* these files anywhere.

**site** contains all of the Jekyll or Eleventy files for your website. You can build your website as you would with any other site within this directory. Your site is separated from Bookshop for better organization.

## Creating new components

Page components give editors a collection of different content types/layouts that can be used to build pages. Bookshop only enables live editing for components, so if you have other hard-coded content structures these will not live update when modified via front matter.

When creating new components they should be added to a folder with the name of the component, inside the *component-library &gt; components* folder. This component folder must contain the three files mentioned in the Directory structure section (component template file, component TOML file, component styles).

An example of a new component would look like this:

```
- component-library
   - components
      - my-new-component
         - my-new-component.bookshop.toml
         - my-new-component.jekyll.html
         - my-new-component.scss
```

To help with this process you can run the Bookshop gen command, which will create a skeleton for any new component:

```
npx @bookshop/gen --name my-new-component
```

## Using components

To give editors access to components, you need to add the `content_blocks` key to the front matter of any page you want components to be accessible on.

Example:

```
index.html
---
title: Welcome to our website
content_blocks:
---
```

Once the website has been built on CloudCannon, `content_blocks` will be shown as a button within the Visual Editor that lets you choose which components to add to the page. `content_blocks` links to the structure listed in the TOML file of each component, which auto-populates the component picker.

Components that get added to the `content_blocks` array are rendered onto pages with the following code, which is located in the *default* page layout.

{% raw %}
```html
<body>
  <main>
    <!--  The `page` include loops through all content_blocks and renders them.
    Using a bookshop tag here means that live previewing will catch new components. -->
    {% bookshop_include "page" content_blocks: content_blocks %}
  </main>

  <!-- This tag registers live previewing on CloudCannon. -->
  {% bookshop_live _cloudcannon/bookshop-live.js %}
</body>
```
{% endraw %}

page.&lt;framework&gt; (referenced in the codeblock above)

```html
{% raw %}{% for block in content_blocks %}
    <div class="cms-editor-link"
        data-cms-editor-link="cloudcannon:#content_blocks[{{ forloop.index0 }}]">
        <span class="cms-editor-button"></span>

        {% bookshop {{block._bookshop_name}} bind: block %}
    </div>
{% endfor %}{% endraw %}
```

You can modify the default page layout in the example website if you want to change the way components are rendered.

## Uploading/syncing to CloudCannon

To get your new Bookshop site on CloudCannon you need to [log in](https://app.cloudcannon.com/) to your account and create a new site. You can choose to sync a repository, upload a folder, or upload the zip downloaded from this post.

If you're uploading a folder, make sure the `.cloudcannon` folder is checked when selecting files to upload. If this is unchecked you will get build errors and won't be able to use the live editing features.

## Summary

After learning the basics of how Bookshop can be integrated into a website, you should now have live editing for components in CloudCannon's Visual Editor. The structure in the example website is a good base for starting, or converting any static website to a Bookshop component-based website. To dive deeper into Bookshop and how it works, check out the [Bookshop Guides](https://github.com/cloudcannon/bookshop/).

You can also use Bookshop in a theme to save duplicating components and styles across websites that use the same themes or layouts. We do this for our Bookshop [templates](https://cloudcannon.com/community/themes/), which are free for anyone to use and modify.

For further reading on themes, see our other posts on creating themes with [GitHub](https://cloudcannon.com/blog/jekyll-themes-with-github/), or with [Gemfury](https://cloudcannon.com/blog/private-jekyll-themes-with-gemfury/).

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/622834787" autoplay:true extend:true border: true %}