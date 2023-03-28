---
title: How I created my first static website, with zero experience (1/∞)
description: >-
  Or; A Jamstack Beginner’s Illustrated Primer. A beginner's guide to creating
  static sites. Part 1 of the series.
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
image: https://cc-dam.imgix.net/blog/lowry-mss-2.jpg
date: 2021-08-17T05:00:00+1200
tags:
  - Resources
author: 466580e8-b101-4837-a0c2-a90a8aebb5db
---
## Part **1: Background \| Preamble**

*In which context is offered.*

Whether it's a brittle typescript of second-wave Modernist fiction or a plaintext file containing disordered and partially expressed fragments of a larval bee’s genome — both human-readable and both concertedly, almost deliberately *not* — I’ve always been fascinated with what happens to texts as they change, naturally or otherwise.

I first trained in a lab studying developmental genetics in insects, and eventually swapped that for manuscript analysis: tracking changes, annotating, and making sometimes-educated guesses as to the author’s reasoning behind the revision history. If nothing else, the latter role reminded me of the importance of annotating your own changes, of commenting on your work as you do it. Though if Malcolm Lowry and Samuel Beckett — not to mention the blind watchmaker — had done more of that, I’d have had a lot less to work on over the last few years.

Selfishly, I've often thought that if Lowry had used Git, I could have saved a lot of time: he essentially composed his first novel from a few hundred forked versions of other stories, poems and newspaper articles he’d read. All without attribution or any concept of open-source idealism, of course. (Beckett, for his part, seemed to write and revise in a reasonably linear fashion, meaning projects like the [Beckett Digital Manuscripts Project](https://www.beckettarchive.org/) often need only nested `<ins>` and `<del>` tags to accurately capture his process.)

In any case, I’m here now: working with CloudCannon as the teams around me gear up to add new static site generators to their Git-based Content Management System (CMS) platform. Full disclosure: these terms — and the broader function of the Jamstack — were relatively foreign to me up until a few months ago.

Before this project, I hadn’t used Git properly. I had never created a modern static website, though like many people I’d made multiple sites with Wordpress. And like a somewhat smaller subset of people, I’ve made and maintained archival sites managing [collections of linked data](http://www.landfallarchive.org/omeka/) with Omeka.

But static? I hadn’t worked with static sites since the late nineties. I still thought of them fondly from time to time: the days when you could make something completely solid, and just *know* it would look the same, act the same, for everyone.

All of which is some attempt to explain that this series won't be an expert’s guide to Jamstack. I’m still learning, and I'll keep on learning, \#100DaysofCode or no. I’m also incredibly lucky to be surrounded by a crowd of Jamstack enthusiasts who are happy to help out a beginner who's stuck. Not everyone has immediate access to this level of support, but if there’s one thing I’ve already learned about the Jamstack community, it’s that these are people who want to help. Developers or tech evangelists, they want to see others use this technology — whether or not we really do end up building a better web. There are also numerous [communities](https://jamstack.org/community/), [Slack channels](https://www.tnd.dev/) and companies to which we can reach out and ask questions.

And we should ask. Despite the title of this article, I don’t think that anyone really has zero experience. Just the fact that you’re interested, that you can picture what you want to create, is always enough to start with. It’s where I’ve always started.

Through the course of this ongoing series I'll capture the process of creating a static site on CloudCannon's platform, alongside some local HTML and CSS work. At this early stage I'm picturing a general-purpose portfolio site with a few static pages, a blog section, some form of social media integration, and — most importantly — the potential for me to expand and change as I learn more. If I can manage to create the site according to accepted best practices, as I learn them, all the better. (I imagine top-tier Lighthouse scores will be out of reach for a while, but scoring and gamifying any process always makes me want to improve, so I'll likely aim higher, the more I learn.)

**About me**

Actually, this section is less about me, and more about what I use to write and, eventually, code. As I start using additional software over the coming weeks, I'll list everything new at the bottom of each post.

I work on a Mac running MacOS 11.4, with Chrome auto-updating daily. I compose drafts in anything than can contain text — I suppose I'm aiming for tool-agnosticism, but really all I need is rich text. I edit — compulsively until deadlines fall — in a plain text editor for solo work, but usually via Google Drive or [Notion](https://www.notion.so/) for shared documents. Though I've been hearing good things about [Atom](https://atom.io/)…

As for terminal interfaces, I've relied on detailed, step-by-step instructions since my dial-up BBS days (Sword of Orion and Valhalla) ended in 1997 or so. Like most language learners, I've found if I'm not using a new language or command schema daily, even for small tasks, it doesn't stick in my head.

(I've included all of this on the off-chance it might be relevant information for someone, even if it reads like the world’s worst dating profile. )

**Next week:** ["It's no use, Mr. James — it's Git all the way down."](https://cloudcannon.com/blog/on-git-with-zero-experience/)
