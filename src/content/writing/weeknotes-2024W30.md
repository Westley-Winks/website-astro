---
collection: writing
date: 2024-07-30
description: I launched an actual piece of software and took some vacation days.
lastmod: 2024-07-30
publish: true
slug: weeknotes-2024W30
tags:
  - weeknotes
title: Weeknotes 2024W30
toc: true
---

## pcvlink launch

I actually launched [a piece of software](https://pcvl.ink) that people can use! It's still a prototype as I'm still learning how to manage databases and user-focused software. I'll have a longer post sometime where I talk about the motivation and everything but for now pcvlink has three goals:

1. Provide Peace Corps Volunteers an easy way to share their digital identities
2. Provide decision-makers an easy way to find and hire volunteers
3. Connect educators and prospective volunteers with Volunteers who want to share their experience

This is done by Volunteers creating profile pages (in similar fashion to Linktree) to showcase their projects, wrangle their links, or offer contact methods. There is also an optional directory that will show all users for people looking for PCVs.

I used [fly.io](https://fly.io/) to deploy the Ruby on Rails project. It was _incredibly_ easy to get it going. Basically, you just run `fly deploy` to deploy the project and fly.io takes care of all things that come with running a server. So good.

I also decided to keep it easy and just use sqlite as a database for now. It's much easier (and cheaper) to keep track of and back up. I figured I could always port to postgres if I ever want/need to scale and get multiple servers running.

I will be sharing this project with the people I made it for this week when we are all together!

## Moving About

As one last hoorah before leaving Morocco, a group of volunteers rented a beach house for a few days in Asilah. What an incredible city. It's not very touristy and the beach was stunning. We also celebrated two of my friends' birthdays during the trip. What a great group of people.

After that, I went to the capital to attend committee meetings. It was productive and there are some great initiatives going for the next cohort to follow through on.

## Bits and bobs

- Helix has a `:sort` function that can automatically sort CSS declarations. So good for making your CSS look just a little better and more organized.

## Links

- [The eyballing game](http://woodgears.ca/eyeball/) Fun game where you try and eyeball angles and geometric points. (ht Morning Brew)
- [Decoding Gen-Z slang with linguist Anne Curzan on ReThinking.](https://open.spotify.com/episode/4w3eZVexmmjmdjMWHOfBRN?si=O2WQjNflTTujV4nEr4hCXA) Fun podcast about linguistics and language. I learned the new word "grammando" for someone who corrects others grammar.
- [Dungeons & Dragons taught me how to write alt text](https://ericwbailey.website/published/dungeons-and-dragons-taught-me-how-to-write-alt-text/) by Eric Bailey. When describing things such that people have to imagine what you are saying or writing, start with the most important details first.
- [Weblog styles](https://styles.themes.lol/) for cool swatches and color combinations.
