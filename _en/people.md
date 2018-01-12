---
ref: people
title: "People"
---

{% assign people = site.people-en | sort: "rank" %}
{% for post in people %}
  {% if post.rank %}
    {% include archive-people.html %}
  {% endif %}
{% endfor %}  
