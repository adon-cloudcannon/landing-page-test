---
title: 'The ‘Before Jekyll’ era'
description: >-
  The 'Before Jekyll' Era: part 1 of a series exploring the innovative history
  of static site generators.
series: SSGs through the ages
permalink: /blog/ssg-history-1-before-jekyll/
image: https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/explorer-1_lxri3y.png
date: 2022-01-15T05:00:00+1300
tags:
  - Resources
author: mike-neumegen
---
*Static site generators (SSGs) have exploded in adoption over the past few years. What were once tools for developers to build their personal blogs are now something millions of developers are reaching for to build commercial websites and web applications.*

*But how did we get here? Carl Sagan said it best: “You have to know the past to understand the present.” The history of SSGs involves a long line of innovators, building on each other's ideas and pushing the boundaries of what is possible on a static website. This blog series explores that history and navigates from the first SSG to where we are today.*

*Writing this series has been an adventure in piecing together internet history from old commit messages, overlooked tweets, and long-forgotten blog posts on the Wayback Machine. I hope you enjoy reading it as much as I did writing it.*

---

Before [Jekyll](https://jekyllrb.com/) — when the world was young — static website generators were the sole domain of the mavericks of the web development community. After all, why would you want a static website when you could have the flexibility and power of dynamic generation? Building a static HTML website from scratch was a repetitive process, which most people 'solved' with dynamic approaches.

Even with all the hype around dynamic generation, a few brave souls still saw the benefits of static websites. They built tools for themselves and others to make working on static websites easier and more enjoyable. Little did they know that they were laying the foundation for the future of web development.

## [HSC](https://github.com/mbethke/hsc)

*First released in 1996 by [Thomas Aglassinger](https://twitter.com/taglassinger)*

Finding the original, grandparent-of-all-grandparents static site generator is a tough undertaking. We know it was created sometime in the 90s, and it was probably an obscure piece of software that only a small group of people knew about.

The earliest I can find is HSC ("HTML Sucks Completely"), which Thomas Aglassinger created in 1996. HSC didn't call itself a static site generator — that term wouldn't be coined until the late 2000s. Instead, it was an "HTML preprocessor," and attempted to address some of the pain points of static HTML:

> *HTML is a very clumsy thing: No macros, no include files and several other features lacking.*

HSC had typical SSG features like includes and conditional statements. It even had features we don’t commonly see in SSGs, such as validating links & syntax, and automatically adding the width and height to image elements.

HSC was an innovative yet obscure piece of software. While it could perform many functions, dynamic website rendering would still reign supreme over the coming decades.

## [Movable Type](https://www.movabletype.org/)

*First released in 2001 by [Ben](https://twitter.com/btrott) and [Mena](https://twitter.com/dollarshort) Trott*

In the late 90s, self-published blogging rose in popularity thanks to tools like [Blogger](https://www.blogger.com/), [Open Diary](https://www.opendiary.com/), and [LiveJournal](https://www.livejournal.com/).

Ben and Mena Trott had what they called a "\[d\]issatisfaction with existing blog CMSes — performance, stability". They decided to create their own open-source Perl-based blogging platform, which would build a purely static website after any change. It was operated through a web GUI rather than on the command line; while it may not be what we typically think of as an SSG, the resulting website is static.

Moveable Type was one of the first platforms to recognize the advantages of static websites and make them accessible to a non-technical audience. It's powered tens of thousands of blogs and is actively maintained to this day.

## [Nanoc](https://github.com/nanoc/nanoc) 

*First released in 2007 by [Denis Defreyne](https://twitter.com/ddfreyne)* 

Ruby on Rails was launched in August 2004, cementing Ruby as a trendy alternative to PHP for web applications.

Fast forward a few years, and Denis Defreyne was looking for a Ruby-based blogging platform. Fortunately for the static site community, he couldn't find anything that met his requirements: "Having a VPS with only 96 MB of RAM, any Ruby-based CMS ran *extremely* slowly".

Denis was another pioneer of static websites, and realized his VPS would have more than enough resources if the website were purely static. He set out to build what we now know as the first modern static site generator. One year later, on May 2007, Denis launched Nanoc to the world.

Nanoc introduced many of the features we now expect in an SSG: layouts, page metadata, Markdown support, templates, and plugins.

## What lies ahead?

Of course, Jekyll would come along the following year and redefine static with its control and simplicity. Here at CloudCannon we owe a lot to Jekyll, and in my next post I examine the seismic shift in the static web landscape that Tom Preston-Werner helped to enable:

* [Part 2: The 'After Jekyll' era](/blog/ssg-history-2-after-jekyll/)
