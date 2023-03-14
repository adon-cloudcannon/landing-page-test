---
title: The 'Let's Recreate Rails' era
description: "The sixth part of an ongoing series: In 2019, developers of static site generators ask the inevitable question —\_why don't we create full-stack applications in one framework?"
series: SSGs through the ages
permalink: /blog/ssg-history-6-lets-recreate-rails/
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/explorer-6_c0m80i.png
date: 2022-02-23T05:00:00.000Z
tags:
  - Resources
author: a5f00346-90df-4d69-9ce1-d9e4c8e51b10
---
It's 2019. Next.js/Nuxt.js are pushing the boundaries of what SSGs are capable of, and are surging in popularity. The 'Let's Recreate Rails' era questions if we can take this paradigm even further. Why don't we create full-stack applications in one framework, in the same vein as Rails?

## [Redwoodjs](https://redwoodjs.com/)

*First released in 2019 by [Tom Preston-Werner](https://github.com/mojombo), [Peter Pistorius](https://github.com/peterp), [David Price](https://github.com/thedavidprice) & [Rob Cameron](https://github.com/cannikin)*

Eleven years after the launch of Jekyll, Tom Preston-Werner *et al* started working on a new project in the SSG space, Redwoodjs. Calling Redwoodjs a static site generator is misleading, however. The ambition for the project is far greater:

> We're looking to be a modern replacement for something like Ruby on Rails, so think full-on web application vs a blog or simple eCommerce site."

Redwoodjs is about bringing the full stack to the Jamstack. It has a React frontend, talks via GraphQL to a backend running on serverless functions, and is all deployed with a Git push. It's an opinionated framework that puts developer experience at its heart.

Like many popular SSGs, Redwoodjs started with a set of core philosophies:

* Jamstack architecture is the best way to write and deploy web applications.
* Strong conventions help developers organize and collaborate on web projects.
* Traditional, relational databases like PostgreSQL and MySQL are still the workhorses of today's web applications.
* You should be able to operate in a serverless mindset and deploy to a generic computational grid.
* Deployment and scaling should be super easy.
* The framework should be equally useful for writing both simple, toy applications and complex, mission-critical applications.
* Use JavaScript for both the frontend and backend. Using a single language simplifies everything from code reuse to hiring developers.

Just like Rails, Redwoodjs makes heavy use of CLI generators to rapidly create boilerplates for your components, layouts, data migrations, and more. You can also use the CLI to deploy your site directly to popular hosting providers.

Redwoodjs is purposefully pushing the boundaries of what's possible with Jamstack. It's a new approach to building web applications and has flexible solutions for Auth, makes accessibility a first-class citizen, and uses the popular database toolkit library Prisma for your data layer. The project is aiming to have a production-ready 1.0 launch in early 2022.

## [Scully](https://scully.io/)

*First released in 2019 by [Aaron Frost](https://github.com/aaronfrost), [Sander Elias](https://github.com/SanderElias), and [Jorge Cano](https://github.com/jorgeucano)*

The Angular community finally had their answer for SSGs in 2019 with Scully. Scully follows a similar model to Gatsby:

1. Write your views using Angular.
2. Scully renders these into static web pages.
3. On page load, the static HTML turns into an interactive web app or SPA through hydration.

The idea is to give the best of both worlds — a fast page load for SEO and user experience, followed by loading hundreds of KBs of JavaScript to enable client-side interactions.

The magical part of Scully is its use of the Guess.js library and machine learning. Scully automatically finds all the routes in an existing Angular project and prerenders an HTML page for each. If you have an Angular project you're looking to bring to the Jamstack world, look no further than Scully.

## [Blitz.js](https://blitzjs.com/)

*First released in 2020 by [Brandon Bayer](https://github.com/flybayer)*

Blitz.js started when Brandon Bayer conversed with his friend about the pros and cons of Ruby on Rails versus React. He realized that while the development community has made a tremendous amount of progress on JavaScript frameworks, these frameworks can't compete with the simplicity and developer experience offered by Ruby on Rails. Monolithic applications — for all their shortcomings — are easier to get your head around and give far greater flexibility to the developer.

Prisma 2 had recently been released; Next.js was seeing massive success. Brandon thought if he could pull all these pieces together into a full-stack framework, he could bridge the best of both worlds between Ruby on Rails and React.

Brandon started with a set of core philosophies for the new framework:

1. Fullstack monolithic — monoliths are faster and easier to scale.
2. API not required — APIs add complexity and slow you down.
3. Convention over configuration — By default, things should just work.
4. Loose opinions — Gives you a happy path on routine decisions. Gives you a choice when there's no consensus.
5. Easy to start, easy to scale — Easy for beginners, yet scalable for large-scale organizations.
6. Stability — Predictable release cycles.
7. Community over code — People are far more important than anything else.

Before long, Brandon had the first version of Blitz.js.

Blitz.js shares many similarities with Redwoodjs:

* They're both heavily inspired by Ruby on Rails.
* They're full-stack React frameworks.
* They make heavy use of Prisma for their data layer.
* They use code scaffolding to get you developing rapidly.
* They have built-in authentication.
* They value convention over configuration.

Their vision is slightly different, however. For one, Blitz.js sits on top of Next.js, whereas Redwoodjs is a standalone tool. Brandon himself differentiates the two:

> Redwood is tooling & conventions for traditional SPAs. Blitz is not a traditional SPA. The end UX of a Blitz app is the same or better than an SPA, but the DX is like a traditional server-rendered MVC app.

---

The emergence of these full-stack frameworks may feel like we've come full circle. In many ways, we have. This time around, we have tooling that blurs the line between frontend and backend. One language, one framework, with batteries included. It's going to be exciting watching these frameworks evolve.