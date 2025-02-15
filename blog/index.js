function generateFeed(){
    var feed  = document.getElementById("feed")
    var articleList = ""
    var newArticle = ""
    for (var i=0; i < articles.length; i++) {
        //Information Box
        // This is the main post
         var title = articles[i]["title"] 
         var date = articles[i]["date"] 
         var description = articles[i]["description"] 
         var imgSrc = articles[i]["imgSrc"] 
         var imgAlt = articles[i]["imgAlt"] 
         var ages = articles[i]["ages"] 
         var genre = articles[i]["genre"] 
         var stars = articles[i]["stars"]            
        newArticle = `<article>
            <ul class="data">
                <li class="date">${date}</li>
                <li>${ages}</li>
                <li>${genre}</li>
                <li>${stars}</li>
            </ul>
        <p class="bookmain">
            <h1>${title}</h1>
            <figure><img src="${imgSrc}" alt="${imgAlt}"></figure> 
            <p>${description}</p>
        </p>
        </article>    `
        articleList = `${articleList}\n${newArticle}`
    } 
    feed.innerHTML = articleList
}

