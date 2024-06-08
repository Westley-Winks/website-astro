---
collection: "writing"
date: 2022-05-13
description: "Describing a simple and universal markup language."
lastmod: 2022-05-13
publish: true
slug: "markdown"
title: Markdown
---

_This piece first appeared on the [Until It’s Not Fun](https://untilitsnotfun.com/posts/2022-05-13/) newsletter._

Humans write _a lot_ and most of it is done on computers these days. If someone asked you to write them a letter, where would you start? Most would open up Word or Google Docs. We all know the headaches that these word processors can cause: formatting not doing what you want it to, files getting lost, the person you are sending files to doesn't use the same processor, et cetera.

What if there was an easier way to write basic documents to avoid all of that? Something that can be opened and read on any computer and easily shared? Something with simple and predictable formatting?

Meet Markdown.

Developed in 2004 by John Gruber and Aaron Swartz, Markdown allows you to write in plain text and doesn't require a special program to read the content. Word documents (.doc or .docx) are **binary** files; ones and zeroes that machines can read very well but humans can't read at all. Thus, we need the Word program to translate those ones and zeroes to plain text so that we can actually use them. "Languages" like Markdown and HTML allow us to work directly with plain text so that we don't need a specific translator.

I put languages in quotes for a reason. Markdown is what is generally known as a lightweight markup language. Another markup language is HTML (Hyper Text Markup Language) which is what webpages are written in (including what you are reading right now!). At a general level, markup languages simply describe the content in a digital document. Lightweight markup languages (like Markdown) are designed to be simple, easy to use, and human-readable.

All of the posts of this newsletter are written with Markdown. You can see the raw Markdown of this exact post on [our GitHub repo,](https://raw.githubusercontent.com/Westley-Winks/until-its-not-fun-newsletter/main/content/posts/2022-05-13/index.md) and anyone with internet can read it. What you are reading now is the conversion of that Markdown into rendered content. In the raw Markdown, you can see that the section headings are defined by octothorpes (or hashtags for the youngsters) like this:

```md
## Popcorn and A Coke

### _Where Jacob talks movies_

## The Tech Shelf

### _Where Westley talks about Markdown_
```

When the conversion between Markdown and what you are seeing now happens, the program knows when it sees an octothorpe to make the text that follows larger and grey.

Similar rules apply for links, bold font, italic font, and others:

```md
[our GitHub repo.](https://raw.githubusercontent.com/Westley-Winks/until-its-not-fun-newsletter/main/content/posts/2022-05-13/index.md)

**Bold**

_italic_

~~Strike through~~

- Bulleted
- List

1. Numbered
2. List
```

This all makes writing on the internet incredibly easy. No need to mess with styling or formatting, you can just simply write. So why isn't everyone using Markdown? For the everyday lay-person it just isn't as easy and for most tasks a Word document works great. There is no widely available and popular Markdown editor made specifically for the task. However, if you do a lot of communication on the internet, I would suggest learning Markdown and finding a good system that works for you. Personally, I use [VSCode](https://code.visualstudio.com/) and that works great for the workflow of the newsletter.

There have been some (controversial) standardization efforts that attempt to unify the syntax and all the different implementations of Markdown. As a result, Markdown support is coming to more and more platforms like Discord, GitHub, Slack. I think Markdown's simplicity and optimization for writing will make it increasingly relevant in the future.

I leave you this week with a joke and a Markdown example for you to try. Paste this into Discord and see the Markdown magic:

```md
\*I asked my friend "Do you know any other word for a big rock?"

He said "Boulder?"\*

I said **"Do you know any other word for a big rock?"**
```

I have the honor to be Your Obedient Servant,

Westley
