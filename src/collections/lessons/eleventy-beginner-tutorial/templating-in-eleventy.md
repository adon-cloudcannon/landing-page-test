---
title: Templating in Eleventy
image: https://cc-dam.imgix.net/eleventy-beginner-tutorial-4-templating.png
order: 4
tutorial: eleventy-beginner-guide
description: >-
  Learn basic Liquid templating concepts and see how you can use them on your
  Eleventy site.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---

Templating is what gives us control over how pages are rendered in Eleventy. You can output variables, loop over an array, run a custom plugin to generate data … almost anything you want. The curly braces we were using earlier `{{ }}`, that’s Liquid templating.

Liquid is the default templating language for HTML and Markdown files, and it’s what we’ll be using throughout this series. If Liquid doesn’t float your boat, Eleventy has a number of other built in templating languages including [Nunjucks](https://www.11ty.dev/docs/languages/nunjucks/), [Handlebars](https://www.11ty.dev/docs/languages/handlebars/), [Mustache](https://www.11ty.dev/docs/languages/mustache/), [EJS](https://www.11ty.dev/docs/languages/ejs/), [HAML](https://www.11ty.dev/docs/languages/haml/), and [PUG](https://www.11ty.dev/docs/languages/pug/), or you can [add your own custom template extension](https://www.11ty.dev/docs/languages/custom/).

## What is front matter?

Front matter is a small snippet of metadata that lives at the top of your files. Some front matter will be specifically for Eleventy, for example setting a layout, or permalink (the output path of a file). Other front matter will be custom to your website. Some common use cases include hiding a sidebar, setting a SEO description, or populating a hero component.

Front matter is typically YAML but can also be JSON or JavaScript in Eleventy. We’ve already seen front matter on both the index and about pages:

{% raw %}
 ```html
---
title: Home
layout: page.html
---
```
{% endraw %}


## How do I use templating and front matter?

Templating and working with front matter are the two things you’ll be doing most of in your Eleventy site, so let’s go through some examples to demonstrate how they work.

### Output a string:


{% raw %}
 ```html
<p>You can write normal HTML, and when you want to switch to Liquid, 
you can use double curly braces like this: {{ "Hello!" }}</p>
```
{% endraw %}


### Output a front matter value:


{% raw %}
 ```html
---
favorite_animal: "Opossum"
---
<p>My favorite animal is an {{ favorite_animal }}.</p>
```
{% endraw %}


### Conditions

Logic statements are surrounded in curly brace percentage sign e.g. {% raw %}`{% if statement %}`{% endraw %} \:

{% raw %}
 ```html
---
show_sidebar: true
---
{% if show_sidebar %}
  <div class="side. aluear">
    This is my sidebar
	</div>
{% endif %}
```
{% endraw %}


### Set and output a variable:


{% raw %}
 ```html
{% assign favorite_food = "banana" %}
<p>My favorite food is {{ favorite_food }}.</p>
```
{% endraw %}


### Looping:


{% raw %}
 ```html
---
opossum_fun_facts:
  - They have 50 teeth, which is more than any other mammal has.
  - They have appendages on their hands and feet called halluxes, which function in a manner similar to a human's thumbs.
  - Opossums have webbed feet, which contributes to the fact that they are strong swimmers.
  - Opossums are nocturnal.
  - Possums are more closely related to kangaroos than they are to opossums.
---

<h2>Opossum Fun Facts!</h2>
{% for fact in opossum_fun_facts %}
  {{ fact }}
{% endfor %}
```
{% endraw %}


### Nested key values:


{% raw %}
 ```html
---
appearance:
  eyes: brown
  snoot: pink
  whiskers: legion
  limbs:
    - claws: 5
      side: left
      position: front
    - claws: 4
      side: right
      position: front
    - claws: 3
      side: left
      position: back
    - claws: 5
      side: right
      position: back
---
<h3>My top appearance traits</h3>
<dl>
	<dt>Eyes</dt>
  <dd>{{ appearance.eyes }}</dd>

  <dt>Snoot</dt>
  <dd>{{ appearance.snoot }}</dd>

  <dt>Whiskers</dt>
  <dd>{{ appearance.whiskers }}</dd>
	
  <dt>Claws</dt>
	<dd>
	  <ul>
    {{ for limb in appearance.limbs }}
      <li>
        {{ limb.position }} {{ limb.side }} 
        {{ limb.claws }
      </li>
    {{ endfor }}
    </ul>
  </dd>
</dl>
```
{% endraw %}


### Filters:

Liquid filters are a way of changing the value of a variable. The pipe character `|` separates the filters.

#### Input:

{% raw %}
 ```html
{{ "Hello" | append: " World" | capitalize }}
```
{% endraw %}


#### Output:


{% raw %}
 ```html
HELLO WORLD
```
{% endraw %}

That gives you a lot of tools to play with. You’ll be using all of these concepts throughout your Eleventy journey. I’d recommend browsing through the [Liquid Documentation](https://shopify.github.io/liquid/basics/introduction/) to see what else you can do.

## Putting it into practice

I’ve thrown a lot of theory at you here, so let’s put it into practice by adding a footer to your website that includes the current year. We’ll also add an optional front matter field you can use to hide the footer on a page-by-page basis.

First we’ll create the partial for the footer. Create `/_includes/_footer.html`\:

{% raw %}
 ```html
{% unless hide_footer %}
  <footer>
    Website was last generated {{ "now" | date: "%Y-%m-%d %H:%M" }}
  </footer>
{% endunless %}
```
{% endraw %}

And now include the partial before `</body>` in your page layout:

{% raw %}
 ```html
{% include '_footer.html' %}
```
{% endraw %}

Let’s check that the `hide_footer` front matter is working by switching the footer off on the `about.md` page. Add the following to the front matter on `about.md`\:

```markdown
hide_footer: true
```

Have a look at your site in the browser — the home page now has the footer and the about page doesn’t.

## What’s next?

Next we’ll put our templating knowledge to the test by creating a blog.
