---
title: Getting set up
image: https://cc-dam.imgix.net/eleventy-cloudcannon-tutorial-social.png
breadcrumb_title: Eleventy CMS - Get started with CloudCannon
order: 1
tutorial: eleventy-cms--get-started-with-cloudcannon
description: Learn how to get your website set up on the CloudCannon Eleventy CMS.
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---

Welcome to the CloudCannon Eleventy starter guide. If you’re looking to get your Eleventy site set up on CloudCannon and ready to hand off to content editors, you’re in the right place.

## What is CloudCannon?

CloudCannon is a Git-based CMS for websites built with static site generators such as Eleventy. With CloudCannon, you can build and maintain your Eleventy site using regular Git workflows **and** have your content team easily update and manage the content without knowing anything about Eleventy, Git, Markdown, or even HTML.

## Setting up your site

So you’ve got your Eleventy site ready to go in a Git repository? To get it set up on CloudCannon we need to sync your Git repository with CloudCannon and then configure your Eleventy build.

### Syncing your site

If you haven’t already, [sign up for CloudCannon](https://app.cloudcannon.com/register) and create a new site with the “use your own files” option.

Enter a site name and select the Git platform your site lives on. If this is your first time using CloudCannon you’ll need to give permission for CloudCannon to access the Git platform.
![Screenshot showing user choosing Git provider on CloudCannon](https://cc-dam.imgix.net/cloudcannon-eleventy-git-provider.png)
 After confirming your Git platform, a repository field will show which lists all the repositories on your account. Select your site repository from the list:
![Screenshot showing user selecting site repository](https://cc-dam.imgix.net/cloudcannon-eleventy-repo.png)
 For the branch you’ll likely want to select “use existing”. If you want to try out CloudCannon without impacting your main branch you can select “Create new”. Either way, select or create your branch:
![Screenshot showing user naming and syncing files](https://cc-dam.imgix.net/cloudcannon-eleventy-name-and-sync.png)
 Press “Sync Files” at the bottom right to move onto the next step.

### Building your site

CloudCannon auto-detects your static site generator. If it gets it wrong you can select the correct SSG from the dropdown.
![Screenshot showing user building site on CloudCannon](https://cc-dam.imgix.net/cloudcannon-eleventy-build.png)
 From here, enter the necessary build options for your site to match your local build environment. If you have a simple set up, you may not need to enter anything here. If you have a custom source directory or require environment variables for parts of your build, this is the place to enter them.

Once you’re finished click “Build Site”.

Before the build, CloudCannon automatically adds the [CloudCannon Eleventy plugin](https://github.com/CloudCannon/eleventy-plugin-cloudcannon) to map out the structure and content of your site which powers the content editing interfaces.

If your site builds successfully, you’re ready to go on CloudCannon\! As a side bonus, CloudCannon also provides hosting. You can now access a live preview version (not indexed by search engines) of your site by clicking on the *.cloudvent.net* address at the top left:
![Screenshot showing site status on CloudCannon ](https://cc-dam.imgix.net/cloudcannon-eleventy-status.png)
 If your site failed to build, you have some debugging work to do. Read the build output to see why it failed, double check your build settings, and try again.

You may need to run extra commands before or after your build to get your site in the right state. For example, you may need to install npm packages for your site.

On CloudCannon you can run extra commands at different points of the build using a build hook. For more information, see [the build hook documentation](https://cloudcannon.com/documentation/articles/extending-your-build-process-with-hooks/).

If you can’t figure it out, don’t hesitate to [get in touch with our support team](https://cloudcannon.com/documentation/support/). We’re always here to help.
