---
title: Git-based CMS or API-first CMS - main differences and benefits
description: >-
  Git-based and API-first CMSs solve many content management problems, but what
  are the main differences and benefits of these two types of systems? 
date: 2021-02-17T15:36:00+1300
tags:
  - Resources
author: 93e88eb0-4e70-4537-bbbc-c2ada0537da5
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
image: https://cc-dam.imgix.net/blog/uploads/git-branches.jpg
---
## Introduction

Many older content management systems (CMSs) suffer from tightly coupled architecture and poor separation of front and backend, which can cause difficulties for developers and content contributors. **Git-based** and **API-first** (commonly known as “headless”) CMSs solve this problem by better separation of concerns, allowing you to scale and manage your content more easily. But what are the main differences and benefits of these two types of systems, and what benefits does a Git-based CMS offer?

## Git-based vs. API-first - what’s the difference?

Modern development demands, including for a CMS, mean moving fast, scaling easily for traffic, and worrying less about security and infrastructure. Both a Git-based CMS and an API-first CMS help with these demands by improving developer workflows and making content more portable, while still giving you a visual interface for management. But how each of these solutions solves these problems is quite different: 

A **Git-based CMS** is a system that synchronizes with your Git repository and pulls its contents into the system for processing, such as editing and viewing. Any changes made are pushed back to the repository to keep the system and code in sync. ![](https://cc-dam.imgix.net/blog/uploads/diagram-git-1.svg)

An **API-first CMS** lets you create structured content, such as tables representing products, in raw form. This content can then be requested via an API, typically as JSON data, and then built into applications of varying types. ![](https://cc-dam.imgix.net/blog/uploads/diagram-api.svg)

In the end, when you’re deciding which option is the best, it comes down to where you want to store your content, and what you want to do with it.

## Main advantages of Git-based CMS

With a purely Git-based system, you are using your Git repository - such as GitHub, GitLab, or Bitbucket - to store your content. This comes with a number of benefits, especially for developers:

* **Familiarity.** Content is stored in Git, which is an industry standard that most developers will be familiar with in some form. Relying on a Git repository for collaboration and version control means less pressure for developers to learn new tools and platforms to do their job.
* **Ownership.** Git repositories make you the ultimate owner of your creations, meaning no vendor lock-in. If there is ever a need to transfer content to another platform, everything is immediately available in the repository.
* **Distributed access**. If the CMS service goes offline, you still have access to your full code base in the remote repository/repositories. Any changes made can be pulled and merged as usual, giving you greater autonomy to work outside of the CMS. 

## Main advantages of an API-first CMS

With an API-first CMS, your main content is stored as raw data, completely independent of any display layer(s), such as HTML pages. How you use this content is up to you. This is often flexibly managed through the CMS interface or HTTP requests. 

* **Omnichannel presence**. Raw data from an API offers ultimate portability and flexibility, as it can be built into any application or device, whether that’s a website, a phone app, or an IoT device. 
* **Centralized data management.** With multiple sources using the same data, adjustments made to API data will easily cascade down to data consumers, removing the need for individual updates.
* **Quicker design iterations.** With the data living separate from its consumers, large changes can be made to design without worrying about changing the content being brought in.

## Summary

Git-based and API-first CMSs are both great options, offering greater flexibility and better development workflows than legacy CMSs. Naturally, each solution comes with distinct advantages and disadvantages. If ownership of data and familiar Git workflows are of high importance, a Git-based CMS is a logical choice. Alternatively, if raw, centralized data access for multiple platforms is needed, an API-first approach may provide the most benefit.

## Why Git-based? Where CloudCannon fits in

CloudCannon is a Git-based CMS with a focus on ensuring developers and editors are always in sync, by using a repository as the single source of truth. This gives users full ownership of their data, preventing vendor lock-in, and creates a history of all changes made. 

However, Git workflows and APIs often aren’t approachable for many non-developers. Because simple, effective sharing and editing is one of our fundamental philosophies, CloudCannon works hard to create a solution that works for everyone in the team, without the complicated interface. Developers can use the [platform](https://docs.cloudcannon.com/) to maintain their normal workflow, easily configure build and hosting options, and quickly provide content contributors with an intuitive way to edit content. CloudCannon also offers tutorials for [learning the basics](https://learn.cloudcannon.com/) of static site generator frameworks such as Jekyll.
