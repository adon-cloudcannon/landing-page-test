---
_schema: default
title: Creating an Astro Site
image:
order: 1
tutorial: tutorials/astro-beginners-tutorial-series
description:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---
# Creating an Astro Site: Beginners’ Tutorial

**In this lesson you will learn how to create an Astro site.**

## What is Astro and what does it do Differently?

Before getting on with creating an Astro website in this Astro tutorial, let’s take a quick look at why you should consider using Astro. Astro is a tool for building content sites. It lets you bring your own framework. That means you can code up site content in React, Preact, Svelte, Vue, Solid, Lit, or a number of other frameworks. Of course, you can write your content in Markdown too (Astro has first-class support here). There is also an Astro markup language which looks much like HTML. Astro markup is fantastic for templating content, though we will see frameworks work well with Astro when you need interactivity.

Astro ships zero JavaScript by default, keeping your site lean. We will see that when you do want to add interactive, stateful content, you need to let Astro know. That is because Astro uses&nbsp;**Partial Hydration**\: it only adds JavaScript for managing state to elements which require it. You might hear these interactive components being referred to as&nbsp;**Islands of Interactivity**. The pattern of large amounts of text or images and only sparse interactive islands is common on content sites. This makes Astro a marvelous choice for blogs, documentation, and other content rich websites.

## Creating an Astro Site

To get going, you will need&nbsp;[Node.js installed](https://nodejs.org/en/download)&nbsp;on your machine. We will use&nbsp;[pnpm](https://pnpm.io/installation)&nbsp;to install the packages, though the commands are similar if you prefer npm or yarn.