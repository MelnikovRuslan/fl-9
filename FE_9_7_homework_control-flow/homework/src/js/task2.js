// Your code goes herelet

if(confirm('Do you want to play?')){
	const addRange = 1;
	const startPrize = 10;
	const startRange = 5;
	const lastChance = 1;

	let randNumber = Math.floor(Math.random() * startRange + addRange);

	let numberRange = 5; 
	let attempts = 3;
	let prize = startPrize;

	let currentPrize = prize;
	let totalPrize = 0;
	let userNumber = 0;
	
	for(let i = 0; i < attempts; ){
		userNumber = prompt('Please enter number from 0 to'+numberRange+'\n'
		+'Attempts left:'+attempts+'\n' 
		+'Total prize:'+totalPrize+'\n'
		+'Posible prize on current attempts:'+currentPrize, '0');
		if(userNumber === null || userNumber === false){
			if(confirm('Do you want stop the game?')){
				alert(`Thank you for a game. Your prize is: ${totalPrize}`);
				break;	
			}else{
				continue;
			}
		}
		if(Number.isNaN(+userNumber) || /\s/g.test(userNumber) || userNumber === ''){
			alert('Incorrect data, you have to enter a number');
			continue;
		}else{
			userNumber = Number(userNumber);
		}
		if(userNumber === randNumber){
			totalPrize += currentPrize;
			if(confirm(`Congratulation! Your prize is: ${currentPrize} Do you want to continue?’`)){
				attempts = 3;
				prize *= 3;
				currentPrize = prize;
				numberRange *=2;
				randNumber = Math.floor(Math.random() * numberRange + addRange);
				continue;
			}
		}else if (userNumber !== randNumber && attempts !== lastChance){ 
			attempts--;
			currentPrize = Math.floor(currentPrize/2);
			continue;
		}
		alert(`Thank you for a game. Your prize is: ${totalPrize}`);
		if(confirm('Do you want to play again?')){
			attempts = 3;
			prize = startPrize;
			currentPrize = prize;
			numberRange = startRange;
			totalPrize = 0;
			randNumber = Math.floor(Math.random() * startRange + addRange);
		}else{
			break;
		}
	}
}else{
	alert('You did not become a millionaire, but can.');
}
