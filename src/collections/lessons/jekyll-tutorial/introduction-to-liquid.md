---
title: Jekyll Liquid basics
tutorial: jekyll-tutorial
order: 3
image: https://dam-cdn.cloudcannon.com/community/Jekyll-tutorial.jpg
description: >-
  Learn the basic Liquid templating concepts and see how you can use Liquid on
    your site.
---
### What you’ll learn here:

* The basics of Liquid
* Using filters to modify content
* Writing conditional statements
* Iterating through data arrays

```shell
# Starting repo
git clone https://github.com/CloudCannon/jekyll-learn-blog-template.git

# Starting branch:
git checkout liquid-intro-start

# Finished branch:
git checkout liquid-intro-finish
```


## What is Liquid?

Liquid is a templating language used in Jekyll to process your site’s pages. In other words, it helps you make your HTML pages a bit more dynamic, for example adding logic or using content from elsewhere. This doesn’t require any setup - we can just start using it.

From this lesson on, you can find a link to GitHub repositories with a project that will help you practice Jekyll and Liquid - both before and after the lesson. Feel free to clone the project and follow along. Read more on [Liquid on Jekyll's official site](https://jekyllrb.com/docs/liquid/).

## Liquid basics

To use Liquid in your pages, you first need pages to have “front matter” notation (our next lesson - don’t worry for now) at the top of our page:

```plaintext
-—-
-—-
<!DOCTYPE html>
```

For Liquid code itself, there are two types of tags:

* For outputting content into a page, use two curly brackets on each side: {% raw %}`{{ content }}`{% endraw %}
* For logic/code, use a curly brackets and % sign on each side: {% raw %}`{% if condition == true %}`{% endraw %}

Importantly, logic/code blocks must also have an “end” statement, for example {% raw %}`{% endif %}, {% endfor %}`{% endraw %}

You can also set variables on pages:

* {% raw %}`{% assign myVariableName = Content of my variable; %}`{% endraw %}

Our next lesson - front matter - makes variables even easier, but you will often still find uses for Liquid variables (such as filtering front matter).

### Filters

A filter is something that you can use to change strings (text) or manipulate arrays (lists of items). To use a filter, separate the content you want to filter with a `|` sign and use a filter keyword. Filters can also be chained and take “arguments” - that is, extras to modify output more specifically.

There are many, many filters available that you might want to learn about (see our cheat sheet for more), but here we’ll just look at some common examples and output:

All uppercase

* {% raw %}`{{ "uppercase" | upcase }}`{% endraw %} = UPPERCASE

All lowercase

* {% raw %}`{{ "LOWERCASE" | downcase }}`{% endraw %} = lowercase

Length of a string

* {% raw %}`{{ "How long am I?" | size }}`{% endraw %} = 14

Add two pieces of text together (with argument)

* {% raw %}`{{ "Copyright " | append: "My Blog" }}`{% endraw %} = Copyright My Blog

Simple date formatting - international format

* {% raw %}`{{ "2021-01-01T00:00:00Z" | date_to_long_string }}`{% endraw %} = 01 January 2021

### Conditions

A condition is a great way to display content on your page based on decisions. These also combine well with “logical operators” for making comparisons:
The most common type of condition in Liquid is the “if” statement. Here’s an example of displaying a title depending on a title variable:

<table>
        <tbody><tr>
            
                <th scope="col">Operator</th>
            
                <th scope="col">Meaning</th>
            
        </tr>
        
            <tr>
                
                <td><p>==</p></td>
                
                <td><p>Equal to</p></td>
                
            </tr>
        
            <tr>
                
                <td><p>!=</p></td>
                
                <td><p>Not equal to</p></td>
                
            </tr>
        
            <tr>
                
                <td><p>&gt;</td>
                
                <td><p>Greater than</p></td>
                
            </tr>
        
            <tr>
                
                <td><p>&lt;</p></td>
                
                <td><p>Less than</p></td>
                
            </tr>
        
            <tr>
                
                <td><p>&gt;=</p></td>
                
                <td><p>Greater than or equal to</p></td>
                
            </tr>
        
            <tr>
                
                <td><p>&lt;=</p></td>
                
                <td><p>Less than or equal to</p></td>
                
            </tr>
        
            <tr>
                
                <td><p>and</p>
</td>
                
                <td><p>Both condition A and B</p>
</td>
                
            </tr>
        
            <tr>
                
                <td><p>or</p>
</td>
                
                <td><p>Either condition A or B</p>
</td>
                
            </tr>
        
    </tbody></table>


{% raw %}
 ```html
{% assign title = "home" %}
{% if title == "home" %}
  <h1>Welcome to my homepage!</h1>
{% endif %}
```
{% endraw %}

You can also use additional conditions - `elsif` (else if) and `else` - in each block:

{% raw %}
 ```html
{% assign title = "home" %}
{% if title == "home" %}
  <h1>This is the homepage</h1>
{% elsif title == "about" %}
  <h1>This is the about page</h1>
{% else %}
  <h1>Welcome!</h1>
{% endif %}
```
{% endraw %}


### Loops

A loop makes it easier to work with arrays. Here in NZ, we love our strange and characterful birds, so let’s list some on our page. Normally, in HTML, we would have to manually enter content like this:
With a loop, we can make this easier and more dynamic. The syntax for a loop is `for <variable> in <list of items>`, where “variable” can be anything you choose:

It isn’t very easy to create arrays in Liquid - see next lesson


{% raw %}
 ```html
{% assign products = "Kiwi,Tui,Kea,Karariki,Weka" | split: "," %}
<ul>
  {% for item in products %}
    <li>{{ item }}</li>
  {% endfor %}
</ul>
```
{% endraw %}

Now we can add extra items to our products array above and it will automatically appear in the HTML because of our loop. You can even use `if` statements inside loops for even more control.

## Whats next?

Now we know a bit of how Liquid works. There's plenty more to learn, as it's a big topic, so we've [prepared a cheat sheet](/cheat-sheet/jekyll-cheat-sheet/) for you too\! Another question worth answering is where we get our data from that we can use with Liquid. The array example above isn’t a great solution. In our next topic - front matter - we’ll deal with this and learn how to make our pages even more powerful.