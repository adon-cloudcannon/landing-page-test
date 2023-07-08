---
draft: false
title: Dropping support for Dropbox
description: >-
  We're removing support for syncing your site files with Dropbox. Our article
  explains why we chose to do this and what it means for you.
date: 2021-03-10T08:00:00+1300
tags:
  - Features
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
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
image: https://cc-dam.imgix.net/blog/uploads/dropbox-light.png
ssg_frameworks:
categories:
  - features
---
In 2015, CloudCannon started as a humble static site platform, bringing all the aspects of site management into one place. We knew that syncing files was a key part of the puzzle. At the time, FTP was in high demand, Dropbox was peaking, and repositories were growing in popularity. We supported them all. What we didn’t know was how quickly repositories would become the core of the modern development workflow. 

Today, the team at CloudCannon continues to push our platform forward. On our journey to an all-in-one Jamstack platform, we’ve [added support for Hugo](https://cloudcannon.com/blog/hugo-support-in-cloudcannon/). And we’re only just getting started. To keep growing, we’re focused on using our time to build the features you need most. 

### **Why we’re removing Dropbox support**

Later this year, the folks over at Dropbox are implementing upgrades to their authorization model. This is a good thing and we fully support their development. However, our user research revealed two important insights about our Dropbox connection. 

Firstly, our platform functions best with a repository. FTP and Dropbox feel best suited to large file requirements, not the slick, high-performance static sites we’re all familiar with today. 

Secondly, as a reflection of usage, only a tiny group of people still actively use Dropbox on CloudCannon (we can count them on one hand). It really feels like Dropbox isn’t the right tool for building static sites in 2021.

In light of the low use of Dropbox on our platform, we’ve made the decision **to remove our Dropbox support, which will be complete as of 30 June 2021. **

While it’s never easy to remove anything from our platform, this decision is relatively straightforward. Dropbox doesn’t provide the same great experience as a repository and only a tiny amount of customers currently use it. 

### **What does that mean for CloudCannon users? **

Effective immediately, no new user will be able to use Dropbox for authorization or as a source for syncing. For those users currently using Dropbox we have added a deprecation flag to your settings and build options. We recommend using [one of our repository options](https://cloudcannon.com/documentation/sync/#introduction). 

### **What will happen if I do nothing?**

Your hosted sites will remain live, functional and available. If you don’t change your source, your CloudCannon builds and related files will still be available in CloudCannon. These files will also remain separately in Dropbox. Importantly, changes to those files in either CloudCannon or Dropbox will not sync between the two sources. We do recommend that you keep your files synced and suggest connecting your files with one of our repository options: [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) or [Bitbucket](https://bitbucket.org/).

If you have any questions or need a hand with your Dropbox settings don’t hesitate to get in touch with our friendly support team. Keep an eye on our blog for more articles on product features and updates. If you’re looking for the details on our regular product development, check out our [changelog](https://cloudcannon.com/changelog/). 
