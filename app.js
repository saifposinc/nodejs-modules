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
class Person extends EventEmitter{
	constructor(name){
		super();
		this._name = name;
	}
	get name(){
		return this._name;
	}
}
let ed = new Person('Ed');
ed.on('name',()=>{
	console.log('My name is '+ ed.name);
});
ed.emit('name');