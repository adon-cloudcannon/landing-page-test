---
title: Blog
image: 
order: 9
lead_score: 1
tutorial: bootstrap-to-a-client-editable-hugo-site
description: >-
  Complete your site's conversion to Hugo by applying all of your learning so
  far to the blog section.
---

### What you'll learn here

* Hugo partials
* Building a blog in Hugo
* Adding blog posts
* Pagination
* Taxonmies

```shell
# Starting repo:
git clone git@github.com:CloudCannon/Megakit-Bootstrap-Agency-Template.git

# Starting branch:
git checkout blog-start

# Finished branch:
git checkout blog-finish
```

We’re so close to fully Hugoifying this site\!&nbsp;

The last thing we need to do is link in the blog. This will put everything we’ve learned so far to the test.

Let’s start off creating our blog posts. Create a new directory at `/hugo_src/content/posts/` and inside create a Markdown file named `2022-03-06-helping-small-businesses-grow.md` with the following content:

```markdown
---
date: 2022-03-06
title: Helping small businesses grow
categories:
  - Creativity
image_path: /images/blog/4.jpg
author: Bobby Brown
---

Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus, consectetur? Illum libero vel nihil nisi quae, voluptatem, sapiente necessitatibus distinctio voluptates, iusto qui. Laboriosam autem, nam voluptate in beatae.

### A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.

The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, rerum beatae repellat tenetur incidunt quisquam libero dolores laudantium. Nesciunt quis itaque quidem, voluptatem autem eos animi laborum iusto expedita sapiente.
```

The filename has a special format of `{date}-{title}.md.`&nbsp;This format doesn’t require or do anything special in Hugo; we could have just as easily named it `[abc.md]`. However, this format is a good habit to get into to help you quickly find a particular post as your blog grows.

The real metadata comes from the front matter, you can see the `date`, `title`, `categories`, `image_path` and `author` are all set here. The body of the file contains the markdown for the page content.

To see how the blog list layout works and to test out pagination we need more than one post. Create three more posts with the front matter below, we can copy the body content from our original post for now.

`2022-03-07-customer-marketing-strategy.md`

```markdown
---
date: 2022-03-07
title: Customer marketing strategy
categories:
  - Marketing
image_path: /images/blog/3.jpg
author: Amy Conal
---
```

`2022-03-08-interactivity-connect-consumer.md`

```markdown
---
date: 2022-03-08
title: Connecting to the consumer
categories:
  - Sales
image_path: /images/blog/2.jpg
author: Amy Conal
---
```

`2022-03-09-improve-design-with-typography.md`

```markdown
---
date: 2022-03-09
title: Improve design with typography
categories:
  - Creativity
image_path: /images/blog/1.jpg
author: Bobby Brown
---
```

Now we need a page that lists the blog posts. Create `/hugo_src/content/posts/_index.md` with the following content:

```markdown
---
title: "Our blog"
hero:
  title: "Blog Articles"
  background_image: "/images/bg/home-2.jpg"
url: /blog/
---
```

As this is a `_index.md` file, it turns posts into a new section and will attempt to use our `/hugo_src/layouts/_default/list.html` layout. Instead of rendering an array of components, we want the layout for this page to list blog posts. We can override this layout by creating a more specific layout for this page.

Create `/hugo_src/layouts/posts/list.html`, which we’ll get to shortly. The blog list page reuses the top hero section that currently lives in `/hugo_src/layouts/_default/single.html`. Instead of duplicating this code, it’s always nicer to have a single source for the source code and pull it in where needed.

Create `/hugo_src/layouts/partials/hero.html` and move the source code for the hero there:

{% raw %}
 ```html
<section class="page-title bg-1" style="
  background-image:url('{{ .Params.hero.background_image }}');
">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="block text-center">
            <span class="text-white">{{ .Params.title }}</span>
            <h1 class="text-capitalize mb-4 text-lg">
              {{ .Params.hero.title | default .Params.title }}
            </h1>
            <ul class="list-inline">
              <li class="list-inline-item"><a href="/" class="text-white">Home</a></li>
              <li class="list-inline-item"><span class="text-white">/</span></li>
              <li class="list-inline-item text-white-50">{{ .Params.title }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
```
{% endraw %}

Now we can replace the hero source code in our `single.html` layout with a partial:

{% raw %}
 ```html
{{ partial "hero" . }}
```
{% endraw %}

