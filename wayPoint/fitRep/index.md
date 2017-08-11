---
layout: default
published: true
title: fitRep
root: ../../
---

This project will entail, firstly, the creation of a universal syntax for tracking workouts in plain text, but it will also incorporate an application for the purpose of analyzing data saved in that syntax.  This will be an unbiased and extensible personal fitness-tracking solution with the secondary goal of being adaptable for use in a social media context and particularly in a distributed, non-centralized fashion.

This would be, in effect, a combination of the simplicity of [weightxreps](http://weightxreps.net) and the versatility of [thesquatrack](http://thesquatrack.com), but in essence, very different from either; being first a core set of tracking technologies and standards, and only extending beyond that as proof of concept.

## Why another fitness tracker?

By and large, individuals and groups of individuals hold strong biases about the nature of fitness and the merits of their particular approaches to achieving what they consider to be a satisfactory or ideal level of fitness. While certainly in some cases that bias is sometimes warranted and even supported by the weight of evidence, and certainly some approaches are more sound than others by a wide margin, it is not the role or responsibility of a fitness tracker to enforce or even encourage particular behaviors and practices.

However, it is absolutely essential that a tracker facilitate a range of practices wide enough to encompass an elite level as much as an amateur level without causing either to obstruct the other.  The way to accomplish this is through an intuitive means of input; i.e. a sensible text syntax.

## Toward a workable syntax

Among those few human-legible syntaxes in standard use today for publishing, [Markdown]() stands out.  While meant for publishing prose to the web or any other route which would convert the text to HTML, the specification of its markup is almost instantly comprehendible at first glance.  That being said, there is very little of it that will useful for the tracking of weight, reps, sets, etc.; however, there is always cause for captioning and commenting on the work being logged if the user desires such functionality.

### Basic structure and layout

A fitness log can act as a diary or even a public blog to characterize impressions of the effort and condiditions involved with the work being tracked.  As such, the log should more or less allow for whatever formatting might be required for that purpose within reason--without losing sight of the purpose.

As such, we can take a cue from WxR and re-purpose markdown's header formatting for the exercise name.  A header usually divides up subject-matter, and it's perhaps fair to say that in the context of fitness tracking, the exercises themselves are always the subjectmatter at hand.  An exercise would be named like so:

    # some exercise

Commentary might precede or even follow this exercise heading, but what follows it should be formatted as whatever data would generally follow that exercise like so:

    Commentary here.

    # some exercise

    'properly formatted exercise data here'

    More commentary here.

However, as a matter of simplicity, we must rely on the exercise header to trigger the recognition of exercise data, as that data cannot stand on its own meaningfully.  The data syntax could stand out from the commentary clearly enough that our specification could assume that any such data following an exercise heading is associated with that exercise, even if interrupted by commentary *interludes* like so:

    # some exercise

    Commentary here.

    'exercise data'

It would perhaps seem that this commentary has some chronological bearing: that commentary before the data regards impressions when just starting (possibly in regard to past experiences with that exercise), commmentary between data comes from impressions or reflections during the rest period, and that commentary after the last data entry under that heading is in closing for that exercise or even the session or simply as a segway to the next exercise.

In any case, commentary might not directly pertain to the dataset before or after it but, rather, might be seen as general commentary; thus, we need the ability to refer directly to data.  We previously referred to this class of text as a *caption*, because it acts relative to the dataset as a typical caption does to an image.  We can easily get away with handling this like WxR does with a bit of a spin by offering two variations:

    # some exercise

    'some dataset' captioning here.

    'some dataset'
    captioning here too.

Notice the lack of spacing between lines in the second example, this will essentionally be ignored and work exactly like the first example; whereas a space between lines would simply designate a comment, rather than a caption.

The difference between a comment and a caption may seem frivolous at first, but this slight difference can change the way that the log entry is styled or may even be "pinned" by a tracker as specifically relevant to that exercise (say, when looking at an exercise's history with the extra commentary stripped off, the caption can still be present or linked or nested like a footnote).

### Dataset syntax

We've already established the specifications for a dataset's position as it relates to an exercise header and around other text.  Now we need define what designates a line as a dataset and not just another bit of text.

Again, we'll borrow from WxR but try and take it a bit farther.

A line beginning with a number should suffice to be our first clue, and in our first examples, this will designate a weight being lifted, followed by an 'x' and a number of reps:

    225x5

or

    225 x 5

If this format is not followed, our specification will recognize this entry as a comment, rather than a dataset.

#### More ways to enter weight

Alternatively, we can define variables and even manipulate those variables inline with the dataset.  One such variable already in common usage is 'BW' for bodyweight, which is defined by the most current bodyweight entry (which we will cover later).  This would simply be used like so:

    BWx5

And in a case where one wants to account for an exercise using only partial bodyweight, [like push-ups](https://www.google.com/amp/www.allthingsgym.com/push-up-weight-distribution-percentages/amp/), we can handle it like so:

    # Push-ups
    0.65BWx5 or
    .65BWx5 or
    65%BWx5

Alternatively, this attribute can be handled by a configuration file associated with the tracker (the data has no bearing on the text file itself, only the way that the file's data is interpreted by the tracker); so that BW can be inferred as '0.65BW' wherever it's used under the 'Push-ups' heading.

This can go the other way as well in the case of added weight:

    # Push-ups
    45+BWx5 or
    BW+45x5 or
    .65BW+45x5

This would perhaps be a more versatile than using a 'Weighted Push-ups' header and somehow defining the weight elsewise, but the header could still be used to designate two different styles of training the movement, rather than lumping the data together--if that is something the user desires to do.

In the case of multiplying bodyweight for the sake of workout programming (lifting progressively heavier weight as determined relatively by bodyweight), there's no reason this can't be handled in similar fashion:

    # Squat
    2BWx5 for 2XBW, or even
    2XBWx5

In the second case, we see a potential point of confusion by having an 'X' which does not immediately precede a number of reps.  There are two ways of handling such a case:

 # By designating upper and lower-case x as having distinct meanings.
 # By simply recognizing that the first 'X' immediately preceded a weight variable, rather than a number.

The second possibility is probably the least confusing and least likely to set the user up for failure and break the data.  However, it would still behoove us to strictly demonstrate its usage with the upper and lower-case distinction to better illustrate the functional distinction.

#### Two ways to handle reps, three to handle sets

Again we look to WxR's innovations in choosing our rep entry scheme.  Our original example is the most basic means of entry with one number of reps per line:

    250x5 <-This is one set of five reps.

So two sets in this manner would be two lines:

    250x5
    250x5

A line break is all that's required, but the specification should not distinguish between a line break and multiple line breaks in between data (whereas comments require two line breaks after or before a dataset or between paragraphs in like manner to Markdown).

It would probably be most common for a number of sets to be identical in reps and weight (sets across), and in such a case, it might be tedious to enter each again and again when one could instead enter:

    250x5x3 <-Three sets of five reps.

And a bit less commonly, if the same weight is being used with variable reps in each set (or in the case of a missed rep), we can simply comma separated values:

    250x5,5,4 <-two sets of five, followed by one of four.

Of course, any of these methods can be used in combination and without concern for the integrity of the data, as it will all be interpreted and tracked correctly without distinction between the methods of input.

#### Handling time and distance

This is one crucial departure we will make from WxR, which has no means of tracking such data due, perhaps, to the bias of its specific niche.  This should prove easy-pickings for a bit of innovation.

We will need to equate both time and distance with weight but also leave room for the use of weight in timed exercise.  Here are some examples of how we might accomplish this:

    # Sprints
    100mx2 <-max effort sprints, twice.
    100m/15.2,15.4 <-two sprints with their times recorded in seconds.

Notice that we have not used notation for our times, and that is because we can assume that any number after a slash without any reps indicated (a number preceded by an 'x') will designate time, and that a number with no extra designation is time in seconds.  However, we can also allow for various types of time notation:

    # Running
    5km/20:15 <-twenty minutes and 15 seconds.
    5km/20'15" <-another way.
    5km/20m15s <-notice that we're using 'm' for minutes even though it would more correctly indicate meters.  This tolerance stems from our time's position after a slash.

We can also deal with weight:

    # Weighted sprints
    100m/BW+25x2/20.2

This includes adding time to resistance training:

    # Paused squats
    225x5/5 <-five second pause squats.

    # Timed pull-ups
    BWx100/1'5" <-one hundred unweighted pull-ups in one minute and five seconds.

Obviously those two exercises have different goals.  The pause squat aims for either a progressively longer time in the bottom position or a progressively heavier weight held for a fixed amount of time in the bottom positon; whereas timed pull-ups might aim for a set number of pull-ups in as little time as possible or a maximal amount of pull-ups in a set time.  All of these cases have no bearing on the data itself but how the data is handled by the tracker, so this will all be a matter of configuration.

#### Accounting for effort

This is perhaps the easiest ammendment we could make to this syntax, but will probably be the most difficult one to meaningfully track.  This is perhaps only useful for exercises involving prolonged exertion, like sprinting:

    100mx2@70 or
    100mx2@70% <-both indicate two one hundred meter sprints at seventy percent effort.

This may be useful in tracking the intensity of a sprint as being 70% of the max effort while still counting it toward a total volume of work.  This particulars are beyond the scope of the specification of the syntax, however.

This entry should come last in the dataset, but it might be possible to have it follow individual sets like so:

    100m/15@70,16@65 <-two hundred meter sprints, first for fifteen seconds at seventy percent, then sixteen seconds at sixty-five percent effort.

This usage might not be terribly useful for anyone at all, but it should be doable without any strain on the rest of the specification.

What truly matters is that the data is legible and readily interpreted by a tracker.

## Need input

It should be clear that the intended means inputing a log entry is simply by drafting a text file in the correct syntax.  This means that one can use any sort of text editor preferred which has access to the log's directory (even if not immediate access, but eventually the totality of a person's log should be compiled into the same directory).  This can include email and can be entered with webhooks to ensure that the data ends up where it needs to go if present in a person's email.

However, as the tracker may first come to life on the command line, it could be possible to data through prompts which include tooltips and the ability break from the data's entry to enter comments or captions with a keystroke.

The next step would be standalone app utilizing responsive web design principles (likely using the [Electron Platform](http://electron.atom.io/)).
