---
title: Data files
image: 
order: '4'
lead_score: 1
tutorial: bootstrap-to-a-client-editable-hugo-site
description: >-
  Separate content from structure for areas you might want to update from time
  to time — this time using data files.
---

### What you'll learn here

* Pulling content out of the layout into a data file
* Iterating over a data file

```shell
# Starting repo:
git clone git@github.com:CloudCannon/Megakit-Bootstrap-Agency-Template.git

# Starting branch:
git checkout data-files-start

# Finished branch:
git checkout data-files-finish
```

There are several areas in the layout where we might want to update the content from time to time. For example, the social links, phone number, and the support email address. We can separate content from structure in a similar way we did for the navigation, only this time we’ll use data files.

A data file is a YAML, TOML, or JSON file on your Hugo site that acts like a read-only database. In this case, we’re going to create a data file for all the layout content we might want to update in the future.

Create `/hugo_src/data/company.yml` with the following content:

```yaml
facebook: https://www.facebook.com/themefisher
twitter: https://twitter.com/themefisher
github: https://github.com/themefisher/
pinterest: https://www.pinterest.com/themefisher/
support:
  phone: "+23-345-67890"
  email: support@gmail.com
```

Open up `/hugo_src/layout/_default/baseof.html` and change all of this hardcoded content in the header and footer to pull from the data file instead.

For example, the Facebook link will change to:

{% raw %}
 ```html
<a href="{{ .Site.Data.company.facebook }}" aria-label="facebook"><i class="fab fa-facebook-f"></i></a>
```
{% endraw %}

And the support phone too:

{% raw %}
 ```html
<a href="tel:{{ .Site.Data.company.support.phone }}">Call Us : <span>{{ .Site.Data.company.support.phone }}</span></a>
```
{% endraw %}

