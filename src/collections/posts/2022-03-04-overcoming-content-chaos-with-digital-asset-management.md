---
title: Overcoming content chaos with Digital Asset Management
description: >-
  Digital Asset Management (DAM) solutions help companies organize, store, and
  retrieve their digital assets, manage rights and permissions, and establish
  meaningful connections between disparate files.
series:
image: https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/content-chaos_xyexmt.jpg
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
date: 2022-03-04T05:00:00+1300
tags:
  - Features
author: david-large
---
We're happy to announce Digital Asset Management (DAM) support for [Amazon S3](https://aws.amazon.com/s3/), [Google Cloud Storage buckets](https://cloud.google.com/storage/docs/buckets), and [Cloudinary](https://cloudinary.com/) within CloudCannon for all users, and [Tenovos](https://tenovos.com/) support for users on our Enterprise plans. CloudCannon is proudly Git-powered (with Git LFS support), which is ideal for almost all the files that comprise a static site, but Git repositories aren't always the best place for large volumes of media assets. Git repository sizes are commonly limited to around 2GB, which can pretty quickly be filled with high-resolution images, video, and large documents.

Many agency clients with in-house marketing teams will require centralized and easily accessible asset storage. Digital agencies themselves are likely beneficiaries of a well-planned DAM setup, as brand-approved assets will be more readily available for web development projects.

If you're wondering what the big deal is, and why brands are turning to DAM systems like S3, Google Cloud Storage, Cloudinary, and Tenovos, read on.

## What's the DAM problem?

Digital Asset Management solutions help companies organize, store, and retrieve their digital assets, manage rights and permissions, and establish meaningful connections between disparate files.

If you’re thinking this sounds like a glorified metadata and storage system … you wouldn’t be wrong. But the advantages of DAM don’t end there. For static sites in particular, DAM systems help keep large volumes of media out of Git repositories, where they can increase build and deployment times, as well as degrading performance during development. 

If your latest web development project is mired in content chaos — the semantic equivalent of spaghetti source code — you’re not alone. Many content editors struggle with a single `uploads` folder full to bursting of image revisions, different edits of product videos, dated documents that are held just because they *might not* be backed up elsewhere. And while it’s *extremely* unlikely that your site won’t load if [coconut.vtf](https://www.verifythis.com/article/news/verify/pop-culture/no-coconut-picture-tf2-not-keeping-computer-game-running/536-6b1f2929-803d-4e96-8347-231cf0273420) is missing from a given directory, it’s never a bad time to consider how to really connect digital assets with their users.

According to [some industry studies](https://www.mediavalet.com/blog/dam-every-marketers-forecast-infographic/), up to 65% of sales representatives say they have trouble finding content to send to prospective clients. (And that's assuming the content is already at the correct aspect ratio and file format\!) Let’s help solve this problem.

## Value your assets

Let’s back up a little. What is a digital asset? For marketing teams, or content editors, it’s a little more involved than a simple image or video file. It’s worth addressing the **value** of an asset: after all, time (and money) has gone into the creation of every asset on a site. If that asset isn’t discoverable — and discoverable *with the correct context* — every time it’s needed, the time needed to either find or recreate the asset is lost.

Digital asset management helps companies centralize their assets in a single, searchable cloud library, with clearly defined access levels for different tiers of users. With a streamlined process, assets are no longer lost or duplicated, and images, for example, can be adjusted on the fly by DAM systems, for delivery to different devices or screen sizes.

For example, Cloudinary users can easily request a URL for a PNG of a specific person, sized at 600x600px, centered on that person's face, with a vignette applied. Repeat the process for any different image size, file format, or a different asset altogether — all without a designer having to edit an existing image — and it's easy to see the workflow advantages for busy teams.

Finally, and importantly for the thousands of companies increasingly shifting to remote or hybrid work practices, all team members, agencies, and partners can access the most recent version of approved assets from anywhere in the world.

## Who’s going to use DAM?

Both internal and external users will see benefits from a DAM solution.

Internally, DAM allows internal **creative teams** to upload content and brand assets for **sales and marketing** teams to access. Through DAM providers like Cloudinary, **developers** will have access to APIs and SDKs in order to integrate assets and asset data, while **legal teams** will appreciate the compliance features and expiration date tagging offered by most DAM solutions.

DAM systems also allow external partners, including **contractors**, **agencies**, and **clients**, to access assets, while also ensuring brand consistency, compliance, and security.

## What are the main benefits of DAM?

### Efficiency

Collaboration between teams becomes faster, as less time is spent locating, recreating, or adjusting digital assets for use. Avoiding duplicate files means much more efficient use of company resources, including storage and bandwidth, as well as development and build time. For asset-heavy static sites, DAM can greatly reduce build time and virtually eliminate Git repository bloat.

### Organization

Tagging digital assets with rich metadata allows for hierarchical storage and easy retrieval. (It's important to note here that the GIGO truism still applies when it comes to metadata, so it will help to have some clearly defined organizing principles from the get-go.)

### Brand consistency

Having a centralized source of truth for your content means that you can maintain a consistent brand message, preventing the use of out-of-date or incorrect assets. Even if a brand works with different agency partners or a wide range of contractors and clients, brand assets remain in a single, accessible location.

### Security

Most DAM systems allow for a range of user roles and permissions to be created, adjusted (and revoked if necessary), meaning asset control is easier than ever — without the security issues and file size restrictions of email transfer.

### Scalability

DAM systems have, by and large, a remarkably reliable uptime. Further, because they're cloud-based with data centers distributed internationally, they're able to scale to handle large volumes of assets and data requests, as well as high user numbers.

### Analytics

Not just more numbers — better numbers\! Track where assets are used; track which assets are performing best. Many DAM tools allow marketers and developers to aggregate and compare usage data across a range of assets and campaigns.

## Getting set up

Find out more about Assets in CloudCannon, and how to configure your chosen DAM system over on our [Documentation](https://cloudcannon.com/documentation/articles/introduction-to-assets-and-dams/) pages. And remember, you can always reach out to our support team in-app if you have any questions along the way.