// Your code goes here
function isPrime(number){
	if(Number.isInteger(number)){ //if pass a float number or not numeric type, function returns false
		let isPrimeNumber = true;
		for(let i = 2; i < number; i++){
			if(number % i === 0){
				isPrimeNumber = false;
				break;
			}
		}	
		return isPrimeNumber;
	}else{
		return false;
	}
}