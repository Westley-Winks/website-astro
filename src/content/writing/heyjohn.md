---
collection: "writing"
date: 2024-07-07
description: "I'm now running my own private social media website for my friends."
lastmod: 2024-07-07
publish: true
slug: "heyjohn"
tags: ["technology"]
title: "heyjohn: A Vision For A Better Social Media"
toc: true
---

I miss my friends.

In high school, I had a small group of friends that I did everything with. We were at Jacob's house nearly every day after school, even if it was eight miles out of the way. We learned, played, created, and grew together and I love them dearly to this day.

As everyone's lives started, we had to physically separate. John and I went a few hours away to go to school. Garrett went across the country. Until this point, we never had to connect without being in the same physical space. We tried our best, usually playing video games together and waiting for Christmas break to come when everyone could gather again.

Over time, we tried a few different tools to maintain the level of connection that we had built over those formative years. We tried creating a Discord server with different channels for different topics. We tried gaming regularly, creating a book club, and a bi-weekly newsletter. Nothing really stuck except for semi-regular individual phone calls and our three-or-four-messages-at-a-time group chat on Snapchat. Everyone always had other responsibilities and relationships to take care of that left nurturing our small community on the back burner.

And now I am 5,600 miles away and eight (sometimes nine) hours ahead of home. I've met some incredible people here that I've made relatively deep connections with. I'm afraid of the impending disconnect in these relationships that I _know_ is coming once it's time to sprinkle ourselves back across the United States.

Maybe I need to embrace that people grow as do my relationships with them. Maybe I should just let Lady Time work her magic and let things happen naturally. Relationships can be deep _and_ temporary. But these people really mean a lot to me. They are people I can go to and be myself and trust wholeheartedly. They are relationships worth nurturing and putting effort into.

For a long time, I've needed a tool, a platform, a community that facilitates and fosters meaningful connection between people that I care about. So, I decided to run my own social media website called heyjohn.

## My Vision For heyjohn

I know that this community is going to grow and develop as we do but I want to make clear the purpose and vision I have for creating and running heyjohn.

I imagine heyjohn to be an online space where people can be themselves and use that as a tool for connection and belonging. It's a small, private, and highly interconnected social platform that is free of ads, algorithms, and performativity. It's a living and breathing entity that sticks to some central values:

