---
_schema: default
title: Digital Asset Management integration with CloudCannon
breadcrumb_title:
description: >-
  Digital Asset Management (DAM) systems are the right tool to manage all the
  images, videos, and documents needed for your sites. Read how to integrate a
  DAM solution with CloudCannon's Git-powered CMS.
draft: false
series:
image: https://cc-dam.imgix.net/dam-hero-c.jpg
date: 2022-04-02T05:00:00+13:00
hide_publish_date: false
tags:
  - Features
author: 94d9454d-d560-4dc5-8acd-1bd804305709
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
  - features
---
We are absolutely in love with the Git-powered nature of CloudCannon. The simplicity, security, and control over your code and text-based content is vital to an ideal workflow. We wouldn’t have it any other way for our static site platform, and we know you love it too. Unfortunately, Git isn’t the solution to all of your website needs. Repositories with a maximum size of 2GB just aren’t well poised to manage beautiful modern sites with rich digital assets.

Arguably the hardest part is dealing with multiple files with unclear names, and unknown authors or owners. Who knows who put them there, or how long ago! You might have to launch a full investigation just to find the right image for your new landing page. Even after all that, you will still need to submit the image for client or team review and approval. The process can feel like a nightmare.

## Sorting out the chaos

Digital Asset Management (DAM) systems are the right tool to manage all the images, videos, and documents needed for your sites. They give any sized team a single place to easily store, share, access, and edit assets. If you’re a small business with plans to grow, or an agency producing sites for multiple clients, controlling assets and campaigns will be vital to your success. For large businesses with complex and specific needs, tight control over assets will often be essential for consistent branding and adherence to internal data control policies. For more on why a DAM solution can work for you, read our article on how [DAM can help overcome content chaos.](https://cloudcannon.com/blog/overcoming-content-chaos-with-digital-asset-management/)

To help you make the most of your assets we’ve added support for <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/creating-an-s3-dam/">Amazon S3</a> and <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/creating-a-cloudinary-dam/">Cloudinary</a> for all users, and <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/creating-a-tenovos-dam/">Tenovos</a> for Enterprise users — with plans to add more.

---

*Update (June 2023): We've also added support for <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/creating-a-google-cloud-storage-dam/">Google Cloud Storage buckets</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/creating-an-azure-dam/">Azure Blog Storage</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/creating-a-digitalocean-spaces-dam/">DigitalOcean Spaces</a>, and <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/creating-a-cloudflare-r2-dam/">Cloudflare R2</a>.*

---

{% bookshop "markdown/image" src: "https://cc-dam.imgix.net/dam-diagram-c.png" alt: "" extend: false border: false %}

## How to integrate your DAM solution

CloudCannon integration connects your DAM folder right into our editor so that your team can add assets to any page, collection or blog, anywhere you’ve set an asset input.

Let’s look at an overview of how to connect your preferred DAM provider to one of your sites.

### 1\. Authenticate your provider

The first step is to link your DAM provider to your Organization in CloudCannon. Head over to *Settings / Files / Assets*, select your provider, fill out a few relevant fields, and click **Authenticate**.

*See our guides on each of our providers for help with your fields:*[*Amazon S3*](https://cloudcannon.com/documentation/articles/creating-an-s3-dam/?ssg=Other)*,*[*Cloudinary*](https://cloudcannon.com/documentation/articles/creating-a-cloudinary-dam/?ssg=Other)*, or*[*Tenovos*](https://cloudcannon.com/documentation/articles/creating-a-tenovos-dam/?ssg=Other)*.*

You’ll see a popup notification confirming your setup, and you can find the Previewbutton in your settings, where you can check on your connection. Click on **Preview DAM assets** and a modal will open that will let you browse the files in your DAM folder.

{% bookshop "markdown/image" src: "https://cc-dam.imgix.net/DAM-files-preview-c.jpg" alt: "" extend: false border: false %}

### 2\. Link your DAM service to a site

The next (and final) step is to point your site towards your connected DAM folder. Head to your site and go to Settings / Files / Assets. Choose your authenticated DAM folder from the dropdown and click **Link DAM.**

Success! Your DAM solution is now connected to your site and ready to be used.

This two-step process allows you to define which sites and branches you want to use DAM features on. Depending on your design workflow, asset types such as SVGs may be more useful if you use Git’s version control features.

## Edit your content in CloudCannon; control your assets with DAM

With a DAM provider connected your editing team can take their workflow to the next level. Not only will it make building and editing your site easier, but it will also speed up your build times, and help you meet any asset security compliance requirements you may have.

For more information and detailed advice on how to connect, authenticate, and manage your DAM provider, [see our documentation](https://cloudcannon.com/documentation/articles/managing-your-connected-dams/). If you don’t see your preferred DAM provider, or would like some more assistance, please reach out to our support team and let us know. We’re working on adding more services and are keen to hear from you.