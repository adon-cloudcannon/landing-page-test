---
_schema: default
title: Astro JSON Imports
image: https://cc-dam.imgix.net/Astro+Basics.png
order: 3
tutorial: astro-beginners-tutorial-series
description: In this lesson you will learn how to import JSON data in Astro.
seo:
  open_graph_type: article
  featured_image: https://cc-dam.imgix.net/Astro+Basics.png
  featured_image_alt: Astro JSON imports tutorial
---
## Astro JSON imports

Continuing the <a target="_blank" rel="noopener" href="/tutorials/astro-beginners-tutorial-series/">Astro beginner tutorial series</a>, in this part, we will see how easy it is to add Astro JSON imports. So far, after creating the new Astro site, we added a header and footer to each page using Astro layouts. In this installment, we will add a site contact page with data sourced from a project JSON file.

JSON is a convenient data format, not only for developers, but also content creators. The files are well-structured and have an intuitive layout. Although JSON files are less intimidating than other formats, for anyone who prefers to work with graphical interfaces, we see you can even update JSON data from your CMS, in-browser. No need to open up a JSON file if you don’t want to!

## Contact page

Let’s start by adding skeleton content for the contact page, making use of the `BaseLayout` from the earlier, Astro layouts tutorial. Create a `src/pages/contact.astro` file in your project with this content:

```html
---
import BaseLayout from "~/layouts/BaseLayout.astro";

const title = "Contact the Novelty Cycles Team";
const description = "Get in touch with the Novelty Cycles team.";
---

<BaseLayout description={description} title={title}>
  <main>
    <h2>Reach out to the team&hellip;</h2>
  </main>
</BaseLayout>

<style>
  ul {
    list-style-type: none;
  }

  li {
    margin-bottom: var(--spacing-6);
  }

  .name {
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-bold);
  }
</style>
```

