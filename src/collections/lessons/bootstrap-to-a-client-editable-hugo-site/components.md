---
title: Components
image:
order: 6
lead_score: 1
tutorial: bootstrap-to-a-client-editable-hugo-site
description: Set up and get two components working with Bookshop, end-to-end.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---
### What you'll learn here

* Turn the content for components into a front matter array
* Loop over the array to output the components

```shell
# Starting repo:
git clone git@github.com:CloudCannon/Megakit-Bootstrap-Agency-Template.git

# Starting branch:
git checkout components-array-start

# Finished branch:
git checkout components-array-finish
```

The site is really coming together. We have all the homepage components coming from Bookshop and it’s rendering almost identical to the original Bootstrap theme.

One issue we’re going to face as we add new pages is that the components are hardcoded in the layout. If we wanted a different set of components, say for the About page, we’d have to create a new layout and hardcode a different set of components.

Ideally we want more flexibility than this. We want our content editors to be able add, reorder, update, and remove these components without having to dive into the source code.

To give us more flexibility, we need to change the front matter on our `_index.md` page into an array of components. In the layout we can then simply iterate over the component array and render each component. The side benefit of this is that we can then reuse this layout for multiple pages.

This sounds scary, but it’s actually a small adjustment. We’re going to create a new front matter array called `content_blocks:` which will contain our components. Instead of having an object for each component, we’re going to move it into this array and add a `_bookshop_name:` key to define which component to use. Here’s how that looks for the two components we covered in the last section:

```yaml
---
title: "Home"
content_blocks:
  - _bookshop_name: "slider"
    preheading: "Prepare for new future"
    heading: "Our work is <br>presentation of our <br>capabilities."
    background_image: "/images/bg/home-1.jpg"
    link:
      text: "Get started"
      url: "#"
  - _bookshop_name: "intro"
    preheading: "We are creative & expert people"
    heading: "We work with business & provide solution to client with their business problem"
    sections:
      - icon: "ti-desktop"
        heading: "Modern & Responsive design"
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus."
      - icon: "ti-medall"
        heading: "Awarded licensed company"
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus."
      - icon: "ti-layers"
        heading: "Build your website Professionally"
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus."
---
```

Over to our layout at `/hugo_src/layouts/_default/list.html`&nbsp;— instead of calling the Bookshop partial for each component, we can loop over the `content_blocks` and pass it directly to the Bookshop partial, which will use the `_bookshop_name` field automatically:

{% raw %}
 ```html
{{ define "main" }}
  {{ range .Params.content_blocks }}
    {{ partial "bookshop" . }}
  {{ end }}
{{ end }}
```
{% endraw %}

If you’ve got it right, the page should look exactly as it did before. Only this time we’ve opened up a world of flexibility\!

