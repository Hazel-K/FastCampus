var arr = [1, 2, 3, 4, 5];
console.log(arr);
var idx;
var len = arr.length;

for(idx = 0; idx < len; ++idx){
    console.log(arr[idx]);
}
// for(초기화;조건;반복){}

var idx = 0;
while(idx < len){
    console.log(arr[idx]);
    ++idx;
}
// while(조건){
//     조건이 참일 경우 진행
// }

while(idx < len){
    if(idx == 2){
        break;
    }
    console.log(arr[idx]);
    ++idx;
}
// 멈추고싶다면 조건 주고 break;