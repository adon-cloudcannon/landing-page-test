---
_schema: default
title: Creating an Astro Site
image:
order: 1
tutorial: tutorials/astro-beginners-tutorial-series
description:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---
# Creating an Astro Site: Beginners’ Tutorial

**In this lesson you will learn how to create an Astro site.**

## What is Astro and what does it do Differently?

Before getting on with creating an Astro website in this Astro tutorial, let’s take a quick look at why you should consider using Astro. Astro is a tool for building content sites. It lets you bring your own framework. That means you can code up site content in React, Preact, Svelte, Vue, Solid, Lit, or a number of other frameworks. Of course, you can write your content in Markdown too (Astro has first-class support here). There is also an Astro markup language which looks much like HTML. Astro markup is fantastic for templating content, though we will see frameworks work well with Astro when you need interactivity.

Astro ships zero JavaScript by default, keeping your site lean. We will see that when you do want to add interactive, stateful content, you need to let Astro know. That is because Astro uses&nbsp;**Partial Hydration**\: it only adds JavaScript for managing state to elements which require it. You might hear these interactive components being referred to as&nbsp;**Islands of Interactivity**. The pattern of large amounts of text or images and only sparse interactive islands is common on content sites. This makes Astro a marvelous choice for blogs, documentation, and other content rich websites.

## Creating an Astro Site

To get going, you will need&nbsp;[Node.js installed](https://nodejs.org/en/download)&nbsp;on your machine. We will use&nbsp;[pnpm](https://pnpm.io/installation)&nbsp;to install the packages, though the commands are similar if you prefer npm or yarn.

`pnpm create astro@latest astro-beginners-tutorial`

The fantastic CLI tool will help you in creating your Astro site. Select&nbsp;**Empty**&nbsp;from the presented project options. Next, choose the default,&nbsp;**Yes**, for installing dependencies. The tool will take a moment to download the project skeleton. Once it is done, change into the new project directory:

`cd astro-beginners-tutorial`

We will create a basic, collapsible menu component using React. Add an Astro integration to set up React in the project:

`pnpm astro add react`

Integrations are Astro packages that add necessary configuration files and peer dependencies for frameworks, tooling, or functionality. There are Svelte and Vue integrations, as well as Tailwind and sitemap ones.

For now, accept the default options to install packages and Astro configuration. We will take a closer look at the project files in a moment. For your next project, check the list of available&nbsp;[Astro integrations](https://docs.astro.build/en/guides/integrations-guide/); your favorite framework is probably included.

### What’s Inside?

Let’s take a look at the anatomy of an Astro project. Here is the basic project layout:

![astro project structure](https://cc-dam.imgix.net/astro-project-structure.png "astro project structure")

Next, we see how to use the most important files and folders.

#### `astro.config.mjs`

This is the main Astro configuration file. You will see the `astro add` command above added React config for us here automatically.

#### `public`

The public folder is for files like favicons and `robots.txt` which will not need processing.

#### `src/pages`

`src/pages` is where you will add templates for your HTML pages. Typically, your HTML pages will be generated from Astro files here, though you can alternatively use Markdown or HTML.

#### `tsconfig.json`

This is your project TypeScript configuration file; Astro has out-of-the-box TypeScript support. Even if you prefer not to work in TypeScript, consider updating this file to support import aliases:

`\{ "extends": "astro/tsconfigs/base", "compilerOptions": \{ "baseUrl": ".", "paths": \{ "~\*": \["src/\*"\] \}, "jsx": "react-jsx", "jsxImportSource": "react" \} \}`

We will use this new alias below, when we create and then import the first React component.

### Developing the Site

To start up the development server, run the command:

`pnpm dev`

You can now see the site running in your browser at `http://localhost:3000/`. Astro’s dev server supports Hot Module Replacement — changes you make to source files are instantly reflected in the browser. To see the site as it will be in production, you can run a build, and then start Astro’s preview server:

`pnpm build` `pnpm preview`

For now, revert to the development server, so you can see the results of changes as you make them.

### Astro Pages and Components

Astro files have a top, front matter, section, and a second markup part. The front matter section has `---` delimiters top and bottom, and you add code to it in JavaScript or TypeScript. Use this section to prepare content you need to use in the markup. For example, you might want to manipulate a date, format a text string or import components from other files. We’ll use the front matter for an import here. Add this statement to the front matter in `src/pages/index.astro`\:

`\--- import Menu from "~/components/Menu"; --- &lt;!-- TRUNCATED... --&gt;`

That line will import the Menu component for us, though we have not yet created it; we will do so in a moment. Components let us compose and reuse interface units.

### Creating an Astro Site: HTML Head

Notice the Astro template code (the part after the front matter) looks a lot like regular HTML:

`&lt;html lang="en"&gt; &lt;head&gt; &lt;meta charset="utf-8" /&gt; &lt;link rel="icon" type="image/svg+xml" href="/favicon.svg" /&gt; &lt;meta name="viewport" content="width=device-width" /&gt; &lt;meta name="generator" content=\{Astro.generator\} /&gt; &lt;title&gt;Astro&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;h1&gt;Astro&lt;/h1&gt; &lt;/body&gt; &lt;/html&gt;`

You can see the familiar, `html` and `head` tags then the `body`. Much of this code is boilerplate, which will be the same on every site page. In the next lesson, we will move the `html` and `head` sections to a layout component. That way we will only need to update them in one place, for all pages, whenever we need to make changes.

### Menu Component

Let’s now create that `Menu` component we mentioned, using React. Make a new `src/components` folder, and in there add a `Menu.tsx` file with this content:

\`import type \{ FC \} from "react"; import \{ useState \} from "react"; const Menu: FC = function Menu() \{ const \[open, setOpen\] = useState(false); const handleClick = () =&gt; \{ setOpen(!open); \}; // icons by Lucide: https://lucide.dev/ return ( &lt;div className="menu-wrapper"&gt; &lt;button aria-label=\{open ? "close menu" : "open menu"\} type="button" onClick=\{handleClick\} &gt; \{open ? ( &lt;svg role="img" aria-label="close" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" &gt; &lt;path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12" &gt;&lt;/path&gt; &lt;/svg&gt; ) : ( &lt;svg role="img" aria-label="menu" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" &gt; &lt;path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16M4 6h16M4 18h16" &gt;&lt;/path&gt; &lt;/svg&gt; )\} &lt;/button&gt; &lt;nav className=\{open ? "menu menu-open" : "menu"\}&gt; &lt;ul&gt; &lt;li&gt; &lt;a href="/"&gt;Home&lt;/a&gt; &lt;/li&gt; &lt;li&gt; &lt;a href="/about"&gt;About&lt;/a&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/nav&gt; &lt;/div&gt; ); \}; export default Menu;\`\`

Finally, we can update src/pages/index.astro to use this new component (we only imported it previously):

`&lt;!-- ...TRUNCATED --&gt; &lt;body&gt; &lt;h1&gt;Astro&lt;/h1&gt; &lt;Menu client:load /&gt; &lt;/body&gt; &lt;!-- TRUNCATED... --&gt;`