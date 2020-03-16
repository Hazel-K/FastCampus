// document.getElementsByName("textText")[0].onkeydown = function(e){
//     var eventcode = e.code;
//     if(eventcode == `digit1`){
//         document.getElementById("text").innerHTML = "<img src = `img1.jpg>";
//     }else if(eventcode == `digit2`){
//         document.getElementById("text").innerHTML = "<img src = `img2.jpg>";
//     }
// }

// document.getElementsByName("textText")[0].onkeyup = function(e){
//     if(e.code == `backspace`){
//         document.getElementById("text").innerHTML = ""; 
//     }
// }

document.getElementsByClassName("btn")[0].onfocus = function(){
    document.getElementById("test").innerHTML = "Event for press 'Tap'";
}

document.getElementsByClassName("btn")[0].onblur = function(){
    document.getElementById("test").innerHTML = "Event for out 'Tap'";
}