/* phone-minus
phone-input
phone-plus
phone-price */
function plusAndMinus(product, price, isBoolean){
   const getInputId = document.getElementById(product +'-input');
   var getNumber = getInputId.value;

   if(isBoolean == true && getNumber < 5){
      getInputId.value = parseInt(getNumber) + 1;
   }else if(isBoolean == false && getNumber > 0 ){
      getInputId.value = parseInt(getNumber) - 1;
   }
   const totalSinglePrice = document.getElementById(product +'-price');
   totalSinglePrice.innerText = parseInt(getInputId.value) * price;

   // Total Amount count
   calculateTotalAmount();
};
// get input field value phone and case
function getInputValue(product){
   const phoneNumber = document.getElementById(product +'-input');
   const phoneValue = phoneNumber.value;
   const phonIntger = parseInt(phoneValue);
   return phonIntger;
}

function calculateTotalAmount(){
   // Total Amount count
/* 
subtotal
tax
total 
*/
   var PhoneTotal = getInputValue('phone') * 1056;
   var caseTotal = getInputValue('case') * 50;
   var AllTotal = PhoneTotal + caseTotal;
   var taxt = AllTotal / 10;
   var TotalAmout = AllTotal + taxt;
   document.getElementById('subtotal').innerText = AllTotal;
   document.getElementById('tax').innerText = taxt;
   document.getElementById('total').innerText = TotalAmout;
      
   

}
// Phone Price set>
document.getElementById('phone-plus').addEventListener('click', function (){
   plusAndMinus('phone', 1056, true)
});
document.getElementById('phone-minus').addEventListener('click', function (){
   plusAndMinus('phone', 1056, false)
});
// case Price set>
/* case-plus
case-input
case-minas
case-price */
document.getElementById('case-plus').addEventListener('click', function (){
   plusAndMinus('case', 50, true)
});
document.getElementById('case-minas').addEventListener('click', function (){
   plusAndMinus('case', 50, false)
});













