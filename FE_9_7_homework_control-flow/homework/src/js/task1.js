// Your code goes here
checkLogin(prompt('Pleace enter your login',''));

function checkLogin(login){
	if(login !== null && login !== ''){
		if(login.length >= 4){
			if(login === 'User'){
				checkPassword(prompt('Pleace enter your password',''));
			} else{
				alert('I don’t know you');
			}
		} else {
			alert('I dont know any users having name length less than 4 symbols');
		}
	} else{
		alert('Canceled');
	}
}

function checkPassword(password){
	if(password !== null && password !== ''){
		if(password === 'SuperUser'){
			new Date().getHours() < 20 ? alert('Good day!') : alert('Good evening');
		} else{
			alert('Wrong password');
		}
	} else{
		alert('Canceled');
	}
}
