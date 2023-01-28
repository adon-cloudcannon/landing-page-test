---
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
              With CloudCannon as your 11ty CMS, your whole team can collaborate to create amazing websites.
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
            image: https://res.cloudinary.com/dahpdufoq/image/upload/v1674660604/marketing-site/hero_image_w2idkd.png
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
          active: true
          top: 60
          right: 0
          bottom: 40
          left: 0
  - _bookshop_name: sections/container
    content: []

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
          top: 130
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
          active: true
          top: 60
          right: 0
          bottom: 40
          left: 0
---