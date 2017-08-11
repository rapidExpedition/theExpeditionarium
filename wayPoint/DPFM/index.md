---
layout: default
published: true
title: DPFM
root: ../../
---

> ##### Note:
>  *This is a **[WIP](#wip)** and subject to change and further development.*

DPFM stands for *Distributed Playlist Formatting Markdown*.  It is a syntax for writing distributable (shareable) playlists in a human-legible manner.  It is inspired by the XML based [XSPF](http://www.xspf.org/) specification.  It is meant to be easily and intuitively accessible for drafting and editing as a plaintext file and versatile enough to allow a scaleable level of accuracy in resolving audio tracks between different audio libraries.

While primarily a free and open filetype, intended for compatibility and use across platforms, it will aslo be used in a pilot-program of the same name for proof-of-concept as well as for innovation beyond the modest scope of the filetype.

DPFM should ultimately tie in to a distributed social network which combines aspects of [8tracks](http://8tracks.com/), [OpenBazaar](https://openbazaar.org/), and [Hatchet](https://hatchet.is/), utilizing [IPFS](https://ipfs.io/) for distributing playlists under a decentralized social network, and this would possibly be able to utilize a monetization scheme toward automating quality curation through the [Ethereum](https://www.ethereum.org/) network.

More fundamentally, the use of IPFS could be used to distribute these playlists while keeping them associated with their originator through the use of a static profile page, and to ensure wide distribution of the playlists for the sake of maximizing their availability, the network could use a recommendation system which automatically caches recommendations (the actual playlist file and perhaps the associated profile page) until either they fall down too low on a scale of relevance or until they are manually dismissed by the user.

The user could also permanently contribute to hosting playlists by either liking or saving the playlist or by following a profile and thereby hosting that entire profile's contents and submissions.

This system would not include any general purpose mediaplayer (a user would not explicitly be able to browse their music library) and would likely utilize the user's own choice of mediaplayer to resolve tracks for playback.  Instead, the standalone app would focus solely on playlist discovery and for browsing a playlist library.  It should also have a means of syncing playlists with other media-players on a system or even in the cloud.

It should be readily apparent within the app whether the tracks are available and how accurately the tracks seem to match those specified in the playlist (leaving some leeway for errors in track IDs).

It might also be useful to allow for forking playlists and submitting pull requests to correct a track's data or at least get feedback on the accuracy of the tracklisting.  Playlists might also undergo slight tweaks through their lifetime, and through the use of IPFS, those changes could be tracked.  In such a case, a person who had liked a previous version could see the change and determine whether they want to support the new version or the old version.

This might seem a bit complicated for something as simple as a playlist, but considering what playlists are often used for, the construction of one can make or break the mood around an activity very quickly.

> ##### WIP:
>  *To consult or contribute those tasks yet uncompleted in this document, please refer to the comments visible below when <a onclick="goToGitHub('{{ site.github.repo }}', '{{ page.path }}')" title="edit on GitHub" class="link">editing</a>.  Please consult the [contribution guidelines](/siteWiki/contributionGuidelines)*
