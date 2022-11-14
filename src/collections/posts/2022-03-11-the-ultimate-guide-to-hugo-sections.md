---
title: The Ultimate Guide to Hugo Sections
description: "Everything you've always wanted to know about how Hugo's sections and page bundles work. (Including the  “_index.md\_or\_index.md” question!)"
series:
image: https://dam-cdn.cloudcannon.com/hugo-sections.jpg
date: 2022-03-11T05:00:00+1300
tags:
  - Hugo
  - Resources
author: bryce-wray
---
Because URLs ideally [should never change](https://www.w3.org/Provider/Style/URI){: target="_blank" rel="noopener noreferrer"}, one of the critical steps in your early planning for a website project must be to decide on the site’s structure. Additionally, if you’re converting an existing website to a different platform, you must make such decisions while also respecting the site’s current URLs. Sure, redirects are possible if needed, but their use should be a last resort.

The good news is that, if you use the [Hugo](https://gohugo.io/)&nbsp;[static site generator](https://jamstack.org/generators/){: target="_blank" rel="noopener noreferrer"} (SSG), you’re the boss with a capital *B* when it comes to how you arrange a website.

A possibly challenging aspect to such power is that, first, you need to wrap your brain around Hugo’s concept of *sections*. Helping you do that is the purpose of this article.

## Walk before we run

First, let’s cover some basics about how content management works in Hugo.

One of the numerous pillars of Hugo is how completely it takes its orders from you concerning how to structure a site’s content. As the Hugo “[Content Organization](https://gohugo.io/content-management/organization/){: target="_blank" rel="noopener noreferrer"}” documentation says:

> Hugo assumes that the same structure that works to organize your source content is used to organize the rendered site.

While this Hugo advantage is great enough if you’re just starting with a new site, it is utterly invaluable when you have to recreate an existing site — particularly one with “turtles-all-the-way-down” levels of URLs.

When you look through the code of many existing websites, even those built with SSGs, you often may have some difficulty in determining the locations of those sites’ content. That’s not a problem with a Hugo site. The default arrangement is beautifully logical: content goes in a Hugo project’s top-level `content/` folder, and Hugo bases the overall site structure on what you put, and where, in that folder — which we’ll explain further as we move on to understanding Hugo sections.

*(Be advised that we depict content files as&nbsp;*`.md`*&nbsp;files in this article only because Markdown tends to be the most common content format in a typical Hugo project, although Hugo supports several&nbsp;*[*other formats*](https://gohugo.io/content-management/formats/#list-of-content-formats){: target="_blank" rel="noopener noreferrer"}*.)*

## The ABCs (or XYZs) of sections

Let’s say you’re working on a website for XYZ Company, with the main URL of `xyzcompany.com`. It needs the following top-level URLs:

* `xyzcompany.com/about-us/`
* `xyzcompany.com/blog/`
* `xyzcompany.com/contact/`
* `xyzcompany.com/product1/`
* `xyzcompany.com/product2/`
* `xyzcompany.com/support/`

Within most of those top levels will be separate, lower-level URLs with their own content, and further on down as appropriate. That’s a pretty common setup, right? So, in Hugo, you could start by arranging `content/` like so:

```
.
└── content
    └── about-us
    └── blog
    └── contact
    └── product1
    └── product2
    └── support
```

**A content folder is automatically a section&nbsp;*****if*** **the folder has an index file called&nbsp;**`_index.md`**.** (Note the underscore in that name; we’ll say more about it later on.) This causes Hugo to create a *navigable URL* for the section. For example, if `content/about-us/_index.md`&nbsp;exists, Hugo would create `xyzcompany.com/about-us/`.

Want to create a subsection, which&nbsp;[Hugo documentation](https://gohugo.io/content-management/sections/#nested-sections) calls a *nested section*? That’s simple: just add a *subfolder* with its own `_index.md` file. You can do so for as many levels down as you want.

You could further enhance the structure of `content/blog/`&nbsp;as follows:

```
.
└── content
    └── blog
        └── _index.md
        └── 2020
            └── fy-2020-results.md
            └── welcome-to-our-new-blog.md
            └── xyz-company-and-the-pandemic.md
        └── 2021
            └── 2021-roadmap.md
            └── awards-announcement.md
            └── fy-2021-results.md
            └── new-markets-for-xyz-company.md
            └── product0-reaches-eol.md
            └── product1-market-share.md
            └── releasing-product2.md
        └── 2022
            └── 2022-roadmap.md
            └── new-support-policies.md
```

See those `.md`&nbsp;files under `content/blog/2020/`, `content/blog/2021/`, and `content/blog/2022`? Hugo automatically creates navigable pages from any content files within a section, regardless of how many levels they may be below the section’s top level (in this case, `content/blog/`). Thus, the XYZ Company’s blog will include web pages at `xyzcompany.com/blog/2020/fy-2020-results/`, `xyzcompany.com/blog/2021/awards-announcement/`, and so on. This all happens because of the presence of that `content/blog/_index.md`&nbsp;file, as we’ll soon explain.

By default, Hugo considers a section’s top-level web page to be a *list* of the web pages within the section. Using the most recent example above, this means `xyzcompany.com/blog/`&nbsp;would be a list of all the site’s blog posts within `content/blog/` (if you added a loop to display them, that is). Later, we’ll talk about how to exercise more control over what one would find at that URL.

Now, look at this further breakdown of the overall example:

```
.
└── content
    └── about-us
        └── leadership
```

If the XYZ Company site is to have only one page for the “leadership” content, `content/about-us/leadership/`&nbsp;needn’t be a nested section. So — because `content/about-us/`&nbsp;*is* a section — either of the following will result in a regular, *single* page at `xyzcompany.com/about-us/leadership/`\:

* `content/about-us/leadership/index.md`
* `content/about-us/leadership.md`

You can see that, in this case, the index file is called `index.md`&nbsp;rather than `_index.md`. But why? Read on.

## Bundles — and that pesky underscore&nbsp;

We’re now delving into a potentially puzzling aspect of Hugo site structure, namely the ever-popular “`_index.md`&nbsp;*vs.*&nbsp;`index.md`” question: which one do you use, and why?

That brings us to Hugo’s&nbsp;[*page bundles*](https://gohugo.io/content-management/page-bundles/). They’re mainly a way to group content with any related resources, such as images and PDFs. Hugo uses a *tree metaphor* to define the two most commonly encountered bundle types:

* *Branch bundle* — Its index file is called `_index.md`. It can have “children,” such as nested folders. If there are additional `.md`&nbsp;files within, each will get its own navigable URL. As we hinted earlier, **only a folder that’s a branch bundle can be a section.** By default, Hugo treats its index file as a list of the section’s contents, but, as we’ll see, you can exercise more control over this.
* *Leaf bundle* — Its index file is called `index.md`&nbsp;and, at build time, becomes a regular web page, not a list. It can’t be a section, and therefore can have no “children.” Any additional `.md`&nbsp;file in a leaf bundle *won’t* get its own navigable URL Other items within a leaf bundle are&nbsp;[page resources](https://gohugo.io/content-management/page-resources/) for the `index.md` file (more on that in the following example).

Perhaps the XYZ Company website has this for `product1`\:

```
.
└── content
    └── product1
        └── index.md
        └── prod1_brochure_large.pdf
        └── prod1_brochure_small.pdf
        └── prod1_hero_img.jpg
        └── prod1_users_img1.jpg
        └── prod1_users_img2.jpg
        └── prod1_users_img3.jpg
```

Because its index file is `index.md`, `content/product1/`&nbsp;is a leaf bundle. If we add another `.md` file to this folder, it will *not* have its own navigable URL. The other contents are available as “local” page resources; *e.g.*, `content/product1/index.md`&nbsp;can link to the brochures’ PDFs as follows, without having to give the entire path in each case:

```
Available brochures: [large](prod1_brochure_large.pdf); [small](prod1_brochure_small.pdf).
```

On the other hand, suppose this is the `product2` section:

```
.
└── content
    └── product2
        └── _index.md
        └── awards
            └── 2020.md
            └── 2021.md
            └── 2022.md
        └── brochures
            └── index.md
            └── prod2_brochure_large.pdf
            └── prod2_brochure_small.pdf
        └── extended-warranty.md
        └── images
            └── prod2_awards_img.jpg
            └── prod2_ext-warr_img.jpg
            └── prod2_hero_img.jpg
            └── prod2_users_img1.jpg
            └── prod2_users_img2.jpg
            └── prod2_users_img3.jpg
```

This is a branch bundle because it has `_index.md`&nbsp;in its top level, so `content/product2/extended-warranty.md`&nbsp;will become `xyzcompany.com/product2/extended-warranty/`. And, also because `content/product2/`&nbsp;is a branch bundle, Hugo will convert any of its subfolders’ `.md` files to navigable URLs: *e.g.*, `content/product2/awards/2020.md`&nbsp;will become `xyzcompany.com/product2/awards/2020/`.

Is it best for `xyzcompany.com/product2/`&nbsp;to be merely a list of its section’s content? Probably not. So let’s cover how you can make sure it’s simply a regular web page with the content and appearance you want.

## Taking the templating reins

A typical Hugo site has, at the very least, the following *layout templates*\:

```
.
└── layouts
    └── _default
        └── baseof.html
        └── list.html
        └── single.html
    └── index.html
```

(If you were using a *theme* called `my-theme`, all of the above would go under `themes/my-theme/`, but we’ll stick with this more minimal example since it’s easier to understand at a glance.)

By default, Hugo will assign `layouts/_default/single.html`&nbsp;as the template for a folder’s `index.md`, while it makes `layouts/_default/list.html`&nbsp;the template for a section’s `_index.md`. (`layouts/index.html` is for the site’s home page; if this layout isn’t present, the home page falls back to `layouts/_default/single.html`.) This standard behavior is unlikely to be suitable in all cases, especially as a site’s structure becomes more complex, so this is where additional considerations come into the picture.

Once more, we’ll borrow from our earlier example:

```
.
└── content
    └── about-us
        └── _index.md
        └── company-history.md
        └── office-locations.md
    └── support
        └── index.md
```

If left as-is, this would mean:

* `xyzcompany.com/about-us/`&nbsp;would have the look-and-feel of the `layouts/_default/list.html`&nbsp;template.
* `xyzcompany.com/about-us/company-history/`, `xyzcompany.com/about-us/office-locations`, and `xyzcompany.com/support/` each would use the look-and-feel of the `layouts/_default/single.html` template.

Moreover, each of these `.md` files’ resulting web pages would have only whatever content (if any) the applicable template allows. That’s probably not what you want. Instead, you can **add new templates** to get around Hugo’s default behavior. This is possible partly because Hugo assigns a content&nbsp;`type`&nbsp;to each content file, and the `type` determines the layout it will take.

The `type` for a top-level section’s `_index.md` file is automatically the section’s folder name. For example, the `type` for `content/about-us/_index.md` is `about-us`. (This is sufficient at the top level; we’ll discuss `type`s and subsections in a bit.)

You can manually assign the `type` for a content file whose immediate folder is *not* a section, as would be the case for `content/about-us/offices/index.md`.

How can we make a section’s content files look different from the site’s default templates? The answer is: we can create templates with the same nesting in `layouts/` as the content files have in `content/`. When you do this, it will make the content files use these templates instead of the site’s defaults:

```
.
└── content
    └── about-us
        └── _index.md
        └── company-history.md
        └── office-locations.md
└── layouts
    └── about-us
        └── section.html
        └── single.html
```

Note the presence of that `about-us/section.html` file? The `about-us` index file will use it by default, so you can make this section look and work in whatever manner works best for your site. (For safety’s sake, you may wish to refer to Hugo’s&nbsp;[lookup order documentation](https://gohugo.io/templates/lookup-order/).)

For the other `.md` pages at the level of `content/about-us` — `content/about-us/company-history.md`&nbsp;and `content/about-us/office-locations.md`&nbsp;— the `layouts/about-us/single.html` template comes into play, ensuring that those pages won’t rely on the site-wide default `single.html`&nbsp;template.

And what about a content file whose immediate folder is *not* a section, like `content/support/index.md`? In that case, create `layouts/support/single.html`\:

```
.
└── content
    └── support
        └── index.md
└── layouts
    └── support
        └── single.html
```

Then, in the&nbsp;[front matter](https://gohugo.io/content-management/front-matter/) for `content/support/index.md`, add a key of `type` and a value of `"support"`\:

```markdown
---
type: "support"
title: "XYZ Company Customer Support"
date: 2014-07-01T14:00:00-06:00
lastmod: 2022-02-28T15:37:00-06:00
---
```

As you go further down the levels, just apply the appropriate procedure based on whether a folder is a section and where the desired template is located. Let’s say `content/about-us/` has a subsection about how XYZ Company contributes to various charities:

```
.
└── content
    └── about-us
        └── _index.md
        └── company-history.md
        └── office-locations.md
        └── philanthropy
            └── _index.md
            └── 2022-charity-drive.md
            └── previous-years.md
```

To give `xyzcompany.com/about-us/philanthropy/`&nbsp;its own separate layout, you’d create `layouts/about-us/philanthropy/section.html`&nbsp;because it’s a section — *and* specify `type: "about-us/philanthropy"`&nbsp;in the front matter of its index file. If you neglect that last part, its formatting will “cascade” down from the `layouts/about-us/`&nbsp;level.

And what of the other two `.md` files therein? If it’s acceptable for them to share one layout, creating `layouts/about-us/philanthropy/single.html`&nbsp;would be sufficient. If you prefer they not look so similar, you can create a leaf bundle subfolder for each underneath `content/about-us/philanthropy/`&nbsp;and then make layouts at corresponding levels for each within `layouts/`, as explained earlier. In either case, you’ll need to make the fitting `type`&nbsp;declaration in each `.md`&nbsp;file’s front matter so as to avoid the aforementioned “cascading” effect from above.

Finally: what about the templates themselves? How do you give each page more complex content than what you could derive from a simple `_index.md`&nbsp;or `index.md`&nbsp;file? And what about those items which probably *should* be the same site-wide, like headers and footers? Answering those questions would take us deeper into the general subject of Hugo template files than this article has the space, or scope, to cover. Nonetheless, we can make at least these two points:

* The content for a *one-off* page, like our `xyzcompany.com/support/`&nbsp;example, probably should exist largely in that page’s template rather than only the page’s index file. While this approach does require much more use of HTML and CSS, it also provides maximum control over where and how the content appears on the page.
* Universal site-wide content, such as navigation elements and footers, should reside in&nbsp;[partial templates](https://gohugo.io/templates/partials/) (“partials”) — which, in our previous example, would exist in `layouts/partials/`&nbsp;and be called from there with the `partial`&nbsp;command (*e.g.*, `{% raw %}{{ partial "footer.html" }}{% endraw %}`&nbsp;if the partial template is `layouts/partials/footer.html`).

And, yes, in case you’re wondering: considerations like these definitely could pose problems for your non-technical clients at XYZ Company after you’ve finished developing their site. Fortunately, one of the many advantages of **choosing&nbsp;**[**CloudCannon**](https://cloudcannon.com/) **as the CMS for your Hugo project** is that, with CloudCannon, your clients can build and edit pages visually without having to see, much less write or edit, a single line of code\!

## All together now

This discussion of the nearly total control that Hugo gives you over a website’s structure may have you remembering a famous line from the late Stan Lee: “With great power comes great responsibility.” As you learn what we’ve explained within, you’re already assuming that responsibility. Good going\! But if you’re also ruefully recalling the old saw, “It’s lonely at the top,” fear not: when you make CloudCannon part of the project, you’re not alone at all. In fact, you have the leading SSG-savvy CMS and its team at your side. You can build that site with all the power Hugo gives you, confident that CloudCannon will make it simple for your clients to use and maintain.

By the way, it’s also wise to learn from CloudCannon’s excellent&nbsp;[Hugo tutorial](https://cloudcannon.com/community/learn/hugo-tutorial/) by Farrel Burns. Regarding the subjects we covered in this article, you’ll particularly want to read the parts about&nbsp;[content](https://cloudcannon.com/community/learn/hugo-tutorial/content-and-blogging-in-hugo/#content-concepts) and&nbsp;[page bundles](https://cloudcannon.com/community/learn/hugo-tutorial/page-bundles-and-shortcodes/#page-bundles).
