console.log('*****ECMAScript 6*****');
console.log('++Constants++');
const PI = 3.141593
try{
	PI = 3;
}catch(e){
	console.error('You cant asign constants vars');
}
console.log('++Arrows and Lexical This++');
var evens = [1,2,3,4];
odds  = evens.map(v => v + 1);
evens.forEach(v => {
   if (v % 2 === 0)
       console.log('number %s is par',v);
})
console.log('++Default parameter value++');
function f (x, y = 7, z = 42) {
    return x + y + z
}
console.log('++Rest parameter++');
f(1) === 50
function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9
console.log('++String Interpolation++');
var customer = { name: "Foo" }
var message = `Hello ${customer.name}`