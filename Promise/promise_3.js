/*
    executor 함수는 resolve와 reject를 인자로 가진다.
    (resolve, reject) => {...}
    resolve와 reject는 함수이다.
    resolve(), reject()
*/

new Promise(/* executor */(resolve, reject) => { });