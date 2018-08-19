// Your code goes here

let price = ~~((+prompt('Please enter price', '0')) * 100) / 100;
let discount = ~~((+prompt('Please enter discount', '0')) * 100) / 100;
let result = '';
if(price > 0 && discount >= 0 && discount <=100 ){
	result = ` Price without discount: ${price}\n Discount: ${discount}%\n`;
	let saved = ~~(price*discount)/100*100/100;
	let priceWithDis = ~~((price - saved) * 100) / 100;
	result = result + ` Price with discount: ${priceWithDis}\n Saved: ${saved}`;
} else{
	result = `Invalid data`;
}
console.log(result);