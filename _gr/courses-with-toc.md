---
ref: courses-with-toc
title: "Μαθήματα"
---

[//]: # (language.)

{% if page.lang == 'en' %}
  {% assign posts = site.courses-en | sort: "semester" %}
{% else %}
  {% assign posts = site.courses | sort: "semester" %}
{% endif %}

[//]: # (assign table.)

{% include toc title="ΜΑΘΗΜΑΤΑ" %}

[//]: # (create table.)

### A ΕΞΑΜΗΝΟ

 {% for post in posts %}
   {% if page.lang=='gr'  %} 
     {% if post.semester == 1 %}  
       {% include archive-single.html %}
     {% endif %}
   {% endif %}
 {% endfor %}
 
### Β ΕΞΑΜΗΝΟ
 
 {% for post in posts %}
   {% if page.lang=='gr' %} 
     {% if post.semester == 2 %}  
       {% include archive-single.html %}
     {% endif %}
   {% endif %}
 {% endfor %}

### Γ ΕΞΑΜΗΝΟ
 
 {% for post in posts %}
   {% if page.lang=='gr' %} 
     {% if post.semester == 3 %}  
       {% include archive-single.html %}
     {% endif %}
   {% endif %}
 {% endfor %}

### Δ ΕΞΑΜΗΝΟ
 
 {% for post in posts %}
   {% if page.lang=='gr' %} 
     {% if post.semester == 4 %}  
       {% include archive-single.html %}
     {% endif %}
   {% endif %}
 {% endfor %}

### Ε ΕΞΑΜΗΝΟ
 
 {% for post in posts %}
   {% if page.lang=='gr' %} 
     {% if post.semester == 5 %}  
       {% include archive-single.html %}
     {% endif %}
   {% endif %}
 {% endfor %}

### ΣΤ ΕΞΑΜΗΝΟ
 
 {% for post in posts %}
   {% if page.lang=='gr' %} 
     {% if post.semester == 6 %}  
       {% include archive-single.html %}
     {% endif %}
   {% endif %}
 {% endfor %}

### Ζ ΕΞΑΜΗΝΟ
 
 {% for post in posts %}
   {% if page.lang=='gr' %} 
     {% if post.semester == 7 %}  
       {% include archive-single.html %}
     {% endif %}
   {% endif %}
 {% endfor %}
