---
_schema: default
title: Eleventy CMS
layout: builder.html
permalink: /eleventy-cms/
description: >-
  Use CloudCannon as your Eleventy CMS to collaborate with your team to build
  incredibly fast static sites with a wide range of 11ty-supported templating
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
search_bucket: Company
content_blocks:
  - _bookshop_name: sections/container
    content:
      label: Hero
      blocks:
        - _bookshop_name: simple/heading
          content:
            text: The Eleventy CMS for live visual editing
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
              Reap the performance benefits of the static site generator 11ty,
              while ensuring your content editors can efficiently edit and
              create new pages with CloudCannon's 11ty CMS.&nbsp;
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
            title: CloudCannon demo video
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
                bottom: 90
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
            width: normal
            pixel_width:
            max_width:
            desktop:
              visibility:
                hide: false
              transform:
                scale: 0.8
                translate_x: -40
                translate_y: 0
                rotate: 0
                skew: 0
              block_alignment:
                align_block: left
              margin:
                top: 0
                bottom: 180
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
      label: for developers
      blocks:
        - _bookshop_name: sections/two-column
          content:
            left:
              blocks:
                - _bookshop_name: simple/emoji-heading
                  content:
                    title: Build 11ty sites your way
                    emoji:
                    sub_title: CloudCannon for developers
                  styles:
                    width:
                    element: h2
                    desktop:
                      text_alignment:
                        align: left
                      margin:
                        top: 0
                        bottom: 0
                    tablet:
                      text_alignment:
                        active: false
                        align: center
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                    mobile:
                      text_alignment:
                        active: false
                        align: center
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                - _bookshop_name: simple/text-block
                  content:
                    text_markdown: >-
                      CloudCannon’s CMS for 11ty has everything you need to
                      build, edit, and host the best performing sites on the
                      web.


                      * Focus on building custom components rather than
                      hand-holding editors through changes.

                      * Build locally with your favorite tools and frameworks.

                      * Sync changes to content editors with a Git push.
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
          top: 60
          right: 0
          bottom: 90
          left: 0
  - _bookshop_name: sections/container
    content:
      label: For editors
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
                - _bookshop_name: simple/emoji-heading
                  content:
                    title: The best CMS for 11ty websites
                    emoji:
                    sub_title: CloudCannon for editors
                  styles:
                    width:
                    element: h2
                    desktop:
                      text_alignment:
                        align: left
                      margin:
                        top: 0
                        bottom: 0
                    tablet:
                      text_alignment:
                        active: false
                        align: center
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                    mobile:
                      text_alignment:
                        active: false
                        align: center
                      margin:
                        active: false
                        top: 0
                        bottom: 0
                - _bookshop_name: simple/text-block
                  content:
                    text_markdown: >-
                      CloudCannon’s CMS for Eleventy makes content management
                      easy for your marketing team and content editors.


                      * Use custom components to build new 11ty site pages
                      visually.

                      * Share and review changes with a preview site.

                      * Publish content confidently with a push of a button.

                      * Make changes without bugging a developer, no technical
                      knowledge needed.
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
                      CloudCannon's Visual Editor.

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
                        bottom: 30
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
                    image: https://cc-dam.imgix.net/Git+workflows-developer.png
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
                        align_block: center
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
                v_align: top
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
      label: Advance your content workflow
      blocks:
        - _bookshop_name: simple/heading
          content:
            text: Advance your Eleventy content workflow
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
        - _bookshop_name: simple/text-block
          content:
            text_markdown: >-
              CloudCannon's 11ty CMS takes your web development workflow to the
              next level.
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
                image: https://cc-dam.imgix.net/step1new.svg
              - title: Configure your Eleventy build
                description: >-
                  Add your environment variables, command line options, custom
                  plugins, and more to automate your build.
                link:
                  text:
                  url:
                  icon_path:
                  icon_color:
                image: https://cc-dam.imgix.net/step2eleventy.svg
              - title: Invite your content team to collaborate
                description: >-
                  Start collaborating with your team. Edit content right on the
                  page.
                link:
                  text:
                  url:
                  icon_path:
                  icon_color:
                image: https://cc-dam.imgix.net/step3new.svg
              - title: Go live with hosting
                description: >-
                  Delight your customers by hosting your site on a global CDN
                  with unparalleled reach and speed.
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
          bottom: 300
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
                    text: An open source ecosystem behind you
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
                      Upgrade your static sites with CloudCannon’s powerful open source tools for a wide range of SSGs.


                      * **<a target="_blank"
                      href="https://github.com/CloudCannon/bookshop">Bookshop</a>**
                      — create component-driven development workflows and enable
                      live rendering editing;

                      * **<a target="_blank"
                      href="https://pagefind.app">Pagefind</a>** — static search
                      that scales;

                      * **<a target="_blank"
                      href="https://reseed.app/">Reseed</a>** — integrate
                      multiple sites into a single domain;

                      * **<a target="_blank"
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
      background: ash
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
            width: medium
        - _bookshop_name: simple/image-cycle
          content:
            rows:
              - title: Git-based CMS
                description: >-
                  Everything syncs back to Git so your development and content
                  editing teams can always collaborate in sync.
                image: https://cc-dam.imgix.net/git-sync-r.png
              - title: 'Catered to content editors '
                description: >-
                  Empower your editors by building a library of components to
                  create new pages with ease.
                image: >-
                  https://cc-dam.imgix.net/Image_-_Publishing_workflows_yf5gjl.png
              - title: 'Robust publishing '
                description: >-
                  Prepare branches for staging and production workflows. Your
                  content team will use the full power of Git, all behind a
                  beautiful UI.
                image: https://cc-dam.imgix.net/Image_-_Range_of_editors_cuyjmd.png
              - title: 'Intuitive editing '
                description: >-
                  Edit content directly on your website. With CloudCannon’s
                  Visual Editor for 11ty, the whole team can contribute.
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
            text: Trusted by world-leading companies
          styles:
            element: h3
            width: normal
            desktop:
              text_alignment:
                align: center
              text_sizing:
                text_size: normal
              margin:
                top: 90
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
                      scale: 1.4
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
                  name: hnry
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
                  logo: https://cc-dam.imgix.net/Papercut-og.svg
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
                      scale: 1.7
                      translate_x: 0
                      translate_y: 3
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
                bottom: 60
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
                active: true
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
          top: 60
          right: 0
          bottom: 90
          left: 0
      size: normal
      align: none
  - _bookshop_name: sections/container
    content:
      label: learning resources
      blocks:
        - _bookshop_name: simple/heading
          content:
            text: Learn more with 11ty and CloudCannon
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
                bottom: 0
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
                active: true
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
              Need help with Eleventy? Whether it's Eleventy specific
              documentation, 11ty tutorials, or 11ty themes that you're after,
              CloudCannon has you covered!
          styles:
            width: medium
            desktop:
              text_alignment:
                align: center
              text_sizing:
                text_size: normal
              margin:
                top: 30
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
        - _bookshop_name: simple/cards
          content:
            cards:
              - image:
                icon:
                  active: true
                  icon_path: outline/document-check
                  icon_color: blue
                title: Eleventy starter guide
                link: >-
                  https://cloudcannon.com/documentation/guides/eleventy-cms-get-started-with-cloudcannon/
                description: >-
                  Configure your 11ty site on CloudCannon with ease so you can
                  focus on building custom components.
              - image:
                icon:
                  active: true
                  icon_path: outline/cog
                  icon_color: red
                title: Eleventy beginner tutorial
                link: https://cloudcannon.com/tutorials/eleventy-beginner-tutorial/
                description: Learn the basics of Eleventy in this six-part tutorial series.
              - image:
                icon:
                  active: true
                  icon_path: outline/paint-brush
                  icon_color: purple
                title: Eleventy templates
                link: https://cloudcannon.com/templates/
                description: >-
                  Explore our library of free CloudCannon-ready themes for your
                  11ty project. 
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
          active: true
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
      label: Why Choose
      blocks:
        - _bookshop_name: sections/two-column
          content:
            left:
              blocks:
                - _bookshop_name: simple/image
                  content:
                    alt: faster and easier SSG
                    image: https://cc-dam.imgix.net/Group_18528_j98j2i.png
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
                        scale: 1
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
            right:
              blocks:
                - _bookshop_name: simple/heading
                  content:
                    text: Why choose Eleventy?
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
                        active: false
                        top: 0
                        bottom: 0
                - _bookshop_name: simple/text-block
                  content:
                    text_markdown: >-
                      Eleventy is billed as the 'simpler static site generator',
                      and was created as a zero-config JavaScript alternative to
                      Jekyll. It has a growing reputation for its ease of use:
                      it works well with existing project files and multiple
                      data sources, maintains low build times, and also features
                      logical and intuitive hierarchies.


                      Eleventy is fast, lets you stay flexible, doesn’t require
                      any client-side JavaScript, and doesn’t require you to
                      learn any specific frameworks like Vue or React. You can
                      integrate a plethora of eleventy plugins to customize your
                      11ty project.


                      Built with JavaScript and easily installed via npm,
                      Eleventy is also extremely flexible in its range of
                      template languages: HTML, Markdown, JavaScript, Liquid,
                      Nunjucks, Handlebars, Mustache, EJS, Haml, and Pug. Pick
                      one, or if your team has a range of experience, use as
                      many as you want — all within a single project on your
                      custom domain. With Eleventy’s independent template
                      engines, your content can remain firmly decoupled for any
                      future transitions.
                  styles:
                    width: full
                    desktop:
                      text_alignment:
                        align: left
                      text_sizing:
                        text_size: normal
                      margin:
                        top: 0
                        bottom: 0
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
            text: An 11ty CMS you can trust
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
                active: true
                text_size: normal
              margin:
                active: false
                top: 0
                bottom: 0
        - _bookshop_name: simple/text-block
          content:
            text_markdown: >-
              Find out how leading companies are successfully leveraging
              CloudCannon's live visual editing. Learn how the best CMS for 11ty
              can help you and your team.&nbsp;
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
