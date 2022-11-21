---
title: 'Introducing Bookshop: component-driven workflow for static websites'
description: >-
  Introducing Bookshop: an open-source framework to speed up development and
  reduce maintenance on static websites by developing components in isolation.
permalink: /blog/introducing-bookshop/
image: https://dam-cdn.cloudcannon.com/blog/bookshop-feature-image.jpg
date: 2021-10-06T05:00:00+1300
tags:
  - Features
author: cloudcannon
content_blocks:
  - _bookshop_name: left-right-block
    tag_url:
    tag_content:
    tag_disabled: true
    image_path: https://dam-cdn.cloudcannon.com/blog/the-problem.svg
    image_alt:
    heading: The problem.
    content_markdown:
    link_url:
    link_content:
    link_open_in_new_tab: false
    hide_link_icon: false
    heading_type: h2
    link_style: 'false'
    alignment: right
    info_and_description:
  - _bookshop_name: text
    content_markdown: >-
      When we started tackling static websites with a component-driven
      methodology, however, we hit some limitations working with Storybook
      outside of the JS framework world.


      1. **Complicated configuration** — Storybook doesn't have built-in support
      for templating languages like Liquid, Handlebars, or Go templates. We
      experimented with adding templating support to one of the existing
      Storybook frameworks, and building Javascript definition files for each
      component, giving us the rich Storybook controls. Another option was to
      use Storybook as an HTML reference guide, copying snippets out whenever we
      needed a component.Neither workflow provided the benefits we were used to
      in our application Storybooks, and our component reference would
      eventually fall out of sync with the implementation.

      2. **Schema duplication** — There was no source of truth for the data
      passed to each component. We had to manually keep parity between our
      Storybook configuration, component includes, and include tags across each
      website.

      3. **No SSG integration** — The SSG doesn't know anything about
      components, so we had no prescribed workflow for structuring our files at
      a component level. Eventually, a given site would become a bird's nest of
      include files and sass modules, and it was no longer clear what was
      actually a component.

      4. **Development speed** — Once we weren't receiving the full benefits of
      Storybook, the extra tooling and build time became a damper on an
      otherwise lightweight static website development environment.
    col:
  - _bookshop_name: left-right-block
    tag_url:
    tag_content:
    tag_disabled: true
    image_path: https://dam-cdn.cloudcannon.com/blog/the-solution.svg
    image_alt:
    heading: Our solution? Bookshop.
    content_markdown:
    link_url:
    link_content:
    link_open_in_new_tab: false
    hide_link_icon: false
    heading_type: h2
    link_style: 'false'
    alignment: right
    info_and_description:
  - _bookshop_name: text
    content_markdown: >-
      Bookshop is a component browser and playground, which addresses these
      limitations and brings component-driven development to static site
      generators (SSGs).
    col:
  - _bookshop_name: vimeo
    id: '622834137'
    loop: true
    autoplay: true
  - _bookshop_name: text
    content_markdown: >-
      The benefits include:


      * **SSG templating language support** — Bookshop is built for
      templating and can render the exact same includes you use to build your
      production website.

      * **Easy configuration** — Configure components with TOML, which
      functions as a schema for the front matter data structure you'll use in
      your SSG.

      * **Easy integration** — Bookshop includes plugins for popular SSGs,
      allowing them to use components with a distinct template tag that enforces
      a separation of concerns. Using this, Bookshop can seamlessly pass data
      from front matter to your component. There's no need to manually pass data
      to an include one variable at a time.

      * **Isolated component structure** — Bookshop has strong opinions on
      how templates and CSS are structured to ensure they're isolated, easy to
      find, and simple to maintain.

      * **Fast build times** — Bookshop is lightweight. Rather than a
      standalone application, bookshop builds a component browser that can embed
      anywhere on your website. This means you get to use your website styles
      and assets, and esbuild under the hood brings fast build times and quieter
      laptop fans.


      Finally, Bookshop integrates tightly with CloudCannon for your content
      management needs. Editors can see the full catalog of components available
      and use them to build pages visually, all powered by your custom-built
      component library. No extra steps are necessary.


      And did we mention that Bookshop adds a local component browser to your
      static webdev process? With a hot-reloading live-preview UI explorer for
      static template components, your workflow will thank you.
    col:
  - _bookshop_name: vimeo
    id: '623857314'
    loop: true
    autoplay: true
  - _bookshop_name: text
    content_markdown: >-
      HTML-based SSGs such as [11ty](https://www.11ty.dev/), [Jekyll](https://jekyllrb.com/), and [Hugo](https://gohugo.io/) (support coming soon)
      benefit the most for Bookshop, as existing tooling doesn't support their
      native templating languages. However, there will still be benefits to
      using Bookshop with React or Vue-based SSGs, particularly if you want
      content editors to manage content visually on CloudCannon. Support for a
      Bookshop workflow with these SSGs will be coming later this year.


      To help get you started with Bookshop, we've created a starter theme
      ([Jekyll](https://github.com/CloudCannon/jekyll-bookshop-starter),
      [11ty](https://github.com/CloudCannon/eleventy-bookshop-starter)) to give
      you a boilerplate to build the rest of you site on. We're also launching a
      [collection of free, high quality
      templates](https://github.com/CloudCannon?q=bookshop+template). These
      production-ready templates make full use of Bookshop, are optimized for
      CloudCannon and can be used for free for any project, commercial or not.


      We can't wait to see how you start using Bookshop on your web projects and
      reach new productivity levels. To get started, check out the readme for
      Bookshop in the [GitHub
      repository](https://github.com/CloudCannon/bookshop). We're always open to any feedback. If you hit
      a problem or have an idea to improve Bookshop, open an issue on the
      repository, and we'll be there to help.
    col:
---
We're delighted to launch [Bookshop](https://github.com/CloudCannon/bookshop)\: an open-source framework to speed up development and reduce maintenance on static websites by developing components in isolation.

Building and maintaining high-performing informational websites have their own set of challenges. It's almost impossible to know all the requirements for a website upfront, so there's often an endless amount of iteration and tweaking involved in these projects. Requirements change, new components are necessary, buttons need 'more pizzazz', the data team wants to add a series of graphs to their latest blog post, and it's on you to get everything to work together while being prepared for the next wave of changes. This constant chopping and changing often leads to an unmaintainable jungle of CSS and JavaScript where a complete rebuild becomes the only option. We've all been there; it's usually just a matter of time.

The key to avoiding this jungle is a component-driven workflow. Ideally, you isolate each component's template and CSS. Doing this makes the website far easier to maintain and gives you a framework for adding as many components as you'd like, without your codebase getting out of control.

In a traditional React application, you might reach for [Storybook](https://storybook.js.org/) to solve this problem. Storybook provides the tooling needed to build components in isolation, and we're big fans of the workflow that it brings to our React projects.

 
