// Your code goes here
function getClosestToZero(){
	let closestToZero = 0;
	for(let i = 0; i < arguments.length; i++){
		if(Number.isInteger(arguments[i]) && arguments[i] !== 0){ //if pass a float number or not numeric type, function returns false
			if(Math.abs(arguments[closestToZero]) > Math.abs(arguments[i])){
				closestToZero = i;
			}else{
				continue;
			}	
		}else{
			return false;
		}
	}
	return arguments[closestToZero];
}
