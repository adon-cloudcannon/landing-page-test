---
draft: false
title: Using Jekyll plugins on GitHub Pages
date: 2018-05-09T13:10:00+1200
tags:
  - Jekyll
author: a5f00346-90df-4d69-9ce1-d9e4c8e51b10
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
image: https://cc-dam.imgix.net/blog/uploads/github-pages.jpg
---
[GitHub Pages](https://pages.github.com/)  is a reliable, performant Jekyll hosting provider which has [recently added support for SSL](https://blog.github.com/2018-05-01-github-pages-custom-domains-https/) . It's a great hosting platform but has a major limitation, you can't use custom Jekyll plugins. Today we're looking at how CloudCannon can help resolve this limitation.

## The Problem

CloudCannon works nicely with GitHub Pages, you connect your `gh-pages` branch up to a site on CloudCannon and your files stay in sync. Making a change in CloudCannon triggers a build on GitHub Pages, which then pushes the change to your live site. This is a great workflow when you need a CMS for non-developers and still want to use GitHub Pages hosting. However, you still won't be able to use custom Jekyll plugins.

## Outputs

To use Jekyll plugins on GitHub Pages we'll use a new CloudCannon feature, [Outputs](https://docs.cloudcannon.com/syncing/output/) . With *Outputs*, CloudCannon pushes the static output of a build to a branch in addition to pushing changes back to your Jekyll source. This is useful for GitHub Pages as CloudCannon supports custom plugins. CloudCannon can build the Jekyll site and output the static site to the `gh-pages` branch.

## Setting it up

Here's a basic setup for using *Outputs* with GitHub Pages:

1. Move your Jekyll source code to the `master` branch in your GitHub repository.
2. Create a site in CloudCannon and connect it to the `master` branch.
3. Add an [Output](https://docs.cloudcannon.com/syncing/output/)  to the `gh-pages` branch.

## Other uses

This setup is useful for other situations as well. You might have a CI script that performs static checks on a site and then deploys it to your hosting environment. If the CI uses the static output for performing these tasks it will run faster as it doesn't have to build the site.

Hope these tips are useful\! Let us know how you're using *Outputs*.
