---
draft: false
title: Global configuration within CloudCannon
description: >-
  Global configuration within CloudCannon provides a more consistent developer
  experience across multiple SSGs, and for devs importing their existing
  Jamstack sites.
series:
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
image: https://cc-dam.imgix.net/blog/global-config_enqt8d.jpg
date: 2022-02-24T05:00:00+1300
tags:
  - Features
author: 68fdf39d-de6e-4729-8747-1bf901498c5c

---
We’ve recently changed the way you set global configuration within CloudCannon. (Any previous configuration will still work, though we do recommend updating.) Rather than relying on your SSG’s config files, we now use a specific file for global configuration, which also acts as the base-level for defining options in your [configuration cascade](https://cloudcannon.com/documentation/articles/using-the-configuration-cascade/).

At a high level, this means two things. Firstly, as we add more SSGs to CloudCannon we’ll be able to provide a more consistent developer experience, meaning developers who work across multiple SSGs will be able to use their preferred configuration settings across each new project. Secondly, and importantly for developers importing existing Jamstack websites to CloudCannon, there is a much clearer separation between SSG and CMS, so it’s easier to maintain and understand what configuration is applied where. As an added bonus, there’s also less vendor lock-in to CloudCannon.

We’ve also renamed some configuration keys, removing the underscores from all but the configuration cascade variables — in those cases the underscores help to make them identifiable. (They’re also still useful there to help avoid a naming clash, as you can define them alongside front matter in files.) See our [migration guide](https://cloudcannon.com/documentation/articles/migrating-to-global-configuration-files/) for more information, a full list of renamed keys and options, and full instructions for updating.

Finally, we’ve introduced two new keys, `sort` (Object), which sets the default sorting for the collection each time it’s opened, and `sort_options` (Array), which controls the available options in the sort menu. Each option contains `key` (required; defines what field contains the value to sort on inside each collection item’s data), `order` (controls which sort values come first), and `label` (the text that displays in the sort option list).

These two new keys are improvements on the previous `sort_key` option, which is now deprecated (though will continue to function).

Let’s look at a real-world example for a staff member collection.

Normally, the sort menu would contain all possible front matter fields from the first collection item. This is flexible enough for the general case, but likely contains fields you won't need to sort on, and the labels might be vague. Here’s how you could provide options for sorting by `name` both ascending and descending, and for most recent `start_date` first. Once set, the default options will no longer be shown:

```yaml
collections_config:
  staff_members:
    sort_options:
      - key: name
      - key: name
        order: desc
      - key: start_date
        order: desc
        label: Newly-employed first
```

Configuring collections is now *almost* entirely the same across the SSGs
we support, with the only exceptions being those with more options or
requirements. Working with highly configurable SSGs like Next.js and
SvelteKit, for example, you will still need to define where certain files
are. In any case, we’d love to see how you use our new global
configuration files, and how they help your workflows.


As always, if you have questions, feel free to ask our support team
in-app\!