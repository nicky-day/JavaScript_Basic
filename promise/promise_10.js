/**
 * p.then으로 callback 함수를 설정했기 때문에 fulfilled 되면서 callback이 실행된다.
 */

const p = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve();      /* fulfilled */
    }, 1000);
});

p.then((/* callback */) => {
    console.log('1000ms 후에 fulfilled 됩니다.');
});