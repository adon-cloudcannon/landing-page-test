---
draft: false
title: Richer Forms with file uploads, Slack integrations, and more
description: "Forms play a huge role in modern businesses. As part of a good workflow, they not only collect data but send it where you need it most. CloudCannon's forms feature has always done that, and now we've improved on it.\_"
permalink: /blog/richer-forms-with-slack-integrations/
series:
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
image: https://cc-dam.imgix.net/forms-hero-3.jpg
date: 2022-03-25T05:00:00+1300
tags:
  - Features
author: 94d9454d-d560-4dc5-8acd-1bd804305709
ssg_frameworks:
categories:
  - features
---
A good form is a must-have for any website. Whether someone wants to ask your team a question or register interest in your services, your contact form is the first place visitors will look to get the conversation started. Ask any modern content team, and they'll tell you forms are vital to engage with leads through gated content. However you use forms, you’ll want to keep your visitors connected because your clients are essential to you. 

We know forms play a huge role in modern businesses. As part of a good workflow, they not only collect data but send it where you need it most. Our forms feature has always done that, and now we've improved on it. 

## Fewer steps, more speed, and security 

The significant change in our forms comes in the workflow to set them up. We've pulled most of the configuration steps into the app, and set your Inbox up to belong to your Organization. This means you can link multiple forms to the same Inbox, which is helpful both for managing customer queries from multiple live sites and when testing forms on a staging site. 

We have also added vital security steps, including support for [hCAPTCHA](https://cloudcannon.com/documentation/articles/reducing-spam-by-adding-hcaptcha/?ssg=Other) and a mailer to validate target email addresses, further preventing malicious forwarding. 

Finally, we removed the post-build processing step to encrypt your form details, improve build times on your site, and save you precious editing seconds. This change has a direct impact on your editing experience.

## JavaScript friendly 

In removing the post-build processing, we've also opened the door to newer JavaScript-based SSGs like Gatsby and Next.js, which don't have their forms in HTML. We've provided a [starter snippet](https://cloudcannon.com/documentation/articles/connecting-your-site-to-an-inbox/?#submitting-with-javascript) to help you configure these JavaScript forms. 

## Slack and webhook integrations

Collecting submissions on your site is only the first part of the journey. The data has to be put to use. To give you a workflow that suits your team, we have integrations with some of the most popular automated webhook platforms: [Automate.io](https://automate.io/), [IFTTT](https://ifttt.com/), [Make](https://www.make.com/en), and [Zapier](https://zapier.com/). And now, your submissions can be shared with [Slack](https://slack.com/). With these targets on hand, you can ensure your data plays nice wherever your team needs it.  

## Upload more than just text

The last nugget of goodness we added is actually a big one — you can now support having files attached to your forms. Extending the range of uses for your Forms to include receiving job applications, support documentation and more. We're excited about this, as it means your forms can be more dynamic. (If you're wondering how much your users can upload, find out more about the current [file size limits to uploads](https://cloudcannon.com/documentation/articles/connecting-your-site-to-an-inbox/) over in our documentation.)

## How to set up your form

Let’s take a quick look at how to set up these new Forms. 

1\. **Set up an Inbox**

[Create an Inbox](https://cloudcannon.com/documentation/articles/creating-an-inbox-to-receive-your-forms/?) by heading to *Organization settings &gt; Hosting &gt; Forms.* Here you can set your Inbox key, customize your submissions and [add a CAPTCHA provider](https://cloudcannon.com/documentation/articles/reducing-spam-by-adding-hcaptcha/). 

2\. **Link it to your site**

Once set up, [link your Inbox to the site](https://cloudcannon.com/documentation/articles/connecting-your-site-to-an-inbox/?) by heading to *Site Settings &gt; Hosting &gt; Forms* and following the steps. 

3\. **Configure your form**

The next step is to [point your form at the Inbox](https://cloudcannon.com/documentation/articles/connecting-your-site-to-an-inbox/?). For HTML, add an input element with the `{inbox_key}` of your form. These keys allow you to connect multiple forms to the same Inbox, or to different Inboxes. For JavaScript, start with [this snippet here](https://cloudcannon.com/documentation/articles/connecting-your-site-to-an-inbox/?#submitting-with-javascript). 

Your form will be ready to receive submissions, which you can view in CloudCannon. You'll find your Inbox in the site navigation.

{% bookshop "markdown/image" src:"https://cc-dam.imgix.net/sites-inbox.jpg" alt:"" extend:false border:false %}

4\. **Forward your submissions to targets:**

Here’s where the real magic starts to happen. You can forward your submissions by setting at least one target. We've documented the process for connecting [email](https://cloudcannon.com/documentation/articles/integrating-your-forms-with-email/), [Automate.io](https://cloudcannon.com/documentation/articles/integrating-your-forms-with-automate-io/), [IFTTT](https://cloudcannon.com/documentation/articles/integrating-your-forms-with-ifttt/), [Make](https://cloudcannon.com/documentation/articles/integrating-your-forms-with-make-formerly-integromat/), [Slack](https://cloudcannon.com/documentation/articles/integrating-your-forms-with-slack/), and [Zapier](https://cloudcannon.com/documentation/articles/integrating-your-forms-with-zapier/). And depending on your plan, you can select multiple targets per Inbox.   

## What about existing forms? 

Don't worry; CloudCannon users with legacy forms don't need to run and update their setup. We have created new Inboxes for all your sites that had form submissions and have automatically attached these to the sites. Your existing sites will continue to work with the legacy forms format.

Read our guide on [migrating from legacy to new forms](https://cloudcannon.com/documentation/articles/legacy-forms-migration-guide/). 

Though we will continue to support legacy forms set up on existing sites, users will not be able to create new legacy forms. For new forms, we highly recommend that you move over to the new flow and get the benefits of added speed and security\! 
