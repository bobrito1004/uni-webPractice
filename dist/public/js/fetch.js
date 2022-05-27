var ID = 1;
var div = document.getElementById("CardDiv");

function getPost() {
    var gif = document.getElementById("gif");
    var err = document.getElementById("error");
    gif.style.visibility = "visible";
    err.textContent = "";
    fetch('https://jsonplaceholder.typicode.com/posts/' + ID)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then((post) => {
            let tbody = document.querySelector("#CardDiv");
            let template = document.querySelector("#temp")
            let clone = template.content.cloneNode(true);
            let title = clone.querySelector(".title");
            let info = clone.querySelector(".info");
            title.textContent = post.title;
            info.textContent = post.body;
            tbody.appendChild(clone);
            ID = ID + 1
            gif.style.visibility = "hidden";
        })
        .catch((error) => {
            err.textContent = error;
            gif.style.visibility = "hidden";
        });
}
let btn = document.getElementById("btn").addEventListener('click', getPost);


var ID_blog = 1;
let div_blog = document.getElementById("CardDiv_blog");
function getPost_blog(){
    var gif_blog= document.getElementById("gif_blog");
    var err_blog = document.getElementById("error_blog");
    gif_blog.style.visibility = "visible";
    err_blog.textContent = "";
    fetch('http://localhost:12345/post/' + ID_blog)
      .then((response) => {
          if (response.ok) {
              console.log(response)
              return response.json();
          } else {
              throw new Error(response.status);
          }
      })
      .then((post) => {
          let tbody_blog = document.querySelector("#CardDiv_blog");
          let template_blog = document.querySelector("#temp")
          let clone_blog = template_blog.content.cloneNode(true);
          let title_blog = clone_blog.querySelector(".title");
          let info_blog = clone_blog.querySelector(".info");
          console.log(post[0])
          title_blog.textContent = post[0].title;
          info_blog.textContent = post[0].content;
          tbody_blog.appendChild(clone_blog);
          ID_blog = ID_blog + 1
          gif_blog.style.visibility = "hidden";
      })
      .catch((error) => {
          err_blog.textContent = error;
          gif_blog.style.visibility = "hidden";
      });
}
let btn_blog = document.getElementById("btn_blog").addEventListener('click', getPost_blog);