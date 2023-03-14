---
_schema: default
title: Upcoming CloudCannon Interface improvements (Open Beta)
description: >-
  The first quarter of 2023 is bringing a new look for some of CloudCannon’s
  most commonly used publishing and site setup interfaces. Thanks to user
  feedback, we’ve made a number of refinements that will make for a more
  polished experience. We're releasing the new version of CloudCannon Beta to
  all users, available now.
series:
image: https://cc-dam.imgix.net/blog/blog-update-interface-hero.jpg
date: 2023-02-08T16:02:00Z
hide_publish_date: false
tags:
  - Features
  - Resources
  - Company
author: be1f96bb-0393-4938-b444-a5fb2f0c8590
permalink: /blog/upcoming-cloudcannon-interface-improvements/
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---
### Update (7 March 2023):&nbsp;

*All changes from our Beta environment are officially released. These changes include consolidation of information to the site dashboard, menus for switching between project branches more easily, greater configurability of the CloudCannon interface, and an overhaul of our <a target="_blank" rel="noopener" href="/documentation/">documentation site</a>.*

*If you need to go back for any reason, click "Enter CloudCannon Legacy" in the contextual menu in the bottom-left of the app.*

---

The first quarter of 2023 is bringing a fresh tidy up for some of CloudCannon’s most frequently used interfaces.

Thanks to the fantastic feedback we have been getting from our users, we’ve made a number of refinements that will make for a more polished experience. Just like our editor release last year, we are releasing the new version of **CloudCannon Beta** to all users, available now. The Beta will give you a chance to try the new updates before the rest of your team.

This post will detail the upcoming changes, which we hope you’ll find as exciting as we do.

## Developer site status page

Our first review focuses on the Developer section available in the main navigation on a built site. Here we identified opportunities on the Status and Reports pages:

1. The Status page had too many responsibilities. Over the course of the last year, we had added more functionality to the Status page, including actions to help solve build and sync errors as well as recommendations to help improve the setup of your site. These two actions are quite different tasks: one is a debugging task and the other is building improvements. We want to decouple these items and create more clarity.
2. The Reports page showed the history of syncing/building and the editor activity on the site. A summary of the editor activity was available on the editor “Home” page, which made the full history placement in the developer navigation section feel out of place. In contrast, the reports for Sync and Builds are more aligned with the status of the site and are used when debugging issues.

