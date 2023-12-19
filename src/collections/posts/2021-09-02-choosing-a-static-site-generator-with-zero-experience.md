---
_schema: default
title: Choosing a static site generator with zero experience
description: >-
  Choosing a static site generator that will work for you, without all that
  pesky 'developer knowledge'.
draft: false
image: https://cc-dam.imgix.net/blog/choosing-ssg-beginner.jpg
date: 2021-09-02T05:00:00+12:00
hide_publish_date: false
tags:
  - Resources
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
categories:
  - resources
---
## Part 3: Choices, choices, choices

*In which we wonder why anything else would even be considered.*

I'm hoping I don't have to re-introduce [CloudCannon's Git-based CMS](https://cloudcannon.com/git-cms/). Suffice it to say it's real, and it's spectacular.

I've been using CloudCannon's CMS for almost a month now, as an editor and a writer. Coming from someone whose last web job — marketing, content writing, and site updating for a large university — relied on a 9:1 ratio of end-of-life (and out-of-service) legacy CMS\* and pared-back WordPress intranet, it's been amazing. Working on CloudCannon's site, I was let loose to do what I do best: creating and editing content. From a content marketing perspective, there's remarkably little friction involved, meaning I can spend more time thinking and writing and less time chasing down developers. (This is also a great benefit to my developer colleagues.)

All of which is to say I'm comfortable in the system, but I don't yet know how it all works. And, perhaps just to make it harder for myself, I really want to know. I do know that I could start with a free developer account, and build from there. There's [plenty of documentation](https://cloudcannon.com/documentation/) available, and it's all geared to an interested and informed audience of developers. But given that I've committed to this zero-exp lifestyle of mine — building from the ground up with no assumptions — it's probably worth building locally, and pulling the site in to CloudCannon from Github. The appeal here, as I [mentioned last week](/blog/how-i-created-my-first-static-website-with-zero-experience-1/), is that I'll be able to use CloudCannon's CMS to branch and merge my edits, and everything I change will be synced to my Github repo.

For a writer who develops — as opposed, I suppose, to a developer who writes — this is a game-changer. (And for a writer who edits compulsively, and has errant daydreams of visualizing the many and varied changes to a single piece of creative work over time, it's all pretty exciting. I've often looked at Ben Fry's [The Preservation of Favoured Traces](https://www.fathom.info/traces/) as a model for visualizing versions of altered texts, and the prospect of seeing a comic or film script evolve along these lines is almost more interesting than actually writing the script itself.)

But before I get anywhere near there, I've got one more decision to make.

## **Choosing a static site generator (SSG)**

*In which we essentially roll 1d3, with a +1 modifier on future-proofing.*

[Jamstack.org currently lists 333 SSGs](https://jamstack.org/generators/), and that number seems to increase weekly. Rather than be paralyzed by choice I’ll select from three of the most commonly recommended for general use cases: [Hugo](https://cloudcannon.com/hugo-cms/), [Jekyll](https://cloudcannon.com/jekyll-cms/) and [Eleventy](https://cloudcannon.com/eleventy-cms/) (11ty). I've included a some data below (graph courtesy of [GitHub Statistics](https://vesoft-inc.github.io/github-statistics/)) showing the commit activity in each; you can also check out their [relative growth in GitHub stars](https://star-history.t9t.io/#jekyll/jekyll&amp;gohugoio/hugo&amp;11ty/eleventy).

{% bookshop "markdown/image" src: "https://cc-dam.imgix.net/blog/commits.png" alt: "" extend: false border: false %}

You can further compare these three in your own time, and for your own specific use case, but a basic breakdown follows, based on a beginner's scans of their sites and general (mostly Twitter) chat around them:

### Hugo

[gohugo.io](https://gohugo.io/) \| [Hugo CMS](https://cloudcannon.com/hugo-cms/)

**At a glance:**

* "Speedy" build rate — best in class, at &lt;1ms per page.
* Built-in shortcodes (appealing to me only because I used them in WordPress and sometimes got them right)
* Built-in templates. Always a bonus.
* Multilingual support and internationalization.
* Handy [image processing](https://gohugo.io/content-management/image-processing/) and resizing options. All in service of speed!
* Uses Go's html/template and text/template libraries. From what I've read, Go is off-putting to a lot of developers who don't yet use it, but those who do tend to swear by it. So presumably it's something like Stockholm Syndrome.
* Apache-2.0 license. It's extremely permissive, but verbose (its appendix alone is longer than the full MIT license), and its main requirement is that you explicitly list any modifications to the software.

**My concerns:**

* Is the speed worth it? For many users, it will be. For me, starting with a small site that isn't built for a customer, blazing-fast speed is less of a concern than actually making the site function. (I'll look at performance later in this series, I promise.)
* Do I have to use Go to set this up? No, as it turns out — Hugo installs from a single binary. (And for good measure, a counterpoint: starting from near-zero, is Go any more difficult to pick my way through than anything else? I honestly don't know. Maybe this is a problem for future David?)

### Jekyll

[jekyllrb.com](https://jekyllrb.com/) \| [Jekyll CMS](https://cloudcannon.com/jekyll-cms/)

**At a glance:**

* "Simple" to set up. But how simple is "simple"?
* Blog-aware (including migration assists). Great! But I'm not migrating from anything.
* Like Hugo, Jekyll has a large user community. All to the good.
* Uses Liquid for templating. (But why limit myself to just one templating language?)
* MIT license. Permissive, short and clear. I can do anything with the software, as long as I keep the MIT license.

**My concerns:**

Apparently Jekyll delivers progressively slower build times the larger a site grows — some reports say "exponentially slower", though that's likely an exaggeration. Right?

Jekyll is older. Is it future-proofed? What will I do if I have to move my content off Jekyll?

### Eleventy / 11ty

[11ty.dev](https://www.11ty.dev/) \| [11ty CMS](https://cloudcannon.com/eleventy-cms/)

**At a glance:**

* Newer than the above two SSGs, with a dedicated cheering section online. And, it would seem, a quickly increasing number of commits.
* Apparently has a gentler learning curve for beginners. This alone might swing it, to be honest.
* Incredible flexibility in templating languages. And I don't use the word "incredibly" lightly.
* MIT license. As above, the MIT license is permissive, and simple to follow.

**My concerns:**

Aside from general unease about throwing myself into the deep end and committing to one SSG, I'm only vaguely concerned that there's no standardized or preferred name for this — is it Eleventy or 11ty? Either one, or both interchangeably, depending on my mood?

Finally, coming from New Zealand but having spent a few years living in Australia, I have [mixed](https://www.doc.govt.nz/nature/pests-and-threats/animal-pests/possums/) [feelings](https://backyardbuddies.org.au/backyard-buddies/brushtail-possum/) about [Eleventy's possum logo](https://www.11ty.dev/blog/logo-homage/).

Honestly, any one of the three would probably work for this project. All three seem to work well with blog content. Social integration should be relatively trivial, once a site is set up. Even the license doesn't matter much to me, as an end-user who won't be tweaking an SSG's source anytime soon. But I’m a sucker for future-proofing my learning paths, and if I start with Eleventy I can practice templating in Liquid, Nunjucks, Handlebars, Mustache, EJS, HTML, Pug, JavaScript, HTML, and Markdown. Though not necessarily in *that* order…

Most important for me, though, is the prospect of a gentler learning curve. I'm all for slow and steady onboarding. And even though the support for Eleventy may be slightly thinner on the ground than that for Hugo or Jekyll, it’s still there, with a vocal group of proponents alongside.

Hopefully I've chosen well.

**Next time:** Everything gets real, real fast, and I may well bang my head against a terminal window. We'll see.

\* Just how out of date was that (unnamed and remarkably unashamed) CMS? Well, the hiring process for a similar role to mine included finding people who really liked updating sites the same way they did *seventeen years ago*. It boasted all the worst elements of a dynamic CMS, and was remarkably resource-intensive. Add to that a good decade of accumulated cruft, and dependence upon servers that sometimes wouldn't update until the following day, iff the wind was blowing from the east and no one slammed the office door next to the server room. Looking back, it's no wonder I'm sold on Jamstack and static sites.

## Previous posts in this series

**Part 1:** [Background \| Preamble](https://cloudcannon.com/blog/how-i-created-my-first-static-website-with-zero-experience-1/)

**Part 2:** [Git = gud](https://cloudcannon.com/blog/on-git-with-zero-experience/)

*Edited to add:* Hugo's image processing feature.