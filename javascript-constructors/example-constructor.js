function ExampleConstructor() {

};

console.log('prototype value of ExampleConstructor:', ExampleConstructor.prototype)
console.log('typeof prototype value of ExampleConstructor:', typeof ExampleConstructor.prototype)

var newFunction = new ExampleConstructor();

console.log('newFunction:', newFunction);

var instanceOfFunction = newFunction instanceof ExampleConstructor;

console.log('instanceof newFunction:', instanceOfFunction);
