---
draft: false
title: How to create a browser window with just CSS and HTML
date: 2014-12-21
tags:
  - Resources
author: be1f96bb-0393-4938-b444-a5fb2f0c8590
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
image: https://cc-dam.imgix.net/blog/uploads/blog-close-up-image-of-code.jpg
ssg_frameworks:
categories:
  - resources
---

This isn't the weekly deconstruction, that'll be out in a few days. This is a small post to tide you over until then.

This deconstruction is from our recent [front page redesign](/). I wanted to display screen shots but didn't want to include the window frame in the image. I tried it without the banner window frame but it looked a bit naked and lacked context. So I decided to use CSS to recreate a simplified window frame.

## What is it?

It is wrapper with three buttons in the top corner (close, minimize and maximize).

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/assets/blog/deconstructions/browser-image-with-arrows.jpg" alt:"arrows pointing out the top and bottom of a UI frame and a nice background" extend:false border:false %}

```css
<div class="fake-browser-ui">
    <div class="frame">
        <span></span>
        <span></span>
        <span></span>
    </div>

    <img src="/screenshot.jpg" width="691" height="500" alt="A nice description">
</div>
```

Let's break it down.

### The Content

This doesn't need any explanation. Put what ever you want inside this, I am using an image but you could use a video, canvas or a unicorn. It definitely looks a bit naked.

### Wrap that content with a div.

This div will give us a background colour and some padding to create the frame. I like to put a 2px border on the bottom to give some depth. It also wraps the content in case it is mostly white. Adding a line-height of 0 will prevent any spacing around the image. Then to top all of this off, add a border radius to soften the edges.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/assets/blog/deconstructions/browser-image.jpg" alt:"A nice background with some kitchen wares" extend:false border:false %}

```css
.fake-browser-ui {
  padding: 20px 0 0;
  border-radius: 3px;
  border-bottom: 2px solid #ccc;
  background: #ddd;
  display: inline-block;
  position: relative;
  line-height: 0;
}
```

### Three buttons

I used 4 elements for this part. One to wrap the buttons and position it correctly. The other 3 are the buttons which just float beside each other.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/assets/blog/deconstructions/browser-image-with-arrows.jpg" alt:"arrows pointing out the top and bottom of a UI frame and a nice background" extend:false border:false %}

```css
.fake-browser-ui .frame {
  display: block;
  height: 15px;
  position: absolute;
  top: 5px;
  left: 1px;
}

.fake-browser-ui span {
  height: 8px;
  width: 8px;
  border-radius: 8px;
  background-color: #eee;
  border: 1px solid #dadada;
  float: left;
  margin: 0 0 0 4px;
}
```

## Why would I ever use this?

I really like this technique because I can throw anything into it and I know it will look right. This prevents loading any additional assets and can be cached. We used a similar technique for the Macbook on the [top of our homepage](/) and all of the devices on our previewer. The previewer) demonstrates how flexible this technique by animating between the different device shapes.

This is completely scalable, try zooming the page and you will it just as crisp as when you had it at 100%. Other than that how many more excuses do you need to play with CSS (it's amazing).

## That's it

This deconstruction does not include the URL bar as the purpose of this UI element is to give focus to the content within it. I feel the URL bar and other elements would detract from the focus. Hope it comes in handy, if anything was unclear just send me a message below. Keep up to date by following us on twitter or joining our mailing list.

<style type="text/css">.fake-browser-ui {
    max-width: 500px;
    margin: 0 auto;
    display: block;
}

.fake-browser-ui img {
    margin: 0 auto;
}

.blank-image-wrapper {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
}</style>
