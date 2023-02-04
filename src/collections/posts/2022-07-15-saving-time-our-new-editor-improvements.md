---
title: 'Saving Time: Our New Editor Improvements'
description: >-
  We’re bringing significant improvements to editing and saving in CloudCannon.
  Our focus: reducing wait time for builds.  
series:
image: https://cc-dam.imgix.net/blog/uploads/editor-hero-c_cikb1v.jpg
date: 2022-07-15T05:00:00.000Z
tags:
  - Features
author: dave-strydom
---
Recently, we’ve devoted our focus to reducing editing disruption and build-wait times when saving and working across our Visual, Source, Content, and Data Editors. Behind this focus are careful conversations with customers and testers. In particular, we wanted to reduce the time our users spent waiting when editing in bulk across multiple pages or on a single page across different Editors.

**I’m proud to share that our series of editing features and improvements are now available in CloudCannon.** Together, these features make the CloudCannon editing experience more efficient and enjoyable. Let’s take a look at what you can expect:

## More edits, fewer saves

By default, CloudCannon builds your site whenever you click Save. One effective way to reduce your wait times for larger builds, then, is to reduce the number of saves you have to make while making sure all of your changes are still recorded. 

Our first significant improvement is the **bulk saving** **of edits** in a session. You can now make multiple edits across pages, files, and collections and save them all simultaneously in a single batch. We record your edits as you go, allowing you to save them all in one click. This means you only need to wait for your site to build once. Overall this means fewer saves and fewer builds — saving you (ha\!) from sitting around and waiting.

## Review your edits before you save

Now that you can save multiple edits simultaneously, we’re also giving you a place to **review all your changes** before clicking Save. You’ll first notice the new notification badge we’ve added to the Save button. It acts as a counter of your unsaved edits. When there are multiple edits, an ellipsis appears on the Save button to signal that there is a review step before you finalize your save. 

![](https://cc-dam.imgix.net/blog/editor-button-c-1_bguzir.gif)

Once you click Save, you’ll see a new review modal with a summary of your changes. You’ll see the pages or site data files you changed, and a list of any new files you added. Where necessary, we’ll prompt you for any missing information we need to properly save your work, such as a title or file name. As part of your review, you can view your changed files, or discard any changes you no longer wish to save. 

![CloudCannon interface showing a list of changes that have been made to webpages, with two buttons - view changes or discard.](https://cc-dam.imgix.net/editor-review-changes.jpeg "Review your changes screen")

As you freely navigate your site before saving your edits, you’ll also find a second Save button at the top of your site navigation. And don’t worry: if you’re ever at risk of losing your unsaved changes — by closing a browser window or navigating away from CloudCannon before saving — we’ll alert you.

## Keep working while waiting for a build

With our new Live Editing previews, you can now **get back to editing immediately after saving changes**, even while your build is in progress. We’ll now show a banner on any processing pages and update it when your new build is ready to load. The best part? When you refresh, we’ll load your new build *and* remember any edits you made during the build. 

![Two notification banners. One shows a timer icon with the text &quot;This page has new changes waiting for build&quot;. The other one has a celebration icon with the text &quot;A new version of your page is available&quot; and a refresh button.](https://cc-dam.imgix.net/editor-refresh-changes.jpeg "Review changes banners")

## Edit new pages before building 

The last place our improvements touch on is visual page building. You can now **create new pages in the Visual Editor and edit the page's default data right away** — with no build needed. We also added an option to preview your new page without a build. To get a preview, you'll need pages configured to render from your front matter using [Data Bindings](https://cloudcannon.com/documentation/articles/what-are-visual-data-bindings/?) and [Previews](https://cloudcannon.com/documentation/articles/what-is-live-editing/?) (we also recommend [Bookshop](https://github.com/CloudCannon/bookshop/blob/main/guides/live-editing.adoc) here). Then you can use the new option `new_preview_url` to set your preview to another page's output URL. The Visual Editor will load that set preview URL and use the Data Bindings and Previews to render your new page without saving. You can try this with our [Megakit](https://cloudcannon.com/community/themes/megakit/) template. 

## Our new Beta version 

> This Beta version is now closed, and all these features are available in production. 

All of these new features are available to use now under our Beta version. To switch to Beta, open CloudCannon, click on your user profile in the bottom left and select *Enter CloudCannon Beta*. Your session will now have access to everything we have on Beta. This change only applies to your login. All of your team and clients will still use the old editor until they choose to enter the Beta. You can exit Beta at any time through the same button. 

To get the most out of your Beta experience, try playing around with our [Megakit](https://cloudcannon.com/community/themes/megakit/) template.

![CloudCannon interface showing the My Account panel, with the &quot;Enter CloudCannon Beta&quot; button circled in yellow](https://cc-dam.imgix.net/editor-beta.jpeg "CloudCannon interface showing the My Account panel, with the &quot;Enter CloudCannon Beta&quot; button circled in yellow")

The Beta will only be available when we have large features out for testing. When the features on Beta ship to production, we will end the Beta until our next testing session.

To see the improvements in action, check out the below video: 

{% bookshop "markdown/youtube" id:"EnF85XvSoeQ" title:"Save Time with Editing Improvements" extend:true %}

Right now, I would love nothing more than to hear back from you on these
improvements. We started this work in conversation with our customers and
will continue doing that. Please continue to contact us in
[Support](https://cloudcannon.com/documentation/support/) with any questions or feedback you have
about our workflow improvements. 