var height = prompt(" your height cm ?");
var weight = prompt(" your weight kg ?");

var bmi= (weight / (height/100 * height/100)).toFixed(1).toString() ;

console.log(`BMI=${bmi}`) ;