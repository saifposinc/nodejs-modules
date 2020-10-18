const mod = require('./mod');
const EventEmitter = require('events');
const readline = require('readline');
console.log(mod);
console.log(mod.sum(32,5));
console.log(mod.PI);
console.log(new mod.someMathObject());
const eventEmitter = new EventEmitter();
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
const rl = readline.createInterface({input: process.stdin,
                                    output: process.stdout});
let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
let answer = num1+num2;
rl.question('what is '+num1+' + '+num2+' : \n',(userInput)=>{
    if(userInput.trim() == answer){
        rl.close();
    }
    else{
        rl.setPrompt('incorrect, try again\n');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim() == answer)
                rl.close();
            else{
                rl.setPrompt('incorrect, try again\n');
                rl.prompt();
            }
        });
    }
});
rl.on('close',()=>{
    console.log('correct');
})