// BOM객체는 웹 브라우저를 객체로 인식하는 객체

var test = document.getElementById("test");
// window.open("https://www.google.com");
// window.close();

// var trueOrFalse = window.confirm("true or false");
// test.innerHTML = trueOrFalse;

// test.innerHTML = "width " + window.innerWidth + " height " + window.outerHeight;

// window.alert("알람창입니다.");

var x = 0;
window.setInterval(interval, 1000);
function interval(){
    test.innerHTML = ++x;
}