---
_schema: default
title: Eleventy
layout: builder.html
permalink: /eleventy/
content_blocks:
  - _bookshop_name: sections/container
    content:
      label: Hero
      blocks:
        - _bookshop_name: simple/heading
          content:
            text: A fully featured Eleventy CMS for everyone.
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
                active: false
                text_size: big
              margin:
                active: false
                top: 0
                bottom: 0
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
                active: false
                type: split
                width: 0
                gap: 0
                vertical_gap: 0
              vertical_block_alignment:
                active: false
                v_align: top
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
          bottom: 40
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
                    image: >-
                      https://res.cloudinary.com/dahpdufoq/image/upload/v1674884132/marketing-site/image_9_yqbchd.png
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
                active: false
                type: split
                width: 0
                gap: 0
                vertical_gap: 0
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
          active: false
          top: 0
          right: 0
          bottom: 0
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
            width: full
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
---
