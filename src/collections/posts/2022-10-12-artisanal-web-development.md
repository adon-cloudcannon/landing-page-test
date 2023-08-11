---
draft: false
title: Artisanal Web Development
description: >-
  Artisanal Web Development is a very useful approach for development projects
  on modern static websites when flexibility, speed, stability, and security are
  important to you. Perhaps the biggest benefit, however, is both furthering and
  reinforcing your own education.
series:
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
image: https://cc-dam.imgix.net/blog/blog-artisanal-web-development.jpg
date: 2022-10-12T05:00:00+1300
hide_publish_date: false
tags:
  - Opinion
author: 466580e8-b101-4837-a0c2-a90a8aebb5db
ssg_frameworks:
categories:
  - opinion

---
On [our last episode of Static Feedback](https://www.youtube.com/watch?v=MuAe7aZu0Nw), I spoke with [Joost van der Schee](https://www.usecue.com/) about ‘Artisanal Web Development’, the approach he takes to solo web development projects. Over the course of our conversation we talked at length about the importance of knowing the purpose and scope of each line of code, and the value of approaching new projects like this.

Joost interprets this approach as deliberately avoiding frameworks that ‘simplify’ code by including predefined classes and functions that are shipped client-side, even if they’re not used. In principle you’d think these frameworks would be helpful, and they certainly can be, on the development side. The trouble is, unless they’re pared back with additional tooling (like [PurgeCSS](https://purgecss.com/), for example), even well designed and developed sites can bloat significantly.

When you’re working in teams, or handing off a site to a client developer who’s going to continue working with your front-end project, the most important thing to do is find common ground. This might take the form of a carefully scoped framework or a handcrafted component system, or code that you construct specifically for your use case.

{% bookshop "markdown/youtube" id:"MuAe7aZu0Nw" title:"Static Feedback #2 — Artisanal Web Development with Joost van der Schee" extend:true %}

Our conversation is above if you haven’t seen it, but we discussed three
major arguments in favor of artisanal web development:
### Faster loading websites

If you avoid frameworks and third-party code your websites will usually be
considerably smaller, and will thus load faster for users. And generally
speaking, faster page loads means happier users\!

### Flexibility and efficiency

If you know the purpose of every single line, you’re much more likely to
be able to make small tweaks and adjustments to the site. If you’re
working on a client site, it’s particularly important to know which
aspects of the site are easy to change, and which would require additional
development time.

### Personal education

Developers are typically life-long learners — it’s one of the most
exciting parts of the job, and it’s hard to argue against the benefits of
learning more about the code you ship. Unless you’re extremely time-poor
or don’t see yourself making more websites in the future, the return on
investment for learning the limits of your code will make the effort
worthwhile.

Further to this point, your own learnings will accumulate to the point
that you’ll want to record them for later use, making you a more efficient
developer while also helping others following in your tracks. Joost, for
example, keeps track of the common solutions he encounters on his
community sites, [Hugo Codex](https://hugocodex.org/) and [Jekyll Codex](https://jekyllcodex.org/).

As he notes in [his own follow-up
post](https://www.usecue.com/blog/artisanal-web-development/), your own understanding of
every line of code can even make you a better user of web frameworks,
because you get a better understanding of the problems that these
frameworks are trying to solve.

## Extending the conversation

As Joost has pointed out, over the course of our conversation there were a
few other important benefits of the artisanal approach that we didn’t get
to discuss.

### Project stability

Anyone who’s maintained a WordPress or Drupal site for longer than a few
months at a time will likely be familiar with the concept of ‘dependency
hell’, where a single out-of-date or broken plugin or extension can cause
problems with other components. The artisanal approach tends to result in
more stable projects, because it only relies on web standards that simply
don’t change.

### Privacy and security

Third-party code in ‘black box’ containers like WordPress plugins — or
indeed any externally hosted code — can be a huge risk from a privacy
point of view. If you can’t see, understand, and approve the code you’re
relying on, you might risk exposing user data or opening up your sites to
attacks like cross-site scripting (XSS).

## Constrained web development and sustainable code

To be clear, the artisanal approach is a deliberate constraint. It’s a set
of rules you define, and can choose to apply to yourself, or to a given
project. Like most constraints, though, it does promote creativity — and
often [the most creative solutions emerge from rigorous
constraints](https://www.inc.com/thomas-oppong/for-a-more-creative-brain-embrace-constraints.html).

The open-source search tool [Pagefind](https://pagefind.app) is a prime example of development under
constraint, while also solving a distinct problem. In its case the
constraint was network traffic — why ship a large search index file to
every user, when indexes can be ‘chunked’ and served atomically, on
demand?

The artisanal approach, then, is about making your websites both
performant and sustainable, in the sense that they’re able to be
maintained under a given set of constraints. Your constraints may be
different from project to project, depending on your client, or you may
bring a set of rules with you to each new site build.

No matter how permanent we might wish our sites would be, as [Jake Albaugh
writes](https://css-tricks.com/embrace-your-codes-transience/), our code is always transient.
Luckily, our best code can be the code right in front of us, and the best
website we can make right now is the next one:

> If you can justify the effort of writing your own code, you become more
familiar with web specifications and learn just how robust they are on
their own. You also end up with something that can be easier to maintain
long-term because it is closest to the core evolutionary path of the web.

As long as you have a very clear idea of who you’re developing for — of
who will work with your code, and what their level of knowledge will be —
you’ll know whether the artisanal approach is right for you. But as Joost
writes, it’s worth trying out on your personal project sites

## Less is More

Joost and I focused on **knowledge** in our conversation on Static
Feedback, but we could have equally described the artisanal approach in
terms of **deliberate simplicity in development**. Bringing these two
concepts together is where a [Git-based
CMS](https://cloudcannon.com/git-cms/)
like CloudCannon comes in — because CloudCannon is tightly integrated with
the ways that your chosen SSGs build your sites, we’re able to offer much
more flexible development and editing workflows, whether or not you prefer
to take an artisanal approach to your code.