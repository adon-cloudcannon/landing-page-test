---
title: Hugo templating basics
image: 
order: '4'
tutorial: hugo-beginner-tutorial
description: |-
  Go templates is the flexible templating language used in Hugo. In this lesson
    we'll go over basic Go templating concepts and see how you can use it on your
    site.
---

{% bookshop "markdown/youtube" id:"iDAWQHSH5fE" title:"Hugo Templating Basics" extend:true %}

With Hugo templating, you can control how your page is rendered. You can use variables, loop over arrays, check conditions, and run functions. Think of it as a simple programming language to help build the pages on your site. Those curly braces in your layout {% raw %}`{{ }}`{% endraw %}, that’s Hugo templating.

## What is front matter?

Front matter is a snippet of metadata at the top of your content files. Some of the metadata will be specifically for Hugo, for example, setting a layout, or indicating the current page is a draft. Other forms of metadata will be specific for your site, for example, indicating which type of hero to use on the page, or a list of your top five favorite foods.

Front matter comes in the form of a small [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started) snippet at the top of content files. We’ve seen this on both the index and about pages:

```markdown
---
title: Home
---
```

It might not look like much, but we can reference this front matter in our layout using Hugo templating.

## What is Hugo templating?

Hugo uses Go templating as its templating language in layouts. It’s easy once you get your head around it. As with many things in Hugo land, sometimes it’s easier to show rather than tell.

## Examples of Hugo templating


### Output a string


{% raw %}
 ```html
<p>A Go template is a normal HTML page. When you want to execute a piece of 
code, you can use double curly braces like this: {{ "Hello!" }}.</p>
```
{% endraw %}


### Output from front matter


{% raw %}
 ```html
<!-- You can reference a variable from your front matter in a layout with .Params. For example, you 
could output the title on your pages with: -->

<title>{{ .Params.title }}</title>
```
{% endraw %}


### Output from site configuration


{% raw %}
 ```html
<!-- Sometimes you'll want to set a variable globally in your config.toml. 
Hugo has already initalized a title in your config.toml. You can access
a variable from your global config with site. For example: -->

<title>{{ .Params.title }} | {{ .Site.title }}</title>
```
{% endraw %}


### Conditions


{% raw %}
 ```html
<!-- We might want to check if the front matter title exists. If
it exists, output it; if not, use the global config title. -->

{{ if isset .Params "title" }}
  <title>{{ .Params.title }}</title>
{{ else }}
  <title>{{ .Site.title }}</title>
{{ end }}
```
{% endraw %}


### Set and output a variable


{% raw %}
 ```html
<!-- variables at set with a $ sign. For example: -->
{{ $favorite_food := "Gazelle" }}
{{ $favorite_food }}
```
{% endraw %}


### Looping


{% raw %}
 ```html
<!-- In Go, an array that can change size is called a slice.
You can iterate over an array or slice using range. -->
{{ $best_friends := slice "pumbaa" "timon" "nala" "rafiki" }}

<ul>
{{ range $best_friends }}
  <li>{{ . }}</li>
{{ end }}
</ul>
```
{% endraw %}


### Nested Key values

Content file:

{% raw %}
 ```html
---
title: Appearance
apperance:
  eyes: green
  snoot: boopable
  whiskers: true
  limbs:
    - claws: 5
      side: left
      position: front
    - claws: 4
      side: right
      position: front
    - claws: 3
      side: left
      position: back
    - claws: 5
      side: right
      position: back
---
```
{% endraw %}

Layout file:

{% raw %}
 ```html
<!-- If we want to output all of these variables, we could call 
.Params.appearance.x for each one. Instead we could use `with` to change 
the context to '.'. It also has the benefit of checking whether the 
variable exists and won't run the block if it doesn't. -->

{{ with .Params.appearance }}
<h3>My top appearance traits</h3>
<dl>
	<dt>Eyes</dt>
  <dd>{{ .eyes }}</dd>

  <dt>Snoot</dt>
  <dd>{{ .snoot }}</dd>

  <dt>Whiskers</dt>
  <dd>{{ .whiskers }}</dd>
	
	{{ with .limbs }}
    <dt>Claws</dt>
    <dd>
	    <ul>
      {{ range . }}
        <li>{{ .position }} {{ .side }} {{ .claws }</li>
      {{ end }}
      </ul>
    </dd>
  {{ end }}
</dl>
{{ end }}
```
{% endraw %}

These are the foundations of templating. You’ll be using all of these concepts throughout your Hugo journey. You can browse through the [templating documentation](https://gohugo.io/templates/introduction/) to get an idea of what else you can do.

If you like to keep your HTML output tidy, you can use {% raw %}`{{-</code> and <code>-}}`{% endraw %} to trim the whitespace surrounding the tag. [The Hugo documentation has a great example of this](https://gohugo.io/templates/introduction/#whitespace).

## Putting it all together

Let’s put our new Hugo templating knowledge into action by adding a footer to your website that includes your name and current year. On top of that, we’ll add an optional front matter field you can use to hide the footer on a particular page.

Let’s start with an easy one. Your name. Add it as a new key in your `config.toml`. Because this is just something for this site rather than a special Hugo term, we put it under the params object:

{% raw %}
 ```html
[params]
name = 'Simba'
```
{% endraw %}

Now let’s create the partial. Add `footer.html` to your layout partials directory with the following:

{% raw %}
 ```html
{{ with .Params.hide_footer }}
  <!-- No footer here! -->
{{ else }}
  <footer>
    Website made by {{ .Site.Params.name }} in {{ now.Year }}
  </footer>
{{ end }}
```
{% endraw %}

And finally call the partial before `</body>` in the `baseof.html` layout:

{% raw %}
 ```html
{{ partial "footer.html" . }}
```
{% endraw %}

To check the `hide_footer` front matter is working, let’s turn the footer off on your `about.md` page by adding this to the front matter:

```yaml
hide_footer: true
```

Run `hugo serve` and look at your site in the browser. The home page has the footer and the about page doesn’t.

## What’s next?

Next, we’ll explore [creating a blog in Hugo](/community/learn/hugo-beginner-tutorial/blogging-in-hugo/) and put our new Hugo templating knowledge to the test.
