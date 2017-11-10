---

---
// builds lunr
var index = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});

{% assign count = 0 %}{% for post in site.posts-en %}
index.add({
  title: {{ post.title | jsonify }},
  categories: {{ post.categories | jsonify }},
  excerpt: {{ post.excerpt | jsonify }},
  tags: {{ post.tags | jsonify }},
  id: {{ count }}
});{% assign count = count | plus: 1 %}{% endfor %}
{% for person in site.faculty-en %}
index.add({
  title: {{ person.title | jsonify }},
  categories: {{ person.categories | jsonify}},
  excerpt: {{ person.content | strip_html | jsonify}},
  tags: {{ person.tags | jsonify}},
  id: {{ count }}
});{% assign count = count | plus: 1 %}{% endfor %}
{% for course in site.courses-en %}
index.add({
  title: {{ course.title | jsonify }},
  categories: {{ course.categories | jsonify }},
  excerpt: {{ course.excerpt | jsonify }},
  tags: {{ course.tags | jsonify }},
  id: {{ count }}
});{% assign count = count | plus: 1 %}{% endfor %}
console.log( jQuery.type(index) ); 
// builds reference data
var store = [
  {% for post in site.posts-en %}{
    "title": {{ post.title | jsonify }},
    "link": {{ post.url | prepend: site.baseurl | jsonify }},
    "image": {{ post.image | jsonify }},
    "date": {{ post.date | date: '%B %-d, %Y' | jsonify }},
    "categories": {{ post.categories | jsonify }},
    "excerpt": {{ post.content | strip_html | truncatewords: 20 | jsonify }},
    "collection": "News" }, 
  {% endfor %}
  {% for person in site.faculty-en %}{
    "title": {{ person.title | jsonify }},
    "link": {{ person.url | prepend: site.baseurl | jsonify }},
    "excerpt": {{ person.excerpt | truncatewords: 20 | jsonify }},
    "collection": "Faculty" },
  {% endfor %}  
  {% for course in site.courses-en %}{
    "title": {{ course.title | jsonify }},
    "link": {{ course.url | prepend: site.baseurl | jsonify }},
    "excerpt": {{ course.excerpt | truncatewords: 20 | jsonify }},
    "collection": "Courses"
  }{% unless forloop.last %},{% endunless %}{% endfor %}]  
// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    // Add status
    resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].image && store[ref].collection=="News"){
      	var searchitem = '<div><article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork"><img src="'+store[ref].image+'" class="archive__item-teaser" style="height: 150px;"><a href="'+store[ref].link+'"><h2 class="archive__item-title" itemprop="headline">'+store[ref].title+'</h2></a><div class="archive__item-excerpt">'+store[ref].collection+' - '+store[ref].date+'<p>'+store[ref].excerpt+'</p></div></article></div>';}
      else if(store[ref].collection=="News"){
      	var searchitem = '<div><article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork"><a href="'+store[ref].link+'"><h2 class="archive__item-title" itemprop="headline">'+store[ref].title+'</h2></a><div class="archive__item-excerpt">'+store[ref].collection+' - '+store[ref].date+'<p>'+store[ref].excerpt+'</p></div></article></div>';}
      else if(store[ref].collection=="Courses"){
      	var searchitem = '<div><article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork"><a href="'+store[ref].link+'"><h2 class="archive__item-title" itemprop="headline">'+store[ref].title+'</h2></a><div class="archive__item-excerpt">'+store[ref].collection+'<p>'+store[ref].excerpt+'</p></div></article></div>';}
      else if(store[ref].collection=="Faculty"){
      	var searchitem = '<div><article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork"><a href="'+store[ref].link+'"><h2 class="archive__item-title" itemprop="headline">'+store[ref].title+'</h2></a><div class="archive__item-excerpt">'+store[ref].collection+'<p>'+store[ref].excerpt+'</p></div></article></div>';}
      resultdiv.append(searchitem);
      }
  });
});
