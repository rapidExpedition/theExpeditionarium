---
layout: post
title: The Road to Decentralization pt.1
date: 20180107
root: ../../../../
---

It is certainly a prejudice of the project of [rapidExpedition][c0], or **rExpd**, to favor distributed and decentralized means of information dispersal and sourcing--in line as such with the general trajectory and perhaps the most virulent *will* and destiny of the Internet at large.  However shy of that destiny we might have seen it veer in the interim, the seeds have long been sown and will take root by whatever means they may.

We could perhaps refer to these means collectively as *hyper-participatory* or at least as following protocols of such nature.  Already does rExpd observe such protocols by its reliance upon [git][c1] version control and explicitly in an [open-source][c2] fashion, supported by what might be called a *hyper-collaborative* platform, [GitHub][c3], which acts as somewhat of a [CMS][c4] for our purposes.

## Some History

Now to explain why our use of these platforms, systems, and models qualifies as hyper-participatory rather than simply participatory, as most projects are in some respect, I will need to provide some context:  This project began its life on a variety of wiki platforms and most appropriately settled on the most standardized such platform, [MediaWiki][c5], the chosen platform of the venerable [Wikipedia][c6] project.  Already it should become apparent that open collaboration is in the very DNA of rExpd.

However, though certainly there are efforts and projects aimed at [backing up][c7] and [replicating][c8] Wikipedia in some distributed and decentralized manner, it should be noted that these efforts are tertiary to any intrinsic feature of its platform, however much in accord with its underlying principles--really, amendments and fanfare of a static nature, more than a concerted and explicit effort toward decentralization<sup id="a3">[4](#e3)</sup>.  This is in part due to the specialized dynamic design of the MediaWiki platform and its treatment of static content as almost circumstantial to its CMS-centric interface.  In a sense, it's no less of a walled garden for all of its efforts as a public treasure with its dedicated versioning and mark-up syntax and account management, especially considering the [vast resources][c9] necessary to replicate a project like Wikipedia and its [spin-offs][ca] in any functional fashion.

While a smaller project like our own might be orders of magnitude easier to replicate functionally, it would still be too resource intensive on a platform like MediaWiki to be considered in any way resilient or permanent, nor would it scale easily to serve a wide audience; as such did we require a lighter and more portable platform to meet this criteria--criteria which is perhaps essential to the very philosophy behind and espoused within the work of rExpd.

And so in comes git, GitHub, and [Markdown][cb] to end what might have proved an endless vetting process of all MediaWiki [alternatives][cc] (though certainly we forwent some [notable][cd] [stand-outs][ce]).  But though as simple and elegant as this battery of solutions may be, there are some caveats to maintaining a degree of autonomy and portability on top of a centralized platform like GitHub, and those we will address later.  Suffice to say that with these elements, we have achieved in near-totality our criteria of permanence and resilience toward something which might better qualify as hyper-participatory.

## On *Hyper-Participation*

This warrants some further explanation beyond juxtaposing our project's approach with similarly principled projects.  We must return here to what we earlier termed, *hyper-collaboration*, in order get a better picture of what exactly hyper-participation entails.

GitHub fits the bill as hyper-collaborative in striking a balance between crowd-sourced and autonomous content management.  This is accomplished by way of its primary mode of collaboration, [forking][cf].  In this way, any contribution to any project may be volunteered publicly and permanently insofar as desired but also accepted or not at the sole discretion of the project originator.  While this might begin to seem centralized with such discriminatory privilege allotted to a project's originator, there is actually very little to prevent a project's fork from taking up the mantle or a life all its own which might very well continue to intersect with the original at times or not at all.

This level of portability and collaboration goes deeper than the GitHub platform, as git itself facilitates most of the infrastructure necessary to handle this level of [collaborative distribution][d0] on other platforms or even outside of any purpose-built platform at all.

However, it is important here to note that both, git and GitHub, were built more or less by coders and for coders, but it is fortunate perhaps that code is but a subset of text and also universally requires some amount of documentation to boot (and more yet than is typically in evidence).  And by the dual blessings of character-encoding and hypertext markup standardization, we are able to take the same approach to documentation as to code--as well as to use code alongside documentation to shape the way in which one might interact with that text in a given context (i.e., via a web browser).

And yet none of this alone qualifies this project as hyper-participatory.  The collaborative dimension is certainly off to a running start, but it is largely in how the content is served that we stumble into a potentially crippling dependence on centralized services.  But in keeping the project as portable as possible, we reduce the chance of this to being practically negligible, and yet we keep striving for totality as a matter of principle, incidentally in-line with the specific statement of the work represented.

This brings us to what perhaps finally does qualify the project as hyper-participatory, and that is the very philosophy in and around it.  More deeply than in rExpd, itself, we have a motivating ethos<sup id="a0">[1](#e0)</sup> which includes some emphasis on the importance of infrastructure, industry, and culture in service to individual growth<sup id="a2">[2](#e2)</sup>.  More specifically would we hold the reliability, efficiency, and resilience of those aspects as the rubric by which to determine their potential for such service.  On all counts might we consider the decentralization and distribution of any such aspects as crucial for enhancement therein.  And the work by which we explore all of this is no less intrinsically bound to such a rubric, being neither above or otherwise extraneous to the very aspects which we analyze by such a rubric.

Now this is not to say that every project under rExpd and bearing the mark of its core principles would or should be so thoroughly hyper-participatory; instead, we might say that rExpd purports to provide an ever-more hyper-participatory wrapper around all else which might spring forth from it, at least in the outset of any such project, but with some confidence in how that lineage will resonate through the lifespan of any such outgrowth, ideally enhancing rExpd's own ability to better fulfill its stated rubric.

## Stepping Out

It was perhaps natural, given the trajectory of this project, that it register some pings with the [blockchain][d1] and other novel decentralized protocols by proxy.  Though however seemingly a natural fit, blockchain technology is yet without much precedence (yet with [much promise][d2]) beyond the narrow scope of [cryptocurrency][d3], but one older piece of technology, [BitTorrent][d4], gives us a more flexible and better established means of true decentralization aptly termed as *the swarm*.

One service which has caught onto the potential of such decentralization is [IPFS][d5] which, as it so happens, combines aspects of git and BitTorrent to create a distributed and decentralized standard which serves as an alternative to HTTP--in our own terms, a hyper-participatory hypermedia protocol; which is to say that one can publicly host files and serve them in tandem with the IPFS swarm and not only files but directories.  This allows for the possibility of hosting [websites][d6] as well as even [git repositories][d7], and in terms of the latter, much work is being done to make git work in a fully featured manner over IPFS<sup id="a1">[3](#e1)</sup>.

While other relevant and competitive projects with similar ends and features exist--one of which, [Swarm][d8], intrinsically functions on the [Ethereum][d2] blockchain (even currently compatible with a [name service][d9] on that very blockchain)--IPFS seems to best fit the bill as a non-monetized, voluntary means of hosting and archiving hypermedia content (take a look at our own [case-in-point][da]).  At any rate, it is our chosen onramp to the [permanent web][db].

So far though, making a traditionally hosted static site available on IPFS (or any comparable protocol) is [not such a straightforward feat][dc], as it requires total *relativization* of all internal links and site-mapping.  In any case, we've solved it for the time-being (again, as you can see in our [first release][da]) and will be posting a write-up on how and what's next for improving upon our method.  It's a start, anyway.

## Next Up

Some of this work will happen as a matter of course on **theExpeditionarium**, but most of the loftier work we will do in regard to this will begin more specifically on [wayPoint][dd] where we will identify and target very specific needs.  These needs will be simultaneously those of the project and those which from within the project we determine to be of general necessity or utility beyond its scope; indeed, if they do not prove to be so generalized, they should not be considered as necessary to the project, and that concept itself is a whole 'nother can of worms which brings us closer yet to the core of what rapidExpedition is all about.  That so just happens to warrant another article for another time, however.  In the meantime, stay tuned for part two where we will discuss our use of IPFS and what we envision for it.


---

 1. <small id="e0"> [Xenanthropy](http://www.xenanthropy.com/), the philsophy of new humanity, was the original concept behind rapidExpedition and still in development under the broader scope of its successor as well as remaining intrinsically at the heart of all ideas and efforts therein.</small> [↩](#a0)
 2. <small id="e2"> In *xenanthropic* terms, **Ultrahumanism** is the manner in which the individual is joined to the whole by labor and more specifically by the manner in which, in one's own labors, one vaults off of the labors of others past (building upon or utilizing them) or present (typically collaboration or cooperation of some kind).  This is in contrast to *Transhumanism*, in which one reaps the benefits and internalizes the fruits of such labors for personal growth, and *Superhumanism* in which one employs and expresses that growth to its fullest extent--incidentally toward the *ultrahumanistic*.</small> [↩](#a0)
 3. <small id="e1"> Some relevant efforts are detailed in the following links: [git on IPFS and references](https://discuss.ipfs.io/t/git-on-ipfs-links-and-references/730), [Mango: git Completely Decentralized](https://medium.com/@alexberegszaszi/mango-git-completely-decentralised-7aef8bcbcfe6).  These don't seem to include any explicitly collaborative interface, however, and so only replace a service like GitHub to a limited extent.  Certainly a couple more items to keep an eye on would be [IPVC](https://gist.github.com/flyingzumwalt/a6821e843366d606aeb1ba53525b8669) and, perhaps to some extent relevant to IPVC, [GVFS](http://www.gvfs.io/).</small> [↩](#a1)
 4. <small id="e3"> There are, however, emerging examples of Wikipedia alternatives which seem at least quite promising:  [Everipedia](https://qz.com/1151073/wikipedias-cofounder-on-how-hes-creating-a-bigger-better-rival-on-the-blockchain/) and [Lunyr](https://lunyr.com), for instance.</small> [↩](#a3) 

[c0]: {{ post.root }}/rapidExpedition/
[c1]: https://en.wikipedia.org/wiki/Git
[c2]: https://en.wikipedia.org/wiki/Open-source_model
[c3]: https://github.com/
[c4]: https://en.wikipedia.org/wiki/Content_management_system
[c5]: https://www.mediawiki.org/wiki/MediaWiki
[c6]: https://www.wikipedia.org/
[c7]: https://arstechnica.com/information-technology/2013/11/all-of-wikipedia-can-be-installed-to-your-desktop-in-just-30-hours/
[c8]: https://ipfs.io/blog/24-uncensorable-wikipedia/
[c9]: https://en.wikipedia.org/wiki/Wikimedia_Foundation
[ca]: https://en.wikipedia.org/wiki/Wikimedia_Foundation#Projects_and_initiatives
[cb]: https://daringfireball.net/projects/markdown/
[cc]: https://en.wikipedia.org/wiki/Comparison_of_wiki_software
[cd]: https://github.com/gollum/gollum
[ce]: http://tiddlywiki.com/
[cf]: https://guides.github.com/activities/forking/
[d0]: https://git-scm.com/about/distributed
[d1]: https://en.wikipedia.org/wiki/Blockchain
[d2]: https://www.ethereum.org/
[d3]: https://en.wikipedia.org/wiki/Cryptocurrency
[d4]: https://en.wikipedia.org/wiki/BitTorrent
[d5]: https://ipfs.io/
[d6]: https://ipfs.io/ipfs/QmNZiPk974vDsPmQii3YbrMKfi12KTSNM7XMiYyiea4VYZ/example#/ipfs/QmP8WUPq2braGQ8iZjJ6w9di6mzgoTWyRLayrMRjjDoyGr/websites/README.md "IPFS for websites"
[d7]: https://ipfs.io/ipfs/QmNZiPk974vDsPmQii3YbrMKfi12KTSNM7XMiYyiea4VYZ/example#/ipfs/QmP8WUPq2braGQ8iZjJ6w9di6mzgoTWyRLayrMRjjDoyGr/git/readme.md "Git, even more distributed"
[d8]: http://swarm-gateways.net/bzz:/theswarm.eth/
[d9]: https://ens.domains/
[da]: https://github.com/rapidExpedition/theExpeditionarium/releases/tag/v0.1-alpha
[db]: https://www.wired.com/2016/06/inventors-internet-trying-build-truly-permanent-web/
[dc]: https://www.reddit.com/r/ipfs/comments/3nzvct/a_tip_for_anyone_generating_ipfs_sites_with/
[dd]: {{ post.root }}/wayPoint/

<!-- #DONE: need to review these revisions in order to post +blogPost gh:9 id:19
-->
