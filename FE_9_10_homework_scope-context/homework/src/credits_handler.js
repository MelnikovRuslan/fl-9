/* Your code goes here */

function userCard(key){
	let card = {
		key: key,
		balance : 100,
		transactionLimit : 100,
		historyLogs : [],
		getCardOptions : function(){
			return {key:key, 
				balance:this.balance, 
				transactionLimit:this.transactionLimit, 
				historyLogs:this.historyLogs
			};
		},
		putCredits: function(credits){
			this.balance += credits;
			this.historyLogs.push({operationType:'Received credits', 
				credits:credits, 
				operationTime: new Date().toLocaleString('en-GB')
			});
		},
		takeCredits: function(credits){
			if(credits < this.balance){
				this.balance -= credits;
				this.historyLogs.push({operationType:'Withdrawal credits',
					credits:credits, 
					operationTime: new Date().toLocaleString('en-GB')
				});	
			} else {
				console.log('Not enough money on the account');
			}
		},
		setTransactionLimit: function(newlimit){
			this.transactionLimit = newlimit; 
			this.historyLogs.push({operationType:'Transaction limit change',
				credits:newlimit, 
				operationTime: new Date().toLocaleString('en-GB')
			});
		},
		transferCredits: function(transaction, card){ //foix this
			if(transaction < this.transactionLimit && transaction < this.balance){
				let transactionprocent = 0.05;
				let transfer = transactionprocent * transaction + transaction;
				this.balance -= transfer;
				this.historyLogs.push({operationType:'Withdrawal credits', 
					credits:transfer, 
					operationTime: new Date().toLocaleString('en-GB')
				});
			card.putCredits(transaction);	
			} else {
				console.log('Something wrong please check card limit');
			}
		}
	}
	return card;	
}


class UserAccount {
  constructor(name){
  this.name = name;
  this.cards = [];
  }
  addCard(){
  let maxcars = 2;
  if(this.cards.length <= maxcars){
  this.cards.push(userCard(this.cards.length+1));	
  }else{
  console.log('You already have 3 cards');
  }
  }
  getCardByKey(number){
  if(number > this.cards.length || number < 1){
  console.log('Wrong card ID')
  }else{
  return this.cards[number -1];
  }
  }
}


