// 자바스크립트는 동적 타이핑 언어(dynamic type language)이다.

let whatever  = 'Mark';

whatever = 37;

whatever = true;

// 변수가 가지는 고정 타입이 없다. 하지만 타입이 없는 것은 아니다.

/**
 * 기본 타입(Primitive values)
 * Boolean
 * Null
 * Undefined
 * Number
 * String
 * Symbol(ECMAScript 6에 추가됨)
 * 객체(Objects)
 */

// Boolean

const isTrue = true;
const isFalse = false;

console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);

const a = new Boolean(false);       // 객체 타입
console.log(a, typeof a);

if (a) {                            // 객체이기 때문에 true로 평가됨
    console.log('false?');
}

const b = Boolean(false);           // 보통은 다른 값 넣어 평가의 기능으로 사용
console.log(b, typeof b);

if (b) {
    console.log('false?');
}

// Null

const a2 = null;

console.log(a2, typeof a2);

// Undefined

let b2;

console.log(b2, typeof b2)

b2 = undefined;

console.log(b2, typeof b2);

if (a == b) {
    console.log(a == b);
}

if (a === b) {                      // 값 뿐만 아니라 타입도 비교
    console.log(a === b);
}

// Number

const a3 = 37;

console.log(a3, typeof a3);

const b3 = 96.7;

console.log(b3, typeof b3);

const c3 = NaN;

console.log(c3, typeof c3);

const d3 = Number('Mark');

console.log(d3, typeof d3);

const e3 = Number('37');

console.log(e3, typeof e3);

// String

const a4 = 'Mark';

console.log(a4, typeof a4);

const b4 = "Mark";

console.log(b4, typeof b4);

const c4 = 'Mark' + 'Lee';

const d4 = a4 + ' Lee';

console.log(d4, typeof d4);

const e4 = `${a4} Lee`;      // template String -> ES6부터 출현

console.log(e4, typeof e4);

// Symbol --> ES6부터 출현

const a5 = Symbol();

const b5 = Symbol(37);

const c5 = Symbol('Mark');

const d5 = Symbol('Mark');

console.log(a5, typeof a5);

console.log(c5 === d5);

new Symbol();               // Error
