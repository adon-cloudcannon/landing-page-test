---
title: On Git, with zero experience
description: >-
  Git = gud, being a digression in which we kill our darlings (with exquisite
  version control).
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/david-blog-image-2-final-image-min.jpg
date: 2021-08-26T05:00:00+1200
tags:
  - Resources
author: 466580e8-b101-4837-a0c2-a90a8aebb5db
---
## Part 2: **Git = gud**

*Being a digression in which we kill our darlings (with exquisite version control).*

The appeal of Git — of GitHub, Bitbucket, GitLab, et al — is pretty clear to all. I don’t know that there’s a developer anywhere who doesn’t see the value in version control, iterative rollbacks, and collaborative development via the branch / fork / pull / merge cycle.

From a writer’s perspective — constantly connected with collaborators; silent, solitary and hunched in a garret; or anywhere in that spectrum — no one writes their final copy the first time around. Iteration, editing, subediting, critique, reworking: none of this is possible without a shitty first draft to tear apart and build back up. That first draft becomes your minimum viable product, even if it's nowhere near viable enough to show anyone other than your kindest colleague. Perfectionism is the enemy; working writers know this, though the muscles to push back against it have to be flexed now and again.

Anne Lamont speaks to this in her deep dive into the writing process, *Bird by Bird*\:

> Perfectionism is a mean, frozen form of idealism, while messes are the artist’s true friend. What people somehow (inadvertently, I’m sure) forgot to mention when we were children was that we need to make messes in order to find out who we are and why we are here — and, by extension, what we’re supposed to be writing.

The ~~aphorism generator~~ eminently quotable David Foster Wallace weighed in (mid-PBS-interview, no less): “If your fidelity to perfectionism is too high, you never do anything.” If we all compared our output to DFW's, we'd do even less; if no one ever shared their problems on Stack Overflow, the rest of the dev world searching for answers in the long tail of content would never learn anything.

There’s no shortage of writing advice available online, in print, or anywhere in between. See for example, a corruption of the classic voting maxim: "Write early and write often." Or Malcolm Lowry's half-followed advice: "Write drunk, edit sober." My personal favorite — and definitely not one I just made up — is Chekhov's dependency: "If in the first act you install a package, then in the following act it must be initialized." Et cetera, et cetera. (See also almost anything written by [Annie Dillard, quoted extensively over on brainpickings.org](https://www.brainpickings.org/2013/08/09/annie-dillard-on-writing/).)

The trouble is this: when we edit, we cover our tracks. Though text editors can track changes incredibly effectively for one in-depth editing session, any more than a single pass by a single editor means the resulting overlay of comments, suggestions, and questions can be overwhelming.

*Enter Git, with a flourish of trumpets.*

Seth Kenlon wrote a persuasive article for [opensource.com](http://opensource.com) a couple of years ago, entitled [How writers can get work done better with Git](https://opensource.com/article/19/4/write-git). In it, he argues that the content publishing market has flattened for writers: now, as in 2019, a single source of plaintext truth is preferable. Write your words as words, he says, and let the publishers worry about delivery:

> Writing in plaintext not only means you don't have to worry about layout or how your text is styled, but you also no longer require specialized tools. Anything that can produce text becomes a valid "word processor" for you, whether it's a basic notepad app on your mobile or tablet, the text editor that came bundled with your computer, or a free editor you download from the internet. You can write on practically any device, no matter where you are or what you're doing, and the text you produce integrates perfectly with your project, no modification required.
>
>
> And, conveniently, Git specializes in managing plaintext.

Code or composition, we know there’s a glimmer of potential in even the quickest braindump document. That's the whole point of laying everything out — it's the mental equivalent of knolling your Lego pieces, or whatever components you're assembling. There's always value somewhere in your rough notes, however fleeting the inspiration was.

On this point, Kenlon meets Lamont:

> Two things every writer has in common is that they're writing for keeps and their writing is a journey. You don't sit down to write and finish with a final draft; by definition, you have a first draft. And that draft goes through revisions, each of which you carefully save in duplicate and triplicate just in case one of your files turns up corrupted. Eventually, you get to what you call a final draft, but more than likely you'll be going back to it one day, either to resurrect the good parts or to fix the bad.

Consider a marketing site that’s constantly A/B testing and undergoing daily iterations on a brand message to convert customers; there’s a very real possibility that some of these gems will be lost.

Professional copywriters or marketing teams are writing for the web, for the most part. For sites on even the web’s most popular dynamic CMSs that has traditionally meant a reliance on the Wayback Machine for version control of their copy, folders full of files with names varying on copyFINALfinal2FINALFORREAL2\_thistime.txt, and/or cron jobs running up hefty bandwidth bills on backups mandated by the legal team. It may feel like an infomercial, but it doesn't have to be that way.

The answer? Don’t just move fast and break things. Keep moving, of course, but iterate, track your iterations, and rebuild as you go. It’s not a hard sell.

[Git, meet CMS. CMS, meet Git.](https://cloudcannon.com/git-cms/) I think you'll get along just fine.

**Last week: **[Part 1 — Background \| Preamble](https://cloudcannon.com/blog/how-i-created-my-first-static-website-with-zero-experience-1/)

**Next week:** [Part 3 — Choosing a static site generator](/blog/choosing-a-static-site-generator-with-zero-experience/)
