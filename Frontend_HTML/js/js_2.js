var x = 10, y =10, z = true;

if(x == 10){
    console.log("x는 10입니다.");
}else if(y == 10){
    console.log("y는 10입니다.");
}else{
    console.log("위 모든 조건이 거짓입니다.");
}

if(x == 10 && y == 10){
    console.log("x와 y는 10입니다.");}

if(x == 10 || y == 10){
    console.log("x나 y는 10입니다.");}

z= false;
if(!z){
    console.log("x는 거짓입니다.");}
  
var x = 10;
switch(x){
    case 10: console.log("10");
        break;
    case 5: console.log("5");
        break;
    default: console.log("15");
}
// 디폴트 값은 보통 맨 마지막에 작성