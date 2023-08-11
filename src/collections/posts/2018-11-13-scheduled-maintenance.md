---
draft: false
title: Scheduled Maintenance
date: 2018-11-13T14:00:00+1300
tags:
  - Company
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
image: https://cc-dam.imgix.net/blog/uploads/blog-alarm-clock.jpg
ssg_frameworks:
categories:
  - company
---
Today at [5:00pm NZDT](https://everytimezone.com/#2018-11-13,-480,b8jj) CloudCannon will be set to a read-only state for 2 hours. This will mean the following:


* **Editing access will be disabled**
* Sites will be served as normal
* Builds and syncs will occur as normal

This is due to an urgent database update. Our aim is to ensure sites are operational and repository updates are still viable. We have chosen [5:00pm NZDT](https://everytimezone.com/#2018-11-13,-480,b8jj) as it is our lowest usage time. The rest of this article will be a detailed description of our plan for visibility. We apologise for inconvenience this will cause. For future updates we have put in place procedures to more effectively communicate these changes.


## Our Plan

As we need to update our database we are going to take the following steps:


1. Disable sign ups and logins to the app
2. Continue using old database for other applications (Syncing, Builds and File Servers)
3. Create a new Database from a snapshot at the start of the migration time
4. Update references to the new Database and redeploy applications
5. Enable sign ups and logins to the app

Based on trial runs of this earlier today this took approximately 2 hours.


## Implications

The following supporting data will not be recorded on updates made during this migration:


* Site activity
* References to commit hashes
* Build logs

These items are intended for logging purposes and will not affect the live site or editing process after the migration.


 

