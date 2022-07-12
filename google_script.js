let query = document.getElementById("searchBar");
let button = document.getElementById("sb");
var str = "";

function noteFun() {
  console.log(query.value);
}

function searchFun() {
  str = query.value;
  console.log("query: " + str);
  let loader = '<div id = load></div><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
  document.getElementById('answer').innerHTML = loader

  const data = "q=" + str + "&target=hi&source=en";

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        var obj = JSON.parse(this.responseText);
        var ans = obj.text[0];
        console.log(ans);
        let info = `<div id = "answer">
                  <p id = "hidden">${ans}</p>
                  <div id = "search">
                  </div>
                  <a class="btn btn-secondary" href="popup.html" role="button">Reset</a>                  
                  </div>`
        answer.innerHTML = info;
    }
});
xhr.open("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Accept-Encoding", "application/gzip");
xhr.setRequestHeader("X-RapidAPI-Key", "235fc32a56msh9cac97b50946d7dp1dde5fjsn3cfb0b04e4c3");
xhr.setRequestHeader("X-RapidAPI-Host", "google-translate1.p.rapidapi.com");

xhr.send(data);
}

query.addEventListener("keyup", noteFun);
button.addEventListener("click", searchFun);
query.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        str = query.value;
        console.log("query: " + str);
        let loader = '<div id = load></div><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
        document.getElementById('answer').innerHTML = loader

        const data = "q=" + str + "&target=hi&source=en";

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                var obj = JSON.parse(this.responseText);
                var ans = obj.text[0];
                console.log(ans);
                let info = `<div id = "answer">
                          <p id = "hidden">${ans}</p>
                          <div id = "search">
                          </div>
                          <a class="btn btn-secondary" href="popup.html" role="button">Reset</a>                
                          </div>`
                answer.innerHTML = info;
            }
        });
        xhr.open("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Accept-Encoding", "application/gzip");
        xhr.setRequestHeader("X-RapidAPI-Key", "235fc32a56msh9cac97b50946d7dp1dde5fjsn3cfb0b04e4c3");
        xhr.setRequestHeader("X-RapidAPI-Host", "google-translate1.p.rapidapi.com");
        
        xhr.send(data);
    }
});