var xhr = new XMLHttpRequest();
var url = './news_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
  
        var title = document.createElement('h2');
        title.textContent = article.title;
  
        var description = document.createElement('p');
        description.textContent = article.description;
  
        var keyHeader = document.createElement('h3');
        keyHeader.textContent = 'Key Points:';
  
        var keyList = document.createElement('ul');
        article.key_points.forEach(function(key) {
          var listItem = document.createElement('li');
          listItem.textContent = key;
          keyList.appendChild(listItem);
        });
  
        var impactHeader = document.createElement('h3');
        impactHeader.textContent = 'Impact:';
  
        var impactList = document.createElement('ul');
        article.impact.forEach(function(impact) {
          var listItem = document.createElement('li');
          listItem.textContent = impact;
          impactList.appendChild(listItem);
        });
  
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(keyHeader);
        articleDiv.appendChild(keyList);
        articleDiv.appendChild(impactHeader);
        articleDiv.appendChild(impactList);
  
        articlesDiv.appendChild(articleDiv);
      });
}

xhr.send();