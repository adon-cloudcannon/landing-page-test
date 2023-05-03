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

To get going, you will need&nbsp;<a target="_blank" rel="noopener" href="https://nodejs.org/en/download">Node.js installed</a>&nbsp;on your machine. We will use&nbsp;<a target="_blank" rel="noopener" href="https://pnpm.io/installation">pnpm</a>&nbsp;to install the packages, though the commands are similar if you prefer npm or yarn.

```html
pnpm create astro@latest astro-beginners-tutorial
```

The fantastic CLI tool will help you in creating your Astro site. Select&nbsp;**Empty**&nbsp;from the

presented project options. Next, choose the default,&nbsp;**Yes**, for installing dependencies. The tool will take a moment to download the project skeleton. Once it is done, change into the new project directory:​​​​

```html
cd astro-beginners-tutorial
```

We will create a basic, collapsible menu component using React. Add an Astro integration to set up React in the project:

```html
pnpm astro add react
```

Integrations are Astro packages that add necessary configuration files and peer dependencies for frameworks, tooling, or functionality. There are Svelte and Vue integrations, as well as Tailwind and sitemap ones.

For now, accept the default options to install packages and Astro configuration. We will take a closer look at the project files in a moment. For your next project, check the list of available&nbsp;<a target="_blank" rel="noopener" href="https://docs.astro.build/en/guides/integrations-guide/">Astro integrations</a>; your favorite framework is probably included.

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

```html
{
  "extends": "astro/tsconfigs/base",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~*": ["src/*"]
    },
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

We will use this new alias below, when we create and then import the first React component.

### Developing the Site

To start up the development server, run the command:

```html
pnpm dev
```

You can now see the site running in your browser at `http://localhost:3000/`. Astro’s dev server supports Hot Module Replacement — changes you make to source files are instantly reflected in the browser. To see the site as it will be in production, you can run a build, and then start Astro’s preview server:

```html
pnpm
pnpm preview
```

For now, revert to the development server, so you can see the results of changes as you make them.

### Astro Pages and Components

Astro files have a top, front matter, section, and a second markup part. The front matter section has `---` delimiters top and bottom, and you add code to it in JavaScript or TypeScript. Use this section to prepare content you need to use in the markup. For example, you might want to manipulate a date, format a text string or import components from other files. We’ll use the front matter for an import here. Add this statement to the front matter in `src/pages/index.astro`\:

```html
---
import Menu from "~/components/Menu";
---

<!-- TRUNCATED... -->
```

That line will import the Menu component for us, though we have not yet created it; we will do so in a moment. Components let us compose and reuse interface units.

### Creating an Astro Site: HTML Head

Notice the Astro template code (the part after the front matter) looks a lot like regular HTML:

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro</title>
  </head>
  <body>
    <h1>Astro</h1>
  </body>
</html>
```

You can see the familiar, `html` and `head` tags then the `body`. Much of this code is boilerplate, which will be the same on every site page. In the next lesson, we will move the `html` and `head` sections to a layout component. That way we will only need to update them in one place, for all pages, whenever we need to make changes.

### Menu Component

Let’s now create that `Menu` component we mentioned, using React. Make a new `src/components` folder, and in there add a `Menu.tsx` file with this content:

```html
import type { FC } from "react";
import { useState } from "react";

const Menu: FC = function Menu() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  // icons by Lucide: https://lucide.dev/

  return (
    <div className="menu-wrapper">
      <button
        aria-label={open ? "close menu" : "open menu"}
        type="button"
        onClick={handleClick}
      >
        {open ? (
          <svg
            role="img"
            aria-label="close"
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 6L6 18M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            role="img"
            aria-label="menu"
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12h16M4 6h16M4 18h16"
            ></path>
          </svg>
        )}
      </button>
      <nav className={open ? "menu menu-open" : "menu"}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
```

Finally, we can update `src/pages/index.astro` to use this new component (we only imported it previously):

```html
<!-- TRUNCATED... -->

  <body>
    <h1>Astro</h1>
    <Menu client:load />
  </body>

  <!-- TRUNCATED... -->
```

![Initial astro menu](https://cc-dam.imgix.net/creating-an-astro-site-initial-menu.png "creating an initial astro menu")

Jump over to your browser. Try clicking the menu button and you should see the icon change. We don’t yet have styling, so it looks a little odd, and the menu does not open or close. That said, the menu icon will change to a close icon when you click, and then revert to the original menu icon if you click again.

Why did we add `client:load` to the Menu component instance in `index.astro`? Try removing it, so you just have:

```html
<!-- ...TRUNCATED -->

  <body>
    <h1>Astro</h1>
    <Menu />
  </body>

  <!-- TRUNCATED... -->
```

Save the file. Now, when you click, nothing happens!

Astro ships zero JavaScript by default. Our menu will be an Astro Island of Interactivity and `client:load` is a directive to tell Astro to add the JavaScript for managing the component’s state.

#### Some other Astro directives

* `client:idle`\: hydrate the component once the main thread is idle; might be used on an interactive search component
* `client:visible`\: hydrate once the component is about to scroll into view; can help your page load faster initially, for example: only loading a JavaScript heavy widget just before it is visible
* `client:media`\: lets you load components based on a CSS media query, often, you will prefer to use CSS paired with other directives instead
* `client:only`\: a little more advanced; the component will not be rendered when the site is built on the server but will still hydrate in the client browser

Check&nbsp;<a target="_blank" rel="noopener" href="https://docs.astro.build/en/reference/directives-reference/#client-directives">Astro documentation for full details</a>&nbsp;on using these in your project.

### File-based Routing

Astro uses file-based routing. We already saw that updating `index.astro` changes the output at `http://localhost:3000/`. Following the file-based routing pattern, creating `src/pages/about.astro` or `src/pages/about.md` results in Astro creating an HTML page at `/about`. Create `src/pages/about.md` with this content:

```html
## Hello
```

Then, go to `http://localhost:3000/about` in your browser to see the new page. We will create more pages here later.

#### One last thing…

Did you notice the import statement in `index.astro` used the alias we defined in `tsconfig.json`? Without it, we would have written:

```html
import Menu from "../components/Menu";
```

I guess it is a question of personal taste, however for larger projects with deeply nested components, you will probably prefer to stick with the alias.

### Until next time!

That’s it for the first part of our tutorial: creating an Astro site. Stoked you made it to the end! I hope you found this start to the Astro Beginners’ Tutorial useful. We have had a look at what Astro is, and saw the main features. In the&nbsp;<a target="_blank" rel="noopener" href="https://dev.to/community/learn/astro-beginners-tutorial/astro-layouts/">next installment, we will see Astro layouts in action</a>&nbsp;and add some styles too!