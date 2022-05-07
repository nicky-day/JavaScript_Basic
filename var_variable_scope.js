// var 함수 스코프

var a = 0;

(function() {
    a++;
    console.log(a);
})();

console.log(a);

/** 
(function() {
    var b = 0;
    console.log(b);
})();

b++;
console.log(b);
*/

// var 블록 스코프

var c = 0;

{
    c++;
    console.log(c);
}

{
    var d = 0;
    console.log(d);
}

console.log(d);