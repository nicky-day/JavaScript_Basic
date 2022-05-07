// 표현식 && 표현식

if (true && true) {
    console.log('두개 모두 참이면 참');
}

if (true && false) {
    console.log('한개만 참이면 거짓');
}

if (false && false) {
    console.log('두개 모두 거짓이면 거짓');
}

// 표현식 || 표현식

if (true || true) {
    console.log('두개 모두 참이면 참');
}

if (true || false) {
    console.log('한개만 참이면 참');
}

if (false || false) {
    console.log('두개 모두 거짓이면 거짓');
}

// !표현식

if (!true) {
    console.log('참이면 거짓');
}

if (!false) {
    console.log('거짓이면 참');
}

// 논리 연산자를 이용한 조건부 실행

// 예제 1

let n = 5;

n % 5 === 0 && console.log('5로 나누어 떨어질 때만 실행');

n = 7;

n % 5 === 0 && console.log('5로 나누어 떨어질 때만 실행');

// 예제 2

n = 5;

n % 5 === 0 || console.log('5로 나누어 떨어지지 않을때만 실행');

n = 7;

n % 5 === 0 || console.log('5로 나누어 떨어지지 않을때만 실행');

