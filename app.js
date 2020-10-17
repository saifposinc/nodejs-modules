<<<<<<< HEAD
const mod = require('./mod');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
console.log(mod);
console.log(mod.sum(32,5));
console.log(mod.PI);
console.log(new mod.someMathObject());
eventEmitter.on('objectName',(num1,num2)=>{
	console.log(num1+num2);
});
eventEmitter.emit('objectName',12,5);
=======
const sumFunction = require('./mod');
console.log(sumFunction);
console.log(sumFunction(32,5));
console.log(sumFunction.PI);
console.log(sumFunction.someMathObject);
>>>>>>> parent of 771ceae... Groupinmg the exports
