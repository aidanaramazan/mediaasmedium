const articles = [
    {
    title: "7 CSS Practical tips", 
    caption:
      "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.", 
    topic:"JavaScript", 
    date:"7 July", 
    author:"Aidana",
    image:'./pics/0.png',
    },
    {
        title: "7 CSS Practical tips", 
        caption:
          "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.", 
        topic:"JavaScript", 
        date:"7 July", 
        author:"Aidana",
        image:'./pics/1.png',
    },
        {
            title: "7 CSS Practical tips", 
            caption:
              "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.", 
            topic:"JavaScript", 
            date:"7 July", 
            author:"Aidana",
            image:'./pics/2.png',
        },
];

const articleDiv = document.getElementById("articles");

articles.map((item, _index) => {
  console.log(articleDiv);
    const html = `
    <div class="article">
    <div>
    <p>${item.author}</p>
    <a href="./article.html">
    <h4>${item.title}</h4>
    </a>
    <p>${item.date}</p>
   <p>${item.caption}</p>
   </div>
   <img src='${item.image}' width = 100/>
</div>`;
articleDiv.innerHTML += html;
});
articles.forEach((item) => {
  const articleContainer = document.createElement("div");
  articleContainer.classList.add("article");
  const authorPara = document.createElement("p");
  authorPara.textContent = item.author;
  const link = document.createElement("a");
  link.href = "./article.html";
  const titleHeading = document.createElement("h4");
  titleHeading.textContent = item.title;
  const datePara = document.createElement("p");
  datePara.textContent = item.date;
  const captionPara = document.createElement("p");
  captionPara.textContent = item.caption;
  const image = document.createElement("img");
  image.src = item.image;
  link.appendChild(titleHeading);
  articleContainer.appendChild(authorPara);
  articleContainer.appendChild(link);
  articleContainer.appendChild(datePara);
  articleContainer.appendChild(captionPara);
  articleContainer.appendChild(image);
  articleDiv.appendChild(articleContainer);
});

