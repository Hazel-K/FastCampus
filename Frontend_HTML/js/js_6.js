// DOM객체
// getElement, innerHTML 등이 있음

document.getElementById("heading").innerHTML = "h1 태그입니다.";
// document.getElementsByClassName("paragraph").innerHTML = "p 태그입니다.";
var tagName = document.getElementsByTagName("p");

for (var i = 0; i < tagName.length; ++i){
    tagName[i].innerHTML = "p 태그입니다.";
}

document.querySelectorAll("div#container > h1#heading")[0].innerHTML = "h1 태그입니다!";
// 자식선택자 문법 활용