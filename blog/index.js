function generateFeed(){
    var feed  = document.getElementById("feed")
    for (var i=0; i < articles.length; i++) {
        //Information Box
        // This is the main post
         var title = articles[i]["title"] 
         var art = document.createElement("article") 
         var img = document.createElement("img")  
         art.innerHTML = `<h1>${title}</h1>`
         img.src = articles[i]["imgSrc"] 
         art.appendChild(img)
         var p = document.createElement("p")
         p.innerText = articles[i]["description"]
         art.appendChild(p)
         feed.appendChild(art)   

    }
}
