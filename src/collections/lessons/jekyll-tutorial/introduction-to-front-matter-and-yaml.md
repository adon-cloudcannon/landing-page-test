---
title: Jekyll front matter & YAML
tutorial: jekyll-tutorial
order: 4
image: https://dam-cdn.cloudcannon.com/community/Jekyll-tutorial.jpg
description: >-
  Front matter and YAML are like bread and butter in Jekyll. Learn these
    concepts and their relationship with Liquid.
---


**Clone: **git clone https://github.com/CloudCannon/jekyll-learn-blog-template.git

**Starter branch:** git checkout front-matter-intro-start

**Finished lesson:** git checkout front-matter-intro-finish

### What you’ll learn here:

* How to use front matter in Jekyll
* The basics of YAML
* How to create your own YAML data structures
* How to manage multiline text with YAML

## What is front matter?

In the previous lesson, we mentioned “front matter”. But what exactly is it, and why should we use it? Front matter is an area at the top of your HTML/Markdown documents that lets you write variables and even content for your pages. It uses YAML, a simple and friendly serialization language, and it works well in combination with Liquid. Read more on front matter [on Jekyll's official site](https://jekyllrb.com/docs/front-matter/).

## Front matter and YAML basics

To write a simple YAML variable, use `key: value` notation, with a colon. The value itself can be just about anything you want: 4, 4.1, “4”, true/false.

In addition, comments (helpful notes that don’t get processed) in YAML are also possible with the “\#’ sign, which can be very helpful.

Let’s start by adding front matter to our index.html page, with a variable for the page title:

```plaintext
---
# the title that will appear in the HTML head tag
title: Home
---

```

That’s all we really need to start - no quotation marks are necessary for your text. Now, to access this, we can use Liquid and reference the “page” object with “dot notation” - i.e., `page.title`. Here, if the title variable exists, we will output it in the title tag - otherwise we simply set it to `CawCannon`:

{% raw %}
```plaintext
<head>
… rest of head
{% if page.title %}
  <title>CawCannon | {{ page.title }}</title>
{% else %}
  <title>CawCannon</title>
{% endif %}
  <link rel="stylesheet" href="css/style.css">
</head>
```
{% endraw %}



### Data structures

If you want to arrange information in a certain way, it’s good to know a few options in YAML. This way, your pages can function a little bit like databases, but much simpler and friendlier. You can write data structures vertically or inline - both are valid.

### Arrays

As you might have noticed in the last lesson, it’s not easy to create arrays in Liquid. However, it’s very simple in front matter. Arrays can be displayed either vertically with dashes or inline with brackets, and it’s common to give them a name (“key”) so that they are easier to access:

```plaintext
# vertical
birds_vertical:
  - Tui
  - Kea
  - Pukeko
  - Piwakawaka
  - Kereru
  - Weka
# inline
birds_inline: [Kiwi, Tui, Kea, Karakiri, Weka]

```

{% raw %}
```plaintext
<!-- Display on page -->
{% for bird in page.birds_vertical %}
  {{ bird }}
{% endfor %}
```
{% endraw %}


### Objects

We can extend arrays by “nesting” more key-value pairs to create “objects” representing real-world ideas, such as lists of products or people. These are useful when you need more complex data that you want to access by name.

Let’s extend our array from before, so that each bird is an object containing its own key-value pairs. Then, for each bird, we can loop through its data by key and use its value in the HTML.

{% raw %}
```plaintext
---
birds:
  - name: Tui
    description: Striking songbird
    image: https://dam-cdn.cloudcannon.com/community/images/tui.jpg
    image_alt: Striking songbird in a tree.
  - name: Kea
    description: Alpine parrot
    image: https://dam-cdn.cloudcannon.com/community/images/kea.jpg
    image_alt: Parrot sitting in an alpine tree.
  - name: Kaka
    description: Loud, social forest parrot
    image: https://dam-cdn.cloudcannon.com/community/images/kaka.jpg
    image_alt: Kaka parrot in a thick forest.
  - name: Pukeko
    description: Colourful swamp hen
    image: https://dam-cdn.cloudcannon.com/community/images/pukeko.jpg
    image_alt: Pukeko bird rustling in a swamp.
  - name: Piwakawaka
    description: Small and energetic
    image: https://dam-cdn.cloudcannon.com/community/images/piwakawaka.jpg
    image_alt: Piwakaka with its tail feathers fanned sitting in a tree.
  - name: Kereru
    description: Mute yet loud pigeon
    image_alt: Kereru sitting in a tree eating berries.
    image: https://dam-cdn.cloudcannon.com/community/images/kereru.jpg
---
<div class="image-grid">
{% for bird in page.birds %}
  <div class="item">
    <img src="{{ bird.image }}" alt="{{ bird.image_alt }}">
    <p>Bird name: {{ bird.name }}</p>
    <p>Description: {{ bird.description }}</p>
  </div>
{% endfor %}
</div>

```
{% endraw %}


### Multiline text in YAML/front matter

An issue you might run into is writing text that spans multiple lines. One option is to simply surround text with **quotation marks** when it gets too long. However, there are additional options to give you more control - especially with recognizing a **line break**.

To do this in YAML/front matter, there are two main formats:

* If **new lines are not important** (i.e., one long sentence), use the **folded style:**

```plaintext
Kea: >-  
  The kea is the world’s only alpine parrot and native to New Zealand, 
  with high intelligence and curiosity - which also extends to its eating habits.
```

* If **new lines are important** (i.e., a paragraph), use the **literal style**\:

```plaintext
kakapo: |-  
  The kakapo is another parrot native to New Zealand
  Unlike the kea, it is a nocturnal, flightless herbivore, and the heaviest parrot in the world.
  Unfortunately, these traits have led to it being critically endangered.
```

There are also two main quirks to be aware of with the **literal style**\:

* To indicate a new line in the **literal style**, a line should have **two spaces** at the end.
* When using the **literal style** in **HTML front matter**, you will need the **markdownify** filter in the body of the document, e.g., {% raw %}`{{ multiline_text | markdownify }}`{% endraw %}. Otherwise, text will automatically be **folded** and you won’t see multiline output.

You can adjust the formats even further, but this is beyond the scope of this lesson (visit [https://yaml-multiline.info/](https://yaml-multiline.info/) for more).

## What’s next?

We’ve taken a quick look at front matter and YAML in Jekyll, which are great for improving your pages. But there’s even more power you can unlock for your pages with our next topic - layouts.
