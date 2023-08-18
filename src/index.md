---
layout: base.njk
title: Hamburg HTML meetup
subtitle: putting HTML back into the :focus
description: Hamburg HTML meetup
eleventyExcludeFromCollections: true
---
{%- set upcomingEvents = collections.events | upcoming | reverse | limit(5) -%}
{%- set pastEvents = collections.events | past | reverse | limit(5) -%}

Welcome to the Hamburg HTML meetup. HTML is the most underrated programming language. This is why it deserves a meetup :).

We'd like to cover HTML related topics like semantic markup, accessibility, screen readers, SEO, performance and progressive enhancement.

{% include "upcoming-past-events.njk" %}