---
_schema: default
title: Data files in Jekyll
image: https://cc-dam.imgix.net/community/Jekyll-tutorial.jpg
order: 9
tutorial: jekyll-tutorial
description: >-
  Supplement your Jekyll site with globally available data that can be used on
  any page in this Jekyll tutorial.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---
### What you’ll learn here:

* Creating Jekyll data files to act as a database alternative
* Using data files to populate a Google Map

```shell
# Starting repo
git clone https://github.com/CloudCannon/jekyll-learn-blog-template.git

# Starting branch:
git checkout data-intro-start

# Finished branch:
git checkout data-intro-finish
```

## What are Jekyll data files?

Sometimes you also need supplemental data to use on pages, but not as its own page, much like from a database or API. Jekyll allows you to create data files and access them globally, just like collections. This way you can maintain your own mini-databases, but with very little setup needs. A number of file formats are supported, including JSON, YAML, CSV (comma-separated values), and TSV (tab-separated values).

In this example, we will create a page making use of Google Maps. Then we will use a data file to populate the map with real locations of our amazing endangered birds. Read more on data files [on Jekyll's official site](https://jekyllrb.com/docs/datafiles/).

## Creating data files

First, let’s follow the usual conventions. If you haven’t already guessed it, we need to create a `_data` folder for our files. Then, we can create a `<filename>.yml` file with our data. For convenience, in the root of the project, data.zip has been added, with `locations.yml` (with coordinates of our birds and any supporting information) and `staff.yml`. Simply unzip these files into `_data`.

### Data use case 1 - location map

Now that we have our data files, we can simply access `locations.yml` through `site.data.locations`. No need for any more setup in `_config.yml`, unlike collections.

To make things easier, a few things have already been set up that aren’t the focus of this lesson:

* `js/map.js`&nbsp;with the necessary JavaScript code for working with a (development) Google Map (feel free to have a look if you aren’t familiar with Google Maps setup, or would like to see the marker setup).
* `locations.html` with script tags linking map.js and initializing the map.

All we need to do is use the data, which we can transform into JSON with the `jsonify` filter. Simply add this to the last script tag:

{% raw %}
 ```html
<script>
  let markers = {{ site.data.locations | jsonify }};
  google.maps.event.addDomListener(window, 'load', initializeMap);
</script>

```
{% endraw %}

When we view the page in the browser, all markers should now be visible. We can add more markers to the data file and it will be populated on the next Jekyll build.

### Data use case 2 - list of staff

Another great use of data is simple information about people, such as jobs or contacts.

One thing that might make sense here is to provide staff contact details for sightings of rare birds. Then staff members could be contacted to update the `locations.yml` file. We already have `staff.yml`&nbsp;in our `_data` folder, with some simple contents (randomly generated names and a placeholder image).

Now we can simply add a new block below our map on `locations.html`\:

{% raw %}
 ```html
<div class="contact">
  <h2 class="contact__heading">Report a sighting</h2>
  <p>If you think you've spotted an endangered species, please contact one of our friendly staff to let them know.</p>
</div>
<div class="staff">
  {% for person in site.data.staff %}
    <div class="staff-member">
      <img class="staff-member__image" src="{{ person.image }}" alt="Image of {{ person.name }}">
      <div>
        <p class="staff-member__name">{{ person.name }}</p>
        <p>Contact options: </p>
        <ul class="staff-member__contacts">
          <li><a class="option" href="#">Email</a></li>
          <li><a class="option" href="#">Facebook</a></li>
          <li><a class="option" href="#">Twitter</a></li>
        </ul>
      </div>
    </div>
  {% endfor %}
</div>
```
{% endraw %}

This will output all of our staff information, including names, images, and links (just home pages for now) to their email/social media. If we want to add more information or more staff, it is now easier to manage.

## What’s next?

This is the end of the Jekyll beginner tutorial. We have dealt with all of the major topics in Jekyll and built a basic but decent-looking site. Hopefully you now feel confident putting together an easily maintainable static site.

Of course, Jekyll is not a CMS. If you wish to deploy your site into the wider world and have other people contribute to it - especially non-technical people - CloudCannon offers an easy-to-use and [beautiful CMS solution](https://cloudcannon.com/jekyll-cms/).