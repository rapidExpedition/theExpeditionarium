---
layout: default
published: true
title: rapiDex
---

This project--under the working title, *rapiDex*--is intended to produce a CMS which incorporates the  key features of [Draft](https://draftin.com/), [Gollum](https://github.com/gollum/gollum), [TiddlyWiki](http://tiddlywiki.com/), [Prose](http://prose.io/), and even [Asana](https://asana.com/) or to some small extent, [Apostrophe](http://apostrophecms.org/). This would include a minimalistic responsive interface, git-backed version control, and the ability to load dynamically as a [single page application](http://tiddlywiki.com/#SinglePageApplication) among other aspects from all three and beyond from similar notable applications.

Possibly the nearest kin to this concept would be [CosmoCMS](http://www.cosmocms.org/), but one key difference would be that that the editing would directly interact with a git repository and that the version history would also be fetched from the repo, rather than the CMS keeping its own.  The seamless editing interface style used in that app is also similar to what the one in use at [Medium](https://medium.com/) and very similar to what rapiDex is after.

## Why Another CMS?

The world of content management systems and publishing platforms is diverse and disparate and fraught with divergent notions of what is necessary or not and why. What they all share in common, however, is that they handle all the heavy-lifting involved with making raw content presentable--usually in a published fashion.

Among such systems, we find wiki platforms, the front-end of which straddles the line between static content--typically documentation of some kind--and a content editor; albeit, almost universally in a rather clunky manner of the like typically employed by blogging platforms. In fact, there's often little difference between a blog and a wiki beyond site layout and the slim difference between pages and posts (both of which may also be referred to simply as articles).

The heart of a wiki is its version control system, but just as other aspects of a wiki's interface are baked into its platform the version control likewise gated for exclusive use by that platform.

## Responsive front-end

We need the ability to manipulate the text and site directory on the front-end in realtime, seamlessly and intuitively, retaining any user's changes in their own browser's cache while checking those changes against the hosted content and offering realtime feedback about the status of those differences.  This should include a field for commenting on the changes with a button to submit those changes in a pull request.  In the case of a submitted pull request, the realtime status and comments regarding that pull-request should be immediately visible for that user.  For all others, such notifications may be visible depending on that user's role and settings, and this would include the ability to see the changes of a pull-request and to see that fork's changes implemented if desired.

There should be little difference between a preview and editing interface besides the visibility of markdown formatting and the toggling of the visibility of frontmatter; however, both should be configurable by the user in terms of palette (like the ability to use [Solarized](http://ethanschoonover.com/solarized)) or font but also the availability of page-flipping in lieu of scrolling.  However, the editing interface should only be visible to owners of the repo (individual users or organization members) or registered users who maintain a fork of the repo (github members, for instance), and most likely, all of those users will have to grant app permissions.

The app itself should probably only have access to repositories configured to use it, but if a user has multiple instances of rapiDex, they should be able to switch to these within the interface (likely taking them to that instance's own domain).

## Rapid back-end

rapiDex should essentially piggyback on various deployment platforms like [Github](https://github.com/) and [Netlify](https://www.netlify.com/).  It's static site generation should aim to achieve a rapid build time to enable the most seamless integration possible with such platforms' continuous deployment features.  We hopefully be able to use APIs from those platforms to be able to retrieve the status of deployments; however, if a user's cache contains their own most current version of the content, and we are retrieving the status of that content directly from the repository, then perhaps the status of the static site's deployment is irrelevant.  This is particularly true considering that no portion of the site's configuration (CSS or YAML, for instance) should be malleable from within the CMS interface.
