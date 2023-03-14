---
title: 'Maximizing the convenience factor: archetypes in Hugo'
description: >-
  Hugo is packed with features designed specifically to provide category-leading
  convenience to both developers and site owners. In this article, we’ll take a
  closer look at Hugo’s archetypes.
series:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/hugo-archetypes.jpg
date: 2022-03-24T06:00:00+1300
tags:
  - Hugo
  - Resources
author: 7abe9500-0933-48af-9130-87389dc36c9b
templateEngineOverride: md
---
There are many reasons why static site generators (SSGs) have become so popular, especially in recent years. The reason which seems to come up most often is that SSG-based sites have superior performance and security, which certainly is true enough.

However, there’s another key advantage that probably doesn’t get nearly the attention it deserves: the convenience SSGs provide.

When used properly, SSGs can automate many of the tasks involved in building and maintaining a website. This capability, which becomes increasingly important as the site grows in size and complexity, reduces the need to concentrate on some of the more mundane aspects of website work. As a result, web developers and their clients have more time and freedom to make better decisions about websites’ content, performance, and design — the things that will most effectively satisfy current visitors and attract new visitors.

Similarly, web devs often praise [Hugo](https://gohugo.io/) for its admittedly awesome build speed, yet overlook how Hugo is packed with features designed specifically to provide category-leading convenience to both developers and site owners. In this article, we’ll try to make at least some headway in correcting that oversight, as we take a closer look at Hugo’s ***archetypes***.

## Archetypes in general

To begin with: what exactly *is* an archetype, Hugo’s use of the term aside?

According to [dictionary.com](https://www.dictionary.com/browse/archetype), the word *archetype* means: “The original pattern of model from which all things of the same kind are copied or on which they are based; a model or first form; \[a\] prototype.”

Think of a cookie-cutter. With cookie dough and a cookie-cutter that’s shaped like a gingerbread man, you’ll end up with gingerbread-man cookies. That cookie-cutter’s shape was the *archetype* for the shape of each cookie.

Or consider what often happens in the process of developing salespeople. Training courses designed and led by a particularly successful sales professional will likely produce graduates who sell in a manner very similar to that of the trainer — who, at least in this sense, has served as those trainees’ archetype.

## Archetypes in Hugo: the basics

Now, let’s get back to Hugo.

As you probably know, much of what any SSG brings to the table depends heavily on *templating*. Many web developers remember all too well a time when they had to hand-code even large websites one page at a time. They can richly appreciate how much better it is just to create a relatively small number of templates and let an SSG do the rest. That’s doubly true with Hugo, given its astounding site-building velocity during both development and production.

But what has that to do with archetypes? Perhaps we can put it this way: not every Hugo template is an archetype, but every Hugo archetype is a template — and a special *kind* of template, at that.

To quote the [Hugo documentation](https://gohugo.io/content-management/archetypes/)\: “**Archetypes are templates used when creating new content.**” Let’s dig more deeply into that explanation.

If you’ve ever run `hugo new site` to create a (you guessed it) new Hugo site, you know that one of the default folders in the resulting project is `archetypes/`, which contains a single file, `default.md`. In that file, you’ll find only the following [front matter](https://gohugo.io/content-management/front-matter/)\:

```markdown
---
title: "{{ replace .Name "-" " " | title }}
date: {{ .Date }}
draft: true
---
```

This is the site’s default archetype, which Hugo will apply whenever you use `hugo new` to create a content file in your Hugo project.

In case you’re not familiar with the templating that Hugo uses, here’s what the front matter’s curly-bracketed items tell Hugo to do:

* “Convert the file name into title case and make that the file’s `title`.”
* “Assign the file’s creation date/time to the file’s `date`.”
* “Make this file a `draft`” — meaning that Hugo, by default, won’t convert it to a page during either development or production. (Keep that in mind for later.)

So, if you run `hugo new my-article.md` at 2:37:20 PM U.S. Central Daylight Time (CDT) on April 7, 2022, Hugo creates `content/my-article.md` with the following front matter:

```markdown
---
title: "My Article"
date: 2022-04-07T14:37:20-05:00
draft: true
---
```

Again: that’s only the bare, default behavior. There’s so much more you can do with Hugo archetypes.

## Customizing archetypes for your project

You can already see that the use of Hugo commands and variables allows even the default archetype to accomplish a lot, but let’s do more than just scratch the surface. No two Hugo projects are the same, so their archetypes needn’t be, either.

Before we get to examples, we should understand how Hugo determines which archetype it will assign to a specific content file. As noted, if a project has only the original default archetype, Hugo will use that one for *any* content you create with `hugo new`, but we clearly aren’t going to stop there.

Let’s say you and your client, XYZ Company, have decided on a website whose Hugo project will have the following general content structure:

```
.
└── content
    └── about-us
    └── blog
    └── contact-us
    └── products
    └── support
```

Let’s say also that XYZ Company diligently keeps its website’s Support section updated for both consumers and dealers, perhaps with a Hugo structure like this:

```
.
└── content
    └── support
        └── consumers
            └── docs
            └── downloads
            └── faq
                └── alpha-widgets
                └── gamma-widgets
        └── dealers
            └── docs
                └── manuals
                └── parts-lists
                └── tech-updates
            └── downloads
        └── security-alerts
```

And we’ll further say that the Support Department requires each FAQ content file to adhere to a naming convention of either `alpha-nnn.md` or `gamma-nnn.md`, wherein the `alpha` or `gamma` refers to one of the company’s two major product lines (Alpha Widgets and Gamma Widgets) and the `nnn` is a three-digit identifier number. For example, a file named `alpha-029.md` would be the content for FAQ page number 29 for the Alpha Widgets FAQ section.

Oh, there’s one more thing: the client’s previous web developer, using a totally different set of code and for reasons no one seems to remember now, set the site so that a file named `alpha-029.md` has a URL of `xyzcompany.com/support/consumers/faq/alpha-widgets/029/` — and the client requires not only that such URLs remain the same but also that future FAQ content files produce the same results. URL redirects are a no-go, and the Support Department refuses to change the long-time convention for Markdown file names.

It sounds a bit hairy, but all of this constitutes a perfect scenario for customized Hugo archetypes.

Looking at our `content/support/` structure example above, let’s create an archetype for just the Consumer FAQ section at `archetypes/faq.md`, with the following front matter (any content after `#`, or wrapped inside `{{/*` and `*/}}`, is a comment):

```markdown
{{/*- The following vars assume three-digit FAQ #s -*/}}
{{- $faqNo := substr .Name -3 -}}
{{- $prod := substr .Name 0 -4 -}}
{{- $prodName := $prod | title -}}
---
title: "{{ $prodName }} Widgets - FAQ #{{ $faqNo }} | XYZ Company Consumer FAQ"
date: {{ .Date }}
draft: true
type: support/consumers/faq
# To make page go live when site is built,
# change `draft` to false (no quot. marks)
author: "" # Fill in
slug: "{{ $prod }}-widgets/{{ $faqNo }}/"product: "{{ $prodName }} Widgets"
featured_image: "/images/featured/for-faq/{{ $prod }}.jpg"
featured_image_alt: "Image of XYZ Company's {{ $prodName }} Widgets product"
featured_image_credit: "Image: John Doe Photography for XYZ Company."
---
```

What does all the Hugo code do? Let’s break it down, with `alpha-029.md` as the first file we’ll create from the archetype.

First, above the front matter’s top `---` delimiter, we’re creating three variables for later use in several places below:

* `$faqNo` is the last three characters — adhering to the `nnn` convention — of the content file’s name; *e.g.*, `029`.
* `$prod` is that file name *without* the `-nnn` part of the name; *e.g.*, just `alpha`.
* `$prodName` is `$prod` converted to nice, neat title case; *e.g.*, `Alpha`.

From there, we get the date/time (`.Date`) of the file’s creation, as in Hugo’s default archetype, and then we use `type` to tell Hugo which *layout* to use (if necessary, refer to our earlier article, “[The Ultimate Guide to Hugo Sections](https://cloudcannon.com/blog/the-ultimate-guide-to-hugo-sections/)”).

Remember the client’s requirement about the URL? We meet it with the `slug` line. While a Hugo URL usually is based strictly on where a content file is located, using `slug` overrides that. Thus, in this example, `content/support/customers/faq/alpha-029.md` will produce the desired URL of `xyzcompany.com/support/customers/faq/alpha-widgets/029/` (*i.e.*, rather than `xyzcompany.com/support/customers/faq/alpha-029/`, as Hugo normally would do it).

Still, don’t try `hugo new` just yet. There’s one more thing to address.

With all those nested levels, how do you make sure which archetype the `hugo new` command will use? Unlike how layouts work in Hugo, having an identically nested level of archetypes **isn’t** the way to do it. The answer is to add a `--kind` (or `-k`) “flag” to the `hugo new` command. In this case, we want Hugo to know that this file will be of the `faq` content kind. This ensures that, regardless of how deeply nested the resulting file will be within the project, it’ll start from the correct archetype.

So, with the `archetypes/faq.md` file set as described above, the command to use will be:

```markdown
hugo new support/consumers/faq/alpha-029.md --kind faq
```

This tells Hugo, “Build a new Markdown file called `alpha-029.md`, using the archetype file at `archetypes/faq.md` because this new file is of the `faq` kind, and put it in the project’s `content/support/consumers/faq/` folder.”

By entering that command at 7:31:32 AM CDT on April 29, 2022, you’ll get `content/support/consumers/faq/alpha-029.md`, complete with the following front matter:

```markdown
---
title: "Alpha Widgets - FAQ #29 | XYZ Company Consumer FAQ"
date: 2022-04-29T07:31:32-05:00
draft: true
type: support/consumers/faq
# To make page go live when site is built,
# change `draft` to false (no quot. marks)
author: "" # Fill in
slug: "alpha-widgets/029/"
product: "Alpha Widgets"
featured_image: "/images/featured/for-faq/alpha.jpg"
featured_image_alt: "Image of XYZ Company's Alpha Widgets product"
featured_image_credit: "Image: John Doe Photography for XYZ Company."
```

. . . and, because of the use of `slug`, the resulting web page’s URL will be `xyzcompany.com/support/consumers/faq/alpha-widgets/029/`, as the client wants.

Pretty slick, eh? Wait. It gets better.

### Directories can be archetypes

Hugo’s *directory-based archetypes* — that is, directories which themselves are archetypes — enable you to build new site structures more quickly. In fact, it may be worth your while to keep one or more such directories in `archetypes/` for those times when the client wants a major site expansion, and wants it yesterday.

Let’s say your `archetypes/` folder looks like this:

```
.
└── archetypes
    └── blogpost.md
    └── changelog.md
    └── default.md
    └── faq.md
    └── tech-update.md
    └── z-bundle
        └── _index.md
        └── a
            └── _index.md
            └── z-a.md
        └── b
            └── _index.md
            └── z-b.md
        └── c
            └── _index.md
            └── z-c.md
        └── d
            └── _index.md
            └── z-d.md
        └── e
            └── _index.md
            └── z-e.md
```

Notice the `z-bundle` folder with five sub-folders, each with an `_index.md` archetype and a non-index archetype.

In this example, XYZ Company has just acquired UVW Company and suddenly wants you to add a new top-level section, `xyzcompany.com/uvw/`, featuring the former competitor’s products. To get a quicker start on this process, run `hugo new uvw --kind z-bundle` . This will result in `content/uvw/`, arranged as shown:

```
.
└── content
    └── uvw
        └── _index.md
        └── a
            └── _index.md
            └── z-a.md
        └── b
            └── _index.md
            └── z-b.md
        └── c
            └── _index.md
            └── z-c.md
        └── d
            └── _index.md
            └── z-d.md
        └── e
            └── _index.md
            └── z-e.md
```

You then can easily rename folders and files accordingly, of course, but this is much simpler than creating everything one folder at a time and one file at a time. As this new part of the project grows, you even can use this capability to create still deeper nested levels, such as with `hugo new uvw/sublevel --kind z-bundle` to get:

```
.
└── content
    └── uvw
        └── _index.md
        └── a
            └── _index.md
            └── z-a.md
        └── b
            └── _index.md
            └── z-b.md
        └── c
            └── _index.md
            └── z-c.md
        └── d
            └── _index.md
            └── z-d.md
        └── e
            └── _index.md
            └── z-e.md
        └── sublevel
            └── _index.md
            └── a
                └── _index.md
                └── z-a.md
            └── b
                └── _index.md
                └── z-b.md
            └── c
                └── _index.md
                └── z-c.md
            └── d
                └── _index.md
                └── z-d.md
            └── e
                └── _index.md
                └── z-e.md
```

You can repeat this to keep building downward, as far as needed.

## Pitfalls to avoid

We’ve spent the article up to now singing the praises of Hugo archetypes, but you also should be aware that there are a couple of potential gotchas in using them. Let’s now discuss those.

### Do you know your "draft" status?

This first item actually is not so much a failing of Hugo archetypes as it is something that’s true of Hugo content creation in general. Those who begin playing with archetypes often use just `hugo new` to experiment with what archetypes generate, only to become frustrated when Hugo doesn’t use the resulting file even though they can clearly see that it’s where it should be.

The problem, more often than not, is the fact that the default archetype — and, because people tend to copy and paste from it, a number of other archetypes that get built — has `draft: true` in its front matter.

Whoops.

Always remember that Hugo’s default behavior in both development and production modes is to ignore such files when building the site. “It’s a feature, not a bug.”

Your client may be perfectly happy if archetypes don’t create draft files by default, so that’s an option you may want to suggest; but, in a worst-case scenario, you or the client might publish some content that wasn’t truly ready. Sometimes, `draft: true` can be one’s friend.

### Watch the extensions

Any file whose name ends with `.md`, `.markdown`, or `.goldmark` (the latter refers to the name of the Markdown parser that Hugo uses) is a legitimate Markdown content file as far as Hugo is concerned. However, that doesn’t mean you can use those interchangeably when building archetypes.

For one thing: as of this writing, Hugo doesn’t allow the use of a `.goldmark` file as an archetype, although you can manually create a `.goldmark` file in `content/` and Hugo will recognize it.

As for `.md` and `.markdown`, you must make sure you’re matching archetype extension with destination-file extension. Suppose you create the file `archetypes/tester.md`. The following **won’t** work as you expect:

```
hugo new tester.markdown --kind tester
```

If you happen to have an archetype file at `archetypes/default.markdown`, this command will result in a `content/tester.markdown` file, all right, but it’ll be based on the `default.markdown` archetype rather than the `tester.md` archetype.

In short: keep `.md` with `.md`, and `.markdown` with `.markdown`; and steer clear altogether of `.goldmark`, at least where Hugo archetypes are concerned.

## Don’t be your own “arch”-enemy

Many long-time Hugo users typically don’t use archetypes to create content files, despite being aware of this feature. If you’re in that group, perhaps this article has changed your mind on the subject.

(It's worth noting here that Hugo pages created within CloudCannon don't currently support the archetypes workflow, though if you're developing locally and syncing with CloudCannon for your content editors to do their work, you can still use archetypes to your heart's content. As of this article's publication date CloudCannon has a development project in the works to address this workflow within the app for all SSGs, including Hugo.)

Those coming to Hugo from other SSGs might have other ideas about creating new content files, often in the form of just copying and pasting from previous Markdown files’ front matter to start new files. That works, too, but it’s a much more manual process than what we’ve described herein. And remember: those other SSGs don’t even have this archetypes feature to begin with, so they don’t give you a choice in the matter. Hugo does.

Even if Hugo archetypes were only cookie-cutter copies, going back to our early analogy, they’d constitute an impressive time- and labor-saving device. But when you also take into account how Hugo archetypes can use logic to create file names, URLs, and much more on the fly — not to mention how entire directories can be archetypes — you see a higher level of convenience that only Hugo provides.

Hugo can be a powerful ally in your web development, but only to the extent that you learn about its capabilities, and take full advantage of them. In that sense, knowledge truly *is* power.
