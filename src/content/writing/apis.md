---
collection: "writing"
date: 2022-06-10T19:00:00-07:00
description: "A shallow dive into what exactly APIs are."
lastmod: 2022-06-10
publish: true
slug: "apis"
title: APIs
---

_This piece first appeared on the [Until It’s Not Fun](https://untilitsnotfun.com/posts/2022-06-10/) newsletter._

[Last week](/writing/what-is-the-internet/), I talked about how the internet works. Clients make requests to servers and servers respond to those requests. Today, let's go deeper into how programs and computers can talk to each other: APIs.

Back when computers were just starting out, the companies producing them built everything for that computer (the hardware, the chips, the software) and that one company put all of these together to make it work. Since computers became ultra popular, it opened up the market such that entire companies could be formed around building each of these components: Intel makes chips, Apple provides low-level software and hardware, and there are thousands of companies that build applications (Facebook, Chrome, Discord, etc.). We now have so many different applications and they all need to connect so that they can be useful to us.

This is where Application Programming Interfaces (APIs) come in. APIs act as an _interface_ between different applications and allow them to get information from and communicate with one another. Let's start with an analogy.

If you wanted to start a company that builds houses, you wouldn't build _everything_ from scratch. You would have to go chop trees, make them into boards, forge nails, build all the cabinets, deal with the circuitry that goes into an oven. But there are specialized companies out there that can do all of those individual tasks so much better than you. These individual companies have a [competitive advantage](https://www.investopedia.com/terms/c/competitive_advantage.asp) over your company in each of those tasks. Yes, your company can build a full house from scratch but your cabinets won't be better than Cabinets 'R Us LLC and your couches won't beat Great Seating Inc. You would be building shitty houses that nobody would buy and you would be bankrupt in no time.

A better business model would be to pay those other companies that are good at those individual tasks to do them for you at a lower cost. You pay Cabinets 'R Us and Great Seating to build the components for a house. **Your job then becomes stitching all these pieces together into a functional dwelling.**

This is exactly what APIs allow for in the virtual realm. APIs create specialization and competitive advantage. Companies can really perfect a specific service and offer it as an API for other applications to use. Stripe has an API for payment processing. FedEx has an API for logistics and shipping. NOAA has an API for weather information. When a developer is making an application, their job isn't to build everything from scratch. **A developer's job is to stitch APIs together into a functional application.**

Let's say I start an online business and I want to have some way to collect payments online. I could spend weeks or months trying to code a payment system from scratch. It probably wouldn't look good and would have bugs and I would need to constantly maintain it along with my other business functions. I could also hire a very expensive and specific developer to take care of that for me.

But there are companies out there that are really good at processing payments. Why not just pay a specialized company to do it for me at a lower cost? [Stripe](https://stripe.com/) has a full suite of payment infrastructure with a fully featured API that I can tie into my application so the two can talk to one another. With this, when someone makes a purchase, I just point that information to the Stripe API and it is taken care of. I don't have to write hundreds of lines of code, it's reliable, and there is no maintenance on my end. All I have to do is stitch my application and the Stripe API together.

Later on, I might want to include shipping time estimates so customers know roughly when their shipment will arrive. Again, I could spend months making some kind of shipping model to estimate a shipping time. But why not just bolt on the FedEx API that already has that information? My application would ask the FedEx API for a shipping estimate and I could provide that information to the customer.

These are just a few examples of all of the possibilities that APIs have opened up. Developers can now spend less time reinventing the wheel and more time innovating. APIs have allowed really unique applications to be built with speed and quality never before seen while opening the door for companies to specialize. All of the software startups in Silicon Valley have APIs to thank for that.

I have the honor to be Your Obedient Servant,

Westley
