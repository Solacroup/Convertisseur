/*"uses strict";

function dollar(euros){
	return euros/0.85;
}
function yuan(euros){
	return euros/0.13;
}
function pounds(euros){
	return euros/1.12
}
function CHF(euros){
	return euros/1.07
}
const country = prompt("Which country are you planning to visit? China, USA, Switzerland or UK : ");
if (country==="USA"){
	let euros=Number(prompt("How much euros do you want to convert : "));
	console.log(`Congratulations, you now have ${dollar(euros)}$`);
}if (country==="China"){
	let euros=Number(prompt("How much euros do you want to convert : "));
	console.log(`Congratulations, you now have ${yuan(euros)}Yuan`);
}if (country==="UK"){
	let euros=Number(prompt("How much euros do you want to convert : "));
	console.log(`Congratulations, you now have ${pounds(euros)}Pounds`);
}
if (country==="Switzerland"){
	let euros=Number(prompt("How much euros do you want to convert : "));
	console.log(`Congratulations, you now have ${CHF(euros)}CHF`);
-+6}*/
"use strict";

document.querySelector('.btn').addEventListener('click', function () { 
	const sum = Number(document.querySelector('.sum').value);
	const country = document.querySelector('.country').value;

if (country === "USA") {
	document.querySelector('.result').textContent=sum/0.85;
}else if(country === 'UK') {
	document.querySelector('.result').textContent=sum/1.12;
}else if(country === 'China'){
	document.querySelector('.result').textContent=sum/0.13;
}	
});