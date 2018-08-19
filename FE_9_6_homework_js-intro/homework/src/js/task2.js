// Your code goes here

let a = +prompt('Please input first length of side', 0);
let b = +prompt('Please input second length of side', 0);
let angle = +prompt('Please input angle between first and second sides', 0);
let result = ``;
if(a>0 && b>0 && angle>0){
	const degrees = 180;
	const quarter = 0.25; 
	let calcAngle = Math.cos(angle * Math.PI/degrees); //Calculate angle value
	let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2) - 2*a*b*calcAngle); //Calculate the third side of triangle
	let triangleSquare = quarter*Math.sqrt((a+b+c)*(b+c-a)*(a+c-b)*(a+b-c)); //Calculate triangle square
	let squareOutput = ~~(triangleSquare*100)/100;
	if(c === 0 || squareOutput === 0){
		result = 'Invalid data';
	} else {
		result = ` c length:${~~(c*100)/100}\n Triangle square:${squareOutput}\n`;
		let trianglePerimeter = a + b + c; //Calculate triangle perimeter
		result = result + ` Triangle perimeter:${~~(trianglePerimeter*100)/100} \n`;		
	}
} else{
	result = 'Invalid data';
}
console.log(result);



