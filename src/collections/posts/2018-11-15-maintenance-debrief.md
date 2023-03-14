---
title: Maintenance Debrief
date: 2018-11-15T13:57:00+1300
tags:
  - Company
author: be1f96bb-0393-4938-b444-a5fb2f0c8590
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/uploads/blog-closeup-metal-gears.jpg
---
We have successfully completed our [Scheduled Maintenance](/operations/2018/11/13/scheduled-maintenance/). During this time we allocated two hours and completed the migration in just over three hours. During the update we had the following successes:

1. Upgraded our Postgres database four major versions
2. Added a set of other security improvements
3. Achieved zero downtime on sites

## How we communicated the downtime

To communicate in our app, we use Intercom. Intercom offers us a way to send a message to all active users. The logged in users were sent a message and then again once it was completed.

On our marketing sites we added a banner that linked to our blog. To do this we updated a data file in our jekyll theme called `_data/banner_notification.yml`. This file looks like:

```yaml
enabled: true
text: Scheduled Maintanence today at 5:00pm NZDT
url: https://cloudcannon.com/operations/2018/11/13/scheduled-maintenance/
```

This file tells our default layout to add a clickable banner on the top of all pages:

```html
{% raw %}{% if site.data.banner_notification.enabled %}
  <div class="banner-notification">
    <p>
      <a href="{{ site.data.banner_notification.url }}">
        {{ site.data.banner_notification.text }}
      </a>
    </p>
  </div>
{% endif %}{% endraw %}
```

Our sites are built using [CloudCannon suite](https://suite.cloudcannon.com), to build our sites locally we run `gulp dev`. Using iterm2 we build all of our sites simultaneously and the suite even watches the local Jekyll Theme repository.

<div class="cms-embed" data-cms-embed="PGRpdiBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy1ib3R0b206NjYlIiBjbGFzcz0ic2NyZWVuc2hvdCI+PGlmcmFtZSBzcmM9Imh0dHBzOi8vZ2Z5Y2F0LmNvbS9pZnIvRXhjaXRhYmxlRm9uZENlbnRpcGVkZT9oZD0xIiBmcmFtZWJvcmRlcj0iMCIgc2Nyb2xsaW5nPSJubyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPjwvZGl2Pg=="><div style="position:relative;padding-bottom:66%" class="screenshot"><iframe src="https://gfycat.com/ifr/ExcitableFondCentipede?hd=1" frameborder="0" scrolling="no" width="100%" height="100%" style="position:absolute;top:0;left:0" allowfullscreen=""></iframe></div></div>

Once built we can see that the banner is live on all sites.

<div class="cms-embed" data-cms-embed="PGRpdiBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy1ib3R0b206NjYlIiBjbGFzcz0ic2NyZWVuc2hvdCI+PGlmcmFtZSBzcmM9Imh0dHBzOi8vZ2Z5Y2F0LmNvbS9pZnIvV2F0ZXJsb2dnZWRPcm5lcnlEb3VnbGFzZmlyYmFya2JlZXRsZT9oZD0xIiBmcmFtZWJvcmRlcj0iMCIgc2Nyb2xsaW5nPSJubyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPjwvZGl2Pg=="><div style="position:relative;padding-bottom:66%" class="screenshot"><iframe src="https://gfycat.com/ifr/WaterloggedOrneryDouglasfirbarkbeetle?hd=1" frameborder="0" scrolling="no" width="100%" height="100%" style="position:absolute;top:0;left:0" allowfullscreen=""></iframe></div></div>

To get this live we push the updated `Gemfile.lock` to master and publish to production via CloudCannon.

## Improvements for next time

Here are the updates we are going to make the next time we schedule maintenance:

* Inform earlier
* Update our status page and integrate this with our app
* Integrate our [change log](https://cloudcannon.com/changelog/) in the app

## Why three hours not two?

Once we completed the database upgrades with 15 minutes to spare. We turned the app back on to point at the new database and the performance was abysmal. We needed to run the SQL command `VACUUM ANALYZE` on our database. This solved all of our issues but took some time. A nasty surprise at the end of a fairly seamless migration.
