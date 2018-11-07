var a = require('./test');
var b = require('./test');

console.log('a: ' + a.value);
console.log('b: ' + b.value);
a.value = 20;
console.log('a: ' + a.value); //
console.log('b: ' + b.value); //

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
console.log(callbacks[0]());
console.log(callbacks[1]());
console.log(callbacks[2]());

{
    function foo () { return 1 }
    console.log('foo: ' + foo());
    {
        function foo () { return 2 }
        console.log('foo: ' + foo());
    }
    console.log('foo: ' + foo());
}