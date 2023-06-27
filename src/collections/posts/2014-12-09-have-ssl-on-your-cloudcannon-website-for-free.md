---
draft: false
title: Have SSL on your CloudCannon website for free
date: 2014-12-09
author: a5f00346-90df-4d69-9ce1-d9e4c8e51b10
tags:
  - Resources
cta:
  title: Launch your website today
  body_text: Give your content team full autonomy on your developer-approved tech stack with CloudCannon.
  button:
    content: 
      link: "https://app.cloudcannon.com/register?trial=cc_standard"
      text: "Get started free!"
    styles:
      size:
      style: "outline"
      extra_classes:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/uploads/ssl-cert.jpg
---

Today I’m going to show you how you can add SSL to your CloudCannon website in under 5 minutes. What’s even better, it’s free\!

Before we get started let’s cover a few questions:

## What’s SSL?

SSL is a way of ensuring all the data passed between a website visitor and the server remains private. For websites with login passwords and private data, SSL is essential. For static websites it’s not so important as the website is already public. However, for visitors there’s an extra level of trust from seeing the padlock in their browser.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/assets/blog/ssl/blurred.png" alt:"Secure page" extend:false border:false %}

## What’s CloudFlare?

CloudFlare is service which works as a reverse proxy for your website. What that means is when someone visits your website, the request will go to CloudFlare, then CloudFlare will download the website from the hosting provider and serve it to the user.

The advantage of doing this is CloudFlare does a number of performance and security enhancements so your website will load faster and be more immune to malicious attacks. They’ve also recently added free SSL support.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/assets/blog/ssl/cloudflare-logo.png" alt:"CloudFlare" extend:false border:false %}

## Why should I care?

Google recently [announced](http://googlewebmastercentral.blogspot.co.nz/2014/08/https-as-ranking-signal.html) that it will prioritise sites that use SSL. Web designers should be approaching clients about SSL to ensure that their clients sites continue to rank well. Given that CloudFlare offers SSL for free AND you get the malicious traffic buffer of their CDN, using it is almost a no-brainer.

## Let’s add SSL\!

First off, head over to [CloudFlare](https://www.cloudflare.com) and register a new account {% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/assets/blog/ssl/register.png" alt:"Registration" extend:false border:false %}

Next you’ll be asked for your website address {% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/assets/blog/ssl/add-website.png" alt:"Add a website" extend:false border:false %}

After this CloudFlare will take about a minute to scan your existing DNS records. Once it’s finished it, it’ll show you the DNS records it’s found. You need to verify these records are correct. For CloudCannon websites the DNS records should be fairly simple, usually the setup is:

* an A record for the root domain pointing to 184.169.135.34
* an A record for \*.rootdomain pointing to 184.169.135.34
* perhaps an MX record if you have email set up for that domain

If you're setting up a new domain refer to our [documentation](/documentation/host/domains/) under the "Use your Domain Registrar's DNS server" section and enter those details into CloudFlare.

Once you’re happy these are correct click the continue button.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/assets/blog/ssl/dns.png" alt:"dns" extend:false border:false %}

Next up is configuring CloudFlare. I switched the plan to free and the performance to CDN + Full optimizations. {% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/assets/blog/ssl/settings.png" alt:"Configure CloudFlare" extend:false border:false %}

The last step is updating your nameservers. To do this log in to your domain provider and change the nameservers to the ones that CloudFlare gives you. {% bookshop "markdown/image" src:"https://cc-dam.imgix.net/blog/assets/blog/ssl/update-ns.png" alt:"dns" extend:false border:false %}

That’s it\! It’s so easy to get setup. Changing your DNS can take up to 48 hours to propagate and CloudFlare’s free SSL can take up to 24 hours to set up, so while there should be no downtime, it might be a day or two before you have SSL and CloudFlare serving your website.

Now I can access my site on [https://mikeneumegen.com](https://mikeneumegen.com) or [http://mikeneumegen.com](http://mikeneumegen.com) and everything loads super fast.

Give it a go and get in touch if you have any problems setting CloudFlare up. We’re always here to help.