**![](https://cc-dam.imgix.net/blog/blog-interface-status-before.png)**

To resolve these issues we have tidied the grouping of these navigation items.

Our first update is to group all Syncing and Building status information under the “Status” page. The new tabs now show you a summary, and the Sync and Build reports allow you to dig deeper into your development history — all while remaining on the same page. The first tab shows Sync information on the left and Build information on the right, which matches the order that these two actions are run.

![](https://cc-dam.imgix.net/blog/blog-interface-status-after.png)

If you need to look back in time, you can select the relevant tab or click on the handy “View more” links. We’ve also moved the setup information into a new interface for creating CloudCannon configuration files, which will be covered later in this article.

## Editor-facing changes

The editor navigation sections have had a similar tidy up. In the previous site navigation there were five controls we reviewed:

* Home
* Usage
* Publishing
* Preview URL (\*.cloudvent or your custom domain)
* Projects navigation

### The new editor dashboard

We’ve renamed the “Home” section to “Dashboard” in order to set a clearer expectation of the section’s function. This change also removes the potential for new users to confuse this section with the contents of their “Home” page.

The “Usage” page shows how much bandwidth and build time has been used on this site. This will eventually be a home for additional analytics for your site's hosting. Currently it shows Build metrics, which are helpful for developers working on the site.

![](https://cc-dam.imgix.net/blog/blog-interface-dashboard-before-after.png)

Here are the changes we've made:

* Home has been renamed to “Dashboard” which now includes tabs for subpages. The previous Home content is now on the first tab named “Summary”
* Usage has been moved to a tab on the new ‘Dashboard”
* Activity has been moved from Reports to a tab on the new ‘Dashboard”. A “view more” link has been added to the Activity summary on the “Dashboard”

### A new Publish button

Publishing is displayed in the Site Navigation if a publishing branch is set with your source syncing. This is a great feature that allows editors to be involved more in your team’s Git workflows. With it, editors can merge changes directly, or create a pull request for the team to review. We received feedback that this item could get lost in the navigation, especially if you have a lot of collections.

Because of this feedback, the Publishing tab has been moved to a “Publish” button below the “Save” button. This groups all Git actions into a single location.

![](https://cc-dam.imgix.net/blog/blog-interface-buttons-before-after.png)

### Previewing the live site

Preview URLs are a very popular feature on CloudCannon — once your build has completed, you can preview your site and its changes on a unique [cloudvent.net](http://cloudvent.net) URL. We found, however, that some new users didn’t automatically associate the [cloudvent.net](http://cloudvent.net) URLs with their live preview. Some users have also reported that the preview URL was hard to find after they had added a custom domain.

In response to this feedback, we’ve moved the Preview URL to a button below the “Publish” button. This button has the text ‘Live site preview’ and the cloudvent address has been moved to the tooltip. If a custom domain is added, the button now becomes a dropdown menu which allows you to choose either of the URLs.

**Save**, **Publish** and **Live Preview** buttons are wrapped in a subtle grey line to clarify the scroll area below it. The dashboard change and the new buttons offers a stronger emphasis on your collections. Users with Editor permissions now have fewer options to choose from, and their editing controls are differentiated from those that deal with the site’s data/collections.

## Site Project Navigation

Projects are a powerful feature that organizes sites by Git repository and enables editors to create branches for discrete features or pieces of work. Projects will be a major focus for us this year — as a Git-based CMS, we want to make Git more approachable and more visual for both editors and developers.

The last update in our navigation is a move for the Project link. We’ve moved this link above the site's icon, name and branch. This places the information in the order of importance (repository → name/branch). When the Project is active, the whole upper navigation area becomes a dropdown for Project-related actions. This menu allows you to switch to a subset of other branches in that Project, as well as returning to the Project.

## Configuration creation

Once you’ve synced and built your site, some users haven’t found it clear when or how to create a CloudCannon configuration file. We’ve now added an interface to the end of the build flow for getting your config started. If your site doesn’t have a config file, a prompt to generate one will be available, which includes:

1. A migration from Forestry `.forestry/settings.yml`
2. A migration from NetlifyCMS `admin/config.yml`
3. A generated config from reading your site files

Once your new config is generated, the source editor will be opened on your new config. From here you can edit the config file further, or click “Save” to commit the new files. We have more plans in this area to make the configuration easier to learn and maintain. We’ve also open-sourced the code we use to [migrate Forestry and NetlifyCMS config files to CloudCannon config files on GitHub](https://github.com/CloudCannon/cloudcannon-config-migrator).

![](https://cc-dam.imgix.net/blog/blog-interface-post-build-config.png)

### Collection preview options

Another of our initiatives is making CloudCannon’s configuration easier to learn. We have added a preview option to multiple sections of our configuration. These items are all defined as cards and can currently be found on:

1. Snippets
2. Structures
3. 🆕 Collections list
4. 🆕 Files list

Anywhere you see a card, you can use the preview option to configure them. Preview options add the ability to show more metadata, more images and cascade options back to defaults. This update empowers developers to achieve more within CloudCannon by learning a consistent configuration.

Files and collection items have more to preview than a folder, which only has a name. Separating these items gives files and collection items a consistent design, and provides a dedicated space above for navigation. The “move up a folder” folder has been moved into the breadcrumb section, as that’s a navigation action rather than a folder to navigate into.

We’ve upgraded existing sites without breaking any functionality: in the Beta we map all older configuration options to the new preview options, so all of your existing configuration will still continue to work.

### Join the Beta

All of the above changes are packed into the CloudCannon Beta. We have now enabled the Beta for everyone, and we’d love to hear what you think. Please continue to contact us in [Support](https://cloudcannon.com/documentation/support/) with any questions or feedback you have about the new improvements.

![](https://cc-dam.imgix.net/editor-beta.jpeg)

This Beta release will be made publicly available at the earliest three weeks from now. This date is flexible to account for any feedback received during the Beta. We will make a note of the release on our change log before it goes live.