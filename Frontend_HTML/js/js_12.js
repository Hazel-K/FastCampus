document.getElementById("wrap").onmouseover = function(){
    this.setAttribute("class", "over");
}
// 클래스를 over로 설정

document.getElementById("wrap").onmouseout = function(){
    this.setAttribute("class", "");
}
// 클래스를 없애기