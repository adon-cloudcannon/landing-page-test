---
title: Jekyll for Freelancers
date: 2018-02-07T14:15:00.000Z
tags:
  - Resources
  - Jekyll
author: a5f00346-90df-4d69-9ce1-d9e4c8e51b10
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/uploads/blog-laptop-stack-of-books.jpg
---
Jekyll is a fantastic freelancer tool for building client websites. Compared to a traditional CMS like WordPress, there are a number of advantages:

* **Simplicity**\: There's no complex templating or plugins to understand. Building a Jekyll site is similar to building a purely static website.

* **Maintenance**\: You don't need to worry about updating CMS software or plugins. Jekyll outputs a static website which serves faster with less security and stability concerns compared to a typical WordPress setup.

* **Backups**\: Jekyll sites are typically connected to a Git repository which is used to undo unwanted changes by a client and as a full backup of all the files on the site. With a Jekyll CMS like [CloudCannon](https://cloudcannon.com), you have all these advantages and an easy-to-use interface for clients to update content. In this post, we're going over tips for freelancers to get the most out of CloudCannon.

## Client Sharing

[Client Sharing](https://docs.cloudcannon.com/sharing/client-sharing/) is a CloudCannon feature specifically for freelancers and agencies. Instead of each client creating their own CloudCannon account, you set up a *Client Sharing* password in *Site Settings / Client Sharing.* Clients then go to https://theirwebsite.com/update/ and enter the password to update content on their site. *Client Sharing* is available on paid plans at no extra charge.

![](https://cc-dam.imgix.net/blog/assets/blog/jekyll-for-freelancers/client-login.png)

## Start with a template

CloudCannon has [templates available](https://learn.cloudcannon.com/jekyll-templates/) to help kickstart your next project. These templates are designed to get the most out of CloudCannon so they're a great starting point or reference for what's possible on CloudCannon.

![](https://cc-dam.imgix.net/blog/assets/blog/jekyll-for-freelancers/template.png)

## Staging site

Clients updating production sites directly can be a dangerous game. Setting up a staging site which the client can publish to production gives them a chance to fix mistakes before the website is pushed live. To set up a staging site:

1. Create another branch in your repository

2. Create a new site in CloudCannon and sync it with your new branch

3. Add a [publishing branch](https://docs.cloudcannon.com/syncing/publishing/) to your production branch

## Form submissions

Client sites often have a contact form. CloudCannon has a [Contact Forms](https://docs.cloudcannon.com/hosting/contact-forms/) feature for setting up HTML forms. When a form is submitted, the content is emailed to the client.

![](https://cc-dam.imgix.net/blog/assets/blog/jekyll-for-freelancers/contact.png)

## Documentation site

CloudCannon is streamlined and easy to use. However, it's often valuable to give the client instructions for common tasks to help them in a pinch. This is a great use case for the CloudCannon *Edition* template. Simply add instructions and screenshots and your client has their own documentation website.

![](https://cc-dam.imgix.net/blog/assets/blog/jekyll-for-freelancers/edition.png)

## Customise the Client interface

Add links to your support email and documentation (like the one mentioned above) to the client interface so your client can get help when they need it. These options are found in *Site Settings / Client Interface*.

![](https://cc-dam.imgix.net/blog/assets/blog/jekyll-for-freelancers/client-interface.png)

## White Labelling

The CloudCannon Pro plan allows you to custom brand the application. In *Organisation Settings / Details* you can set a colour and logos for the sidebar, client editor and sites list.

![](https://cc-dam.imgix.net/blog/assets/blog/jekyll-for-freelancers/branding.png)

## Summary

That's all the tips we have for today. Let us know if you have any other tricks when working with clients on CloudCannon.