---
draft: false
title: Output Drafts and Collection Defaults
date: 2015-12-18T10:02:00.000Z
tags:
  - Features
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
image: https://cc-dam.imgix.net/blog/uploads/collection-of-postcards.jpg
---
This week we have a smaller release for some highly requested configuration. We added draft post compiling and defaults for creating collection items.

## Output Draft Posts

CloudCannon users can now preview draft posts in staging environments before publishing to the live site. Configure this in the *Site Settings* to add the `--drafts` flag to any Jekyll build on that site. Enabling **Output draft posts** will trigger a build and include drafts with posts.

![Output draft posts option in Site Settings](https://cc-dam.imgix.net/blog/assets/blog/drafts-and-defaults/output-drafts-in-settings.png)

In addition to the live site, you can preview drafts within the app. Just like posts, drafts now have the visual and markdown editor options. This will help keep you focused when writing blog posts.

## Collection Defaults

Before this release, new collection items were pre-populated with cleared data from another item. Developers can now create a file within the collection folder to control default values. This file is used to define new items by cloning both the contents and filetype into the new file. Since this file begins with an underscore Jekyll will not output the file to the live site. As an exception, draft posts will always read from `/_posts/` rather than `/_drafts/`. More details are available in [our documentation](/documentation/edit/editing/collections/).

![Defaults in the File Browser](https://cc-dam.imgix.net/blog/assets/blog/drafts-and-defaults/defaults-in-browser.png)

---

These changes were inspired by your feedback. Syncing performance and reliability is the focus of our next release. If you need anything get in touch at [support@cloudcannon.com](mailto:support@cloudcannon.com) or send us a message in the app.