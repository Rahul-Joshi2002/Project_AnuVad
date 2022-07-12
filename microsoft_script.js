let query = document.getElementById("searchBar");
let button = document.getElementById("sb");
function noteFun() {
    console.log(query.value);
}
function searchFun() {
    str = query.value;
    console.log("query: " + str);
    let loader = '<div id = "load"></div><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
    document.getElementById('answer').innerHTML = loader

    const data = JSON.stringify([
        {
            "Text": str
        }
    ]);
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		var obj = JSON.parse(this.responseText);
        var ans = (obj[0].translations[0].text);
        console.log(ans);
        let info = `<div id = "answer">
              <p id = "hidden">${ans}</p>
              <div id = "search">
              </div>
              <a class="btn btn-secondary" href="popup.html" role="button">Reset</a>
              <p id = "name">-by Rahul Joshi</p>
              </div>`
              answer.innerHTML = info;
	}
});
xhr.open("POST", "https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=hi&api-version=3.0&profanityAction=NoAction&textType=plain");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("X-RapidAPI-Key", "235fc32a56msh9cac97b50946d7dp1dde5fjsn3cfb0b04e4c3");
xhr.setRequestHeader("X-RapidAPI-Host", "microsoft-translator-text.p.rapidapi.com");
xhr.send(data);
}
query.addEventListener("keyup", noteFun);
button.addEventListener("click", searchFun);
query.addEventListener("keydown", function(event) {
if (event.key === "Enter") {
    event.preventDefault();
    str = query.value;
    console.log("query: " + str);
    let loader = '<div id = "load"></div><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
    document.getElementById('answer').innerHTML = loader
    const data = JSON.stringify([
        {
            "Text": str
        }
    ]);
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        var obj = JSON.parse(this.responseText);
        var ans = (obj[0].translations[0].text);
        console.log(ans);
        let info = `<div id = "answer">
              <p id = "hidden">${ans}</p>
              <div id = "search">
              </div>
              <a class="btn btn-secondary" href="popup.html" role="button">Reset</a>
              <p id = "name">-by Rahul Joshi</p>
              </div>`
              answer.innerHTML = info;
      }
    });
    xhr.open("POST", "https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=hi&api-version=3.0&profanityAction=NoAction&textType=plain");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("X-RapidAPI-Key", "235fc32a56msh9cac97b50946d7dp1dde5fjsn3cfb0b04e4c3");
    xhr.setRequestHeader("X-RapidAPI-Host", "microsoft-translator-text.p.rapidapi.com");
    xhr.send(data);
}
});