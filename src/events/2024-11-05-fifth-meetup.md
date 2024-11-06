---
title: Fifth Meetup of the Hamburg HTML meetup, in-person
date: 2024-07-26
eventDate: 2024-11-05
eventTime: 6pm CEST
description: Summary about the Hamburg HTML Meetup, which took place in-person at Factorial GmbH
type: in-person
changes:
  - date: 2024-07-25
    description: Changed the date. HHTML will take place on November 5th, 2024
  - date: 2024-07-27
    description: New speaker infos. Manuel Matuzovic will most probably give a talk (to be announced) and you can win a copy of his new Accessibility Cookbook.
  - date: 2024-07-27 19:10:00
    description: Updated COVID19 policy. We kindly request you to test yourself upfront. Thank you for your cooperation.
  - date: 2024-10-14
    description: Added RSVP link.
  - date: 2024-11-01
    description: We finalized the details about the evening.
  - date: 2024-11-06
    description: Add summary for the evening
  - date: 2024-11-06 14:13
    description: Add slides "Fixing Accessibility Issues" by Alex Claes
---

The fifth edition of our Hamburg HTML meetup was an in-person meetup, which took place on <strong>November 5th, 2024, 6pm at raumF by Factorial.</strong>

## Factorial

Factorial has been our supporter since day 1 💖. Be sure to check them out on their [website](https://factorial.io) and their [LinkedIn events page](https://www.linkedin.com/company/factorial-io/events/).

They also have a series of [meetups related to webdev and digital products](https://lea.lgbt/@factorial_io@social.factorial.io/112841361957366272) scheduled. [Lea](https://lea.lgbt/@lea) visited the Frontend & Friends and the Accessibility meetups which both were a blast.

## Rough Agenda

The rough outline of our agenda is:

- Doors open will be around 6:00pm CEST
- 6:30pm Hello Everyone
- 6:45pm Marco Bretschneider - ARIA - Why we struggle so much with accessibility
- 7:30pm Manuel Matuzovic - The UX of HTML
- 8:30pm Alex Claes - Live Coding: Fixing Accessibility Issues
- 9-latest 10pm Mingle & Closing

## Slides

- [Alex Claes - Fixing Accessibility Issues](https://claes.tech/connect/hhtml/)

## Summary

The meetup at Factorial was again a blast. 💜

The motto of the Hamburg HTML meetup is about putting HTML back into the `:focus` of web development, which perfectly fits for the evening. Putting more love into your HTML definitely helps you building better and more accessible user experiences. We had three talks for the evening, which complemented each other pretty well.

The first talk by Marco was about ARIA and why we struggle so much about accessibility in web development. It shows there is not only one tree (the DOM) to take care of, but also another one (the accessibility tree). You will need to take care of both trees.

Also, it debunked the "don't use ARIA at all" rule: Yes, prefer native HTML elements over ARIA attributes, but there isn't always a native element equivalent available. One example is the `aria-current="page"` attribute, which marks a link as the current active link in a navigation.

Also, put users first. When building too much from an engineer's perspective, there is the risk of building an over-complex application which takes a high cognitive load. That can easily overwhelm users. Integrate your user into the development process, ask them what they need. It might save you from over-engineering.

Another fun fact Marco made aware of was: we often use assistive technology without even realizing at all. You can't look at a screen while driving a car, so browsing a playlist for your favorite song while driving is out of question. But there often is a forward/backward button on a steering wheel where you can skip to your favorite song. That's assistive technology. A situative one, as you can't operate the visual user interface on a display in that situation while
driving.

Aside, the coolest fun fact I learned: CSS has about 770 properties and values. Java has about 70 keywords. This is a fun point to bring up whenever a Java developer trivializes CSS again.

Next talk was by [Manuel](https://matuzo.at): The UX of HTML, inspired by [Vasilis](https://www.htmhell.dev/adventcalendar/2023/1/). Manuel told us a very good trick: your accessibility-unaware coworkers/students often don't care about semantics. They may even ask: "do we have to take care about semantics and shit?". 

Then, you can say "no, but do care about the user experience". And that's a trick answer, as building with semantics can greatly increase the UX of HTML: When using a plain link instead of a clickable div, there are great usability wins: you can right-click the link, you can open it in a new tab, you can copy the url, you can drag the link into the bookmark bar. So, a good practice is: don't talk about semantics, talk about the user experience wins by following accessibility best practices.

The last talk was a highly interactive format in the form of live coding. [Alexander](https://claes.tech) brought some cool HTML examples with accessibility issues and tried them out with a screenreader. Simultaneously, he fixed the accessibility issues together with the audience. Again, all this complemented each other pretty well, as if it was specifically made for the former talks.