- **Authenticity:** People should feel supremely comfortable being themselves on heyjohn. We are all human beings and that alone is a beautiful thing. We all have experiences and stories that make us who we are and we shouldn't need to explain ourselves or our needs. No one should have to change their true selves or hide an identity.
- **Empathy:** People just want to be heard, seen, and understood. Empathy is _not_ putting yourself in someone else's shoes. Instead, empathy is believing other people's stories about what it's like in their shoes, _even if it doesn't match your perception of reality._ It's also not sympathy, comparison, minimization, or unsolicited advice.
- **Trust:** Some trust is inherently required in any social network. In this case, we all trust that others will practice non-judgement, respect our boundaries (don't forget to set them!), and act with integrity.

I know these can feel awkward and vulnerable, especially online, but they are core tools in building connection and belonging. They are the base that all of my meaningful relationships are formed from.

## What heyjohn Actually Looks Like

So, how do we actually achieve all that?

heyjohn is a fork of [Mastodon](https://joinmastodon.org/), a popular federated microblogging platform. Without getting into the weeds too much, it is very similar to X in look and feel. The only functional difference is that **heyjohn is closed to the outside world.** The only people that can see our posts are people that I have personally invited and onboarded.

The basic functionality is people post (also called a toot) a short thought, update, question, or anything else that they want to share. Other people on heyjohn will see posts of people they follow chronologically and reply to them.[^1] Posts and replies might be:

- A poll asking what book you should read next
- A status update on the project you are working on
- A picture of you and a loved one on a trip
- A link to an interesting podcast and what you learned from it
- An open invite for people to come over for a barbecue next Saturday
- An announcement that I'll bring beer to that barbecue

Beyond that, there are the normal things you'd expect. You can tag others, use hashtags, follow others, and block content. The underlying code is being constantly updated by a [large non-profit](https://blog.joinmastodon.org/2024/04/mastodon-forms-new-u.s.-non-profit/) with resources behind it so features will get added and updated as they develop them.

I'm also [maintaining my own version of the code](https://github.com/Westley-Winks/heyjohn) so that we can make changes as needed by the community. I've only made one small change that is hardly noticeable. However, if the community wants a new feature, we can add it. Features could range from small visual changes to custom bots to fundamental restructuring of the program. We are limited only by the collective imagination and coding ability of the group.

Community events and group activities are also important for feeling connected to the whole. We can use heyjohn to organize a book club, a question of the week thread, or something else. Again, we are limited only by our collective imagination.

## Why Not _Insert Some Other Platform Here_?

I spent a long time doing research and testing things out before I landed on microblogging as the concept and Mastodon as the implementation.

Firstly, I've noticed that group chats are too "fast." You have to be there when the conversation is happening or else you miss out. The content of the conversations have no staying power. Great for quick updates and logistics, poor for meaningful connection.

When there are more than a handful of people in a group chat, one or two people tend to dominate and crowd everyone else out. It makes participating feel scary unless you have a big "presence" which I certainly don't. It's also hard to create an identity for yourself in that kind of environment.

Microblogging has a good pace to it. It's asynchronous but posts stay relevant because they are so short. I'm not expected to reply immediately because the post will still be there in a few hours but I'm not going to reply to a 150 character comment from three months ago. This leaves space for thought and empathy in both posts and replies. Everyone also has their own profile so I can peruse a specific person's posts to get to know them or catch up with their lives.

Secondly, I'm not going to let some Big Tech platform vacuum up every single message we send and sell that data to ad companies or feed it to an AI training system. That is out of the question for privacy and quality-of-life purposes.

Considering all that, I was left with a few different federated microblogging platforms. I tried most of them out but kept coming back to Mastodon for its maturity and polished look. I got it set up following their documentation and they are actively developing the platform. They have an [official app](https://joinmastodon.org/apps) and email notifications just work.

There are some [other](https://glitch-soc.github.io/docs/) [Mastodon](https://github.com/hometown-fork/hometown) forks that add big, new features like local-only posting (alongside public posting) and better formatted toots. I _really_ like these features but I wanted to start off with completely closing off the community. It is a simpler start (and keeps server costs real low). Again, I am maintaining the heyjohn code. If people want to open it up and have those other features, we can.

## Questions, Uncertainties, and Ideas

The technical part of heyjohn was fun and easy for me. The more difficult part of this project is the social component. I keeping coming back to analogy of heyjohn being like a party. To start, I will be the party host that makes sure everything is going well and adding "[social lubrication](https://runyourown.social/#you-are-the-party-host)" when needed. I want people to use this tool and benefit from it.

As the community develops its own culture and tradition, I'm expecting people to take ownership of the party. It will no longer be Westley's party and we'll all play a role in making _our_ party an inviting place to be. This could come in the form of running a group activity, brainstorming new features, or chipping in for server costs.

One question that I can't yet figure out is who is in and who is out. I want to be inclusive and have everyone involved but exclusivity is a feature in this case. So, who do we invite to the party? Of course John is in but what about his aunt that he swears is cool? I think this will be easier to answer once the actual culture of the community is developed. It will become more clear who would be a good fit and won't.

I'm also quite scared that this project will end up like so many before it and fizzle out due to a lack of participation. Again, people are busy and have much better things to do. It has to be lightweight and inviting enough that people _want_ to participate and make it their own. I'm hoping it's like a flywheel. Once it gets going and people start feeling like they belong and take ownership of the community, it should sustain itself.

Finally, I have some ideas for features and bots that may or may not make it in someday:

- **Logo contest.** This is the first order of business once we get a few more people. Open up submissions for a couple weeks then everyone votes for a heyjohn logo.
- **GuillotineBot.** Each week, someone gets randomly selected and their profile picture gets deleted.
- **Merch.** Once we have a logo and a proper community, we can get stickers and pins. I love pins.
- **Book club.** I'm not quite sure how to implement this but I'm thinking we could use hashtags. Have a weekly thread about a certain portion of a book and filter out the hashtags to avoid spoilers.
- **Groups/Events.** Some kind of system for further privacy designed around specific purposes. Maybe there is a temporal component so that people don't stay in their little bubbles. There are lots of ongoing discussion about how to best implement groups.

## Conclusion

I set all this up for selfish reasons: I miss my friends and I want a sustainable platform to foster connection between people I care about. At the same time, I really want this to be a positive force in everyone's lives who uses it. There are plenty of places, online and off, where you can't be who you are or have to don some kind of identity that isn't really yours.

I hope that heyjohn can be a pleasant respite.

## Gratitude

- **Garrett, Jacob, John, and Levi** for being my best friends and giving me a space to grow and be. I love you guys.
- **Darius Kazemi** for writing up [a wonderful article](https://runyourown.social) that really formed the foundation of this project. It came at a perfect time.
- **Mastodon contributors** for putting in the work to make software that is clean and open to everyone.
- **Brené Brown** for teaching me the skills and language to express myself accurately.

[^1]: I will write out a proper onboarding/users guide at some point. The official documentation isn't that fun or useful to read. Plus, some of it doesn't apply since heyjohn is a private server.
