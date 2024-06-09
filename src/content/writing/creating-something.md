---
collection: "writing"
date: 2024-06-10
description: "What I learned (re)building my website in Astro."
lastmod: 2024-06-10
publish: true
slug: "creating-something"
tags: ["technology", "carnival"]
title: "Creating Something"
toc: true
---

_This is my submission for this month's [Indieweb Carnival](https://indieweb.org/indieweb-carnival). The topic of the month is [DIY - Something from (Almost) Nothing](https://andrei.xyz/post/indieweb-carnival-june-2024-diy-something-from-nothing/). A huge thanks to [Andrei](https://andrei.xyz/) for hosting._

I'm not a naturally creative person. Curious, yes, but not creative. I'm consumptive, constantly on the hunt for more information and interesting ideas. Most of the time, I don't actually "create" anything with my learning, in the traditional sense of the word. I prefer keeping things in the abstract rather than the concrete. It's much easier thinking "yeah, I could do that" rather than trying to prove that I can, in fact, do that.

There are two things that I create these days and both of them are on my computer: articles and software. I've been looking for a proper coding project to do recently and I've been eyeing [Astro](https://astro.build) to rebuild my website with. I took Andrei's prompt as the sign I needed to actually do it.

## Leaving Hugo

I built [my first website](https://github.com/Westley-Winks/website-rev-1) at the end of 2021 using a [Hugo](https://gohugo.io/) template. I was just getting into coding (outside of using MatLab and Julia in college) and I wanted to test out my web development skills. It went through a few different revisions over the years, but they all used Hugo in the background. I was learning HTML, CSS, and git with Hugo always cheering me on from the sidelines.

From my research, Hugo was pitched as a simple and fast framework for getting started. I wanted the easiest thing possible since I was just getting started and testing the waters. Since I didn't know anything else, I accepted that even though Hugo had its quirks, I just needed to write good enough code to work around it. I thought all static site generators would have the same issues.

Then I started hearing chirps about the new kid on the block, Astro. Like Hugo, Astro pitches itself as a framework for "content-driven websites." The difference is that Astro can be as simple or as complex as you like. For my simple use case, both perform the same basic functions of reading in my Markdown content, putting that content into templates, and rendering that to HTML. However, I found the templating and components in Astro to be much easier and more intuitive.

Part of the reason is that I am more comfortable with JavaScript (JS) than I am with Go. Astro components allow you to write any JS you need for that page to render then strips it away when you build the site. It felt much less rigid and awkward than Hugo's system. You can pass information about the pages between Astro components which adds even more possibilities and flexibility.

I'd summarize it as Hugo being "content first" while Astro is "pages first". At build time, Hugo goes one by one through your content, finds the appropriate template (according to its complicated [lookup tables](https://gohugo.io/templates/lookup-order/)), plugs your content into the template, and builds the site page by page. In comparison, Astro starts with all the pages that you want your site to have, generates them with templates, then finds the content and components needed to fill in those pages.[^1]

Another huge benefit of Astro that I didn't know I needed is type checking with TypeScript. It makes sure that the data in my content is consistent and in a predictable, predetermined format. This means that I can guarantee that every page will have a `date` in the form `YYYY-MM-DD` to use. It prevents typos and I can reliably query a collection of content knowing that all the metadata is the same.

Like I said, Astro can be as simple or as complex as you'd like. Mine is pretty simple but if I want to add more later, I can. If I want to use [Tailwind](/writing/styling/) for styling instead of vanilla CSS, it's as easy as running `npx astro add tailwind` and adding utility classes. There are also integrations for UI frameworks like React and Vue. I never tried but apparently they don't work quite right in Hugo while they are first-class citizens in Astro.

## Framework Agnosticism

Even though I completely changed my website, I didn't actually have to change any of the really important stuff, my content. I write all of my posts in Obsidian, [my notes app of choice](/writing/obsidian-pcv/), which saves them all as Markdown. Because I do all my writing in one place, I have one point of truth for all my content that my website then pulls from.

Pulling from that content is more complicated than it sounds though. For my last website, I had a pretty [clunky Python script](https://github.com/Westley-Winks/obsidian-to-hugo) that read all my Markdown files, copied them to the website, then deleted the ones that didn't have a `publish: true` tag in the frontmatter. There were so many different cases that dictated how a particular piece of content should be copied that the script was really just layers and layers of `if` and `for` loops inside of each other. It worked but [it wasn't pretty](https://github.com/Westley-Winks/obsidian-to-hugo/blob/main/src/obsidian_to_hugo/obsidian_to_hugo.py#L107).

This time around, I found [someone else's script](https://github.com/Westley-Winks/obsidian-to-astro-sync). It seemed like the author's content structure was relatively flat while I'm a folder fanatic so I had to adjust a few lines. Now, I can run the script and it updates any content that has changed in my Obsidian folder while maintaining links and images.

Sometimes I get a little wary about using a framework like Hugo or Astro because I can't guarantee the longevity of them. Even though they are open source and the source code will be around forever, support for them could theoretically be dropped anytime.

My theory is that enough people rely on this framework that if it does get shut down, another good one will pop up. This already happens with all of the JS frameworks available. Worst case scenario, I learn a new framework. At the end of the day, my content is completely independent of how it is displayed on a website and tools will be built to adapt to that.

## Styling

Making a website look good is way harder than I thought. In my last website, I used a classless framework called [new.css](https://newcss.net/). It greatly reduced the complexity of my website since I didn't have any classes in my HTML and minimal custom CSS. It looked great and I didn't have to do any work besides make sure my HTML look good.

However, since the time I started using new.css, I've seen a lot of really cool and creative personal websites. I wanted my website to be _mine_ too. I also didn't want to add too much complexity with a styling framework like Tailwind. So, I opted for regular ol' CSS.

Astro makes this pretty easy. It uses [scoped styling](https://docs.astro.build/en/guides/styling/#scoped-styles) that allowed me to write CSS for a component right alongside that component. Yet again, I avoided having to mess with class names for all my HTML elements. This system is like the best of both worlds between vanilla CSS and utility classes. I get the "CSS alongside HTML" that utility classes provide without the clutter of adding a bunch of class names.

Taking [inspiration](https://brutal.elian.codes/) [from](https://flamedfury.com/posts/) [others](https://piccalil.li/), I set out to make my website functional and personal.

I started with the table of contents and I love how it turned out. First, I followed [a recipe](https://kld.dev/building-table-of-contents/) to get all the headings and subheadings formatted correctly into HTML from Astro. I modified [this CSS](https://gist.github.com/dylancwood/7368914) to make it look like a tree. Then I made it sticky so that it stays on the left side of the screen as you scroll, allowing you to jump around from heading to heading really easily.

Then, I dove into the inner workings of flexbox to get it to wrap at _just_ the right time so it looks good on every size screen. I added a button to hide/show the table of contents on mobile-sized screens so that you don't have to scroll through a big list before actually reading the content.

Next came designing the pages that hold lists of content ([/writing](/writing), [/books](/books), etc.). I went back and forth between the "date + title" format and the "card" format. I also knew I didn't want to use a `<details>` dropdown block because I didn't like the "click > scroll down slightly > click again" functionality on my last website design. Eventually, I opted for the card format so that I could display additional information and context before clicking into a post. The normal list was a bit too simple for me this time around.

I _really_ wanted the cards to pack densely, all butted up against one another horizontally and vertically like a mosaic. Getting things to stack in one direction is easy but not both. I tried using flexbox _and_ grid but they both only allowed items to stay in their row, preventing them from being pushed up against the card above it. I later learned this is called a **masonry layout** and it currently takes JS to work properly. According to the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout), native CSS support for it is not compatible with any browsers right now.

Coloring my site was last and the hardest. It was easy to pick out a really good looking color palette only for it to look clunky once actually applied to the whole website. I used [coolors](https://coolors.co/) to generate random color palettes until I found one that sort of worked. The colors were adjusted and applied according to [this guide](https://anthonyhobday.com/sideprojects/saferules/) by Anthony Hobday. Adding a few shades to each color really helped the website as a whole look more cohesive.

The [Atkinson font](https://brailleinstitute.org/freefont) came preloaded when I created the Astro project and I liked it enough to keep it.[^2] To finish, I added some bells and whistles like hover actions and called it good enough for now. There are a lot of little tweaks that I might like to make in the future but there are bigger things I'd like to add first.

## What's Next?

I'm currently looking at a list of to-dos ranging from small tweaks to large additions. That's not even counting the "ideas" list.

For now, I am happy with it and I am proud of myself for creating it. I wouldn't have been able to do it without others creating lots of stuff before me though. The people whose links are littered throughout this post all contributed to this creation. Like I said at the beginning, I'm much more consumptive than creative. Still, I made something with my own hands that I can appreciate and maybe others can too.

[^1]: I don't know either of these well enough to know if that is actually how the code works. This simplification is just what it _seems_ like happens based off of how the templates are built and how the routing is done.

[^2]: I love fonts. I've now got Atkinson on my Kindle to try out. [SN Pro](https://supernotes.app/blog/posts/sn-pro-font-family/) is just too good to stop using it in Obsidian though.
