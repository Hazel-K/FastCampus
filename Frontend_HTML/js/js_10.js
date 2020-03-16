var clrarray = ["blue", "yellow", "red", "white"];
var p = document.getElementById("test")

p.onmouseover = function(){
    var land = Math.floor(Math.random() * clrarray.length);
    p.style.backgroundColor = clrarray[land];
}

p.onmouseout = function(){
    p.style.backgroundColor = "black";
}

document.getElementById("btn1").addEventListener("click", function(){
    alert("실행1");
}, false);

document.getElementById("btn1").addEventListener("click", function(){
    alert("실행2");
}, false);