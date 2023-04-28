---
_schema: default
title: Let anyone, anywhere, edit your CloudCannon sites
description: >-
  CloudCannon's Client Sharing feature lets developers set a password to grant
  editing access to any user. No matter which static site generator you’re using
  on CloudCannon, Client Sharing lets everyone collaborate while maintaining a
  high level of security.
draft: true
series:
image: https://cc-dam.imgix.net/blog-client-sharing.png
date: 2023-04-29T05:00:00+12:00
hide_publish_date: false
tags:
  - Agencies
  - Features
author: 466580e8-b101-4837-a0c2-a90a8aebb5db
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
It’s easy to share your static site with anyone, *and allow anyone to edit it*, without new users having to create a CloudCannon account. Allow me to (re)introduce a feature we call **[Client Sharing](https://cloudcannon.com/documentation/articles/giving-clients-access-to-update-a-site/)**, available for users on any&nbsp;[paid plan](https://cloudcannon.com/pricing/#all-plan-features).

Client Sharing lets Organization Owners and Developers set a password to grant access to any user, allowing them to edit any site’s content. (Without access to complicated developer features.)

Even better, it works exactly the same no matter which static site generator you’re using on CloudCannon —&nbsp; meaning that sites built with <a target="_blank" rel="noopener" href="https://cloudcannon.com/astro-cms/">Astro</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/eleventy-cms/">Eleventy</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/hugo-cms/">Hugo</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/jekyll-cms/">Jekyll</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/sveltekit-cms/">SvelteKit</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/nextjs-cms/">Next.js</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/mkdocs-cms/">MkDocs</a>, <a target="_blank" rel="noopener" href="https://cloudcannon.com/gatsby-cms/">Gatsby</a>, or <a target="_blank" rel="noopener" href="https://cloudcannon.com/nuxtjs-cms/">Nuxt.js</a> can all be edited by *anyone*\: clients, external collaborators, content reviewers, subject-matter experts, legal teams, or anybody else involved.

Your site security is important, so the Client Sharing password you set will be automatically encrypted upon submission, and can only be reset or changed by Owners or Developers. Because Owners and Developers can change their Client Sharing password at any point, or turn Client Sharing off, it’s always easy to choose when to make your site editable, and to control who has access to edit it.

## How to share editing access on CloudCannon

Let’s look at how easy Client Sharing is to set up:

{% bookshop 'markdown/youtube' title: "CloudCannon's Client Sharing" id: "LY0AJgQCFEM" extend: false border: false %}

1. I’ll take an Astro site built with the <a target="_blank" rel="noopener" href="https://cloudcannon.com/templates/sendit/">Sendit template</a> as an example. In the above video I’ve already signed up to CloudCannon and linked my GitHub account; from my account dashboard I’ve created an Astro site from a template, and selected the Sendit template, which is already configured for visual editing.
2. After the site has built, I’ll jump into *Site Settings / Sharing*.<br>![Screenshot (detail) of Site Settings and Client Sharing pane within the CloudCannon interface.](https://cc-dam.imgix.net/blog-client-sharing-screen1.png)
3. Under the Sharing tab I’ll select **Client Sharing**, and turn it on by setting a password.
4. Done! Now all I need to do is share the exact login URL (by default,&nbsp;`https://example.com/update`) with the person or people I want to have editing access.
5. (Optional) We can change the URL path from `/update` to `/login` (or anything you’d like), so that users can remember it more easily. To do this, I’ll simply change the URL subpath under *Site Settings / Client Sharing /* **Settings** tab to `login`\:<br>![Screenshot (detail) of Client Sharing pane within the CloudCannon interface.](https://cc-dam.imgix.net/blog-client-sharing-screen2.png)

We have a few other URL options here, too: Setting a **preview URL** overrides the link to the live site in the CloudCannon sidebar and header, which is handy for sites with redirects or those hosted externally. Similarly, we can set a custom **documentation URL** or **support URL**, the latter of which can also be a `mailto:` link. These options are particularly useful to direct clients to contact you if they have any questions.

## What your client user sees

Now let’s see the site from the user’s perspective:

{% bookshop 'markdown/youtube' title: "CloudCannon's Client Sharing — Client View" id: "AkFYJkAlbvs" extend: false border: false %}

After navigating to the `/login` path on my preview domain and entering my password, I can see that I’m able to create, change and save page and post content, and then publish my changes, but the more complex developer options are hidden from me — no site files, no source code, and no billing options.

If I’m a more non-technical user, that’s probably a good idea!

## When to use Client Sharing

Client Sharing is particularly helpful when your editors don’t need a permanent profile and CloudCannon account set up. Because the site Owner (typically an agency or freelancer) is in control of the password and can easily reset it, the client editor never needs to worry about forgetting how to access their site. Common users of Client Sharing include:

* Agency clients who only need to make infrequent updates to their site — for example changing their opening hours;
* External collaborators or individual contractors whose work on a website will take place within a defined timeframe;
* Subject matter experts such as legal or financial teams who need to read, update, or correct minutiae on a cyclical basis (i.e. quarterly or annually).

Because Client Sharing allows user access to editing Pages and Posts and hides Developer settings like Hosting, Builds, and the File Browser, it’s an easy way for a single editor to view a site on CloudCannon and experience the CloudCannon editing interface.

And if it’s important to keep an authorship record of any site changes, you can always [add defined Users to your Organization](https://cloudcannon.com/documentation/articles/managing-your-team-members/), create a CloudCannon account for them, and set their roles that way — the ‘Editor’ role is functionally the same as that offered by Client Sharing.

## Make your clients’ lives easier

When building Jamstack sites for your clients, making their editing experience as simple as possible is vital. And it doesn’t get any easier than sharing a URL and a password with them.

With Client Sharing on CloudCannon, there’ll be no more headaches — for you, or for your clients.