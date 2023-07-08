---
draft: false
title: Live editing in Hugo with Bookshop
description: "Bookshop\_— our open-source component browser and playground, now brings live editing and component-driven workflows to Hugo, as well as Jekyll and Eleventy."
permalink: /blog/live-editing-in-hugo-with-bookshop/
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
image: https://cc-dam.imgix.net/hugo-bookshop-1.jpg
date: 2022-02-11T05:00:00+1300
tags:
  - Features
  - Hugo
author: 5fad7fde-98d2-49f6-95fb-984ec6dce1f4
ssg_frameworks:
  - hugo
categories:
  - features
---
[Bookshop](https://github.com/CloudCannon/bookshop) — our open-source page-building toolkit — now supports Hugo, as well as Jekyll and Eleventy.

If you missed our [Bookshop launch post](/blog/introducing-bookshop/) in October last year, here’s a quick recap: Bookshop empowers you to integrate components with your stack, build and browse UI components locally, and provide rich visual page-building experiences for your editors. Bookshop integrates tightly with CloudCannon for your content management needs. Editors can see the entire catalog of components available and use them to build pages visually, all powered by your custom-built component library.

Feature development has continued in the months since release, adding automatic Visual Data Bindings, Eleventy 1.0 support, and now a rich Hugo integration.

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/675344017" autoplay:true extend:true border: true %}

## Live Previews on CloudCannon

Before we discuss Hugo and Bookshop, we should get a foundational
understanding of what it means to preview changes live on CloudCannon, and
why Bookshop exists to help integrate it into your stack. 

The first feature of CloudCannon that we use for live previews is the
[Live Editing API](https://cloudcannon.com/documentation/articles/using-live-editing-with-vanilla-js/). This new feature, specific to our Visual
Editor, gives you bidirectional control of the front matter on a given
page. The Live Editing API is the core building block of live previewing:
your JavaScript catches events from the Live Editing API and makes the
necessary changes to the page. 


If you have built your site in a JavaScript SSG, these changes are a
trivial task — rendering in the browser is kind of their thing, and we
even offer
[React](https://cloudcannon.com/documentation/articles/using-live-editing-with-react/) and
[Svelte](https://cloudcannon.com/documentation/articles/live-editing-with-svelte/) connectors to wire it up out-of-the-box.
But if you’re in a pure SSG — the Jekyll, Eleventy, and Hugo crowd — you
can see why this step provides a challenge. How do you know what to update
on the page when data changes? (Spoiler: Bookshop knows.)


Next up in the page-builder feature set is [Visual Data
Bindings](https://cloudcannon.com/documentation/articles/what-are-visual-data-bindings/). These bindings tell CloudCannon to
associate a region of your page with a block of data from the
front-matter. With this in place, CloudCannon can provide popouts in the
Visual Editor, allowing you to add components and edit data contextually
without having to hunt through the sidebar for an object (inside an object
(inside an array)) *ad infinitum*. 

The last pillar of the page-building experience is
[Structures](https://cloudcannon.com/documentation/articles/defining-what-adds-to-an-array-with-array-structures/#structures). To build a meaningful page out of data,
you need some structure to that data (read: components) so that editors
can add and remove items to the page. Structures let you define a list of
objects that you can add, remove, or rearrange in particular
locations. 

Using these ingredients, you can build a fully featured page builder
within CloudCannon. Your editor can click a **Visual Data
Binding** to open a panel, within which they add a
new **Structure** to a components array, at which point your
page uses the **Live Editing API** to catch that change and
update the page.


Building this system into a site is extremely powerful, but it can also be
a lot of work to get it up and running. This is where we finally reach
Bookshop, and why we build and maintain it.


## Bookshop


Now that we know the game we’re playing, how does Bookshop fit into the
picture? 


Bookshop requires some conventions in the way you build your site.
Components live in a specific structure within the Bookshop directory, and
a schema file lives alongside each component. Outside these tweaks to your
workflow, Bookshop gets out of the way — within your layouts, you use the
Bookshop tags like you would an include or a partial. 

On its own, that isn’t ground-breaking, but because of the conventions
under the hood, Bookshop can put an entire page builder together for you:

* The schema files you write for each component get turned into
CloudCannon Structures.
* Each component receives a Visual Data Binding.
* Changes to the front-matter go through the Live Editing API and
re-render the contents of all components on your site.

## The Bookshop Workflow

A component begins its life in the Bookshop components directory. For
Hugo, we write a hero component at `components/hero/hero.hugo.html`. This
file is identical to a Hugo partial you might write elsewhere, and you
have most Hugo functionality within it. 

Alongside the `hugo.html` file, we then write a matching
`hero.bookshop.toml` file — this is the component config. It might look
like the following:

```toml
[component]
structures = ["content_blocks"]
label = "Hero"
icon = "title"

[props]
title = "Lorem Ipsum"
style.select = ["Large", "Compact"]
```

Within `[props]` we define the fields that this component takes, with some
example data that we can see in the component browser. You can think of
this as the component schema; Bookshop uses `[props]` to create Structures
in CloudCannon. Special keywords in this file exist as shortcuts to common
CloudCannon features. In this case, `style.select` will configure a
CloudCannon Select input for the `style` key, with `Large` and `Compact`
as options.

The `[component]` section tells Bookshop where to put the Structures. The
important part here is the `structures` keyword, which in the above
example means: “an editor can add the hero component to any array in the
front-matter named `content_blocks`.”

In CloudCannon, the editor would see the following:

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/Component-modal.png" alt:"Modal in CloudCannnon showing two component examples, with the Hero component highlighted." extend:false border:false %}


Component config files tagged with the correct structure will
automatically populate these modals.


Let’s take a peek at the generated front-matter when a user adds a new
`Hero` component:

```yaml
content_blocks:
  - _bookshop_name: hero
    title: My Title
    style: Large
```

This object should look familiar. The component config we wrote earlier
created the fields we now see, and the `style` keyword now shows the
selected option. Additionally, we see a `_bookshop_name` field generated
by Bookshop that identifies this component. 


To get this onto the page in Hugo, an object with a
`_bookshop_name` key can be passed to the `bookshop` partial
directly:

{% raw %}
```handlebars
{{ range .Params.content_blocks }}
  {{ partial "bookshop" . }}
{{ end }}
```
{% endraw %}

Tip: Only files from your Bookshop will update live in the visual editor,
so putting the above loop within a Bookshop component will ensure that
adding or removing Structures to the `content_blocks` array will
update the page correctly. See how the [starter template](https://github.com/CloudCannon/hugo-bookshop-starter/blob/main/component-library/shared/hugo/page.hugo.html) implements this for an example.

With those steps, we have created the essential parts of our page builder.
There are some one-off pieces of configuration to set up before you’ll see
updates live, so make sure to read through the [Hugo Bookshop
Guide](https://github.com/CloudCannon/bookshop/blob/main/guides/hugo.adoc) while setting this up on a
site. Once that’s all done, your editors will be able to add, edit,
remove, and rearrange components on the page — all without any developer
input.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/Bookshop-editing-component.png "The
CloudCannon visual editor"" alt:"The CloudCannon visual editor, with the hero component selected. Plus
buttons are rendered above and below this component, with which new
components can be added to the content blocks array. A editor popout sits
to the right, containing a title field which can be used to edit the hero
component's title and see the changes
live." extend:false border:false %}

Whether you run an agency with new projects rolling in, or a business
maintaining a fleet of microsites, Bookshop allows you to empower your
editors with a rich, custom-built component library — while you get to
work on the next big thing. With the Hugo module system, you can even
bring new components to old sites and enhance their editing experience
over time.

We first brought this workflow to the Jekyll and Eleventy communities in
Bookshop 2.0, and we have seen many stunning examples of rich contextual
editing that our customers have built on this stack. I’m personally very
excited to now have this workflow available in Hugo. 

## Getting started

The best way to get started is to read the [Hugo Bookshop
Guide](https://github.com/CloudCannon/bookshop/blob/main/guides/hugo.adoc) and check out the [Bookshop
Hugo Starter](https://github.com/CloudCannon/hugo-bookshop-starter) template. These resources
explain how a Bookshop project in Hugo plugs together, and the starter
template provides an example of a simple page builder functioning in the
CloudCannon Visual Editor. If you get stuck and need a hand, pop over to
the [Bookshop issues](https://github.com/CloudCannon/bookshop/issues) on GitHub or get in touch with
our support team in-app.