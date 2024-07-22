---
collection: writing
date: 2024-07-22
description: Typewriter fonts, writing, and politics but mostly just what I learned about Rails this week.
lastmod: 2024-07-22
publish: true
slug: weeknotes-2024W29
tags:
  - weeknotes
title: Weeknotes 2024W29
toc: true
---

I've been learning so much this week and this just became the place to upload all of it. It's a long one.

## Look Ma, I'm a developer

I've been hyper-fixated on building a web app this week. It's not much but it's basically a [Linktree](https://linktr.ee/) clone with some different features specifically for the group I'm building it for (Peace Corps Volunteers[^1]).

I'm using Ruby on Rails as my framework. Everything they say about Rails is true. It is so fun to work with and because Rails is so highly opinionated, it Just Works. The incredible thing is that I, a person who has only ever really programmed static websites and Python scripts, was able to make a functioning web app in a few days. That's even with a database and user authentication.

The flip side of Just Working is that a lot of stuff happens "magically." How was I supposed to know there was a method for that!? It makes finding errors more difficult than it should be but the MVC structure at least informs me of where I should start looking. Overall, it's not that bad but the "you're just supposed to know" sentiment is sometimes frustrating.

Ruby seems pretty great as a language, too. The only [toolbox language](https://www.hillelwayne.com/post/toolbox-languages/) that I have is Python and I use it for just about everything except for a few bash backup scripts. I'm picking up Ruby as a by-product of learning Rails so maybe Ruby will be another language in my toolbox. I know Python pretty well at this point so it's been fun exploring something new.

I don't like styling websites for two reasons:

1. I hate naming classes for CSS and I don't really like having excessively long utility classes from Tailwind.
2. I'm _not_ a designer and as soon as I try to learn some concepts, I get bombarded with abstract ideas about Gestalt principles and color theory instead of practical things to do.

I've got some new tools to circumvent these this time. I did some research and found the [BEM methodology](https://getbem.com/) for creating and styling components. At it's core, it's just a naming convention. Everything is either a **B**lock or an **E**lement and each can have **M**odifiers. Instead of random class names, BEM gives some nice structure that makes elements modular.

The real kicker is when you combine this with Sass. Sass is a really nifty CSS preprocessor that makes styling with CSS a bit easier. The big thing is that you can cleanly nest selectors so it makes styling BEM components really easy.

For example, if you have some buttons like `<button class="button button--primary">` and `<button class="button--secondary">`, your Sass will look like this:

```scss
.button {
  border-radius: 12px;
  font-size: 1.2rem;
  &--primary {
    background-color: $primary-color;
  }
  &--secondary {
    background-color: $secondary-color;
  }
}
```

As for colors, I'm using the [Rosé Pine](https://rosepinetheme.com/palette/) palette. It helpfully lists 15 colors (6 seem optional to me) and what exactly they should be used for. Finally, some practical design tips.

Now, what about the HTML? As a default, Rails uses `.erb` files to make HTML templates that you can plug data or logic into. It's a pain to write and it looks overwhelming with all the percent and equals signs. Instead, I've been using [Haml](https://haml.info/) as my main templating engine. From their tutorial, the normal `.erb` looks like this:

```erb
<section class="container">
  <h1><%= post.title %></h1>
  <h2><%= post.subtitle %></h2>
  <div class="content">
    <%= post.content %>
  </div>
</section>
```

The same thing in Haml looks like this:

```haml
%section.container
  %h1= post.title
  %h2= post.subtitle
  .content
    = post.content
```

It is **so much better.** It cuts out so much of the nonsense. Why can't HTML look that good?

Lastly, part of my application has an editor where users can edit their profile. I'm a bit of a Markdown connoisseur/fanboy so I wanted to implement a simple Markdown editor. I settled on [Redcarpet](https://github.com/vmg/redcarpet) because it looked easy enough while also allowing me to make a custom renderer.

I took inspiration from the fantastic [omg.lol advanced editor](https://home.omg.lol/info/editor) such that the links are specified as a simple Markdown list of Markdown links. However, this list would need to be styled differently from any another list on the profile. I accomplished this by adding some custom logic in the list renderer: if the list item begins with a link, style it like a nice inviting button, else it's a normal list item and style it normally.

So that's really the bulk of what I learned this week. Writing everything that I did/learned out on paper makes me feel like a real programmer, a coveted identity that I've always wanted.

## Fonts, give me all the new fonts

I found [Keenan's website](https://gkeenan.co/) and the first thing I noticed was what lovely colors they chose. It's a truly beautiful website. The second thing was wondering what that fun typewriter font was. Thankfully, I found a colophon and found out it's [TT2020.](https://copypaste.wtf/TT2020/docs/) I immediately downloaded it, added it to my Obsidian, and switched some theme colors to match.

It works great as an interface font but it didn't look as good as Keenan's as a base text font for some reason. So I reluctantly left [SN Pro](https://supernotes.app/blog/posts/sn-pro-font-family/) on because I liked TT2020 so much. Then last night I stumbled upon [iA Duo and Quattro.](https://ia.net/topics/a-typographic-christmas) They are typewriter-y but still look pretty modern which I love. It goes absolutely fantastic with TT2020.

## I wrote something to submit to my favorite carnival

This month's [IndieWeb carnival](https://indieweb.org/indieweb-carnival) is hosted by James and the topic is [Tools.](https://jamesg.blog/2024/07/01/indieweb-carnival-tools/) There were a few different ways I could have went with this because there are _a lot_ of tools that I love to use and love to talk about. The large majority of them are on my computer or my desk and I figured everyone else would write about those. I wanted to be original.

Instead, I dug up an idea I had a while ago of writing about some of the wellbeing tools that I learned over the past couple of years that I use in my daily life. Perfect! Writing about it loosened some memories of a past me and so I explored that and told a touching story as an intro. I'm really proud of my writing lately and this one was no exception.

Check it out here: [Wellbeing Tools or, A Long Overdue Apology](/writing/wellbeing-tools/)

## I'm disappointed with the American political climate

I've never really gotten anxious or upset over politics in my life but the recent assassination attempt really got me.

I completely understand being frustrated and wanting to make a societal change. But murdering a presidential candidate is not how that happens in a democracy. It's terrifying to me that a presidential assassination could even _be_ attempted.

## Links

- [Make kin not nets](https://everythingchanges.us/blog/make-kin-not-nets/) by everything changes. Nice little reframe on what networking is, professional and personal.
  > When you reach out to someone with the intent to make kin instead of catching them in a net, you are still asking for their attention, you are still vulnerable, still exposed to all the ways we can be awkward with one another, or do harm. Making kin isn’t easy—few things worth doing are. But it is life-giving, it is restorative and gratifying. It is the practice of curiosity and care, of connection rather than extraction, of cultivating common ground.
- [The InclusiveWeb](https://notes.neatnik.net/2024/06/the-inclusiveweb) by Neatnik. I really like how Adam makes it a point to prioritize kindness and inclusion in [all of his services.](https://omglol.news/2024/05/26/omg-lols-people-principles)
  > "When someone puts the word pronouns in disgust quotes, and when they complain about being asked to provide theirs, it’s _never_ about the pronouns. It’s about not being able to relate to marginalized people who are misgendered on a daily basis, and it shows a lack of compassion and respect for LGBTQ+ people."
- [Visual design rules you can safely follow every time](https://anthonyhobday.com/sideprojects/saferules/) by Anthony Hobday. This guide was as close as I got to practical advice for design.
- [When designing online communities, think small](https://www.fastcompany.com/90934876/when-designing-online-communities-think-small) on Fast Company. This article posits that online communities should be smaller and more private. Something [I'm trying to create.](/writing/heyjohn/)

## Bits and Bobs

- I reached out to two people who's blogs I follow to express my **gratitude** for writing. Try it out sometime, it was a nice little exchange.
- I'm still playing catch up on **reading** all my emails newsletters from a week and a half of not reading any of them during a recent vacation.
- I can't renew my **driver's license** online because I need an American phone number to get an incredibly insecure 2FA message. I'll need to bum a few rides when I get home.
- It's been **so hot** this week.

[^1]: _DISCLAIMER: The contents of this website are mine personally and do not reflect any position of the U.S. Government or the Peace Corps._
