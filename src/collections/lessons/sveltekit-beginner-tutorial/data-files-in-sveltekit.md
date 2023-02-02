---
title: Data files in SvelteKit
image: https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/tutorial-sveltekit.png
order: 6
tutorial: sveltekit-beginner-tutorial-series
description: >-
  Use data files to import existing data or have an easy way of managing global
  data in this SvelteKit tutorial.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---

In this final lesson, we’ll put everything together to create a page with a map which lists top dog parks. We’ll generate a `.json` file which contains the location and other metadata for a dog walk, then another file which fetches the `.json` file and renders the map. Let’s get to it\!

## Generating a JSON file

All the metadata for the park — the name, latitude and longitude — needs to live somewhere. We’re going to store it in a static JSON file to keep things simple. Create `/static/locations.json` with the following content:

```json


[
  {
    "name": "Rotary Dog Park",
    "latitude": "-45.883450",
    "longitude": "170.541870"
  },
  {
    "name": "Wakari Dog Park",
    "latitude": "-45.8558982",
    "longitude": "170.4745478"
  },
  {
    "name": "Kew Park Dog Exercise Area",
    "latitude": "-45.8993109",
    "longitude": "170.4841993"
  },
  {
    "name": "Jubilee Park",
    "latitude": "-45.8792223",
    "longitude": "170.4880913"
  },
  {
    "name": "Bayfield Park",
    "latitude": "-45.8937276",
    "longitude": "170.5249021"
  }
]
```


### Rendering the map

We’re going to create a reusable component that we can use anywhere on the site to output our favorite dog parks. We’re using a library called [Leaflet](https://leafletjs.com/) to create the map and markers so we’ll install the dependencies for this first. In your terminal run:

```shell
npm i -D leaflet
```

With leaflet installed, we can put it to work. Let’s create a new Map component at `/src/lib/Map.svelte` with the following:

{% raw %}
 ```html
<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';

  onMount(async () => {
    if (browser) {
      const response = await fetch(`/locations.json`);
      const markers = await response.json();

      const L = await import('leaflet');

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
    }
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" crossorigin=""/>
</svelte:head>

<div id="map" />

<style lang="scss">
  #map {
    height: 400px;
    width: 100%;
  }
</style>
```
{% endraw %}

I’ll break this down so you can understand what’s going on here.

First, we’re importing two scripts:

* **onMount** - is a callback that runs when the component is first rendered. We only want to initialize the map and start adding the markers once the HTML is rendered.
* **browser** - SvelteKit is isomorphic so it’s able to run the same JavaScript in the backend and frontend. In this case, it doesn’t make any sense to initialize a map and add markers to it in the backend. We’re using browser to only run this code in the frontend.

So all of this ensures, we’re in the right environment and we’re ready to initalize the map:

```javascript
import { onMount } from 'svelte';
import { browser } from '$app/env';

onMount(async () => {
    if (browser) {
       ...
    }
});
```

Now we need to get our locations, so we fetch them from the `.json` file we created earlier:

```javascript
const response = await fetch(`/locations.json`);
const markers = await response.json();
```

Then we import the leaflet library and initialize the map:

```javascript
const L = await import('leaflet');

const map = L.map('map');
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
  {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
  .addTo(map);
```

Then we’re adding the markers and setting the bounds so the map is centered and zoomed in on the markers:

```javascript
let bounds = [];
for (let i = 0; i < markers.length; i++ ) {
  const marker = L.marker([markers[i].latitude, markers[i].longitude]).addTo(map);
  marker.bindPopup(markers[i].name);
  bounds.push([markers[i].latitude, markers[i].longitude]);
}

map.fitBounds(bounds);
```

We have to include the styles which we’re adding straight to the `<head>`\:

{% raw %}
 ```html
<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" crossorigin=""/>
</svelte:head>
```
{% endraw %}

Add the element that holds the map:

{% raw %}
 ```html
<div id="map" />
```
{% endraw %}

And finally add some basic styles:

```javascript
<style lang="scss">
  #map {
    height: 400px;
    width: 100%;
  }
</style>
```

Phew\! Take a look at your hard work and admire the beautiful map you’ve created.

## What’s next?

Congratulations on becoming a SvelteKit beginner\! You should have a high level understanding of many of the concepts in the framework which will provide a solid foundation to build upon. To continue your journey into the world of SvelteKit, there are a number of great resources I recommend:

* Running through the [interactive Svelte tutoria](https://svelte.dev/tutorial/basics)l is the best place to start. Many of your questions and points of confusion will likely be answered by going through this tutorial.
* The [Svelte Docs](https://svelte.dev/docs) and [SvelteKit Docs](https://kit.svelte.dev/docs/introduction) are both excellent references.
* The [SvelteSociety Discord](https://discord.com/invite/svelte) is a good way to get support and connect with the community.

Finally I want to briefly mention [CloudCannon](https://cloudcannon.com/sveltekit-cms/) — it’s a content management system with first-class support for SvelteKit. It syncs directly with your Git repository, so your development team can continue working in SvelteKit while your content team can manage the content on the site. It’s the best of both worlds.

Thanks for reading and keep on building with SvelteKit\!
