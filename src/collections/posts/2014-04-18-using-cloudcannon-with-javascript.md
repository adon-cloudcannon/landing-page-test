---
draft: false
title: Using CloudCannon with JavaScript
date: 2014-04-18
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
image: https://cc-dam.imgix.net/blog/uploads/blog-birdseye-view-laptop-work.jpg
ssg_frameworks:
categories:
  - resources
---

A common question that comes up is “How can I use JavaScript with CloudCannon?”. As a heavy JavaScript user, I would ask the same and that’s why we build CloudCannon from the ground up to handle a wide range of sites.

There is one rule to know when using JavaScript with the editable class. **The elements with an editable class must not be rendered or tampered with by the JavaScript**.

## Sliders/Carousels

CloudCannon allows you to add the editable class to content that is no visible on page load. As long as the content is on the page to start with it should work.

To demo this I am going to use [unslider](http://unslider.com/). To add the slider we just need a `div` with all the slides with their own container:

```html
<div class="banner">
  <ul>
    <li>This is a slide.</li>
    <li>This is another slide.</li>
    <li>This is a final slide.</li>
  </ul>
</div>
```

Then all we need to do is include the scripts required and add a single line of JavaScript:

```javascript
var options = {
  speed: 500,  //  The speed to animate each slide (in milliseconds)
  delay: 3000, //  The delay between slide animations (in milliseconds)
  dots: true   //  Display dot navigation
};

$('.banner').unslider(options);
```

Hurray, if we test this we see that we have editable content within a slider. One problem though, the library is messing with the inline editing. Every time the arrow keys are pressed the next slide is shown rather than changing my caret position. That’s Ok, we just need to disable the arrow keys and the autoplay on the site while inside the editor.

```javascript
var options = {
  speed: 500,  //  The speed to animate each slide (in milliseconds)
  delay: 3000, //  The delay between slide animations (in milliseconds)
  dots: true   //  Display dot navigation
};

if (window.inEditorMode) {
  options.keys = false;
  options.delay = false;
}

$('.banner').unslider(options);
```

This means we have a customisable slider which works well in both the live site and in the client editor.

## Accordions

Accordions are another way of showing and hiding related content. They help declutter a screen and are perfect for things like FAQs. There is a good tutorial on how to make a simple jQuery accordion on [jacklmoore.com](http://www.jacklmoore.com/notes/jquery-accordion-tutorial/). This will work perfectly just by adding the editable class to any of the content.

## That’s all today

Thanks for reading. If you want me to go over any other kind of JavaScript UI modules or somethings unclear feel free to send me a message. To keep up to date on these posts make sure to [follow us on Twitter](https://twitter.com/CloudCannon).