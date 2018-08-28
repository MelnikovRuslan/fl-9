// Your code goes here

//Task 1
function findType(arg){
	return typeof arg;
}

//Task 2
function forEach(arr, fun){
	for(let i = 0; i < arr.length; i++){
		fun(arr[i]);
	}
}

//Task 3
function map(arr, func){
	let newArray = [];
	forEach(arr, function(el){
		newArray.push(func(el));
	});
	return newArray;
}

//Task 4
function filter(arr, func){
	let newArray = [];
	forEach(arr, function(el){
		if(func(el) === true){
			newArray.push(el);	
		}
	});
	return newArray;
}

//Task 5
function getAdultAppleLovers(data){
	let inf = map(filter(data, function(el){
		return el.age > 18 && el.favoriteFruit === 'apple';
	}), function(el){
		return el.name;
	});
	return inf;
}

//Task 6
function keys(obj){
	let objKeys = [];
	let key;
	for(key in obj){
		if(key){
			objKeys.push(key);	
		}
	}
	return objKeys;
}

//Task 7
function values(obj){
	let objValues = [];
	let key;
	for(key in obj){
		if(key){
			objValues.push(obj[key]);
		}
	}
	return objValues;
}

//Task 8
function showFormattedDate(date){
	let dayNumber = date.getDate();
	let month = date.toLocaleString('en-us', { month: 'short' });
	let year = date.getFullYear();
	return `It is ${dayNumber} of ${month}, ${year}`;
}