const sum = (num1,num2) => num1+num2;
module.exports = sum;
const PI = 3.14;
class someMathObject{
	constructor(){
		console.log('object created');
	}
}
module.exports.PI = PI;
module.exports.someMathObject = someMathObject;