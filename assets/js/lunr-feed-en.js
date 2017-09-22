---
  
---
// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('categories')
  this.field('tags')
  this.ref('id')
});

{% assign count = 0 %}{% for post in site.posts-en %}
index.add({
  title: {{post.title | jsonify}},
  categories: {{post.categories | jsonify}},
  content: {{post.content | strip_html | jsonify}},
  tags: {{post.tags | jsonify}},
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}
console.log( jQuery.type(index) );
// builds reference data
var store = [{% for post in site.posts-en %}{
  "title": {{ post.title | jsonify }},
  "link": {{ post.url | prepend: site.baseurl | jsonify }},
  "image": {{ post.image | jsonify }},
  "date": {{ post.date | date: '%B %-d, %Y' | jsonify }},
  "categories": {{ post.categories | jsonify }},
  "excerpt": {{ post.content | strip_html | truncatewords: 20 | jsonify }}
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
      var searchitem = '<div class="archive"><img src="'+store[ref].image+' class="result-img" style= height:150px;><div class="result-body"><a href="'+store[ref].link+'" class="archive__item-title">'+store[ref].title+'</a><div class="archive__subtitle">'+store[ref].date+'</div><p>'+store[ref].excerpt+'</p></div>';
      resultdiv.append(searchitem);
    }
  });
});
