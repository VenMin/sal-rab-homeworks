// Задание №1.1. Оповещение о добавлении в корзину

function addInCartMessage(productName, productPrice){

		let message;
			message = productName;
			message += ' ';
			message += 'за';
			message += ' ';
			message += productPrice;
			message += ' ';
			message += 'теперь в корзине!';

		console.log(message);
}
//Конец решения задания №1.1

// Задание №1.2. Увеличение количества в корзине
function addInCartCountChange(){
		let oldValue =0; 
		let newValue;

		newValue = oldValue;
		newValue ++;
}
// Конец решения задания №1.2

// Задание №1.3. Увеличение суммы в корзине
function addInCartSumChange(difference){
		let oldSum =0;
		let newSum = oldSum + difference;
		let newSumText = newSum + ' ₽';

		newSumText = `${newSum} ₽`; 


}
// Конец решения задания №1.3