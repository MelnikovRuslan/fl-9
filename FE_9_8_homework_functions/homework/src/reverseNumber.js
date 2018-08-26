// Your code goes here
function reverseNumber(number){
	if(Number.isInteger(number)){ //if pass a float number or not numeric type, function returns false
		const ten = 10;
		let result = '';
		let interimRes = Math.sign(number) * number;
		let numberLength = interimRes.toString().length;
		for(let i = 0; i < numberLength; i++){
			result = result + interimRes % ten;
			interimRes = Math.floor(interimRes / ten);		
		}
		result = parseInt(result) * Math.sign(number);
		return result;
	}else{
		return false;
	}
}