Notice how we can add a `style` element at the bottom of Astro files. In this case, the added CSS makes use of custom properties (CSS variables) defined in the `src/styles/global.css`. That file itself is imported into the `BaseLayout.astro` file used on this page. Another point worth making here is that the CSS you add to a `.astro` file is locally scoped; the `ul` styles defined in this file will not be applied to unordered lists on other pages. No need to use&nbsp;[BEM](https://getbem.com/introduction/)&nbsp;or similar systems!

### JSON data

Next, we need to define some JSON; these are the contact data, which we will import into the new page. Create a `src/data` folder and in there add a `contacts.json` file:

```json
[
  {
    "name": "Lavonia Phothirath",
    "email": "lavonia@noveltycycles.example.com"
  },
  { "name": "Hyman Heinlen", "email": "hyman2@noveltycycles.example.com" },
  { "name": "Marcos Cosby", "email": "marcos@noveltycycles.example.com" }
]
```

We now have `components`, `layout`, `pages`, and `styles` folders within the project’s `src` directory. `pages` is the only member of that list, which has significance to Astro. We can rename any of the others to match our own style preferences; Astro is quite flexible here.

## Importing JSON in Vite

Astro uses Vite, under the hood, and it is Vite which provides the JSON import functionality. Vite allows us to import JSON files as if they were any other JavaScript file. Moreover, we get type support and autocompletion. Impressive!

To start, update `src/pages/contacts.json` to import the new JSON data:

```javascript
---
import contacts from "~/data/contacts.json";
import BaseLayout from "~/layouts/BaseLayout.astro";

const title = "Contact the Novelty Cycles Team";
const description = "Get in touch with the Novelty Cycles team.";
---
<!-- TRUNCATED... -->
```

Importing as a default import (rather than a named import) assigns the JSON data to a JavaScript array: `contacts`. We want to use that array to output the name and email address of each contact. Let’s update the Astro template code in `src/pages/contact.astro` to do that:

```html
<!-- ...TRUNCATED -->
<BaseLayout description={description} title={title}>
  <main>
    <h2>Reach out to the team…</h2>
    <ul>
      {
        contacts.map(({ email, name }) => (
          <li>
            <p class="name">{name}</p>
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </li>
        ))
      }
    </ul>
  </main>
</BaseLayout>
<!-- TRUNCATED... -->
```

This is a little different to the HTML-like syntax we have used so far, so let’s take a closer look. We saw, earlier, that we can add JavaScript variables in the Astro template, wrapping them in braces `{}`. In fact, this syntax extends to JavaScript expressions. The expression in the `ul` tag creates an `li` element for each member of the `contacts` array. We rely on&nbsp;<a target="_blank" rel="noopener" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">JavaScript’s <code>Array.map</code> method</a>&nbsp;to make this transformation.

Each element of the contacts array has the shape:

```javascript
{
  name: 'Some Name',
  email: 'an-email-address@example.com',
}
```

In the map method argument, we destructured the email and name fields from the current element. Then, we used them to return a corresponding `li` element. If we were to write out the code generated by the `Array.map` call, we would have:

```html
<li>
  <p class="name">Lavonia Phothirath</p>
  <p>
    <a href="mailto:lavonia@noveltycycles.example.com"
      >lavonia@noveltycycles.example.com</a
    >
  </p>
</li>
<!-- TRUNCATED... -->
<li>
  <p class="name">Marcos Cosby</p>
  <p>
    <a href="mailto:marcos@noveltycycles.example.com"
      >marcos@noveltycycles.example.com</a
    >
  </p>
</li>
```

React developers will already be familiar with using the map method to create dynamic content in this way. A key difference with React, though, is that, working in an Astro template, you do not need to add a `key` attribute on the `li` elements. It is also worth remembering that, your expression should also always evaluate to a string (rather than a function or object) when creating dynamic content.

## Updating the menu

As a final touch, you might want to update the menu to include the new contact page. Edit `src/components/Menu.tsx`\:

```jsx
 { /* ...TRUNCATED */ }
  return (
    <div className="menu-wrapper">
      <button
        { /* TRUNCATED... */ }
      </button>
      <nav className={open ? "menu menu-open" : "menu"}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
```

## More on Astro JSON imports

Our underlying JSON data was a single array. Using a default import, we were able to assign the JSON array data to the `contacts` JavaScript variable. When importing JSON as a default import, the result will be an array or object reflecting the format of the underlying JSON data.

Finally, if you had another JSON data structure, this time with a root level object and top-level objects:

```json
{
  "earth": { ... },
  "mars": { ... },
  "jupiter": { ... }
}
```

You could import any of those top level objects as a named import. For example:

```javascript
/* EXAMPLE ONLY */
import { earth, mars } from "~/data/planets.json";
```

You can then use these named import variables in your front matter and Astro markup code, much like you used `contacts`, above.

## Editing JSON visually

Of course, you (or site content editors) can manually edit JSON files. However, for a more visual interface, try the CloudCannon Data Editor. You can quickly add new values, or create and update existing ones.

![JSON data in CloudCannon data editor](https://cc-dam.imgix.net/cloudcannon-data-editor-json-data.png "JSON data in CloudCannon data editor")

Here, the data are sourced from the `contacts.json` file within the project. Selecting a particular contact, we can edit their Name and Email fields. Once we click save, CloudCannon will automatically update `contacts.json`, commit changes to the project Git repo and update the site.

![Editing JSON data in the CloudCannon data editor](https://cc-dam.imgix.net/cloudcannon-data-editor-editing-json-data-1.png "Editing JSON data in the CloudCannon data editor")

## Astro data imports: wrapping up

We saw how you can import JSON files right into Astro templates. We also saw more details on working with Astro JSX, including enumerating an array in your template. How did you find this part of the tutorial? I hope there was something useful in there for you.

See the&nbsp;<a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/introducing-the-data-editor/">Data Editor docs to learn more about using this CloudCannon feature</a>&nbsp;in your next project. You can also learn more on&nbsp;<a target="_blank" rel="noopener" href="https://vitejs.dev/guide/features.html#json">Astro JSON imports in the Vite docs</a>. In the next part of this tutorial, we will see how easy it is to&nbsp;<a target="_blank" rel="noopener" href="/tutorials/astro-beginners-tutorial-series/astro-blogging-adding-markdown-blog-posts/">generate page templates for a Markdown blog in Astro</a>. You will also get a first look at Astro Content Collections. I can’t wait to tell you about them!