---
_schema: default
title: Build e-commerce sites on CloudCannon with Snipcart
breadcrumb_title:
description:
draft: false
series:
image: https://cc-dam.imgix.net/blog/uploads/blog-spilled-coin-jar.jpg
date: 2014-07-30T12:00:00+12:00
hide_publish_date: false
tags:
  - Resources
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
permalink: /blog/{{ title | slugify }}/
cta:
  title: Launch your website today
  body_text: >-
    Give your content team full autonomy on your developer-approved tech stack
    with CloudCannon.
  button:
    content:
      link: https://app.cloudcannon.com/register?trial=cc_standard
      text: Get started free!
    styles:
      size:
      style: outline
      extra_classes:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
ssg_frameworks:
categories:
  - resources
---
We believe the approach we’ve taken with CloudCannon CMS is the right way to remove the technical junk that web designers shouldn't have to deal with when adding content management to their website, but we’ve struggled to find anyone who has the same philosophy when it comes to e-commerce. Until now.

<div class="cc-helper__h5">Behold:</div>

{% bookshop "markdown/image" src: "https://cc-dam.imgix.net/blog/assets/blog/snipcart-response/snipcart.png" alt: "Snipcart logo" extend: false border: false %}

[Snipcart](http://www.snipcart.com) is the solution we’ve been waiting for! And now we reckon e-commerce on CloudCannon is going to be awesome!

## What is Snipcart?

The team at Snipcart have created some JavaScript magic so that with a single line of script and a few lines of markup you can make any link on your HTML website buyable.

```html
<script type="text/javascript"
  id="snipcart"
  src="https://app.snipcart.com/scripts/snipcart.js"
  data-api-key="{YOUR_API_KEY}">
</script>

<button class="snipcart-add-item"
  data-item-id="42"
  data-item-name="Shoes"
  data-item-price="10.00"
  data-item-url="/store">
  Buy Shoes
</button>
```

*Find further details in [their documentation](http://docs.snipcart.com/getting-started/installation).*

I'm far from a great web designer myself, but even I managed to knock a Snipcart website together on CloudCannon in an afternoon. Check out [Steve’s Submarine Emporium](http://sse.cloudvent.net/).

### Why Snipcart is going to be awesome on CloudCannon

The ability to sell things from your website, without databases, programming languages or unnecessary hassle is core to the Snipcart philosophy, and we’re excited at CloudCannon because we believe the same thing too.

We also think Snipcart rocks because it works everywhere. Just like us.

Snipcart hooks into five payment gateways - with more on the way they tell us - but all we reckon you need to know is that between [Stripe](https://stripe.com/) (easy, powerful, sexy, BUT not global yet) and [PayPal](https://www.paypal.com/) (not so easy, not so powerful, not so sexy, BUT global already) you’ve got your options covered.

## Excellent… But how?

François over at Snipcart has just released an <a target="_blank" rel="noopener" href="https://snipcart.com/blog/cms-jekyll-cloud-cannon-multilingual">excellent tutorial</a> on setting up Snipcart on CloudCannon.

Side notes:

* The Snipcart guys called us out for not having any e-commerce template. Touche. We’ll get at least one out soon.

* **Do tell us** if you love using Snipcart on CloudCannon so we can put extra effort into working together on a much simpler integration.

Get designing, and get selling!