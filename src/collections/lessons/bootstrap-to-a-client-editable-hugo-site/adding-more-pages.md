---
title: Adding more pages
image: 
order: 8
lead_score: 1
tutorial: bootstrap-to-a-client-editable-hugo-site
description: Add more pages to your site by converting components.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---
### What you'll learn here

* Creating new pages on the site
* Creating more Bookshop components

```shell
# Starting repo:
git clone git@github.com:CloudCannon/Megakit-Bootstrap-Agency-Template.git

# Starting branch:
git checkout more-pages-start

# Finished branch:
git checkout more-pages-finish
```

Now that the Home page is in a good spot, we can move onto the other pages on the site. This will get easier as we work through the pages, as we’ll start to see some component reuse.

Let’s start with the About page. Create `/hugo_src/content/about.md` with an empty `content_block:` :

```yaml
---
title: "About"
content_blocks:
---
```

As mentioned before, `_index.md` is a branch bundle which uses our `list.html` layout by default. `about.md` doesn’t start with an underscore so it’s a leaf bundle which will look for a `single.html` layout by default.

In the case of this site, all of the leaf pages always have the same `page-title` section. We’ll add this to our `single.html` layout along with iterating over our content blocks.

Create `/hugo_src/layouts/_default/single.html` with the following:

{% raw %}
```html
{{ define "main" }}
  <section class="page-title bg-1" style="background-image:url('{{ .Params.hero.background_image }}');">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="block text-center">
            <span class="text-white">{{ .Params.title }}</span>
            <h1 class="text-capitalize mb-4 text-lg">{{ .Params.hero.title | default .Params.title }}</h1>
            <ul class="list-inline">
              <li class="list-inline-item"><a href="/" class="text-white">Home</a></li>
              <li class="list-inline-item"><span class="text-white">/</span></li>
              <li class="list-inline-item text-white-50">{{ .Params.title }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {{ range .Params.content_blocks }}
    {{ partial "bookshop" . }}
  {{ end }}
{{ end }}
```
{% endraw %}

We’re pulling an image and alternative title from a hero variable in the front matter. Let’s add that to `about.md`\:

```markdown
---
title: "About"
hero:
  title: "Our Company"
  background_image: "/images/bg/home-2.jpg"
content_blocks:
---
```

When you view the site, you should be able to navigate to the About page which will show our new hero component.

Time for some more homework. Convert the components on the About page to Bookshop components and create the rest of the pages with their components. You should end up with the following:

* About
  * Start
  * Numbers
  * Counter Dark
  * Team
* Pricing
  * Overview
  * Pricing
    * Small CTA (We’ll make this part of the pricing component because the background covers both)
* Services
  * Services (same as on Home)
  * Small CTA
* Portfolio
  * Portfolio
* Contact
  * Contact Form
  * Map
