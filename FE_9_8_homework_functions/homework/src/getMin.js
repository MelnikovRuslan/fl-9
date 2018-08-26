// Your code goes here
function getMin(){
	let min = 0;
	for(let i = 0; i < arguments.length; i++){
		if(Number.isInteger(arguments[i])){ //if pass a float number or not numeric type, function returns false
			if(arguments[min] > arguments[i]){
				min = i;
			}
		}else{
			return false;
		}
	}
	return arguments[min];
}