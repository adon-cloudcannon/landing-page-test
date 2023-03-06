---
title: Using Data with Hugo
image:
order: '6'
tutorial: hugo-tutorial
description: |-
  Use data files to import existing data or have an easy way of managing global
    data in this Hugo tutorial.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---

{% bookshop "markdown/youtube" id:"SrlKh5Teu6Q" title:"Hugo Data files" extend:false %}

A data file in Hugo is sort of like a read-only database. The way it works is you can put JSON, CSV, YAML, XML, or TOML files in a directory called `data`, then access that data in a layout using `.Site.Data`. You can also download JSON or CSV files from an external source on build if you want to get fancy.

## Creating your first data file

First we’ll create a data file with all of your favorite vacation spots. Create `/data/vacation_spots.yml` with the following content:

```yaml
- name: Masai Mara National Reserve
  latitude: -1.484751
  longitude: 35.101904
- name: Serengeti National Park
  latitude: -2.333333
  longitude: 34.833332
- name: Okavango Delta
  latitude: -19.304543
  longitude: 22.643703
- name: Etosha National Park
  latitude: -18.855591
  longitude: 16.32932
- name: Kidepo Valley Park
  latitude: 3.882778
  longitude: 33.874444
```


## What are Shortcodes?

To list your favorite vacation spots, you’re going to need:

* Map software — you’ll use the fantastic [OpenStreetMap](https://www.openstreetmap.org) and [Leaflet](https://leafletjs.com/).
* A JavaScript list of markers — you have this in a data file currently
* JavaScript to set up the map and markers
* A div to hold the map

We *could* put all of this in a content file, but it’s going to be far more complicated than the simple markdown we have there currently. And what if we wanted to use this map again on another page? That’s a lot of HTML to copy and paste around.

Fortunately, Hugo has an answer, and it’s called [Shortcodes](https://gohugo.io/content-management/shortcodes/). A shortcode is similar to a partial, except you use them in content files. Hugo even has a bunch already [built in](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes).

You’ll create a shortcode which can be used in any content file to create a map with marked locations. Let’s see how it works.

## Your first Shortcode

Create a directory called `shortcodes` inside `/layouts/` and add a file called `vacation_spots.html` with the following content:

{% raw %}
 ```html
<div id="map">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" crossorigin=""></script>
<script>
  let markers = {{ $.Site.Data.vacation_spots }};
</script>
<script src="/map.js"></script>
</div>
```
{% endraw %}

There are a few things going on here, so let me explain:

1. First we have the map element which will hold the map.
2. Then we’re loading the stylesheet for Leaflet, which will help us create nice pins and pop-ups on the map.
3. Next is the leaflet JavaScript file.
4. Following that is the list of markers coming from your data file. Here it’s output as a JSON array.
5. Finally we’re referencing `/map.js` which we’ll create shortly. This is responsible for initializing the map and adding the markers.

Let’s add the JavaScript to initialize the map and add the markers. Create `/static/map.js` with the following content:

```javascript
const map = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
    .addTo(map);

let bounds = [];
for (let i = 0; i < markers.length; i++ ) {
    const marker = L.marker([markers[i].latitude, markers[i].longitude]).addTo(map);
    marker.bindPopup(markers[i].name);
    bounds.push([markers[i].latitude, markers[i].longitude]);
}

map.fitBounds(bounds);
```

We’re not here to learn JavaScript so I’ll leave this one for you to decipher (or not).

The final set is to actually use the shortcode. Open up `/content/about.md` and append the following:

{% raw %}
```markdown
### These are my favorite vacation spots

{{< vacation_spots >}}
```
{% endraw %}

Open it up in a browser and admire all your hard work.

## What’s next?

This is only the beginning of your Hugo journey. You now have the skills to build a basic Hugo site. To continue the journey there’s a few resources I recommend:

* The [Hugo documentation](https://gohugo.io/getting-started/installing/) is a great resource for learning everything Hugo has to offer
* The [Hugo community forums](https://gohugo.io/getting-started/installing/) are welcoming to new comers. This is a good place to get support and connect with the community.
* [Bootstrap to a client editable Hugo site](/tutorials/bootstrap-to-a-client-editable-hugo-site/) is a more advanced Hugo tutorial that shows you how to convert a purely static website to a Hugo site clients can update.

Finally I want to quickly mention [CloudCannon](https://cloudcannon.com/hugo-cms/) - it’s a content management system with first class support for Hugo and syncs directly with your Git repository. So your developer team can continue working in Hugo while your content team can manage the content on the site. It’s the best of both worlds.

Thanks for reading and Happy Hugoing\!
