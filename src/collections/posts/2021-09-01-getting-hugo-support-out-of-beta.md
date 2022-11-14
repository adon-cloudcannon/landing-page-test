---
title: Getting Hugo support out of beta
description: >-
  CloudCannon support for Hugo is leaving beta. It’s an important milestone, and
  this is how we got there.
image: https://dam-cdn.cloudcannon.com/blog/hugo-out-of-beta.jpg
date: 2021-09-01T05:00:00+1200
tags:
  - Features
author: nathan-kennedy
content_blocks:
  - _bookshop_name: cta
    heading: Try our Hugo CMS for free
    content:
    link_content: Get started free
    link_url: https://app.cloudcannon.com/register?trial=cc_standard
    link_open_in_new_tab: false
---
Since the dawn of time — well, since around 2015 — [CloudCannon has been the best CMS for Jekyll *by far*](https://cloudcannon.com/jekyll-cms/). But we weren’t content with being a one-trick pony. We knew it was time to fully embrace the Jamstack world, and open up our platform to more and more exciting static site generators (SSGs).

CloudCannon works so well with Jekyll simply because it was originally tailored with Jekyll in mind. To get the same level of magic, any SSG we add needs to be carefully incorporated into our platform. We wanted to support ‘em all (and still do), but with [300+ SSGs](https://jamstack.org/generators/){: target="_blank" rel="noopener noreferrer"} to choose from, we needed to start somewhere.

With a huge following and incredibly fast build times. [Hugo](https://gohugo.io/){: target="_blank" rel="noopener noreferrer"} was an obvious choice.

But we’d built our CMS around Jekyll, and we knew we couldn’t just slap on basic Hugo support and call it a day. Instead, we opted to almost completely dismantle and rebuild our front-end source, paving the way for future SSG support with minimal additional configuration on our part.&nbsp;

Now, almost a year later, [CloudCannon's support for Hugo](https://cloudcannon.com/hugo-cms/)&nbsp;is officially out of beta. It’s an important milestone for us — it's our first supported SSG after Jekyll — and it’s been quite the journey.

## **Getting to private beta**

Our initial bar for private beta was deliberately set pretty low. We wanted a base-level experience of all CloudCannon CMS features for the simplest of Hugo sites. To aid our testing (and further practice our Hugo skills) we recreated two of our [Jekyll templates](https://cloudcannon.com/community/themes/) using Hugo.

The first key step was allowing users to configure and run their builds in CloudCannon. There was a bit of tedium in creating the interface for [Hugo’s many build options](https://gohugo.io/commands/hugo/){: target="_blank" rel="noopener noreferrer"}, but overall this step turned out to be the easiest part of this process. Unfortunately for us, this was the *only* easy part of the process.

One of the things that makes CloudCannon great is its out-of-the-box functionality. To achieve this, we generate a JSON file containing details about the structure of your site. Using this file, CloudCannon generates almost all the user interface for your site with each build — everything from the options in the sidebar to the toolbars in the content editor. Thus, a vital step in supporting *any* site on CloudCannon is figuring out the best way to generate this JSON file.

For Jekyll sites, we created a [custom Jekyll plugin](https://github.com/CloudCannon/cloudcannon-jekyll){: target="_blank" rel="noopener"}. To make your site work with CloudCannon, you import the plugin as you would any other, and it runs at the end of your build step, extending the vanilla Jekyll process. Using a plugin has the advantage of using built-in Jekyll behavior to generate the correct data — ensuring that the plugin is working with the same information as Jekyll itself.

However, Hugo has no such plugin support. We experimented with different approaches, but eventually settled on creating a command-line interface (CLI) to generate our JSON. This way CloudCannon could run it as a script immediately after the Hugo build. Unfortunately, this meant that we needed to reverse-engineer many of Hugo’s intricacies in order to extract the juiciest and most relevant bits of site information. It also required us to identify the features and concepts of Hugo which would play nicely with the features and concepts of CloudCannon.

For example, CloudCannon uses a concept called *collections* extensively throughout the app. We use collections to organize the sidebar and logically process groups of related data. The thing is, it's a term we pretty much appropriated from Jekyll - and not every SSG has a completely matching concept. For Hugo, we chose to use content [*sections*](https://gohugo.io/content-management/organization/#section){: target="_blank" rel="noopener noreferrer"} as our analog to collections. We engineered our CLI to identify only pertinent sections in a Hugo site, and convert them into tasty JSON that our interface could digest. We made similar choices for other key Hugo features, and steadily molded them into the CloudCannon interface.

Development on the customer-facing side of things was progressing well, but there was still a lot of behind-the-scenes work to do. Perhaps the biggest challenge with adding support for Hugo was being able to support *any* additional SSG. If you were to examine the CloudCannon source code prior to this process, you would have found a tangle of hard-coded Jekyll-isms tacked onto legacy code. We could have furthered the madness by adding a bunch of switch statements everywhere we needed SSG-specific behaviour, but this was not a sustainable option.&nbsp;

As such, an enormous amount of effort went into decoupling Jekyll from our source. We went to great lengths to make our code highly modular — making as much of the app as SSG-agnostic as possible. We put in a great deal of thought and care into supporting Hugo so that in future we’ll be able to add more SSGs with a minimum of fuss.

## **The road to public beta**

Before releasing Hugo support to the public, we needed to ensure that the public had ample guidance in setting up their sites on CloudCannon. This meant our documentation sorely needed some love.

Our docs, like our source code, were strongly coupled with Jekyll — so much so that it was sometimes difficult to discern between Jekyll features and CloudCannon features. One of our tasks was to scour each and every page of our docs, identify each feature, and figure out how to replicate that behavior with a Hugo site. If it needed different configuration, we wrote extra documentation for it. If we found that a feature couldn’t be replicated, we made a note of it and added it to a list. This was a great way to figure out what still needed to be done, and as we worked through this list, Hugo support slowly approached parity with Jekyll.

Along with the content to write, we also had to redesign our docs entirely to allow for displaying per-SSG instructions. This resulted in the tab interfaces you can see here:

![Screenshot of tab user interface in CloudCannon documentation](https://dam-cdn.cloudcannon.com/blog/blog/documentation-tabs.png "CloudCannon documentation tabs"){: width="524" height="226"}

We also used this UI element to show how to set the same thing up in different configuration languages (e.g. YAML, TOML, JSON).

We also used the private beta as a way of smoothing out behavior. As we learned more about Hugo and how people used it, we realized that some of the default assumptions we had made needed to be modified or scrapped entirely. For example, we changed what was displayed in the sidebar a few times because our initial choices became confusing for complex sites.

## **Leaving public beta**

The advantage of Hugo support being in beta was that we could justifiably make changes to our implementation. We tried to minimize the number of these changes, but some were unavoidable. We didn't want to break customers’ existing sites, so we ensured backwards compatibility with the old configuration. This means that the old way of doing things can still be valid (and will be for the foreseeable future) but we won't document it anywhere — going forward, our docs will recommend what we see as the best practice.

In the public beta, there were still some key CloudCannon features that Hugo sites weren't able to enjoy — and we knew we couldn’t move past beta until they were supported. One such example is [collection-level configuration](https://cloudcannon.com/documentation/edit/editing/configuration/).

Initially, we had piggybacked on [Jekyll's handling of collection-level configuration](https://jekyllrb.com/docs/collections/#setup){: target="_blank" rel="noopener noreferrer"}. For example, consider the following snippet from a typical Jekyll site in CloudCannon (pre-Hugo):

`_config.yml`\:

```yaml
collections:
  staff_members:
    _enabled_editors:
      - data
```

This snippet would do two things:

* Create a Jekyll collection called `staff_members`
* In CloudCannon, someone editing items in this collection will only be able to use the data editor — permitting them to only edit the item's front matter.

This was fine and dandy. Except of course, if your site was not built with Jekyll. If you expected this to work with your Hugo site your configuration dreams would be unceremoniously crushed.

At the time, Hugo had no equivalent feature that we could extend (Hugo's near-equivalent [data cascade](https://gohugo.io/content-management/front-matter#front-matter-cascade){: target="_blank" rel="noopener noreferrer"} feature only came out very [recently](https://gohugo.io/news/0.86.0-relnotes/){: target="_blank" rel="noopener noreferrer"}), so we had to take matters into our own hands. Our solution was to create a global `cloudcannon` configuration object. Now Hugo and Jekyll (and future SSG) sites can use the same collection-configuration:

`_config.yml`\:

```yaml
cloudcannon:
  collections:
    staff_members:
      _enabled_editors:
        - data
```

Most CloudCannon features can be configured by modifying this object, so you always know where to go when you're customizing your site for CloudCannon. This has the added benefit of clearly separating CloudCannon configuration from the rest of your site's configuration.

During this period, we took feedback from our users into thorough consideration. We have an excellent in-house site creator, who sits very close to the app team. Every now and again, he'd pipe up: "Hey, is this a bug or am I doing something wrong?" It was very often a bug. But the more time we spent in public beta, the more bugs and edge cases we ironed out, and the smoother the Hugo experience became.

### **Hugo now**

Hugo support is now leaving the loving arms of public beta and emerging into the light of … not beta. Hugo is no longer just an afterthought to a Jekyll CMS: it’s an indelible feature of our platform. Hugo’s lightning-fast build speeds and CloudCannon’s intuitive editing interfaces are a match made in heaven. We love how our users are using CloudCannon to get the most out of Hugo, and using Hugo to get the most out of CloudCannon.&nbsp;

Of course, we’ll continue to polish the Hugo experience. We set high standards for ourselves, and we’re always looking to improve and refine everything we make. For some *extremely* complex sites, it may take you a bit of ‘squishing’ (to drop in a particularly technical term) to get it to play nicely with the CloudCannon interface. But in general, we're confident that you will get a great out-of-the-box experience maintaining your site on CloudCannon.

This has been an important step in the ongoing development of CloudCannon, and we hope you’re as excited as we are for the future.

## **What did we learn?**

### Assume less

During development we needed to make a lot of assumptions about the structure of our users' sites, allowing us to extract juicy and relevant information. We had to consider, *"How will most of our users be configuring their sites? How can we make things as easy as possible?"* Most of the time, we arrived at the solution using our own experience with Hugo.

In many cases, our assumptions were slightly off, and sometimes just plain *wrong*. We learned to assume less about best practices, and amass as much feedback as possible to ensure everyone has a great experience with us.

### Beta users are awesome

To anyone who works in software, this should come as no surprise. Having people testing, prodding, and sometimes breaking the product was extremely helpful. We have our users to thank for providing us with a varied sample of sites with which to tweak and polish CloudCannon's Hugo support.

### Hugo is something special

Hugo is a static site generator in its purest form, and we absolutely love that. [CloudCannon sites are among the fastest on the internet](https://cloudcannon.com/community/jamstack-hosting-comparison/), and Hugo lets you build those sites just as quickly. It’s the best of both worlds.
