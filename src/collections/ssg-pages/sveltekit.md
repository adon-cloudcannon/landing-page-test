---
_schema: default
title: SvelteKit CMS
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
                  text: Book a demo
                  link: /book-a-demo/
                styles:
                  style: normal
                  size: big
                  extra_classes:
              - _bookshop_name: simple/button
                content:
                  text: Get started with a free trial
                  link: https://app.cloudcannon.com/register?trial=cc_standard
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
        - _bookshop_name: simple/video
          content:
            title: CloudCannon CMS demo video
            url: >-
              https://player.vimeo.com/progressive_redirect/playback/760400768/rendition/720p/file.mp4?loc=external&signature=8acbfc19bc57c1b77bc21aaeb04d362b706a412f99668afd03298d05b63c4db9
            autoplay: true
            loop: true
          styles:
            desktop:
              transform:
                scale: 1
                translate_x: 0
                translate_y: 0
                rotate: 0
                skew: 0
              block_alignment:
                align_block: center
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
        - _bookshop_name: simple/fold
        - _bookshop_name: simple/image
          content:
            alt: G2 Awards
            image: https://cc-dam.imgix.net/G2-awards+%281%29.svg
          styles:
            border:
            rounded:
            ontop:
            width: full
            pixel_width:
            max_width:
            desktop:
              visibility:
                hide: false
              transform:
                scale: 0.8
                translate_x: 0
                translate_y: 0
                rotate: 0
                skew: 0
              block_alignment:
                align_block: center
              margin:
                top: 90
                bottom: 0
              position:
                top: 0
                left: 0
                bottom: 0
                right: 0
            tablet:
              visibility:
                active: false
                hide: false
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
                bottom: 0
              position:
                active: false
                top: 0
                left: 0
                bottom: 0
                right: 0
            mobile:
              visibility:
                active: true
                hide: true
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
                bottom: 0
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
          top: 60
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
                      CloudCannon syncs your SvelteKit website from your Git
                      repository and enables developers to work together,
                      faster. And as for your content team, they won’t need
                      technical knowledge. From Markdown and HTML, to sections
                      and data files, everything can be updated by content
                      editors with CloudCannon.


                      To get started quickly, there are also a range of
                      production-ready [SvelteKit templates](/templates/) to
                      choose from.
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
          top: 60
          right: 0
          bottom: 90
          left: 0
      size: normal
      align: none
  - _bookshop_name: sections/container
    content:
      label: Git-based CMS
      blocks:
        - _bookshop_name: sections/two-column
          content:
            left:
              blocks:
                - _bookshop_name: simple/heading
                  content:
                    text: Stay in sync with a Git-based CMS
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
                      More than a headless CMS. CloudCannon's Git-based CMS
                      helps your team stay in sync with a unified workflow.


                      * Content teams commit back to your Git repository through
                      CloudCannon's visual editor.

                      * Create branches for significant changes to prevent
                      blocking staging environments.

                      * Review changes on a site and merge them into another
                      branch.

                      * Roll a site back with full version control of both code
                      and content.
                  styles:
                    width: full
                    desktop:
                      text_alignment:
                        align: left
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
                - _bookshop_name: simple/button-holder
                  content:
                    button_blocks:
                      - _bookshop_name: simple/button
                        content:
                          text: Book a demo
                          link: https://cloudcannon.com/book-a-demo/
                        styles:
                          style: normal
                          size: normal
                          extra_classes:
                      - _bookshop_name: simple/button
                        content:
                          text: Try for free
                          link: >-
                            https://app.cloudcannon.com/register?trial=cc_standard
                        styles:
                          style: outline-white
                          size: normal
                          extra_classes:
                  styles:
                    desktop:
                      margin:
                        top: 0
                        bottom: 0
                      justify:
                        align: start
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
                - _bookshop_name: simple/image
                  content:
                    alt: Git workflow
                    image: https://cc-dam.imgix.net/Git+workflows-developer2.png
                  styles:
                    border:
                    rounded:
                    ontop:
                    width: full
                    pixel_width:
                    max_width:
                    desktop:
                      visibility:
                        hide: false
                      transform:
                        scale: 1.2
                        translate_x: 0
                        translate_y: 0
                        rotate: 0
                        skew: 0
                      block_alignment:
                        align_block: left
                      margin:
                        top: 0
                        bottom: 0
                      position:
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                    tablet:
                      visibility:
                        active: false
                        hide: false
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
                        bottom: 0
                      position:
                        active: false
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                    mobile:
                      visibility:
                        active: false
                        hide: false
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
                        bottom: 0
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
                v_align: top
    styles:
      background: night
      rounded: top
      size: normal
      align: none
      shadow: false
      desktop:
        margin:
          top: 0
          right: 0
          bottom: 0
          left: 0
        padding:
          top: 90
          right: 0
          bottom: 160
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
  - _bookshop_name: sections/container
    content:
      label: Advance your content workflow
      blocks:
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
                top: 60
                bottom: 30
        - _bookshop_name: simple/steps
          content:
            steps:
              - title: Sync your SvelteKit site
                description: Connect your GitHub, GitLab, or Bitbucket repository.
                link:
                  text:
                  url:
                  icon_path:
                  icon_color:
                image: https://cc-dam.imgix.net/step1new.svg
              - title: Configure your SvelteKit build
                description: >-
                  Add your environment variables, command line options, custom
                  plugins, and more to automate your build.
                link:
                  text:
                  url:
                  icon_path:
                  icon_color:
                image: https://cc-dam.imgix.net/step2svelte.svg
              - title: Invite your content team to collaborate
                description: >-
                  Give your team access to update the content on the site, using
                  our SvelteKit CMS, and without the help of a developer.
                link:
                  text:
                  url:
                  icon_path:
                  icon_color:
                image: https://cc-dam.imgix.net/step3new.svg
              - title: Go live with hosting
                description: >-
                  Delight your customers by hosting your site on a global CDN
                  with unparalleled reach and speed. Alternatively, bring your
                  own hosting provider, and CloudCannon will handle it
                  seamlessly.
                link:
                  text:
                  url:
                  icon_path:
                  icon_color:
                image: https://cc-dam.imgix.net/step4new.svg
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
          bottom: 350
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
          bottom: 90
          left: 0
      size: normal
      align: none
  - _bookshop_name: sections/container
    content:
      label: An entire ecosystem behind you
      blocks:
        - _bookshop_name: simple/spacer
          content:
            title:
          styles:
            desktop:
              space:
                size: -270
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
            background: night
            border: false
            desktop:
              margin:
                top: 0
                bottom: 90
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
                align_block: center
              transform:
                active: false
                scale: 1
                translate_x: 0
                translate_y: 0
                rotate: 0
                skew: 0
            mobile:
              margin:
                active: false
                top: 0
                bottom: 0
              block_alignment:
                active: false
                align_block: center
              transform:
                active: false
                scale: 1
                translate_x: 0
                translate_y: 0
                rotate: 0
                skew: 0
        - _bookshop_name: sections/two-column
          content:
            left:
              blocks:
                - _bookshop_name: simple/heading
                  content:
                    text: CloudCannon's open source ecosystem
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
                      CloudCannon’s powerful open source content editing and
                      publishing workflows.


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
                width: 600
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
          top: 60
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
        - _bookshop_name: simple/heading
          content:
            text: Trusted by world leading companies
          styles:
            element: h3
            width: normal
            desktop:
              text_alignment:
                align: center
              text_sizing:
                text_size: normal
              margin:
                top: 120
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
        - _bookshop_name: simple/logo-ticker
          content:
            logo_blocks:
              - _bookshop_name: simple/logo
                content:
                  logo: https://cc-dam.imgix.net/Netflix-og.svg
                  name: Netflix
                  url:
                styles:
                  desktop:
                    visibility:
                      hide: false
                    position:
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      scale: 1.7
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
                  tablet:
                    visibility:
                      active: false
                      hide: true
                    position:
                      active: false
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      active: false
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
                  mobile:
                    visibility:
                      active: false
                      hide: true
                    position:
                      active: false
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      active: false
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
              - _bookshop_name: simple/logo
                content:
                  logo: https://cc-dam.imgix.net/Twitch-og.svg
                  name: Twitch
                  url:
                styles:
                  desktop:
                    visibility:
                      hide: false
                    position:
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      scale: 1.5
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
                  tablet:
                    visibility:
                      active: false
                      hide: true
                    position:
                      active: false
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      active: false
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
                  mobile:
                    visibility:
                      active: false
                      hide: true
                    position:
                      active: false
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      active: false
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
              - _bookshop_name: simple/logo
                content:
                  logo: https://cc-dam.imgix.net/hnry-logo.svg
                  name: Hnry
                  url:
                styles:
                  desktop:
                    visibility:
                      hide: false
                    position:
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
                  tablet:
                    visibility:
                      active: false
                      hide: true
                    position:
                      active: false
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      active: false
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
                  mobile:
                    visibility:
                      active: false
                      hide: true
                    position:
                      active: false
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      active: false
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
              - _bookshop_name: simple/logo
                content:
                  logo: https://cc-dam.imgix.net/Papercut-logo.svg
                  name: Papercut
                  url:
                styles:
                  desktop:
                    visibility:
                      hide: false
                    position:
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      scale: 1.2
                      translate_x: 0
                      translate_y: -4
                      rotate: 0
                      skew: 0
                  tablet:
                    visibility:
                      active: false
                      hide: true
                    position:
                      active: false
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      active: false
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
                  mobile:
                    visibility:
                      active: false
                      hide: true
                    position:
                      active: false
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      active: false
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
              - _bookshop_name: simple/logo
                content:
                  logo: https://cc-dam.imgix.net/Ocupop_logo.svg
                  name: Ocupop
                  url:
                styles:
                  desktop:
                    visibility:
                      hide: false
                    position:
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
                  tablet:
                    visibility:
                      active: false
                      hide: true
                    position:
                      active: false
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      active: false
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
                  mobile:
                    visibility:
                      active: false
                      hide: true
                    position:
                      active: false
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      active: false
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
              - _bookshop_name: simple/logo
                content:
                  logo: https://cc-dam.imgix.net/Cubicflow-logo.svg
                  name: Cubicflow
                  url:
                styles:
                  desktop:
                    visibility:
                      hide: false
                    position:
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
                  tablet:
                    visibility:
                      active: false
                      hide: true
                    position:
                      active: false
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      active: false
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
                  mobile:
                    visibility:
                      active: false
                      hide: true
                    position:
                      active: false
                      top: 0
                      right: 0
                      bottom: 0
                      left: 0
                    transform:
                      active: false
                      scale: 1
                      translate_x: 0
                      translate_y: 0
                      rotate: 0
                      skew: 0
          styles:
            background_mode: false
            desktop:
              margin:
                top: 0
                right: 0
                bottom: 30
                left: 0
            tablet:
              margin:
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
          top: 60
          right: 0
          bottom: 90
          left: 0
      size: normal
      align: none
  - _bookshop_name: sections/container
    content:
      label: Learning resources
      blocks: []
    styles:
      background: caramel
      rounded: top
      size: normal
      align: none
      shadow: false
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
          active: false
          top: 0
          right: 0
          bottom: 0
          left: 0
  - _bookshop_name: sections/container
    content:
      label: Why SvelteKit
      blocks:
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
                        active: true
                        top: 0
                        left: 0
                        bottom: 45
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
          top: 60
          right: 0
          bottom: 90
          left: 0
      size: normal
      align: none
  - _bookshop_name: sections/container
    content:
      label: Case Studies
      blocks:
        - _bookshop_name: simple/heading
          content:
            text: A SvelteKit CMS you can trust
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
              Find out how world leading companies are successfully leveraging
              CloudCannon's live visual editing. Learn how the best CMS for
              SvelteKit can help you and your team.&nbsp;
          styles:
            width: medium
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
          top: 60
          right: 0
          bottom: 90
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
