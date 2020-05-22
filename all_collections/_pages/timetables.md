---
ref: timetables
title: "Ωρολόγιο πρόγραμμα"
days: 
  - "Δευτέρα"
  - "Τρίτη"
  - "Τετάρτη"
  - "Πέμπτη"
  - "Παρασκευή"
---
<h1> Test </h1>
{% assign timetables = site.collections | where: 'label', 'timetables' | first %}
{% assign schedule = timetables.docs | sort: "semester" %}
{% for s in schedule %}
  <h1> <a href="{{ s.url | absolute_url }}"> {{ s.title }} </a> </h1>
{% endfor %}


