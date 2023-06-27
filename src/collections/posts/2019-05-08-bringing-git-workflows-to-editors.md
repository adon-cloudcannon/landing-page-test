---
draft: false
title: Bringing Git Workflows to Editors
date: 2019-05-08T12:00:00+1200
tags:
  - Features
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
image: https://cc-dam.imgix.net/blog/uploads/git-workflow.jpg
ssg_frameworks:
categories:
  - features
---
In the past we've talked about our mission of bringing [publishing workflows to non-technical editors](/blog/publishing-workflows-for-jekyll-editors/). This post is an update on some interesting new CloudCannon features bringing us closer to fully realising our vision.

## Projects

A typical workflow on CloudCannon is to have editors work on a staging site, with a separate production site serving a live copy to the public. This is a great workflow because it allows editors to preview changes and iterate on content before publishing to production. One issue of this approach is having multiple sites in CloudCannon for each repository soon gets overwhelming.

[Projects](https://docs.cloudcannon.com/projects/introduction/) address this issue, providing a logical grouping to the sites in your CloudCannon account. Each project is centered around a single Git repository.

Selecting a project lists the sites connected to that repository. You can also add a description, and links to resources outside of CloudCannon.

In most cases you'll want an editing lock for production sites to force content changes to go through the staging branch; these production branches will have a lock icon.

## Branching

A staging/production workflow is fine for simple content changes but falls down when you have multiple editors trying to time their content. For example, you might spend a week overhauling a landing page, meanwhile your colleague needs to release a blog post. You can't release a half finished landing page so your changes are now blocking the blog post from releasing. These situations only get more complicated and harder to resolve as you add more editors.

With Projects this workflow is improved, as editors can now harness the power of branching. Editors click the + button and set a name. This creates a branch on GitHub and a completely isolated site with its own URL on CloudCannon.

The editor is now free to update this site without blocking the main staging branch.

When the content is ready for primetime, editors can publish the content. Behind the scenes we perform a Git merge into the staging branch.

## What's next?

We're excited at how these workflows are progressing for editors, enabling them to work with Git and collaborate more effectively. The next step is to provide more confidence and context to editors merging to another branch. Stayed tuned to find out more\!
