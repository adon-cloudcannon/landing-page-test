---
draft: false
_schema: default
title: Creating sites, the Jamstack way
description: >-
  You might have heard developers talking about Jamstack, but what is it
  exactly? This post is an overview of what Jamstack is and the benefits of
  building your next website the Jamstack way.
series:
image: https://cc-dam.imgix.net/blog/blog-what-is-jamstack.jpg
date: 2023-02-07T16:12:00Z
hide_publish_date: false
tags:
  - Beginner
  - Features
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
  - beginner
  - features
  - resources
---
You might have heard web developers talking about Jamstack, or "modern static web development", but what is it exactly? This post provides an overview of what Jamstack is and the benefits of building your next website the Jamstack way.

### The simplicity of static sites

Static websites are a popular and simple way to build websites that dates back to the&nbsp;[very first website](http://info.cern.ch/hypertext/WWW/TheProject.html) by Tim Berners-Lee. A static website is essentially a folder with a collection of HTML, CSS, JavaScript, images, and other assets on a web server.

When a user visits a page on the website, the webserver finds the file they requested and sends it to them.<br><br>​​​​​<br>{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/marketing/uploads/static-response.svg" alt:"" extend:false border:false %}

### The rise of dynamic sites

As the internet grew, so did content requirements. We needed ways of handling sites with thousands or even millions of pages. We also wanted ways of customizing a page based on who’s looking at it. These requirements gave rise to dynamic websites.

When a user visits a dynamic website, the webserver runs code to generate the website on the fly. It might collect content from a database or API, build the layout from a theme, or create a breadcrumb from a plugin; anything is possible. Once the page generates, it’s returned to the user.

Dynamic websites created new possibilities for the web. The web became much more interactive and tailored to you as an individual. However, with this new approach came a great deal of complexity. Instead of having a web server delivering files, you have programming languages, databases, caching layers, and plugins, which all need to work together flawlessly to deliver a web page. If one piece of the stack breaks, the whole site goes down.<br><br>{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/marketing/uploads/dynamic-response.svg" alt:"" extend:false border:false %}

## Next-level static sites

Static site generators (SSGs) started rising in popularity around 2008 to address the pain points of dynamic websites. A static site generator brings some of the advantages of a dynamic website to a static website. You can programmatically build web pages, retrieve content from a database or API, use layouts and includes just like on a dynamic site. The difference is a static site generator goes through a build process that prerenders all of the pages on the site. So after the build process is complete, you have an entirely static website — just like Tim Berners-Lee did with his first website. Any time you change content or any other source files, you rebuild the site, generating an entirely new static website.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/marketing/uploads/what-is-jamstack.svg" alt:"" extend:false border:false %}

## What is Jamstack?

Static websites of today are capable of so much more than they were in the 90s. We needed a new term to talk about the capabilities of modern static websites without the preconceived limitations of a “static website”. The term Jamstack was coined in 2015 to talk about this new approach to building websites, and it stuck.

A Jamstack site is anything from a simple static website to a single-page web app that retrieves data from an API. Jamstack is the philosophy of prerendering the static parts of a website and retrieving data for the dynamic components from APIs.

## Why build Jamstack?

To cut to the chase, building Jamstack is faster, easier and there’s less that can go wrong. The benefits include:

* **Speed**&nbsp;— A fast-loading website not only provides a great experience to the user, but it’s a direct ranking factor for search engines, and influences bounce rate & conversions. Jamstack pages are prerendered and typically served from a content delivery network (CDN), making them among the faster websites on the internet.
* **Scalability** — A legacy CMS has many moving parts, making scaling a challenging problem. You might need to load balance, vertically scale, or add caching layers at multiple levels of the stack. With a Jamstack site, your pages are static, so they can be served and cached directly from the CDN. With a CDN serving your traffic, you can handle enormous amounts of traffic without lifting a finger.
* **Security**&nbsp;— On a Jamstack website is essentially a folder with files in it, so there’s not a lot a malicious user can exploit. Compare that with a legacy CMS where every piece of infrastructure, plugin, and the platform itself is a potential attack vector and constantly needs to be updated.
* **Simplicity**&nbsp;— Running a legacy CMS at scale requires a broad range of specialized knowledge. You need to maintain software and address bottlenecks across the entire infrastructure ranging from the database to webserver to caching layers. And that’s all to keep the website online. Developing new features on the website is an entirely different skill set. The skillset for running a Jamstack site is vastly smaller. You need front-end knowledge and to set up a static hosting service with a CDN.
* **Developer Experience** — It’s a matter of personal preference, but there are many aspects of Jamstack that make it an approach developers love. There are frameworks for popular modern tools, faster development cycles, Git-centric workflows, less boilerplate, and no infrastructure to set up or maintain. The list could go on. Try it out, and see for yourself!

## How do I get started?

Jamstack is a new approach to building websites and there are new technology and workflows you’ll need to pick up. Fortunately there are plenty of tutorials, resources and services which help make this straight forward:

### 1\. Learn a Static Site Generator

The first step to building a Jamstack website is choosing a static site generator (SSG). There are many different options available, each with its pros and cons. The most popular include&nbsp;[Jekyll](https://jekyllrb.com/), [Hugo](https://gohugo.io/), [Gatsby](https://www.gatsbyjs.com/), [Next.js](https://nextjs.org/), and [Nuxt.js](https://nuxtjs.org/). Following an introduction tutorial and building a small project is the best way to get your feet wet. CloudCannon offers learning path tutorials for [Jekyll](/tutorials/jekyll-101/) and [Hugo](/tutorials/hugo-101/) for those getting started.{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/marketing/uploads/learn-a-ssg.svg" alt:"" extend:false border:false %}

### 2\. Develop your website

You’ll typically set up a repository for your source files. As you develop, you’ll have the SSG running a local server. When you change a file, the SSG will rebuild the site and push the changes to the local server, which you can view from a browser.{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/marketing/uploads/develop-your-website.svg" alt:"" extend:false border:false %}

### 3\. Publish your website

When you’re ready to publish your Jamstack site, picking a Jamstack-aware hosting service makes the process easy. Connect your repository to the hosting provider, and it will automatically pull in any changes, start a build and deploy the resulting static site on a CDN.{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/marketing/uploads/publish-your-website-1.svg" alt:"" extend:false border:false %}

## Jamstack CMS

Content editors typically aren’t familiar with Git or HTML, let alone running an SSG build on their local machine. Fortunately, many Jamstack CMSs provide a friendly user interface for managing content on Jamstack websites. There are two approaches to managing content: API-based and Git-based. With API-based CMS, you create and manage your content on the platform and pull it in using their API as part of the SSG build.

A Git-based CMS like CloudCannon takes a different approach. It syncs your files from your repository and provides an editing interface to update the content. When you save a file, the CMS commits it back to the repository, so you always maintain control and ownership over your content.

## What is CloudCannon?

CloudCannon is a platform that makes working with Jamstack sites easy. It’s everything you need to sync, build, edit and host Jamstack websites all in one place.

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/795437736" autoplay:true extend:true border:true %}

###

To get started, you can sign up for our [free 14-day trial](https://app.cloudcannon.com/register?trial=cc_standard) and connect your Jamstack repository with CloudCannon. CloudCannon automatically pulls in your files, builds the site, and deploys it to fast CDN hosting. You can share CloudCannon with your team to update content directly on your website using a Git-based visual editor.

## Resources for Jamstack

One of the best things about Jamstack is the community and resources available to help you learn. Here’s some of our favorites:

* [The Jamstack Ecosystem](https://cloudcannon.com/community/jamstack-ecosystem/)
* [CloudCannon's Jamstack tutorials](/tutorials/)
* [Static vs Dynamic Websites: The Definitive Guide](https://cloudcannon.com/blog/static-vs-dynamic-websites-the-definitive-guide/)
* [What is a Static Site Generator?](https://cloudcannon.com/blog/what-is-a-static-site-generator/)
* [Choosing a CMS for your Static Site](https://cloudcannon.com/blog/choosing-a-cms-for-your-static-site-part-1/)
* [jamstack.org](https://jamstack.org/)
* [The New Dynamic](https://www.tnd.dev/)
* [The evolution of Jamstack](https://www.smashingmagazine.com/2021/05/evolution-jamstack/)