// 삼항 연산자를 이용한 조건부 실행

let n = 5;

console.log(n % 5 === 0 ? '5의 배수입니다.' : '5의 배수가 아닙니다.');

const message = n % 5 === 0 ? '5의 배수입니다.' : '5의 배수가 아닙니다.';

console.log(message);

// switch를 이용한 조건문

let n2 = 5;

switch (n2) {
    default:
        console.log(n);
}

switch (n2 % 5) {
    case 0: {
        console.log('5의 배수입니다.');
    }
    default:
        console.log(n);
}

switch (n2 % 5) {
    case 0: {
        console.log('5의 배수입니다.');
        break;
    }
    default:
        console.log(n);
}