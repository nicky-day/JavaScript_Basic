// 함수 먼저

function hello1() {
    console.log('hello1');
}

hello1();

// 함수의 호출을 먼저

hello2();

function hello2() {
    console.log('hello2');
}

// 호이스팅 : 아래 있는 선언을(만) 끌어올리다

// Example 1
age = 6;
age++;
console.log(age);

var age;

// Example 2
console.log(name);

name = 'Mark';

console.log(name);

var name;

// Example 3
console.log(name);

name = 'Mark';

console.log(name);

var name = 'SeonJu';

// 실제로는 선언만 위로 올라간다.

var name;

console.log(name);

name = 'Mark'

console.log(name);

var name = 'SeonJu';

// let을 사용하면 문제가 없다.

console.log(name2);

name2 = 'Mark';

console.log(name2);

let name2;