Back to our `/hugo_src/layouts/posts/list.html` layout, and we can use this partial following by iterating over our posts and finally outputting logic for pagination:

{% raw %}
 ```html
{{ define "main" }}
  {{ partial "hero" . }}
  
  <section class="section blog-wrap bg-gray">
    <div class="container">
      <div class="row">

        {{ range .Paginator.Pages }}
        <div class="col-lg-6 col-md-6 mb-5">
          <div class="blog-item">
            <img loading="lazy" 
                  src="{{ .Params.image_path }}" 
                  alt="{{ .Title }}" class="img-fluid rounded">
  
            <div class="blog-item-content bg-white p-5">
              <div class="blog-item-meta bg-gray pt-2 pb-1 px-3">
                <span class="text-muted text-capitalize d-inline-block mr-3">
                  <i class="ti-pencil-alt mr-2"></i> 
                  {{ range .Params.categories }} 
                    {{ $href := print (absURL "categories/") (urlize .) }}
                    <a href="{{ $href }}">{{ . | humanize }}</a>
                  {{ end }}
                </span>
                <span class="text-black text-capitalize d-inline-block mr-3">
                  <i class="ti-user mr-1"></i> {{ .Params.author }}
                </span>
                <span class="text-black text-capitalize d-inline-block mr-3">
                  <i class="ti-time mr-1"></i> 
                  {{ .Date | time.Format ":date_long" }}
                </span>
              </div>
  
              <h3 class="mt-3 mb-3"><a href="{{ .RelPermalink }}">{{ .Title }}</a></h3>
              <p class="mb-4">{{ .Summary }}</p>
  
              <a href="{{ .RelPermalink }}" class="btn btn-small btn-main btn-round-full">
                Read More
              </a>
            </div>
          </div>
        </div>
        {{ end }}
      </div>

      {{ if gt .Paginator.TotalPages 1 }}
        <div class="row justify-content-center mt-5">
          <div class="col-lg-6 text-center">
            <nav class="navigation pagination d-inline-block">
              <div class="nav-links">
                {{ if .Paginator.HasPrev }}
                  <a class="prev page-numbers" href="{{ .Paginator.Prev.URL | relURL }}">
                    Prev
                  </a>
                {{ end }}

                <span aria-current="page" class="page-numbers current">
                  {{ .Paginator.PageNumber }} of {{ .Paginator.TotalPages }}
                </span>

                {{ if .Paginator.HasNext }}
                  <a class="next page-numbers" href="{{ .Paginator.Next.URL | relURL }}">
                    Next
                  </a>
                {{ end }}
              </div>
            </nav>
          </div>
        </div>
      {{ end }}
    </div>
  </section>
{{ end }}
```
{% endraw %}

