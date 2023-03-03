---
_schema: default
title: Eleventy
layout: builder.html
permalink: /eleventy-cms/
description: >-
  Use CloudCannon as your Eleventy CMS to collaborate with your team to build
  incredibly fast static sites with a wide range of 11ty supported templating
  languages!
summary: >-
  The fastest JavaScript-based static site generator available, with support for
  a wide range of templating languages.
image: /images/icons/ssgs/11ty.svg
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
            text: A fully featured Eleventy CMS for everyone
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
              With CloudCannon as your 11ty CMS, your whole team can collaborate
              to create amazing websites.
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
                  text: Book a demo
                  link: https://easy-sky.cloudvent.net/book-a-demo/
                styles:
                  style: normal
                  size: big
                  extra_classes:
              - _bookshop_name: simple/button
                content:
                  text: Get started with a free trial
                  link: /https://app.cloudcannon.com/editor
                styles:
                  style: outline
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
      label: It's all right here
      blocks:
        - _bookshop_name: sections/two-column
          content:
            left:
              blocks:
                - _bookshop_name: simple/heading
                  content:
                    text: It's all right here
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
                        active: true
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
                      CMS for 11ty.
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
                        active: true
                        align: center
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
                active: true
                type: stacked
                width: 0
                gap: 0
                vertical_gap: 30
              vertical_block_alignment:
                active: false
                v_align: top
            mobile:
              columns:
                active: true
                type: stacked
                width: 0
                gap: 0
                vertical_gap: 30
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
          top: 28
          right: 0
          bottom: 90
          left: 0
  - _bookshop_name: sections/container
    content:
      label: Works with any Eleventy site
      blocks:
        - _bookshop_name: sections/two-column
          content:
            left:
              blocks:
                - _bookshop_name: simple/image
                  content:
                    alt: Faster and easier on 11ty
                    image: https://cc-dam.imgix.net/image_9_yqbchd.png
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
                    text: Works with any Eleventy site
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
                        active: true
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
                      CloudCannon syncs your 11ty website from your Git
                      repository, manages your build process, and enables your
                      whole team to work together, faster. Everything can be
                      updated by content editors with CloudCannon.
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
                        active: true
                        align: center
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
                active: true
                type: stacked
                width: 0
                gap: 0
                vertical_gap: 30
              vertical_block_alignment:
                active: false
                v_align: top
            mobile:
              columns:
                active: true
                type: stacked
                width: 0
                gap: 0
                vertical_gap: 30
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
          top: 100
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
              Take your editing team to the next level with CloudCannon’s
              powerful content editing and publishing workflows.
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
              - title: Publishing workflows
                description: >-
                  Everything syncs back to Git so your development and content
                  editing teams can always collaborate in sync.
                image: >-
                  https://cc-dam.imgix.net/Image_-_Publishing_workflows_yf5gjl.png
              - title: Range of editors
                description: >-
                  Everything syncs back to Git so your development and content
                  editing teams can always collaborate in sync.
                image: https://cc-dam.imgix.net/Image_-_Range_of_editors_cuyjmd.png
              - title: Component-driven workflows
                description: >-
                  Everything syncs back to Git so your development and content
                  editing teams can always collaborate in sync.
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
                          text: Want to learn more about 11ty?
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
                              active: false
                              top: 0
                              bottom: 0
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
                          url: >-
                            /tutorials/eleventy-cms--get-started-with-cloudcannon/
                          text: 11ty + CloudCannon Guide
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
                top: 30
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
                        active: true
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
                    image: https://cc-dam.imgix.net/newecosystem-2.png
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
                active: true
                type: stacked
                width: 0
                gap: 0
                vertical_gap: 30
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
          bottom: 60
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
            case_study_quote: fb03c4ed-3d99-48f9-a5c7-21fe47dabd65
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
            text: Advance your content workflow with Eleventy on CloudCannon
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
        - _bookshop_name: simple/steps
          content:
            steps:
              - title: Sync your Eleventy site
                description: Connect your GitHub, GitLab, or Bitbucket repository.
                link:
                  text:
                  url:
                  icon_path:
                  icon_color:
                image: https://cc-dam.imgix.net/Step 1 - Sync.svg
              - title: Configure your Eleventy build
                description: >-
                  Add your environment variables, command line options, custom
                  plugins, and more to automate your build.
                link:
                  text:
                  url:
                  icon_path:
                  icon_color:
                image: https://cc-dam.imgix.net/Step 2- 11ty.svg
              - title: Invite your content team to collaborate
                description: >-
                  Start collaborating with your team. Edit content right on the
                  page.
                link:
                  text:
                  url:
                  icon_path:
                  icon_color:
                image: https://cc-dam.imgix.net/Step 3 - Edit.svg
              - title: Go live with hosting
                description: >-
                  Delight your customers by hosting your site on a global CDN
                  with unparalleled reach and speed.
                link:
                  text:
                  url:
                  icon_path:
                  icon_color:
                image: https://cc-dam.imgix.net/Step 4 - Live.svg
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
          bottom: 120
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
                    text: Why should you choose Eleventy?
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
                        active: true
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
                        active: false
                        top: 0
                        bottom: 0
                - _bookshop_name: simple/text-block
                  content:
                    text_markdown: >-
                      Eleventy is billed as the “simpler static site generator”,
                      and was created as a zero-config JavaScript alternative to
                      Jekyll. It has a growing reputation for its ease of use:
                      it works well with existing project files and multiple
                      data sources, maintains low build times, and also features
                      logical and intuitive hierarchies.


                      Eleventy is fast, lets you stay flexible, doesn’t require
                      any client-side JavaScript, and doesn’t require you to
                      learn any specific frameworks like Vue or React.Built with
                      JavaScript and easily installed via npm,


                      Eleventy is also extremely flexible in its range of
                      template languages: HTML, Markdown, JavaScript, Liquid,
                      Nunjucks, Handlebars, Mustache, EJS, Haml, and Pug. Pick
                      one, or if your team has a range of experience, use as
                      many as you want — all within a single project on your
                      custom domain. With Eleventy’s independent template
                      engines, your content can remain firmly decoupled for any
                      future transitions.
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
                        active: true
                        align: center
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
                    image: https://cc-dam.imgix.net/Group_18528_j98j2i.png
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
                active: true
                type: stacked
                width: 0
                gap: 0
                vertical_gap: 30
              vertical_block_alignment:
                active: false
                v_align: top
            mobile:
              columns:
                active: true
                type: stacked
                width: 0
                gap: 0
                vertical_gap: 30
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
                top: 0
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
