---
_schema: default
title: Components
image:
order: 6
tutorial: bootstrap-to-a-client-editable-hugo-site
description: Set up and get two components working with Bookshop, end-to-end.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---
### What you'll learn here

* Set the structure for your component
* Define your content schema and expected content for your component

```shell
# Starting repo:
git clone git@github.com:CloudCannon/Megakit-Bootstrap-Agency-Template.git

# Starting branch:
git checkout components-start

# Finished branch:
git checkout components-end
```

Let’s get one component working end-to-end. Open `/source/index.html` and copy the slider HTML to a new file at `/hugo_src/component-library/components/slider/slider.hugo.html` :

```html
<section class="slider">
  <div class="container">
    <div class="row">
      <div class="col-lg-9 col-md-10">
        <div class="block">
          <span class="d-block mb-3 text-white text-capitalize">Prepare for new future</span>
          <h1 class="animated fadeInUp mb-5">Our work is <br>presentation of our <br>capabilities.</h1>
          <a href="#"  class="btn btn-main animated fadeInUp btn-round-full" aria-label="Get started">Get started<i class="btn-icon fa fa-angle-right ml-2"></i></a>
        </div>
      </div>
    </div>
  </div>
</section>
```

Bookshop supports native Hugo templating. Just as we have been doing throughout this tutorial, we want to separate content from structure to help with reuse and maintainability. We’ll replace each piece of content with a variable which (spoiler) will populate from the front matter on each page.

You may have noticed there’s nowhere to set the background image on this component. Currently it’s hardcoded in the CSS. We can pull this into an inline style so we as developers and later, the content editors on the team can change it.

Replace anything you might want to edit with variables in the `slider.hugo.html` component:

{% raw %}
```html
<section class="slider" style="background-image: url('{{ .background_image }}')">
	<div class="container">
		<div class="row">
			<div class="col-lg-9 col-md-10">
				<div class="block">
					<span class="d-block mb-3 text-white text-capitalize">{{ .preheading | markdownify }}</span>
					<h1 class="animated fadeInUp mb-5">{{ .heading | markdownify }}</h1>
					<a href="{{ .link.url }}"  class="btn btn-main animated fadeInUp btn-round-full" aria-label="Get started">{{ .link.text | markdownify }}<i class="btn-icon fa fa-angle-right ml-2"></i></a>
				</div>
			</div>
		</div>
	</div>
</section>
```
{% endraw %}

Bookshop components come in two parts, the first part (above) sets the structure for the component. The second part sets the metadata and expected content for the component. Copy the following into a new file: `/hugo_src/component-library/components/slider/slider.bookshop.toml` :

```toml
[component]
structures = ["content_blocks"]
label = "Slider"
description = "Main page banner block"
icon = "title"
tags = []

[props]
preheading = "Prepare for new future"
heading = "Our work is <br>presentation of our <br>capabilities."
background_image = "/images/bg/home-1.jpg"
[[props.link]]
text = "Get started"
url = "#"
```

Let’s go through each part of this file. `[component]` sets the metadata for the component:

* **structures**: Determines the front matter arrays this component can be used on in your site.
* **label**: Friendly name for this component.
* **description**: A short description of what this component is / used for.
* **icon**: A material icon that represents this component.
* **tags**: Used to help filter components.

`[props]` is the expected content schema and default content for the component. Any keys that you referenced in your template (like {% raw %}`{{ .background_image }}`{% endraw %}) should be specified here. You’ll see how we use this shortly.

Replace `/hugo_src/content/_index.md` with the following:

```markdown
---
title: "Home"
slider:
  preheading: "Prepare for new future"
  heading: "Our work is <br>presentation of our <br>capabilities."
  background_image: "/images/bg/home-1.jpg"
  link:
    text: "Get started"
    url: "#"
---
```

We’ve removed the body content on the index page and replaced it with the structured content for the slider.

Now we need to adjust `/hugo_src/layouts/_default/list.html` to render our component using the page front matter rather than outputting the body content:

Fortunately the Bookshop partial does most of the work for us, we just need to pass in the data:

{% raw %}
```
{{ define "main" }}
  {{ with .Params.slider }}
    {{ partial "bookshop" (slice "slider" .) }}
  {{ end }}
{{ end }}
```
{% endraw %}

Try running `hugo serve` to see your snazzy new slider component.

I’ll go through one more component and leave the rest to you for homework. The next component in `/source/index.html` is the Intro component. It’s a little bit trickier as it has a repeating element.

First copy the HTML source into a new file `/hugo_src/component-library/components/intro/intro.hugo.html`:

```html
<section class="section intro">
	<div class="container">
		<div class="row ">
			<div class="col-lg-8">
				<div class="section-title">
					<span class="h6 text-color ">We are creative & expert people</span>
					<h2 class="mt-3 content-title">We work with business & provide solution to client with their business problem
					</h2>
				</div>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-lg-4 col-md-6 col-12">
				<div class="intro-item mb-5 mb-lg-0">
					<i class="ti-desktop color-one"></i>
					<h4 class="mt-4 mb-3">Modern & Responsive design</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="intro-item mb-5 mb-lg-0">
					<i class="ti-medall color-one"></i>
					<h4 class="mt-4 mb-3">Awarded licensed company</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-12">
				<div class="intro-item">
					<i class="ti-layers-alt color-one"></i>
					<h4 class="mt-4 mb-3">Build your website Professionally</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
				</div>
			</div>
		</div>
	</div>
</section>
```

We can pull out the preheading and heading like we did in the previous example. When it comes to the repeating boxes, you might notice the HTML structure is exactly the same for each box, it’s only the content that’s changing. This is a perfect situation to use a loop to cut down on the amount of code we need to maintain and make the component more flexible to handle any number of boxes:

{% raw %}
```html
<section class="section intro">
	<div class="container">
		<div class="row ">
			<div class="col-lg-8">
				<div class="section-title">
					<span class="h6 text-color ">{{ .preheading | markdownify }}</span>
					<h2 class="mt-3 content-title">{{ .heading | markdownify }}</h2>
				</div>
			</div>
		</div>
		<div class="row justify-content-center">
			{{ range .sections }}
				<div class="col-lg-4 col-md-6 col-12">
					<div class="intro-item mb-5 mb-lg-0">
						<i class="{{ .icon }} color-one"></i>
						<h4 class="mt-4 mb-3">{{ .heading | markdownify }}</h4>
						<p>{{ .text | markdownify }}</p>
					</div>
				</div>
			{{ end }}
		</div>
	</div>
</section>
```
{% endraw %}

That’s much nicer. And now the corresponding `/hugo_src/component-library/components/intro/intro.bookshop.toml` to go with it:

```toml
[component]
structures = ["content_blocks"]
label = "Intro"
description = "Overview section"
icon = "receipt"
tags = []

[props]
preheading = "We are creative & expert people"
heading = "We work with business & provide solution to client with their business problem"

[[props.sections]]
icon = "ti-desktop"
heading = "Modern & Responsive design"
text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus."

[[props.sections]]
icon = "ti-medall"
heading = "Awarded licensed company"
text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus."

[[props.sections]]
icon = "ti-layers"
heading = "Build your website Professionally"
text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus."
```

Add the front matter to `/hugo_src/content/_index.md` :

```markdown
intro:
  preheading: "We are creative & expert people"
  heading: "We work with business & provide solution to client with their business problem"
  sections:
    - icon: "ti-desktop"
      heading: "Modern & Responsive design"
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus."
    - icon: "ti-medall"
      heading: "Awarded licensed company"
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus."
    - icon: "ti-layers"
      heading: "Build your website Professionally"
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus."
```

And finally adjust the layout to handle the new component:

{% raw %}
```
{{ with .Params.intro }}
  {{ partial "bookshop" (slice "intro" .) }}
{{ end }}
```
{% endraw %}

As promised, a little bit of homework before your next step. Go through the rest of the components on `/source/index.html` and convert them them to Bookshop components. Let’s leave the blog component for now, which leaves us with five:

* Slider (Already done)
* Intro (Already done)
* About
* Counter
* Services
* CTA
* Testimonial