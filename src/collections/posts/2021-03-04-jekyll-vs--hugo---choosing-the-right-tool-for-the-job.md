---
draft: false
title: Jekyll vs. Hugo - choosing the right tool for the job
description: >-
  Jekyll and Hugo are great static site generators for creating lean Jamstack
  content. To help you make the right choice, we look at how they compare.
date: 2021-03-04T13:00:00+1300
cta:
  title: Launch your website today
  body_text: Give your content team full autonomy on your developer-approved tech stack with CloudCannon.
  button:
    content: 
      link: "https://app.cloudcannon.com/register?trial=cc_standard"
      text: "Get started free!"
    styles:
      size:
      style: "outline"
      extra_classes:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/uploads/comparison-laptops.jpg
tags:
  - Resources
  - Hugo
  - Jekyll
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
---
In the Jamstack world, new static site generators are constantly released. But actively developed, battle-tested solutions are also great options.

Jekyll and Hugo are such tried-and-true solutions.

They are both considered traditional SSGs, in the sense that they are not tied to a specific framework; they focus on turning content into websites and for everything else, they’re quite flexible.

Let’s explore how they differ.

## What is Jekyll?

Jekyll is a Ruby-based static site generator that was initially released by Tom Preston-Werner in 2008. It is rightfully praised as *the* SSG that popularized static site generation in general and it did that in a world which was, even more than today, dominated by server-side rendering. Its growth has not been as fast as a few other, newer SSGs in recent years, but it remains a very popular choice.

Jekyll was created to simplify website hosting and infrastructure management, mostly by getting rid of it. It replaced the need for a database with files that can be put under version control. These may seem like the most basic precepts of Jamstack, because they are, but remember that the term “Jamstack” itself was born years after Jekyll. It truly was a small revolution back in 2008.

