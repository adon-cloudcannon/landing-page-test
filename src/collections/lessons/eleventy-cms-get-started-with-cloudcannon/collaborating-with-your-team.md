---
title: Collaborating with your team
image: https://cc-dam.imgix.net/eleventy-cloudcannon-tutorial-social.png
order: 5
tutorial: eleventy-cms--get-started-with-cloudcannon
description: An overview of collaborating with your team using CloudCannon.
---
You can give your team access to update the website by sharing it with them. There are multiple types and levels of sharing:

* **[Team Members](https://cloudcannon.com/documentation/articles/managing-your-team-members/?ssg=Hugo)** — Have access to all the sites on your account. Owners have full permissions, Developers can do everything except manage billing, Technical Editors can’t create new sites, and Editors don’t have access to the code editors.
* [**Collaborators**](https://cloudcannon.com/documentation/articles/sharing-on-a-per-site-basis/?ssg=Hugo) — Lets you share an individual site. You can Site Share to Technical Editors or Editors.
* [**Client Sharing**](https://cloudcannon.com/documentation/articles/giving-clients-access-to-update-a-site/?ssg=Hugo) — Is a way to share a site to someone without them needing a CloudCannon account. Instead, they enter a pre-defined password to gain editing access.
* [**SSO/SAML**](https://cloudcannon.com/documentation/articles/using-sso-to-create-team-accounts/?ssg=Hugo) — CloudCannon also supports authenticating through SSO on our enterprise plan.

### Projects

As a Git-based CMS, you can set up branching/staging workflows, PRs, and branch merges. All of this is possible with [Projects](https://cloudcannon.com/documentation/articles/enabling-editor-branching-with-projects/?ssg=Hugo). Once you have a site set up you can create a Project. Editors have a button to create a copy of the site on a new branch; there they can make changes without impacting the main branch. When they’re ready to publish, they can hit the Publish button and it will do a branch merge or PR behind the scenes.

