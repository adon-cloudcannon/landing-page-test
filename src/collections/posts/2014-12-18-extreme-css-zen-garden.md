---
title: Extreme CSS Zen Garden
date: 2014-12-18
author: mike-neumegen
tags:
  - Resources
image: https://dam-cdn.cloudcannon.com/blog/uploads/blog-zen-garden-rock.jpg
---

Something occurred to me the other day. <span class="url">&lt;title&gt;</span> and <span class="url">&lt;meta&gt;</span> tags are in the DOM so you must be able to style them like any other element. So I set up a really basic example and put a width, height and background on a meta tag and sure enough, a blue box appeared in my browser.

From there I thought what can I create using only a basic HTML5 boilerplate, kind of like an extreme version of [CSS Zen Garden](http://www.csszengarden.com/). So I started with this:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Extreme CSS Garden</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body></body>
</html>
```

Then put my CSS skills to work.

It was absolute madness, everything I thought I knew about web design suddenly shattered. I gave a font-size to <span class="url">&lt;title&gt;</span>, content to <span class="url">&lt;meta&gt;</span> and a background image to <span class="url">&lt;link&gt;</span>.

![End result of Extreme CSS Zen Garden example with title and meta tags styled](https://dam-cdn.cloudcannon.com/blog/blog/assets/blog/css-garden/css-garden.png)

And the CSS to go with that.

```css
html {
    font-family: Helvetica, Arial, sans-serif;
    height: 100%;
    background: #eee;
}

head, title, meta, link {
    display: block;
}

title {
    font-size: 5em;
    padding: 20px 0;
}

title, meta {
    text-align: center;
    color: #fff;
}

meta {
    font-style: italic;
}

meta::before {
    content: "This is almost a legitimate website";
}

link {
    width: 100px;
    height: 100px;
    margin: 20px auto;
    background: url(https://en.gravatar.com/avatar/56b658c5d0c89b95f635fb94dc536594?s=100&d=mm);
    background-size: contain;
    border: 2px solid #fff;
    border-radius: 60px;
}

head {
    background: #222;
    border-bottom: 1px dotted #aaa;
}

body {
    text-align: center;
    font-size: 1.5em;
}

body::before {
    content: "I'm going to take a stab and say CSS content isn't exactly search engine friendly.";
}
```

I did a 90s version too:

![1990s styled version of Extreme CSS Zen Garden example with title and meta tags styled](https://dam-cdn.cloudcannon.com/blog/assets/blog/css-garden/css-garden-2.png)

CSS:

```css
html {
    font-family: Helvetica, Arial, sans-serif;
    height: 100%;
    background-color: red;
    -webkit-animation: bganimation 5s infinite alternate; /* Chrome, Safari, Opera */
    animation: bganimation 5s infinite alternate;
    text-align: center;
}

html::after {
    content: url(http://31.media.tumblr.com/tumblr_m9dg70itF41ru71nxo1_100.gif);
}

/* Chrome, Safari, Opera */
@-webkit-keyframes bganimation {
    0%   {background: red;}
    25%  {background: yellow;}
    50%  {background: blue;}
    100% {background: green;}
}

/* Standard syntax */
@keyframes bganimation {
    0%   {background: red;}
    25%  {background: yellow;}
    50%  {background: blue;}
    100% {background: green;}
}

head, title, meta, link {
    display: block;
}

title {
    font-size: 4em;
    font-weight: 800;
    text-decoration: underline;
    background: yellow;
}

title:hover {
    background: green;
}

@keyframes blink {
    to {
        visibility: hidden;
    }
}

@-webkit-keyframes blink {
    to {
        visibility: hidden;
    }
}

title::before {
    content: url(http://static.tumblr.com/x17glcz/T5dmizmm4/ani.businessman2.gif);
}

title::after {
    content: url(http://33.media.tumblr.com/53c9c25e44646f7dff7684214ca28e88/tumblr_mgfh7uvmEo1ru71nxo1_250.gif);
}

meta {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: metaanimation 5s infinite alternate; /* Chrome, Safari, Opera */
    animation: metaanimation 5s infinite alternate;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes metaanimation {
    0%   {left: 400px; top: 250px;}
    25%  {left: 0px; top: 400px;}
    50%  {left:250px; top: 250px;}
    100% {left: 500px; top: 300px;}
}

/* Standard syntax */
@keyframes metaanimation {
    0%   {left: 400px; top: 250px;}
    25%  {left: 0px; top: 400px;}
    50%  {left:250px; top: 250px;}
    100% {left: 500px; top: 300px;}
}

meta::after {
    content: url(http://www.animatedgif.net/underconstruction/anim0206-1_e0.gif);
}

link {
    position: absolute;
    bottom: 0;
    right: 0;
    -webkit-animation: linkanimation 10s infinite alternate; /* Chrome, Safari, Opera */
    animation: linkanimation 10s infinite alternate;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes linkanimation {
    0%   {bottom: 400px; right: 250px;}
    10%  {bottom: 0px; right: 400px;}
    65%  {bottom:250px; right: 250px;}
    100% {bottom: 500px; right: 300px;}
}

/* Standard syntax */
@keyframes linkanimation {
    0%   {bottom: 400px; right: 250px;}
    10%  {bottom: 0px; right: 400px;}
    65%  {bottom:250px; right: 250px;}
    100% {bottom: 500px; right: 300px;}
}

link::after {
    content: url(http://www.animatedgif.net/underconstruction/const_e0.gif);
}

body::before{
    content: url(http://s3-ec.buzzfed.com/static/2013-10/enhanced/webdr05/15/9/anigif_enhanced-buzz-26358-1381845043-13.gif);
}
```

<div class="cc-helper__h2">So is this going to change the way we do web design?</div>

Well…**no** but I think it's still a good exercise because it's so constraining. You have to use every CSS trick in the book.

Give it a go yourself, start with the HTML above and see what you can create. Post back here if you make something cool, I’d love to see what’s possible.