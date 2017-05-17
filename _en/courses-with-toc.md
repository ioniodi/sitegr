---
ref: courses-with-toc
title: "COURSES"
---

[//]: # (language.)

{% if page.lang == 'en' %}
  {% assign posts = site.courses-en | sort: "semester" %}
{% else %}
  {% assign posts = site.courses | sort: "semester" %}
{% endif %}

[//]: # (assign table.)

{% include toc title="COURSES" %}

[//]: # (create table.)

### SEMESTER 1 

 {% for post in posts %}
   {% if page.lang=='en'  %} 
     {% if post.semester == 1 %}  
       {% include archive-single.html %}
     {% endif %}
   {% endif %}
 {% endfor %}
 
### SEMESTER 2
 
 {% for post in posts %}
   {% if page.lang=='en' %} 
     {% if post.semester == 2 %}  
       {% include archive-single.html %}
     {% endif %}
   {% endif %}
 {% endfor %}

### SEMESTER 3 
 
 {% for post in posts %}
   {% if page.lang=='en' %} 
     {% if post.semester == 3 %}  
       {% include archive-single.html %}
     {% endif %}
   {% endif %}
 {% endfor %}

### SEMESTER 4
 
 {% for post in posts %}
   {% if page.lang=='en' %} 
     {% if post.semester == 4 %}  
       {% include archive-single.html %}
     {% endif %}
   {% endif %}
 {% endfor %}

### SEMESTER 5 
 
 {% for post in posts %}
   {% if page.lang=='en' %} 
     {% if post.semester == 5 %}  
       {% include archive-single.html %}
     {% endif %}
   {% endif %}
 {% endfor %}

### SEMESTER 6 
 
 {% for post in posts %}
   {% if page.lang=='en' %} 
     {% if post.semester == 6 %}  
       {% include archive-single.html %}
     {% endif %}
   {% endif %}
 {% endfor %}

### SEMESTER 7 
 
 {% for post in posts %}
   {% if page.lang=='en' %} 
     {% if post.semester == 7 %}  
       {% include archive-single.html %}
     {% endif %}
   {% endif %}
 {% endfor %}
