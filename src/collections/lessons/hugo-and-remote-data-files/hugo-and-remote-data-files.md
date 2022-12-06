---
title: Hugo and Remote Data Files
image: https://dam-cdn.cloudcannon.com/Tutorial social image remote data files.png
order: '1'
tutorial: hugo-and-remote-data-files
description: Learn how to use getJSON or getCSV to get remote data with Hugo.
---

In a previous tutorial, we covered [the basics of using Hugo data files](https://cloudcannon.com/community/learn/hugo-beginner-tutorial/using-data-in-hugo/). There’s one feature of data files we didn’t get a chance to get to — using `getJSON` or `getCSV` to [get remote data](https://gohugo.io/templates/data-templates/). We’ll be going deep into this powerful feature of data files in this tutorial.

## What is a remote data file?

Typically, when you are using a data file in Hugo, you’ll put a YAML, JSON, XML, or TOML file in the data directory. But what if you don’t have a local file to hand, and want to download it from somewhere at build time? That’s exactly where remote data files come in.

## How does it work?

Hugo has two functions to get remote data:

* `getJSON` for JSON data
* `getCSV` for CSV data

On build, it will download the data from the provided endpoint, which you can then iterate over or manipulate however you’d like. For example:

{% raw %}
 ```html
{{ $staff := getJSON "https://jsonplaceholder.typicode.com/users" }}
<ul class="staff">
{{ range $staff }}
  <li>
    <strong>{{ .name }}</strong> - {{ .email }}
  </li>
{{ end }}
</ul>
```
{% endraw %}

While you could download the response from an API endpoint and add to your Hugo site as a datafile manually, it would mean doing this every time the dataset is updated. Remote data files do this for you automatically, so you never need to worry if you’re using the latest dataset on your site.

## What do I use Hugo remote data files for?

There is an immensely wide range of ways you can use this feature, particularly if you combine it with something like [scheduled builds](https://cloudcannon.com/documentation/articles/scheduling-your-builds-manually/?ssg=Hugo) which rebuild your site periodically. You can really start to blend the best worlds of static and dynamic.

We’ll go over a few scenarios which covers the tip of the iceberg of the possibilities of remote data files.

## Get data from Google Sheets

We can create and edit a data set in Google Sheets and expose it as a CSV for our Hugo site to consume on build. Let’s have a look at how it works.

First, we create the data set in a Google Sheet. Here I have a list of apples, their price, and associated color:
![Hugo remote data tutorial — apple data set](https://dam-cdn.cloudcannon.com/hugo-remote-data-1.png)
 Now we can publish this publicly as a CSV. First go to File → Share → Publish to web:
![Hugo remote data tutorial — sharing data sets](https://dam-cdn.cloudcannon.com/hugo-remote-data-2.png)
 And then select Comma-separated values from the dropdown:
![Hugo remote data file — publishing to the web](https://dam-cdn.cloudcannon.com/hugo-remote-data-3.png)
 This will give you a public URL which is a CSV representation of your Google Sheet. Now we’ll use this on our site:

{% raw %}
 ```html
{{ $apples := getCSV "," "https://docs.google.com/spreadsheets/d/e/2PACX-1vRvHH3C21_53AEiR9MYxdG91a78L6a5pZWhj1kuqWM9ynYtBMQVGGBSmydyCpichyE9ewmhasFEnT73/pub?output=csv" }}
<ul class="apples">
{{ range after 1 $apples }}
  <li style="color: {{ index . 2 }}">{{ index . 0 }} - {{ index . 1 }}</li>
{{ end }}
</ul>
```
{% endraw %}

Let me break down the trickier bits of this snippet:

* `getCSV` takes a minimum of two parameters. The first is the delimiter for columns in the CSV file which is a “,” in this case. The second is the endpoint for the CSV.
* The CSV file we’re using has a header row for the column names. We don’t want to output the header row so we’ve removed the first element in the array with: `after 1 $apples`.
* Each row in `$apples` is an array, so we need to use `index` with the column number to access each item in the row.

Putting this all together will output something like this:
![Hugo remote data - list of apple prices](https://dam-cdn.cloudcannon.com/hugo-remote-data-4.png)
 If I change something in the Google Sheet and rebuild the site, you’ll see the changes reflected on the Hugo site. It’s an easy way to keep a data set up-to-date on the website.

## Source data from APIs

Remote data files are great for pulling in data from APIs. In this next example, we’ll use the public [GitHub API to list the top contributors](https://docs.github.com/en/rest/repos/repos#list-repository-contributors) to the [Hugo repository](https://github.com/gohugoio/hugo)\:

{% raw %}
 ```html
{{ $contributors := getJSON "https://api.github.com/repos/gohugoio/hugo/contributors" }}
  {{ range $contributors }}
    <a href="{{ .url }}">
      <img src="{{ .avatar_url }}" alt="{{ .login }}" width="50">
    </a>
  {{ end }}
```
{% endraw %}

Which generates the following:
![Hugo remote data files — images for Hugo GitHub contributors](https://dam-cdn.cloudcannon.com/hugo-remote-data-5.png)
 This is a super easy way to bring a dynamic element to your site. You could even start to combine these methods. For example, you could have a list of repositories in a Google Sheet, then request the contributors list for each one.

Not all APIs are public; sometimes you need to provide authentication details or other headers to make an API request. Fortunately, with both getJSON and getCSV, you can add another parameter with customer headers on the request.

Let’s demonstrate this. The GitHub example above uses the public GitHub API. It’s easy to set up but is limited to 60 requests per hour. If we need more requests, we can run the request on behalf of our own GitHub account using a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)\:

{% raw %}
 ```html
{{ $headers := (dict "Authorization" "Basic my_github_user:my_personal_access_token") }}
{{ $contributors := getJSON "https://api.github.com/repos/gohugoio/hugo/contributors" $headers }}
{{ range $contributors }}
  <a href="{{ .url }}">
    <img src="{{ .avatar_url }}" alt="{{ .login }}" width="50">
  </a>
{{ end }}
```
{% endraw %}


## What impact does using remote data files have on build speed?

Hugo will download the remote file on every build, which will have an impact on your build performance. The extent of the impact depends on a number of factors — the size of the data file, the network speeds of the external server, and your local server, to name a few. You can mitigate this impact by caching remote files.

Here’s how it works. In your global config file, set a max age:

```toml
[caches]
  [caches.getcsv]
    maxAge = -1
  [caches.getjson]
    maxAge = "14h"
```

A value of `-1` will cache the file forever, `0` turns the cache off, or you can specify a time with:

* Seconds: `30s`
* Minutes: `43m`
* or Hours: `14h`

Setting the `maxAge` to `14h`, for example, means that if more than 14 hours have elapsed since your last build, your remote data file will be updated on your next build.

## Takeaway

Using remote data files is a Hugo feature that unlocks entirely new ways of thinking about what a static site generator can do.

You'll now have a solid foundation for further experiments with your own files. Try bringing remote data files into your own projects, and you’ll really be able to push your Hugo sites to the limit.