Getting deep into how pagination works is outside the scope of this tutorial. For now, just copy the above snippet into your layout. If you’re interested in learning more, have a look at the [Hugo documentation for pagination](https://gohugo.io/templates/pagination/).

We also need to configure the pagination in our `/hugo_src/config.toml`. Paste the following below the `title` in this file:

```toml
Paginate = 20
PaginatePath = "/"
summaryLength = 10

[taxonomies]
category = "categories"

[permalinks]
posts = ":section/:year/:month/:day/:title/"
```

When you view the blog page in your browser now you’ll see your four blog posts. To check the pagination is working correctly, try changing `paginate` to 1 in your `config.toml` temporarily. You should see `1 of 4 Next` appear at the bottom of your blog page, and be able to click through the pages.

Clicking on a blog post takes us to an empty page. This is because it’s trying to use our default `single.html` layout. Let’s create a layout specifically for posts at `/hugo_src/layouts/posts/single.html`\:

{% raw %}
 ```html
{{ define "main" }}
  <section class="section blog-wrap bg-gray">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-12 mb-5">
              <div class="single-blog-item">
                <img loading="lazy" src="{{ .Params.image_path }}" alt="{{ .Title }}" class="img-fluid rounded">

                <div class="blog-item-content bg-white p-5">
                  <div class="blog-item-meta bg-gray pt-2 pb-1 px-3">
                    <span class="text-muted text-capitalize d-inline-block mr-3"><i class="ti-pencil-alt mr-2"></i> 
                      {{ range .Params.categories }} 
                        {{ $href := print (absURL "categories/") (urlize .) }}
                        <a href="{{ $href }}">{{ . | humanize }}</a>
                      {{ end }}
                    </span>
                    <span class="text-black text-capitalize d-inline-block mr-3"><i class="ti-user mr-1"></i> {{ .Params.author }}</span>
                    <span class="text-black text-capitalize d-inline-block mr-3"><i class="ti-time mr-1"></i> {{ .Date | time.Format ":date_long" }}</span>
                  </div>

                  <h2 class="mt-3 mb-4">{{ .Title }}</h2>

                  {{ .Content }}

                  <div class="tag-option mt-5 d-block d-md-flex justify-content-between align-items-center">
                    <ul class="list-inline">
                      <li class="list-inline-item"> Share: </li>
                      <li class="list-inline-item"><a href="#" ><i class="fab fa-facebook-f"
                            aria-hidden="true"></i></a></li>
                      <li class="list-inline-item"><a href="#" ><i class="fab fa-twitter"
                            aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12 mb-5">
              <div class="posts-nav bg-white p-5 d-lg-flex d-md-flex justify-content-between ">
                {{ with .Page.PrevInSection }}
                  <a class="post-prev align-items-center" href="{{ .Permalink | relURL }}">
                    <div class="posts-prev-item mb-4 mb-lg-0">
                      <span class="nav-posts-desc text-color">- Previous Post</span>
                      <h6 class="nav-posts-title mt-1">
                        {{.Title }}
                      </h6>
                    </div>
                  </a>
                {{ else }}
                  <div class="posts-prev-item mb-4 mb-lg-0"></div>
                {{ end }}
                <div class="border"></div>
                {{ with .Page.NextInSection }}
                  <a class="posts-next" href="{{ .Permalink | relURL }}">
                    <div class="posts-next-item pt-4 pt-lg-0">
                      <span class="nav-posts-desc text-lg-right text-md-right text-color d-block">- Next Post</span>
                      <h6 class="nav-posts-title mt-1">
                        {{.Title }}
                      </h6>
                    </div>
                  </a>
                {{ else }}
                  <div class="posts-prev-item mb-4 mb-lg-0"></div>
                {{ end }}
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mt-5 mt-lg-0">
          <div class="sidebar-wrap">
            <div class="sidebar-widget search card p-4 mb-3 border-0">
              <input type="text" class="form-control" placeholder="search">
              <a href="#" class="btn btn-mian btn-small d-block mt-2">search</a>
            </div>

            <div class="sidebar-widget latest-post card border-0 p-4 mb-3">
              <h5>Latest Posts</h5>

              {{ range ( where site.RegularPages "Section" "posts" | first 3 ) }}
                <div class="media border-bottom py-3">
                  <a href="#"><img loading="lazy" class="mr-4" src="{{ .Params.image_path }}" width="100" alt="blog"></a>
                  <div class="media-body">
                    <h6 class="my-2"><a href="{{ .Permalink | relURL }}">{{ .Title }}</a></h6>
                    <span class="text-sm text-muted">{{ .Date | time.Format ":date_long" }}</span>
                  </div>
                </div>
                <a href="#"></a>
              {{ end }}
            </div>

            <div class="sidebar-widget bg-white rounded tags p-4 mb-3">
              <h5 class="mb-4">Categories</h5>

              {{ range ($.Site.GetPage "taxonomyTerm" "categories").Pages }}
                <a href="{{ .Permalink }}">{{ .Title }}</a></li>
              {{ end }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
{{ end }}
```
{% endraw %}

There’s a lot going on here. By now we should be starting to get familiar with Hugo’s templating language and see connections of where this data is coming from and how it works.

The final piece of the blog is the category page. If we click on a category link (**Creativity** on the “Improve design with typography” post for example), it should take us to a page which displays all the blog posts in that category. Currently this page is blank.

Hugo will do the filtering for us, so all we need to setup is the layout. Copy the contents inside “main” in `/hugo_src/layouts/posts/list.html` to a new partial at `/hugo_src/partials/blog-list.html` and update `/post/list.html` to use the partial:

{% raw %}
 ```html
{{ define "main" }}
  {{ partial "blog-list" . }}
{{ end }}
```
{% endraw %}

Now we can create a special layout for our category page at `/hugo_src/layouts/_default/taxonomy.html` with the exact same contents:

{% raw %}
 ```html
{{ define "main" }}
  {{ partial "blog-list" . }}
{{ end }}
```
{% endraw %}

And *voila*\! Our conversion to Hugo is complete. Browse the site and admire your hard work.
