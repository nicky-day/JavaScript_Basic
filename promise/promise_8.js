/**
 * p라는 프로미스 객체는 1000ms 후에 fulfilled 된다.
 */

new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve();      /* fulfilled */
    }, 1000);
});