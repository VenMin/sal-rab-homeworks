
// Задание №2.1. Рассчитать доставку
function countDelivery(productsSum , freeShippingMinSum){
                
		let shippingPrice = 200; 
		let freeShippingMinSum  = 700; 
		
		if( productsSum == 0 || productsSum >= freeShippingMinSum ) 
		{
			shippingSum = 0;
		}
		else shippingSum = shippingPrice;
}
// Конец решения задания №2.1


// Задание №2.2. Увеличение количества в корзине
function addInCartNumber(){
                
		let discountMinSum = 700; 
		let discountPart = 10; 
		let discountPrice; 
		
		if (productsSum >= discountMinSum ) {
			
			discountSum = productsSum * discountPart/100; 
		
		}else 
			discountSum = 0;                

// Конец решения задания №2.2


// Задание №2.3. Увеличение суммы в корзине
		let totalSum;
		let freeShipping;

			totalSum = productsSum;
			totalSum -= discountSum;
			totalSum += shippingSum
			
		freeShipping = Boolean(shippingSum); 
		
// Конец решения задания №2.3
}