Besides its revolutionary ideas, Jekyll was made extremely popular by [GitHub Pages](https://pages.github.com/). The creator of Jekyll happens to be one of GitHub’s co-founders and from version 0.12.1 to 3.6.0 the lead developer was Parker Moore, a software engineer at GitHub. Having GitHub’s seal of approval is always helpful for a software project. GitHub Pages certainly gave a huge boost to Jekyll and the concept of static site generation in general.

Right from the beginning, Jekyll was presented as a blogging solution. Its tagline reads: “Jekyll is a blog-aware static site generator in Ruby”.

It can be used for more than simple blogs, though. Extendibility is at the heart of Jekyll’s design and that is achieved through a vast ecosystem of plugins.

## What is Hugo?

Hugo is a static site generator built with Go. It was first released in 2013 by Steve Francia. While he’s not a billionaire founder like Tom, Steve has an extremely impressive background, with involvement in a lot of market-leading projects and innovations. He currently works as a product and strategy lead for the Go language at Google. Since version 0.14, Hugo has been maintained by Bj&oslash;rn Erik Pedersen, and most of the commits can be attributed to this one person. Hugo is not tied to one humongous company like Jekyll, but it is widely supported by virtually all hosts, CMSs and other products with a Jamstack focus.

Hugo was not as revolutionary as Jekyll when it came out. You could say it stands on the shoulders of a giant (Jekyll). But, from the very beginning, Hugo has set itself apart by being fast. More precisely, it has set itself apart by being *much faster* than Jekyll. And after all these years, its incredible speed remains one of its main strengths when compared to other SSGs.

> "Hugo has had 'fast' in its slogan from day one, so we have to really care about it." - [Bj&oslash;rn Erik Pedersen](https://www.tnd.dev/article/2017-10-03-interview-hugo-lead-developer/)

Hugo also has a focus on simplicity and flexibility. This philosophy is felt right at the installation step; Hugo is distributed as a single binary. No need to run `npm install` or `gem install` for every project - unless you want to add more dependencies yourself, of course. Simplicity also means lots of functionalities built in: things like i18n, image optimization, pre-made templates … most things needed by modern websites, really. A large array of plugins to choose from is handy, but sometimes out-of-the-box functionality is even handier.

## Liquid vs. Go templating

Jekyll uses Liquid as its templating language. Hugo uses Go templating. Most people seem to agree that it is a little bit easier to learn Jekyll’s syntax than Hugo’s.

To illustrate the point, here is how to list the last 3 blog posts with Hugo:

```
{% raw %}
{{ range ( where .Site.RegularPages "Type" "posts" | first 3 ) }}

<--! Show the posts -->

{{ end }}
{% endraw %}
```

The same thing in Jekyll looks like this:

```
{% raw %}
{% for post in site.posts | limit:3 %}

  {% comment %} Show the posts {% endcomment %}

{% endfor %}
{% endraw %}
```

Here’s another example for a simple if statement:

**Hugo:**

```
{% raw %}
{{ if (and (eq .Type "blog") (isset .Params "hascaniuse")) }}

 <--! Do something if condition is true -->

{{ end }}
{% endraw %}
```

**Jekyll:**

```
{% raw %}
{% if page.is_post and page.hascaniuse %}

 {% comment %}
  Do something if condition is true
 {% endcomment %}

{% endif %}
{% endraw %}
```

Even without any Ruby experience, the conditional statement seems rather clear in the Jekyll example.

## Popularity contest

Despite its quirky syntax, a couple of metrics seem to indicate that Hugo’s popularity is growing at a faster pace than Jekyll’s.

* When searching for “Hugo to Jekyll” in Google, results are all about people switching from Jekyll to Hugo. Not the other way around. Hugo even has instructions for a smooth migration from Jekyll to Hugo.
* When comparing GitHub stars over time, Hugo keeps increasing its distance with Jekyll ([GitHub star history](https://star-history.t9t.io/\#jekyll/jekyll&amp;gohugoio/hugo))
* Hugo’s official Twitter account has more followers than Jekyll’s

But both Jekyll and Hugo are slowly growing according to [builtwith](https://builtwith.com/)\:

* [Jekyll trends](https://trends.builtwith.com/cms/Jekyll)

* [Hugo trends](https://trends.builtwith.com/cms/Hugo)

A few examples of websites built with each framework:

**Jekyll:**

* [Bitcoin.org](https://bitcoin.org/)

* [AWS Amplify Docs](https://docs.amplify.aws/)

* [Sketch](https://www.sketch.com/)

* [Ruby on Rails](https://rubyonrails.org/)

* [Yours truly - CloudCannon](https://cloudcannon.com/)

**Hugo:**

* [Let's Encrypt](https://letsencrypt.org/) (Used to be built with Jekyll)

* [1Password support](https://support.1password.com/)

* [Smashing Magazine](https://www.smashingmagazine.com/) (Used to be on WordPress)

* [Linode](https://www.linode.com/docs/)

## Jekyll vs. Hugo, side by side

| Comparison | Jekyll | Hugo |
| --- | --- | --- |
| First release | 2008 | 2013 |
| Built with | Ruby | Go |
| Templating engine | Liquid | Go Templates |
| Plugins | Yes, via Ruby Gems | No, but still extendable with a bit more work |
| GitHub stars | 42K+ | 49K+ |
| Themes | Yes | Yes |
| Open source licence | MIT | Apache 2.0 |
| Installation requirements | Ruby must be installed. | None, Hugo is a single binary. |
| Asset pipeline | SASS and CoffeeScript out of the box, plugins for almost everything else. | SASS, JS, images, bundling… Hugo does a LOT out of the box. But no plugin ecosystem. |
| Build times | “Fast-ish” since version 4.0 | Fastest in class |
| Multilingual and i18n | Through plugins | Built in |
| Shortcodes | Yes | Yes |
| Easy WordPress et al. converter | Yes: [Jekyll converter](https://import.jekyllrb.com/) | Yes: [Hugo converter](https://gohugo.io/tools/migrations/) |
| Learning curve | Gentle, especially if you have Ruby experience. | Less gentle. Go templating is subjectively harder. |
| Supported content types | Markdown, HTML + more through plugins | Markdown, AsciiDoc, RST, HTML |
| Support communities | [Jekyll Talk](https://talk.jekyllrb.com/) [Gitter](https://gitter.im/jekyll/jekyll) | [Hugo Discourse](https://discourse.gohugo.io/) |
| CLI tool | Yes | Yes |
| Hot reloading dev server | Yes | Yes |
| Twitter accounts | [Jekyll Twitter](https://twitter.com/jekyllrb) | [Hugo Twitter](https://twitter.com/GoHugoIO) |
| GitHub repos | [Jekyll GitHub](https://github.com/jekyll) | [Hugo GitHub](https://github.com/gohugoio/) |

## Why use Hugo?

**Fast build times.** Although Jekyll got better in its last release, Hugo remains the reigning champion in all benchmark tests (not just when compared to Jekyll, but when compared to SSGs at large). The bigger the sites you work on, the bigger a deal this is. Besides the developer experience, many cloud hosts charge for build time.

**A growing community.** Even though it’s a younger project, Hugo has caught up with Jekyll in terms of popularity and the trend shows no sign of reversal.

**A single binary.** Having access to a plugin ecosystem is nice, but not having to manage software decay and/or breaking dependencies is also nice. Hugo’s installation process is also notoriously easy.

**Extendable if needed.** Even though Hugo doesn’t have its own ecosystem of plugins, it can be extended with build tools, JS frameworks, NPM packages, CSS libraries… it really is versatile.

### Things to watch out for when choosing Hugo

The learning curve is a bit steeper. This statement is subjective, of course, but it’s a comment that many people make about Hugo. Unless you’re already comfortable with the Go language, it will probably take a bit of time before feeling comfortable with Go templates’ syntax and the general structure of a Hugo project. But you can always follow our helpful [Hugo tutorial](/tutorials/hugo-tutorial/)\!

Hugo is extendable… but not as much as Jekyll. Hugo can be extended with many tools, but so does Jekyll **and** it can be extended with plugins made specifically for Jekyll.

## Why use Jekyll?

If you already have expertise in the Ruby ecosystem, you will feel right at home. Even without much Ruby experience, Jekyll is one of the easiest SSGs to learn. (Try our [Jekyll tutorial](/tutorials/jekyll-tutorial/) if you're getting started.) Conventions tend to be clearer with Jekyll. For instance, all blog posts follow a clear naming convention: “year-month-day-title”.

**Easy hosting on GitHub Pages.** (Although [version 4.0](https://github.com/github/pages-gem/issues/651) is still not supported to the community’s disbelief…)

**Even more extendable.** Jekyll does less than Hugo out of the box, but it’s easily extendable with its vast library of plugins made specifically for Jekyll. This can make Jekyll more flexible, too. For instance, Hugo does i18n out of the box, but Jekyll has many plugins to achieve that goal and you get to choose which one you prefer.

**A large and older community.** Since Jekyll is the oldest modern static site generator, chances are that many people already have had the problems you’ll stumble into and posted their solution online.

**Many active contributors.** Lots of people care about the project and it shows no sign of being deprecated any time soon.

### Things to watch out for when choosing Jekyll

The negative aspect of Jekyll that comes up over and over again is its build times. The core team finally decided to make build times a priority since version 4.0, but it’s very unlikely that it will ever catch up with Hugo. Hugo is just light-years ahead on that specific point.

There’s a bit more work involved for the initial setup of Jekyll too, as it requires a proper Ruby environment. Jekyll itself is distributed as a Ruby Gem.

It’s not the rising star it once was. While new projects are still created with Jekyll, it seems like Jekyll already brought the revolutionary ideas it had to bring to web development.

## Conclusion - they’re both great options

There are not a lot of things that Hugo can do but Jekyll cannot and vice versa.

For some sites with thousands of pages, Hugo is a must because of its build speed. For others, Jekyll can be a must because of a few plugins with specific functionalities not found in Hugo. But for the majority of us, it comes down to personal preference.

So, you can’t really go wrong with either Jekyll or Hugo. Again, they are tried-and-true solutions.

Whatever you end up choosing, CloudCannon can help make the experience even smoother. We even have a range of [themes and templates](https://cloudcannon.com/community/themes/) available for both Hugo and Jekyll, all configured for editing on CloudCannon.

## How CloudCannon makes working with both Jekyll and Hugo easier

CloudCannon aims to make it as easy as possible to get your site live and shared with clients and team members. Regardless of whether you’re using Jekyll or Hugo, the process for connecting your site and going live is the same. CloudCannon is a Git-based CMS, which means you can simply connect your repository through your favorite Git provider, provide any build configuration details, and CloudCannon will take care of the rest.

Once your site is connected, you’ll instantly receive a testing domain and easy-to-use CMS for managing content and sharing. Importantly, all the conventions and magic of Jekyll and Hugo are recognized and available to configure in the editor. And whenever changes are made by users there, or remotely in your repository, changes will be synced to make sure that everyone stays up to date.

Which static site generator you choose doesn’t matter. Pick the right one for your team to unlock the potential of your site, and benefit from first-class speed and easiest sharing with CloudCannon.
