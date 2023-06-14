---
_schema: default
title: DAM Support for Cloudflare R2 and DigitalOcean Spaces
breadcrumb_title:
description: >-
  CloudCannon now supports both DigitalOcean Spaces and Cloudflare R2 digital
  asset management (DAM) solutions, for users on all plans.
draft: true
series:
image: https://cc-dam.imgix.net/blog-dam-hero-r2.jpg
date: 2023-06-16T05:00:00+12:00
hide_publish_date: false
tags:
  - Features
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
---
We’ve just released support for two new digital asset management (DAM) providers — DigitalOcean Spaces and Cloudflare R2 — which are available now for all CloudCannon users.

Both DigitalOcean Spaces and Cloudflare R2 are scalable, performant data storage services, compatible with Amazon's S3 service and APIs. With both providers you can use the large existing ecosystem of S3 tools, utilities, plugins, extensions, and libraries to manage your assets.

## About DigitalOcean Spaces

DigitalOcean Spaces Object Storage complements local storage to help businesses scale.

* High performance for read and write operations, up to 1500 RPS per IP address.
* Built-in content delivery network (CDN) to reduce load times, improve performance, and reduce bandwidth and infrastructure costs
* Data transfer is automatically encrypted with HTTPS

## About Cloudflare R2

Cloudflare R2 gives users the freedom to create multi-cloud architectures with an S3-compatible object storage.

* Global object storage
* Dynamic functionality via integration with Cloudflare Workers
* Easy migration from existing cloud storage providers

These new providers join our currently supported DAM systems: Cloudinary, Google Cloud Storage, Azure Blob Storage, and S3, which are available for all users; and Tenovos for Enterprise users.

## Adding a new DAM provider on CloudCannon

You can add a new DAM provider on CloudCannon by navigating to**&nbsp;Settings** / **Assets**.&nbsp;&nbsp;

{% bookshop 'markdown/image' src: "https://cc-dam.imgix.net/blog-dam-link1.png" alt: "" extend: false border: false %}

After clicking on **Link DAM**&nbsp;and selecting **New DAM**, you'll see a list of available options:

{% bookshop 'markdown/image' src: "https://cc-dam.imgix.net/blog-dam-link2.png" alt: "" extend: false border: false %}

For specific instructions on creating and connecting your&nbsp; DAM provider to CloudCannon, see our in-depth documentation on [integrating and authenticating your DAM](https://cloudcannon.com/documentation/articles/integrating-your-dam-with-cloudcannon/).

---

## Why use a DAM provider?

Digital asset management helps companies centralize their assets in a single, searchable cloud library, with clearly defined access levels for different tiers of users. This ensures that assets are organized and easily accessible, preventing loss or duplication. It also allows for efficient adjustments to assets, such as images, to suit different devices or screen sizes.

Both internal and external users benefit from DAM solutions. Internally, DAM enables creative teams to upload content and brand assets for sales and marketing teams to access. Developers can integrate assets and asset data, while legal and finance teams often appreciate the compliance features and expiration date tagging offered by most DAM solutions.

Externally, DAM systems allow external partners, including contractors, agencies, and clients, to access assets while ensuring brand consistency, compliance, and security. This is particularly valuable for maintaining collaboration and a cohesive brand image with external stakeholders.

Finally, in the context of remote or hybrid work practices, DAM enables all team members, agencies, and partners to access the most up-to-date approved assets from anywhere in the world. This accessibility supports effective collaboration and streamlined workflows in distributed work environments.

If you’re not already using DAM to avoid content chaos, check out our [introduction to DAM systems](https://cloudcannon.com/blog/overcoming-content-chaos-with-digital-asset-management/) for a rundown of the major benefits and use cases.