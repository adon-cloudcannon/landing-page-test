---
title: Eleventy global data files
image: >-
  https://dam-cdn.cloudcannon.com/eleventy-beginner-tutorial-6-global-data-files.png
order: 6
tutorial: eleventy-beginner-guide
description: Learn how to use a global data file to populate a map on your Eleventy site.
---
In this final lesson we’re going to put everything we’ve learned so far into one magnificent page which lists top places to spot an opossum.

## What is a global data file?

A global data files allow you to put a `.json` or `.js` files into a directory named `_data` and the data will be available across all of your template/content files. `.js` files are executed at build time and are a great way to pull data from an external source or perform some other computation to generate a dataset.

## Creating your first data file

First, we’ll create a global data file with top opossum spots. Create the directory `_data` in the root of the site and inside, `locations.json` with the following content:

```json
[
  {
    "name": "Kentucky Ridge State Forest",
    "latitude": "36.736700",
    "longitude": "-83.762480"
  },
  {
    "name": "Amity Park",
    "latitude": "35.932640",
    "longitude": "-82.006000"
  },
  {
    "name": "Mill Creek Park",
    "latitude": "40.030819",
    "longitude": "-122.115387"
  },
	{
    "name": "Willamette National Forest",
    "latitude": "44.058990",
    "longitude": "-122.484970"
  },
	{
    "name": "The Mound",
    "latitude": "32.490819",
    "longitude": "-80.320408"
  }
]
```


## Map include

Putting a map with markers on our site is one thing, creating a reusable component where we can pass in an array of markers and plot them is another. With the latter we can reuse this map component any time we want to plot a list of markers on a map.

To make this a reusable component, we’ll create a partial which expects an array to be passed to it. Create `/_includes/_map.html` with the following content:

{% raw %}
 ```html
<div id="map"></div>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" crossorigin=""></script>
<script>
  let markers = {{ markers | json }};
</script>
<script src="/assets/map.js"></script>
```
{% endraw %}

There’s a lot going on here. Let me explain:

1. First we have the map element which will hold the map.
2. Then we’re loading the stylesheet for Leaflet, which will help us create nice pins and pop-ups on the map.
3. Next is the leaflet JavaScript file.
4. Following that, we’re outputting the list of markers as JSON.
5. Finally we’re referencing `/assets/map.js` which we’ll create shortly. This is responsible for initializing the map and adding the markers.

Let’s add the JavaScript to initialize the map and add the markers. Create `/assets/map.js` with the following content:

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

The final set is to actually use the include. Open up `/about.md` and append the following:

{% raw %}
```markdown
{% include "_map.html" markers:locations %}
```
{% endraw %}

This passes the locations global data file we created earlier into the map partial.

Fire up the browser, navigate to your about page, and admire all your hard work.

## What’s next?

This is only the beginning of your Eleventy journey. You now have the skills to build a basic Eleventy site. To continue the journey there’s a few resources I’d recommend:

* The [Eleventy documentation](https://www.11ty.dev/docs/) is a great resource for learning everything Eleventy has to offer
* The [Eleventy Discord](https://discord.gg/GBkBy9u) is a great place to get support and connect with the community.

Finally I want to briefly mention [CloudCannon](https://cloudcannon.com/eleventy-cms/) — it’s a content management system with first-class support for Eleventy. It syncs directly with your Git repository, so your development team can continue working in Eleventy while your content team can manage the content on the site. It’s the best of both worlds.

Thanks for reading and keep on building with Eleventy\!
