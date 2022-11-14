---
title: 'Introducing Pagefind: Static Low-bandwidth Search at Scale'
description: >-
  Pagefind is an open-source tool that adds search to static websites without
  hosting any infrastructure, while respecting your users’ bandwidth.
series:
image: https://dam-cdn.cloudcannon.com/introducing-pagefind.jpg
date: 2022-07-15T17:00:00.000Z
tags:
  - Resources
author: liam-bigelow
content_blocks:
  - _bookshop_name: text
    content_markdown: >-
      ## The Problem


      You’ve just built a large documentation website and you’re ready to
      launch, but first, you want people to be able to search your site. What do
      you pick?


      The way we see it, this is a fork in the road. In one direction, you’d be
      grabbing a frontend search library and running the queries inside your
      users’ browser. In the other, you'd be spinning up your own
      infrastructure, or signing up for a third-party platform.&nbsp;


      Personally, I love the idea of frontend search. It means I don’t have to
      maintain extra servers or integrate with a third party, and I can continue
      to deliver an entirely static site contained within its repository. It
      fits with CloudCannon’s Git-based content ethos as well. Much like how you
      continue to own your content via Git, you will continue to own your
      search.


      Unfortunately, most static search libraries only work on sufficiently
      small sites; frontend search necessitates sending a search index to the
      user, and with existing tools a single index can be many megabytes for a
      large site . That’s a big problem for our users on low-bandwidth devices,
      and even if your search works well now, what will happen when your site
      grows? Plus, building out a local index can be a chore, often feeling like
      an exercise in re-templating your content into a different format.&nbsp;


      It’s these limitations that often drives developers to connect a
      third-party platform, or host your own search index. This would fix your
      scaling problem, but then you’d have external dependencies on extra
      infrastructure or a third-party vendor, and you’d start to erode the
      original benefits of a fully static site.&nbsp;


      After delivering many projects via both avenues, we set out on the journey
      of building a tool that meets our design goals — namely, efficiently
      searching our large sites well into the future, without shifting the
      burden to our users.


      ## Our Solution: Pagefind


      This is where Pagefind comes in, neatly solving the issues we encounter
      day to day, and even adding some handy features along the way. Pagefind
      works great on the smallest sites you have on hand, and comfortably scales
      with you up to some of the largest static sites you can think of — we can
      run a full-text search on the entirety of MDN in under 300KB total,
      including the Pagefind library itself. For most sites, this will be closer
      to 100KB. All without hosting any dedicated infrastructure.


      Pagefind exists as two halves. First, Pagefind is a CLI application that
      runs after your site builds and indexes the rendered HTML, automatically
      injecting everything needed to search it into the static contents. This
      workflow fits into a methodology we call “Static Site Chaining”, static
      site generators that themselves take a static site as input. This allows
      you to get off the ground with zero config, and control what is and isn’t
      indexed from your existing templates directly.&nbsp;


      The other half of Pagefind is the frontend search library that accesses
      the index and runs queries against it. The magic happens in the handoff
      between these two halves, and primarily in the way Pagefind outputs index
      chunks. Rather than build one large search index, Pagefind splits the
      search space into ordered chunks. This means that searching for the word
      “CloudCannon” doesn’t need to load the region of the index containing the
      word “Jamstack”. Additionally, full text and metadata for results are
      stored in yet another location, giving you fine grained control over how
      much is loaded over the network at a given time. Even better, since
      Pagefind handles injecting the library into your site and loading it in
      the browser, this internal structure isn’t something you ever interface
      with.


      To give you a taste of how easy search can be, here’s how to index a Hugo
      site after it builds:
    col: '1'
  - _bookshop_name: code-block
    source:
    code_block: |-
      hugo
      npx pagefind --source public 
    language: shell
  - _bookshop_name: text
    content_markdown: 'Or Jekyll:'
    col: '1'
  - _bookshop_name: code-block
    source:
    code_block: |-
      jekyll build
      npx pagefind --source _site 
    language: shell
  - _bookshop_name: text
    content_markdown: >-
      Indeed, any static folder of HTML files can be indexed by Pagefind. And
      with a CloudCannon postbuild script, you can automatically index your site
      every time it builds.


      Now, to search our site in the browser:
    col: '1'
  - _bookshop_name: code-block
    source: site.js
    code_block: |-
      let pagefind = await import("/_pagefind/pagefind.js");
      let search = await pagefind.search("nice");
      let result = await search.results[0].data();
    language: javascript
  - _bookshop_name: text
    content_markdown: >-
      Or, for the easiest search experience on the planet, just drop the
      Pagefind UI snippet into your template, customize the CSS variables, and
      let it do its thing.


      You can test out how quickly Pagefind searches the CloudCannon blog below:
    col: '1'
  - _bookshop_name: inline-search
    pagefind_folder: /blog/_pagefind
  - _bookshop_name: text
    content_markdown: >-
      To say we’re all pretty excited about this one is an understatement. Plus,
      beyond simple search queries Pagefind supports “exact quote searches”,
      tagging and filtering content, term frequency ranking, and more. All in
      the same low-bandwidth package that keeps our firm footing in the
      \#leanweb.&nbsp;


      To get started with Pagefind, all documentation can be found at
      [pagefind.app](https://pagefind.app){: target="_blank" rel="noopener"}.
      For even more information on what’s going on under the hood, take a listen
      to my talk on Pagefind at [HugoConf](https://hugoconf.io){:
      target="_blank" rel="noopener"} 2022.
    col: '1'
  - _bookshop_name: youtube
    youtube_id: 74lsEXqRQys
    title: 'Introducing Pagefind: static low-bandwidth search at scale'
  - _bookshop_name: text
    content_markdown: >-
      We’re excited to see more people use Pagefind, and even more excited to
      get feedback\! So if you hit any problems, or have any ideas to improve
      Pagefind, open an issue or a discussion in the [GitHub
      repository](https://github.com/cloudcannon/pagefind){: target="_blank"
      rel="noopener"} and we’ll be there to help.
    col: '1'
---
We’re delighted to launch Pagefind, an open-source tool that adds search to your static websites without hosting any infrastructure, while respecting your users’ bandwidth.

At CloudCannon, we firmly believe there are very few challenges that should block the path to static site adoption, and we’re constantly working to make that journey as joyful as possible for everyone with a presence on the web.

Our [SSGs through the ages](https://cloudcannon.comhttps://cloudcannon.com/blog/ssg-history-1-before-jekyll/){: target="_blank" rel="noopener"} series delves into the history of this space, and one of the trends that we’re seeing is larger and larger projects migrating to static websites, helped in part by the efficiency of static site generators like Hugo. We build many such sites for ourselves — the [CloudCannon documentation](https://cloudcannon.com/documentation/){: target="_blank" rel="noopener"} is nothing to sneeze at — as well as for our Enterprise partners, and our customers build yet more on our platform every day. As this scale continues to increase, we find ourselves encountering new and interesting challenges. In the past we have released open-source tools for [component-driven development](https://github.com/CloudCannon/bookshop){: target="_blank" rel="noopener"}, [internationalization](https://github.com/CloudCannon/rosey){: target="_blank" rel="noopener"}, [pagination](https://github.com/CloudCannon/pagebreak){: target="_blank" rel="noopener"} and [portability](https://github.com/CloudCannon/reseed){: target="_blank" rel="noopener"}. Now, we have our sights set on search.