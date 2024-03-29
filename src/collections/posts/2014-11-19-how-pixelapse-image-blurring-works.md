---
draft: false
title: How Pixelapse image blurring works
date: 2014-11-19
author: be1f96bb-0393-4938-b444-a5fb2f0c8590
tags:
  - Resources
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
image: https://cc-dam.imgix.net/blog/uploads/blog-zoomed-in-colour-sheet.jpeg
ssg_frameworks:
categories:
  - resources
---

The last deconstruction about the [Facebook content placeholder](/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html) seemed to be popular so here's my next one. I recently discovered a fantastic start up called Pixelapse and the level of polish on their site was outstanding. Today I am doing a deconstruction on something I found there.

## What is it?

As I roamed through the great community designs I noticed the cover images blurred as I scrolled. I immediately thought that they were dynamically blurring images with a canvas but my browser wasn't getting crippled. So I took a look and the result was very pleasing. Here's my clone:

<div class="pixelapse-image scroll-blurred"><div class="the-blurred-image"> </div><div class="the-nice-crisp-image"> </div></div>

```html
<div class="pixelapse-image">
    <div class="the-blurred-image"></div>
    <div class="the-nice-crisp-image"></div>
</div>
```

```css
.the-blurred-image,
.the-nice-crisp-image,
.pixelapse-image {
    width: 100%;
    height: 300px;
    position: relative;
}

.the-blurred-image,
.the-nice-crisp-image {
    background: url("blurry-golden-gate.jpg") no-repeat center;
    background-size: cover; /* This here is why I used divs instead of images */
}

.the-nice-crisp-image {
    background-image: url("crisp-golden-gate.jpg");
}
```

Just two divs with background images, that's amazing and explains the why the performance was so good. I got this one from [Pexels](http://www.pexels.com/) which doesn't need attribution but I think they deserve it.

### A Nice Crisp Image

This is the image you want to use, just as you want to show it normally with no blurring. You will be overlaying this over the next image. Here's my one:

<div class="the-nice-crisp-image"> </div>

### A Small Blurred Image

This is the same image as the one above only I have blurred it. This image will be sitting behind the crisp version and will never change.

<div class="the-blurred-image"> </div>

### The Magic

Instead of dynamically blurring the image, all it's doing is fading the crisp image in and out. Here's the logic for scrolling:

```javascript
$(window).on("scroll", function () {
    $(".scroll-blurred").each(function () {
        var offset = $(this).offset();

        // Change top to be the center of the element
        offset.top += $(this).outerHeight() / 2;

        // Get the center of the screen
        var centerOfTheScreen = window.scrollY + $(window).height() / 2;

        // Check the distance between the center of the screen and out images
        var distanceFromCenter = Math.abs(centerOfTheScreen - offset.top);

        // Calculate the opacity with {BLUR_RANGE} pixels away being 1
        var opacity = Math.min(distanceFromCenter, BLUR_RANGE) / BLUR_RANGE;

        // Set the opacity (inverse last calculation so that it
        // fades in as you approach the center)
        $(this).find(".the-nice-crisp-image").css("opacity", 1 - opacity);
    });
});
```

This is a version using jQuery so I can demonstrate the logic cleanly. To optimise this you should [debounce the scroll events](http://www.html5rocks.com/en/tutorials/speed/animations/#debouncing-scroll-events) by using [requestAnimationFrame](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/).

To demonstrate the the same effect, Below is a pure CSS implementation using the hover state and some nice CSS transitions (try hovering). I reversed the effect so the default is the crisp image, added a glow and added a greeting.

<div class="do-it-on-hover-instead pixelapse-image"><div class="the-blurred-image">Hi There</div><div class="the-nice-crisp-image"> </div></div>

```css
.do-it-on-hover-instead .the-blurred-image,
.do-it-on-hover-instead .the-nice-crisp-image {
    opacity: 0.7;
    transition: all 0.9s ease-in-out;
}

.do-it-on-hover-instead:hover .the-nice-crisp-image {
    opacity: 0;
}

.do-it-on-hover-instead:hover .the-blurred-image {
    box-shadow: inset 0 0 30px #C89F69;
}
```

## Why would I ever use this?

This is a great way for setting the focus on the hovered element and one that people will remember. The other way I would use this same effect is so that I can load the blurred version with a lower resolution then preload the larger crisp image over the top. The user doesn't necessarily suffer as the image is loading and can still use the site as it loads.

## That's it

This was a clever way to polish the UI without impacting on the performance of the page. This fits the tune of the rest of Pixelapse which is beautifully polished. Definitely worth checking out for the idea and the designs. If you found this useful or have any questions feel free to comment below.

Note: I used unprefixed CSS in the code examples to keep it clean. You can use [Our CSS Prefixer](http://prefixr.cloudvent.net/)  to get cross a cross browser version.

<style type="text/css">.the-blurred-image,
    .the-nice-crisp-image,
    .pixelapse-image {
        width: 100%;
        height: 300px;
        line-height: 300px;
        text-align: center;
        color: #fff;
        position: relative;
        font-size: 2em;
        font-weight: 800;
        margin-bottom: 1em;
    }

    .the-blurred-image,
    .the-nice-crisp-image {
        background: url("https://cc-dam.imgix.net/blog/assets/blog/deconstructions/blurry-golden-gate.jpg") no-repeat center;
        -webkit-background-size: cover;
        background-size: cover;
    }

    .the-nice-crisp-image {
        background-image: url("https://cc-dam.imgix.net/blog/assets/blog/deconstructions/crisp-golden-gate.jpg");
    }

    .pixelapse-image .the-blurred-image,
    .pixelapse-image .the-nice-crisp-image {
        position: absolute;
        top: 0;
        left: 0;
    }

    .pixelapse-image .the-nice-crisp-image {
        opacity: 0;
    }

    .do-it-on-hover-instead .the-blurred-image,
    .do-it-on-hover-instead .the-nice-crisp-image {
        opacity: 0.7;
        -webkit-transition: all 0.9s ease-in-out;
        transition: all 0.9s ease-in-out;
    }

    .do-it-on-hover-instead:hover .the-nice-crisp-image {
        opacity: 0;
    }

    .do-it-on-hover-instead:hover .the-blurred-image {
        -webkit-box-shadow: inset 0 0 30px #C89F69;
        box-shadow: inset 0 0 30px #C89F69;
    }</style>

<script>
(function (window) {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}(window));

(function (window) {
    var BLUR_RANGE = 300;
    var latestKnownScrollY = 0,
        ticking = false;

    function onScroll() {
        latestKnownScrollY = window.scrollY;
        requestTick();
    }

    function requestTick() {
        if(!ticking) {
            requestAnimationFrame(update);
        }
        ticking = true;
    }

    function update() {
        ticking = false;

        var currentScrollY = latestKnownScrollY;

        $(".scroll-blurred").each(function () {
            var offset = $(this).offset();

            // Change top to be the center of the element
            offset.top += $(this).outerHeight() / 2;

            // Get the center of the screen
            var centerOfTheScreen = window.scrollY + $(window).height() / 2;

            // Check the distance between the center of the screen and out images
            var distanceFromCenter = Math.abs(centerOfTheScreen - offset.top);

            // Calculate the opacity with {BLUR_RANGE} pixels away being 1
            var opacity = Math.min(distanceFromCenter, BLUR_RANGE) / BLUR_RANGE;

            // Set the opacity (inverse last calculation so that it fades in as you approach the center)
            $(this).find(".the-nice-crisp-image").css("opacity", 1 - opacity);
        });
    }

    window.addEventListener('scroll', onScroll, false);
}(window));
</script>