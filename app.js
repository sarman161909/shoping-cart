function updateNumber(product,price,incrising){
    const input=document.getElementById(product+'-number');
    let inputNumber=parseInt(input.value);
    if(incrising== true){
        inputNumber=inputNumber + 1;  
    }
    else if ((inputNumber > 0)){
        inputNumber=inputNumber - 1;
    }
    input.value=inputNumber;
    const casetotal=document.getElementById(product+'-total');
    casetotal.innerText=parseInt(inputNumber * price);
}
document.getElementById('case-plus').addEventListener('click', function(){
  updateNumber('case',59,true)
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateNumber('case', 59,false)    
})
document.getElementById('phone-plus').addEventListener('click', function(){
    updateNumber('phone',1219,true)    
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateNumber('phone',1219,false)    
})
