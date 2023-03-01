---
_schema: default
title: SvelteKit
layout: builder.html
permalink: /sveltekit-cms/
description: >-
  Use CloudCannon as a SvelteKit CMS to simplify web development by building
  fast static sites with Svelte, and manage your content with an intuitive
  visual editor!
summary: Fast and flexible, SvelteKit is powered by Svelte and Vite.
image: /images/icons/ssgs/sveltekit.svg
seo:
  featured_image: https://cc-dam.imgix.net/Home-Page-OG (2).png
  featured_image_alt: >-
    CloudCannon's visual CMS that keeps both content editors and developers
    happy
content_blocks:
  - _bookshop_name: sections/container
    content:
      label: Hero
      blocks:
        - _bookshop_name: simple/heading
          content:
            text: The SvelteKit CMS for everyone
          styles:
            element: h1
            width: normal
            desktop:
              text_alignment:
                align: center
              text_sizing:
                text_size: biggest
              margin:
                top: 0
                bottom: 60
            tablet:
              text_alignment:
                active: false
                align: left
              text_sizing:
                active: false
                text_size: big
              margin:
                active: false
                top: 0
                bottom: 0
            mobile:
              text_alignment:
                active: false
                align: left
              text_sizing:
                active: true
                text_size: normal
              margin:
                active: true
                top: 0
                bottom: 15
        - _bookshop_name: simple/text-block
          content:
            text_markdown: >-
              With CloudCannon as your SvelteKit CMS, your whole team can
              collaborate to create incredible static sites with Svelte
              components.
          styles:
            desktop:
              text_alignment:
                align: center
              text_sizing:
                text_size: biggest
              margin:
                top: 0
                bottom: 30
              block_alignment:
                align_block: center
            tablet:
              text_alignment:
                active: false
                align: left
              text_sizing:
                active: false
                text_size: normal
              margin:
                active: false
                top: 0
                bottom: 0
              block_alignment:
                active: false
                align_block: left
            mobile:
              text_alignment:
                active: false
                align: left
              text_sizing:
                active: true
                text_size: normal
              margin:
                active: true
                top: 0
                bottom: 30
              block_alignment:
                active: false
                align_block: left
            width: medium
        - _bookshop_name: simple/button-holder
          content:
            button_blocks:
              - _bookshop_name: simple/button
                content:
                  text: Start your free trial
                  link: https://app.cloudcannon.com/register?trial=cc_standard
                styles:
                  style: normal
                  size: big
                  extra_classes:
          styles:
            desktop:
              margin:
                top: 0
                bottom: 60
              justify:
                align: center
            tablet:
              margin:
                active: false
                top: 0
                bottom: 0
              justify:
                active: false
                align: center
            mobile:
              margin:
                active: false
                top: 0
                bottom: 0
              justify:
                active: false
                align: center
        - _bookshop_name: simple/image
          content:
            alt: Editing a page on CloudCannon
            image: https://cc-dam.imgix.net/ssg-hero-image-2.png
          styles:
            border:
            rounded:
            ontop: true
            desktop:
              transform:
                scale: 1
                translate_x: 0
                translate_y: 0
                rotate: 0
                skew: 0
              block_alignment:
                align_block: left
              margin:
                top: 0
                left: 0
                bottom: 120
                right: 0
              position:
                top: 0
                left: 0
                bottom: 0
                right: 0
            tablet:
              transform:
                active: false
                scale: 1
                translate_x: 0
                translate_y: 0
                rotate: 0
                skew: 0
              block_alignment:
                active: false
                align_block: left
              margin:
                active: false
                top: 0
                left: 0
                bottom: 0
                right: 0
              position:
                active: false
                top: 0
                left: 0
                bottom: 0
                right: 0
            mobile:
              transform:
                active: false
                scale: 1
                translate_x: 0
                translate_y: 0
                rotate: 0
                skew: 0
              block_alignment:
                active: false
                align_block: left
              margin:
                active: true
                top: 0
                left: 0
                bottom: 60
                right: 0
              position:
                active: false
                top: 0
                left: 0
                bottom: 0
                right: 0
    styles:
      background: white
      rounded: none
      size: normal
      align:
      desktop:
        margin:
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          top: 90
          right: 0
          bottom: 0
          left: 0
      tablet:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
      mobile:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: true
          top: 30
          right: 0
          bottom: 15
          left: 0
  - _bookshop_name: sections/container
    content:
      label: Everything in one place
      blocks:
        - _bookshop_name: sections/two-column
          content:
            left:
              blocks:
                - _bookshop_name: simple/heading
                  content:
                    text: Everything in one place
                  styles:
                    element: h2
                    width: normal
                    desktop:
                      text_alignment:
                        align: left
                      text_sizing:
                        text_size: big
                      margin:
                        top: 0
                        bottom: 30
                    tablet:
                      text_alignment:
                        active: false
                        align: center
                      text_sizing:
                        active: false
                        text_size: big
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                    mobile:
                      text_alignment:
                        active: false
                        align: center
                      text_sizing:
                        active: true
                        text_size: normal
                      margin:
                        active: true
                        top: 0
                        bottom: 15
                - _bookshop_name: simple/text-block
                  content:
                    text_markdown: >-
                      CloudCannon gives you everything you need to create and
                      manage your content, all on one platform. Build and host
                      the best performing sites on the web with the help of our
                      SvelteKit CMS.
                  styles:
                    desktop:
                      text_alignment:
                        align: left
                      text_sizing:
                        text_size: normal
                      margin:
                        top: 0
                        bottom: 0
                      block_alignment:
                        align_block:
                    tablet:
                      text_alignment:
                        active: false
                        align: left
                      text_sizing:
                        active: false
                        text_size: normal
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                      block_alignment:
                        active: false
                        align_block: left
                    mobile:
                      text_alignment:
                        active: false
                        align: left
                      text_sizing:
                        active: false
                        text_size: normal
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                      block_alignment:
                        active: false
                        align_block: left
                    width: full
            right:
              blocks:
                - _bookshop_name: simple/image
                  content:
                    alt: Branching and previewing
                    image: https://cc-dam.imgix.net/image_8_utyigb.png
                  styles:
                    border:
                    rounded:
                    ontop:
                    width: full
                    desktop:
                      transform:
                        scale: 1
                        translate_x: 0
                        translate_y: 0
                        rotate: 0
                        skew: 0
                      block_alignment:
                        align_block: left
                      margin:
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                      position:
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                    tablet:
                      transform:
                        active: false
                        scale: 1
                        translate_x: 0
                        translate_y: 0
                        rotate: 0
                        skew: 0
                      block_alignment:
                        active: false
                        align_block: left
                      margin:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                      position:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                    mobile:
                      transform:
                        active: false
                        scale: 1
                        translate_x: 0
                        translate_y: 0
                        rotate: 0
                        skew: 0
                      block_alignment:
                        active: false
                        align_block: left
                      margin:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                      position:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
          styles:
            desktop:
              columns:
                type: fixed-fluid
                width: 450
                gap: 50
                vertical_gap: 0
              vertical_block_alignment:
                v_align: center
            tablet:
              columns:
                active: false
                type: split
                width: 0
                gap: 0
                vertical_gap: 0
              vertical_block_alignment:
                active: false
                v_align: top
            mobile:
              columns:
                active: true
                type: stacked
                width: 0
                gap: 0
                vertical_gap: 20
              vertical_block_alignment:
                active: false
                v_align: center
    styles:
      background: sea
      rounded: top
      size: normal
      align:
      desktop:
        margin:
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          top: 90
          right: 0
          bottom: 130
          left: 0
      tablet:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
      mobile:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: true
          top: 30
          right: 0
          bottom: 90
          left: 0
  - _bookshop_name: sections/container
    content:
      label: Works with your existing SvelteKit static sites
      blocks:
        - _bookshop_name: sections/two-column
          content:
            left:
              blocks:
                - _bookshop_name: simple/image
                  content:
                    alt: Faster and easier on SvelteKit
                    image: >-
                      https://cc-dam.imgix.net/Landing%20Pages/Group_18913_z23spt.png
                  styles:
                    border:
                    rounded:
                    ontop:
                    width: full
                    desktop:
                      transform:
                        scale: 1
                        translate_x: 0
                        translate_y: 0
                        rotate: 0
                        skew: 0
                      block_alignment:
                        align_block: left
                      margin:
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                      position:
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                    tablet:
                      transform:
                        active: false
                        scale: 1
                        translate_x: 0
                        translate_y: 0
                        rotate: 0
                        skew: 0
                      block_alignment:
                        active: false
                        align_block: left
                      margin:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                      position:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                    mobile:
                      transform:
                        active: false
                        scale: 1
                        translate_x: 0
                        translate_y: 0
                        rotate: 0
                        skew: 0
                      block_alignment:
                        active: false
                        align_block: left
                      margin:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                      position:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
            right:
              blocks:
                - _bookshop_name: simple/heading
                  content:
                    text: Works with your existing SvelteKit static sites
                  styles:
                    element: h2
                    width: normal
                    desktop:
                      text_alignment:
                        align: left
                      text_sizing:
                        text_size: big
                      margin:
                        top: 0
                        bottom: 30
                    tablet:
                      text_alignment:
                        active: false
                        align: center
                      text_sizing:
                        active: false
                        text_size: big
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                    mobile:
                      text_alignment:
                        active: false
                        align: center
                      text_sizing:
                        active: true
                        text_size: normal
                      margin:
                        active: true
                        top: 0
                        bottom: 15
                - _bookshop_name: simple/text-block
                  content:
                    text_markdown: >-
                      CloudCannon syncs your SvelteKit website from your Git
                      repository and enables developers to work together,
                      faster. And as for your content team, they won’t need
                      technical knowledge. From Markdown and HTML, to sections
                      and data files, everything can be updated by content
                      editors with CloudCannon.


                      To get started quickly, there are also a range of
                      production-ready [SvelteKit templates](/templates/) to
                      choose from.&nbsp;
                  styles:
                    desktop:
                      text_alignment:
                        align: left
                      text_sizing:
                        text_size: normal
                      margin:
                        top: 0
                        bottom: 0
                      block_alignment:
                        align_block:
                    tablet:
                      text_alignment:
                        active: false
                        align: left
                      text_sizing:
                        active: false
                        text_size: normal
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                      block_alignment:
                        active: false
                        align_block: left
                    mobile:
                      text_alignment:
                        active: false
                        align: left
                      text_sizing:
                        active: false
                        text_size: normal
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                      block_alignment:
                        active: false
                        align_block: left
                    width: full
          styles:
            desktop:
              columns:
                type: fluid-fixed
                width: 450
                gap: 50
                vertical_gap: 0
              vertical_block_alignment:
                v_align: center
            tablet:
              columns:
                active: false
                type: split
                width: 0
                gap: 0
                vertical_gap: 0
              vertical_block_alignment:
                active: false
                v_align: top
            mobile:
              columns:
                active: true
                type: stacked
                width: 0
                gap: 0
                vertical_gap: 20
              vertical_block_alignment:
                active: false
                v_align: top
    styles:
      background: white
      rounded: top
      desktop:
        margin:
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          top: 90
          right: 0
          bottom: 140
          left: 0
      tablet:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
      mobile:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: true
          top: 30
          right: 0
          bottom: 90
          left: 0
      size: normal
      align: none
  - _bookshop_name: sections/container
    content:
      label: Intuitive content editing
      blocks:
        - _bookshop_name: simple/heading
          content:
            text: Intuitive content editing
          styles:
            element: h2
            width: normal
            desktop:
              text_alignment:
                align: center
              text_sizing:
                text_size: big
              margin:
                top: 0
                bottom: 60
            tablet:
              text_alignment:
                active: false
                align: center
              text_sizing:
                active: false
                text_size: big
              margin:
                active: false
                top: 0
                bottom: 0
            mobile:
              text_alignment:
                active: false
                align: center
              text_sizing:
                active: true
                text_size: normal
              margin:
                active: true
                top: 0
                bottom: 15
        - _bookshop_name: simple/text-block
          content:
            text_markdown: >-
              Level up your editing team with CloudCannon’s logical and robust
              visual content editing and publishing workflows.
          styles:
            desktop:
              text_alignment:
                align: center
              text_sizing:
                text_size: normal
              margin:
                top: 0
                bottom: 60
              block_alignment:
                align_block: center
            tablet:
              text_alignment:
                active: false
                align: left
              text_sizing:
                active: false
                text_size: normal
              margin:
                active: false
                top: 0
                bottom: 0
              block_alignment:
                active: false
                align_block: left
            mobile:
              text_alignment:
                active: false
                align: left
              text_sizing:
                active: false
                text_size: normal
              margin:
                active: true
                top: 0
                bottom: 30
              block_alignment:
                active: false
                align_block: left
            width: full
        - _bookshop_name: simple/image-cycle
          content:
            rows:
              - title: Git-based CMS
                description: >-
                  Everything syncs back to Git so your development and content
                  editing teams can always collaborate in sync.
                image: https://cc-dam.imgix.net/git-sync-r.png
              - title: Catered to content editors
                description: >-
                  Empower your editors by building a library of components to
                  create new pages with ease.
                image: >-
                  https://cc-dam.imgix.net/Image_-_Publishing_workflows_yf5gjl.png
              - title: Robust publishing
                description: >-
                  Prepare branches for staging and production workflows. Your
                  content team will use the full power of Git, all behind a
                  beautiful UI.
                image: https://cc-dam.imgix.net/Image_-_Range_of_editors_cuyjmd.png
              - title: Intuitive editing
                description: >-
                  Edit content directly on your website. With CloudCannon’s
                  Visual Editor for SvelteKit, the whole team can contribute.
                image: >-
                  https://cc-dam.imgix.net/Image_-_Component-driven_workflows_mmwwfs.png
          styles:
            desktop:
              transform:
                scale: 1
                translate_x: 0
                translate_y: 0
                rotate: 0
                skew: 0
              block_alignment:
                align_block: left
              margin:
                top: 0
                left: 0
                bottom: 0
                right: 0
              position:
                top: 0
                left: 0
                bottom: 0
                right: 0
            tablet:
              transform:
                active: false
                scale: 1
                translate_x: 0
                translate_y: 0
                rotate: 0
                skew: 0
              block_alignment:
                active: false
                align_block: left
              margin:
                active: false
                top: 0
                left: 0
                bottom: 0
                right: 0
              position:
                active: false
                top: 0
                left: 0
                bottom: 0
                right: 0
            mobile:
              transform:
                active: false
                scale: 1
                translate_x: 0
                translate_y: 0
                rotate: 0
                skew: 0
              block_alignment:
                active: false
                align_block: left
              margin:
                active: false
                top: 0
                left: 0
                bottom: 0
                right: 0
              position:
                active: false
                top: 0
                left: 0
                bottom: 0
                right: 0
        - _bookshop_name: sections/container
          content:
            label: Want to learn more?
            blocks:
              - _bookshop_name: sections/two-column
                content:
                  left:
                    blocks:
                      - _bookshop_name: simple/heading
                        content:
                          text: Want to learn more about SvelteKit?
                        styles:
                          element: h3
                          width: normal
                          desktop:
                            text_alignment:
                              align: left
                            text_sizing:
                              text_size: normal
                            margin:
                              top: 0
                              bottom: 20
                          tablet:
                            text_alignment:
                              active: false
                              align: left
                            text_sizing:
                              active: false
                              text_size: big
                            margin:
                              active: false
                              top: 0
                              bottom: 0
                          mobile:
                            text_alignment:
                              active: false
                              align: left
                            text_sizing:
                              active: true
                              text_size: normal
                            margin:
                              active: true
                              top: 0
                              bottom: 15
                      - _bookshop_name: simple/text-block
                        content:
                          text_markdown: >-
                            We’ve got a range of resources to help you every
                            step of the way.
                        styles:
                          desktop:
                            text_alignment:
                              align: left
                            text_sizing:
                              text_size: normal
                            margin:
                              top: 0
                              bottom: 0
                            block_alignment:
                              align_block:
                          tablet:
                            text_alignment:
                              active: false
                              align: left
                            text_sizing:
                              active: false
                              text_size: normal
                            margin:
                              active: false
                              top: 0
                              bottom: 0
                            block_alignment:
                              active: false
                              align_block: left
                          mobile:
                            text_alignment:
                              active: false
                              align: left
                            text_sizing:
                              active: false
                              text_size: normal
                            margin:
                              active: false
                              top: 0
                              bottom: 0
                            block_alignment:
                              active: false
                              align_block: left
                          width: full
                  right:
                    blocks:
                      - _bookshop_name: simple/content-button
                        content:
                          url: /tutorials/
                          text: Tutorials
                        styles:
                          margin:
                            top: 0
                            bottom: 0
                          style: black
                      - _bookshop_name: simple/content-button
                        content:
                          url: /templates/
                          text: Templates
                        styles:
                          margin:
                            top: 12
                            bottom: 0
                          style: black
                      - _bookshop_name: simple/content-button
                        content:
                          url: /tutorials/sveltekit-beginner-tutorial-series/
                          text: SvelteKit Beginner Tutorial
                        styles:
                          margin:
                            top: 12
                            bottom: 0
                          style: black
                styles:
                  desktop:
                    columns:
                      type: split
                      width: 0
                      gap: 50
                      vertical_gap: 0
                    vertical_block_alignment:
                      v_align: center
                  tablet:
                    columns:
                      active: false
                      type: split
                      width: 0
                      gap: 0
                      vertical_gap: 0
                    vertical_block_alignment:
                      active: false
                      v_align: top
                  mobile:
                    columns:
                      active: true
                      type: stacked
                      width: 0
                      gap: 0
                      vertical_gap: 20
                    vertical_block_alignment:
                      active: false
                      v_align: top
          styles:
            background: night
            rounded: full
            size: small
            align: center
            desktop:
              margin:
                top: 100
                right: 0
                bottom: 0
                left: 0
              padding:
                top: 50
                right: 20
                bottom: 50
                left: 20
            tablet:
              margin:
                active: false
                top: 0
                right: 0
                bottom: 0
                left: 0
              padding:
                active: false
                top: 0
                right: 0
                bottom: 0
                left: 0
            mobile:
              margin:
                active: true
                top: 50
                right: 0
                bottom: 0
                left: 0
              padding:
                active: true
                top: 30
                right: 0
                bottom: 30
                left: 0
    styles:
      background: caramel
      rounded: top
      desktop:
        margin:
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          top: 90
          right: 0
          bottom: 90
          left: 0
      tablet:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
      mobile:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: true
          top: 30
          right: 0
          bottom: 30
          left: 0
      size: normal
      align: none
  - _bookshop_name: sections/container
    content:
      label: An entire ecosystem behind you
      blocks:
        - _bookshop_name: sections/two-column
          content:
            left:
              blocks:
                - _bookshop_name: simple/heading
                  content:
                    text: An entire ecosystem behind you
                  styles:
                    element: h2
                    width: normal
                    desktop:
                      text_alignment:
                        align: left
                      text_sizing:
                        text_size: big
                      margin:
                        top: 0
                        bottom: 30
                    tablet:
                      text_alignment:
                        active: false
                        align: center
                      text_sizing:
                        active: false
                        text_size: big
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                    mobile:
                      text_alignment:
                        active: false
                        align: center
                      text_sizing:
                        active: true
                        text_size: normal
                      margin:
                        active: true
                        top: 0
                        bottom: 15
                - _bookshop_name: simple/text-block
                  content:
                    text_markdown: >-
                      Take your editing team to the next level with
                      CloudCannon’s powerful content editing and publishing
                      workflows.


                      * **<a target="_blank" rel="noopener"
                      href="https://github.com/CloudCannon/bookshop">Bookshop</a>**
                      — create component-driven development workflows and enable
                      live rendering editing;

                      * **<a target="_blank" rel="noopener"
                      href="https://pagefind.app">Pagefind</a>** — static search
                      that scales;

                      * **<a target="_blank" rel="noopener"
                      href="https://reseed.app/">Reseed</a>** — integrate
                      multiple sites into a single domain;

                      * **<a target="_blank" rel="noopener"
                      href="https://rosey.app/">Rosey</a>** — manage
                      translations for localization and i18n;

                      *
                      **[Pagebreak](https://github.com/CloudCannon/pagebreak)**
                      — granular configuration for site pagination.
                  styles:
                    desktop:
                      text_alignment:
                        align: left
                      text_sizing:
                        text_size: normal
                      margin:
                        top: 0
                        bottom: 0
                      block_alignment:
                        align_block:
                    tablet:
                      text_alignment:
                        active: false
                        align: left
                      text_sizing:
                        active: false
                        text_size: normal
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                      block_alignment:
                        active: false
                        align_block: left
                    mobile:
                      text_alignment:
                        active: false
                        align: left
                      text_sizing:
                        active: false
                        text_size: normal
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                      block_alignment:
                        active: false
                        align_block: left
                    width: full
            right:
              blocks:
                - _bookshop_name: simple/image
                  content:
                    alt: Overview of Jamstack ecosystem
                    image: https://cc-dam.imgix.net/newecosystem.png
                  styles:
                    border:
                    rounded:
                    ontop:
                    width: full
                    desktop:
                      transform:
                        scale: 1
                        translate_x: 0
                        translate_y: 0
                        rotate: 0
                        skew: 0
                      block_alignment:
                        align_block: left
                      margin:
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                      position:
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                    tablet:
                      transform:
                        active: false
                        scale: 1
                        translate_x: 0
                        translate_y: 0
                        rotate: 0
                        skew: 0
                      block_alignment:
                        active: false
                        align_block: left
                      margin:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                      position:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                    mobile:
                      transform:
                        active: false
                        scale: 1
                        translate_x: 0
                        translate_y: 0
                        rotate: 0
                        skew: 0
                      block_alignment:
                        active: false
                        align_block: left
                      margin:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                      position:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
          styles:
            desktop:
              columns:
                type: fixed-fluid
                width: 450
                gap: 50
                vertical_gap: 0
              vertical_block_alignment:
                v_align: center
            tablet:
              columns:
                active: false
                type: split
                width: 0
                gap: 0
                vertical_gap: 0
              vertical_block_alignment:
                active: false
                v_align: top
            mobile:
              columns:
                active: true
                type: stacked
                width: 0
                gap: 0
                vertical_gap: 20
              vertical_block_alignment:
                active: false
                v_align: top
    styles:
      background: night
      rounded: none
      desktop:
        margin:
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          top: 90
          right: 0
          bottom: 90
          left: 0
      tablet:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
      mobile:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: true
          top: 30
          right: 0
          bottom: 90
          left: 0
      size: normal
      align: none
  - _bookshop_name: sections/container
    content:
      label: Everything you need
      blocks:
        - _bookshop_name: simple/spacer
          content:
            title:
          styles:
            desktop:
              space:
                size: 0
            tablet:
              space:
                active: false
                size: 0
            mobile:
              space:
                active: true
                size: 0
        - _bookshop_name: simple/quote
          content:
            quote: fb03c4ed-3d99-48f9-a5c7-21fe47dabd65
          styles:
            background: white
            border: false
            desktop:
              margin:
                top: 0
                bottom: 80
              block_alignment:
                align_block: center
              transform:
                scale: 1
                translate_x: 0
                translate_y: 0
                rotate: 0
                skew: 0
            tablet:
              margin:
                active: false
                top: 0
                bottom: 0
              block_alignment:
                active: false
                align_block: left
              transform:
                active: false
                scale: 1
                translate_x: 0
                translate_y: 0
                rotate: 0
                skew: 0
            mobile:
              margin:
                active: true
                top: 0
                bottom: 40
              block_alignment:
                active: false
                align_block: left
              transform:
                active: false
                scale: 1
                translate_x: 0
                translate_y: 0
                rotate: 0
                skew: 0
        - _bookshop_name: simple/heading
          content:
            text: Advance your content workflow with SvelteKit on CloudCannon
          styles:
            element: h2
            width: normal
            desktop:
              text_alignment:
                align: center
              text_sizing:
                text_size: big
              margin:
                top: 0
                bottom: 60
            tablet:
              text_alignment:
                active: false
                align: center
              text_sizing:
                active: false
                text_size: big
              margin:
                active: false
                top: 0
                bottom: 0
            mobile:
              text_alignment:
                active: false
                align: center
              text_sizing:
                active: true
                text_size: normal
              margin:
                active: true
                top: 0
                bottom: 15
        - _bookshop_name: simple/text-block
          content:
            text_markdown: Get up and going in minutes.
          styles:
            desktop:
              text_alignment:
                align: center
              text_sizing:
                text_size: normal
              margin:
                top: 0
                bottom: 60
              block_alignment:
                align_block: center
            tablet:
              text_alignment:
                active: false
                align: left
              text_sizing:
                active: false
                text_size: normal
              margin:
                active: false
                top: 0
                bottom: 0
              block_alignment:
                active: false
                align_block: left
            mobile:
              text_alignment:
                active: false
                align: left
              text_sizing:
                active: false
                text_size: normal
              margin:
                active: false
                top: 0
                bottom: 0
              block_alignment:
                active: false
                align_block: left
            width: medium
        - _bookshop_name: simple/steps
          content:
            steps:
              - title: Sync your SvelteKit site
                description: Connect your GitHub, GitLab, or Bitbucket repository.
                image: https://cc-dam.imgix.net/step-1-sync-7.svg
              - title: Configure your SvelteKit build
                description: >-
                  Add your environment variables, command line options, custom
                  plugins, and more to automate your build.
                image: https://cc-dam.imgix.net/Step 2 - Svelte.svg
              - title: Invite your content team to collaborate
                description: >-
                  Give your team access to update the content on the site, using
                  our SvelteKit CMS, and without the help of a developer.
                image: https://cc-dam.imgix.net/step-3-edit-8.svg
              - title: Go live with hosting
                description: >-
                  Delight your customers by hosting your site on a global CDN
                  with unparalleled reach and speed. Alternatively, bring your
                  own hosting provider, and CloudCannon will handle it
                  seamlessly.
                image: https://cc-dam.imgix.net/step-4-live-8.svg
          styles:
            desktop:
              margin:
                top: 0
                bottom: 0
            tablet:
              margin:
                active: false
                top: 0
                bottom: 0
            mobile:
              margin:
                active: false
                top: 0
                bottom: 0
    styles:
      background: ash
      rounded: top
      desktop:
        margin:
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          top: 90
          right: 0
          bottom: 90
          left: 0
      tablet:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
      mobile:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: true
          top: 30
          right: 0
          bottom: 60
          left: 0
      size: normal
      align: none
  - _bookshop_name: sections/container
    content:
      label: Case Studies
      blocks:
        - _bookshop_name: case-studies/row
          content:
            case_studies:
              - ee337cd8-7745-11ed-a1eb-0242ac120002
              - ff183750-7745-11ed-a1eb-0242ac120002
              - e1b72b3a-7745-11ed-a1eb-0242ac120002
          styles:
            desktop:
              margin:
                top: 0
                right: 0
                bottom: 50
                left: 0
              padding:
                top: 0
                right: 0
                bottom: 0
                left: 0
            tablet:
              margin:
                active: false
                top: 0
                right: 0
                bottom: 0
                left: 0
              padding:
                active: false
                top: 0
                right: 0
                bottom: 0
                left: 0
            mobile:
              margin:
                active: false
                top: 0
                right: 0
                bottom: 0
                left: 0
              padding:
                active: false
                top: 0
                right: 0
                bottom: 0
                left: 0
        - _bookshop_name: sections/two-column
          content:
            left:
              blocks:
                - _bookshop_name: simple/heading
                  content:
                    text: Why should you choose SvelteKit?
                  styles:
                    element: h2
                    width: normal
                    desktop:
                      text_alignment:
                        align: left
                      text_sizing:
                        text_size: big
                      margin:
                        top: 0
                        bottom: 30
                    tablet:
                      text_alignment:
                        active: false
                        align: center
                      text_sizing:
                        active: false
                        text_size: big
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                    mobile:
                      text_alignment:
                        active: false
                        align: center
                      text_sizing:
                        active: true
                        text_size: normal
                      margin:
                        active: true
                        top: 0
                        bottom: 15
                - _bookshop_name: simple/text-block
                  content:
                    text_markdown: >-
                      SvelteKit is a Svelte framework for generating
                      build-optimized static sites that load only the minimal
                      required code. With CloudCannon and SvelteKit, you can use
                      your existing Svelte expertise to maximum advantage for
                      your next e-commerce site, web app, or responsive
                      marketing site.


                      SvelteKit is under active development, and is already in
                      use powering major data visualization projects. With
                      CloudCannon’s Git-based CMS for SvelteKit, content teams
                      will easily build pages in our intuitive live visual
                      editor, while developers will benefit from a performant,
                      responsive solution.


                      Please note: CloudCannon’s SvelteKit support is focused on
                      SvelteKit’s SSG capabilities, and as such does not include
                      SSR.
                  styles:
                    desktop:
                      text_alignment:
                        align: left
                      text_sizing:
                        text_size: normal
                      margin:
                        top: 0
                        bottom: 0
                      block_alignment:
                        align_block:
                    tablet:
                      text_alignment:
                        active: false
                        align: left
                      text_sizing:
                        active: false
                        text_size: normal
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                      block_alignment:
                        active: false
                        align_block: left
                    mobile:
                      text_alignment:
                        active: false
                        align: left
                      text_sizing:
                        active: false
                        text_size: normal
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                      block_alignment:
                        active: false
                        align_block: left
                    width: full
            right:
              blocks:
                - _bookshop_name: simple/image
                  content:
                    alt: Faster and easier SSG
                    image: >-
                      https://cc-dam.imgix.net/Landing%20Pages/SvelteKit-screen_kzliu8.png
                  styles:
                    border:
                    rounded:
                    ontop:
                    width: full
                    desktop:
                      transform:
                        scale: 1
                        translate_x: 0
                        translate_y: 0
                        rotate: 0
                        skew: 0
                      block_alignment:
                        align_block: left
                      margin:
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                      position:
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                    tablet:
                      transform:
                        active: false
                        scale: 1
                        translate_x: 0
                        translate_y: 0
                        rotate: 0
                        skew: 0
                      block_alignment:
                        active: false
                        align_block: left
                      margin:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                      position:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                    mobile:
                      transform:
                        active: false
                        scale: 1
                        translate_x: 0
                        translate_y: 0
                        rotate: 0
                        skew: 0
                      block_alignment:
                        active: false
                        align_block: left
                      margin:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                      position:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
          styles:
            desktop:
              columns:
                type: split
                width: 0
                gap: 50
                vertical_gap: 0
              vertical_block_alignment:
                v_align: center
            tablet:
              columns:
                active: false
                type: split
                width: 0
                gap: 0
                vertical_gap: 0
              vertical_block_alignment:
                active: false
                v_align: top
            mobile:
              columns:
                active: true
                type: stacked
                width: 0
                gap: 0
                vertical_gap: 20
              vertical_block_alignment:
                active: false
                v_align: top
    styles:
      background: white
      rounded: top
      desktop:
        margin:
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          top: 90
          right: 0
          bottom: 90
          left: 0
      tablet:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
      mobile:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
      size: normal
      align: none
  - _bookshop_name: sections/container
    content:
      label: CTA
      blocks:
        - _bookshop_name: simple/heading
          content:
            text: Get started with CloudCannon
          styles:
            element: h2
            width: tight
            desktop:
              text_alignment:
                align: center
              text_sizing:
                text_size: big
              margin:
                top: 0
                bottom: 30
            tablet:
              text_alignment:
                active: false
                align: left
              text_sizing:
                active: false
                text_size: big
              margin:
                active: false
                top: 0
                bottom: 0
            mobile:
              text_alignment:
                active: false
                align: left
              text_sizing:
                active: true
                text_size: normal
              margin:
                active: true
                top: 0
                bottom: 15
        - _bookshop_name: simple/text-block
          content:
            text_markdown: >-
              Try out CloudCannon with a 14-day free trial, or get in touch with
              us for a demo.
          styles:
            desktop:
              text_alignment:
                align: center
              text_sizing:
                text_size: normal
              margin:
                top: 0
                bottom: 30
              block_alignment:
                align_block: center
            tablet:
              text_alignment:
                active: false
                align: left
              text_sizing:
                active: false
                text_size: normal
              margin:
                active: false
                top: 0
                bottom: 0
              block_alignment:
                active: false
                align_block: left
            mobile:
              text_alignment:
                active: false
                align: left
              text_sizing:
                active: false
                text_size: normal
              margin:
                active: true
                top: 0
                bottom: 30
              block_alignment:
                active: false
                align_block: left
            width: medium
        - _bookshop_name: simple/button-holder
          content:
            button_blocks:
              - _bookshop_name: simple/button
                content:
                  text: Try for free
                  link: https://app.cloudcannon.com/register?trial=cc_standard
                styles:
                  style: white
                  size: big
                  extra_classes:
              - _bookshop_name: simple/button
                content:
                  text: Contact us
                  link: https://cloudcannon.com/book-a-demo/
                styles:
                  style: outline-white
                  size: big
                  extra_classes:
          styles:
            desktop:
              margin:
                top: 16
                bottom: 0
              justify:
                align: center
            tablet:
              margin:
                active: false
                top: 0
                bottom: 0
              justify:
                active: false
                align: center
            mobile:
              margin:
                active: false
                top: 0
                bottom: 0
              justify:
                active: false
                align: center
    styles:
      background: cc-blue
      rounded: top
      desktop:
        margin:
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          top: 90
          right: 0
          bottom: 140
          left: 0
      tablet:
        margin:
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: true
          top: 100
          right: 0
          bottom: 100
          left: 0
      mobile:
        margin:
          active: true
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          active: true
          top: 30
          right: 0
          bottom: 90
          left: 0
      size: normal
      align: none
---
