// var yas = {키:값, 키:값...};   객체제작법
var cat = {gender: 'female', age: 5};

// 객체 사용법
//  객체.메서드(); 메서드를 실행
//  객체.프로퍼티; 속성을 가져옴(get)
//  객체.프로퍼티 = 값; 값과 속성을 변경(set)
console.log(cat.gender, cat.age);
// get

cat.gender = 'male';
cat.age = 10;
// set

var arr = [1,2,3,4,5];
console.log(arr.length);
// 배열도 하나의 객체이고 길이라는 속성을 갖고 있다.

var pi = math.PI;
console.log(pi);
// 원주율

console.log(math.pow(2, 4));
// 2의 4제곱

console.log(math.random());
// 0<= x < 1

var date = new date();
// 날짜