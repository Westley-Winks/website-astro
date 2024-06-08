---
collection: "writing"
date: 2022-05-27T19:00:00-07:00
description: "My favorite email service got an update."
lastmod: 2022-05-27
publish: true
slug: "proton"
tags: ["tech"]
title: Proton
---

_This piece first appeared on the [Until It’s Not Fun](https://untilitsnotfun.com/posts/2022-05-27/) newsletter._

I have been using [Proton Mail](https://proton.me/) for a few months now instead of using GMail. Proton offers secure, encrypted email that gets locked up in a such a way that only you and the recipient see the message.

What does this mean? When you send an email from your GMail account, it gets stored on Google's servers as plain text. This means that anyone that can access the servers can see all of your emails; when they were sent, who they were sent to, and the actual message content. Authorities can also request the records from Google and give Google a gag order to prevent anyone from knowing they accessed them.

Encrypted email offers a "solution". Before being sent, your email gets encrypted, jumbled into an unreadable mess. Even if Proton wanted to see your message (or anyone else for that matter), they physically can't. They are stored with zero-access encryption on Proton's servers. I put "solution" in quotes because this is a classic case of the [Network Effect.](https://www.investopedia.com/terms/n/network-effect.asp) The more people that use Proton, the better it is for everyone.

Let's say I sent a message from my Proton Mail to a GMail user. That message still makes its way to Google servers where they have the keys to access the message (you can, however, use password protection to have a weaker form of encryption). The real magic happens when I send an email to another Proton user. Since both the recipient and the sender put the message on Proton servers where there is zero-access encryption, that email is end-to-end encrypted: _only_ the sender and recipient can see the message.

How does this encryption happen physically? Proton uses **public key encryption**. Each person generates two keys; a public key and a private key. Keys are long (usually 2048 bits) strings of characters and an encryption algorithm uses these to quickly lock or unlock the message. The basic concept is that anything locked with a _public_ key can only be unlocked with the matching _private_ key.

If I wanted to send you an end-to-end encrypted email, I would write my email and look up _your_ public key. I would then lock my message with it. The only way for anyone to de-scramble that message is with your private key which only you have. To reply, you would encrypt your message with my public key that can only be unlocked with my private key. Proton does this all automatically and it is exactly like using any other email service but with excellent protection in the background.

Encryption and cryptography is a massive field and this is just the most basic idea.

Proton also offers a fantastic VPN service. With a VPN, all of your internet traffic gets routed to a different server so it looks like your traffic is coming from somewhere else. The most relevant benefit for this is that it hides your internet activity from your internet service provider (Starlink, Bend Broadband, etc.) to prevent them from selling your internet history data.

The trick is that you have to trust your VPN service to not do the exact same thing. Proton VPN has been audited by a third party and can prove that they don't keep logs of your internet traffic. Your internet activity gets routed through Proton servers and then they _burn that data_ (virtually, of course).

I barely scratched the surface of why Proton offers a fantastic service and I didn't even get into their mission and why people should pay for this service to support Proton's mission. Proton just got a huge update with a re-branding and a simplified pricing structure. Privacy focused companies usually stall out after a certain amount of growth simply because people generally don't care about their online privacy. This is a huge step in the internet privacy space and it is exciting to see a solid company with a strong mission grow into an actual competitor to the more mainstream companies.

I have the honor to be Your Obedient Servant,

Westley
