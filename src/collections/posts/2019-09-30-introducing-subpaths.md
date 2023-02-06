---
title: Introducing Subpaths
date: 2019-09-30T13:00:00+1300
tags:
  - Features
author: mike-neumegen
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/uploads/blog-two-road-signs.jpg
---
Subdomains are a great way to separate different sections of your site. You might have your blog at blog.example.com, your docs at docs.example.com while keeping your main marketing site at example.com. Many companies use subdomains this way and it's easy to set up in CloudCannon.

Subdomains however, are not your only option. The alternative is mounting the sites on subpaths. So blog.example.com becomes example.com/blog/ and docs.example.com becomes example.com/docs/. SEO is the main benefit of doing this as your content is not split between multiple logical sites. Moz are thought leaders in the SEO space and have a great video outlining subdomains vs subpaths.

<iframe allowtransparency="true" title="Wistia video player" allowfullscreen="" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" src="https://fast.wistia.net/embed/iframe/6erzjiily8" width="400" height="225"></iframe>

To achieve this you could create a monolithic Jekyll site that has your blog, docs and marketing site. If you have a small amount of content this works fine, however if you have a large amount of content your build times, content structure and site complexity will soon get out of control. It also means that each individual site can no longer have their own editors and publishing schedule.

Ideally you could build each site individually and mount them at the desired paths on build. The would give search engines and visitors the illusion of a single site when under the hood it's multiple sites. With CloudCannon subpaths you can do exactly this\!

## How do I use subpaths?

First set up a site using the primary domain, in the above situation this would be example.com. This site will serve the root and any routes that don't have a subpath.

![subpaths dashboard](https://cc-dam.imgix.net/blog/assets/blog/subpaths/primary_2x.png)

Once the primary domain is configured we can set the subpath for other sites.

![subpaths dashboard](https://cc-dam.imgix.net/blog/assets/blog/subpaths/subpath_2x.png)

Now anything beginning with the path `/blog/` is handled by the second site, everything else is handled by the first.

CloudCannon doesn't rewrite you generate so all links on the second site needs to be prepended with `/blog/` (or whatever your subpath is) using Jekyll's [baseurl](https://jekyllrb.com/docs/configuration/options/#serve-command-options) or some other method.

## Wrapping up

Subpaths allow you to split large sites into smaller, more manageable chunks. We hope this helps you create more complex sites on CloudCannon.
