function getPin(){
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if(pinString.length == 4){
        console.log(pin)
        return pin
    }
    else{
        return getPin()
    }
    
}


function generatePin(){
    
 const pin = getPin();
 document.getElementById('display-pin').value =pin;

}
document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
        
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    
    }
        
    
   
})
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const errorMassage =document.getElementById('fail-notify');
    const successMassage = document.getElementById('success-notify');
    if(pin == typedNumbers){
        successMassage.style.display = 'block';
        errorMassage.style.display = 'none';
    }
    else{
        errorMassage.style.display = 'block';
        successMassage.style.display = 'none';
    }
}
