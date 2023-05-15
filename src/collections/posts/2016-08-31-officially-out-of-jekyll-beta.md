---
draft: false
title: Officially Out of Jekyll Beta
date: 2016-08-31T14:02:00+1200
tags:
  - Features
author: 68fdf39d-de6e-4729-8747-1bf901498c5c
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
image: https://cc-dam.imgix.net/blog/uploads/blog-colourful-fireworks.jpg
---
Today marks a huge milestone for CloudCannon. We've finished the Jekyll beta, making Jekyll and plugins available to all users on every plan. The latest release also includes some requested features and more Jekyll configuration.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/assets/blog/officially-out-of-jekyll-beta/logos.png" alt:"CloudCannon and Jekyll logos" extend:false border:false %}

---

### Plugins

Every new site created on CloudCannon from today is automatically built with Jekyll and supports custom plugins. To prevent breaking changes, existing sites need to create a `_config.yml` for CloudCannon to build with Jekyll. New and existing static sites that do not use Jekyll are still supported in full.

*extension* [Full documentation for Jekyll plugins](https://docs.cloudcannon.com/building/plugins/)


---

### Versions

We've added support for all the latest versions of Jekyll, and have consolidated the way versions are set. The version is now set through a `Gemfile`. The default version for new Jekyll sites is **3\.2.1**. You can always check what version of Jekyll is active on the *Status* section.

*history* [Full documentation for Jekyll versions](https://docs.cloudcannon.com/building/versions/)


---

### Configuration

Jekyll has a number of command line options for builds. Setting these in the new *Site Settings* / *Build* section gives you more control and helps reproduce your local environment. The existing CloudCannon Optimisations and Jekyll Environment options have been moved to this section.

The most notable options are `baseurl`, `source`, and Jekyll's other custom directory options. These options are now supported in full as command line options and specified in `_config.yml`. The CloudCannon editing interface reads the `baseurl` and custom directories and reacts seamlessly.

*settings* [Full documentation for build configuration](/documentation/build/setup/configuration/)


{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/assets/blog/officially-out-of-jekyll-beta/configuration.png" alt:"Site Settings Build Interface" extend:false border:false %}

---

### Additional Features

To complement Jekyll's custom directories, we've created `uploads_dir` to change the location that images uploaded in the editor are stored. By default it's set to **uploads**. For consistency with Jekyll, the path is relative to the Jekyll `source` if set.

*photo* [Full documentation for image editable regions](https://docs.cloudcannon.com/editing/editable-regions/#image-elements)


For those of you battling targeted spam email, we've added Google reCAPTCHA support in addition to our honeypot prevention.

*email* [Full documentation for contact forms](https://docs.cloudcannon.com/hosting/contact-forms/)


{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/assets/blog/officially-out-of-jekyll-beta/captcha.gif" alt:"reCAPTCHA Example" extend:false border:false %}

---

Thank you to everyone who provided feedback over the beta, you've shaped many of the features in our Jekyll support. We have plenty of new features and improvements planned and look forward to your continued feedback.
