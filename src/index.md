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

We'd like to cover all topics related to HTML and the web platform in a way, such as the HTML Living Standard, Web standards, Accessibility, Screen readers, modern CSS techniques, performance and progressive enhancement.

{% include "upcoming-past-events.njk" %}
