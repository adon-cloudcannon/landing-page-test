---
_schema: default
title: Astro
layout: builder.html
image: /images/icons/ssgs/astro.svg
summary: Bring your own component framework. Astro offers first-class support for front-end tools like React, Vue, Svelte, and Tailwind CSS. 
permalink: /astro-cms/
content_blocks:
  - _bookshop_name: sections/container
    content:
      label: Hero
      blocks:
        - _bookshop_name: simple/heading
          content:
            text: The Astro CMS you've been waiting for
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
                bottom: 35
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
                text_size: big
              margin:
                active: false
                top: 0
                bottom: 0
        - _bookshop_name: simple/text-block
          content:
            text_markdown: >-
              With CloudCannon as your Astro CMS, your whole team can
              collaborate to create incredibly fast static sites with React,
              Preact, Vue, and Svelte components — and more!
          styles:
            desktop:
              text_alignment:
                align: center
              text_sizing:
                text_size: biggest
              margin:
                top: 0
                bottom: 35
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
        - _bookshop_name: simple/button-holder
          content:
            button_blocks:
              - _bookshop_name: simple/button
                content:
                  text: Try for free
                  link: /
                styles:
                  style: normal
                  size: big
                  extra_classes:
          styles:
            desktop:
              margin:
                top: 0
                bottom: 50
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
            image: >-
              https://res.cloudinary.com/dahpdufoq/image/upload/v1674660604/marketing-site/hero_image_w2idkd.png
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
          top: 130
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
          top: 60
          right: 0
          bottom: 40
          left: 0
  - _bookshop_name: sections/container
    content:
      label: All together now
      blocks:
        - _bookshop_name: sections/two-column
          content:
            left:
              blocks:
                - _bookshop_name: simple/heading
                  content:
                    text: All together now
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
                        active: false
                        text_size: big
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                - _bookshop_name: simple/text-block
                  content:
                    text_markdown: >-
                      Build and host the best performing sites on the web.
                      CloudCannon gives you everything you need to create and
                      manage your content for your Astro project, all on one
                      platform.
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
                    image: >-
                      https://res.cloudinary.com/dahpdufoq/image/upload/v1674883707/marketing-site/image_8_utyigb.png
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
                gap: 20
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
          top: 60
          right: 0
          bottom: 100
          left: 0
  - _bookshop_name: sections/container
    content:
      label: Works with your existing Astro static sites
      blocks:
        - _bookshop_name: sections/two-column
          content:
            left:
              blocks:
                - _bookshop_name: simple/image
                  content:
                    alt: Faster and easier on Astro
                    image: >-
                      https://res.cloudinary.com/dahpdufoq/image/upload/v1675213435/marketing-site/Landing%20Pages/Group_18915_afi1bb.png
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
                    text: Works with your existing Astro static sites
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
                        active: false
                        text_size: big
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                - _bookshop_name: simple/text-block
                  content:
                    text_markdown: >-
                      CloudCannon syncs your Astro website directly from your
                      Git repository, and enables developers to work together,
                      faster. As for your content team, they won’t need
                      technical knowledge. From Markdown and HTML, to sections
                      and data files, everything can be updated by content
                      editors with CloudCannon. Best of all, no one needs to
                      learn how to use Git.
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
                gap: 20
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
          top: 80
          right: 0
          bottom: 120
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
                active: false
                text_size: big
              margin:
                active: false
                top: 0
                bottom: 0
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
                bottom: 40
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
            width: full
        - _bookshop_name: simple/image-cycle
          content:
            rows:
              - title: Git Sync
                description: >-
                  Everything syncs back to your Git repo, so development and
                  content editing teams can always collaborate in sync.
                image: >-
                  https://res.cloudinary.com/dahpdufoq/image/upload/v1674920252/marketing-site/image_-_Git-based_CMS_yv8lsy.png
              - title: Catered to content editors
                description: >-
                  Empower your editors with our CMS for Astro, while you and
                  other developers work in parallel with them.
                image: >-
                  https://res.cloudinary.com/dahpdufoq/image/upload/v1675005681/marketing-site/Image_-_Publishing_workflows_yf5gjl.png
              - title: Robust publishing
                description: >-
                  Prepare branches for staging and production workflows. Your
                  content team will use the full power of Git, all behind a
                  beautiful UI.
                image: >-
                  https://res.cloudinary.com/dahpdufoq/image/upload/v1675005681/marketing-site/Image_-_Range_of_editors_cuyjmd.png
              - title: Intuitive editing
                description: >-
                  Edit content directly on your website. With CloudCannon’s
                  Visual Editor for Astro, the whole team can contribute.
                image: >-
                  https://res.cloudinary.com/dahpdufoq/image/upload/v1675005680/marketing-site/Image_-_Component-driven_workflows_mmwwfs.png
              - title: 'Structured content and granular control '
                description: >-
                  Create a library of components for your content editors to
                  build new pages using our Astro CMS. 
                image:
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
                          text: Want to learn more about Astro?
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
                              active: false
                              text_size: big
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
                      - _bookshop_name: simple/button-holder
                        content:
                          button_blocks:
                            - _bookshop_name: simple/button
                              content:
                                text: Explore all
                                link: /
                              styles:
                                style: outline-white
                                size: normal
                                extra_classes:
                        styles:
                          desktop:
                            margin:
                              top: 20
                              bottom: 0
                            justify:
                              align: left
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
                  right:
                    blocks:
                      - _bookshop_name: simple/content-button
                        content:
                          url: /learn/
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
                          url:
                          text: Astro + CloudCannon Guide
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
                      gap: 20
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
                active: false
                top: 0
                right: 0
                bottom: 0
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
          top: 80
          right: 0
          bottom: 80
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
                        active: false
                        text_size: big
                      margin:
                        active: false
                        top: 0
                        bottom: 0
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
                    image: >-
                      https://res.cloudinary.com/dahpdufoq/image/upload/v1674953870/marketing-site/Group_18619_ed58la.png
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
                gap: 20
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
                active: false
                type: split
                width: 0
                gap: 0
                vertical_gap: 0
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
          top: 80
          right: 0
          bottom: 320
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
          top: 60
          right: 0
          bottom: 100
          left: 0
      size: normal
      align: none
  - _bookshop_name: sections/container
    content:
      label: Advance your content workflow with Astro on CloudCannon
      blocks:
        - _bookshop_name: simple/spacer
          content:
            title:
          styles:
            desktop:
              space:
                size: -242
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
            quote: >-
              CloudCannon provides a quality editing interface for our marketing
              team while allowing developers to use the tools and workflows they
              know.
            name: Sam Harnack
            position: Technical Marketing Director
            company: Twitch
            image: >-
              https://res.cloudinary.com/dahpdufoq/image/upload/v1674695015/marketing-site/ezgif-2-2c6fd480d3-removebg-preview_1_hxgjs2.png
            logo: /images/logos/twitch.svg
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
            text: Everything you need
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
                active: false
                text_size: big
              margin:
                active: false
                top: 0
                bottom: 0
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
              - title: Sync your Astro site
                description: Connect your GitHub, GitLab or Bitbucket repository.
                image: >-
                  https://res.cloudinary.com/dahpdufoq/image/upload/v1675216045/marketing-site/Landing%20Pages/Git-options-screen_o1xt32.png
              - title: Configure your Astro build
                description: >-
                  Add your environment variables, command line options, custom
                  plugins, and more to automate your build.
                image: >-
                  https://res.cloudinary.com/dahpdufoq/image/upload/v1675213365/marketing-site/Landing%20Pages/Astro-file-detected_g7pnzx.png
              - title: Invite your content team to collaborate
                description: >-
                  Give your team access to update the content on the site, using
                  our Astro CMS, and without the help of a developer.
                image: >-
                  https://res.cloudinary.com/dahpdufoq/image/upload/v1675211602/marketing-site/Landing%20Pages/Group_18535_ciyft9.png
              - title: Go live with hosting
                description: >-
                  Delight your customers by hosting your site on a global CDN
                  with unparalleled reach and speed. Alternatively, bring your
                  own hosting provider, and CloudCannon will handle it
                  seamlessly.
                image: >-
                  https://res.cloudinary.com/dahpdufoq/image/upload/v1675211332/marketing-site/Landing%20Pages/Group_18541_se5b9p.png
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
          top: 80
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
          top: 80
          right: 0
          bottom: 80
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
                    text: Why should you choose Astro?
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
                        active: false
                        text_size: big
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                - _bookshop_name: simple/text-block
                  content:
                    text_markdown: >-
                      Astro is a powerful and lightweight static site generator
                      that lets developers mix and match a variety of popular
                      frameworks, including React, Preact, Svelte, Vue, SolidJS,
                      AlpineJS and Lit.


                      Astro automatically renders components to HTML at build
                      time, stripping away all unnecessary JavaScript and
                      keeping every site fast by default. With partial
                      hydration, Astro also lets you hydrate individual
                      interactive components on the page.
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
                      https://res.cloudinary.com/dahpdufoq/image/upload/v1675213278/marketing-site/Landing%20Pages/Astro-site_vdlhol.png
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
                gap: 20
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
          top: 80
          right: 0
          bottom: 100
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
                active: false
                text_size: big
              margin:
                active: false
                top: 0
                bottom: 0
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
                bottom: 25
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
        - _bookshop_name: simple/button-holder
          content:
            button_blocks:
              - _bookshop_name: simple/button
                content:
                  text: Try for free
                  link: /
                styles:
                  style: white
                  size: big
                  extra_classes:
              - _bookshop_name: simple/button
                content:
                  text: Contact us
                  link: /
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
          top: 180
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
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
      size: normal
      align: none
---
