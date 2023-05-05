---
_schema: default
title: How to customize CloudCannon’s Client Sharing interface
description: >-
  Developers on CloudCannon can set up external collaborators and other static
  site users for success, simply by customizing several fields in CloudCannon's
  Client Sharing feature. 
draft: true
series: Client Sharing
image: https://cc-dam.imgix.net/blog-client-sharing-2 (1).png
date: 2023-05-06T03:00:00+12:00
hide_publish_date: false
tags:
  - Agencies
  - Features
author: 466580e8-b101-4837-a0c2-a90a8aebb5db
permalink: /blog/how-to-customize-cloudcannons-client-sharing-interface/
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
  featured_image: https://cc-dam.imgix.net/blog-client-sharing-2.png
  featured_image_alt:
---
In my last post on [sharing your CloudCannon sites with anyone](https://cloudcannon.com/blog/let-anyone-anywhere-edit-your-cloudcannon-sites/) — and letting them edit content without having a CloudCannon account — I briefly mentioned the options available to customize the Client Sharing interface. I wanted to go a little further in this post, and explain why it can be helpful to customize your support and documentation links.

A little background, first — in my spare time I’m helping build out the website for this year’s [HugoConf](https://hugoconf.io)\*, and given that this is a group effort involving a pool of volunteers, I want to prepare the site so I’m ready to work with external collaborators on the content.

Once the conference speakers are all lined up, and have supplied their headshots, bios, talk titles and summaries, I’d like to be able to hand over all of that content to another conference organizer, and let them add the content to the site.

Further, I’d like to be the main point of contact for these organizers if they have any questions about how to add content to the site, and how it should look. And to help that process along, I’ll also create a public Notion page with easy content-loading instructions — this can serve as my specific documentation for the HugoConf site. (Because I know the site is already set up and working, my external collaborators likely won’t need CloudCannon’s otherwise excellent documentation.)

What I *don’t want* is for these external collaborators to be able to break my site by altering any source code, or to change my billing details. This — together with the time-boxed nature of the conference preparation — is a great reason to use CloudCannon’s Client Sharing feature.

So let’s get stuck in!

{% bookshop 'markdown/youtube' title: "" id: "" extend: false border: false %}

\[VIDEO, talking through the below steps\]

## Customizing what your External Collaborators see

We’ll start by turning Client Sharing on, adding a strong password that CloudCannon encrypts on submission.

1. Because I may want to create a page at `/update` at some point in the future, I’m going to first change the URL subpath to `/login`.
2. My collaborators might need a link to my instructions while they’re adding content, so I’ll add the URL of my public Notion page in the 'Documentation URL' field.
3. In the 'Support URL' field, I’ll add a `mailto:` link with my email address. And because I like a tidy inbox, I’ll customize this further with a pre-filled subject line. (Of course, I could get as prescriptive as I like with this `mailto:` link, including the body text.)
4. In this case, I don’t need to update the preview URL field. (If my site was hosted externally, or had a lot of redirects, this would be a handy field to use.)

Once that’s all done, I’ll click Update Settings, and we’re all set!

Now let’s jump over to the user’s view, and see where those links come in.

{% bookshop 'markdown/youtube' title: "" id: "" extend: false border: false %}

\[VIDEO 2 — client view, showing the interface and clicking on the Support and Documentation links.\]

And that’s it! With Client Sharing turned on, I’ve set up an easy content-adding flow for our site collaborators, without having to set up a CloudCannon account for them. I’ve also made sure that I’ve supplied the content loading instructions they’ll need, as well as setting myself up as the contact person for any support questions.

## When to set up and customize Client Sharing

Of course, this is just one example of a use case for Client Sharing. If you’re a CloudCannon user on any paid plan, you can easily turn Client Sharing on and customize it for your own use case.

If I worked as a freelance web dev, or with a web agency, this would be a super handy feature to set up my more non-technical clients with an easy interface for minor content changes — all without these users needing a full CloudCannon account.

That way I’d be available to help these clients when necessary, while still empowering them to edit and publish simple changes to their own site.

### Happy editors. Happy developers.

Like all of CloudCannon’s features, Client Sharing is aimed at smoothing the path for both editors and developers, letting everyone work more efficiently. Our engineering team designs these CMS features to be as flexible as possible, letting you set up your sites, your editing workflows, and your users’ experience just the way you want.

And, naturally, our features work just the same no matter which static site generator you choose.

---

\*\* CloudCannon sponsors <a target="_blank" rel="noopener" href="https://hugoconf.io">HugoConf</a>, which keeps the conference free for all. \*

*Several CloudCannon staff members, including myself, are also part of the volunteer committee that helps run the conference. (We’re fans of OSS, and this is a great way to help celebrate the tools we use every day.)*