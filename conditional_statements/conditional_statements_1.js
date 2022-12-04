// 조건문

if (true) {
    console.log('항상 실행');
}

if (false) {
    console.log('항상 실행되지 않음')
}

if (true) console.log('항상 실행');

if (false) console.log('항상 실행되지 않음')

// false
// 0
// ''
// null
// undefined
// NaN

if (false) console.log(false);
if (0) console.log(0);
if ('') console.log('')
if (null) console.log(null);
if (undefined) console.log(undefined);
if (NaN) console.log(NaN);

// true
// 37
// -37
// 'Mark'
// {}
// []

if (true) console.log(true);
if (37) console.log(37);
if (-37) console.log(-37);
if ('Mark') console.log('Mark');
if ({}) console.log({});
if ([]) console.log([]);

// if () {} else {}

const n = 37;

if (n > 0) {
    console.log('n이 0보다 큰 경우');
} else {
    console.log('n이 0보다 크지 않은 경우');
}

if (n > 0) console.log('n이 0보다 큰 경우')
else console.log('n이 0보다 크지 않은 경우');